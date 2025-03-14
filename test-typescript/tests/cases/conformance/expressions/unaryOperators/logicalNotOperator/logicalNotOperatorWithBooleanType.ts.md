__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    30,
    677
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
            "name": "BOOLEAN",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              },
              "range": [
                41,
                50
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  43,
                  50
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 2
                  },
                  "start": {
                    "column": 13,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              34,
              50
            ],
            "loc": {
              "end": {
                "column": 20,
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
            34,
            50
          ],
          "loc": {
            "end": {
              "column": 20,
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
        30,
        51
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
              "raw": "true",
              "value": true,
              "range": [
                86,
                90
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 4
                },
                "start": {
                  "column": 33,
                  "line": 4
                }
              }
            },
            "range": [
              79,
              91
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 4
              },
              "start": {
                "column": 26,
                "line": 4
              }
            }
          }
        ],
        "range": [
          77,
          93
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 4
          },
          "start": {
            "column": 24,
            "line": 4
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
          62,
          65
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 4
          },
          "start": {
            "column": 9,
            "line": 4
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 23,
            "line": 4
          },
          "start": {
            "column": 14,
            "line": 4
          }
        },
        "range": [
          67,
          76
        ],
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "range": [
            69,
            76
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 4
            },
            "start": {
              "column": 16,
              "line": 4
            }
          }
        }
      },
      "range": [
        53,
        93
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          103,
          164
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
                116,
                117
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 7
                },
                "start": {
                  "column": 11,
                  "line": 7
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
                  "column": 21,
                  "line": 7
                },
                "start": {
                  "column": 12,
                  "line": 7
                }
              },
              "range": [
                117,
                126
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  119,
                  126
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 7
                  },
                  "start": {
                    "column": 14,
                    "line": 7
                  }
                }
              }
            },
            "value": null,
            "range": [
              109,
              127
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
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
                139,
                142
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 8
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
                142,
                162
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "false",
                      "value": false,
                      "range": [
                        154,
                        159
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 8
                        },
                        "start": {
                          "column": 26,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      147,
                      160
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 8
                      },
                      "start": {
                        "column": 19,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  145,
                  162
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 8
                  },
                  "start": {
                    "column": 17,
                    "line": 8
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
                  "column": 34,
                  "line": 8
                },
                "start": {
                  "column": 14,
                  "line": 8
                }
              }
            },
            "range": [
              132,
              162
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 8,
            "line": 6
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
          101,
          102
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 6
          },
          "start": {
            "column": 6,
            "line": 6
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        95,
        164
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 6
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
              180,
              202
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
                          "column": 25,
                          "line": 11
                        },
                        "start": {
                          "column": 16,
                          "line": 11
                        }
                      },
                      "range": [
                        192,
                        201
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          194,
                          201
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 11
                          },
                          "start": {
                            "column": 18,
                            "line": 11
                          }
                        }
                      }
                    },
                    "range": [
                      191,
                      201
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 11
                      },
                      "start": {
                        "column": 15,
                        "line": 11
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    191,
                    201
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 11
                    },
                    "start": {
                      "column": 15,
                      "line": 11
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                187,
                202
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 11
                },
                "start": {
                  "column": 11,
                  "line": 11
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 26,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "range": [
          174,
          204
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 9,
            "line": 10
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          172,
          173
        ],
        "decorators": [],
        "name": "M",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
            "line": 10
          },
          "start": {
            "column": 7,
            "line": 10
          }
        }
      },
      "kind": "module",
      "range": [
        165,
        204
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 10
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
              210,
              214
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
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
                221,
                222
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 14
                },
                "start": {
                  "column": 15,
                  "line": 14
                }
              }
            },
            "range": [
              217,
              224
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 14
              },
              "start": {
                "column": 11,
                "line": 14
              }
            }
          },
          "range": [
            210,
            224
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
        206,
        225
      ],
      "loc": {
        "end": {
          "column": 19,
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
            "name": "ResultIsBoolean1",
            "optional": false,
            "range": [
              251,
              267
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "BOOLEAN",
              "optional": false,
              "range": [
                271,
                278
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 17
                },
                "start": {
                  "column": 24,
                  "line": 17
                }
              }
            },
            "operator": "!",
            "prefix": true,
            "range": [
              270,
              278
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 17
              },
              "start": {
                "column": 23,
                "line": 17
              }
            }
          },
          "range": [
            251,
            278
          ],
          "loc": {
            "end": {
              "column": 31,
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
        247,
        279
      ],
      "loc": {
        "end": {
          "column": 32,
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
            "name": "ResultIsBoolean2",
            "optional": false,
            "range": [
              309,
              325
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                329,
                333
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 20
                },
                "start": {
                  "column": 24,
                  "line": 20
                }
              }
            },
            "operator": "!",
            "prefix": true,
            "range": [
              328,
              333
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 20
              },
              "start": {
                "column": 23,
                "line": 20
              }
            }
          },
          "range": [
            309,
            333
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 20
            },
            "start": {
              "column": 4,
              "line": 20
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        305,
        334
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
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
            "name": "ResultIsBoolean3",
            "optional": false,
            "range": [
              339,
              355
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
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
                      361,
                      362
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 21
                      },
                      "start": {
                        "column": 26,
                        "line": 21
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      364,
                      368
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 21
                      },
                      "start": {
                        "column": 29,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    361,
                    368
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 21
                    },
                    "start": {
                      "column": 26,
                      "line": 21
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
                      370,
                      371
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 21
                      },
                      "start": {
                        "column": 35,
                        "line": 21
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "false",
                    "value": false,
                    "range": [
                      373,
                      378
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 21
                      },
                      "start": {
                        "column": 38,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    370,
                    378
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 21
                    },
                    "start": {
                      "column": 35,
                      "line": 21
                    }
                  }
                }
              ],
              "range": [
                359,
                380
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 21
                },
                "start": {
                  "column": 24,
                  "line": 21
                }
              }
            },
            "operator": "!",
            "prefix": true,
            "range": [
              358,
              380
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 21
              },
              "start": {
                "column": 23,
                "line": 21
              }
            }
          },
          "range": [
            339,
            380
          ],
          "loc": {
            "end": {
              "column": 45,
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
        335,
        381
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
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
            "name": "ResultIsBoolean4",
            "optional": false,
            "range": [
              415,
              431
            ],
            "loc": {
              "end": {
                "column": 20,
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
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "range": [
                  435,
                  439
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 24
                  },
                  "start": {
                    "column": 24,
                    "line": 24
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
                  440,
                  441
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 24
                  },
                  "start": {
                    "column": 29,
                    "line": 24
                  }
                }
              },
              "range": [
                435,
                441
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 24
                },
                "start": {
                  "column": 24,
                  "line": 24
                }
              }
            },
            "operator": "!",
            "prefix": true,
            "range": [
              434,
              441
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 24
              },
              "start": {
                "column": 23,
                "line": 24
              }
            }
          },
          "range": [
            415,
            441
          ],
          "loc": {
            "end": {
              "column": 30,
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
        411,
        442
      ],
      "loc": {
        "end": {
          "column": 31,
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
            "name": "ResultIsBoolean5",
            "optional": false,
            "range": [
              447,
              463
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
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
                  467,
                  468
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 25
                  },
                  "start": {
                    "column": 24,
                    "line": 25
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
                  469,
                  470
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 25
                  },
                  "start": {
                    "column": 26,
                    "line": 25
                  }
                }
              },
              "range": [
                467,
                470
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 25
                },
                "start": {
                  "column": 24,
                  "line": 25
                }
              }
            },
            "operator": "!",
            "prefix": true,
            "range": [
              466,
              470
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 25
              },
              "start": {
                "column": 23,
                "line": 25
              }
            }
          },
          "range": [
            447,
            470
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 25
            },
            "start": {
              "column": 4,
              "line": 25
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        443,
        471
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
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
            "name": "ResultIsBoolean6",
            "optional": false,
            "range": [
              476,
              492
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
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
                  496,
                  499
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 26
                  },
                  "start": {
                    "column": 24,
                    "line": 26
                  }
                }
              },
              "optional": false,
              "range": [
                496,
                501
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 26
                },
                "start": {
                  "column": 24,
                  "line": 26
                }
              }
            },
            "operator": "!",
            "prefix": true,
            "range": [
              495,
              501
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 26
              },
              "start": {
                "column": 23,
                "line": 26
              }
            }
          },
          "range": [
            476,
            501
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 26
            },
            "start": {
              "column": 4,
              "line": 26
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        472,
        502
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
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
            "name": "ResultIsBoolean7",
            "optional": false,
            "range": [
              507,
              523
            ],
            "loc": {
              "end": {
                "column": 20,
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
                    527,
                    528
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 27
                    },
                    "start": {
                      "column": 24,
                      "line": 27
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
                    529,
                    532
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 27
                    },
                    "start": {
                      "column": 26,
                      "line": 27
                    }
                  }
                },
                "range": [
                  527,
                  532
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 27
                  },
                  "start": {
                    "column": 24,
                    "line": 27
                  }
                }
              },
              "optional": false,
              "range": [
                527,
                534
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 27
                },
                "start": {
                  "column": 24,
                  "line": 27
                }
              }
            },
            "operator": "!",
            "prefix": true,
            "range": [
              526,
              534
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 27
              },
              "start": {
                "column": 23,
                "line": 27
              }
            }
          },
          "range": [
            507,
            534
          ],
          "loc": {
            "end": {
              "column": 31,
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
        503,
        535
      ],
      "loc": {
        "end": {
          "column": 32,
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
            "name": "ResultIsBoolean",
            "optional": false,
            "range": [
              565,
              580
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
              "type": "UnaryExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "BOOLEAN",
                "optional": false,
                "range": [
                  585,
                  592
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 30
                  },
                  "start": {
                    "column": 24,
                    "line": 30
                  }
                }
              },
              "operator": "!",
              "prefix": true,
              "range": [
                584,
                592
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 30
                },
                "start": {
                  "column": 23,
                  "line": 30
                }
              }
            },
            "operator": "!",
            "prefix": true,
            "range": [
              583,
              592
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 30
              },
              "start": {
                "column": 22,
                "line": 30
              }
            }
          },
          "range": [
            565,
            592
          ],
          "loc": {
            "end": {
              "column": 31,
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
        561,
        593
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "Literal",
          "raw": "true",
          "value": true,
          "range": [
            625,
            629
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 33
            },
            "start": {
              "column": 1,
              "line": 33
            }
          }
        },
        "operator": "!",
        "prefix": true,
        "range": [
          624,
          629
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 33
          },
          "start": {
            "column": 0,
            "line": 33
          }
        }
      },
      "range": [
        624,
        630
      ],
      "loc": {
        "end": {
          "column": 6,
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
          "type": "Identifier",
          "decorators": [],
          "name": "BOOLEAN",
          "optional": false,
          "range": [
            632,
            639
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 34
            },
            "start": {
              "column": 1,
              "line": 34
            }
          }
        },
        "operator": "!",
        "prefix": true,
        "range": [
          631,
          639
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 34
          },
          "start": {
            "column": 0,
            "line": 34
          }
        }
      },
      "range": [
        631,
        640
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
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
              642,
              645
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 35
              },
              "start": {
                "column": 1,
                "line": 35
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
              "column": 6,
              "line": 35
            },
            "start": {
              "column": 1,
              "line": 35
            }
          }
        },
        "operator": "!",
        "prefix": true,
        "range": [
          641,
          647
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 35
          },
          "start": {
            "column": 0,
            "line": 35
          }
        }
      },
      "range": [
        641,
        648
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
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
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                650,
                654
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 36
                },
                "start": {
                  "column": 1,
                  "line": 36
                }
              }
            },
            "operator": "!",
            "prefix": true,
            "range": [
              649,
              654
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 36
              },
              "start": {
                "column": 0,
                "line": 36
              }
            }
          },
          {
            "type": "Literal",
            "raw": "false",
            "value": false,
            "range": [
              656,
              661
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 36
              },
              "start": {
                "column": 7,
                "line": 36
              }
            }
          }
        ],
        "range": [
          649,
          661
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 36
          },
          "start": {
            "column": 0,
            "line": 36
          }
        }
      },
      "range": [
        649,
        662
      ],
      "loc": {
        "end": {
          "column": 13,
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objA",
            "optional": false,
            "range": [
              664,
              668
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 37
              },
              "start": {
                "column": 1,
                "line": 37
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
              669,
              670
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 37
              },
              "start": {
                "column": 6,
                "line": 37
              }
            }
          },
          "range": [
            664,
            670
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
        "operator": "!",
        "prefix": true,
        "range": [
          663,
          670
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
        663,
        671
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "range": [
              673,
              674
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 38
              },
              "start": {
                "column": 1,
                "line": 38
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
              675,
              676
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 38
              },
              "start": {
                "column": 3,
                "line": 38
              }
            }
          },
          "range": [
            673,
            676
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 38
            },
            "start": {
              "column": 1,
              "line": 38
            }
          }
        },
        "operator": "!",
        "prefix": true,
        "range": [
          672,
          676
        ],
        "loc": {
          "end": {
            "column": 4,
            "line": 38
          },
          "start": {
            "column": 0,
            "line": 38
          }
        }
      },
      "range": [
        672,
        677
      ],
      "loc": {
        "end": {
          "column": 5,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 5,
      "line": 38
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
