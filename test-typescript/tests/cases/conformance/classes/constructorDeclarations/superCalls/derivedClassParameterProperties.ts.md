__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    94,
    1512
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          105,
          123
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                111,
                112
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
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
                  "column": 13,
                  "line": 4
                },
                "start": {
                  "column": 5,
                  "line": 4
                }
              },
              "range": [
                112,
                120
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  114,
                  120
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 4
                  },
                  "start": {
                    "column": 7,
                    "line": 4
                  }
                }
              }
            },
            "value": null,
            "range": [
              111,
              121
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 11,
            "line": 3
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          100,
          104
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 3
          },
          "start": {
            "column": 6,
            "line": 3
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        94,
        123
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          152,
          226
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                158,
                169
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
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
                169,
                224
              ],
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            195,
                            196
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 9
                            },
                            "start": {
                              "column": 12,
                              "line": 9
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            199,
                            200
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 9
                            },
                            "start": {
                              "column": 16,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          195,
                          200
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 9
                          },
                          "start": {
                            "column": 12,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      191,
                      201
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "range": [
                          210,
                          215
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 10
                          },
                          "start": {
                            "column": 8,
                            "line": 10
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        210,
                        217
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 10
                        },
                        "start": {
                          "column": 8,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      210,
                      218
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 10
                      },
                      "start": {
                        "column": 8,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  181,
                  224
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 11
                  },
                  "start": {
                    "column": 27,
                    "line": 8
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 8
                      },
                      "start": {
                        "column": 17,
                        "line": 8
                      }
                    },
                    "range": [
                      171,
                      179
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        173,
                        179
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 8
                        },
                        "start": {
                          "column": 19,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    170,
                    179
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 8
                    },
                    "start": {
                      "column": 16,
                      "line": 8
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 11
                },
                "start": {
                  "column": 15,
                  "line": 8
                }
              }
            },
            "range": [
              158,
              224
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 11
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
            "line": 12
          },
          "start": {
            "column": 27,
            "line": 7
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "range": [
          131,
          138
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 7
          },
          "start": {
            "column": 6,
            "line": 7
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          147,
          151
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 7
          },
          "start": {
            "column": 22,
            "line": 7
          }
        }
      },
      "range": [
        125,
        226
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          256,
          337
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                262,
                273
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
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
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                273,
                335
              ],
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            306,
                            307
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 16
                            },
                            "start": {
                              "column": 12,
                              "line": 16
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            310,
                            311
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 16
                            },
                            "start": {
                              "column": 16,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          306,
                          311
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 16
                          },
                          "start": {
                            "column": 12,
                            "line": 16
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      302,
                      312
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 16
                      },
                      "start": {
                        "column": 8,
                        "line": 16
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "range": [
                          321,
                          326
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 17
                          },
                          "start": {
                            "column": 8,
                            "line": 17
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        321,
                        328
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 17
                        },
                        "start": {
                          "column": 8,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      321,
                      329
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 17
                      },
                      "start": {
                        "column": 8,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  292,
                  335
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 18
                  },
                  "start": {
                    "column": 34,
                    "line": 15
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 15
                        },
                        "start": {
                          "column": 24,
                          "line": 15
                        }
                      },
                      "range": [
                        282,
                        290
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          284,
                          290
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 15
                          },
                          "start": {
                            "column": 26,
                            "line": 15
                          }
                        }
                      }
                    },
                    "range": [
                      281,
                      290
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 15
                      },
                      "start": {
                        "column": 23,
                        "line": 15
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    274,
                    290
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 15
                    },
                    "start": {
                      "column": 16,
                      "line": 15
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 18
                },
                "start": {
                  "column": 15,
                  "line": 15
                }
              }
            },
            "range": [
              262,
              335
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 28,
            "line": 14
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "range": [
          234,
          242
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 14
          },
          "start": {
            "column": 6,
            "line": 14
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          251,
          255
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 14
          },
          "start": {
            "column": 23,
            "line": 14
          }
        }
      },
      "range": [
        228,
        337
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          367,
          448
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                373,
                384
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 22
                },
                "start": {
                  "column": 4,
                  "line": 22
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
                384,
                446
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "range": [
                          413,
                          418
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 23
                          },
                          "start": {
                            "column": 8,
                            "line": 23
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        413,
                        420
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 23
                        },
                        "start": {
                          "column": 8,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      413,
                      421
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 23
                      },
                      "start": {
                        "column": 8,
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            434,
                            435
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 24
                            },
                            "start": {
                              "column": 12,
                              "line": 24
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            438,
                            439
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 24
                            },
                            "start": {
                              "column": 16,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          434,
                          439
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 24
                          },
                          "start": {
                            "column": 12,
                            "line": 24
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      430,
                      440
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 24
                      },
                      "start": {
                        "column": 8,
                        "line": 24
                      }
                    }
                  }
                ],
                "range": [
                  403,
                  446
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 25
                  },
                  "start": {
                    "column": 34,
                    "line": 22
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 22
                        },
                        "start": {
                          "column": 24,
                          "line": 22
                        }
                      },
                      "range": [
                        393,
                        401
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          395,
                          401
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 22
                          },
                          "start": {
                            "column": 26,
                            "line": 22
                          }
                        }
                      }
                    },
                    "range": [
                      392,
                      401
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 22
                      },
                      "start": {
                        "column": 23,
                        "line": 22
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    385,
                    401
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 22
                    },
                    "start": {
                      "column": 16,
                      "line": 22
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 25
                },
                "start": {
                  "column": 15,
                  "line": 22
                }
              }
            },
            "range": [
              373,
              446
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 28,
            "line": 21
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived3",
        "optional": false,
        "range": [
          345,
          353
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 21
          },
          "start": {
            "column": 6,
            "line": 21
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          362,
          366
        ],
        "loc": {
          "end": {
            "column": 27,
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
        448
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
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
          478,
          563
        ],
        "body": [
          {
            "type": "PropertyDefinition",
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
                484,
                485
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 29
                },
                "start": {
                  "column": 4,
                  "line": 29
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                488,
                489
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 29
                },
                "start": {
                  "column": 8,
                  "line": 29
                }
              }
            },
            "range": [
              484,
              490
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                495,
                506
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 30
                },
                "start": {
                  "column": 4,
                  "line": 30
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
                506,
                561
              ],
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
                          "name": "b",
                          "optional": false,
                          "range": [
                            532,
                            533
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 31
                            },
                            "start": {
                              "column": 12,
                              "line": 31
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            536,
                            537
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 31
                            },
                            "start": {
                              "column": 16,
                              "line": 31
                            }
                          }
                        },
                        "range": [
                          532,
                          537
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 31
                          },
                          "start": {
                            "column": 12,
                            "line": 31
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      528,
                      538
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 31
                      },
                      "start": {
                        "column": 8,
                        "line": 31
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "range": [
                          547,
                          552
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 32
                          },
                          "start": {
                            "column": 8,
                            "line": 32
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        547,
                        554
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 32
                        },
                        "start": {
                          "column": 8,
                          "line": 32
                        }
                      }
                    },
                    "range": [
                      547,
                      555
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 32
                      },
                      "start": {
                        "column": 8,
                        "line": 32
                      }
                    }
                  }
                ],
                "range": [
                  518,
                  561
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 33
                  },
                  "start": {
                    "column": 27,
                    "line": 30
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 30
                      },
                      "start": {
                        "column": 17,
                        "line": 30
                      }
                    },
                    "range": [
                      508,
                      516
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        510,
                        516
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 30
                        },
                        "start": {
                          "column": 19,
                          "line": 30
                        }
                      }
                    }
                  },
                  "range": [
                    507,
                    516
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 30
                    },
                    "start": {
                      "column": 16,
                      "line": 30
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 33
                },
                "start": {
                  "column": 15,
                  "line": 30
                }
              }
            },
            "range": [
              495,
              561
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 34
          },
          "start": {
            "column": 28,
            "line": 28
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived4",
        "optional": false,
        "range": [
          456,
          464
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 28
          },
          "start": {
            "column": 6,
            "line": 28
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          473,
          477
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 28
          },
          "start": {
            "column": 23,
            "line": 28
          }
        }
      },
      "range": [
        450,
        563
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          593,
          678
        ],
        "body": [
          {
            "type": "PropertyDefinition",
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
                599,
                600
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 37
                },
                "start": {
                  "column": 4,
                  "line": 37
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                603,
                604
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 37
                },
                "start": {
                  "column": 8,
                  "line": 37
                }
              }
            },
            "range": [
              599,
              605
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 37
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                610,
                621
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 38
                },
                "start": {
                  "column": 4,
                  "line": 38
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
                621,
                676
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "range": [
                          643,
                          648
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 39
                          },
                          "start": {
                            "column": 8,
                            "line": 39
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        643,
                        650
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 39
                        },
                        "start": {
                          "column": 8,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      643,
                      651
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 39
                      },
                      "start": {
                        "column": 8,
                        "line": 39
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
                          "range": [
                            664,
                            665
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 40
                            },
                            "start": {
                              "column": 12,
                              "line": 40
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            668,
                            669
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 40
                            },
                            "start": {
                              "column": 16,
                              "line": 40
                            }
                          }
                        },
                        "range": [
                          664,
                          669
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 40
                          },
                          "start": {
                            "column": 12,
                            "line": 40
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      660,
                      670
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
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
                  633,
                  676
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 41
                  },
                  "start": {
                    "column": 27,
                    "line": 38
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 38
                      },
                      "start": {
                        "column": 17,
                        "line": 38
                      }
                    },
                    "range": [
                      623,
                      631
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        625,
                        631
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 38
                        },
                        "start": {
                          "column": 19,
                          "line": 38
                        }
                      }
                    }
                  },
                  "range": [
                    622,
                    631
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 38
                    },
                    "start": {
                      "column": 16,
                      "line": 38
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 41
                },
                "start": {
                  "column": 15,
                  "line": 38
                }
              }
            },
            "range": [
              610,
              676
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 42
          },
          "start": {
            "column": 28,
            "line": 36
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived5",
        "optional": false,
        "range": [
          571,
          579
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 36
          },
          "start": {
            "column": 6,
            "line": 36
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          588,
          592
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 36
          },
          "start": {
            "column": 23,
            "line": 36
          }
        }
      },
      "range": [
        565,
        678
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 36
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          708,
          817
        ],
        "body": [
          {
            "type": "PropertyDefinition",
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
                714,
                715
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 45
                },
                "start": {
                  "column": 4,
                  "line": 45
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
                  "column": 13,
                  "line": 45
                },
                "start": {
                  "column": 5,
                  "line": 45
                }
              },
              "range": [
                715,
                723
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  717,
                  723
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 45
                  },
                  "start": {
                    "column": 7,
                    "line": 45
                  }
                }
              }
            },
            "value": null,
            "range": [
              714,
              724
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 45
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                729,
                740
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 46
                },
                "start": {
                  "column": 4,
                  "line": 46
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
                740,
                815
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            762,
                            766
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 47
                            },
                            "start": {
                              "column": 8,
                              "line": 47
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
                            767,
                            768
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 47
                            },
                            "start": {
                              "column": 13,
                              "line": 47
                            }
                          }
                        },
                        "range": [
                          762,
                          768
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 47
                          },
                          "start": {
                            "column": 8,
                            "line": 47
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          771,
                          772
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 47
                          },
                          "start": {
                            "column": 17,
                            "line": 47
                          }
                        }
                      },
                      "range": [
                        762,
                        772
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 47
                        },
                        "start": {
                          "column": 8,
                          "line": 47
                        }
                      }
                    },
                    "range": [
                      762,
                      773
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 47
                      },
                      "start": {
                        "column": 8,
                        "line": 47
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
                          "range": [
                            786,
                            787
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 48
                            },
                            "start": {
                              "column": 12,
                              "line": 48
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            790,
                            791
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 48
                            },
                            "start": {
                              "column": 16,
                              "line": 48
                            }
                          }
                        },
                        "range": [
                          786,
                          791
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 48
                          },
                          "start": {
                            "column": 12,
                            "line": 48
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      782,
                      792
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 48
                      },
                      "start": {
                        "column": 8,
                        "line": 48
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "range": [
                          801,
                          806
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 49
                          },
                          "start": {
                            "column": 8,
                            "line": 49
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        801,
                        808
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 49
                        },
                        "start": {
                          "column": 8,
                          "line": 49
                        }
                      }
                    },
                    "range": [
                      801,
                      809
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 49
                      },
                      "start": {
                        "column": 8,
                        "line": 49
                      }
                    }
                  }
                ],
                "range": [
                  752,
                  815
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 50
                  },
                  "start": {
                    "column": 27,
                    "line": 46
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 46
                      },
                      "start": {
                        "column": 17,
                        "line": 46
                      }
                    },
                    "range": [
                      742,
                      750
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        744,
                        750
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 46
                        },
                        "start": {
                          "column": 19,
                          "line": 46
                        }
                      }
                    }
                  },
                  "range": [
                    741,
                    750
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 46
                    },
                    "start": {
                      "column": 16,
                      "line": 46
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 50
                },
                "start": {
                  "column": 15,
                  "line": 46
                }
              }
            },
            "range": [
              729,
              815
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 50
              },
              "start": {
                "column": 4,
                "line": 46
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 51
          },
          "start": {
            "column": 28,
            "line": 44
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived6",
        "optional": false,
        "range": [
          686,
          694
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 44
          },
          "start": {
            "column": 6,
            "line": 44
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          703,
          707
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 44
          },
          "start": {
            "column": 23,
            "line": 44
          }
        }
      },
      "range": [
        680,
        817
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 44
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          847,
          968
        ],
        "body": [
          {
            "type": "PropertyDefinition",
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
                853,
                854
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 54
                },
                "start": {
                  "column": 4,
                  "line": 54
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                857,
                858
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 54
                },
                "start": {
                  "column": 8,
                  "line": 54
                }
              }
            },
            "range": [
              853,
              859
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 54
              },
              "start": {
                "column": 4,
                "line": 54
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                864,
                865
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 55
                },
                "start": {
                  "column": 4,
                  "line": 55
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
                  "column": 13,
                  "line": 55
                },
                "start": {
                  "column": 5,
                  "line": 55
                }
              },
              "range": [
                865,
                873
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  867,
                  873
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 55
                  },
                  "start": {
                    "column": 7,
                    "line": 55
                  }
                }
              }
            },
            "value": null,
            "range": [
              864,
              874
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 55
              },
              "start": {
                "column": 4,
                "line": 55
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                879,
                890
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 56
                },
                "start": {
                  "column": 4,
                  "line": 56
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
                890,
                966
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            912,
                            916
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 57
                            },
                            "start": {
                              "column": 8,
                              "line": 57
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
                            917,
                            918
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 57
                            },
                            "start": {
                              "column": 13,
                              "line": 57
                            }
                          }
                        },
                        "range": [
                          912,
                          918
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 57
                          },
                          "start": {
                            "column": 8,
                            "line": 57
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "3",
                        "value": 3,
                        "range": [
                          921,
                          922
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 57
                          },
                          "start": {
                            "column": 17,
                            "line": 57
                          }
                        }
                      },
                      "range": [
                        912,
                        922
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 57
                        },
                        "start": {
                          "column": 8,
                          "line": 57
                        }
                      }
                    },
                    "range": [
                      912,
                      923
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 57
                      },
                      "start": {
                        "column": 8,
                        "line": 57
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            932,
                            936
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 58
                            },
                            "start": {
                              "column": 8,
                              "line": 58
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "range": [
                            937,
                            938
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 58
                            },
                            "start": {
                              "column": 13,
                              "line": 58
                            }
                          }
                        },
                        "range": [
                          932,
                          938
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 58
                          },
                          "start": {
                            "column": 8,
                            "line": 58
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "3",
                        "value": 3,
                        "range": [
                          941,
                          942
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 58
                          },
                          "start": {
                            "column": 17,
                            "line": 58
                          }
                        }
                      },
                      "range": [
                        932,
                        942
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 58
                        },
                        "start": {
                          "column": 8,
                          "line": 58
                        }
                      }
                    },
                    "range": [
                      932,
                      943
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 58
                      },
                      "start": {
                        "column": 8,
                        "line": 58
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "range": [
                          952,
                          957
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 59
                          },
                          "start": {
                            "column": 8,
                            "line": 59
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        952,
                        959
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 59
                        },
                        "start": {
                          "column": 8,
                          "line": 59
                        }
                      }
                    },
                    "range": [
                      952,
                      960
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 59
                      },
                      "start": {
                        "column": 8,
                        "line": 59
                      }
                    }
                  }
                ],
                "range": [
                  902,
                  966
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 60
                  },
                  "start": {
                    "column": 27,
                    "line": 56
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 56
                      },
                      "start": {
                        "column": 17,
                        "line": 56
                      }
                    },
                    "range": [
                      892,
                      900
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        894,
                        900
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 56
                        },
                        "start": {
                          "column": 19,
                          "line": 56
                        }
                      }
                    }
                  },
                  "range": [
                    891,
                    900
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 56
                    },
                    "start": {
                      "column": 16,
                      "line": 56
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 60
                },
                "start": {
                  "column": 15,
                  "line": 56
                }
              }
            },
            "range": [
              879,
              966
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 60
              },
              "start": {
                "column": 4,
                "line": 56
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 61
          },
          "start": {
            "column": 28,
            "line": 53
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived7",
        "optional": false,
        "range": [
          825,
          833
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 53
          },
          "start": {
            "column": 6,
            "line": 53
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          842,
          846
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 53
          },
          "start": {
            "column": 23,
            "line": 53
          }
        }
      },
      "range": [
        819,
        968
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 53
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          998,
          1127
        ],
        "body": [
          {
            "type": "PropertyDefinition",
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
                1004,
                1005
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 64
                },
                "start": {
                  "column": 4,
                  "line": 64
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                1008,
                1009
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 64
                },
                "start": {
                  "column": 8,
                  "line": 64
                }
              }
            },
            "range": [
              1004,
              1010
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 64
              },
              "start": {
                "column": 4,
                "line": 64
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                1015,
                1016
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 65
                },
                "start": {
                  "column": 4,
                  "line": 65
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
                  "column": 13,
                  "line": 65
                },
                "start": {
                  "column": 5,
                  "line": 65
                }
              },
              "range": [
                1016,
                1024
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1018,
                  1024
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 65
                  },
                  "start": {
                    "column": 7,
                    "line": 65
                  }
                }
              }
            },
            "value": null,
            "range": [
              1015,
              1025
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 65
              },
              "start": {
                "column": 4,
                "line": 65
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                1030,
                1041
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 66
                },
                "start": {
                  "column": 4,
                  "line": 66
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
                1041,
                1125
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "range": [
                          1063,
                          1068
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 67
                          },
                          "start": {
                            "column": 8,
                            "line": 67
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1063,
                        1070
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 67
                        },
                        "start": {
                          "column": 8,
                          "line": 67
                        }
                      }
                    },
                    "range": [
                      1063,
                      1071
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 67
                      },
                      "start": {
                        "column": 8,
                        "line": 67
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            1080,
                            1084
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 68
                            },
                            "start": {
                              "column": 8,
                              "line": 68
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
                            1085,
                            1086
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 68
                            },
                            "start": {
                              "column": 13,
                              "line": 68
                            }
                          }
                        },
                        "range": [
                          1080,
                          1086
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 68
                          },
                          "start": {
                            "column": 8,
                            "line": 68
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "3",
                        "value": 3,
                        "range": [
                          1089,
                          1090
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 68
                          },
                          "start": {
                            "column": 17,
                            "line": 68
                          }
                        }
                      },
                      "range": [
                        1080,
                        1090
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 68
                        },
                        "start": {
                          "column": 8,
                          "line": 68
                        }
                      }
                    },
                    "range": [
                      1080,
                      1091
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 68
                      },
                      "start": {
                        "column": 8,
                        "line": 68
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            1100,
                            1104
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 69
                            },
                            "start": {
                              "column": 8,
                              "line": 69
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "range": [
                            1105,
                            1106
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 69
                            },
                            "start": {
                              "column": 13,
                              "line": 69
                            }
                          }
                        },
                        "range": [
                          1100,
                          1106
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 69
                          },
                          "start": {
                            "column": 8,
                            "line": 69
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "3",
                        "value": 3,
                        "range": [
                          1109,
                          1110
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 69
                          },
                          "start": {
                            "column": 17,
                            "line": 69
                          }
                        }
                      },
                      "range": [
                        1100,
                        1110
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 69
                        },
                        "start": {
                          "column": 8,
                          "line": 69
                        }
                      }
                    },
                    "range": [
                      1100,
                      1111
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 69
                      },
                      "start": {
                        "column": 8,
                        "line": 69
                      }
                    }
                  }
                ],
                "range": [
                  1053,
                  1125
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 70
                  },
                  "start": {
                    "column": 27,
                    "line": 66
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 66
                      },
                      "start": {
                        "column": 17,
                        "line": 66
                      }
                    },
                    "range": [
                      1043,
                      1051
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        1045,
                        1051
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 66
                        },
                        "start": {
                          "column": 19,
                          "line": 66
                        }
                      }
                    }
                  },
                  "range": [
                    1042,
                    1051
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 66
                    },
                    "start": {
                      "column": 16,
                      "line": 66
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 70
                },
                "start": {
                  "column": 15,
                  "line": 66
                }
              }
            },
            "range": [
              1030,
              1125
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 70
              },
              "start": {
                "column": 4,
                "line": 66
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 71
          },
          "start": {
            "column": 28,
            "line": 63
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived8",
        "optional": false,
        "range": [
          976,
          984
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 63
          },
          "start": {
            "column": 6,
            "line": 63
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          993,
          997
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 63
          },
          "start": {
            "column": 23,
            "line": 63
          }
        }
      },
      "range": [
        970,
        1127
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 71
        },
        "start": {
          "column": 0,
          "line": 63
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1186,
          1195
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1188,
                1189
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 74
                },
                "start": {
                  "column": 17,
                  "line": 74
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
                  "line": 74
                },
                "start": {
                  "column": 18,
                  "line": 74
                }
              },
              "range": [
                1189,
                1192
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    1191,
                    1192
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 74
                    },
                    "start": {
                      "column": 20,
                      "line": 74
                    }
                  }
                },
                "range": [
                  1191,
                  1192
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 74
                  },
                  "start": {
                    "column": 20,
                    "line": 74
                  }
                }
              }
            },
            "value": null,
            "range": [
              1188,
              1193
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 74
              },
              "start": {
                "column": 17,
                "line": 74
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 74
          },
          "start": {
            "column": 15,
            "line": 74
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "range": [
          1177,
          1182
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 74
          },
          "start": {
            "column": 6,
            "line": 74
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 74
          },
          "start": {
            "column": 11,
            "line": 74
          }
        },
        "range": [
          1182,
          1185
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                1183,
                1184
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 74
                },
                "start": {
                  "column": 12,
                  "line": 74
                }
              }
            },
            "out": false,
            "range": [
              1183,
              1184
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 74
              },
              "start": {
                "column": 12,
                "line": 74
              }
            }
          }
        ]
      },
      "range": [
        1171,
        1195
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 74
        },
        "start": {
          "column": 0,
          "line": 74
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1232,
          1353
        ],
        "body": [
          {
            "type": "PropertyDefinition",
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
                1238,
                1239
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 77
                },
                "start": {
                  "column": 4,
                  "line": 77
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                1242,
                1243
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 77
                },
                "start": {
                  "column": 8,
                  "line": 77
                }
              }
            },
            "range": [
              1238,
              1244
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 77
              },
              "start": {
                "column": 4,
                "line": 77
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                1249,
                1250
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 78
                },
                "start": {
                  "column": 4,
                  "line": 78
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
                  "column": 13,
                  "line": 78
                },
                "start": {
                  "column": 5,
                  "line": 78
                }
              },
              "range": [
                1250,
                1258
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1252,
                  1258
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 78
                  },
                  "start": {
                    "column": 7,
                    "line": 78
                  }
                }
              }
            },
            "value": null,
            "range": [
              1249,
              1259
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 78
              },
              "start": {
                "column": 4,
                "line": 78
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                1264,
                1275
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 79
                },
                "start": {
                  "column": 4,
                  "line": 79
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
                1275,
                1351
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            1297,
                            1301
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 80
                            },
                            "start": {
                              "column": 8,
                              "line": 80
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
                            1302,
                            1303
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 80
                            },
                            "start": {
                              "column": 13,
                              "line": 80
                            }
                          }
                        },
                        "range": [
                          1297,
                          1303
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 80
                          },
                          "start": {
                            "column": 8,
                            "line": 80
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "3",
                        "value": 3,
                        "range": [
                          1306,
                          1307
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 80
                          },
                          "start": {
                            "column": 17,
                            "line": 80
                          }
                        }
                      },
                      "range": [
                        1297,
                        1307
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 80
                        },
                        "start": {
                          "column": 8,
                          "line": 80
                        }
                      }
                    },
                    "range": [
                      1297,
                      1308
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 80
                      },
                      "start": {
                        "column": 8,
                        "line": 80
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            1317,
                            1321
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 81
                            },
                            "start": {
                              "column": 8,
                              "line": 81
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "range": [
                            1322,
                            1323
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 81
                            },
                            "start": {
                              "column": 13,
                              "line": 81
                            }
                          }
                        },
                        "range": [
                          1317,
                          1323
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 81
                          },
                          "start": {
                            "column": 8,
                            "line": 81
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "3",
                        "value": 3,
                        "range": [
                          1326,
                          1327
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 81
                          },
                          "start": {
                            "column": 17,
                            "line": 81
                          }
                        }
                      },
                      "range": [
                        1317,
                        1327
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 81
                        },
                        "start": {
                          "column": 8,
                          "line": 81
                        }
                      }
                    },
                    "range": [
                      1317,
                      1328
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 81
                      },
                      "start": {
                        "column": 8,
                        "line": 81
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "range": [
                          1337,
                          1342
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 82
                          },
                          "start": {
                            "column": 8,
                            "line": 82
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1337,
                        1344
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 82
                        },
                        "start": {
                          "column": 8,
                          "line": 82
                        }
                      }
                    },
                    "range": [
                      1337,
                      1345
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 82
                      },
                      "start": {
                        "column": 8,
                        "line": 82
                      }
                    }
                  }
                ],
                "range": [
                  1287,
                  1351
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 83
                  },
                  "start": {
                    "column": 27,
                    "line": 79
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 79
                      },
                      "start": {
                        "column": 17,
                        "line": 79
                      }
                    },
                    "range": [
                      1277,
                      1285
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        1279,
                        1285
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 79
                        },
                        "start": {
                          "column": 19,
                          "line": 79
                        }
                      }
                    }
                  },
                  "range": [
                    1276,
                    1285
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 79
                    },
                    "start": {
                      "column": 16,
                      "line": 79
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 83
                },
                "start": {
                  "column": 15,
                  "line": 79
                }
              }
            },
            "range": [
              1264,
              1351
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 83
              },
              "start": {
                "column": 4,
                "line": 79
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 84
          },
          "start": {
            "column": 35,
            "line": 76
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived9",
        "optional": false,
        "range": [
          1203,
          1211
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 76
          },
          "start": {
            "column": 6,
            "line": 76
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "range": [
          1223,
          1228
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 76
          },
          "start": {
            "column": 26,
            "line": 76
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          1228,
          1231
        ],
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                1229,
                1230
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 76
                },
                "start": {
                  "column": 32,
                  "line": 76
                }
              }
            },
            "range": [
              1229,
              1230
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 76
              },
              "start": {
                "column": 32,
                "line": 76
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 76
          },
          "start": {
            "column": 31,
            "line": 76
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 17,
            "line": 76
          },
          "start": {
            "column": 14,
            "line": 76
          }
        },
        "range": [
          1211,
          1214
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                1212,
                1213
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 76
                },
                "start": {
                  "column": 15,
                  "line": 76
                }
              }
            },
            "out": false,
            "range": [
              1212,
              1213
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 76
              },
              "start": {
                "column": 15,
                "line": 76
              }
            }
          }
        ]
      },
      "range": [
        1197,
        1353
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 84
        },
        "start": {
          "column": 0,
          "line": 76
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1391,
          1512
        ],
        "body": [
          {
            "type": "PropertyDefinition",
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
                1397,
                1398
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 87
                },
                "start": {
                  "column": 4,
                  "line": 87
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                1401,
                1402
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 87
                },
                "start": {
                  "column": 8,
                  "line": 87
                }
              }
            },
            "range": [
              1397,
              1403
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 87
              },
              "start": {
                "column": 4,
                "line": 87
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                1408,
                1409
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 88
                },
                "start": {
                  "column": 4,
                  "line": 88
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
                  "column": 13,
                  "line": 88
                },
                "start": {
                  "column": 5,
                  "line": 88
                }
              },
              "range": [
                1409,
                1417
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1411,
                  1417
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 88
                  },
                  "start": {
                    "column": 7,
                    "line": 88
                  }
                }
              }
            },
            "value": null,
            "range": [
              1408,
              1418
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 88
              },
              "start": {
                "column": 4,
                "line": 88
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                1423,
                1434
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 89
                },
                "start": {
                  "column": 4,
                  "line": 89
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
                1434,
                1510
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "range": [
                          1456,
                          1461
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 90
                          },
                          "start": {
                            "column": 8,
                            "line": 90
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1456,
                        1463
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 90
                        },
                        "start": {
                          "column": 8,
                          "line": 90
                        }
                      }
                    },
                    "range": [
                      1456,
                      1464
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 90
                      },
                      "start": {
                        "column": 8,
                        "line": 90
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            1473,
                            1477
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 91
                            },
                            "start": {
                              "column": 8,
                              "line": 91
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
                            1478,
                            1479
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 91
                            },
                            "start": {
                              "column": 13,
                              "line": 91
                            }
                          }
                        },
                        "range": [
                          1473,
                          1479
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 91
                          },
                          "start": {
                            "column": 8,
                            "line": 91
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "3",
                        "value": 3,
                        "range": [
                          1482,
                          1483
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 91
                          },
                          "start": {
                            "column": 17,
                            "line": 91
                          }
                        }
                      },
                      "range": [
                        1473,
                        1483
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 91
                        },
                        "start": {
                          "column": 8,
                          "line": 91
                        }
                      }
                    },
                    "range": [
                      1473,
                      1484
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 91
                      },
                      "start": {
                        "column": 8,
                        "line": 91
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            1493,
                            1497
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 92
                            },
                            "start": {
                              "column": 8,
                              "line": 92
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "range": [
                            1498,
                            1499
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 92
                            },
                            "start": {
                              "column": 13,
                              "line": 92
                            }
                          }
                        },
                        "range": [
                          1493,
                          1499
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 92
                          },
                          "start": {
                            "column": 8,
                            "line": 92
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "3",
                        "value": 3,
                        "range": [
                          1502,
                          1503
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 92
                          },
                          "start": {
                            "column": 17,
                            "line": 92
                          }
                        }
                      },
                      "range": [
                        1493,
                        1503
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 92
                        },
                        "start": {
                          "column": 8,
                          "line": 92
                        }
                      }
                    },
                    "range": [
                      1493,
                      1504
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 92
                      },
                      "start": {
                        "column": 8,
                        "line": 92
                      }
                    }
                  }
                ],
                "range": [
                  1446,
                  1510
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 93
                  },
                  "start": {
                    "column": 27,
                    "line": 89
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 89
                      },
                      "start": {
                        "column": 17,
                        "line": 89
                      }
                    },
                    "range": [
                      1436,
                      1444
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        1438,
                        1444
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 89
                        },
                        "start": {
                          "column": 19,
                          "line": 89
                        }
                      }
                    }
                  },
                  "range": [
                    1435,
                    1444
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 89
                    },
                    "start": {
                      "column": 16,
                      "line": 89
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 93
                },
                "start": {
                  "column": 15,
                  "line": 89
                }
              }
            },
            "range": [
              1423,
              1510
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 93
              },
              "start": {
                "column": 4,
                "line": 89
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 94
          },
          "start": {
            "column": 36,
            "line": 86
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived10",
        "optional": false,
        "range": [
          1361,
          1370
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 86
          },
          "start": {
            "column": 6,
            "line": 86
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "range": [
          1382,
          1387
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 86
          },
          "start": {
            "column": 27,
            "line": 86
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          1387,
          1390
        ],
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                1388,
                1389
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 86
                },
                "start": {
                  "column": 33,
                  "line": 86
                }
              }
            },
            "range": [
              1388,
              1389
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 86
              },
              "start": {
                "column": 33,
                "line": 86
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 86
          },
          "start": {
            "column": 32,
            "line": 86
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 86
          },
          "start": {
            "column": 15,
            "line": 86
          }
        },
        "range": [
          1370,
          1373
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                1371,
                1372
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 86
                },
                "start": {
                  "column": 16,
                  "line": 86
                }
              }
            },
            "out": false,
            "range": [
              1371,
              1372
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 86
              },
              "start": {
                "column": 16,
                "line": 86
              }
            }
          }
        ]
      },
      "range": [
        1355,
        1512
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 94
        },
        "start": {
          "column": 0,
          "line": 86
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 94
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
