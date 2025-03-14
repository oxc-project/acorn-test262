__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    590
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              15,
              32
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
                    "name": "x",
                    "optional": false,
                    "range": [
                      26,
                      27
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 2
                      },
                      "start": {
                        "column": 15,
                        "line": 2
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "3",
                    "value": 3,
                    "range": [
                      30,
                      31
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 2
                      },
                      "start": {
                        "column": 19,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    26,
                    31
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 2
                    },
                    "start": {
                      "column": 15,
                      "line": 2
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                22,
                32
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 21,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                45,
                124
              ],
              "body": [
                {
                  "type": "PropertyDefinition",
                  "accessibility": "private",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      63,
                      64
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 4
                      },
                      "start": {
                        "column": 16,
                        "line": 4
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "value": null,
                  "range": [
                    55,
                    65
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 4
                    },
                    "start": {
                      "column": 8,
                      "line": 4
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
                    "name": "Z",
                    "optional": false,
                    "range": [
                      78,
                      79
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 5
                      },
                      "start": {
                        "column": 12,
                        "line": 5
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
                      79,
                      118
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
                                  97,
                                  101
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 6
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
                                  102,
                                  103
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
                              "range": [
                                97,
                                103
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 6
                                },
                                "start": {
                                  "column": 12,
                                  "line": 6
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                106,
                                107
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 6
                                },
                                "start": {
                                  "column": 21,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              97,
                              107
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 6
                              },
                              "start": {
                                "column": 12,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            97,
                            108
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 6
                            },
                            "start": {
                              "column": 12,
                              "line": 6
                            }
                          }
                        }
                      ],
                      "range": [
                        83,
                        118
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 7
                        },
                        "start": {
                          "column": 17,
                          "line": 5
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
                        "name": "M",
                        "optional": false,
                        "range": [
                          80,
                          81
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 5
                          },
                          "start": {
                            "column": 14,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 7
                      },
                      "start": {
                        "column": 13,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    74,
                    118
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 7
                    },
                    "start": {
                      "column": 8,
                      "line": 5
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 12,
                  "line": 3
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "range": [
                43,
                44
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 3
                },
                "start": {
                  "column": 10,
                  "line": 3
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              37,
              124
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "range": [
          9,
          126
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          7,
          8
        ],
        "decorators": [],
        "name": "M",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "kind": "module",
      "range": [
        0,
        126
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                151,
                254
              ],
              "body": [
                {
                  "type": "PropertyDefinition",
                  "accessibility": "private",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      169,
                      170
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 13
                      },
                      "start": {
                        "column": 16,
                        "line": 13
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "value": null,
                  "range": [
                    161,
                    171
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
                      "line": 13
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
                    "name": "Z",
                    "optional": false,
                    "range": [
                      184,
                      185
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 14
                      },
                      "start": {
                        "column": 12,
                        "line": 14
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
                      185,
                      248
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
                                "name": "M",
                                "optional": false,
                                "range": [
                                  207,
                                  208
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 15
                                  }
                                }
                              },
                              "init": {
                                "type": "Literal",
                                "raw": "10",
                                "value": 10,
                                "range": [
                                  211,
                                  213
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 15
                                  }
                                }
                              },
                              "range": [
                                207,
                                213
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 15
                                },
                                "start": {
                                  "column": 16,
                                  "line": 15
                                }
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var",
                          "range": [
                            203,
                            214
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 15
                            },
                            "start": {
                              "column": 12,
                              "line": 15
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
                                  227,
                                  231
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 16
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
                                  232,
                                  233
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 16
                                  }
                                }
                              },
                              "range": [
                                227,
                                233
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 16
                                },
                                "start": {
                                  "column": 12,
                                  "line": 16
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                236,
                                237
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 16
                                },
                                "start": {
                                  "column": 21,
                                  "line": 16
                                }
                              }
                            },
                            "range": [
                              227,
                              237
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 16
                              },
                              "start": {
                                "column": 12,
                                "line": 16
                              }
                            }
                          },
                          "range": [
                            227,
                            238
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 16
                            },
                            "start": {
                              "column": 12,
                              "line": 16
                            }
                          }
                        }
                      ],
                      "range": [
                        189,
                        248
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 17
                        },
                        "start": {
                          "column": 17,
                          "line": 14
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
                        "name": "p",
                        "optional": false,
                        "range": [
                          186,
                          187
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 14
                          },
                          "start": {
                            "column": 14,
                            "line": 14
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 17
                      },
                      "start": {
                        "column": 13,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    180,
                    248
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 17
                    },
                    "start": {
                      "column": 8,
                      "line": 14
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
                  "column": 12,
                  "line": 12
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "range": [
                149,
                150
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 12
                },
                "start": {
                  "column": 10,
                  "line": 12
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              143,
              254
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "range": [
          137,
          256
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
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
          135,
          136
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
        128,
        256
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                299,
                378
              ],
              "body": [
                {
                  "type": "PropertyDefinition",
                  "accessibility": "private",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      317,
                      318
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 23
                      },
                      "start": {
                        "column": 16,
                        "line": 23
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "value": null,
                  "range": [
                    309,
                    319
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 23
                    },
                    "start": {
                      "column": 8,
                      "line": 23
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
                    "name": "M",
                    "optional": false,
                    "range": [
                      332,
                      333
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
                  "kind": "set",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "range": [
                      333,
                      372
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
                                  351,
                                  355
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 25
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 25
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
                                  356,
                                  357
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 25
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 25
                                  }
                                }
                              },
                              "range": [
                                351,
                                357
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 25
                                },
                                "start": {
                                  "column": 12,
                                  "line": 25
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                360,
                                361
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 25
                                },
                                "start": {
                                  "column": 21,
                                  "line": 25
                                }
                              }
                            },
                            "range": [
                              351,
                              361
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 25
                              },
                              "start": {
                                "column": 12,
                                "line": 25
                              }
                            }
                          },
                          "range": [
                            351,
                            362
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 25
                            },
                            "start": {
                              "column": 12,
                              "line": 25
                            }
                          }
                        }
                      ],
                      "range": [
                        337,
                        372
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 26
                        },
                        "start": {
                          "column": 17,
                          "line": 24
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
                        "name": "p",
                        "optional": false,
                        "range": [
                          334,
                          335
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 24
                          },
                          "start": {
                            "column": 14,
                            "line": 24
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 26
                      },
                      "start": {
                        "column": 13,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    328,
                    372
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 26
                    },
                    "start": {
                      "column": 8,
                      "line": 24
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 27
                },
                "start": {
                  "column": 12,
                  "line": 22
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "range": [
                297,
                298
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 22
                },
                "start": {
                  "column": 10,
                  "line": 22
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              291,
              378
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          }
        ],
        "range": [
          267,
          380
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 28
          },
          "start": {
            "column": 9,
            "line": 21
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          265,
          266
        ],
        "decorators": [],
        "name": "M",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
            "line": 21
          },
          "start": {
            "column": 7,
            "line": 21
          }
        }
      },
      "kind": "module",
      "range": [
        258,
        380
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                405,
                486
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Z",
                    "optional": false,
                    "range": [
                      419,
                      420
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 32
                      },
                      "start": {
                        "column": 12,
                        "line": 32
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
                      420,
                      480
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
                                "name": "M",
                                "optional": false,
                                "range": [
                                  441,
                                  442
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 33
                                  }
                                }
                              },
                              "init": {
                                "type": "Literal",
                                "raw": "10",
                                "value": 10,
                                "range": [
                                  445,
                                  447
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 33
                                  }
                                }
                              },
                              "range": [
                                441,
                                447
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 33
                                },
                                "start": {
                                  "column": 16,
                                  "line": 33
                                }
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "var",
                          "range": [
                            437,
                            448
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 33
                            },
                            "start": {
                              "column": 12,
                              "line": 33
                            }
                          }
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              468,
                              469
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 34
                              },
                              "start": {
                                "column": 19,
                                "line": 34
                              }
                            }
                          },
                          "range": [
                            461,
                            470
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 34
                            },
                            "start": {
                              "column": 12,
                              "line": 34
                            }
                          }
                        }
                      ],
                      "range": [
                        423,
                        480
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 35
                        },
                        "start": {
                          "column": 16,
                          "line": 32
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
                        "column": 9,
                        "line": 35
                      },
                      "start": {
                        "column": 13,
                        "line": 32
                      }
                    }
                  },
                  "range": [
                    415,
                    480
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 35
                    },
                    "start": {
                      "column": 8,
                      "line": 32
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 36
                },
                "start": {
                  "column": 12,
                  "line": 31
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "range": [
                403,
                404
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 31
                },
                "start": {
                  "column": 10,
                  "line": 31
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              397,
              486
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          }
        ],
        "range": [
          391,
          488
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 37
          },
          "start": {
            "column": 9,
            "line": 30
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          389,
          390
        ],
        "decorators": [],
        "name": "M",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
            "line": 30
          },
          "start": {
            "column": 7,
            "line": 30
          }
        }
      },
      "kind": "module",
      "range": [
        382,
        488
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                531,
                588
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "range": [
                      545,
                      546
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 41
                      },
                      "start": {
                        "column": 12,
                        "line": 41
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
                      546,
                      582
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
                            "name": "x",
                            "optional": false,
                            "range": [
                              570,
                              571
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 42
                              },
                              "start": {
                                "column": 19,
                                "line": 42
                              }
                            }
                          },
                          "range": [
                            563,
                            572
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 42
                            },
                            "start": {
                              "column": 12,
                              "line": 42
                            }
                          }
                        }
                      ],
                      "range": [
                        549,
                        582
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 43
                        },
                        "start": {
                          "column": 16,
                          "line": 41
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
                        "column": 9,
                        "line": 43
                      },
                      "start": {
                        "column": 13,
                        "line": 41
                      }
                    }
                  },
                  "range": [
                    541,
                    582
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 43
                    },
                    "start": {
                      "column": 8,
                      "line": 41
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 44
                },
                "start": {
                  "column": 12,
                  "line": 40
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "range": [
                529,
                530
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
            "implements": [],
            "superClass": null,
            "range": [
              523,
              588
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 44
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          }
        ],
        "range": [
          499,
          590
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 45
          },
          "start": {
            "column": 9,
            "line": 39
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          497,
          498
        ],
        "decorators": [],
        "name": "M",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
            "line": 39
          },
          "start": {
            "column": 7,
            "line": 39
          }
        }
      },
      "kind": "module",
      "range": [
        490,
        590
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 39
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 45
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
