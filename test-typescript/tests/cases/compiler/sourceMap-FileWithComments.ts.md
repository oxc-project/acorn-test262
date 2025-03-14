__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    13,
    663
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          30,
          56
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getDist",
              "optional": false,
              "range": [
                36,
                43
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              },
              "range": [
                45,
                53
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  47,
                  53
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 3
                  },
                  "start": {
                    "column": 15,
                    "line": 3
                  }
                }
              }
            },
            "static": false,
            "range": [
              36,
              54
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 3
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
            "line": 4
          },
          "start": {
            "column": 17,
            "line": 2
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IPoint",
        "optional": false,
        "range": [
          23,
          29
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 2
          },
          "start": {
            "column": 10,
            "line": 2
          }
        }
      },
      "range": [
        13,
        56
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 2
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
              102,
              399
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  139,
                  399
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "range": [
                        172,
                        183
                      ],
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 12
                        },
                        "start": {
                          "column": 8,
                          "line": 12
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
                        183,
                        223
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          220,
                          223
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 12
                          },
                          "start": {
                            "column": 56,
                            "line": 12
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
                                  "column": 36,
                                  "line": 12
                                },
                                "start": {
                                  "column": 28,
                                  "line": 12
                                }
                              },
                              "range": [
                                192,
                                200
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  194,
                                  200
                                ],
                                "loc": {
                                  "end": {
                                    "column": 36,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 12
                                  }
                                }
                              }
                            },
                            "range": [
                              191,
                              200
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 12
                              },
                              "start": {
                                "column": 27,
                                "line": 12
                              }
                            }
                          },
                          "readonly": false,
                          "static": false,
                          "range": [
                            184,
                            200
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 12
                            },
                            "start": {
                              "column": 20,
                              "line": 12
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
                                  "column": 54,
                                  "line": 12
                                },
                                "start": {
                                  "column": 46,
                                  "line": 12
                                }
                              },
                              "range": [
                                210,
                                218
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  212,
                                  218
                                ],
                                "loc": {
                                  "end": {
                                    "column": 54,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 48,
                                    "line": 12
                                  }
                                }
                              }
                            },
                            "range": [
                              209,
                              218
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 12
                              },
                              "start": {
                                "column": 45,
                                "line": 12
                              }
                            }
                          },
                          "readonly": false,
                          "static": false,
                          "range": [
                            202,
                            218
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 12
                            },
                            "start": {
                              "column": 38,
                              "line": 12
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 12
                        },
                        "start": {
                          "column": 19,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      172,
                      223
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 12
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
                      "name": "getDist",
                      "optional": false,
                      "range": [
                        260,
                        267
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 15
                        },
                        "start": {
                          "column": 8,
                          "line": 15
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
                        267,
                        326
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "range": [
                                          289,
                                          293
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 41,
                                            "line": 15
                                          },
                                          "start": {
                                            "column": 37,
                                            "line": 15
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
                                          294,
                                          295
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 43,
                                            "line": 15
                                          },
                                          "start": {
                                            "column": 42,
                                            "line": 15
                                          }
                                        }
                                      },
                                      "range": [
                                        289,
                                        295
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 43,
                                          "line": 15
                                        },
                                        "start": {
                                          "column": 37,
                                          "line": 15
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "range": [
                                          298,
                                          302
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 50,
                                            "line": 15
                                          },
                                          "start": {
                                            "column": 46,
                                            "line": 15
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
                                          303,
                                          304
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 52,
                                            "line": 15
                                          },
                                          "start": {
                                            "column": 51,
                                            "line": 15
                                          }
                                        }
                                      },
                                      "range": [
                                        298,
                                        304
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 52,
                                          "line": 15
                                        },
                                        "start": {
                                          "column": 46,
                                          "line": 15
                                        }
                                      }
                                    },
                                    "range": [
                                      289,
                                      304
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 52,
                                        "line": 15
                                      },
                                      "start": {
                                        "column": 37,
                                        "line": 15
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "range": [
                                          307,
                                          311
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 59,
                                            "line": 15
                                          },
                                          "start": {
                                            "column": 55,
                                            "line": 15
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
                                          312,
                                          313
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 61,
                                            "line": 15
                                          },
                                          "start": {
                                            "column": 60,
                                            "line": 15
                                          }
                                        }
                                      },
                                      "range": [
                                        307,
                                        313
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 61,
                                          "line": 15
                                        },
                                        "start": {
                                          "column": 55,
                                          "line": 15
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "range": [
                                          316,
                                          320
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 68,
                                            "line": 15
                                          },
                                          "start": {
                                            "column": 64,
                                            "line": 15
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
                                          321,
                                          322
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 70,
                                            "line": 15
                                          },
                                          "start": {
                                            "column": 69,
                                            "line": 15
                                          }
                                        }
                                      },
                                      "range": [
                                        316,
                                        322
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 70,
                                          "line": 15
                                        },
                                        "start": {
                                          "column": 64,
                                          "line": 15
                                        }
                                      }
                                    },
                                    "range": [
                                      307,
                                      322
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 70,
                                        "line": 15
                                      },
                                      "start": {
                                        "column": 55,
                                        "line": 15
                                      }
                                    }
                                  },
                                  "range": [
                                    289,
                                    322
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 70,
                                      "line": 15
                                    },
                                    "start": {
                                      "column": 37,
                                      "line": 15
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
                                  "name": "Math",
                                  "optional": false,
                                  "range": [
                                    279,
                                    283
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 15
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 15
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "sqrt",
                                  "optional": false,
                                  "range": [
                                    284,
                                    288
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 36,
                                      "line": 15
                                    },
                                    "start": {
                                      "column": 32,
                                      "line": 15
                                    }
                                  }
                                },
                                "range": [
                                  279,
                                  288
                                ],
                                "loc": {
                                  "end": {
                                    "column": 36,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 15
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                279,
                                323
                              ],
                              "loc": {
                                "end": {
                                  "column": 71,
                                  "line": 15
                                },
                                "start": {
                                  "column": 27,
                                  "line": 15
                                }
                              }
                            },
                            "range": [
                              272,
                              324
                            ],
                            "loc": {
                              "end": {
                                "column": 72,
                                "line": 15
                              },
                              "start": {
                                "column": 20,
                                "line": 15
                              }
                            }
                          }
                        ],
                        "range": [
                          270,
                          326
                        ],
                        "loc": {
                          "end": {
                            "column": 74,
                            "line": 15
                          },
                          "start": {
                            "column": 18,
                            "line": 15
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
                          "column": 74,
                          "line": 15
                        },
                        "start": {
                          "column": 15,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      260,
                      326
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 15
                      },
                      "start": {
                        "column": 8,
                        "line": 15
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
                      "name": "origin",
                      "optional": false,
                      "range": [
                        368,
                        374
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 18
                        },
                        "start": {
                          "column": 15,
                          "line": 18
                        }
                      }
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": true,
                    "value": {
                      "type": "NewExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            387,
                            388
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 18
                            },
                            "start": {
                              "column": 34,
                              "line": 18
                            }
                          }
                        },
                        {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            390,
                            391
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 18
                            },
                            "start": {
                              "column": 37,
                              "line": 18
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "range": [
                          381,
                          386
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 18
                          },
                          "start": {
                            "column": 28,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        377,
                        392
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 18
                        },
                        "start": {
                          "column": 24,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      361,
                      393
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 18
                      },
                      "start": {
                        "column": 8,
                        "line": 18
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 19
                  },
                  "start": {
                    "column": 41,
                    "line": 10
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
                  115,
                  120
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 10
                  },
                  "start": {
                    "column": 17,
                    "line": 10
                  }
                }
              },
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IPoint",
                    "optional": false,
                    "range": [
                      132,
                      138
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 10
                      },
                      "start": {
                        "column": 34,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    132,
                    138
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 10
                    },
                    "start": {
                      "column": 34,
                      "line": 10
                    }
                  }
                }
              ],
              "superClass": null,
              "range": [
                109,
                399
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 19
                },
                "start": {
                  "column": 11,
                  "line": 10
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 19
              },
              "start": {
                "column": 4,
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
                  "name": "a",
                  "optional": false,
                  "range": [
                    445,
                    446
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 22
                    },
                    "start": {
                      "column": 8,
                      "line": 22
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "10",
                  "value": 10,
                  "range": [
                    449,
                    451
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
                  445,
                  451
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 22
                  },
                  "start": {
                    "column": 8,
                    "line": 22
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              441,
              452
            ],
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
          {
            "type": "ExportNamedDeclaration",
            "range": [
              458,
              487
            ],
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  480,
                  487
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 25
                  },
                  "start": {
                    "column": 26,
                    "line": 24
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
                  474,
                  477
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 24
                  },
                  "start": {
                    "column": 20,
                    "line": 24
                  }
                }
              },
              "params": [],
              "range": [
                465,
                487
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 25
                },
                "start": {
                  "column": 11,
                  "line": 24
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 25
              },
              "start": {
                "column": 4,
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
                  "name": "b",
                  "optional": false,
                  "range": [
                    567,
                    568
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
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
                  "raw": "10",
                  "value": 10,
                  "range": [
                    571,
                    573
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 30
                    },
                    "start": {
                      "column": 12,
                      "line": 30
                    }
                  }
                },
                "range": [
                  567,
                  573
                ],
                "loc": {
                  "end": {
                    "column": 14,
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
            "kind": "var",
            "range": [
              563,
              574
            ],
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
          }
        ],
        "range": [
          82,
          576
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 31
          },
          "start": {
            "column": 14,
            "line": 7
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          75,
          81
        ],
        "decorators": [],
        "name": "Shapes",
        "optional": false,
        "loc": {
          "end": {
            "column": 13,
            "line": 7
          },
          "start": {
            "column": 7,
            "line": 7
          }
        }
      },
      "kind": "module",
      "range": [
        68,
        576
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 7
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
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 34
                },
                "start": {
                  "column": 5,
                  "line": 34
                }
              },
              "range": [
                605,
                613
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPoint",
                  "optional": false,
                  "range": [
                    607,
                    613
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 34
                    },
                    "start": {
                      "column": 7,
                      "line": 34
                    }
                  }
                },
                "range": [
                  607,
                  613
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 34
                  },
                  "start": {
                    "column": 7,
                    "line": 34
                  }
                }
              }
            },
            "range": [
              604,
              613
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "3",
                "value": 3,
                "range": [
                  633,
                  634
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 34
                  },
                  "start": {
                    "column": 33,
                    "line": 34
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "4",
                "value": 4,
                "range": [
                  636,
                  637
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 34
                  },
                  "start": {
                    "column": 36,
                    "line": 34
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
                "name": "Shapes",
                "optional": false,
                "range": [
                  620,
                  626
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 34
                  },
                  "start": {
                    "column": 20,
                    "line": 34
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "range": [
                  627,
                  632
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 34
                  },
                  "start": {
                    "column": 27,
                    "line": 34
                  }
                }
              },
              "range": [
                620,
                632
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 34
                },
                "start": {
                  "column": 20,
                  "line": 34
                }
              }
            },
            "range": [
              616,
              638
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 34
              },
              "start": {
                "column": 16,
                "line": 34
              }
            }
          },
          "range": [
            604,
            638
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 34
            },
            "start": {
              "column": 4,
              "line": 34
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        600,
        639
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
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
            "name": "dist",
            "optional": false,
            "range": [
              644,
              648
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "range": [
                  651,
                  652
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 35
                  },
                  "start": {
                    "column": 11,
                    "line": 35
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getDist",
                "optional": false,
                "range": [
                  653,
                  660
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 35
                  },
                  "start": {
                    "column": 13,
                    "line": 35
                  }
                }
              },
              "range": [
                651,
                660
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 35
                },
                "start": {
                  "column": 11,
                  "line": 35
                }
              }
            },
            "optional": false,
            "range": [
              651,
              662
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 35
              },
              "start": {
                "column": 11,
                "line": 35
              }
            }
          },
          "range": [
            644,
            662
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 35
            },
            "start": {
              "column": 4,
              "line": 35
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        640,
        663
      ],
      "loc": {
        "end": {
          "column": 23,
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
      "column": 23,
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
