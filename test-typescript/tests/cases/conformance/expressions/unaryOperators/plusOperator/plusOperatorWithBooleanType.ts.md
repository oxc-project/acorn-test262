__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    30,
    612
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
            "name": "ResultIsNumber1",
            "optional": false,
            "range": [
              251,
              266
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
          },
          "init": {
            "type": "UnaryExpression",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "BOOLEAN",
              "optional": false,
              "range": [
                270,
                277
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 17
                },
                "start": {
                  "column": 23,
                  "line": 17
                }
              }
            },
            "operator": "+",
            "prefix": true,
            "range": [
              269,
              277
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 17
              },
              "start": {
                "column": 22,
                "line": 17
              }
            }
          },
          "range": [
            251,
            277
          ],
          "loc": {
            "end": {
              "column": 30,
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
        278
      ],
      "loc": {
        "end": {
          "column": 31,
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
            "name": "ResultIsNumber2",
            "optional": false,
            "range": [
              308,
              323
            ],
            "loc": {
              "end": {
                "column": 19,
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
                327,
                331
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 20
                },
                "start": {
                  "column": 23,
                  "line": 20
                }
              }
            },
            "operator": "+",
            "prefix": true,
            "range": [
              326,
              331
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 20
              },
              "start": {
                "column": 22,
                "line": 20
              }
            }
          },
          "range": [
            308,
            331
          ],
          "loc": {
            "end": {
              "column": 27,
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
        304,
        332
      ],
      "loc": {
        "end": {
          "column": 28,
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
            "name": "ResultIsNumber3",
            "optional": false,
            "range": [
              337,
              352
            ],
            "loc": {
              "end": {
                "column": 19,
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
                      358,
                      359
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 21
                      },
                      "start": {
                        "column": 25,
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
                      361,
                      365
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 21
                      },
                      "start": {
                        "column": 28,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    358,
                    365
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 21
                    },
                    "start": {
                      "column": 25,
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
                      367,
                      368
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 21
                      },
                      "start": {
                        "column": 34,
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
                      370,
                      375
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 21
                      },
                      "start": {
                        "column": 37,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    367,
                    375
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 21
                    },
                    "start": {
                      "column": 34,
                      "line": 21
                    }
                  }
                }
              ],
              "range": [
                356,
                377
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 21
                },
                "start": {
                  "column": 23,
                  "line": 21
                }
              }
            },
            "operator": "+",
            "prefix": true,
            "range": [
              355,
              377
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 21
              },
              "start": {
                "column": 22,
                "line": 21
              }
            }
          },
          "range": [
            337,
            377
          ],
          "loc": {
            "end": {
              "column": 44,
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
        333,
        378
      ],
      "loc": {
        "end": {
          "column": 45,
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
            "name": "ResultIsNumber4",
            "optional": false,
            "range": [
              412,
              427
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
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "range": [
                  431,
                  435
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 24
                  },
                  "start": {
                    "column": 23,
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
                  436,
                  437
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 24
                  },
                  "start": {
                    "column": 28,
                    "line": 24
                  }
                }
              },
              "range": [
                431,
                437
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 24
                },
                "start": {
                  "column": 23,
                  "line": 24
                }
              }
            },
            "operator": "+",
            "prefix": true,
            "range": [
              430,
              437
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 24
              },
              "start": {
                "column": 22,
                "line": 24
              }
            }
          },
          "range": [
            412,
            437
          ],
          "loc": {
            "end": {
              "column": 29,
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
        408,
        438
      ],
      "loc": {
        "end": {
          "column": 30,
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
            "name": "ResultIsNumber5",
            "optional": false,
            "range": [
              443,
              458
            ],
            "loc": {
              "end": {
                "column": 19,
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
                  462,
                  463
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 25
                  },
                  "start": {
                    "column": 23,
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
                  464,
                  465
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 25
                  },
                  "start": {
                    "column": 25,
                    "line": 25
                  }
                }
              },
              "range": [
                462,
                465
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 25
                },
                "start": {
                  "column": 23,
                  "line": 25
                }
              }
            },
            "operator": "+",
            "prefix": true,
            "range": [
              461,
              465
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 25
              },
              "start": {
                "column": 22,
                "line": 25
              }
            }
          },
          "range": [
            443,
            465
          ],
          "loc": {
            "end": {
              "column": 26,
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
        439,
        466
      ],
      "loc": {
        "end": {
          "column": 27,
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
            "name": "ResultIsNumber6",
            "optional": false,
            "range": [
              471,
              486
            ],
            "loc": {
              "end": {
                "column": 19,
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
                  490,
                  493
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 26
                  },
                  "start": {
                    "column": 23,
                    "line": 26
                  }
                }
              },
              "optional": false,
              "range": [
                490,
                495
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 26
                },
                "start": {
                  "column": 23,
                  "line": 26
                }
              }
            },
            "operator": "+",
            "prefix": true,
            "range": [
              489,
              495
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 26
              },
              "start": {
                "column": 22,
                "line": 26
              }
            }
          },
          "range": [
            471,
            495
          ],
          "loc": {
            "end": {
              "column": 28,
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
        467,
        496
      ],
      "loc": {
        "end": {
          "column": 29,
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
            "name": "ResultIsNumber7",
            "optional": false,
            "range": [
              501,
              516
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
                    520,
                    521
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
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
                  "name": "foo",
                  "optional": false,
                  "range": [
                    522,
                    525
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 27
                    },
                    "start": {
                      "column": 25,
                      "line": 27
                    }
                  }
                },
                "range": [
                  520,
                  525
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 27
                  },
                  "start": {
                    "column": 23,
                    "line": 27
                  }
                }
              },
              "optional": false,
              "range": [
                520,
                527
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 27
                },
                "start": {
                  "column": 23,
                  "line": 27
                }
              }
            },
            "operator": "+",
            "prefix": true,
            "range": [
              519,
              527
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 27
              },
              "start": {
                "column": 22,
                "line": 27
              }
            }
          },
          "range": [
            501,
            527
          ],
          "loc": {
            "end": {
              "column": 30,
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
        497,
        528
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
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
            560,
            564
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 30
            },
            "start": {
              "column": 1,
              "line": 30
            }
          }
        },
        "operator": "+",
        "prefix": true,
        "range": [
          559,
          564
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 30
          },
          "start": {
            "column": 0,
            "line": 30
          }
        }
      },
      "range": [
        559,
        565
      ],
      "loc": {
        "end": {
          "column": 6,
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
          "type": "Identifier",
          "decorators": [],
          "name": "BOOLEAN",
          "optional": false,
          "range": [
            567,
            574
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 31
            },
            "start": {
              "column": 1,
              "line": 31
            }
          }
        },
        "operator": "+",
        "prefix": true,
        "range": [
          566,
          574
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 31
          },
          "start": {
            "column": 0,
            "line": 31
          }
        }
      },
      "range": [
        566,
        575
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
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
              577,
              580
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 32
              },
              "start": {
                "column": 1,
                "line": 32
              }
            }
          },
          "optional": false,
          "range": [
            577,
            582
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 32
            },
            "start": {
              "column": 1,
              "line": 32
            }
          }
        },
        "operator": "+",
        "prefix": true,
        "range": [
          576,
          582
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 32
          },
          "start": {
            "column": 0,
            "line": 32
          }
        }
      },
      "range": [
        576,
        583
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
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
                585,
                589
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
            "operator": "+",
            "prefix": true,
            "range": [
              584,
              589
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
          {
            "type": "Literal",
            "raw": "false",
            "value": false,
            "range": [
              591,
              596
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 33
              },
              "start": {
                "column": 7,
                "line": 33
              }
            }
          }
        ],
        "range": [
          584,
          596
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 33
          },
          "start": {
            "column": 0,
            "line": 33
          }
        }
      },
      "range": [
        584,
        597
      ],
      "loc": {
        "end": {
          "column": 13,
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objA",
            "optional": false,
            "range": [
              599,
              603
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 34
              },
              "start": {
                "column": 1,
                "line": 34
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
              604,
              605
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 34
              },
              "start": {
                "column": 6,
                "line": 34
              }
            }
          },
          "range": [
            599,
            605
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 34
            },
            "start": {
              "column": 1,
              "line": 34
            }
          }
        },
        "operator": "+",
        "prefix": true,
        "range": [
          598,
          605
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 34
          },
          "start": {
            "column": 0,
            "line": 34
          }
        }
      },
      "range": [
        598,
        606
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
              608,
              609
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 35
              },
              "start": {
                "column": 1,
                "line": 35
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
              610,
              611
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 35
              },
              "start": {
                "column": 3,
                "line": 35
              }
            }
          },
          "range": [
            608,
            611
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
        "operator": "+",
        "prefix": true,
        "range": [
          607,
          611
        ],
        "loc": {
          "end": {
            "column": 4,
            "line": 35
          },
          "start": {
            "column": 0,
            "line": 35
          }
        }
      },
      "range": [
        607,
        612
      ],
      "loc": {
        "end": {
          "column": 5,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 5,
      "line": 35
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
