__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    354
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
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                42,
                43
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "range": [
              35,
              44
            ],
            "loc": {
              "end": {
                "column": 13,
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
          29,
          46
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 29,
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
        "name": "getNumber",
        "optional": false,
        "range": [
          9,
          18
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 28,
            "line": 1
          },
          "start": {
            "column": 20,
            "line": 1
          }
        },
        "range": [
          20,
          28
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            22,
            28
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 1
            },
            "start": {
              "column": 22,
              "line": 1
            }
          }
        }
      },
      "range": [
        0,
        46
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
          188
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getNumber",
              "optional": false,
              "range": [
                67,
                76
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
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
                76,
                112
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
                        104,
                        105
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 6
                        },
                        "start": {
                          "column": 15,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      97,
                      106
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  87,
                  112
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 7
                  },
                  "start": {
                    "column": 24,
                    "line": 5
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 5
                  },
                  "start": {
                    "column": 15,
                    "line": 5
                  }
                },
                "range": [
                  78,
                  86
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    80,
                    86
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 5
                    },
                    "start": {
                      "column": 17,
                      "line": 5
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 7
                },
                "start": {
                  "column": 13,
                  "line": 5
                }
              }
            },
            "range": [
              67,
              112
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 5
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
              "name": "doSomething",
              "optional": false,
              "range": [
                117,
                128
              ],
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                128,
                186
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
                      "name": "a",
                      "optional": false,
                      "range": [
                        178,
                        179
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 9
                        },
                        "start": {
                          "column": 15,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      171,
                      180
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
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
                  161,
                  186
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 48,
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      129,
                      130
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 8
                      },
                      "start": {
                        "column": 16,
                        "line": 8
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
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
                            "column": 24,
                            "line": 8
                          },
                          "start": {
                            "column": 20,
                            "line": 8
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getNumber",
                        "optional": false,
                        "range": [
                          138,
                          147
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 8
                          },
                          "start": {
                            "column": 25,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        133,
                        147
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 8
                        },
                        "start": {
                          "column": 20,
                          "line": 8
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      133,
                      149
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 8
                      },
                      "start": {
                        "column": 20,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    129,
                    149
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 8
                    },
                    "start": {
                      "column": 16,
                      "line": 8
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 8
                  },
                  "start": {
                    "column": 37,
                    "line": 8
                  }
                },
                "range": [
                  150,
                  160
                ],
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      159,
                      160
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 8
                      },
                      "start": {
                        "column": 46,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    152,
                    160
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 8
                    },
                    "start": {
                      "column": 39,
                      "line": 8
                    }
                  }
                }
              },
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
              117,
              186
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
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 14,
            "line": 4
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Example",
        "optional": false,
        "range": [
          53,
          60
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 4
          },
          "start": {
            "column": 6,
            "line": 4
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        47,
        188
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 4
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
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                254,
                255
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 13
                },
                "start": {
                  "column": 11,
                  "line": 13
                }
              }
            },
            "range": [
              247,
              256
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          }
        ],
        "range": [
          241,
          258
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 52,
            "line": 12
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "weird",
        "optional": false,
        "range": [
          198,
          203
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 12
          },
          "start": {
            "column": 9,
            "line": 12
          }
        }
      },
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
                "column": 28,
                "line": 12
              },
              "start": {
                "column": 19,
                "line": 12
              }
            },
            "range": [
              208,
              217
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Example",
                "optional": false,
                "range": [
                  210,
                  217
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 12
                  },
                  "start": {
                    "column": 21,
                    "line": 12
                  }
                }
              },
              "range": [
                210,
                217
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 12
                },
                "start": {
                  "column": 21,
                  "line": 12
                }
              }
            }
          },
          "range": [
            204,
            217
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 12
            },
            "start": {
              "column": 15,
              "line": 12
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              219,
              220
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 12
              },
              "start": {
                "column": 30,
                "line": 12
              }
            }
          },
          "optional": false,
          "right": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "range": [
                  223,
                  227
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 12
                  },
                  "start": {
                    "column": 34,
                    "line": 12
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getNumber",
                "optional": false,
                "range": [
                  228,
                  237
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 12
                  },
                  "start": {
                    "column": 39,
                    "line": 12
                  }
                }
              },
              "range": [
                223,
                237
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 12
                },
                "start": {
                  "column": 34,
                  "line": 12
                }
              }
            },
            "optional": false,
            "range": [
              223,
              239
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 12
              },
              "start": {
                "column": 34,
                "line": 12
              }
            }
          },
          "range": [
            219,
            239
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 12
            },
            "start": {
              "column": 30,
              "line": 12
            }
          }
        }
      ],
      "range": [
        189,
        258
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          271,
          353
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "doSomething",
              "optional": false,
              "range": [
                277,
                288
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
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
                288,
                351
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
                      "name": "a",
                      "optional": false,
                      "range": [
                        343,
                        344
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 17
                        },
                        "start": {
                          "column": 15,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      336,
                      345
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
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
                  326,
                  351
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 18
                  },
                  "start": {
                    "column": 53,
                    "line": 16
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
                        "column": 29,
                        "line": 16
                      },
                      "start": {
                        "column": 20,
                        "line": 16
                      }
                    },
                    "range": [
                      293,
                      302
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Example",
                        "optional": false,
                        "range": [
                          295,
                          302
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 16
                          },
                          "start": {
                            "column": 22,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        295,
                        302
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 16
                        },
                        "start": {
                          "column": 22,
                          "line": 16
                        }
                      }
                    }
                  },
                  "range": [
                    289,
                    302
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 16
                    },
                    "start": {
                      "column": 16,
                      "line": 16
                    }
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      304,
                      305
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 16
                      },
                      "start": {
                        "column": 31,
                        "line": 16
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "range": [
                          308,
                          312
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 16
                          },
                          "start": {
                            "column": 35,
                            "line": 16
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "getNumber",
                        "optional": false,
                        "range": [
                          313,
                          322
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 16
                          },
                          "start": {
                            "column": 40,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        308,
                        322
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 16
                        },
                        "start": {
                          "column": 35,
                          "line": 16
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      308,
                      324
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 16
                      },
                      "start": {
                        "column": 35,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    304,
                    324
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 16
                    },
                    "start": {
                      "column": 31,
                      "line": 16
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
                  "line": 16
                }
              }
            },
            "range": [
              277,
              351
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 16
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
            "column": 12,
            "line": 15
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Weird",
        "optional": false,
        "range": [
          265,
          270
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 15
          },
          "start": {
            "column": 6,
            "line": 15
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        259,
        353
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 20
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
