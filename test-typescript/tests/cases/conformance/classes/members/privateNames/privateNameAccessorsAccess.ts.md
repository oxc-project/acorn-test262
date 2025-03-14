__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    366
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          9,
          236
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "prop",
              "range": [
                19,
                24
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                24,
                41
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
                        36,
                        38
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 2
                        },
                        "start": {
                          "column": 25,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      29,
                      39
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 2
                      },
                      "start": {
                        "column": 18,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  27,
                  41
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 2
                  },
                  "start": {
                    "column": 16,
                    "line": 2
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
                  "column": 30,
                  "line": 2
                },
                "start": {
                  "column": 13,
                  "line": 2
                }
              }
            },
            "range": [
              15,
              41
            ],
            "loc": {
              "end": {
                "column": 30,
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
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "prop",
              "range": [
                50,
                55
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 3
                },
                "start": {
                  "column": 8,
                  "line": 3
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                55,
                74
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  71,
                  74
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 3
                  },
                  "start": {
                    "column": 29,
                    "line": 3
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
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 3
                      },
                      "start": {
                        "column": 19,
                        "line": 3
                      }
                    },
                    "range": [
                      61,
                      69
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        63,
                        69
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 3
                        },
                        "start": {
                          "column": 21,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    56,
                    69
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 3
                    },
                    "start": {
                      "column": 14,
                      "line": 3
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              }
            },
            "range": [
              46,
              74
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
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
                80,
                91
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
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
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                91,
                234
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
                                "column": 24,
                                "line": 6
                              },
                              "start": {
                                "column": 20,
                                "line": 6
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "prop",
                            "range": [
                              121,
                              126
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 6
                              },
                              "start": {
                                "column": 25,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            116,
                            126
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 6
                            },
                            "start": {
                              "column": 20,
                              "line": 6
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
                          "name": "console",
                          "optional": false,
                          "range": [
                            104,
                            111
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 6
                            },
                            "start": {
                              "column": 8,
                              "line": 6
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "range": [
                            112,
                            115
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 6
                            },
                            "start": {
                              "column": 16,
                              "line": 6
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
                            "line": 6
                          },
                          "start": {
                            "column": 8,
                            "line": 6
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        104,
                        127
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 6
                        },
                        "start": {
                          "column": 8,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      104,
                      128
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 7
                              },
                              "start": {
                                "column": 13,
                                "line": 7
                              }
                            },
                            "range": [
                              142,
                              146
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A2",
                                "optional": false,
                                "range": [
                                  144,
                                  146
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 7
                                  }
                                }
                              },
                              "range": [
                                144,
                                146
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 7
                                },
                                "start": {
                                  "column": 15,
                                  "line": 7
                                }
                              }
                            }
                          },
                          "range": [
                            141,
                            146
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 7
                            },
                            "start": {
                              "column": 12,
                              "line": 7
                            }
                          }
                        },
                        "init": {
                          "type": "ThisExpression",
                          "range": [
                            149,
                            153
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 7
                            },
                            "start": {
                              "column": 20,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          141,
                          153
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 7
                          },
                          "start": {
                            "column": 12,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let",
                    "range": [
                      137,
                      154
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
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
                        "name": "a",
                        "optional": false,
                        "range": [
                          163,
                          164
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
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "prop",
                        "range": [
                          165,
                          170
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 8
                          },
                          "start": {
                            "column": 10,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        163,
                        170
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 8
                        },
                        "start": {
                          "column": 8,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      163,
                      171
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
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
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "range": [
                                210,
                                211
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 10
                                },
                                "start": {
                                  "column": 12,
                                  "line": 10
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "prop",
                              "range": [
                                212,
                                217
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 10
                                },
                                "start": {
                                  "column": 14,
                                  "line": 10
                                }
                              }
                            },
                            "range": [
                              210,
                              217
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 10
                              },
                              "start": {
                                "column": 12,
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
                              "column": 20,
                              "line": 10
                            },
                            "start": {
                              "column": 12,
                              "line": 10
                            }
                          }
                        }
                      ],
                      "range": [
                        196,
                        228
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 11
                        },
                        "start": {
                          "column": 24,
                          "line": 9
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
                        190,
                        193
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 9
                        },
                        "start": {
                          "column": 18,
                          "line": 9
                        }
                      }
                    },
                    "params": [],
                    "range": [
                      180,
                      228
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  94,
                  234
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 12
                  },
                  "start": {
                    "column": 18,
                    "line": 5
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
                  "line": 12
                },
                "start": {
                  "column": 15,
                  "line": 5
                }
              }
            },
            "range": [
              80,
              234
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "range": [
          6,
          8
        ],
        "loc": {
          "end": {
            "column": 8,
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
        236
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "NewExpression",
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "A2",
            "optional": false,
            "range": [
              241,
              243
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          "range": [
            237,
            245
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 14
            },
            "start": {
              "column": 0,
              "line": 14
            }
          }
        },
        "optional": false,
        "property": {
          "type": "PrivateIdentifier",
          "name": "prop",
          "range": [
            246,
            251
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 14
            },
            "start": {
              "column": 9,
              "line": 14
            }
          }
        },
        "range": [
          237,
          251
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 14
          },
          "start": {
            "column": 0,
            "line": 14
          }
        }
      },
      "range": [
        237,
        252
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "NewExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A2",
                  "optional": false,
                  "range": [
                    289,
                    291
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 17
                    },
                    "start": {
                      "column": 8,
                      "line": 17
                    }
                  }
                },
                "range": [
                  285,
                  293
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 17
                  },
                  "start": {
                    "column": 4,
                    "line": 17
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "PrivateIdentifier",
                "name": "prop",
                "range": [
                  294,
                  299
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 17
                  },
                  "start": {
                    "column": 13,
                    "line": 17
                  }
                }
              },
              "range": [
                285,
                299
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
                }
              }
            },
            "range": [
              285,
              300
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
        "range": [
          279,
          311
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 16,
            "line": 16
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
          273,
          276
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 16
          },
          "start": {
            "column": 10,
            "line": 16
          }
        }
      },
      "params": [],
      "range": [
        263,
        311
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          322,
          365
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "range": [
                328,
                329
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 21
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
                329,
                363
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "NewExpression",
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A2",
                          "optional": false,
                          "range": [
                            346,
                            348
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 22
                            },
                            "start": {
                              "column": 12,
                              "line": 22
                            }
                          }
                        },
                        "range": [
                          342,
                          350
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 22
                          },
                          "start": {
                            "column": 8,
                            "line": 22
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "prop",
                        "range": [
                          351,
                          356
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 22
                          },
                          "start": {
                            "column": 17,
                            "line": 22
                          }
                        }
                      },
                      "range": [
                        342,
                        356
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 22
                        },
                        "start": {
                          "column": 8,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      342,
                      357
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 22
                      },
                      "start": {
                        "column": 8,
                        "line": 22
                      }
                    }
                  }
                ],
                "range": [
                  332,
                  363
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 23
                  },
                  "start": {
                    "column": 8,
                    "line": 21
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
                  "line": 23
                },
                "start": {
                  "column": 5,
                  "line": 21
                }
              }
            },
            "range": [
              328,
              363
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 9,
            "line": 20
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B2",
        "optional": false,
        "range": [
          319,
          321
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 20
          },
          "start": {
            "column": 6,
            "line": 20
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        313,
        365
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 25
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
