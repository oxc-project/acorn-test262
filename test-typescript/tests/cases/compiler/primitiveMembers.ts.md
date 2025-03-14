__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    449
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
            "name": "x",
            "optional": false,
            "range": [
              4,
              5
            ],
            "loc": {
              "end": {
                "column": 5,
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
            "raw": "5",
            "value": 5,
            "range": [
              8,
              9
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 1
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          },
          "range": [
            4,
            9
          ],
          "loc": {
            "end": {
              "column": 9,
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
      "kind": "var",
      "range": [
        0,
        10
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r",
            "optional": false,
            "range": [
              15,
              16
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "/yo/",
            "regex": {
              "flags": "",
              "pattern": "yo"
            },
            "value": null,
            "range": [
              19,
              23
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 2
              },
              "start": {
                "column": 8,
                "line": 2
              }
            }
          },
          "range": [
            15,
            23
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        11,
        24
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "r",
          "optional": false,
          "range": [
            25,
            26
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 3
            },
            "start": {
              "column": 0,
              "line": 3
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "source",
          "optional": false,
          "range": [
            27,
            33
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 3
            },
            "start": {
              "column": 2,
              "line": 3
            }
          }
        },
        "range": [
          25,
          33
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 3
          },
          "start": {
            "column": 0,
            "line": 3
          }
        }
      },
      "range": [
        25,
        34
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              36,
              37
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 5
              },
              "start": {
                "column": 0,
                "line": 5
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toBAZ",
            "optional": false,
            "range": [
              38,
              43
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 5
              },
              "start": {
                "column": 2,
                "line": 5
              }
            }
          },
          "range": [
            36,
            43
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 5
            },
            "start": {
              "column": 0,
              "line": 5
            }
          }
        },
        "optional": false,
        "range": [
          36,
          45
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 5
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "range": [
        36,
        46
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              47,
              48
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 6
              },
              "start": {
                "column": 0,
                "line": 6
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "range": [
              49,
              57
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 6
              },
              "start": {
                "column": 2,
                "line": 6
              }
            }
          },
          "range": [
            47,
            57
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 6
            },
            "start": {
              "column": 0,
              "line": 6
            }
          }
        },
        "optional": false,
        "range": [
          47,
          59
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 6
          },
          "start": {
            "column": 0,
            "line": 6
          }
        }
      },
      "range": [
        47,
        60
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "range": [
              66,
              67
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              70,
              71
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 8
              },
              "start": {
                "column": 8,
                "line": 8
              }
            }
          },
          "range": [
            66,
            71
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 8
            },
            "start": {
              "column": 4,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        62,
        72
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 9
                },
                "start": {
                  "column": 5,
                  "line": 9
                }
              },
              "range": [
                78,
                86
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Number",
                  "optional": false,
                  "range": [
                    80,
                    86
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 9
                    },
                    "start": {
                      "column": 7,
                      "line": 9
                    }
                  }
                },
                "range": [
                  80,
                  86
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 9
                  },
                  "start": {
                    "column": 7,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              77,
              86
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          "init": null,
          "range": [
            77,
            86
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        73,
        87
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "range": [
            89,
            90
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 11
            },
            "start": {
              "column": 0,
              "line": 11
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "N",
          "optional": false,
          "range": [
            93,
            94
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        },
        "range": [
          89,
          94
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        89,
        95
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "N",
          "optional": false,
          "range": [
            151,
            152
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 12
            },
            "start": {
              "column": 0,
              "line": 12
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "range": [
            155,
            156
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 12
            }
          }
        },
        "range": [
          151,
          156
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        151,
        157
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 14
                },
                "start": {
                  "column": 5,
                  "line": 14
                }
              },
              "range": [
                179,
                187
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "range": [
                    181,
                    187
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 14
                    },
                    "start": {
                      "column": 7,
                      "line": 14
                    }
                  }
                },
                "range": [
                  181,
                  187
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 14
                  },
                  "start": {
                    "column": 7,
                    "line": 14
                  }
                }
              }
            },
            "range": [
              178,
              187
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "range": [
              190,
              192
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 14
              },
              "start": {
                "column": 16,
                "line": 14
              }
            }
          },
          "range": [
            178,
            192
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 14
            },
            "start": {
              "column": 4,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        174,
        192
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 15
                },
                "start": {
                  "column": 5,
                  "line": 15
                }
              },
              "range": [
                198,
                208
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "range": [
                    200,
                    208
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 15
                    },
                    "start": {
                      "column": 7,
                      "line": 15
                    }
                  }
                },
                "range": [
                  200,
                  208
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 15
                  },
                  "start": {
                    "column": 7,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              197,
              208
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  226,
                  227
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 15
                  },
                  "start": {
                    "column": 33,
                    "line": 15
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "range": [
                  228,
                  234
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 15
                  },
                  "start": {
                    "column": 35,
                    "line": 15
                  }
                }
              },
              "range": [
                226,
                234
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 15
                },
                "start": {
                  "column": 33,
                  "line": 15
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 15
                    },
                    "start": {
                      "column": 20,
                      "line": 15
                    }
                  },
                  "range": [
                    213,
                    221
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      215,
                      221
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 15
                      },
                      "start": {
                        "column": 22,
                        "line": 15
                      }
                    }
                  }
                },
                "range": [
                  212,
                  221
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 15
                  },
                  "start": {
                    "column": 19,
                    "line": 15
                  }
                }
              }
            ],
            "range": [
              211,
              234
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 15
              },
              "start": {
                "column": 18,
                "line": 15
              }
            }
          },
          "range": [
            197,
            234
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 15
            },
            "start": {
              "column": 4,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        193,
        235
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 16
                },
                "start": {
                  "column": 6,
                  "line": 16
                }
              },
              "range": [
                242,
                250
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RegExp",
                  "optional": false,
                  "range": [
                    244,
                    250
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 16
                    },
                    "start": {
                      "column": 8,
                      "line": 16
                    }
                  }
                },
                "range": [
                  244,
                  250
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 16
                  },
                  "start": {
                    "column": 8,
                    "line": 16
                  }
                }
              }
            },
            "range": [
              240,
              250
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "/./g",
            "regex": {
              "flags": "g",
              "pattern": "."
            },
            "value": null,
            "range": [
              253,
              257
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 16
              },
              "start": {
                "column": 17,
                "line": 16
              }
            }
          },
          "range": [
            240,
            257
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 16
            },
            "start": {
              "column": 4,
              "line": 16
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        236,
        258
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 17
                },
                "start": {
                  "column": 6,
                  "line": 17
                }
              },
              "range": [
                265,
                273
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Number",
                  "optional": false,
                  "range": [
                    267,
                    273
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 17
                    },
                    "start": {
                      "column": 8,
                      "line": 17
                    }
                  }
                },
                "range": [
                  267,
                  273
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 17
                  },
                  "start": {
                    "column": 8,
                    "line": 17
                  }
                }
              }
            },
            "range": [
              263,
              273
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "34",
            "value": 34,
            "range": [
              276,
              278
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 17
              },
              "start": {
                "column": 17,
                "line": 17
              }
            }
          },
          "range": [
            263,
            278
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 17
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        259,
        279
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 18
                },
                "start": {
                  "column": 5,
                  "line": 18
                }
              },
              "range": [
                285,
                293
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "String",
                  "optional": false,
                  "range": [
                    287,
                    293
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 18
                    },
                    "start": {
                      "column": 7,
                      "line": 18
                    }
                  }
                },
                "range": [
                  287,
                  293
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 18
                  },
                  "start": {
                    "column": 7,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              284,
              293
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"yo\"",
            "value": "yo",
            "range": [
              296,
              300
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 18
              },
              "start": {
                "column": 16,
                "line": 18
              }
            }
          },
          "range": [
            284,
            300
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 18
            },
            "start": {
              "column": 4,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        280,
        301
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 19
                },
                "start": {
                  "column": 5,
                  "line": 19
                }
              },
              "range": [
                307,
                316
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Boolean",
                  "optional": false,
                  "range": [
                    309,
                    316
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 19
                    },
                    "start": {
                      "column": 7,
                      "line": 19
                    }
                  }
                },
                "range": [
                  309,
                  316
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 19
                  },
                  "start": {
                    "column": 7,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              306,
              316
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "true",
            "value": true,
            "range": [
              319,
              323
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 19
              },
              "start": {
                "column": 17,
                "line": 19
              }
            }
          },
          "range": [
            306,
            323
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 19
            },
            "start": {
              "column": 4,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        302,
        324
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n3",
            "optional": false,
            "range": [
              330,
              332
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          "init": {
            "type": "LogicalExpression",
            "operator": "||",
            "left": {
              "type": "Literal",
              "raw": "5",
              "value": 5,
              "range": [
                335,
                336
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 21
                },
                "start": {
                  "column": 9,
                  "line": 21
                }
              }
            },
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "range": [
                340,
                342
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 21
                },
                "start": {
                  "column": 14,
                  "line": 21
                }
              }
            },
            "range": [
              335,
              342
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 21
              },
              "start": {
                "column": 9,
                "line": 21
              }
            }
          },
          "range": [
            330,
            342
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 21
            },
            "start": {
              "column": 4,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        326,
        343
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          356,
          383
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                365,
                368
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 24
                },
                "start": {
                  "column": 19,
                  "line": 24
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                368,
                380
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  377,
                  380
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 24
                  },
                  "start": {
                    "column": 31,
                    "line": 24
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 24
                  },
                  "start": {
                    "column": 24,
                    "line": 24
                  }
                },
                "range": [
                  370,
                  376
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    372,
                    376
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 24
                    },
                    "start": {
                      "column": 26,
                      "line": 24
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 34,
                  "line": 24
                },
                "start": {
                  "column": 22,
                  "line": 24
                }
              }
            },
            "range": [
              358,
              380
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 24
              },
              "start": {
                "column": 12,
                "line": 24
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 24
          },
          "start": {
            "column": 10,
            "line": 24
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "baz",
        "optional": false,
        "range": [
          352,
          355
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 24
          },
          "start": {
            "column": 6,
            "line": 24
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        346,
        383
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          406,
          442
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                415,
                418
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 25
                },
                "start": {
                  "column": 31,
                  "line": 25
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                418,
                439
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "range": [
                        429,
                        438
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 25
                        },
                        "start": {
                          "column": 45,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      422,
                      438
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 25
                      },
                      "start": {
                        "column": 38,
                        "line": 25
                      }
                    }
                  }
                ],
                "range": [
                  420,
                  439
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 25
                  },
                  "start": {
                    "column": 36,
                    "line": 25
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 25
                },
                "start": {
                  "column": 34,
                  "line": 25
                }
              }
            },
            "range": [
              408,
              439
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 25
              },
              "start": {
                "column": 24,
                "line": 25
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 25
          },
          "start": {
            "column": 22,
            "line": 25
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          390,
          393
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 25
          },
          "start": {
            "column": 6,
            "line": 25
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "baz",
        "optional": false,
        "range": [
          402,
          405
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 25
          },
          "start": {
            "column": 18,
            "line": 25
          }
        }
      },
      "range": [
        384,
        442
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 31
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
