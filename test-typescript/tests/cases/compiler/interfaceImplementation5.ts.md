__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    514
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          13,
          36
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getset1",
              "optional": false,
              "range": [
                19,
                26
              ],
              "loc": {
                "end": {
                  "column": 11,
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
                  "column": 18,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              },
              "range": [
                26,
                33
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  27,
                  33
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
              19,
              34
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 13,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I1",
        "optional": false,
        "range": [
          10,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
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
        36
      ],
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          61,
          100
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
              "name": "getset1",
              "optional": false,
              "range": [
                78,
                85
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 6
                },
                "start": {
                  "column": 15,
                  "line": 6
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
                85,
                98
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        95,
                        96
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 6
                        },
                        "start": {
                          "column": 32,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      88,
                      97
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 6
                      },
                      "start": {
                        "column": 25,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  87,
                  98
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 6
                  },
                  "start": {
                    "column": 24,
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
                  "column": 35,
                  "line": 6
                },
                "start": {
                  "column": 22,
                  "line": 6
                }
              }
            },
            "range": [
              67,
              98
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 6
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
            "line": 7
          },
          "start": {
            "column": 23,
            "line": 5
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "range": [
          44,
          46
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 5
          },
          "start": {
            "column": 6,
            "line": 5
          }
        }
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I1",
            "optional": false,
            "range": [
              58,
              60
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 5
              },
              "start": {
                "column": 20,
                "line": 5
              }
            }
          },
          "range": [
            58,
            60
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 5
            },
            "start": {
              "column": 20,
              "line": 5
            }
          }
        }
      ],
      "superClass": null,
      "range": [
        38,
        100
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
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
          125,
          165
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
              "name": "getset1",
              "optional": false,
              "range": [
                142,
                149
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 10
                },
                "start": {
                  "column": 15,
                  "line": 10
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
                149,
                163
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  161,
                  163
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 10
                  },
                  "start": {
                    "column": 34,
                    "line": 10
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
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 10
                      },
                      "start": {
                        "column": 26,
                        "line": 10
                      }
                    },
                    "range": [
                      153,
                      160
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        154,
                        160
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 10
                        },
                        "start": {
                          "column": 27,
                          "line": 10
                        }
                      }
                    }
                  },
                  "range": [
                    150,
                    160
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 10
                    },
                    "start": {
                      "column": 23,
                      "line": 10
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 10
                },
                "start": {
                  "column": 22,
                  "line": 10
                }
              }
            },
            "range": [
              131,
              163
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 23,
            "line": 9
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "range": [
          108,
          110
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 9
          },
          "start": {
            "column": 6,
            "line": 9
          }
        }
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I1",
            "optional": false,
            "range": [
              122,
              124
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 9
              },
              "start": {
                "column": 20,
                "line": 9
              }
            }
          },
          "range": [
            122,
            124
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 9
            },
            "start": {
              "column": 20,
              "line": 9
            }
          }
        }
      ],
      "superClass": null,
      "range": [
        102,
        165
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          190,
          266
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
              "name": "getset1",
              "optional": false,
              "range": [
                207,
                214
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 14
                },
                "start": {
                  "column": 15,
                  "line": 14
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
                214,
                227
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        224,
                        225
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 14
                        },
                        "start": {
                          "column": 32,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      217,
                      226
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 14
                      },
                      "start": {
                        "column": 25,
                        "line": 14
                      }
                    }
                  }
                ],
                "range": [
                  216,
                  227
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 14
                  },
                  "start": {
                    "column": 24,
                    "line": 14
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
                  "column": 35,
                  "line": 14
                },
                "start": {
                  "column": 22,
                  "line": 14
                }
              }
            },
            "range": [
              196,
              227
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
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
              "name": "getset1",
              "optional": false,
              "range": [
                243,
                250
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 15
                },
                "start": {
                  "column": 15,
                  "line": 15
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
                250,
                264
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  262,
                  264
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 15
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 15
                      },
                      "start": {
                        "column": 26,
                        "line": 15
                      }
                    },
                    "range": [
                      254,
                      261
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        255,
                        261
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 15
                        },
                        "start": {
                          "column": 27,
                          "line": 15
                        }
                      }
                    }
                  },
                  "range": [
                    251,
                    261
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 15
                    },
                    "start": {
                      "column": 23,
                      "line": 15
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 15
                },
                "start": {
                  "column": 22,
                  "line": 15
                }
              }
            },
            "range": [
              232,
              264
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 15
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
            "line": 16
          },
          "start": {
            "column": 23,
            "line": 13
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "range": [
          173,
          175
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 13
          },
          "start": {
            "column": 6,
            "line": 13
          }
        }
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I1",
            "optional": false,
            "range": [
              187,
              189
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 13
              },
              "start": {
                "column": 20,
                "line": 13
              }
            }
          },
          "range": [
            187,
            189
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 13
            },
            "start": {
              "column": 20,
              "line": 13
            }
          }
        }
      ],
      "superClass": null,
      "range": [
        167,
        266
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          291,
          341
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
              "name": "getset1",
              "optional": false,
              "range": [
                308,
                315
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 19
                },
                "start": {
                  "column": 15,
                  "line": 19
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
                315,
                339
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 19
                              },
                              "start": {
                                "column": 30,
                                "line": 19
                              }
                            },
                            "range": [
                              323,
                              327
                            ],
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "range": [
                                324,
                                327
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 19
                                },
                                "start": {
                                  "column": 31,
                                  "line": 19
                                }
                              }
                            }
                          },
                          "range": [
                            322,
                            327
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 19
                            },
                            "start": {
                              "column": 29,
                              "line": 19
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          322,
                          327
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 19
                          },
                          "start": {
                            "column": 29,
                            "line": 19
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      318,
                      328
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 19
                      },
                      "start": {
                        "column": 25,
                        "line": 19
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
                        336,
                        337
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
                      329,
                      338
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 19
                      },
                      "start": {
                        "column": 36,
                        "line": 19
                      }
                    }
                  }
                ],
                "range": [
                  317,
                  339
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 19
                  },
                  "start": {
                    "column": 24,
                    "line": 19
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
                  "column": 46,
                  "line": 19
                },
                "start": {
                  "column": 22,
                  "line": 19
                }
              }
            },
            "range": [
              297,
              339
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 23,
            "line": 18
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C4",
        "optional": false,
        "range": [
          274,
          276
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 18
          },
          "start": {
            "column": 6,
            "line": 18
          }
        }
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I1",
            "optional": false,
            "range": [
              288,
              290
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 18
              },
              "start": {
                "column": 20,
                "line": 18
              }
            }
          },
          "range": [
            288,
            290
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 18
            },
            "start": {
              "column": 20,
              "line": 18
            }
          }
        }
      ],
      "superClass": null,
      "range": [
        268,
        341
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          366,
          403
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
              "name": "getset1",
              "optional": false,
              "range": [
                383,
                390
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 23
                },
                "start": {
                  "column": 15,
                  "line": 23
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
                390,
                401
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  399,
                  401
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 23
                  },
                  "start": {
                    "column": 31,
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
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 23
                      },
                      "start": {
                        "column": 26,
                        "line": 23
                      }
                    },
                    "range": [
                      394,
                      398
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        395,
                        398
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 23
                        },
                        "start": {
                          "column": 27,
                          "line": 23
                        }
                      }
                    }
                  },
                  "range": [
                    391,
                    398
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 23
                    },
                    "start": {
                      "column": 23,
                      "line": 23
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 23
                },
                "start": {
                  "column": 22,
                  "line": 23
                }
              }
            },
            "range": [
              372,
              401
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
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
            "column": 23,
            "line": 22
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C5",
        "optional": false,
        "range": [
          349,
          351
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 22
          },
          "start": {
            "column": 6,
            "line": 22
          }
        }
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I1",
            "optional": false,
            "range": [
              363,
              365
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 22
              },
              "start": {
                "column": 20,
                "line": 22
              }
            }
          },
          "range": [
            363,
            365
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 22
            },
            "start": {
              "column": 20,
              "line": 22
            }
          }
        }
      ],
      "superClass": null,
      "range": [
        343,
        403
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          428,
          512
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
              "name": "getset1",
              "optional": false,
              "range": [
                445,
                452
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 27
                },
                "start": {
                  "column": 15,
                  "line": 27
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
                452,
                463
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  461,
                  463
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 27
                  },
                  "start": {
                    "column": 31,
                    "line": 27
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
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 27
                      },
                      "start": {
                        "column": 26,
                        "line": 27
                      }
                    },
                    "range": [
                      456,
                      460
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        457,
                        460
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 27
                        },
                        "start": {
                          "column": 27,
                          "line": 27
                        }
                      }
                    }
                  },
                  "range": [
                    453,
                    460
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
                }
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 27
                },
                "start": {
                  "column": 22,
                  "line": 27
                }
              }
            },
            "range": [
              434,
              463
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
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
              "name": "getset1",
              "optional": false,
              "range": [
                479,
                486
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 28
                },
                "start": {
                  "column": 15,
                  "line": 28
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
                486,
                510
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 28
                              },
                              "start": {
                                "column": 30,
                                "line": 28
                              }
                            },
                            "range": [
                              494,
                              498
                            ],
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "range": [
                                495,
                                498
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 28
                                },
                                "start": {
                                  "column": 31,
                                  "line": 28
                                }
                              }
                            }
                          },
                          "range": [
                            493,
                            498
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 28
                            },
                            "start": {
                              "column": 29,
                              "line": 28
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          493,
                          498
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 28
                          },
                          "start": {
                            "column": 29,
                            "line": 28
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      489,
                      499
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 28
                      },
                      "start": {
                        "column": 25,
                        "line": 28
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
                        507,
                        508
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 28
                        },
                        "start": {
                          "column": 43,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      500,
                      509
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 28
                      },
                      "start": {
                        "column": 36,
                        "line": 28
                      }
                    }
                  }
                ],
                "range": [
                  488,
                  510
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 28
                  },
                  "start": {
                    "column": 24,
                    "line": 28
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
                  "column": 46,
                  "line": 28
                },
                "start": {
                  "column": 22,
                  "line": 28
                }
              }
            },
            "range": [
              468,
              510
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 23,
            "line": 26
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C6",
        "optional": false,
        "range": [
          411,
          413
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 26
          },
          "start": {
            "column": 6,
            "line": 26
          }
        }
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I1",
            "optional": false,
            "range": [
              425,
              427
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 26
              },
              "start": {
                "column": 20,
                "line": 26
              }
            }
          },
          "range": [
            425,
            427
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 26
            },
            "start": {
              "column": 20,
              "line": 26
            }
          }
        }
      ],
      "superClass": null,
      "range": [
        405,
        512
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 31
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
