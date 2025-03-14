__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    29,
    841
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
            "name": "STRING",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 2
                },
                "start": {
                  "column": 10,
                  "line": 2
                }
              },
              "range": [
                39,
                47
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  41,
                  47
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 2
                  },
                  "start": {
                    "column": 12,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              33,
              47
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": null,
          "range": [
            33,
            47
          ],
          "loc": {
            "end": {
              "column": 18,
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
        29,
        48
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
            "name": "STRING1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              },
              "range": [
                60,
                70
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "range": [
                    62,
                    68
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 3
                    },
                    "start": {
                      "column": 13,
                      "line": 3
                    }
                  }
                },
                "range": [
                  62,
                  70
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 3
                  },
                  "start": {
                    "column": 13,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              53,
              70
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  74,
                  76
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 3
                  },
                  "start": {
                    "column": 25,
                    "line": 3
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"abc\"",
                "value": "abc",
                "range": [
                  78,
                  83
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 3
                  },
                  "start": {
                    "column": 29,
                    "line": 3
                  }
                }
              }
            ],
            "range": [
              73,
              84
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 3
              },
              "start": {
                "column": 24,
                "line": 3
              }
            }
          },
          "range": [
            53,
            84
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 3
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        49,
        85
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 3
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "raw": "\"abc\"",
              "value": "abc",
              "range": [
                119,
                124
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 5
                },
                "start": {
                  "column": 32,
                  "line": 5
                }
              }
            },
            "range": [
              112,
              125
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 5
              },
              "start": {
                "column": 25,
                "line": 5
              }
            }
          }
        ],
        "range": [
          110,
          127
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 5
          },
          "start": {
            "column": 23,
            "line": 5
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          96,
          99
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 22,
            "line": 5
          },
          "start": {
            "column": 14,
            "line": 5
          }
        },
        "range": [
          101,
          109
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            103,
            109
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 5
            },
            "start": {
              "column": 16,
              "line": 5
            }
          }
        }
      },
      "range": [
        87,
        127
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          137,
          194
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                150,
                151
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 8
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 8
                },
                "start": {
                  "column": 12,
                  "line": 8
                }
              },
              "range": [
                151,
                159
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  153,
                  159
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 8
                  },
                  "start": {
                    "column": 14,
                    "line": 8
                  }
                }
              }
            },
            "value": null,
            "range": [
              143,
              160
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                172,
                175
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 9
                },
                "start": {
                  "column": 11,
                  "line": 9
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                175,
                192
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"\"",
                      "value": "",
                      "range": [
                        187,
                        189
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 9
                        },
                        "start": {
                          "column": 26,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      180,
                      190
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 9
                      },
                      "start": {
                        "column": 19,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  178,
                  192
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 9
                  },
                  "start": {
                    "column": 17,
                    "line": 9
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
                  "column": 31,
                  "line": 9
                },
                "start": {
                  "column": 14,
                  "line": 9
                }
              }
            },
            "range": [
              165,
              192
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 8,
            "line": 7
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          135,
          136
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 7
          },
          "start": {
            "column": 6,
            "line": 7
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        129,
        194
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              210,
              231
            ],
            "attributes": [],
            "declaration": {
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
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 12
                        },
                        "start": {
                          "column": 16,
                          "line": 12
                        }
                      },
                      "range": [
                        222,
                        230
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          224,
                          230
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 12
                          },
                          "start": {
                            "column": 18,
                            "line": 12
                          }
                        }
                      }
                    },
                    "range": [
                      221,
                      230
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 12
                      },
                      "start": {
                        "column": 15,
                        "line": 12
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    221,
                    230
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 12
                    },
                    "start": {
                      "column": 15,
                      "line": 12
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                217,
                231
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 12
                },
                "start": {
                  "column": 11,
                  "line": 12
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 25,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "range": [
          204,
          233
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 9,
            "line": 11
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          202,
          203
        ],
        "decorators": [],
        "name": "M",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
            "line": 11
          },
          "start": {
            "column": 7,
            "line": 11
          }
        }
      },
      "kind": "module",
      "range": [
        195,
        233
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 11
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
            "name": "objA",
            "optional": false,
            "range": [
              239,
              243
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                250,
                251
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 15
                },
                "start": {
                  "column": 15,
                  "line": 15
                }
              }
            },
            "range": [
              246,
              253
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 15
              },
              "start": {
                "column": 11,
                "line": 15
              }
            }
          },
          "range": [
            239,
            253
          ],
          "loc": {
            "end": {
              "column": 18,
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
        235,
        254
      ],
      "loc": {
        "end": {
          "column": 19,
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
            "name": "ResultIsNumber1",
            "optional": false,
            "range": [
              279,
              294
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "STRING",
              "optional": false,
              "range": [
                298,
                304
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 18
                },
                "start": {
                  "column": 23,
                  "line": 18
                }
              }
            },
            "operator": "-",
            "prefix": true,
            "range": [
              297,
              304
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 18
              },
              "start": {
                "column": 22,
                "line": 18
              }
            }
          },
          "range": [
            279,
            304
          ],
          "loc": {
            "end": {
              "column": 29,
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
        275,
        305
      ],
      "loc": {
        "end": {
          "column": 30,
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
            "name": "ResultIsNumber2",
            "optional": false,
            "range": [
              310,
              325
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "STRING1",
              "optional": false,
              "range": [
                329,
                336
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 19
                },
                "start": {
                  "column": 23,
                  "line": 19
                }
              }
            },
            "operator": "-",
            "prefix": true,
            "range": [
              328,
              336
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 19
              },
              "start": {
                "column": 22,
                "line": 19
              }
            }
          },
          "range": [
            310,
            336
          ],
          "loc": {
            "end": {
              "column": 30,
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
        306,
        337
      ],
      "loc": {
        "end": {
          "column": 31,
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
            "name": "ResultIsNumber3",
            "optional": false,
            "range": [
              366,
              381
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "Literal",
              "raw": "\"\"",
              "value": "",
              "range": [
                385,
                387
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 22
                },
                "start": {
                  "column": 23,
                  "line": 22
                }
              }
            },
            "operator": "-",
            "prefix": true,
            "range": [
              384,
              387
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 22
              },
              "start": {
                "column": 22,
                "line": 22
              }
            }
          },
          "range": [
            366,
            387
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 22
            },
            "start": {
              "column": 4,
              "line": 22
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        362,
        388
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
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
            "name": "ResultIsNumber4",
            "optional": false,
            "range": [
              393,
              408
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      414,
                      415
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 23
                      },
                      "start": {
                        "column": 25,
                        "line": 23
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "\"\"",
                    "value": "",
                    "range": [
                      417,
                      419
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 23
                      },
                      "start": {
                        "column": 28,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    414,
                    419
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 23
                    },
                    "start": {
                      "column": 25,
                      "line": 23
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      421,
                      422
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 23
                      },
                      "start": {
                        "column": 32,
                        "line": 23
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "\"\"",
                    "value": "",
                    "range": [
                      424,
                      426
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 23
                      },
                      "start": {
                        "column": 35,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    421,
                    426
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 23
                    },
                    "start": {
                      "column": 32,
                      "line": 23
                    }
                  }
                }
              ],
              "range": [
                412,
                428
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 23
                },
                "start": {
                  "column": 23,
                  "line": 23
                }
              }
            },
            "operator": "-",
            "prefix": true,
            "range": [
              411,
              428
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 23
              },
              "start": {
                "column": 22,
                "line": 23
              }
            }
          },
          "range": [
            393,
            428
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 23
            },
            "start": {
              "column": 4,
              "line": 23
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        389,
        429
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
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
            "name": "ResultIsNumber5",
            "optional": false,
            "range": [
              434,
              449
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      455,
                      456
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 24
                      },
                      "start": {
                        "column": 25,
                        "line": 24
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "\"\"",
                    "value": "",
                    "range": [
                      458,
                      460
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 24
                      },
                      "start": {
                        "column": 28,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    455,
                    460
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 24
                    },
                    "start": {
                      "column": 25,
                      "line": 24
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      462,
                      463
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 24
                      },
                      "start": {
                        "column": 32,
                        "line": 24
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "range": [
                              489,
                              490
                            ],
                            "loc": {
                              "end": {
                                "column": 60,
                                "line": 24
                              },
                              "start": {
                                "column": 59,
                                "line": 24
                              }
                            }
                          },
                          "range": [
                            482,
                            491
                          ],
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 24
                            },
                            "start": {
                              "column": 52,
                              "line": 24
                            }
                          }
                        }
                      ],
                      "range": [
                        480,
                        493
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 24
                        },
                        "start": {
                          "column": 50,
                          "line": 24
                        }
                      }
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 24
                            },
                            "start": {
                              "column": 37,
                              "line": 24
                            }
                          },
                          "range": [
                            467,
                            475
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              469,
                              475
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 24
                              },
                              "start": {
                                "column": 39,
                                "line": 24
                              }
                            }
                          }
                        },
                        "range": [
                          466,
                          475
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 24
                          },
                          "start": {
                            "column": 36,
                            "line": 24
                          }
                        }
                      }
                    ],
                    "range": [
                      465,
                      493
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 24
                      },
                      "start": {
                        "column": 35,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    462,
                    493
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 24
                    },
                    "start": {
                      "column": 32,
                      "line": 24
                    }
                  }
                }
              ],
              "range": [
                453,
                495
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 24
                },
                "start": {
                  "column": 23,
                  "line": 24
                }
              }
            },
            "operator": "-",
            "prefix": true,
            "range": [
              452,
              495
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 24
              },
              "start": {
                "column": 22,
                "line": 24
              }
            }
          },
          "range": [
            434,
            495
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 24
            },
            "start": {
              "column": 4,
              "line": 24
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        430,
        496
      ],
      "loc": {
        "end": {
          "column": 66,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
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
            "name": "ResultIsNumber6",
            "optional": false,
            "range": [
              529,
              544
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "range": [
                  548,
                  552
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 27
                  },
                  "start": {
                    "column": 23,
                    "line": 27
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  553,
                  554
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 27
                  },
                  "start": {
                    "column": 28,
                    "line": 27
                  }
                }
              },
              "range": [
                548,
                554
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 27
                },
                "start": {
                  "column": 23,
                  "line": 27
                }
              }
            },
            "operator": "-",
            "prefix": true,
            "range": [
              547,
              554
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 27
              },
              "start": {
                "column": 22,
                "line": 27
              }
            }
          },
          "range": [
            529,
            554
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 27
            },
            "start": {
              "column": 4,
              "line": 27
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        525,
        555
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
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
            "name": "ResultIsNumber7",
            "optional": false,
            "range": [
              560,
              575
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "range": [
                  579,
                  580
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 28
                  },
                  "start": {
                    "column": 23,
                    "line": 28
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "range": [
                  581,
                  582
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 28
                  },
                  "start": {
                    "column": 25,
                    "line": 28
                  }
                }
              },
              "range": [
                579,
                582
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 28
                },
                "start": {
                  "column": 23,
                  "line": 28
                }
              }
            },
            "operator": "-",
            "prefix": true,
            "range": [
              578,
              582
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 28
              },
              "start": {
                "column": 22,
                "line": 28
              }
            }
          },
          "range": [
            560,
            582
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 28
            },
            "start": {
              "column": 4,
              "line": 28
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        556,
        583
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
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
            "name": "ResultIsNumber8",
            "optional": false,
            "range": [
              588,
              603
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING1",
                "optional": false,
                "range": [
                  607,
                  614
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 29
                  },
                  "start": {
                    "column": 23,
                    "line": 29
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  615,
                  616
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 29
                  },
                  "start": {
                    "column": 31,
                    "line": 29
                  }
                }
              },
              "range": [
                607,
                617
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 29
                },
                "start": {
                  "column": 23,
                  "line": 29
                }
              }
            },
            "operator": "-",
            "prefix": true,
            "range": [
              606,
              617
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 29
              },
              "start": {
                "column": 22,
                "line": 29
              }
            }
          },
          "range": [
            588,
            617
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 29
            },
            "start": {
              "column": 4,
              "line": 29
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        584,
        618
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
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
            "name": "ResultIsNumber9",
            "optional": false,
            "range": [
              623,
              638
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  642,
                  645
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 30
                  },
                  "start": {
                    "column": 23,
                    "line": 30
                  }
                }
              },
              "optional": false,
              "range": [
                642,
                647
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 30
                },
                "start": {
                  "column": 23,
                  "line": 30
                }
              }
            },
            "operator": "-",
            "prefix": true,
            "range": [
              641,
              647
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 30
              },
              "start": {
                "column": 22,
                "line": 30
              }
            }
          },
          "range": [
            623,
            647
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 30
            },
            "start": {
              "column": 4,
              "line": 30
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        619,
        648
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
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
            "name": "ResultIsNumber10",
            "optional": false,
            "range": [
              653,
              669
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    673,
                    674
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 31
                    },
                    "start": {
                      "column": 24,
                      "line": 31
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    675,
                    678
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 31
                    },
                    "start": {
                      "column": 26,
                      "line": 31
                    }
                  }
                },
                "range": [
                  673,
                  678
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 31
                  },
                  "start": {
                    "column": 24,
                    "line": 31
                  }
                }
              },
              "optional": false,
              "range": [
                673,
                680
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 31
                },
                "start": {
                  "column": 24,
                  "line": 31
                }
              }
            },
            "operator": "-",
            "prefix": true,
            "range": [
              672,
              680
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 31
              },
              "start": {
                "column": 23,
                "line": 31
              }
            }
          },
          "range": [
            653,
            680
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 31
            },
            "start": {
              "column": 4,
              "line": 31
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        649,
        681
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
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
            "name": "ResultIsNumber11",
            "optional": false,
            "range": [
              686,
              702
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "range": [
                  707,
                  713
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 32
                  },
                  "start": {
                    "column": 25,
                    "line": 32
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "range": [
                  716,
                  722
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 32
                  },
                  "start": {
                    "column": 34,
                    "line": 32
                  }
                }
              },
              "range": [
                707,
                722
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 32
                },
                "start": {
                  "column": 25,
                  "line": 32
                }
              }
            },
            "operator": "-",
            "prefix": true,
            "range": [
              705,
              723
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 32
              },
              "start": {
                "column": 23,
                "line": 32
              }
            }
          },
          "range": [
            686,
            723
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 32
            },
            "start": {
              "column": 4,
              "line": 32
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        682,
        724
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
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
            "name": "ResultIsNumber12",
            "optional": false,
            "range": [
              729,
              745
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    763,
                    764
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 33
                    },
                    "start": {
                      "column": 38,
                      "line": 33
                    }
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "STRING",
                  "optional": false,
                  "range": [
                    749,
                    755
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 33
                    },
                    "start": {
                      "column": 24,
                      "line": 33
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "charAt",
                  "optional": false,
                  "range": [
                    756,
                    762
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 33
                    },
                    "start": {
                      "column": 31,
                      "line": 33
                    }
                  }
                },
                "range": [
                  749,
                  762
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 33
                  },
                  "start": {
                    "column": 24,
                    "line": 33
                  }
                }
              },
              "optional": false,
              "range": [
                749,
                765
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 33
                },
                "start": {
                  "column": 24,
                  "line": 33
                }
              }
            },
            "operator": "-",
            "prefix": true,
            "range": [
              748,
              765
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 33
              },
              "start": {
                "column": 23,
                "line": 33
              }
            }
          },
          "range": [
            729,
            765
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 33
            },
            "start": {
              "column": 4,
              "line": 33
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        725,
        766
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "Literal",
          "raw": "\"\"",
          "value": "",
          "range": [
            798,
            800
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 36
            },
            "start": {
              "column": 1,
              "line": 36
            }
          }
        },
        "operator": "-",
        "prefix": true,
        "range": [
          797,
          800
        ],
        "loc": {
          "end": {
            "column": 3,
            "line": 36
          },
          "start": {
            "column": 0,
            "line": 36
          }
        }
      },
      "range": [
        797,
        801
      ],
      "loc": {
        "end": {
          "column": 4,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 36
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "STRING",
          "optional": false,
          "range": [
            803,
            809
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 37
            },
            "start": {
              "column": 1,
              "line": 37
            }
          }
        },
        "operator": "-",
        "prefix": true,
        "range": [
          802,
          809
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 37
          },
          "start": {
            "column": 0,
            "line": 37
          }
        }
      },
      "range": [
        802,
        810
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "STRING1",
          "optional": false,
          "range": [
            812,
            819
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 38
            },
            "start": {
              "column": 1,
              "line": 38
            }
          }
        },
        "operator": "-",
        "prefix": true,
        "range": [
          811,
          819
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 38
          },
          "start": {
            "column": 0,
            "line": 38
          }
        }
      },
      "range": [
        811,
        820
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              822,
              825
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 39
              },
              "start": {
                "column": 1,
                "line": 39
              }
            }
          },
          "optional": false,
          "range": [
            822,
            827
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 39
            },
            "start": {
              "column": 1,
              "line": 39
            }
          }
        },
        "operator": "-",
        "prefix": true,
        "range": [
          821,
          827
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 39
          },
          "start": {
            "column": 0,
            "line": 39
          }
        }
      },
      "range": [
        821,
        828
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "argument": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "range": [
                  830,
                  834
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 40
                  },
                  "start": {
                    "column": 1,
                    "line": 40
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  835,
                  836
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 40
                  },
                  "start": {
                    "column": 6,
                    "line": 40
                  }
                }
              },
              "range": [
                830,
                836
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 40
                },
                "start": {
                  "column": 1,
                  "line": 40
                }
              }
            },
            "operator": "-",
            "prefix": true,
            "range": [
              829,
              836
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 40
              },
              "start": {
                "column": 0,
                "line": 40
              }
            }
          },
          {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "range": [
                837,
                838
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 40
                },
                "start": {
                  "column": 8,
                  "line": 40
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "range": [
                839,
                840
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 40
                },
                "start": {
                  "column": 10,
                  "line": 40
                }
              }
            },
            "range": [
              837,
              840
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 40
              },
              "start": {
                "column": 8,
                "line": 40
              }
            }
          }
        ],
        "range": [
          829,
          840
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 40
          },
          "start": {
            "column": 0,
            "line": 40
          }
        }
      },
      "range": [
        829,
        841
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 12,
      "line": 40
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
