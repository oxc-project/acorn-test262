__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    770
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          14,
          47
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "range": [
                20,
                21
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
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 2
                },
                "start": {
                  "column": 5,
                  "line": 2
                }
              },
              "range": [
                21,
                29
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  23,
                  29
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 2
                  },
                  "start": {
                    "column": 7,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              20,
              30
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                35,
                36
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 3
                },
                "start": {
                  "column": 5,
                  "line": 3
                }
              },
              "range": [
                36,
                44
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  38,
                  44
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 3
                  },
                  "start": {
                    "column": 7,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              35,
              45
            ],
            "loc": {
              "end": {
                "column": 14,
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
            "column": 14,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          10,
          13
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "range": [
        0,
        47
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
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
            "name": "explicit",
            "optional": false,
            "range": [
              55,
              63
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 6
              },
              "start": {
                "column": 6,
                "line": 6
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
                  "name": "n",
                  "optional": false,
                  "range": [
                    72,
                    73
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 7
                    },
                    "start": {
                      "column": 4,
                      "line": 7
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "12",
                  "value": 12,
                  "range": [
                    75,
                    77
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 7
                    },
                    "start": {
                      "column": 7,
                      "line": 7
                    }
                  }
                },
                "range": [
                  72,
                  77
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 7
                  },
                  "start": {
                    "column": 4,
                    "line": 7
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    87,
                    88
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
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    88,
                    126
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              117,
                              121
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 8
                              },
                              "start": {
                                "column": 38,
                                "line": 8
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
                              122,
                              123
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 8
                              },
                              "start": {
                                "column": 43,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            117,
                            123
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 8
                            },
                            "start": {
                              "column": 38,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          110,
                          124
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 8
                          },
                          "start": {
                            "column": 31,
                            "line": 8
                          }
                        }
                      }
                    ],
                    "range": [
                      108,
                      126
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 8
                      },
                      "start": {
                        "column": 29,
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
                      "name": "this",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 8
                          },
                          "start": {
                            "column": 14,
                            "line": 8
                          }
                        },
                        "range": [
                          93,
                          98
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "range": [
                              95,
                              98
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 8
                              },
                              "start": {
                                "column": 16,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            95,
                            98
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 8
                            },
                            "start": {
                              "column": 16,
                              "line": 8
                            }
                          }
                        }
                      },
                      "range": [
                        89,
                        98
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 8
                        },
                        "start": {
                          "column": 10,
                          "line": 8
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 8
                      },
                      "start": {
                        "column": 20,
                        "line": 8
                      }
                    },
                    "range": [
                      99,
                      107
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        101,
                        107
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 8
                        },
                        "start": {
                          "column": 22,
                          "line": 8
                        }
                      }
                    }
                  },
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 8
                    },
                    "start": {
                      "column": 9,
                      "line": 8
                    }
                  }
                },
                "range": [
                  83,
                  126
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 8
                  },
                  "start": {
                    "column": 4,
                    "line": 8
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    136,
                    137
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 9
                    },
                    "start": {
                      "column": 8,
                      "line": 9
                    }
                  }
                },
                "kind": "set",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    137,
                    175
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
                                162,
                                166
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 9
                                },
                                "start": {
                                  "column": 34,
                                  "line": 9
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
                                167,
                                168
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 9
                                },
                                "start": {
                                  "column": 39,
                                  "line": 9
                                }
                              }
                            },
                            "range": [
                              162,
                              168
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 9
                              },
                              "start": {
                                "column": 34,
                                "line": 9
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "range": [
                              171,
                              172
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 9
                              },
                              "start": {
                                "column": 43,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            162,
                            172
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 9
                            },
                            "start": {
                              "column": 34,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          162,
                          173
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 9
                          },
                          "start": {
                            "column": 34,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "range": [
                      160,
                      175
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 9
                      },
                      "start": {
                        "column": 32,
                        "line": 9
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
                      "name": "this",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 9
                          },
                          "start": {
                            "column": 14,
                            "line": 9
                          }
                        },
                        "range": [
                          142,
                          147
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "range": [
                              144,
                              147
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 9
                              },
                              "start": {
                                "column": 16,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            144,
                            147
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 9
                            },
                            "start": {
                              "column": 16,
                              "line": 9
                            }
                          }
                        }
                      },
                      "range": [
                        138,
                        147
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 9
                        },
                        "start": {
                          "column": 10,
                          "line": 9
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 9
                          },
                          "start": {
                            "column": 22,
                            "line": 9
                          }
                        },
                        "range": [
                          150,
                          158
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            152,
                            158
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 9
                            },
                            "start": {
                              "column": 24,
                              "line": 9
                            }
                          }
                        }
                      },
                      "range": [
                        149,
                        158
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 9
                        },
                        "start": {
                          "column": 21,
                          "line": 9
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 9
                    },
                    "start": {
                      "column": 9,
                      "line": 9
                    }
                  }
                },
                "range": [
                  132,
                  175
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 9
                  },
                  "start": {
                    "column": 4,
                    "line": 9
                  }
                }
              }
            ],
            "range": [
              66,
              177
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 10
              },
              "start": {
                "column": 17,
                "line": 6
              }
            }
          },
          "range": [
            55,
            177
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 10
            },
            "start": {
              "column": 6,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        49,
        177
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
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
            "name": "copiedFromGetter",
            "optional": false,
            "range": [
              184,
              200
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 11
              },
              "start": {
                "column": 6,
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
                  "name": "n",
                  "optional": false,
                  "range": [
                    209,
                    210
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
                  "type": "Literal",
                  "raw": "14",
                  "value": 14,
                  "range": [
                    212,
                    214
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 12
                    },
                    "start": {
                      "column": 7,
                      "line": 12
                    }
                  }
                },
                "range": [
                  209,
                  214
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 12
                  },
                  "start": {
                    "column": 4,
                    "line": 12
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    224,
                    225
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
                      "line": 13
                    }
                  }
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    225,
                    263
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              254,
                              258
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 13
                              },
                              "start": {
                                "column": 38,
                                "line": 13
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
                              259,
                              260
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 13
                              },
                              "start": {
                                "column": 43,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            254,
                            260
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 13
                            },
                            "start": {
                              "column": 38,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          247,
                          261
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 13
                          },
                          "start": {
                            "column": 31,
                            "line": 13
                          }
                        }
                      }
                    ],
                    "range": [
                      245,
                      263
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 13
                      },
                      "start": {
                        "column": 29,
                        "line": 13
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
                      "name": "this",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 13
                          },
                          "start": {
                            "column": 14,
                            "line": 13
                          }
                        },
                        "range": [
                          230,
                          235
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "range": [
                              232,
                              235
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 13
                              },
                              "start": {
                                "column": 16,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            232,
                            235
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 13
                            },
                            "start": {
                              "column": 16,
                              "line": 13
                            }
                          }
                        }
                      },
                      "range": [
                        226,
                        235
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 13
                        },
                        "start": {
                          "column": 10,
                          "line": 13
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 13
                      },
                      "start": {
                        "column": 20,
                        "line": 13
                      }
                    },
                    "range": [
                      236,
                      244
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        238,
                        244
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 13
                        },
                        "start": {
                          "column": 22,
                          "line": 13
                        }
                      }
                    }
                  },
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 13
                    },
                    "start": {
                      "column": 9,
                      "line": 13
                    }
                  }
                },
                "range": [
                  220,
                  263
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 13
                  },
                  "start": {
                    "column": 4,
                    "line": 13
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    273,
                    274
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 14
                    },
                    "start": {
                      "column": 8,
                      "line": 14
                    }
                  }
                },
                "kind": "set",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    274,
                    293
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
                                280,
                                284
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 14
                                },
                                "start": {
                                  "column": 15,
                                  "line": 14
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
                                285,
                                286
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 14
                                },
                                "start": {
                                  "column": 20,
                                  "line": 14
                                }
                              }
                            },
                            "range": [
                              280,
                              286
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 14
                              },
                              "start": {
                                "column": 15,
                                "line": 14
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "range": [
                              289,
                              290
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 14
                              },
                              "start": {
                                "column": 24,
                                "line": 14
                              }
                            }
                          },
                          "range": [
                            280,
                            290
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 14
                            },
                            "start": {
                              "column": 15,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          280,
                          291
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 14
                          },
                          "start": {
                            "column": 15,
                            "line": 14
                          }
                        }
                      }
                    ],
                    "range": [
                      278,
                      293
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 14
                      },
                      "start": {
                        "column": 13,
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
                      "name": "n",
                      "optional": false,
                      "range": [
                        275,
                        276
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 14
                        },
                        "start": {
                          "column": 10,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 14
                    },
                    "start": {
                      "column": 9,
                      "line": 14
                    }
                  }
                },
                "range": [
                  269,
                  293
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
                    "line": 14
                  }
                }
              }
            ],
            "range": [
              203,
              295
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 15
              },
              "start": {
                "column": 25,
                "line": 11
              }
            }
          },
          "range": [
            184,
            295
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 15
            },
            "start": {
              "column": 6,
              "line": 11
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        178,
        295
      ],
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "copiedFromSetter",
            "optional": false,
            "range": [
              302,
              318
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 16
              },
              "start": {
                "column": 6,
                "line": 16
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
                  "name": "n",
                  "optional": false,
                  "range": [
                    327,
                    328
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 17
                    },
                    "start": {
                      "column": 4,
                      "line": 17
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "15",
                  "value": 15,
                  "range": [
                    330,
                    332
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 17
                    },
                    "start": {
                      "column": 7,
                      "line": 17
                    }
                  }
                },
                "range": [
                  327,
                  332
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 17
                  },
                  "start": {
                    "column": 4,
                    "line": 17
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    342,
                    343
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 18
                    },
                    "start": {
                      "column": 8,
                      "line": 18
                    }
                  }
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    343,
                    363
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              355,
                              359
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 18
                              },
                              "start": {
                                "column": 21,
                                "line": 18
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
                              360,
                              361
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 18
                              },
                              "start": {
                                "column": 26,
                                "line": 18
                              }
                            }
                          },
                          "range": [
                            355,
                            361
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 18
                            },
                            "start": {
                              "column": 21,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          348,
                          361
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 18
                          },
                          "start": {
                            "column": 14,
                            "line": 18
                          }
                        }
                      }
                    ],
                    "range": [
                      346,
                      363
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 18
                      },
                      "start": {
                        "column": 12,
                        "line": 18
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
                      "column": 29,
                      "line": 18
                    },
                    "start": {
                      "column": 9,
                      "line": 18
                    }
                  }
                },
                "range": [
                  338,
                  363
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
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    373,
                    374
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
                "kind": "set",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    374,
                    412
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
                                399,
                                403
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 19
                                },
                                "start": {
                                  "column": 34,
                                  "line": 19
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
                                404,
                                405
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 19
                                },
                                "start": {
                                  "column": 39,
                                  "line": 19
                                }
                              }
                            },
                            "range": [
                              399,
                              405
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 19
                              },
                              "start": {
                                "column": 34,
                                "line": 19
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "range": [
                              408,
                              409
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 19
                              },
                              "start": {
                                "column": 43,
                                "line": 19
                              }
                            }
                          },
                          "range": [
                            399,
                            409
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 19
                            },
                            "start": {
                              "column": 34,
                              "line": 19
                            }
                          }
                        },
                        "range": [
                          399,
                          410
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 19
                          },
                          "start": {
                            "column": 34,
                            "line": 19
                          }
                        }
                      }
                    ],
                    "range": [
                      397,
                      412
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 19
                      },
                      "start": {
                        "column": 32,
                        "line": 19
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
                      "name": "this",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 19
                          },
                          "start": {
                            "column": 14,
                            "line": 19
                          }
                        },
                        "range": [
                          379,
                          384
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "range": [
                              381,
                              384
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 19
                              },
                              "start": {
                                "column": 16,
                                "line": 19
                              }
                            }
                          },
                          "range": [
                            381,
                            384
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 19
                            },
                            "start": {
                              "column": 16,
                              "line": 19
                            }
                          }
                        }
                      },
                      "range": [
                        375,
                        384
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 19
                        },
                        "start": {
                          "column": 10,
                          "line": 19
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 19
                          },
                          "start": {
                            "column": 22,
                            "line": 19
                          }
                        },
                        "range": [
                          387,
                          395
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            389,
                            395
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 19
                            },
                            "start": {
                              "column": 24,
                              "line": 19
                            }
                          }
                        }
                      },
                      "range": [
                        386,
                        395
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 19
                        },
                        "start": {
                          "column": 21,
                          "line": 19
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 19
                    },
                    "start": {
                      "column": 9,
                      "line": 19
                    }
                  }
                },
                "range": [
                  369,
                  412
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 19
                  },
                  "start": {
                    "column": 4,
                    "line": 19
                  }
                }
              }
            ],
            "range": [
              321,
              414
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 20
              },
              "start": {
                "column": 25,
                "line": 16
              }
            }
          },
          "range": [
            302,
            414
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 20
            },
            "start": {
              "column": 6,
              "line": 16
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        296,
        414
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
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
            "name": "copiedFromGetterUnannotated",
            "optional": false,
            "range": [
              421,
              448
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 21
              },
              "start": {
                "column": 6,
                "line": 21
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
                  "name": "n",
                  "optional": false,
                  "range": [
                    457,
                    458
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 22
                    },
                    "start": {
                      "column": 4,
                      "line": 22
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "16",
                  "value": 16,
                  "range": [
                    460,
                    462
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 22
                    },
                    "start": {
                      "column": 7,
                      "line": 22
                    }
                  }
                },
                "range": [
                  457,
                  462
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 22
                  },
                  "start": {
                    "column": 4,
                    "line": 22
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    472,
                    473
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 23
                    },
                    "start": {
                      "column": 8,
                      "line": 23
                    }
                  }
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    473,
                    502
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              494,
                              498
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 23
                              },
                              "start": {
                                "column": 30,
                                "line": 23
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
                              499,
                              500
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 23
                              },
                              "start": {
                                "column": 35,
                                "line": 23
                              }
                            }
                          },
                          "range": [
                            494,
                            500
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 23
                            },
                            "start": {
                              "column": 30,
                              "line": 23
                            }
                          }
                        },
                        "range": [
                          487,
                          500
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 23
                          },
                          "start": {
                            "column": 23,
                            "line": 23
                          }
                        }
                      }
                    ],
                    "range": [
                      485,
                      502
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 23
                      },
                      "start": {
                        "column": 21,
                        "line": 23
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
                      "name": "this",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 23
                          },
                          "start": {
                            "column": 14,
                            "line": 23
                          }
                        },
                        "range": [
                          478,
                          483
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "range": [
                              480,
                              483
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 23
                              },
                              "start": {
                                "column": 16,
                                "line": 23
                              }
                            }
                          },
                          "range": [
                            480,
                            483
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 23
                            },
                            "start": {
                              "column": 16,
                              "line": 23
                            }
                          }
                        }
                      },
                      "range": [
                        474,
                        483
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 23
                        },
                        "start": {
                          "column": 10,
                          "line": 23
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 23
                    },
                    "start": {
                      "column": 9,
                      "line": 23
                    }
                  }
                },
                "range": [
                  468,
                  502
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 23
                  },
                  "start": {
                    "column": 4,
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    512,
                    513
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 24
                    },
                    "start": {
                      "column": 8,
                      "line": 24
                    }
                  }
                },
                "kind": "set",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    513,
                    538
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
                                525,
                                529
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 24
                                },
                                "start": {
                                  "column": 21,
                                  "line": 24
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
                                530,
                                531
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 24
                                },
                                "start": {
                                  "column": 26,
                                  "line": 24
                                }
                              }
                            },
                            "range": [
                              525,
                              531
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 24
                              },
                              "start": {
                                "column": 21,
                                "line": 24
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "range": [
                              534,
                              535
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 24
                              },
                              "start": {
                                "column": 30,
                                "line": 24
                              }
                            }
                          },
                          "range": [
                            525,
                            535
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 24
                            },
                            "start": {
                              "column": 21,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          525,
                          536
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 24
                          },
                          "start": {
                            "column": 21,
                            "line": 24
                          }
                        }
                      }
                    ],
                    "range": [
                      523,
                      538
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 24
                      },
                      "start": {
                        "column": 19,
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
                      "name": "this",
                      "optional": false,
                      "range": [
                        514,
                        518
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 24
                        },
                        "start": {
                          "column": 10,
                          "line": 24
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "range": [
                        520,
                        521
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
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 24
                    },
                    "start": {
                      "column": 9,
                      "line": 24
                    }
                  }
                },
                "range": [
                  508,
                  538
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 24
                  },
                  "start": {
                    "column": 4,
                    "line": 24
                  }
                }
              }
            ],
            "range": [
              451,
              540
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 25
              },
              "start": {
                "column": 36,
                "line": 21
              }
            }
          },
          "range": [
            421,
            540
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 25
            },
            "start": {
              "column": 6,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        415,
        540
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
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
          557,
          668
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
              "name": "n",
              "optional": false,
              "range": [
                563,
                564
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 28
                },
                "start": {
                  "column": 4,
                  "line": 28
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "17",
              "value": 17,
              "range": [
                567,
                569
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 28
                },
                "start": {
                  "column": 8,
                  "line": 28
                }
              }
            },
            "range": [
              563,
              570
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
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
              "name": "x",
              "optional": false,
              "range": [
                579,
                580
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
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                580,
                618
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "range": [
                          609,
                          613
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 29
                          },
                          "start": {
                            "column": 38,
                            "line": 29
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
                          614,
                          615
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 29
                          },
                          "start": {
                            "column": 43,
                            "line": 29
                          }
                        }
                      },
                      "range": [
                        609,
                        615
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 29
                        },
                        "start": {
                          "column": 38,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      602,
                      616
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 29
                      },
                      "start": {
                        "column": 31,
                        "line": 29
                      }
                    }
                  }
                ],
                "range": [
                  600,
                  618
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 29
                  },
                  "start": {
                    "column": 29,
                    "line": 29
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
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 29
                      },
                      "start": {
                        "column": 14,
                        "line": 29
                      }
                    },
                    "range": [
                      585,
                      590
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "range": [
                          587,
                          590
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 29
                          },
                          "start": {
                            "column": 16,
                            "line": 29
                          }
                        }
                      },
                      "range": [
                        587,
                        590
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 29
                        },
                        "start": {
                          "column": 16,
                          "line": 29
                        }
                      }
                    }
                  },
                  "range": [
                    581,
                    590
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 29
                    },
                    "start": {
                      "column": 10,
                      "line": 29
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 29
                  },
                  "start": {
                    "column": 20,
                    "line": 29
                  }
                },
                "range": [
                  591,
                  599
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    593,
                    599
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 29
                    },
                    "start": {
                      "column": 22,
                      "line": 29
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 47,
                  "line": 29
                },
                "start": {
                  "column": 9,
                  "line": 29
                }
              }
            },
            "range": [
              575,
              618
            ],
            "loc": {
              "end": {
                "column": 47,
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
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                627,
                628
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
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                628,
                666
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
                            653,
                            657
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 30
                            },
                            "start": {
                              "column": 34,
                              "line": 30
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
                            658,
                            659
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 30
                            },
                            "start": {
                              "column": 39,
                              "line": 30
                            }
                          }
                        },
                        "range": [
                          653,
                          659
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 30
                          },
                          "start": {
                            "column": 34,
                            "line": 30
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "range": [
                          662,
                          663
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 30
                          },
                          "start": {
                            "column": 43,
                            "line": 30
                          }
                        }
                      },
                      "range": [
                        653,
                        663
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 30
                        },
                        "start": {
                          "column": 34,
                          "line": 30
                        }
                      }
                    },
                    "range": [
                      653,
                      664
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 30
                      },
                      "start": {
                        "column": 34,
                        "line": 30
                      }
                    }
                  }
                ],
                "range": [
                  651,
                  666
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 30
                  },
                  "start": {
                    "column": 32,
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
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 30
                      },
                      "start": {
                        "column": 14,
                        "line": 30
                      }
                    },
                    "range": [
                      633,
                      638
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "range": [
                          635,
                          638
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 30
                          },
                          "start": {
                            "column": 16,
                            "line": 30
                          }
                        }
                      },
                      "range": [
                        635,
                        638
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 30
                        },
                        "start": {
                          "column": 16,
                          "line": 30
                        }
                      }
                    }
                  },
                  "range": [
                    629,
                    638
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 30
                    },
                    "start": {
                      "column": 10,
                      "line": 30
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 30
                      },
                      "start": {
                        "column": 22,
                        "line": 30
                      }
                    },
                    "range": [
                      641,
                      649
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        643,
                        649
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 30
                        },
                        "start": {
                          "column": 24,
                          "line": 30
                        }
                      }
                    }
                  },
                  "range": [
                    640,
                    649
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 30
                    },
                    "start": {
                      "column": 21,
                      "line": 30
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 30
                },
                "start": {
                  "column": 9,
                  "line": 30
                }
              }
            },
            "range": [
              623,
              666
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 30
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
            "line": 31
          },
          "start": {
            "column": 15,
            "line": 27
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Explicit",
        "optional": false,
        "range": [
          548,
          556
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 27
          },
          "start": {
            "column": 6,
            "line": 27
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        542,
        668
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          686,
          769
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
              "name": "n",
              "optional": false,
              "range": [
                692,
                693
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 33
                },
                "start": {
                  "column": 4,
                  "line": 33
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "21",
              "value": 21,
              "range": [
                696,
                698
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 33
                },
                "start": {
                  "column": 8,
                  "line": 33
                }
              }
            },
            "range": [
              692,
              699
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
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
              "name": "x",
              "optional": false,
              "range": [
                708,
                709
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 34
                },
                "start": {
                  "column": 8,
                  "line": 34
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
                709,
                729
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "range": [
                          721,
                          725
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 34
                          },
                          "start": {
                            "column": 21,
                            "line": 34
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
                          726,
                          727
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 34
                          },
                          "start": {
                            "column": 26,
                            "line": 34
                          }
                        }
                      },
                      "range": [
                        721,
                        727
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 34
                        },
                        "start": {
                          "column": 21,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      714,
                      727
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 34
                      },
                      "start": {
                        "column": 14,
                        "line": 34
                      }
                    }
                  }
                ],
                "range": [
                  712,
                  729
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 34
                  },
                  "start": {
                    "column": 12,
                    "line": 34
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
                  "column": 29,
                  "line": 34
                },
                "start": {
                  "column": 9,
                  "line": 34
                }
              }
            },
            "range": [
              704,
              729
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 17,
            "line": 32
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Contextual",
        "optional": false,
        "range": [
          675,
          685
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 32
          },
          "start": {
            "column": 6,
            "line": 32
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        669,
        769
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 36
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
