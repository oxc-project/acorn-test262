__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    75,
    370
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
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
                110,
                111
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "range": [
              103,
              112
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          97,
          114
        ],
        "loc": {
          "end": {
            "column": 1,
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
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          84,
          87
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
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
                "column": 20,
                "line": 3
              },
              "start": {
                "column": 17,
                "line": 3
              }
            },
            "range": [
              92,
              95
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  94,
                  95
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 3
                  },
                  "start": {
                    "column": 19,
                    "line": 3
                  }
                }
              },
              "range": [
                94,
                95
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 3
                },
                "start": {
                  "column": 19,
                  "line": 3
                }
              }
            }
          },
          "range": [
            91,
            95
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 3
            },
            "start": {
              "column": 16,
              "line": 3
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 15,
            "line": 3
          },
          "start": {
            "column": 12,
            "line": 3
          }
        },
        "range": [
          87,
          90
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
                88,
                89
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              88,
              89
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 3
              },
              "start": {
                "column": 13,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        75,
        114
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
                  "column": 1,
                  "line": 10
                },
                "start": {
                  "column": 5,
                  "line": 7
                }
              },
              "range": [
                121,
                174
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 8
                            },
                            "start": {
                              "column": 6,
                              "line": 8
                            }
                          },
                          "range": [
                            131,
                            139
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              133,
                              139
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 8
                              },
                              "start": {
                                "column": 8,
                                "line": 8
                              }
                            }
                          }
                        },
                        "range": [
                          130,
                          139
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 8
                          },
                          "start": {
                            "column": 5,
                            "line": 8
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 8
                        },
                        "start": {
                          "column": 15,
                          "line": 8
                        }
                      },
                      "range": [
                        140,
                        148
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Object",
                          "optional": false,
                          "range": [
                            142,
                            148
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 8
                            },
                            "start": {
                              "column": 17,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          142,
                          148
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 8
                          },
                          "start": {
                            "column": 17,
                            "line": 8
                          }
                        }
                      }
                    },
                    "range": [
                      129,
                      149
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 8
                      },
                      "start": {
                        "column": 4,
                        "line": 8
                      }
                    }
                  },
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 9
                            },
                            "start": {
                              "column": 6,
                              "line": 9
                            }
                          },
                          "range": [
                            156,
                            164
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              158,
                              164
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 9
                              },
                              "start": {
                                "column": 8,
                                "line": 9
                              }
                            }
                          }
                        },
                        "range": [
                          155,
                          164
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 9
                          },
                          "start": {
                            "column": 5,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 9
                        },
                        "start": {
                          "column": 15,
                          "line": 9
                        }
                      },
                      "range": [
                        165,
                        171
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Date",
                          "optional": false,
                          "range": [
                            167,
                            171
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 9
                            },
                            "start": {
                              "column": 17,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          167,
                          171
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 9
                          },
                          "start": {
                            "column": 17,
                            "line": 9
                          }
                        }
                      }
                    },
                    "range": [
                      154,
                      172
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
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
                  123,
                  174
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 10
                  },
                  "start": {
                    "column": 7,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              120,
              174
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": null,
          "range": [
            120,
            174
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 10
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        116,
        175
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 10
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
            "name": "r",
            "optional": false,
            "range": [
              180,
              181
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  188,
                  189
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 11
                  },
                  "start": {
                    "column": 12,
                    "line": 11
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                184,
                187
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 11
                },
                "start": {
                  "column": 8,
                  "line": 11
                }
              }
            },
            "optional": false,
            "range": [
              184,
              190
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 11
              },
              "start": {
                "column": 8,
                "line": 11
              }
            }
          },
          "range": [
            180,
            190
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        176,
        191
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 17
                      },
                      "start": {
                        "column": 9,
                        "line": 14
                      }
                    },
                    "range": [
                      243,
                      304
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "parameters": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 10,
                                    "line": 15
                                  }
                                },
                                "range": [
                                  257,
                                  265
                                ],
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "range": [
                                    259,
                                    265
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
                                      "line": 15
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 15
                                    }
                                  }
                                }
                              },
                              "range": [
                                256,
                                265
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 15
                                },
                                "start": {
                                  "column": 9,
                                  "line": 15
                                }
                              }
                            }
                          ],
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 15
                              },
                              "start": {
                                "column": 19,
                                "line": 15
                              }
                            },
                            "range": [
                              266,
                              274
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Object",
                                "optional": false,
                                "range": [
                                  268,
                                  274
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 15
                                  }
                                }
                              },
                              "range": [
                                268,
                                274
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 15
                                },
                                "start": {
                                  "column": 21,
                                  "line": 15
                                }
                              }
                            }
                          },
                          "range": [
                            255,
                            275
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 15
                            },
                            "start": {
                              "column": 8,
                              "line": 15
                            }
                          }
                        },
                        {
                          "type": "TSIndexSignature",
                          "parameters": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 10,
                                    "line": 16
                                  }
                                },
                                "range": [
                                  286,
                                  294
                                ],
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    288,
                                    294
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
                                }
                              },
                              "range": [
                                285,
                                294
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 16
                                },
                                "start": {
                                  "column": 9,
                                  "line": 16
                                }
                              }
                            }
                          ],
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 16
                              },
                              "start": {
                                "column": 19,
                                "line": 16
                              }
                            },
                            "range": [
                              295,
                              298
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  297,
                                  298
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
                                297,
                                298
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
                            }
                          },
                          "range": [
                            284,
                            298
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 16
                            },
                            "start": {
                              "column": 8,
                              "line": 16
                            }
                          }
                        }
                      ],
                      "range": [
                        245,
                        304
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 17
                        },
                        "start": {
                          "column": 11,
                          "line": 14
                        }
                      }
                    }
                  },
                  "range": [
                    242,
                    304
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 17
                    },
                    "start": {
                      "column": 8,
                      "line": 14
                    }
                  }
                },
                "init": null,
                "range": [
                  242,
                  304
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 17
                  },
                  "start": {
                    "column": 8,
                    "line": 14
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              238,
              305
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 17
              },
              "start": {
                "column": 4,
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
                  "name": "r2",
                  "optional": false,
                  "range": [
                    314,
                    316
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 18
                    },
                    "start": {
                      "column": 8,
                      "line": 18
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        323,
                        324
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 18
                        },
                        "start": {
                          "column": 17,
                          "line": 18
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      319,
                      322
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 18
                      },
                      "start": {
                        "column": 13,
                        "line": 18
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    319,
                    325
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 18
                    },
                    "start": {
                      "column": 13,
                      "line": 18
                    }
                  }
                },
                "range": [
                  314,
                  325
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 18
                  },
                  "start": {
                    "column": 8,
                    "line": 18
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              310,
              326
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
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
                  "name": "d",
                  "optional": false,
                  "range": [
                    335,
                    336
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
                "init": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r2",
                    "optional": false,
                    "range": [
                      339,
                      341
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 19
                      },
                      "start": {
                        "column": 12,
                        "line": 19
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      342,
                      343
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 19
                      },
                      "start": {
                        "column": 15,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    339,
                    344
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 19
                    },
                    "start": {
                      "column": 12,
                      "line": 19
                    }
                  }
                },
                "range": [
                  335,
                  344
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 19
                  },
                  "start": {
                    "column": 8,
                    "line": 19
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              331,
              345
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
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
                  "name": "e",
                  "optional": false,
                  "range": [
                    355,
                    356
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 20
                    },
                    "start": {
                      "column": 8,
                      "line": 20
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r2",
                    "optional": false,
                    "range": [
                      359,
                      361
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 20
                      },
                      "start": {
                        "column": 12,
                        "line": 20
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "raw": "'1'",
                    "value": "1",
                    "range": [
                      362,
                      365
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 20
                      },
                      "start": {
                        "column": 15,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    359,
                    366
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 20
                    },
                    "start": {
                      "column": 12,
                      "line": 20
                    }
                  }
                },
                "range": [
                  355,
                  366
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 20
                  },
                  "start": {
                    "column": 8,
                    "line": 20
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              351,
              367
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
          }
        ],
        "range": [
          232,
          370
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 39,
            "line": 13
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "other",
        "optional": false,
        "range": [
          202,
          207
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 13
          },
          "start": {
            "column": 9,
            "line": 13
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 37,
                "line": 13
              },
              "start": {
                "column": 34,
                "line": 13
              }
            },
            "range": [
              227,
              230
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  229,
                  230
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 13
                  },
                  "start": {
                    "column": 36,
                    "line": 13
                  }
                }
              },
              "range": [
                229,
                230
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 13
                },
                "start": {
                  "column": 36,
                  "line": 13
                }
              }
            }
          },
          "range": [
            224,
            230
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 13
            },
            "start": {
              "column": 31,
              "line": 13
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 30,
            "line": 13
          },
          "start": {
            "column": 14,
            "line": 13
          }
        },
        "range": [
          207,
          223
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "range": [
                  218,
                  222
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 13
                  },
                  "start": {
                    "column": 25,
                    "line": 13
                  }
                }
              },
              "range": [
                218,
                222
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 13
                },
                "start": {
                  "column": 25,
                  "line": 13
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                208,
                209
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 13
                },
                "start": {
                  "column": 15,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              208,
              222
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 13
              },
              "start": {
                "column": 15,
                "line": 13
              }
            }
          }
        ]
      },
      "range": [
        193,
        370
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 21
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
