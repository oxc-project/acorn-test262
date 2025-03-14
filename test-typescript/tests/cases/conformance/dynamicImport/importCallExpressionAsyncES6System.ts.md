__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    497
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        76
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": true,
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
                    "name": "req",
                    "optional": false,
                    "range": [
                      39,
                      42
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 2
                      },
                      "start": {
                        "column": 10,
                        "line": 2
                      }
                    }
                  },
                  "init": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "ImportExpression",
                      "options": null,
                      "source": {
                        "type": "Literal",
                        "raw": "'./test'",
                        "value": "./test",
                        "range": [
                          58,
                          66
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 2
                          },
                          "start": {
                            "column": 29,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        51,
                        67
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 2
                        },
                        "start": {
                          "column": 22,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      45,
                      67
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 2
                      },
                      "start": {
                        "column": 16,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    39,
                    67
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 2
                    },
                    "start": {
                      "column": 10,
                      "line": 2
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                33,
                67
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            }
          ],
          "range": [
            27,
            76
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 3
            },
            "start": {
              "column": 27,
              "line": 1
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "range": [
            22,
            24
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 1
            },
            "start": {
              "column": 22,
              "line": 1
            }
          }
        },
        "params": [],
        "range": [
          7,
          76
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        78,
        177
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            95,
            177
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
                "name": "m",
                "optional": false,
                "range": [
                  114,
                  115
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 6
                  },
                  "start": {
                    "column": 17,
                    "line": 6
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
                  115,
                  175
                ],
                "async": true,
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
                            "name": "req",
                            "optional": false,
                            "range": [
                              134,
                              137
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 7
                              },
                              "start": {
                                "column": 14,
                                "line": 7
                              }
                            }
                          },
                          "init": {
                            "type": "AwaitExpression",
                            "argument": {
                              "type": "ImportExpression",
                              "options": null,
                              "source": {
                                "type": "Literal",
                                "raw": "'./test'",
                                "value": "./test",
                                "range": [
                                  153,
                                  161
                                ],
                                "loc": {
                                  "end": {
                                    "column": 41,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 7
                                  }
                                }
                              },
                              "range": [
                                146,
                                162
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 7
                                },
                                "start": {
                                  "column": 26,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              140,
                              162
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 7
                              },
                              "start": {
                                "column": 20,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            134,
                            162
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 7
                            },
                            "start": {
                              "column": 14,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "const",
                      "range": [
                        128,
                        162
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 7
                        },
                        "start": {
                          "column": 8,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "range": [
                    118,
                    175
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 8
                    },
                    "start": {
                      "column": 21,
                      "line": 6
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
                    "line": 8
                  },
                  "start": {
                    "column": 18,
                    "line": 6
                  }
                }
              },
              "range": [
                101,
                175
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 6
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
              "column": 17,
              "line": 5
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "cl1",
          "optional": false,
          "range": [
            91,
            94
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 5
            },
            "start": {
              "column": 13,
              "line": 5
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          85,
          177
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 7,
            "line": 5
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        179,
        280
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
              "name": "obj",
              "optional": false,
              "range": [
                192,
                195
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 11
                },
                "start": {
                  "column": 13,
                  "line": 11
                }
              }
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "range": [
                      204,
                      205
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
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "async": true,
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
                                "name": "req",
                                "optional": false,
                                "range": [
                                  235,
                                  238
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 13
                                  }
                                }
                              },
                              "init": {
                                "type": "AwaitExpression",
                                "argument": {
                                  "type": "ImportExpression",
                                  "options": null,
                                  "source": {
                                    "type": "Literal",
                                    "raw": "'./test'",
                                    "value": "./test",
                                    "range": [
                                      254,
                                      262
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 41,
                                        "line": 13
                                      },
                                      "start": {
                                        "column": 33,
                                        "line": 13
                                      }
                                    }
                                  },
                                  "range": [
                                    247,
                                    263
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 42,
                                      "line": 13
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 13
                                    }
                                  }
                                },
                                "range": [
                                  241,
                                  263
                                ],
                                "loc": {
                                  "end": {
                                    "column": 42,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 13
                                  }
                                }
                              },
                              "range": [
                                235,
                                263
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 13
                                },
                                "start": {
                                  "column": 14,
                                  "line": 13
                                }
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "const",
                          "range": [
                            229,
                            263
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 13
                            },
                            "start": {
                              "column": 8,
                              "line": 13
                            }
                          }
                        }
                      ],
                      "range": [
                        219,
                        278
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 14
                        },
                        "start": {
                          "column": 19,
                          "line": 12
                        }
                      }
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      207,
                      278
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 14
                      },
                      "start": {
                        "column": 7,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    204,
                    278
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 14
                    },
                    "start": {
                      "column": 4,
                      "line": 12
                    }
                  }
                }
              ],
              "range": [
                198,
                280
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 15
                },
                "start": {
                  "column": 19,
                  "line": 11
                }
              }
            },
            "range": [
              192,
              280
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 15
              },
              "start": {
                "column": 13,
                "line": 11
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          186,
          280
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 7,
            "line": 11
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        282,
        415
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            299,
            415
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
                "name": "p",
                "optional": false,
                "range": [
                  312,
                  313
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 18
                  },
                  "start": {
                    "column": 11,
                    "line": 18
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "range": [
                        326,
                        327
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 19
                        },
                        "start": {
                          "column": 8,
                          "line": 19
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "async": true,
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
                                  "name": "req",
                                  "optional": false,
                                  "range": [
                                    361,
                                    364
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 21,
                                      "line": 20
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 20
                                    }
                                  }
                                },
                                "init": {
                                  "type": "AwaitExpression",
                                  "argument": {
                                    "type": "ImportExpression",
                                    "options": null,
                                    "source": {
                                      "type": "Literal",
                                      "raw": "'./test'",
                                      "value": "./test",
                                      "range": [
                                        380,
                                        388
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 45,
                                          "line": 20
                                        },
                                        "start": {
                                          "column": 37,
                                          "line": 20
                                        }
                                      }
                                    },
                                    "range": [
                                      373,
                                      389
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 46,
                                        "line": 20
                                      },
                                      "start": {
                                        "column": 30,
                                        "line": 20
                                      }
                                    }
                                  },
                                  "range": [
                                    367,
                                    389
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 46,
                                      "line": 20
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 20
                                    }
                                  }
                                },
                                "range": [
                                  361,
                                  389
                                ],
                                "loc": {
                                  "end": {
                                    "column": 46,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 20
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "const",
                            "range": [
                              355,
                              389
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 20
                              },
                              "start": {
                                "column": 12,
                                "line": 20
                              }
                            }
                          }
                        ],
                        "range": [
                          341,
                          407
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 21
                          },
                          "start": {
                            "column": 23,
                            "line": 19
                          }
                        }
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "range": [
                        329,
                        407
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 21
                        },
                        "start": {
                          "column": 11,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      326,
                      407
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 21
                      },
                      "start": {
                        "column": 8,
                        "line": 19
                      }
                    }
                  }
                ],
                "range": [
                  316,
                  413
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 22
                  },
                  "start": {
                    "column": 15,
                    "line": 18
                  }
                }
              },
              "range": [
                305,
                413
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 22
                },
                "start": {
                  "column": 4,
                  "line": 18
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 23
            },
            "start": {
              "column": 17,
              "line": 17
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "cl2",
          "optional": false,
          "range": [
            295,
            298
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
        "implements": [],
        "superClass": null,
        "range": [
          289,
          415
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 7,
            "line": 17
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        417,
        496
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
              "name": "l",
              "optional": false,
              "range": [
                430,
                431
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 25
                },
                "start": {
                  "column": 13,
                  "line": 25
                }
              }
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "async": true,
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
                          "name": "req",
                          "optional": false,
                          "range": [
                            458,
                            461
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 26
                            },
                            "start": {
                              "column": 10,
                              "line": 26
                            }
                          }
                        },
                        "init": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "ImportExpression",
                            "options": null,
                            "source": {
                              "type": "Literal",
                              "raw": "'./test'",
                              "value": "./test",
                              "range": [
                                477,
                                485
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 26
                                },
                                "start": {
                                  "column": 29,
                                  "line": 26
                                }
                              }
                            },
                            "range": [
                              470,
                              486
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 26
                              },
                              "start": {
                                "column": 22,
                                "line": 26
                              }
                            }
                          },
                          "range": [
                            464,
                            486
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 26
                            },
                            "start": {
                              "column": 16,
                              "line": 26
                            }
                          }
                        },
                        "range": [
                          458,
                          486
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 26
                          },
                          "start": {
                            "column": 10,
                            "line": 26
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      452,
                      486
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
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
                  446,
                  496
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 27
                  },
                  "start": {
                    "column": 29,
                    "line": 25
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                434,
                496
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 27
                },
                "start": {
                  "column": 17,
                  "line": 25
                }
              }
            },
            "range": [
              430,
              496
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 27
              },
              "start": {
                "column": 13,
                "line": 25
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          424,
          496
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 7,
            "line": 25
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 28
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
