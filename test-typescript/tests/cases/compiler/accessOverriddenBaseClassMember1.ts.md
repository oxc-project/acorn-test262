__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    363
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          12,
          148
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                18,
                29
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
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
                29,
                69
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  66,
                  69
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 2
                  },
                  "start": {
                    "column": 52,
                    "line": 2
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 2
                        },
                        "start": {
                          "column": 24,
                          "line": 2
                        }
                      },
                      "range": [
                        38,
                        46
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          40,
                          46
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 2
                          },
                          "start": {
                            "column": 26,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      37,
                      46
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 2
                      },
                      "start": {
                        "column": 23,
                        "line": 2
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    30,
                    46
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 2
                    },
                    "start": {
                      "column": 16,
                      "line": 2
                    }
                  }
                },
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
                          "column": 50,
                          "line": 2
                        },
                        "start": {
                          "column": 42,
                          "line": 2
                        }
                      },
                      "range": [
                        56,
                        64
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          58,
                          64
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 2
                          },
                          "start": {
                            "column": 44,
                            "line": 2
                          }
                        }
                      }
                    },
                    "range": [
                      55,
                      64
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 2
                      },
                      "start": {
                        "column": 41,
                        "line": 2
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    48,
                    64
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 2
                    },
                    "start": {
                      "column": 34,
                      "line": 2
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 2
                },
                "start": {
                  "column": 15,
                  "line": 2
                }
              }
            },
            "range": [
              18,
              69
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toString",
              "optional": false,
              "range": [
                81,
                89
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
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
                89,
                146
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Literal",
                            "raw": "\"x=\"",
                            "value": "x=",
                            "range": [
                              109,
                              113
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 4
                              },
                              "start": {
                                "column": 15,
                                "line": 4
                              }
                            }
                          },
                          "right": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                116,
                                120
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 4
                                },
                                "start": {
                                  "column": 22,
                                  "line": 4
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                121,
                                122
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 4
                                },
                                "start": {
                                  "column": 27,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              116,
                              122
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 4
                              },
                              "start": {
                                "column": 22,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            109,
                            122
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 4
                            },
                            "start": {
                              "column": 15,
                              "line": 4
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "\" y=\"",
                          "value": " y=",
                          "range": [
                            125,
                            130
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 4
                            },
                            "start": {
                              "column": 31,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          109,
                          130
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 4
                          },
                          "start": {
                            "column": 15,
                            "line": 4
                          }
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            133,
                            137
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 4
                            },
                            "start": {
                              "column": 39,
                              "line": 4
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            138,
                            139
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 4
                            },
                            "start": {
                              "column": 44,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          133,
                          139
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 4
                          },
                          "start": {
                            "column": 39,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        109,
                        139
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 4
                        },
                        "start": {
                          "column": 15,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      102,
                      140
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  92,
                  146
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 5
                  },
                  "start": {
                    "column": 22,
                    "line": 3
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
                  "column": 5,
                  "line": 5
                },
                "start": {
                  "column": 19,
                  "line": 3
                }
              }
            },
            "range": [
              74,
              146
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 12,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Point",
        "optional": false,
        "range": [
          6,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        148
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          182,
          362
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                188,
                199
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
                199,
                272
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            260,
                            261
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 9
                            },
                            "start": {
                              "column": 14,
                              "line": 9
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            263,
                            264
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 9
                            },
                            "start": {
                              "column": 17,
                              "line": 9
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "range": [
                          254,
                          259
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 9
                          },
                          "start": {
                            "column": 8,
                            "line": 9
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        254,
                        265
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
                    "range": [
                      254,
                      266
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  244,
                  272
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 60,
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
                  "name": "x",
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
                      201,
                      209
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        203,
                        209
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
                    200,
                    209
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
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 8
                      },
                      "start": {
                        "column": 28,
                        "line": 8
                      }
                    },
                    "range": [
                      212,
                      220
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        214,
                        220
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 8
                        },
                        "start": {
                          "column": 30,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    211,
                    220
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 8
                    },
                    "start": {
                      "column": 27,
                      "line": 8
                    }
                  }
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "color",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 8
                        },
                        "start": {
                          "column": 50,
                          "line": 8
                        }
                      },
                      "range": [
                        234,
                        242
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          236,
                          242
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 8
                          },
                          "start": {
                            "column": 52,
                            "line": 8
                          }
                        }
                      }
                    },
                    "range": [
                      229,
                      242
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 8
                      },
                      "start": {
                        "column": 45,
                        "line": 8
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    222,
                    242
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 8
                    },
                    "start": {
                      "column": 38,
                      "line": 8
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 10
                },
                "start": {
                  "column": 15,
                  "line": 8
                }
              }
            },
            "range": [
              188,
              272
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toString",
              "optional": false,
              "range": [
                284,
                292
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 11
                },
                "start": {
                  "column": 11,
                  "line": 11
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
                292,
                360
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Super",
                              "range": [
                                312,
                                317
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 12
                                },
                                "start": {
                                  "column": 15,
                                  "line": 12
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
                                318,
                                326
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 12
                                },
                                "start": {
                                  "column": 21,
                                  "line": 12
                                }
                              }
                            },
                            "range": [
                              312,
                              326
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 12
                              },
                              "start": {
                                "column": 15,
                                "line": 12
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            312,
                            328
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 12
                            },
                            "start": {
                              "column": 15,
                              "line": 12
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "\" color=\"",
                          "value": " color=",
                          "range": [
                            331,
                            340
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 12
                            },
                            "start": {
                              "column": 34,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          312,
                          340
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 12
                          },
                          "start": {
                            "column": 15,
                            "line": 12
                          }
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            343,
                            347
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 12
                            },
                            "start": {
                              "column": 46,
                              "line": 12
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "color",
                          "optional": false,
                          "range": [
                            348,
                            353
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 12
                            },
                            "start": {
                              "column": 51,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          343,
                          353
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 12
                          },
                          "start": {
                            "column": 46,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        312,
                        353
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 12
                        },
                        "start": {
                          "column": 15,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      305,
                      354
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 12
                      }
                    }
                  }
                ],
                "range": [
                  295,
                  360
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 13
                  },
                  "start": {
                    "column": 22,
                    "line": 11
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
                  "column": 5,
                  "line": 13
                },
                "start": {
                  "column": 19,
                  "line": 11
                }
              }
            },
            "range": [
              277,
              360
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 33,
            "line": 7
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ColoredPoint",
        "optional": false,
        "range": [
          155,
          167
        ],
        "loc": {
          "end": {
            "column": 18,
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
        "name": "Point",
        "optional": false,
        "range": [
          176,
          181
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 7
          },
          "start": {
            "column": 27,
            "line": 7
          }
        }
      },
      "range": [
        149,
        362
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 15
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
