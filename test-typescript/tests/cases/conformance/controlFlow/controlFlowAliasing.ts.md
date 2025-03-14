__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    49,
    6969
  ],
  "body": [
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
                  "name": "isString",
                  "optional": false,
                  "range": [
                    94,
                    102
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 4
                    },
                    "start": {
                      "column": 10,
                      "line": 4
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        112,
                        113
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 4
                        },
                        "start": {
                          "column": 28,
                          "line": 4
                        }
                      }
                    },
                    "operator": "typeof",
                    "prefix": true,
                    "range": [
                      105,
                      113
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 4
                      },
                      "start": {
                        "column": 21,
                        "line": 4
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"string\"",
                    "value": "string",
                    "range": [
                      118,
                      126
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 4
                      },
                      "start": {
                        "column": 34,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    105,
                    126
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 4
                    },
                    "start": {
                      "column": 21,
                      "line": 4
                    }
                  }
                },
                "range": [
                  94,
                  126
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 4
                  },
                  "start": {
                    "column": 10,
                    "line": 4
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              88,
              127
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": {
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
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 9
                            },
                            "start": {
                              "column": 13,
                              "line": 9
                            }
                          },
                          "range": [
                            205,
                            213
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              207,
                              213
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 9
                              },
                              "start": {
                                "column": 15,
                                "line": 9
                              }
                            }
                          }
                        },
                        "range": [
                          204,
                          213
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 9
                          },
                          "start": {
                            "column": 12,
                            "line": 9
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          216,
                          217
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 9
                          },
                          "start": {
                            "column": 24,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        204,
                        217
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
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
                  "kind": "let",
                  "range": [
                    200,
                    218
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
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
                190,
                224
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 10
                },
                "start": {
                  "column": 9,
                  "line": 8
                }
              }
            },
            "consequent": {
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
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 6
                            },
                            "start": {
                              "column": 13,
                              "line": 6
                            }
                          },
                          "range": [
                            161,
                            169
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              163,
                              169
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 6
                              },
                              "start": {
                                "column": 15,
                                "line": 6
                              }
                            }
                          }
                        },
                        "range": [
                          160,
                          169
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 6
                          },
                          "start": {
                            "column": 12,
                            "line": 6
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          172,
                          173
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 6
                          },
                          "start": {
                            "column": 24,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        160,
                        173
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 6
                        },
                        "start": {
                          "column": 12,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    156,
                    174
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
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
                146,
                180
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 7
                },
                "start": {
                  "column": 18,
                  "line": 5
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "isString",
              "optional": false,
              "range": [
                136,
                144
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 5
                },
                "start": {
                  "column": 8,
                  "line": 5
                }
              }
            },
            "range": [
              132,
              224
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "range": [
          82,
          226
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 33,
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
        "name": "f10",
        "optional": false,
        "range": [
          58,
          61
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
                "column": 31,
                "line": 3
              },
              "start": {
                "column": 14,
                "line": 3
              }
            },
            "range": [
              63,
              80
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    65,
                    71
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 3
                    },
                    "start": {
                      "column": 16,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    74,
                    80
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 3
                    },
                    "start": {
                      "column": 25,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                65,
                80
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 3
                },
                "start": {
                  "column": 16,
                  "line": 3
                }
              }
            }
          },
          "range": [
            62,
            80
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 3
            },
            "start": {
              "column": 13,
              "line": 3
            }
          }
        }
      ],
      "range": [
        49,
        226
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 3
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
                  "name": "isString",
                  "optional": false,
                  "range": [
                    265,
                    273
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 14
                    },
                    "start": {
                      "column": 10,
                      "line": 14
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        283,
                        284
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 14
                        },
                        "start": {
                          "column": 28,
                          "line": 14
                        }
                      }
                    },
                    "operator": "typeof",
                    "prefix": true,
                    "range": [
                      276,
                      284
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 14
                      },
                      "start": {
                        "column": 21,
                        "line": 14
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"string\"",
                    "value": "string",
                    "range": [
                      289,
                      297
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 14
                      },
                      "start": {
                        "column": 34,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    276,
                    297
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 14
                    },
                    "start": {
                      "column": 21,
                      "line": 14
                    }
                  }
                },
                "range": [
                  265,
                  297
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 14
                  },
                  "start": {
                    "column": 10,
                    "line": 14
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              259,
              298
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
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
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 16
                            },
                            "start": {
                              "column": 13,
                              "line": 16
                            }
                          },
                          "range": [
                            332,
                            340
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              334,
                              340
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 16
                              },
                              "start": {
                                "column": 15,
                                "line": 16
                              }
                            }
                          }
                        },
                        "range": [
                          331,
                          340
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 16
                          },
                          "start": {
                            "column": 12,
                            "line": 16
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          343,
                          344
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 16
                          },
                          "start": {
                            "column": 24,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        331,
                        344
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
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
                  "kind": "let",
                  "range": [
                    327,
                    345
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
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
                317,
                351
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 17
                },
                "start": {
                  "column": 18,
                  "line": 15
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "isString",
              "optional": false,
              "range": [
                307,
                315
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 15
                },
                "start": {
                  "column": 8,
                  "line": 15
                }
              }
            },
            "range": [
              303,
              351
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          }
        ],
        "range": [
          253,
          353
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 25,
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
        "name": "f11",
        "optional": false,
        "range": [
          237,
          240
        ],
        "loc": {
          "end": {
            "column": 12,
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
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 23,
                "line": 13
              },
              "start": {
                "column": 14,
                "line": 13
              }
            },
            "range": [
              242,
              251
            ],
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "range": [
                244,
                251
              ],
              "loc": {
                "end": {
                  "column": 23,
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
            241,
            251
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 13
            },
            "start": {
              "column": 13,
              "line": 13
            }
          }
        }
      ],
      "range": [
        228,
        353
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 13
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
                  "name": "isString",
                  "optional": false,
                  "range": [
                    410,
                    418
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 21
                    },
                    "start": {
                      "column": 10,
                      "line": 21
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        428,
                        429
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 21
                        },
                        "start": {
                          "column": 28,
                          "line": 21
                        }
                      }
                    },
                    "operator": "typeof",
                    "prefix": true,
                    "range": [
                      421,
                      429
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 21
                      },
                      "start": {
                        "column": 21,
                        "line": 21
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"string\"",
                    "value": "string",
                    "range": [
                      434,
                      442
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 21
                      },
                      "start": {
                        "column": 34,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    421,
                    442
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 21
                    },
                    "start": {
                      "column": 21,
                      "line": 21
                    }
                  }
                },
                "range": [
                  410,
                  442
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 21
                  },
                  "start": {
                    "column": 10,
                    "line": 21
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              404,
              443
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
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
                  "name": "isNumber",
                  "optional": false,
                  "range": [
                    454,
                    462
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 22
                    },
                    "start": {
                      "column": 10,
                      "line": 22
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "argument": {
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
                          "column": 29,
                          "line": 22
                        },
                        "start": {
                          "column": 28,
                          "line": 22
                        }
                      }
                    },
                    "operator": "typeof",
                    "prefix": true,
                    "range": [
                      465,
                      473
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 22
                      },
                      "start": {
                        "column": 21,
                        "line": 22
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"number\"",
                    "value": "number",
                    "range": [
                      478,
                      486
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 22
                      },
                      "start": {
                        "column": 34,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    465,
                    486
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 22
                    },
                    "start": {
                      "column": 21,
                      "line": 22
                    }
                  }
                },
                "range": [
                  454,
                  486
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 22
                  },
                  "start": {
                    "column": 10,
                    "line": 22
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              448,
              487
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": {
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
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 27
                            },
                            "start": {
                              "column": 13,
                              "line": 27
                            }
                          },
                          "range": [
                            586,
                            595
                          ],
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "range": [
                              588,
                              595
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
                          }
                        },
                        "range": [
                          585,
                          595
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 27
                          },
                          "start": {
                            "column": 12,
                            "line": 27
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          598,
                          599
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 27
                          },
                          "start": {
                            "column": 25,
                            "line": 27
                          }
                        }
                      },
                      "range": [
                        585,
                        599
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 27
                        },
                        "start": {
                          "column": 12,
                          "line": 27
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    581,
                    600
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 27
                    },
                    "start": {
                      "column": 8,
                      "line": 27
                    }
                  }
                }
              ],
              "range": [
                571,
                606
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 28
                },
                "start": {
                  "column": 9,
                  "line": 26
                }
              }
            },
            "consequent": {
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
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 24
                            },
                            "start": {
                              "column": 13,
                              "line": 24
                            }
                          },
                          "range": [
                            533,
                            550
                          ],
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSStringKeyword",
                                "range": [
                                  535,
                                  541
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 24
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 24
                                  }
                                }
                              },
                              {
                                "type": "TSNumberKeyword",
                                "range": [
                                  544,
                                  550
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 24
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 24
                                  }
                                }
                              }
                            ],
                            "range": [
                              535,
                              550
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 24
                              },
                              "start": {
                                "column": 15,
                                "line": 24
                              }
                            }
                          }
                        },
                        "range": [
                          532,
                          550
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 24
                          },
                          "start": {
                            "column": 12,
                            "line": 24
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          553,
                          554
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 24
                          },
                          "start": {
                            "column": 33,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        532,
                        554
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
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
                  "kind": "let",
                  "range": [
                    528,
                    555
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
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
                518,
                561
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 25
                },
                "start": {
                  "column": 30,
                  "line": 23
                }
              }
            },
            "test": {
              "type": "LogicalExpression",
              "operator": "||",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "isString",
                "optional": false,
                "range": [
                  496,
                  504
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
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "isNumber",
                "optional": false,
                "range": [
                  508,
                  516
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 23
                  },
                  "start": {
                    "column": 20,
                    "line": 23
                  }
                }
              },
              "range": [
                496,
                516
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 23
                },
                "start": {
                  "column": 8,
                  "line": 23
                }
              }
            },
            "range": [
              492,
              606
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          }
        ],
        "range": [
          398,
          608
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 43,
            "line": 20
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "range": [
          364,
          367
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 20
          },
          "start": {
            "column": 9,
            "line": 20
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
                "column": 41,
                "line": 20
              },
              "start": {
                "column": 14,
                "line": 20
              }
            },
            "range": [
              369,
              396
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    371,
                    377
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 20
                    },
                    "start": {
                      "column": 16,
                      "line": 20
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    380,
                    386
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 20
                    },
                    "start": {
                      "column": 25,
                      "line": 20
                    }
                  }
                },
                {
                  "type": "TSBooleanKeyword",
                  "range": [
                    389,
                    396
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 20
                    },
                    "start": {
                      "column": 34,
                      "line": 20
                    }
                  }
                }
              ],
              "range": [
                371,
                396
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 20
                },
                "start": {
                  "column": 16,
                  "line": 20
                }
              }
            }
          },
          "range": [
            368,
            396
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 20
            },
            "start": {
              "column": 13,
              "line": 20
            }
          }
        }
      ],
      "range": [
        355,
        608
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 20
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
                  "name": "isString",
                  "optional": false,
                  "range": [
                    665,
                    673
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 32
                    },
                    "start": {
                      "column": 10,
                      "line": 32
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        683,
                        684
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 32
                        },
                        "start": {
                          "column": 28,
                          "line": 32
                        }
                      }
                    },
                    "operator": "typeof",
                    "prefix": true,
                    "range": [
                      676,
                      684
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 32
                      },
                      "start": {
                        "column": 21,
                        "line": 32
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"string\"",
                    "value": "string",
                    "range": [
                      689,
                      697
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 32
                      },
                      "start": {
                        "column": 34,
                        "line": 32
                      }
                    }
                  },
                  "range": [
                    676,
                    697
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 32
                    },
                    "start": {
                      "column": 21,
                      "line": 32
                    }
                  }
                },
                "range": [
                  665,
                  697
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 32
                  },
                  "start": {
                    "column": 10,
                    "line": 32
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              659,
              698
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
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
                  "name": "isNumber",
                  "optional": false,
                  "range": [
                    709,
                    717
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 33
                    },
                    "start": {
                      "column": 10,
                      "line": 33
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        727,
                        728
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 33
                        },
                        "start": {
                          "column": 28,
                          "line": 33
                        }
                      }
                    },
                    "operator": "typeof",
                    "prefix": true,
                    "range": [
                      720,
                      728
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 33
                      },
                      "start": {
                        "column": 21,
                        "line": 33
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"number\"",
                    "value": "number",
                    "range": [
                      733,
                      741
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 33
                      },
                      "start": {
                        "column": 34,
                        "line": 33
                      }
                    }
                  },
                  "range": [
                    720,
                    741
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 33
                    },
                    "start": {
                      "column": 21,
                      "line": 33
                    }
                  }
                },
                "range": [
                  709,
                  741
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 33
                  },
                  "start": {
                    "column": 10,
                    "line": 33
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              703,
              742
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
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
                  "name": "isStringOrNumber",
                  "optional": false,
                  "range": [
                    753,
                    769
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 34
                    },
                    "start": {
                      "column": 10,
                      "line": 34
                    }
                  }
                },
                "init": {
                  "type": "LogicalExpression",
                  "operator": "||",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isString",
                    "optional": false,
                    "range": [
                      772,
                      780
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 34
                      },
                      "start": {
                        "column": 29,
                        "line": 34
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isNumber",
                    "optional": false,
                    "range": [
                      784,
                      792
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 34
                      },
                      "start": {
                        "column": 41,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    772,
                    792
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 34
                    },
                    "start": {
                      "column": 29,
                      "line": 34
                    }
                  }
                },
                "range": [
                  753,
                  792
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 34
                  },
                  "start": {
                    "column": 10,
                    "line": 34
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              747,
              793
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": {
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
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 39
                            },
                            "start": {
                              "column": 13,
                              "line": 39
                            }
                          },
                          "range": [
                            888,
                            897
                          ],
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "range": [
                              890,
                              897
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 39
                              },
                              "start": {
                                "column": 15,
                                "line": 39
                              }
                            }
                          }
                        },
                        "range": [
                          887,
                          897
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 39
                          },
                          "start": {
                            "column": 12,
                            "line": 39
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          900,
                          901
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 39
                          },
                          "start": {
                            "column": 25,
                            "line": 39
                          }
                        }
                      },
                      "range": [
                        887,
                        901
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 39
                        },
                        "start": {
                          "column": 12,
                          "line": 39
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    883,
                    902
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 39
                    },
                    "start": {
                      "column": 8,
                      "line": 39
                    }
                  }
                }
              ],
              "range": [
                873,
                908
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 40
                },
                "start": {
                  "column": 9,
                  "line": 38
                }
              }
            },
            "consequent": {
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
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 36
                            },
                            "start": {
                              "column": 13,
                              "line": 36
                            }
                          },
                          "range": [
                            835,
                            852
                          ],
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSStringKeyword",
                                "range": [
                                  837,
                                  843
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 36
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 36
                                  }
                                }
                              },
                              {
                                "type": "TSNumberKeyword",
                                "range": [
                                  846,
                                  852
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 36
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 36
                                  }
                                }
                              }
                            ],
                            "range": [
                              837,
                              852
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 36
                              },
                              "start": {
                                "column": 15,
                                "line": 36
                              }
                            }
                          }
                        },
                        "range": [
                          834,
                          852
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 36
                          },
                          "start": {
                            "column": 12,
                            "line": 36
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          855,
                          856
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 36
                          },
                          "start": {
                            "column": 33,
                            "line": 36
                          }
                        }
                      },
                      "range": [
                        834,
                        856
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 36
                        },
                        "start": {
                          "column": 12,
                          "line": 36
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    830,
                    857
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 36
                    },
                    "start": {
                      "column": 8,
                      "line": 36
                    }
                  }
                }
              ],
              "range": [
                820,
                863
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 37
                },
                "start": {
                  "column": 26,
                  "line": 35
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "isStringOrNumber",
              "optional": false,
              "range": [
                802,
                818
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 35
                },
                "start": {
                  "column": 8,
                  "line": 35
                }
              }
            },
            "range": [
              798,
              908
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          }
        ],
        "range": [
          653,
          910
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 41
          },
          "start": {
            "column": 43,
            "line": 31
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f13",
        "optional": false,
        "range": [
          619,
          622
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 31
          },
          "start": {
            "column": 9,
            "line": 31
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
                "column": 41,
                "line": 31
              },
              "start": {
                "column": 14,
                "line": 31
              }
            },
            "range": [
              624,
              651
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    626,
                    632
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 31
                    },
                    "start": {
                      "column": 16,
                      "line": 31
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    635,
                    641
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 31
                    },
                    "start": {
                      "column": 25,
                      "line": 31
                    }
                  }
                },
                {
                  "type": "TSBooleanKeyword",
                  "range": [
                    644,
                    651
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 31
                    },
                    "start": {
                      "column": 34,
                      "line": 31
                    }
                  }
                }
              ],
              "range": [
                626,
                651
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 31
                },
                "start": {
                  "column": 16,
                  "line": 31
                }
              }
            }
          },
          "range": [
            623,
            651
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 31
            },
            "start": {
              "column": 13,
              "line": 31
            }
          }
        }
      ],
      "range": [
        610,
        910
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 31
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
                  "name": "notUndefined",
                  "optional": false,
                  "range": [
                    982,
                    994
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 44
                    },
                    "start": {
                      "column": 10,
                      "line": 44
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "!==",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      997,
                      998
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 44
                      },
                      "start": {
                        "column": 25,
                        "line": 44
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "range": [
                      1003,
                      1012
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 44
                      },
                      "start": {
                        "column": 31,
                        "line": 44
                      }
                    }
                  },
                  "range": [
                    997,
                    1012
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 44
                    },
                    "start": {
                      "column": 25,
                      "line": 44
                    }
                  }
                },
                "range": [
                  982,
                  1012
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 44
                  },
                  "start": {
                    "column": 10,
                    "line": 44
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              976,
              1013
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 44
              },
              "start": {
                "column": 4,
                "line": 44
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "alternate": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  1044,
                  1045
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 45
                  },
                  "start": {
                    "column": 30,
                    "line": 45
                  }
                }
              },
              "consequent": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1040,
                  1041
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 45
                  },
                  "start": {
                    "column": 26,
                    "line": 45
                  }
                }
              },
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "notUndefined",
                "optional": false,
                "range": [
                  1025,
                  1037
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 45
                  },
                  "start": {
                    "column": 11,
                    "line": 45
                  }
                }
              },
              "range": [
                1025,
                1045
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 45
                },
                "start": {
                  "column": 11,
                  "line": 45
                }
              }
            },
            "range": [
              1018,
              1046
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 45
              }
            }
          }
        ],
        "range": [
          970,
          1048
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 46
          },
          "start": {
            "column": 58,
            "line": 43
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f14",
        "optional": false,
        "range": [
          921,
          924
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 43
          },
          "start": {
            "column": 9,
            "line": 43
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
                "column": 41,
                "line": 43
              },
              "start": {
                "column": 14,
                "line": 43
              }
            },
            "range": [
              926,
              953
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    928,
                    934
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 43
                    },
                    "start": {
                      "column": 16,
                      "line": 43
                    }
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "range": [
                    937,
                    941
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 43
                    },
                    "start": {
                      "column": 25,
                      "line": 43
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    944,
                    953
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 43
                    },
                    "start": {
                      "column": 32,
                      "line": 43
                    }
                  }
                }
              ],
              "range": [
                928,
                953
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 43
                },
                "start": {
                  "column": 16,
                  "line": 43
                }
              }
            }
          },
          "range": [
            925,
            953
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 43
            },
            "start": {
              "column": 13,
              "line": 43
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 57,
            "line": 43
          },
          "start": {
            "column": 42,
            "line": 43
          }
        },
        "range": [
          954,
          969
        ],
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSNumberKeyword",
              "range": [
                956,
                962
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 43
                },
                "start": {
                  "column": 44,
                  "line": 43
                }
              }
            },
            {
              "type": "TSNullKeyword",
              "range": [
                965,
                969
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 43
                },
                "start": {
                  "column": 53,
                  "line": 43
                }
              }
            }
          ],
          "range": [
            956,
            969
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 43
            },
            "start": {
              "column": 44,
              "line": 43
            }
          }
        }
      },
      "range": [
        912,
        1048
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 43
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
                  "name": "isString",
                  "optional": false,
                  "range": [
                    1113,
                    1121
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 49
                    },
                    "start": {
                      "column": 10,
                      "line": 49
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "range": [
                          1131,
                          1134
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 49
                          },
                          "start": {
                            "column": 28,
                            "line": 49
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
                          1135,
                          1136
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 49
                          },
                          "start": {
                            "column": 32,
                            "line": 49
                          }
                        }
                      },
                      "range": [
                        1131,
                        1136
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 49
                        },
                        "start": {
                          "column": 28,
                          "line": 49
                        }
                      }
                    },
                    "operator": "typeof",
                    "prefix": true,
                    "range": [
                      1124,
                      1136
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 49
                      },
                      "start": {
                        "column": 21,
                        "line": 49
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "'string'",
                    "value": "string",
                    "range": [
                      1141,
                      1149
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 49
                      },
                      "start": {
                        "column": 38,
                        "line": 49
                      }
                    }
                  },
                  "range": [
                    1124,
                    1149
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 49
                    },
                    "start": {
                      "column": 21,
                      "line": 49
                    }
                  }
                },
                "range": [
                  1113,
                  1149
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 49
                  },
                  "start": {
                    "column": 10,
                    "line": 49
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1107,
              1150
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 49
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 51
                            },
                            "start": {
                              "column": 13,
                              "line": 51
                            }
                          },
                          "range": [
                            1184,
                            1192
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              1186,
                              1192
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 51
                              },
                              "start": {
                                "column": 15,
                                "line": 51
                              }
                            }
                          }
                        },
                        "range": [
                          1183,
                          1192
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 51
                          },
                          "start": {
                            "column": 12,
                            "line": 51
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "range": [
                            1195,
                            1198
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 51
                            },
                            "start": {
                              "column": 24,
                              "line": 51
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
                            1199,
                            1200
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 51
                            },
                            "start": {
                              "column": 28,
                              "line": 51
                            }
                          }
                        },
                        "range": [
                          1195,
                          1200
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 51
                          },
                          "start": {
                            "column": 24,
                            "line": 51
                          }
                        }
                      },
                      "range": [
                        1183,
                        1200
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 51
                        },
                        "start": {
                          "column": 12,
                          "line": 51
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    1179,
                    1201
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 51
                    },
                    "start": {
                      "column": 8,
                      "line": 51
                    }
                  }
                }
              ],
              "range": [
                1169,
                1207
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 52
                },
                "start": {
                  "column": 18,
                  "line": 50
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "isString",
              "optional": false,
              "range": [
                1159,
                1167
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 50
                },
                "start": {
                  "column": 8,
                  "line": 50
                }
              }
            },
            "range": [
              1155,
              1207
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 52
              },
              "start": {
                "column": 4,
                "line": 50
              }
            }
          }
        ],
        "range": [
          1101,
          1209
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 53
          },
          "start": {
            "column": 51,
            "line": 48
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f15",
        "optional": false,
        "range": [
          1059,
          1062
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 48
          },
          "start": {
            "column": 9,
            "line": 48
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 49,
                "line": 48
              },
              "start": {
                "column": 16,
                "line": 48
              }
            },
            "range": [
              1066,
              1099
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1079,
                      1080
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 48
                      },
                      "start": {
                        "column": 29,
                        "line": 48
                      }
                    }
                  },
                  "optional": false,
                  "readonly": true,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 48
                      },
                      "start": {
                        "column": 30,
                        "line": 48
                      }
                    },
                    "range": [
                      1080,
                      1097
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            1082,
                            1088
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 48
                            },
                            "start": {
                              "column": 32,
                              "line": 48
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1091,
                            1097
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 48
                            },
                            "start": {
                              "column": 41,
                              "line": 48
                            }
                          }
                        }
                      ],
                      "range": [
                        1082,
                        1097
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 48
                        },
                        "start": {
                          "column": 32,
                          "line": 48
                        }
                      }
                    }
                  },
                  "range": [
                    1070,
                    1097
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 48
                    },
                    "start": {
                      "column": 20,
                      "line": 48
                    }
                  }
                }
              ],
              "range": [
                1068,
                1099
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 48
                },
                "start": {
                  "column": 18,
                  "line": 48
                }
              }
            }
          },
          "range": [
            1063,
            1099
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 48
            },
            "start": {
              "column": 13,
              "line": 48
            }
          }
        }
      ],
      "range": [
        1050,
        1209
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 48
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
                  "name": "isString",
                  "optional": false,
                  "range": [
                    1274,
                    1282
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 56
                    },
                    "start": {
                      "column": 10,
                      "line": 56
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "range": [
                          1292,
                          1295
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 56
                          },
                          "start": {
                            "column": 28,
                            "line": 56
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
                          1296,
                          1297
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 56
                          },
                          "start": {
                            "column": 32,
                            "line": 56
                          }
                        }
                      },
                      "range": [
                        1292,
                        1297
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 56
                        },
                        "start": {
                          "column": 28,
                          "line": 56
                        }
                      }
                    },
                    "operator": "typeof",
                    "prefix": true,
                    "range": [
                      1285,
                      1297
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 56
                      },
                      "start": {
                        "column": 21,
                        "line": 56
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "'string'",
                    "value": "string",
                    "range": [
                      1302,
                      1310
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 56
                      },
                      "start": {
                        "column": 38,
                        "line": 56
                      }
                    }
                  },
                  "range": [
                    1285,
                    1310
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 56
                    },
                    "start": {
                      "column": 21,
                      "line": 56
                    }
                  }
                },
                "range": [
                  1274,
                  1310
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 56
                  },
                  "start": {
                    "column": 10,
                    "line": 56
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1268,
              1311
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 56
              },
              "start": {
                "column": 4,
                "line": 56
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "range": [
                  1316,
                  1319
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 57
                  },
                  "start": {
                    "column": 4,
                    "line": 57
                  }
                }
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1324,
                        1325
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 57
                        },
                        "start": {
                          "column": 12,
                          "line": 57
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "42",
                      "value": 42,
                      "range": [
                        1327,
                        1329
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 57
                        },
                        "start": {
                          "column": 15,
                          "line": 57
                        }
                      }
                    },
                    "range": [
                      1324,
                      1329
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 57
                      },
                      "start": {
                        "column": 12,
                        "line": 57
                      }
                    }
                  }
                ],
                "range": [
                  1322,
                  1331
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 57
                  },
                  "start": {
                    "column": 10,
                    "line": 57
                  }
                }
              },
              "range": [
                1316,
                1331
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 57
                },
                "start": {
                  "column": 4,
                  "line": 57
                }
              }
            },
            "range": [
              1316,
              1332
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 57
              },
              "start": {
                "column": 4,
                "line": 57
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 59
                            },
                            "start": {
                              "column": 13,
                              "line": 59
                            }
                          },
                          "range": [
                            1366,
                            1374
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              1368,
                              1374
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 59
                              },
                              "start": {
                                "column": 15,
                                "line": 59
                              }
                            }
                          }
                        },
                        "range": [
                          1365,
                          1374
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 59
                          },
                          "start": {
                            "column": 12,
                            "line": 59
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "range": [
                            1377,
                            1380
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 59
                            },
                            "start": {
                              "column": 24,
                              "line": 59
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
                            1381,
                            1382
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 59
                            },
                            "start": {
                              "column": 28,
                              "line": 59
                            }
                          }
                        },
                        "range": [
                          1377,
                          1382
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 59
                          },
                          "start": {
                            "column": 24,
                            "line": 59
                          }
                        }
                      },
                      "range": [
                        1365,
                        1382
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 59
                        },
                        "start": {
                          "column": 12,
                          "line": 59
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    1361,
                    1383
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
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
                1351,
                1446
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 60
                },
                "start": {
                  "column": 18,
                  "line": 58
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "isString",
              "optional": false,
              "range": [
                1341,
                1349
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 58
                },
                "start": {
                  "column": 8,
                  "line": 58
                }
              }
            },
            "range": [
              1337,
              1446
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 60
              },
              "start": {
                "column": 4,
                "line": 58
              }
            }
          }
        ],
        "range": [
          1262,
          1448
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 61
          },
          "start": {
            "column": 51,
            "line": 55
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f16",
        "optional": false,
        "range": [
          1220,
          1223
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 55
          },
          "start": {
            "column": 9,
            "line": 55
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 49,
                "line": 55
              },
              "start": {
                "column": 16,
                "line": 55
              }
            },
            "range": [
              1227,
              1260
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1240,
                      1241
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 55
                      },
                      "start": {
                        "column": 29,
                        "line": 55
                      }
                    }
                  },
                  "optional": false,
                  "readonly": true,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 55
                      },
                      "start": {
                        "column": 30,
                        "line": 55
                      }
                    },
                    "range": [
                      1241,
                      1258
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            1243,
                            1249
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 55
                            },
                            "start": {
                              "column": 32,
                              "line": 55
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1252,
                            1258
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 55
                            },
                            "start": {
                              "column": 41,
                              "line": 55
                            }
                          }
                        }
                      ],
                      "range": [
                        1243,
                        1258
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 55
                        },
                        "start": {
                          "column": 32,
                          "line": 55
                        }
                      }
                    }
                  },
                  "range": [
                    1231,
                    1258
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 55
                    },
                    "start": {
                      "column": 20,
                      "line": 55
                    }
                  }
                }
              ],
              "range": [
                1229,
                1260
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 55
                },
                "start": {
                  "column": 18,
                  "line": 55
                }
              }
            }
          },
          "range": [
            1224,
            1260
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 55
            },
            "start": {
              "column": 13,
              "line": 55
            }
          }
        }
      ],
      "range": [
        1211,
        1448
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 55
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
                  "name": "isString",
                  "optional": false,
                  "range": [
                    1508,
                    1516
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 64
                    },
                    "start": {
                      "column": 10,
                      "line": 64
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "range": [
                          1526,
                          1529
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 64
                          },
                          "start": {
                            "column": 28,
                            "line": 64
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1530,
                          1531
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 64
                          },
                          "start": {
                            "column": 32,
                            "line": 64
                          }
                        }
                      },
                      "range": [
                        1526,
                        1532
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 64
                        },
                        "start": {
                          "column": 28,
                          "line": 64
                        }
                      }
                    },
                    "operator": "typeof",
                    "prefix": true,
                    "range": [
                      1519,
                      1532
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 64
                      },
                      "start": {
                        "column": 21,
                        "line": 64
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "'string'",
                    "value": "string",
                    "range": [
                      1537,
                      1545
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 64
                      },
                      "start": {
                        "column": 39,
                        "line": 64
                      }
                    }
                  },
                  "range": [
                    1519,
                    1545
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 64
                    },
                    "start": {
                      "column": 21,
                      "line": 64
                    }
                  }
                },
                "range": [
                  1508,
                  1545
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 64
                  },
                  "start": {
                    "column": 10,
                    "line": 64
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1502,
              1546
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 64
              },
              "start": {
                "column": 4,
                "line": 64
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 66
                            },
                            "start": {
                              "column": 13,
                              "line": 66
                            }
                          },
                          "range": [
                            1580,
                            1588
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              1582,
                              1588
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 66
                              },
                              "start": {
                                "column": 15,
                                "line": 66
                              }
                            }
                          }
                        },
                        "range": [
                          1579,
                          1588
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 66
                          },
                          "start": {
                            "column": 12,
                            "line": 66
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "range": [
                            1591,
                            1594
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 66
                            },
                            "start": {
                              "column": 24,
                              "line": 66
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            1595,
                            1596
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 66
                            },
                            "start": {
                              "column": 28,
                              "line": 66
                            }
                          }
                        },
                        "range": [
                          1591,
                          1597
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 66
                          },
                          "start": {
                            "column": 24,
                            "line": 66
                          }
                        }
                      },
                      "range": [
                        1579,
                        1597
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 66
                        },
                        "start": {
                          "column": 12,
                          "line": 66
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    1575,
                    1598
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 66
                    },
                    "start": {
                      "column": 8,
                      "line": 66
                    }
                  }
                }
              ],
              "range": [
                1565,
                1604
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 67
                },
                "start": {
                  "column": 18,
                  "line": 65
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "isString",
              "optional": false,
              "range": [
                1555,
                1563
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 65
                },
                "start": {
                  "column": 8,
                  "line": 65
                }
              }
            },
            "range": [
              1551,
              1604
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 67
              },
              "start": {
                "column": 4,
                "line": 65
              }
            }
          }
        ],
        "range": [
          1496,
          1606
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 68
          },
          "start": {
            "column": 46,
            "line": 63
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f17",
        "optional": false,
        "range": [
          1459,
          1462
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 63
          },
          "start": {
            "column": 9,
            "line": 63
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 44,
                "line": 63
              },
              "start": {
                "column": 16,
                "line": 63
              }
            },
            "range": [
              1466,
              1494
            ],
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          1478,
                          1484
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 63
                          },
                          "start": {
                            "column": 28,
                            "line": 63
                          }
                        }
                      },
                      {
                        "type": "TSNumberKeyword",
                        "range": [
                          1487,
                          1493
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 63
                          },
                          "start": {
                            "column": 37,
                            "line": 63
                          }
                        }
                      }
                    ],
                    "range": [
                      1478,
                      1493
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 63
                      },
                      "start": {
                        "column": 28,
                        "line": 63
                      }
                    }
                  }
                ],
                "range": [
                  1477,
                  1494
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 63
                  },
                  "start": {
                    "column": 27,
                    "line": 63
                  }
                }
              },
              "range": [
                1468,
                1494
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 63
                },
                "start": {
                  "column": 18,
                  "line": 63
                }
              }
            }
          },
          "range": [
            1463,
            1494
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 63
            },
            "start": {
              "column": 13,
              "line": 63
            }
          }
        }
      ],
      "range": [
        1450,
        1606
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 68
        },
        "start": {
          "column": 0,
          "line": 63
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
                  "name": "isString",
                  "optional": false,
                  "range": [
                    1666,
                    1674
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 71
                    },
                    "start": {
                      "column": 10,
                      "line": 71
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "range": [
                          1684,
                          1687
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 71
                          },
                          "start": {
                            "column": 28,
                            "line": 71
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1688,
                          1689
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 71
                          },
                          "start": {
                            "column": 32,
                            "line": 71
                          }
                        }
                      },
                      "range": [
                        1684,
                        1690
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 71
                        },
                        "start": {
                          "column": 28,
                          "line": 71
                        }
                      }
                    },
                    "operator": "typeof",
                    "prefix": true,
                    "range": [
                      1677,
                      1690
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 71
                      },
                      "start": {
                        "column": 21,
                        "line": 71
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "'string'",
                    "value": "string",
                    "range": [
                      1695,
                      1703
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 71
                      },
                      "start": {
                        "column": 39,
                        "line": 71
                      }
                    }
                  },
                  "range": [
                    1677,
                    1703
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 71
                    },
                    "start": {
                      "column": 21,
                      "line": 71
                    }
                  }
                },
                "range": [
                  1666,
                  1703
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 71
                  },
                  "start": {
                    "column": 10,
                    "line": 71
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1660,
              1704
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 71
              },
              "start": {
                "column": 4,
                "line": 71
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "range": [
                  1709,
                  1712
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 72
                  },
                  "start": {
                    "column": 4,
                    "line": 72
                  }
                }
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "42",
                    "value": 42,
                    "range": [
                      1716,
                      1718
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 72
                      },
                      "start": {
                        "column": 11,
                        "line": 72
                      }
                    }
                  }
                ],
                "range": [
                  1715,
                  1719
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 72
                  },
                  "start": {
                    "column": 10,
                    "line": 72
                  }
                }
              },
              "range": [
                1709,
                1719
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 72
                },
                "start": {
                  "column": 4,
                  "line": 72
                }
              }
            },
            "range": [
              1709,
              1720
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 72
              },
              "start": {
                "column": 4,
                "line": 72
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 74
                            },
                            "start": {
                              "column": 13,
                              "line": 74
                            }
                          },
                          "range": [
                            1754,
                            1762
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              1756,
                              1762
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 74
                              },
                              "start": {
                                "column": 15,
                                "line": 74
                              }
                            }
                          }
                        },
                        "range": [
                          1753,
                          1762
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 74
                          },
                          "start": {
                            "column": 12,
                            "line": 74
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "range": [
                            1765,
                            1768
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 74
                            },
                            "start": {
                              "column": 24,
                              "line": 74
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            1769,
                            1770
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 74
                            },
                            "start": {
                              "column": 28,
                              "line": 74
                            }
                          }
                        },
                        "range": [
                          1765,
                          1771
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 74
                          },
                          "start": {
                            "column": 24,
                            "line": 74
                          }
                        }
                      },
                      "range": [
                        1753,
                        1771
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 74
                        },
                        "start": {
                          "column": 12,
                          "line": 74
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    1749,
                    1772
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 74
                    },
                    "start": {
                      "column": 8,
                      "line": 74
                    }
                  }
                }
              ],
              "range": [
                1739,
                1835
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 75
                },
                "start": {
                  "column": 18,
                  "line": 73
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "isString",
              "optional": false,
              "range": [
                1729,
                1737
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 73
                },
                "start": {
                  "column": 8,
                  "line": 73
                }
              }
            },
            "range": [
              1725,
              1835
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 75
              },
              "start": {
                "column": 4,
                "line": 73
              }
            }
          }
        ],
        "range": [
          1654,
          1837
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 76
          },
          "start": {
            "column": 46,
            "line": 70
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f18",
        "optional": false,
        "range": [
          1617,
          1620
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 70
          },
          "start": {
            "column": 9,
            "line": 70
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 44,
                "line": 70
              },
              "start": {
                "column": 16,
                "line": 70
              }
            },
            "range": [
              1624,
              1652
            ],
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "range": [
                          1636,
                          1642
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 70
                          },
                          "start": {
                            "column": 28,
                            "line": 70
                          }
                        }
                      },
                      {
                        "type": "TSNumberKeyword",
                        "range": [
                          1645,
                          1651
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 70
                          },
                          "start": {
                            "column": 37,
                            "line": 70
                          }
                        }
                      }
                    ],
                    "range": [
                      1636,
                      1651
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 70
                      },
                      "start": {
                        "column": 28,
                        "line": 70
                      }
                    }
                  }
                ],
                "range": [
                  1635,
                  1652
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 70
                  },
                  "start": {
                    "column": 27,
                    "line": 70
                  }
                }
              },
              "range": [
                1626,
                1652
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 70
                },
                "start": {
                  "column": 18,
                  "line": 70
                }
              }
            }
          },
          "range": [
            1621,
            1652
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 70
            },
            "start": {
              "column": 13,
              "line": 70
            }
          }
        }
      ],
      "range": [
        1608,
        1837
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 76
        },
        "start": {
          "column": 0,
          "line": 70
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
                  "name": "isFoo",
                  "optional": false,
                  "range": [
                    1930,
                    1935
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 79
                    },
                    "start": {
                      "column": 10,
                      "line": 79
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "range": [
                        1938,
                        1941
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 79
                        },
                        "start": {
                          "column": 18,
                          "line": 79
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "range": [
                        1942,
                        1946
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 79
                        },
                        "start": {
                          "column": 22,
                          "line": 79
                        }
                      }
                    },
                    "range": [
                      1938,
                      1946
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 79
                      },
                      "start": {
                        "column": 18,
                        "line": 79
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "'foo'",
                    "value": "foo",
                    "range": [
                      1951,
                      1956
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 79
                      },
                      "start": {
                        "column": 31,
                        "line": 79
                      }
                    }
                  },
                  "range": [
                    1938,
                    1956
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 79
                    },
                    "start": {
                      "column": 18,
                      "line": 79
                    }
                  }
                },
                "range": [
                  1930,
                  1956
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 79
                  },
                  "start": {
                    "column": 10,
                    "line": 79
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1924,
              1957
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 79
              },
              "start": {
                "column": 4,
                "line": 79
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": {
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
                      "name": "obj",
                      "optional": false,
                      "range": [
                        2017,
                        2020
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 84
                        },
                        "start": {
                          "column": 8,
                          "line": 84
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "range": [
                        2021,
                        2024
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 84
                        },
                        "start": {
                          "column": 12,
                          "line": 84
                        }
                      }
                    },
                    "range": [
                      2017,
                      2024
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 84
                      },
                      "start": {
                        "column": 8,
                        "line": 84
                      }
                    }
                  },
                  "range": [
                    2017,
                    2025
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 84
                    },
                    "start": {
                      "column": 8,
                      "line": 84
                    }
                  }
                }
              ],
              "range": [
                2007,
                2031
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 85
                },
                "start": {
                  "column": 9,
                  "line": 83
                }
              }
            },
            "consequent": {
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
                      "name": "obj",
                      "optional": false,
                      "range": [
                        1983,
                        1986
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
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
                      "name": "foo",
                      "optional": false,
                      "range": [
                        1987,
                        1990
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 81
                        },
                        "start": {
                          "column": 12,
                          "line": 81
                        }
                      }
                    },
                    "range": [
                      1983,
                      1990
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 81
                      },
                      "start": {
                        "column": 8,
                        "line": 81
                      }
                    }
                  },
                  "range": [
                    1983,
                    1991
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 81
                    },
                    "start": {
                      "column": 8,
                      "line": 81
                    }
                  }
                }
              ],
              "range": [
                1973,
                1997
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 82
                },
                "start": {
                  "column": 15,
                  "line": 80
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "isFoo",
              "optional": false,
              "range": [
                1966,
                1971
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 80
                },
                "start": {
                  "column": 8,
                  "line": 80
                }
              }
            },
            "range": [
              1962,
              2031
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 85
              },
              "start": {
                "column": 4,
                "line": 80
              }
            }
          }
        ],
        "range": [
          1918,
          2033
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 86
          },
          "start": {
            "column": 79,
            "line": 78
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f20",
        "optional": false,
        "range": [
          1848,
          1851
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 78
          },
          "start": {
            "column": 9,
            "line": 78
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 77,
                "line": 78
              },
              "start": {
                "column": 16,
                "line": 78
              }
            },
            "range": [
              1855,
              1916
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          1859,
                          1863
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 78
                          },
                          "start": {
                            "column": 20,
                            "line": 78
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
                            "column": 31,
                            "line": 78
                          },
                          "start": {
                            "column": 24,
                            "line": 78
                          }
                        },
                        "range": [
                          1863,
                          1870
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'foo'",
                            "value": "foo",
                            "range": [
                              1865,
                              1870
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 78
                              },
                              "start": {
                                "column": 26,
                                "line": 78
                              }
                            }
                          },
                          "range": [
                            1865,
                            1870
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 78
                            },
                            "start": {
                              "column": 26,
                              "line": 78
                            }
                          }
                        }
                      },
                      "range": [
                        1859,
                        1871
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 78
                        },
                        "start": {
                          "column": 20,
                          "line": 78
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          1872,
                          1875
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 78
                          },
                          "start": {
                            "column": 33,
                            "line": 78
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
                            "column": 44,
                            "line": 78
                          },
                          "start": {
                            "column": 36,
                            "line": 78
                          }
                        },
                        "range": [
                          1875,
                          1883
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            1877,
                            1883
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 78
                            },
                            "start": {
                              "column": 38,
                              "line": 78
                            }
                          }
                        }
                      },
                      "range": [
                        1872,
                        1883
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 78
                        },
                        "start": {
                          "column": 33,
                          "line": 78
                        }
                      }
                    }
                  ],
                  "range": [
                    1857,
                    1885
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 78
                    },
                    "start": {
                      "column": 18,
                      "line": 78
                    }
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          1890,
                          1894
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 78
                          },
                          "start": {
                            "column": 51,
                            "line": 78
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
                            "column": 62,
                            "line": 78
                          },
                          "start": {
                            "column": 55,
                            "line": 78
                          }
                        },
                        "range": [
                          1894,
                          1901
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'bar'",
                            "value": "bar",
                            "range": [
                              1896,
                              1901
                            ],
                            "loc": {
                              "end": {
                                "column": 62,
                                "line": 78
                              },
                              "start": {
                                "column": 57,
                                "line": 78
                              }
                            }
                          },
                          "range": [
                            1896,
                            1901
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 78
                            },
                            "start": {
                              "column": 57,
                              "line": 78
                            }
                          }
                        }
                      },
                      "range": [
                        1890,
                        1902
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 78
                        },
                        "start": {
                          "column": 51,
                          "line": 78
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "range": [
                          1903,
                          1906
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 78
                          },
                          "start": {
                            "column": 64,
                            "line": 78
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
                            "column": 75,
                            "line": 78
                          },
                          "start": {
                            "column": 67,
                            "line": 78
                          }
                        },
                        "range": [
                          1906,
                          1914
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            1908,
                            1914
                          ],
                          "loc": {
                            "end": {
                              "column": 75,
                              "line": 78
                            },
                            "start": {
                              "column": 69,
                              "line": 78
                            }
                          }
                        }
                      },
                      "range": [
                        1903,
                        1914
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 78
                        },
                        "start": {
                          "column": 64,
                          "line": 78
                        }
                      }
                    }
                  ],
                  "range": [
                    1888,
                    1916
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 78
                    },
                    "start": {
                      "column": 49,
                      "line": 78
                    }
                  }
                }
              ],
              "range": [
                1857,
                1916
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 78
                },
                "start": {
                  "column": 18,
                  "line": 78
                }
              }
            }
          },
          "range": [
            1852,
            1916
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 78
            },
            "start": {
              "column": 13,
              "line": 78
            }
          }
        }
      ],
      "range": [
        1839,
        2033
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 86
        },
        "start": {
          "column": 0,
          "line": 78
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
                  "name": "isFoo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 89
                      },
                      "start": {
                        "column": 15,
                        "line": 89
                      }
                    },
                    "range": [
                      2131,
                      2140
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        2133,
                        2140
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 89
                        },
                        "start": {
                          "column": 17,
                          "line": 89
                        }
                      }
                    }
                  },
                  "range": [
                    2126,
                    2140
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 89
                    },
                    "start": {
                      "column": 10,
                      "line": 89
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "range": [
                        2143,
                        2146
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 89
                        },
                        "start": {
                          "column": 27,
                          "line": 89
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "range": [
                        2147,
                        2151
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 89
                        },
                        "start": {
                          "column": 31,
                          "line": 89
                        }
                      }
                    },
                    "range": [
                      2143,
                      2151
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 89
                      },
                      "start": {
                        "column": 27,
                        "line": 89
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "'foo'",
                    "value": "foo",
                    "range": [
                      2156,
                      2161
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 89
                      },
                      "start": {
                        "column": 40,
                        "line": 89
                      }
                    }
                  },
                  "range": [
                    2143,
                    2161
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 89
                    },
                    "start": {
                      "column": 27,
                      "line": 89
                    }
                  }
                },
                "range": [
                  2126,
                  2161
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 89
                  },
                  "start": {
                    "column": 10,
                    "line": 89
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              2120,
              2162
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 89
              },
              "start": {
                "column": 4,
                "line": 89
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": {
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
                      "name": "obj",
                      "optional": false,
                      "range": [
                        2273,
                        2276
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 94
                        },
                        "start": {
                          "column": 8,
                          "line": 94
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "range": [
                        2277,
                        2280
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 94
                        },
                        "start": {
                          "column": 12,
                          "line": 94
                        }
                      }
                    },
                    "range": [
                      2273,
                      2280
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 94
                      },
                      "start": {
                        "column": 8,
                        "line": 94
                      }
                    }
                  },
                  "range": [
                    2273,
                    2281
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 94
                    },
                    "start": {
                      "column": 8,
                      "line": 94
                    }
                  }
                }
              ],
              "range": [
                2263,
                2338
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 95
                },
                "start": {
                  "column": 9,
                  "line": 93
                }
              }
            },
            "consequent": {
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
                      "name": "obj",
                      "optional": false,
                      "range": [
                        2188,
                        2191
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
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
                      "name": "foo",
                      "optional": false,
                      "range": [
                        2192,
                        2195
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 91
                        },
                        "start": {
                          "column": 12,
                          "line": 91
                        }
                      }
                    },
                    "range": [
                      2188,
                      2195
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 91
                      },
                      "start": {
                        "column": 8,
                        "line": 91
                      }
                    }
                  },
                  "range": [
                    2188,
                    2196
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 91
                    },
                    "start": {
                      "column": 8,
                      "line": 91
                    }
                  }
                }
              ],
              "range": [
                2178,
                2253
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 92
                },
                "start": {
                  "column": 15,
                  "line": 90
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "isFoo",
              "optional": false,
              "range": [
                2171,
                2176
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
            "range": [
              2167,
              2338
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 95
              },
              "start": {
                "column": 4,
                "line": 90
              }
            }
          }
        ],
        "range": [
          2114,
          2340
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 96
          },
          "start": {
            "column": 79,
            "line": 88
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f21",
        "optional": false,
        "range": [
          2044,
          2047
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 88
          },
          "start": {
            "column": 9,
            "line": 88
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 77,
                "line": 88
              },
              "start": {
                "column": 16,
                "line": 88
              }
            },
            "range": [
              2051,
              2112
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          2055,
                          2059
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 88
                          },
                          "start": {
                            "column": 20,
                            "line": 88
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
                            "column": 31,
                            "line": 88
                          },
                          "start": {
                            "column": 24,
                            "line": 88
                          }
                        },
                        "range": [
                          2059,
                          2066
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'foo'",
                            "value": "foo",
                            "range": [
                              2061,
                              2066
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 88
                              },
                              "start": {
                                "column": 26,
                                "line": 88
                              }
                            }
                          },
                          "range": [
                            2061,
                            2066
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 88
                            },
                            "start": {
                              "column": 26,
                              "line": 88
                            }
                          }
                        }
                      },
                      "range": [
                        2055,
                        2067
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 88
                        },
                        "start": {
                          "column": 20,
                          "line": 88
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          2068,
                          2071
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 88
                          },
                          "start": {
                            "column": 33,
                            "line": 88
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
                            "column": 44,
                            "line": 88
                          },
                          "start": {
                            "column": 36,
                            "line": 88
                          }
                        },
                        "range": [
                          2071,
                          2079
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            2073,
                            2079
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 88
                            },
                            "start": {
                              "column": 38,
                              "line": 88
                            }
                          }
                        }
                      },
                      "range": [
                        2068,
                        2079
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 88
                        },
                        "start": {
                          "column": 33,
                          "line": 88
                        }
                      }
                    }
                  ],
                  "range": [
                    2053,
                    2081
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 88
                    },
                    "start": {
                      "column": 18,
                      "line": 88
                    }
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          2086,
                          2090
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 88
                          },
                          "start": {
                            "column": 51,
                            "line": 88
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
                            "column": 62,
                            "line": 88
                          },
                          "start": {
                            "column": 55,
                            "line": 88
                          }
                        },
                        "range": [
                          2090,
                          2097
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'bar'",
                            "value": "bar",
                            "range": [
                              2092,
                              2097
                            ],
                            "loc": {
                              "end": {
                                "column": 62,
                                "line": 88
                              },
                              "start": {
                                "column": 57,
                                "line": 88
                              }
                            }
                          },
                          "range": [
                            2092,
                            2097
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 88
                            },
                            "start": {
                              "column": 57,
                              "line": 88
                            }
                          }
                        }
                      },
                      "range": [
                        2086,
                        2098
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 88
                        },
                        "start": {
                          "column": 51,
                          "line": 88
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "range": [
                          2099,
                          2102
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 88
                          },
                          "start": {
                            "column": 64,
                            "line": 88
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
                            "column": 75,
                            "line": 88
                          },
                          "start": {
                            "column": 67,
                            "line": 88
                          }
                        },
                        "range": [
                          2102,
                          2110
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            2104,
                            2110
                          ],
                          "loc": {
                            "end": {
                              "column": 75,
                              "line": 88
                            },
                            "start": {
                              "column": 69,
                              "line": 88
                            }
                          }
                        }
                      },
                      "range": [
                        2099,
                        2110
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 88
                        },
                        "start": {
                          "column": 64,
                          "line": 88
                        }
                      }
                    }
                  ],
                  "range": [
                    2084,
                    2112
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 88
                    },
                    "start": {
                      "column": 49,
                      "line": 88
                    }
                  }
                }
              ],
              "range": [
                2053,
                2112
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 88
                },
                "start": {
                  "column": 18,
                  "line": 88
                }
              }
            }
          },
          "range": [
            2048,
            2112
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 88
            },
            "start": {
              "column": 13,
              "line": 88
            }
          }
        }
      ],
      "range": [
        2035,
        2340
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 96
        },
        "start": {
          "column": 0,
          "line": 88
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
                  "name": "isFoo",
                  "optional": false,
                  "range": [
                    2431,
                    2436
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 99
                    },
                    "start": {
                      "column": 8,
                      "line": 99
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "range": [
                        2439,
                        2442
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 99
                        },
                        "start": {
                          "column": 16,
                          "line": 99
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "range": [
                        2443,
                        2447
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 99
                        },
                        "start": {
                          "column": 20,
                          "line": 99
                        }
                      }
                    },
                    "range": [
                      2439,
                      2447
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 99
                      },
                      "start": {
                        "column": 16,
                        "line": 99
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "'foo'",
                    "value": "foo",
                    "range": [
                      2452,
                      2457
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 99
                      },
                      "start": {
                        "column": 29,
                        "line": 99
                      }
                    }
                  },
                  "range": [
                    2439,
                    2457
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 99
                    },
                    "start": {
                      "column": 16,
                      "line": 99
                    }
                  }
                },
                "range": [
                  2431,
                  2457
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 99
                  },
                  "start": {
                    "column": 8,
                    "line": 99
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              2427,
              2458
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 99
              },
              "start": {
                "column": 4,
                "line": 99
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": {
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
                      "name": "obj",
                      "optional": false,
                      "range": [
                        2560,
                        2563
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 104
                        },
                        "start": {
                          "column": 8,
                          "line": 104
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "range": [
                        2564,
                        2567
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 104
                        },
                        "start": {
                          "column": 12,
                          "line": 104
                        }
                      }
                    },
                    "range": [
                      2560,
                      2567
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 104
                      },
                      "start": {
                        "column": 8,
                        "line": 104
                      }
                    }
                  },
                  "range": [
                    2560,
                    2568
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 104
                    },
                    "start": {
                      "column": 8,
                      "line": 104
                    }
                  }
                }
              ],
              "range": [
                2550,
                2616
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 105
                },
                "start": {
                  "column": 9,
                  "line": 103
                }
              }
            },
            "consequent": {
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
                      "name": "obj",
                      "optional": false,
                      "range": [
                        2484,
                        2487
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 101
                        },
                        "start": {
                          "column": 8,
                          "line": 101
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        2488,
                        2491
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 101
                        },
                        "start": {
                          "column": 12,
                          "line": 101
                        }
                      }
                    },
                    "range": [
                      2484,
                      2491
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 101
                      },
                      "start": {
                        "column": 8,
                        "line": 101
                      }
                    }
                  },
                  "range": [
                    2484,
                    2492
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 101
                    },
                    "start": {
                      "column": 8,
                      "line": 101
                    }
                  }
                }
              ],
              "range": [
                2474,
                2540
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 102
                },
                "start": {
                  "column": 15,
                  "line": 100
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "isFoo",
              "optional": false,
              "range": [
                2467,
                2472
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 100
                },
                "start": {
                  "column": 8,
                  "line": 100
                }
              }
            },
            "range": [
              2463,
              2616
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 105
              },
              "start": {
                "column": 4,
                "line": 100
              }
            }
          }
        ],
        "range": [
          2421,
          2618
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 106
          },
          "start": {
            "column": 79,
            "line": 98
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f22",
        "optional": false,
        "range": [
          2351,
          2354
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 98
          },
          "start": {
            "column": 9,
            "line": 98
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 77,
                "line": 98
              },
              "start": {
                "column": 16,
                "line": 98
              }
            },
            "range": [
              2358,
              2419
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          2362,
                          2366
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 98
                          },
                          "start": {
                            "column": 20,
                            "line": 98
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
                            "column": 31,
                            "line": 98
                          },
                          "start": {
                            "column": 24,
                            "line": 98
                          }
                        },
                        "range": [
                          2366,
                          2373
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'foo'",
                            "value": "foo",
                            "range": [
                              2368,
                              2373
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 98
                              },
                              "start": {
                                "column": 26,
                                "line": 98
                              }
                            }
                          },
                          "range": [
                            2368,
                            2373
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 98
                            },
                            "start": {
                              "column": 26,
                              "line": 98
                            }
                          }
                        }
                      },
                      "range": [
                        2362,
                        2374
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 98
                        },
                        "start": {
                          "column": 20,
                          "line": 98
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          2375,
                          2378
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 98
                          },
                          "start": {
                            "column": 33,
                            "line": 98
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
                            "column": 44,
                            "line": 98
                          },
                          "start": {
                            "column": 36,
                            "line": 98
                          }
                        },
                        "range": [
                          2378,
                          2386
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            2380,
                            2386
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 98
                            },
                            "start": {
                              "column": 38,
                              "line": 98
                            }
                          }
                        }
                      },
                      "range": [
                        2375,
                        2386
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 98
                        },
                        "start": {
                          "column": 33,
                          "line": 98
                        }
                      }
                    }
                  ],
                  "range": [
                    2360,
                    2388
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 98
                    },
                    "start": {
                      "column": 18,
                      "line": 98
                    }
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          2393,
                          2397
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 98
                          },
                          "start": {
                            "column": 51,
                            "line": 98
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
                            "column": 62,
                            "line": 98
                          },
                          "start": {
                            "column": 55,
                            "line": 98
                          }
                        },
                        "range": [
                          2397,
                          2404
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'bar'",
                            "value": "bar",
                            "range": [
                              2399,
                              2404
                            ],
                            "loc": {
                              "end": {
                                "column": 62,
                                "line": 98
                              },
                              "start": {
                                "column": 57,
                                "line": 98
                              }
                            }
                          },
                          "range": [
                            2399,
                            2404
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 98
                            },
                            "start": {
                              "column": 57,
                              "line": 98
                            }
                          }
                        }
                      },
                      "range": [
                        2393,
                        2405
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 98
                        },
                        "start": {
                          "column": 51,
                          "line": 98
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "range": [
                          2406,
                          2409
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 98
                          },
                          "start": {
                            "column": 64,
                            "line": 98
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
                            "column": 75,
                            "line": 98
                          },
                          "start": {
                            "column": 67,
                            "line": 98
                          }
                        },
                        "range": [
                          2409,
                          2417
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            2411,
                            2417
                          ],
                          "loc": {
                            "end": {
                              "column": 75,
                              "line": 98
                            },
                            "start": {
                              "column": 69,
                              "line": 98
                            }
                          }
                        }
                      },
                      "range": [
                        2406,
                        2417
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 98
                        },
                        "start": {
                          "column": 64,
                          "line": 98
                        }
                      }
                    }
                  ],
                  "range": [
                    2391,
                    2419
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 98
                    },
                    "start": {
                      "column": 49,
                      "line": 98
                    }
                  }
                }
              ],
              "range": [
                2360,
                2419
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 98
                },
                "start": {
                  "column": 18,
                  "line": 98
                }
              }
            }
          },
          "range": [
            2355,
            2419
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 98
            },
            "start": {
              "column": 13,
              "line": 98
            }
          }
        }
      ],
      "range": [
        2342,
        2618
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 106
        },
        "start": {
          "column": 0,
          "line": 98
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
                  "name": "isFoo",
                  "optional": false,
                  "range": [
                    2711,
                    2716
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 109
                    },
                    "start": {
                      "column": 10,
                      "line": 109
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "range": [
                        2719,
                        2722
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 109
                        },
                        "start": {
                          "column": 18,
                          "line": 109
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "range": [
                        2723,
                        2727
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 109
                        },
                        "start": {
                          "column": 22,
                          "line": 109
                        }
                      }
                    },
                    "range": [
                      2719,
                      2727
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 109
                      },
                      "start": {
                        "column": 18,
                        "line": 109
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "'foo'",
                    "value": "foo",
                    "range": [
                      2732,
                      2737
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 109
                      },
                      "start": {
                        "column": 31,
                        "line": 109
                      }
                    }
                  },
                  "range": [
                    2719,
                    2737
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 109
                    },
                    "start": {
                      "column": 18,
                      "line": 109
                    }
                  }
                },
                "range": [
                  2711,
                  2737
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 109
                  },
                  "start": {
                    "column": 10,
                    "line": 109
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              2705,
              2738
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 109
              },
              "start": {
                "column": 4,
                "line": 109
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "range": [
                  2743,
                  2746
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 110
                  },
                  "start": {
                    "column": 4,
                    "line": 110
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "range": [
                  2749,
                  2752
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 110
                  },
                  "start": {
                    "column": 10,
                    "line": 110
                  }
                }
              },
              "range": [
                2743,
                2752
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 110
                },
                "start": {
                  "column": 4,
                  "line": 110
                }
              }
            },
            "range": [
              2743,
              2753
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 110
              },
              "start": {
                "column": 4,
                "line": 110
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": {
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
                      "name": "obj",
                      "optional": false,
                      "range": [
                        2871,
                        2874
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 115
                        },
                        "start": {
                          "column": 8,
                          "line": 115
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "range": [
                        2875,
                        2878
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 115
                        },
                        "start": {
                          "column": 12,
                          "line": 115
                        }
                      }
                    },
                    "range": [
                      2871,
                      2878
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 115
                      },
                      "start": {
                        "column": 8,
                        "line": 115
                      }
                    }
                  },
                  "range": [
                    2871,
                    2879
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 115
                    },
                    "start": {
                      "column": 8,
                      "line": 115
                    }
                  }
                }
              ],
              "range": [
                2861,
                2943
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 116
                },
                "start": {
                  "column": 9,
                  "line": 114
                }
              }
            },
            "consequent": {
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
                      "name": "obj",
                      "optional": false,
                      "range": [
                        2779,
                        2782
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 112
                        },
                        "start": {
                          "column": 8,
                          "line": 112
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        2783,
                        2786
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 112
                        },
                        "start": {
                          "column": 12,
                          "line": 112
                        }
                      }
                    },
                    "range": [
                      2779,
                      2786
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 112
                      },
                      "start": {
                        "column": 8,
                        "line": 112
                      }
                    }
                  },
                  "range": [
                    2779,
                    2787
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 112
                    },
                    "start": {
                      "column": 8,
                      "line": 112
                    }
                  }
                }
              ],
              "range": [
                2769,
                2851
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 113
                },
                "start": {
                  "column": 15,
                  "line": 111
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "isFoo",
              "optional": false,
              "range": [
                2762,
                2767
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 111
                },
                "start": {
                  "column": 8,
                  "line": 111
                }
              }
            },
            "range": [
              2758,
              2943
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 116
              },
              "start": {
                "column": 4,
                "line": 111
              }
            }
          }
        ],
        "range": [
          2699,
          2945
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 117
          },
          "start": {
            "column": 79,
            "line": 108
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f23",
        "optional": false,
        "range": [
          2629,
          2632
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 108
          },
          "start": {
            "column": 9,
            "line": 108
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 77,
                "line": 108
              },
              "start": {
                "column": 16,
                "line": 108
              }
            },
            "range": [
              2636,
              2697
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          2640,
                          2644
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 108
                          },
                          "start": {
                            "column": 20,
                            "line": 108
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
                            "column": 31,
                            "line": 108
                          },
                          "start": {
                            "column": 24,
                            "line": 108
                          }
                        },
                        "range": [
                          2644,
                          2651
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'foo'",
                            "value": "foo",
                            "range": [
                              2646,
                              2651
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 108
                              },
                              "start": {
                                "column": 26,
                                "line": 108
                              }
                            }
                          },
                          "range": [
                            2646,
                            2651
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 108
                            },
                            "start": {
                              "column": 26,
                              "line": 108
                            }
                          }
                        }
                      },
                      "range": [
                        2640,
                        2652
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 108
                        },
                        "start": {
                          "column": 20,
                          "line": 108
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          2653,
                          2656
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 108
                          },
                          "start": {
                            "column": 33,
                            "line": 108
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
                            "column": 44,
                            "line": 108
                          },
                          "start": {
                            "column": 36,
                            "line": 108
                          }
                        },
                        "range": [
                          2656,
                          2664
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            2658,
                            2664
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 108
                            },
                            "start": {
                              "column": 38,
                              "line": 108
                            }
                          }
                        }
                      },
                      "range": [
                        2653,
                        2664
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 108
                        },
                        "start": {
                          "column": 33,
                          "line": 108
                        }
                      }
                    }
                  ],
                  "range": [
                    2638,
                    2666
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 108
                    },
                    "start": {
                      "column": 18,
                      "line": 108
                    }
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          2671,
                          2675
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 108
                          },
                          "start": {
                            "column": 51,
                            "line": 108
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
                            "column": 62,
                            "line": 108
                          },
                          "start": {
                            "column": 55,
                            "line": 108
                          }
                        },
                        "range": [
                          2675,
                          2682
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'bar'",
                            "value": "bar",
                            "range": [
                              2677,
                              2682
                            ],
                            "loc": {
                              "end": {
                                "column": 62,
                                "line": 108
                              },
                              "start": {
                                "column": 57,
                                "line": 108
                              }
                            }
                          },
                          "range": [
                            2677,
                            2682
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 108
                            },
                            "start": {
                              "column": 57,
                              "line": 108
                            }
                          }
                        }
                      },
                      "range": [
                        2671,
                        2683
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 108
                        },
                        "start": {
                          "column": 51,
                          "line": 108
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "range": [
                          2684,
                          2687
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 108
                          },
                          "start": {
                            "column": 64,
                            "line": 108
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
                            "column": 75,
                            "line": 108
                          },
                          "start": {
                            "column": 67,
                            "line": 108
                          }
                        },
                        "range": [
                          2687,
                          2695
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            2689,
                            2695
                          ],
                          "loc": {
                            "end": {
                              "column": 75,
                              "line": 108
                            },
                            "start": {
                              "column": 69,
                              "line": 108
                            }
                          }
                        }
                      },
                      "range": [
                        2684,
                        2695
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 108
                        },
                        "start": {
                          "column": 64,
                          "line": 108
                        }
                      }
                    }
                  ],
                  "range": [
                    2669,
                    2697
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 108
                    },
                    "start": {
                      "column": 49,
                      "line": 108
                    }
                  }
                }
              ],
              "range": [
                2638,
                2697
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 108
                },
                "start": {
                  "column": 18,
                  "line": 108
                }
              }
            }
          },
          "range": [
            2633,
            2697
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 108
            },
            "start": {
              "column": 13,
              "line": 108
            }
          }
        }
      ],
      "range": [
        2620,
        2945
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 117
        },
        "start": {
          "column": 0,
          "line": 108
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
                  "name": "obj",
                  "optional": false,
                  "range": [
                    3038,
                    3041
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 120
                    },
                    "start": {
                      "column": 10,
                      "line": 120
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "range": [
                    3044,
                    3047
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 120
                    },
                    "start": {
                      "column": 16,
                      "line": 120
                    }
                  }
                },
                "range": [
                  3038,
                  3047
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 120
                  },
                  "start": {
                    "column": 10,
                    "line": 120
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              3032,
              3048
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 120
              },
              "start": {
                "column": 4,
                "line": 120
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
                  "name": "isFoo",
                  "optional": false,
                  "range": [
                    3059,
                    3064
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 121
                    },
                    "start": {
                      "column": 10,
                      "line": 121
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "range": [
                        3067,
                        3070
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 121
                        },
                        "start": {
                          "column": 18,
                          "line": 121
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "range": [
                        3071,
                        3075
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 121
                        },
                        "start": {
                          "column": 22,
                          "line": 121
                        }
                      }
                    },
                    "range": [
                      3067,
                      3075
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 121
                      },
                      "start": {
                        "column": 18,
                        "line": 121
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "'foo'",
                    "value": "foo",
                    "range": [
                      3080,
                      3085
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 121
                      },
                      "start": {
                        "column": 31,
                        "line": 121
                      }
                    }
                  },
                  "range": [
                    3067,
                    3085
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 121
                    },
                    "start": {
                      "column": 18,
                      "line": 121
                    }
                  }
                },
                "range": [
                  3059,
                  3085
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 121
                  },
                  "start": {
                    "column": 10,
                    "line": 121
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              3053,
              3086
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 121
              },
              "start": {
                "column": 4,
                "line": 121
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": {
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
                      "name": "obj",
                      "optional": false,
                      "range": [
                        3146,
                        3149
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 126
                        },
                        "start": {
                          "column": 8,
                          "line": 126
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "range": [
                        3150,
                        3153
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 126
                        },
                        "start": {
                          "column": 12,
                          "line": 126
                        }
                      }
                    },
                    "range": [
                      3146,
                      3153
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 126
                      },
                      "start": {
                        "column": 8,
                        "line": 126
                      }
                    }
                  },
                  "range": [
                    3146,
                    3154
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 126
                    },
                    "start": {
                      "column": 8,
                      "line": 126
                    }
                  }
                }
              ],
              "range": [
                3136,
                3160
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 127
                },
                "start": {
                  "column": 9,
                  "line": 125
                }
              }
            },
            "consequent": {
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
                      "name": "obj",
                      "optional": false,
                      "range": [
                        3112,
                        3115
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 123
                        },
                        "start": {
                          "column": 8,
                          "line": 123
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        3116,
                        3119
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 123
                        },
                        "start": {
                          "column": 12,
                          "line": 123
                        }
                      }
                    },
                    "range": [
                      3112,
                      3119
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 123
                      },
                      "start": {
                        "column": 8,
                        "line": 123
                      }
                    }
                  },
                  "range": [
                    3112,
                    3120
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 123
                    },
                    "start": {
                      "column": 8,
                      "line": 123
                    }
                  }
                }
              ],
              "range": [
                3102,
                3126
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 124
                },
                "start": {
                  "column": 15,
                  "line": 122
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "isFoo",
              "optional": false,
              "range": [
                3095,
                3100
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 122
                },
                "start": {
                  "column": 8,
                  "line": 122
                }
              }
            },
            "range": [
              3091,
              3160
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 127
              },
              "start": {
                "column": 4,
                "line": 122
              }
            }
          }
        ],
        "range": [
          3026,
          3162
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 128
          },
          "start": {
            "column": 79,
            "line": 119
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f24",
        "optional": false,
        "range": [
          2956,
          2959
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 119
          },
          "start": {
            "column": 9,
            "line": 119
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
                "column": 77,
                "line": 119
              },
              "start": {
                "column": 16,
                "line": 119
              }
            },
            "range": [
              2963,
              3024
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          2967,
                          2971
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 119
                          },
                          "start": {
                            "column": 20,
                            "line": 119
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
                            "column": 31,
                            "line": 119
                          },
                          "start": {
                            "column": 24,
                            "line": 119
                          }
                        },
                        "range": [
                          2971,
                          2978
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'foo'",
                            "value": "foo",
                            "range": [
                              2973,
                              2978
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 119
                              },
                              "start": {
                                "column": 26,
                                "line": 119
                              }
                            }
                          },
                          "range": [
                            2973,
                            2978
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 119
                            },
                            "start": {
                              "column": 26,
                              "line": 119
                            }
                          }
                        }
                      },
                      "range": [
                        2967,
                        2979
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 119
                        },
                        "start": {
                          "column": 20,
                          "line": 119
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          2980,
                          2983
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 119
                          },
                          "start": {
                            "column": 33,
                            "line": 119
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
                            "column": 44,
                            "line": 119
                          },
                          "start": {
                            "column": 36,
                            "line": 119
                          }
                        },
                        "range": [
                          2983,
                          2991
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            2985,
                            2991
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 119
                            },
                            "start": {
                              "column": 38,
                              "line": 119
                            }
                          }
                        }
                      },
                      "range": [
                        2980,
                        2991
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 119
                        },
                        "start": {
                          "column": 33,
                          "line": 119
                        }
                      }
                    }
                  ],
                  "range": [
                    2965,
                    2993
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 119
                    },
                    "start": {
                      "column": 18,
                      "line": 119
                    }
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          2998,
                          3002
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 119
                          },
                          "start": {
                            "column": 51,
                            "line": 119
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
                            "column": 62,
                            "line": 119
                          },
                          "start": {
                            "column": 55,
                            "line": 119
                          }
                        },
                        "range": [
                          3002,
                          3009
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'bar'",
                            "value": "bar",
                            "range": [
                              3004,
                              3009
                            ],
                            "loc": {
                              "end": {
                                "column": 62,
                                "line": 119
                              },
                              "start": {
                                "column": 57,
                                "line": 119
                              }
                            }
                          },
                          "range": [
                            3004,
                            3009
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 119
                            },
                            "start": {
                              "column": 57,
                              "line": 119
                            }
                          }
                        }
                      },
                      "range": [
                        2998,
                        3010
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 119
                        },
                        "start": {
                          "column": 51,
                          "line": 119
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "range": [
                          3011,
                          3014
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 119
                          },
                          "start": {
                            "column": 64,
                            "line": 119
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
                            "column": 75,
                            "line": 119
                          },
                          "start": {
                            "column": 67,
                            "line": 119
                          }
                        },
                        "range": [
                          3014,
                          3022
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            3016,
                            3022
                          ],
                          "loc": {
                            "end": {
                              "column": 75,
                              "line": 119
                            },
                            "start": {
                              "column": 69,
                              "line": 119
                            }
                          }
                        }
                      },
                      "range": [
                        3011,
                        3022
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 119
                        },
                        "start": {
                          "column": 64,
                          "line": 119
                        }
                      }
                    }
                  ],
                  "range": [
                    2996,
                    3024
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 119
                    },
                    "start": {
                      "column": 49,
                      "line": 119
                    }
                  }
                }
              ],
              "range": [
                2965,
                3024
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 119
                },
                "start": {
                  "column": 18,
                  "line": 119
                }
              }
            }
          },
          "range": [
            2960,
            3024
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 119
            },
            "start": {
              "column": 13,
              "line": 119
            }
          }
        }
      ],
      "range": [
        2947,
        3162
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 128
        },
        "start": {
          "column": 0,
          "line": 119
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
                  "name": "obj",
                  "optional": false,
                  "range": [
                    3253,
                    3256
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 131
                    },
                    "start": {
                      "column": 8,
                      "line": 131
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "range": [
                    3259,
                    3262
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 131
                    },
                    "start": {
                      "column": 14,
                      "line": 131
                    }
                  }
                },
                "range": [
                  3253,
                  3262
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 131
                  },
                  "start": {
                    "column": 8,
                    "line": 131
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              3249,
              3263
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 131
              },
              "start": {
                "column": 4,
                "line": 131
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
                  "name": "isFoo",
                  "optional": false,
                  "range": [
                    3274,
                    3279
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 132
                    },
                    "start": {
                      "column": 10,
                      "line": 132
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "range": [
                        3282,
                        3285
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 132
                        },
                        "start": {
                          "column": 18,
                          "line": 132
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "range": [
                        3286,
                        3290
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 132
                        },
                        "start": {
                          "column": 22,
                          "line": 132
                        }
                      }
                    },
                    "range": [
                      3282,
                      3290
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 132
                      },
                      "start": {
                        "column": 18,
                        "line": 132
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "'foo'",
                    "value": "foo",
                    "range": [
                      3295,
                      3300
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 132
                      },
                      "start": {
                        "column": 31,
                        "line": 132
                      }
                    }
                  },
                  "range": [
                    3282,
                    3300
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 132
                    },
                    "start": {
                      "column": 18,
                      "line": 132
                    }
                  }
                },
                "range": [
                  3274,
                  3300
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 132
                  },
                  "start": {
                    "column": 10,
                    "line": 132
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              3268,
              3301
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 132
              },
              "start": {
                "column": 4,
                "line": 132
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": {
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
                      "name": "obj",
                      "optional": false,
                      "range": [
                        3361,
                        3364
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 137
                        },
                        "start": {
                          "column": 8,
                          "line": 137
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "range": [
                        3365,
                        3368
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 137
                        },
                        "start": {
                          "column": 12,
                          "line": 137
                        }
                      }
                    },
                    "range": [
                      3361,
                      3368
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 137
                      },
                      "start": {
                        "column": 8,
                        "line": 137
                      }
                    }
                  },
                  "range": [
                    3361,
                    3369
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 137
                    },
                    "start": {
                      "column": 8,
                      "line": 137
                    }
                  }
                }
              ],
              "range": [
                3351,
                3375
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 138
                },
                "start": {
                  "column": 9,
                  "line": 136
                }
              }
            },
            "consequent": {
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
                      "name": "obj",
                      "optional": false,
                      "range": [
                        3327,
                        3330
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 134
                        },
                        "start": {
                          "column": 8,
                          "line": 134
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        3331,
                        3334
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 134
                        },
                        "start": {
                          "column": 12,
                          "line": 134
                        }
                      }
                    },
                    "range": [
                      3327,
                      3334
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 134
                      },
                      "start": {
                        "column": 8,
                        "line": 134
                      }
                    }
                  },
                  "range": [
                    3327,
                    3335
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 134
                    },
                    "start": {
                      "column": 8,
                      "line": 134
                    }
                  }
                }
              ],
              "range": [
                3317,
                3341
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 135
                },
                "start": {
                  "column": 15,
                  "line": 133
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "isFoo",
              "optional": false,
              "range": [
                3310,
                3315
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 133
                },
                "start": {
                  "column": 8,
                  "line": 133
                }
              }
            },
            "range": [
              3306,
              3375
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 138
              },
              "start": {
                "column": 4,
                "line": 133
              }
            }
          }
        ],
        "range": [
          3243,
          3377
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 139
          },
          "start": {
            "column": 79,
            "line": 130
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f25",
        "optional": false,
        "range": [
          3173,
          3176
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 130
          },
          "start": {
            "column": 9,
            "line": 130
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
                "column": 77,
                "line": 130
              },
              "start": {
                "column": 16,
                "line": 130
              }
            },
            "range": [
              3180,
              3241
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          3184,
                          3188
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 130
                          },
                          "start": {
                            "column": 20,
                            "line": 130
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
                            "column": 31,
                            "line": 130
                          },
                          "start": {
                            "column": 24,
                            "line": 130
                          }
                        },
                        "range": [
                          3188,
                          3195
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'foo'",
                            "value": "foo",
                            "range": [
                              3190,
                              3195
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 130
                              },
                              "start": {
                                "column": 26,
                                "line": 130
                              }
                            }
                          },
                          "range": [
                            3190,
                            3195
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 130
                            },
                            "start": {
                              "column": 26,
                              "line": 130
                            }
                          }
                        }
                      },
                      "range": [
                        3184,
                        3196
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 130
                        },
                        "start": {
                          "column": 20,
                          "line": 130
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          3197,
                          3200
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 130
                          },
                          "start": {
                            "column": 33,
                            "line": 130
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
                            "column": 44,
                            "line": 130
                          },
                          "start": {
                            "column": 36,
                            "line": 130
                          }
                        },
                        "range": [
                          3200,
                          3208
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            3202,
                            3208
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 130
                            },
                            "start": {
                              "column": 38,
                              "line": 130
                            }
                          }
                        }
                      },
                      "range": [
                        3197,
                        3208
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 130
                        },
                        "start": {
                          "column": 33,
                          "line": 130
                        }
                      }
                    }
                  ],
                  "range": [
                    3182,
                    3210
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 130
                    },
                    "start": {
                      "column": 18,
                      "line": 130
                    }
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          3215,
                          3219
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 130
                          },
                          "start": {
                            "column": 51,
                            "line": 130
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
                            "column": 62,
                            "line": 130
                          },
                          "start": {
                            "column": 55,
                            "line": 130
                          }
                        },
                        "range": [
                          3219,
                          3226
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'bar'",
                            "value": "bar",
                            "range": [
                              3221,
                              3226
                            ],
                            "loc": {
                              "end": {
                                "column": 62,
                                "line": 130
                              },
                              "start": {
                                "column": 57,
                                "line": 130
                              }
                            }
                          },
                          "range": [
                            3221,
                            3226
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 130
                            },
                            "start": {
                              "column": 57,
                              "line": 130
                            }
                          }
                        }
                      },
                      "range": [
                        3215,
                        3227
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 130
                        },
                        "start": {
                          "column": 51,
                          "line": 130
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "range": [
                          3228,
                          3231
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 130
                          },
                          "start": {
                            "column": 64,
                            "line": 130
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
                            "column": 75,
                            "line": 130
                          },
                          "start": {
                            "column": 67,
                            "line": 130
                          }
                        },
                        "range": [
                          3231,
                          3239
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            3233,
                            3239
                          ],
                          "loc": {
                            "end": {
                              "column": 75,
                              "line": 130
                            },
                            "start": {
                              "column": 69,
                              "line": 130
                            }
                          }
                        }
                      },
                      "range": [
                        3228,
                        3239
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 130
                        },
                        "start": {
                          "column": 64,
                          "line": 130
                        }
                      }
                    }
                  ],
                  "range": [
                    3213,
                    3241
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 130
                    },
                    "start": {
                      "column": 49,
                      "line": 130
                    }
                  }
                }
              ],
              "range": [
                3182,
                3241
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 130
                },
                "start": {
                  "column": 18,
                  "line": 130
                }
              }
            }
          },
          "range": [
            3177,
            3241
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 130
            },
            "start": {
              "column": 13,
              "line": 130
            }
          }
        }
      ],
      "range": [
        3164,
        3377
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 139
        },
        "start": {
          "column": 0,
          "line": 130
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
                  "name": "isFoo",
                  "optional": false,
                  "range": [
                    3490,
                    3495
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 142
                    },
                    "start": {
                      "column": 10,
                      "line": 142
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "range": [
                          3498,
                          3503
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 142
                          },
                          "start": {
                            "column": 18,
                            "line": 142
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "range": [
                          3504,
                          3507
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 142
                          },
                          "start": {
                            "column": 24,
                            "line": 142
                          }
                        }
                      },
                      "range": [
                        3498,
                        3507
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 142
                        },
                        "start": {
                          "column": 18,
                          "line": 142
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "range": [
                        3508,
                        3512
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 142
                        },
                        "start": {
                          "column": 28,
                          "line": 142
                        }
                      }
                    },
                    "range": [
                      3498,
                      3512
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 142
                      },
                      "start": {
                        "column": 18,
                        "line": 142
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "'foo'",
                    "value": "foo",
                    "range": [
                      3517,
                      3522
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 142
                      },
                      "start": {
                        "column": 37,
                        "line": 142
                      }
                    }
                  },
                  "range": [
                    3498,
                    3522
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 142
                    },
                    "start": {
                      "column": 18,
                      "line": 142
                    }
                  }
                },
                "range": [
                  3490,
                  3522
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 142
                  },
                  "start": {
                    "column": 10,
                    "line": 142
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              3484,
              3523
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 142
              },
              "start": {
                "column": 4,
                "line": 142
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "range": [
                          3589,
                          3594
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 147
                          },
                          "start": {
                            "column": 8,
                            "line": 147
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "range": [
                          3595,
                          3598
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 147
                          },
                          "start": {
                            "column": 14,
                            "line": 147
                          }
                        }
                      },
                      "range": [
                        3589,
                        3598
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 147
                        },
                        "start": {
                          "column": 8,
                          "line": 147
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "range": [
                        3599,
                        3602
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 147
                        },
                        "start": {
                          "column": 18,
                          "line": 147
                        }
                      }
                    },
                    "range": [
                      3589,
                      3602
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 147
                      },
                      "start": {
                        "column": 8,
                        "line": 147
                      }
                    }
                  },
                  "range": [
                    3589,
                    3603
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 147
                    },
                    "start": {
                      "column": 8,
                      "line": 147
                    }
                  }
                }
              ],
              "range": [
                3579,
                3609
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 148
                },
                "start": {
                  "column": 9,
                  "line": 146
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "range": [
                          3549,
                          3554
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 144
                          },
                          "start": {
                            "column": 8,
                            "line": 144
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "range": [
                          3555,
                          3558
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 144
                          },
                          "start": {
                            "column": 14,
                            "line": 144
                          }
                        }
                      },
                      "range": [
                        3549,
                        3558
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 144
                        },
                        "start": {
                          "column": 8,
                          "line": 144
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        3559,
                        3562
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 144
                        },
                        "start": {
                          "column": 18,
                          "line": 144
                        }
                      }
                    },
                    "range": [
                      3549,
                      3562
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 144
                      },
                      "start": {
                        "column": 8,
                        "line": 144
                      }
                    }
                  },
                  "range": [
                    3549,
                    3563
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 144
                    },
                    "start": {
                      "column": 8,
                      "line": 144
                    }
                  }
                }
              ],
              "range": [
                3539,
                3569
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 145
                },
                "start": {
                  "column": 15,
                  "line": 143
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "isFoo",
              "optional": false,
              "range": [
                3532,
                3537
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 143
                },
                "start": {
                  "column": 8,
                  "line": 143
                }
              }
            },
            "range": [
              3528,
              3609
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 148
              },
              "start": {
                "column": 4,
                "line": 143
              }
            }
          }
        ],
        "range": [
          3478,
          3611
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 149
          },
          "start": {
            "column": 99,
            "line": 141
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f26",
        "optional": false,
        "range": [
          3388,
          3391
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 141
          },
          "start": {
            "column": 9,
            "line": 141
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "outer",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 97,
                "line": 141
              },
              "start": {
                "column": 18,
                "line": 141
              }
            },
            "range": [
              3397,
              3476
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "range": [
                      3410,
                      3413
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 141
                      },
                      "start": {
                        "column": 31,
                        "line": 141
                      }
                    }
                  },
                  "optional": false,
                  "readonly": true,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 95,
                        "line": 141
                      },
                      "start": {
                        "column": 34,
                        "line": 141
                      }
                    },
                    "range": [
                      3413,
                      3474
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "kind",
                                "optional": false,
                                "range": [
                                  3417,
                                  3421
                                ],
                                "loc": {
                                  "end": {
                                    "column": 42,
                                    "line": 141
                                  },
                                  "start": {
                                    "column": 38,
                                    "line": 141
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
                                    "column": 49,
                                    "line": 141
                                  },
                                  "start": {
                                    "column": 42,
                                    "line": 141
                                  }
                                },
                                "range": [
                                  3421,
                                  3428
                                ],
                                "typeAnnotation": {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "raw": "'foo'",
                                    "value": "foo",
                                    "range": [
                                      3423,
                                      3428
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 49,
                                        "line": 141
                                      },
                                      "start": {
                                        "column": 44,
                                        "line": 141
                                      }
                                    }
                                  },
                                  "range": [
                                    3423,
                                    3428
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 49,
                                      "line": 141
                                    },
                                    "start": {
                                      "column": 44,
                                      "line": 141
                                    }
                                  }
                                }
                              },
                              "range": [
                                3417,
                                3429
                              ],
                              "loc": {
                                "end": {
                                  "column": 50,
                                  "line": 141
                                },
                                "start": {
                                  "column": 38,
                                  "line": 141
                                }
                              }
                            },
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "range": [
                                  3430,
                                  3433
                                ],
                                "loc": {
                                  "end": {
                                    "column": 54,
                                    "line": 141
                                  },
                                  "start": {
                                    "column": 51,
                                    "line": 141
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
                                    "column": 62,
                                    "line": 141
                                  },
                                  "start": {
                                    "column": 54,
                                    "line": 141
                                  }
                                },
                                "range": [
                                  3433,
                                  3441
                                ],
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "range": [
                                    3435,
                                    3441
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 62,
                                      "line": 141
                                    },
                                    "start": {
                                      "column": 56,
                                      "line": 141
                                    }
                                  }
                                }
                              },
                              "range": [
                                3430,
                                3441
                              ],
                              "loc": {
                                "end": {
                                  "column": 62,
                                  "line": 141
                                },
                                "start": {
                                  "column": 51,
                                  "line": 141
                                }
                              }
                            }
                          ],
                          "range": [
                            3415,
                            3443
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 141
                            },
                            "start": {
                              "column": 36,
                              "line": 141
                            }
                          }
                        },
                        {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "kind",
                                "optional": false,
                                "range": [
                                  3448,
                                  3452
                                ],
                                "loc": {
                                  "end": {
                                    "column": 73,
                                    "line": 141
                                  },
                                  "start": {
                                    "column": 69,
                                    "line": 141
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
                                    "column": 80,
                                    "line": 141
                                  },
                                  "start": {
                                    "column": 73,
                                    "line": 141
                                  }
                                },
                                "range": [
                                  3452,
                                  3459
                                ],
                                "typeAnnotation": {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "raw": "'bar'",
                                    "value": "bar",
                                    "range": [
                                      3454,
                                      3459
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 80,
                                        "line": 141
                                      },
                                      "start": {
                                        "column": 75,
                                        "line": 141
                                      }
                                    }
                                  },
                                  "range": [
                                    3454,
                                    3459
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 80,
                                      "line": 141
                                    },
                                    "start": {
                                      "column": 75,
                                      "line": 141
                                    }
                                  }
                                }
                              },
                              "range": [
                                3448,
                                3460
                              ],
                              "loc": {
                                "end": {
                                  "column": 81,
                                  "line": 141
                                },
                                "start": {
                                  "column": 69,
                                  "line": 141
                                }
                              }
                            },
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "range": [
                                  3461,
                                  3464
                                ],
                                "loc": {
                                  "end": {
                                    "column": 85,
                                    "line": 141
                                  },
                                  "start": {
                                    "column": 82,
                                    "line": 141
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
                                    "column": 93,
                                    "line": 141
                                  },
                                  "start": {
                                    "column": 85,
                                    "line": 141
                                  }
                                },
                                "range": [
                                  3464,
                                  3472
                                ],
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    3466,
                                    3472
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 93,
                                      "line": 141
                                    },
                                    "start": {
                                      "column": 87,
                                      "line": 141
                                    }
                                  }
                                }
                              },
                              "range": [
                                3461,
                                3472
                              ],
                              "loc": {
                                "end": {
                                  "column": 93,
                                  "line": 141
                                },
                                "start": {
                                  "column": 82,
                                  "line": 141
                                }
                              }
                            }
                          ],
                          "range": [
                            3446,
                            3474
                          ],
                          "loc": {
                            "end": {
                              "column": 95,
                              "line": 141
                            },
                            "start": {
                              "column": 67,
                              "line": 141
                            }
                          }
                        }
                      ],
                      "range": [
                        3415,
                        3474
                      ],
                      "loc": {
                        "end": {
                          "column": 95,
                          "line": 141
                        },
                        "start": {
                          "column": 36,
                          "line": 141
                        }
                      }
                    }
                  },
                  "range": [
                    3401,
                    3474
                  ],
                  "loc": {
                    "end": {
                      "column": 95,
                      "line": 141
                    },
                    "start": {
                      "column": 22,
                      "line": 141
                    }
                  }
                }
              ],
              "range": [
                3399,
                3476
              ],
              "loc": {
                "end": {
                  "column": 97,
                  "line": 141
                },
                "start": {
                  "column": 20,
                  "line": 141
                }
              }
            }
          },
          "range": [
            3392,
            3476
          ],
          "loc": {
            "end": {
              "column": 97,
              "line": 141
            },
            "start": {
              "column": 13,
              "line": 141
            }
          }
        }
      ],
      "range": [
        3379,
        3611
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 149
        },
        "start": {
          "column": 0,
          "line": 141
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
                  "name": "isFoo",
                  "optional": false,
                  "range": [
                    3715,
                    3720
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 152
                    },
                    "start": {
                      "column": 10,
                      "line": 152
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "range": [
                          3723,
                          3728
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 152
                          },
                          "start": {
                            "column": 18,
                            "line": 152
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "range": [
                          3729,
                          3732
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 152
                          },
                          "start": {
                            "column": 24,
                            "line": 152
                          }
                        }
                      },
                      "range": [
                        3723,
                        3732
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 152
                        },
                        "start": {
                          "column": 18,
                          "line": 152
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "range": [
                        3733,
                        3737
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 152
                        },
                        "start": {
                          "column": 28,
                          "line": 152
                        }
                      }
                    },
                    "range": [
                      3723,
                      3737
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 152
                      },
                      "start": {
                        "column": 18,
                        "line": 152
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "'foo'",
                    "value": "foo",
                    "range": [
                      3742,
                      3747
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 152
                      },
                      "start": {
                        "column": 37,
                        "line": 152
                      }
                    }
                  },
                  "range": [
                    3723,
                    3747
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 152
                    },
                    "start": {
                      "column": 18,
                      "line": 152
                    }
                  }
                },
                "range": [
                  3715,
                  3747
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 152
                  },
                  "start": {
                    "column": 10,
                    "line": 152
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              3709,
              3748
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 152
              },
              "start": {
                "column": 4,
                "line": 152
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "range": [
                          3854,
                          3859
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 157
                          },
                          "start": {
                            "column": 8,
                            "line": 157
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "range": [
                          3860,
                          3863
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 157
                          },
                          "start": {
                            "column": 14,
                            "line": 157
                          }
                        }
                      },
                      "range": [
                        3854,
                        3863
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 157
                        },
                        "start": {
                          "column": 8,
                          "line": 157
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "range": [
                        3864,
                        3867
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 157
                        },
                        "start": {
                          "column": 18,
                          "line": 157
                        }
                      }
                    },
                    "range": [
                      3854,
                      3867
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 157
                      },
                      "start": {
                        "column": 8,
                        "line": 157
                      }
                    }
                  },
                  "range": [
                    3854,
                    3868
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 157
                    },
                    "start": {
                      "column": 8,
                      "line": 157
                    }
                  }
                }
              ],
              "range": [
                3844,
                3914
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 158
                },
                "start": {
                  "column": 9,
                  "line": 156
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "range": [
                          3774,
                          3779
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 154
                          },
                          "start": {
                            "column": 8,
                            "line": 154
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "range": [
                          3780,
                          3783
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 154
                          },
                          "start": {
                            "column": 14,
                            "line": 154
                          }
                        }
                      },
                      "range": [
                        3774,
                        3783
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 154
                        },
                        "start": {
                          "column": 8,
                          "line": 154
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        3784,
                        3787
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 154
                        },
                        "start": {
                          "column": 18,
                          "line": 154
                        }
                      }
                    },
                    "range": [
                      3774,
                      3787
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 154
                      },
                      "start": {
                        "column": 8,
                        "line": 154
                      }
                    }
                  },
                  "range": [
                    3774,
                    3788
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 154
                    },
                    "start": {
                      "column": 8,
                      "line": 154
                    }
                  }
                }
              ],
              "range": [
                3764,
                3834
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 155
                },
                "start": {
                  "column": 15,
                  "line": 153
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "isFoo",
              "optional": false,
              "range": [
                3757,
                3762
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 153
                },
                "start": {
                  "column": 8,
                  "line": 153
                }
              }
            },
            "range": [
              3753,
              3914
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 158
              },
              "start": {
                "column": 4,
                "line": 153
              }
            }
          }
        ],
        "range": [
          3703,
          3916
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 159
          },
          "start": {
            "column": 90,
            "line": 151
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f27",
        "optional": false,
        "range": [
          3622,
          3625
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 151
          },
          "start": {
            "column": 9,
            "line": 151
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "outer",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 88,
                "line": 151
              },
              "start": {
                "column": 18,
                "line": 151
              }
            },
            "range": [
              3631,
              3701
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "range": [
                      3635,
                      3638
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 151
                      },
                      "start": {
                        "column": 22,
                        "line": 151
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
                        "column": 86,
                        "line": 151
                      },
                      "start": {
                        "column": 25,
                        "line": 151
                      }
                    },
                    "range": [
                      3638,
                      3699
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "kind",
                                "optional": false,
                                "range": [
                                  3642,
                                  3646
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 151
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 151
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
                                    "column": 40,
                                    "line": 151
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 151
                                  }
                                },
                                "range": [
                                  3646,
                                  3653
                                ],
                                "typeAnnotation": {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "raw": "'foo'",
                                    "value": "foo",
                                    "range": [
                                      3648,
                                      3653
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 40,
                                        "line": 151
                                      },
                                      "start": {
                                        "column": 35,
                                        "line": 151
                                      }
                                    }
                                  },
                                  "range": [
                                    3648,
                                    3653
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 40,
                                      "line": 151
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 151
                                    }
                                  }
                                }
                              },
                              "range": [
                                3642,
                                3654
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 151
                                },
                                "start": {
                                  "column": 29,
                                  "line": 151
                                }
                              }
                            },
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "range": [
                                  3655,
                                  3658
                                ],
                                "loc": {
                                  "end": {
                                    "column": 45,
                                    "line": 151
                                  },
                                  "start": {
                                    "column": 42,
                                    "line": 151
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
                                    "column": 53,
                                    "line": 151
                                  },
                                  "start": {
                                    "column": 45,
                                    "line": 151
                                  }
                                },
                                "range": [
                                  3658,
                                  3666
                                ],
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "range": [
                                    3660,
                                    3666
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 53,
                                      "line": 151
                                    },
                                    "start": {
                                      "column": 47,
                                      "line": 151
                                    }
                                  }
                                }
                              },
                              "range": [
                                3655,
                                3666
                              ],
                              "loc": {
                                "end": {
                                  "column": 53,
                                  "line": 151
                                },
                                "start": {
                                  "column": 42,
                                  "line": 151
                                }
                              }
                            }
                          ],
                          "range": [
                            3640,
                            3668
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 151
                            },
                            "start": {
                              "column": 27,
                              "line": 151
                            }
                          }
                        },
                        {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "kind",
                                "optional": false,
                                "range": [
                                  3673,
                                  3677
                                ],
                                "loc": {
                                  "end": {
                                    "column": 64,
                                    "line": 151
                                  },
                                  "start": {
                                    "column": 60,
                                    "line": 151
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
                                    "column": 71,
                                    "line": 151
                                  },
                                  "start": {
                                    "column": 64,
                                    "line": 151
                                  }
                                },
                                "range": [
                                  3677,
                                  3684
                                ],
                                "typeAnnotation": {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "raw": "'bar'",
                                    "value": "bar",
                                    "range": [
                                      3679,
                                      3684
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 71,
                                        "line": 151
                                      },
                                      "start": {
                                        "column": 66,
                                        "line": 151
                                      }
                                    }
                                  },
                                  "range": [
                                    3679,
                                    3684
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 71,
                                      "line": 151
                                    },
                                    "start": {
                                      "column": 66,
                                      "line": 151
                                    }
                                  }
                                }
                              },
                              "range": [
                                3673,
                                3685
                              ],
                              "loc": {
                                "end": {
                                  "column": 72,
                                  "line": 151
                                },
                                "start": {
                                  "column": 60,
                                  "line": 151
                                }
                              }
                            },
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "range": [
                                  3686,
                                  3689
                                ],
                                "loc": {
                                  "end": {
                                    "column": 76,
                                    "line": 151
                                  },
                                  "start": {
                                    "column": 73,
                                    "line": 151
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
                                    "column": 84,
                                    "line": 151
                                  },
                                  "start": {
                                    "column": 76,
                                    "line": 151
                                  }
                                },
                                "range": [
                                  3689,
                                  3697
                                ],
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    3691,
                                    3697
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 84,
                                      "line": 151
                                    },
                                    "start": {
                                      "column": 78,
                                      "line": 151
                                    }
                                  }
                                }
                              },
                              "range": [
                                3686,
                                3697
                              ],
                              "loc": {
                                "end": {
                                  "column": 84,
                                  "line": 151
                                },
                                "start": {
                                  "column": 73,
                                  "line": 151
                                }
                              }
                            }
                          ],
                          "range": [
                            3671,
                            3699
                          ],
                          "loc": {
                            "end": {
                              "column": 86,
                              "line": 151
                            },
                            "start": {
                              "column": 58,
                              "line": 151
                            }
                          }
                        }
                      ],
                      "range": [
                        3640,
                        3699
                      ],
                      "loc": {
                        "end": {
                          "column": 86,
                          "line": 151
                        },
                        "start": {
                          "column": 27,
                          "line": 151
                        }
                      }
                    }
                  },
                  "range": [
                    3635,
                    3699
                  ],
                  "loc": {
                    "end": {
                      "column": 86,
                      "line": 151
                    },
                    "start": {
                      "column": 22,
                      "line": 151
                    }
                  }
                }
              ],
              "range": [
                3633,
                3701
              ],
              "loc": {
                "end": {
                  "column": 88,
                  "line": 151
                },
                "start": {
                  "column": 20,
                  "line": 151
                }
              }
            }
          },
          "range": [
            3626,
            3701
          ],
          "loc": {
            "end": {
              "column": 88,
              "line": 151
            },
            "start": {
              "column": 13,
              "line": 151
            }
          }
        }
      ],
      "range": [
        3613,
        3916
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 159
        },
        "start": {
          "column": 0,
          "line": 151
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
                  "name": "isFoo",
                  "optional": false,
                  "range": [
                    4010,
                    4015
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 162
                    },
                    "start": {
                      "column": 10,
                      "line": 162
                    }
                  }
                },
                "init": {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "range": [
                      4018,
                      4021
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 162
                      },
                      "start": {
                        "column": 18,
                        "line": 162
                      }
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "===",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "range": [
                          4025,
                          4028
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 162
                          },
                          "start": {
                            "column": 25,
                            "line": 162
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          4029,
                          4033
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 162
                          },
                          "start": {
                            "column": 29,
                            "line": 162
                          }
                        }
                      },
                      "range": [
                        4025,
                        4033
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 162
                        },
                        "start": {
                          "column": 25,
                          "line": 162
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "'foo'",
                      "value": "foo",
                      "range": [
                        4038,
                        4043
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 162
                        },
                        "start": {
                          "column": 38,
                          "line": 162
                        }
                      }
                    },
                    "range": [
                      4025,
                      4043
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 162
                      },
                      "start": {
                        "column": 25,
                        "line": 162
                      }
                    }
                  },
                  "range": [
                    4018,
                    4043
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 162
                    },
                    "start": {
                      "column": 18,
                      "line": 162
                    }
                  }
                },
                "range": [
                  4010,
                  4043
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 162
                  },
                  "start": {
                    "column": 10,
                    "line": 162
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              4004,
              4044
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 162
              },
              "start": {
                "column": 4,
                "line": 162
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
                  "name": "isBar",
                  "optional": false,
                  "range": [
                    4055,
                    4060
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 163
                    },
                    "start": {
                      "column": 10,
                      "line": 163
                    }
                  }
                },
                "init": {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "range": [
                      4063,
                      4066
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 163
                      },
                      "start": {
                        "column": 18,
                        "line": 163
                      }
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "===",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "range": [
                          4070,
                          4073
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 163
                          },
                          "start": {
                            "column": 25,
                            "line": 163
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          4074,
                          4078
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 163
                          },
                          "start": {
                            "column": 29,
                            "line": 163
                          }
                        }
                      },
                      "range": [
                        4070,
                        4078
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 163
                        },
                        "start": {
                          "column": 25,
                          "line": 163
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "'bar'",
                      "value": "bar",
                      "range": [
                        4083,
                        4088
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 163
                        },
                        "start": {
                          "column": 38,
                          "line": 163
                        }
                      }
                    },
                    "range": [
                      4070,
                      4088
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 163
                      },
                      "start": {
                        "column": 25,
                        "line": 163
                      }
                    }
                  },
                  "range": [
                    4063,
                    4088
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 163
                    },
                    "start": {
                      "column": 18,
                      "line": 163
                    }
                  }
                },
                "range": [
                  4055,
                  4088
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 163
                  },
                  "start": {
                    "column": 10,
                    "line": 163
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              4049,
              4089
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 163
              },
              "start": {
                "column": 4,
                "line": 163
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
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
                      "name": "obj",
                      "optional": false,
                      "range": [
                        4115,
                        4118
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 165
                        },
                        "start": {
                          "column": 8,
                          "line": 165
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        4119,
                        4122
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 165
                        },
                        "start": {
                          "column": 12,
                          "line": 165
                        }
                      }
                    },
                    "range": [
                      4115,
                      4122
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 165
                      },
                      "start": {
                        "column": 8,
                        "line": 165
                      }
                    }
                  },
                  "range": [
                    4115,
                    4123
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 165
                    },
                    "start": {
                      "column": 8,
                      "line": 165
                    }
                  }
                }
              ],
              "range": [
                4105,
                4129
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 166
                },
                "start": {
                  "column": 15,
                  "line": 164
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "isFoo",
              "optional": false,
              "range": [
                4098,
                4103
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 164
                },
                "start": {
                  "column": 8,
                  "line": 164
                }
              }
            },
            "range": [
              4094,
              4129
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 166
              },
              "start": {
                "column": 4,
                "line": 164
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
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
                      "name": "obj",
                      "optional": false,
                      "range": [
                        4155,
                        4158
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 168
                        },
                        "start": {
                          "column": 8,
                          "line": 168
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "range": [
                        4159,
                        4162
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 168
                        },
                        "start": {
                          "column": 12,
                          "line": 168
                        }
                      }
                    },
                    "range": [
                      4155,
                      4162
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 168
                      },
                      "start": {
                        "column": 8,
                        "line": 168
                      }
                    }
                  },
                  "range": [
                    4155,
                    4163
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 168
                    },
                    "start": {
                      "column": 8,
                      "line": 168
                    }
                  }
                }
              ],
              "range": [
                4145,
                4169
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 169
                },
                "start": {
                  "column": 15,
                  "line": 167
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "isBar",
              "optional": false,
              "range": [
                4138,
                4143
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 167
                },
                "start": {
                  "column": 8,
                  "line": 167
                }
              }
            },
            "range": [
              4134,
              4169
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 169
              },
              "start": {
                "column": 4,
                "line": 167
              }
            }
          }
        ],
        "range": [
          3998,
          4171
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 170
          },
          "start": {
            "column": 80,
            "line": 161
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f28",
        "optional": false,
        "range": [
          3927,
          3930
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 161
          },
          "start": {
            "column": 9,
            "line": 161
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 78,
                "line": 161
              },
              "start": {
                "column": 17,
                "line": 161
              }
            },
            "range": [
              3935,
              3996
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          3939,
                          3943
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 161
                          },
                          "start": {
                            "column": 21,
                            "line": 161
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
                            "column": 32,
                            "line": 161
                          },
                          "start": {
                            "column": 25,
                            "line": 161
                          }
                        },
                        "range": [
                          3943,
                          3950
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'foo'",
                            "value": "foo",
                            "range": [
                              3945,
                              3950
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 161
                              },
                              "start": {
                                "column": 27,
                                "line": 161
                              }
                            }
                          },
                          "range": [
                            3945,
                            3950
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 161
                            },
                            "start": {
                              "column": 27,
                              "line": 161
                            }
                          }
                        }
                      },
                      "range": [
                        3939,
                        3951
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 161
                        },
                        "start": {
                          "column": 21,
                          "line": 161
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          3952,
                          3955
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 161
                          },
                          "start": {
                            "column": 34,
                            "line": 161
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
                            "column": 45,
                            "line": 161
                          },
                          "start": {
                            "column": 37,
                            "line": 161
                          }
                        },
                        "range": [
                          3955,
                          3963
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            3957,
                            3963
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 161
                            },
                            "start": {
                              "column": 39,
                              "line": 161
                            }
                          }
                        }
                      },
                      "range": [
                        3952,
                        3963
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 161
                        },
                        "start": {
                          "column": 34,
                          "line": 161
                        }
                      }
                    }
                  ],
                  "range": [
                    3937,
                    3965
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 161
                    },
                    "start": {
                      "column": 19,
                      "line": 161
                    }
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          3970,
                          3974
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 161
                          },
                          "start": {
                            "column": 52,
                            "line": 161
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
                            "column": 63,
                            "line": 161
                          },
                          "start": {
                            "column": 56,
                            "line": 161
                          }
                        },
                        "range": [
                          3974,
                          3981
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'bar'",
                            "value": "bar",
                            "range": [
                              3976,
                              3981
                            ],
                            "loc": {
                              "end": {
                                "column": 63,
                                "line": 161
                              },
                              "start": {
                                "column": 58,
                                "line": 161
                              }
                            }
                          },
                          "range": [
                            3976,
                            3981
                          ],
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 161
                            },
                            "start": {
                              "column": 58,
                              "line": 161
                            }
                          }
                        }
                      },
                      "range": [
                        3970,
                        3982
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 161
                        },
                        "start": {
                          "column": 52,
                          "line": 161
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "range": [
                          3983,
                          3986
                        ],
                        "loc": {
                          "end": {
                            "column": 68,
                            "line": 161
                          },
                          "start": {
                            "column": 65,
                            "line": 161
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
                            "column": 76,
                            "line": 161
                          },
                          "start": {
                            "column": 68,
                            "line": 161
                          }
                        },
                        "range": [
                          3986,
                          3994
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            3988,
                            3994
                          ],
                          "loc": {
                            "end": {
                              "column": 76,
                              "line": 161
                            },
                            "start": {
                              "column": 70,
                              "line": 161
                            }
                          }
                        }
                      },
                      "range": [
                        3983,
                        3994
                      ],
                      "loc": {
                        "end": {
                          "column": 76,
                          "line": 161
                        },
                        "start": {
                          "column": 65,
                          "line": 161
                        }
                      }
                    }
                  ],
                  "range": [
                    3968,
                    3996
                  ],
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 161
                    },
                    "start": {
                      "column": 50,
                      "line": 161
                    }
                  }
                }
              ],
              "range": [
                3937,
                3996
              ],
              "loc": {
                "end": {
                  "column": 78,
                  "line": 161
                },
                "start": {
                  "column": 19,
                  "line": 161
                }
              }
            }
          },
          "range": [
            3931,
            3996
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 161
            },
            "start": {
              "column": 13,
              "line": 161
            }
          }
        }
      ],
      "range": [
        3918,
        4171
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 170
        },
        "start": {
          "column": 0,
          "line": 161
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
                  "name": "kind",
                  "optional": false,
                  "range": [
                    4318,
                    4322
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 175
                    },
                    "start": {
                      "column": 10,
                      "line": 175
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "range": [
                      4325,
                      4328
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 175
                      },
                      "start": {
                        "column": 17,
                        "line": 175
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "range": [
                      4329,
                      4333
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 175
                      },
                      "start": {
                        "column": 21,
                        "line": 175
                      }
                    }
                  },
                  "range": [
                    4325,
                    4333
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 175
                    },
                    "start": {
                      "column": 17,
                      "line": 175
                    }
                  }
                },
                "range": [
                  4318,
                  4333
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 175
                  },
                  "start": {
                    "column": 10,
                    "line": 175
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              4312,
              4334
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 175
              },
              "start": {
                "column": 4,
                "line": 175
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": {
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
                      "name": "obj",
                      "optional": false,
                      "range": [
                        4403,
                        4406
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 180
                        },
                        "start": {
                          "column": 8,
                          "line": 180
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "range": [
                        4407,
                        4410
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 180
                        },
                        "start": {
                          "column": 12,
                          "line": 180
                        }
                      }
                    },
                    "range": [
                      4403,
                      4410
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 180
                      },
                      "start": {
                        "column": 8,
                        "line": 180
                      }
                    }
                  },
                  "range": [
                    4403,
                    4411
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 180
                    },
                    "start": {
                      "column": 8,
                      "line": 180
                    }
                  }
                }
              ],
              "range": [
                4393,
                4417
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 181
                },
                "start": {
                  "column": 9,
                  "line": 179
                }
              }
            },
            "consequent": {
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
                      "name": "obj",
                      "optional": false,
                      "range": [
                        4369,
                        4372
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 177
                        },
                        "start": {
                          "column": 8,
                          "line": 177
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        4373,
                        4376
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 177
                        },
                        "start": {
                          "column": 12,
                          "line": 177
                        }
                      }
                    },
                    "range": [
                      4369,
                      4376
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 177
                      },
                      "start": {
                        "column": 8,
                        "line": 177
                      }
                    }
                  },
                  "range": [
                    4369,
                    4377
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 177
                    },
                    "start": {
                      "column": 8,
                      "line": 177
                    }
                  }
                }
              ],
              "range": [
                4359,
                4383
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 178
                },
                "start": {
                  "column": 24,
                  "line": 176
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "range": [
                  4343,
                  4347
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 176
                  },
                  "start": {
                    "column": 8,
                    "line": 176
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'foo'",
                "value": "foo",
                "range": [
                  4352,
                  4357
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 176
                  },
                  "start": {
                    "column": 17,
                    "line": 176
                  }
                }
              },
              "range": [
                4343,
                4357
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 176
                },
                "start": {
                  "column": 8,
                  "line": 176
                }
              }
            },
            "range": [
              4339,
              4417
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 181
              },
              "start": {
                "column": 4,
                "line": 176
              }
            }
          }
        ],
        "range": [
          4306,
          4419
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 182
          },
          "start": {
            "column": 79,
            "line": 174
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f30",
        "optional": false,
        "range": [
          4236,
          4239
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 174
          },
          "start": {
            "column": 9,
            "line": 174
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 77,
                "line": 174
              },
              "start": {
                "column": 16,
                "line": 174
              }
            },
            "range": [
              4243,
              4304
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          4247,
                          4251
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 174
                          },
                          "start": {
                            "column": 20,
                            "line": 174
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
                            "column": 31,
                            "line": 174
                          },
                          "start": {
                            "column": 24,
                            "line": 174
                          }
                        },
                        "range": [
                          4251,
                          4258
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'foo'",
                            "value": "foo",
                            "range": [
                              4253,
                              4258
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 174
                              },
                              "start": {
                                "column": 26,
                                "line": 174
                              }
                            }
                          },
                          "range": [
                            4253,
                            4258
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 174
                            },
                            "start": {
                              "column": 26,
                              "line": 174
                            }
                          }
                        }
                      },
                      "range": [
                        4247,
                        4259
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 174
                        },
                        "start": {
                          "column": 20,
                          "line": 174
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          4260,
                          4263
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 174
                          },
                          "start": {
                            "column": 33,
                            "line": 174
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
                            "column": 44,
                            "line": 174
                          },
                          "start": {
                            "column": 36,
                            "line": 174
                          }
                        },
                        "range": [
                          4263,
                          4271
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            4265,
                            4271
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 174
                            },
                            "start": {
                              "column": 38,
                              "line": 174
                            }
                          }
                        }
                      },
                      "range": [
                        4260,
                        4271
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 174
                        },
                        "start": {
                          "column": 33,
                          "line": 174
                        }
                      }
                    }
                  ],
                  "range": [
                    4245,
                    4273
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 174
                    },
                    "start": {
                      "column": 18,
                      "line": 174
                    }
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          4278,
                          4282
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 174
                          },
                          "start": {
                            "column": 51,
                            "line": 174
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
                            "column": 62,
                            "line": 174
                          },
                          "start": {
                            "column": 55,
                            "line": 174
                          }
                        },
                        "range": [
                          4282,
                          4289
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'bar'",
                            "value": "bar",
                            "range": [
                              4284,
                              4289
                            ],
                            "loc": {
                              "end": {
                                "column": 62,
                                "line": 174
                              },
                              "start": {
                                "column": 57,
                                "line": 174
                              }
                            }
                          },
                          "range": [
                            4284,
                            4289
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 174
                            },
                            "start": {
                              "column": 57,
                              "line": 174
                            }
                          }
                        }
                      },
                      "range": [
                        4278,
                        4290
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 174
                        },
                        "start": {
                          "column": 51,
                          "line": 174
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "range": [
                          4291,
                          4294
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 174
                          },
                          "start": {
                            "column": 64,
                            "line": 174
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
                            "column": 75,
                            "line": 174
                          },
                          "start": {
                            "column": 67,
                            "line": 174
                          }
                        },
                        "range": [
                          4294,
                          4302
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            4296,
                            4302
                          ],
                          "loc": {
                            "end": {
                              "column": 75,
                              "line": 174
                            },
                            "start": {
                              "column": 69,
                              "line": 174
                            }
                          }
                        }
                      },
                      "range": [
                        4291,
                        4302
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 174
                        },
                        "start": {
                          "column": 64,
                          "line": 174
                        }
                      }
                    }
                  ],
                  "range": [
                    4276,
                    4304
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 174
                    },
                    "start": {
                      "column": 49,
                      "line": 174
                    }
                  }
                }
              ],
              "range": [
                4245,
                4304
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 174
                },
                "start": {
                  "column": 18,
                  "line": 174
                }
              }
            }
          },
          "range": [
            4240,
            4304
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 174
            },
            "start": {
              "column": 13,
              "line": 174
            }
          }
        }
      ],
      "range": [
        4227,
        4419
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 182
        },
        "start": {
          "column": 0,
          "line": 174
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          4514,
                          4518
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 185
                          },
                          "start": {
                            "column": 12,
                            "line": 185
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          4514,
                          4518
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 185
                          },
                          "start": {
                            "column": 12,
                            "line": 185
                          }
                        }
                      },
                      "range": [
                        4514,
                        4518
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 185
                        },
                        "start": {
                          "column": 12,
                          "line": 185
                        }
                      }
                    }
                  ],
                  "range": [
                    4512,
                    4520
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 185
                    },
                    "start": {
                      "column": 10,
                      "line": 185
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "range": [
                    4523,
                    4526
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 185
                    },
                    "start": {
                      "column": 21,
                      "line": 185
                    }
                  }
                },
                "range": [
                  4512,
                  4526
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 185
                  },
                  "start": {
                    "column": 10,
                    "line": 185
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              4506,
              4527
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 185
              },
              "start": {
                "column": 4,
                "line": 185
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": {
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
                      "name": "obj",
                      "optional": false,
                      "range": [
                        4596,
                        4599
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 190
                        },
                        "start": {
                          "column": 8,
                          "line": 190
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "range": [
                        4600,
                        4603
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 190
                        },
                        "start": {
                          "column": 12,
                          "line": 190
                        }
                      }
                    },
                    "range": [
                      4596,
                      4603
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 190
                      },
                      "start": {
                        "column": 8,
                        "line": 190
                      }
                    }
                  },
                  "range": [
                    4596,
                    4604
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 190
                    },
                    "start": {
                      "column": 8,
                      "line": 190
                    }
                  }
                }
              ],
              "range": [
                4586,
                4610
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 191
                },
                "start": {
                  "column": 9,
                  "line": 189
                }
              }
            },
            "consequent": {
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
                      "name": "obj",
                      "optional": false,
                      "range": [
                        4562,
                        4565
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 187
                        },
                        "start": {
                          "column": 8,
                          "line": 187
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        4566,
                        4569
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 187
                        },
                        "start": {
                          "column": 12,
                          "line": 187
                        }
                      }
                    },
                    "range": [
                      4562,
                      4569
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 187
                      },
                      "start": {
                        "column": 8,
                        "line": 187
                      }
                    }
                  },
                  "range": [
                    4562,
                    4570
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 187
                    },
                    "start": {
                      "column": 8,
                      "line": 187
                    }
                  }
                }
              ],
              "range": [
                4552,
                4576
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 188
                },
                "start": {
                  "column": 24,
                  "line": 186
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "range": [
                  4536,
                  4540
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 186
                  },
                  "start": {
                    "column": 8,
                    "line": 186
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'foo'",
                "value": "foo",
                "range": [
                  4545,
                  4550
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 186
                  },
                  "start": {
                    "column": 17,
                    "line": 186
                  }
                }
              },
              "range": [
                4536,
                4550
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 186
                },
                "start": {
                  "column": 8,
                  "line": 186
                }
              }
            },
            "range": [
              4532,
              4610
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 191
              },
              "start": {
                "column": 4,
                "line": 186
              }
            }
          }
        ],
        "range": [
          4500,
          4612
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 192
          },
          "start": {
            "column": 79,
            "line": 184
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f31",
        "optional": false,
        "range": [
          4430,
          4433
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 184
          },
          "start": {
            "column": 9,
            "line": 184
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 77,
                "line": 184
              },
              "start": {
                "column": 16,
                "line": 184
              }
            },
            "range": [
              4437,
              4498
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          4441,
                          4445
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 184
                          },
                          "start": {
                            "column": 20,
                            "line": 184
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
                            "column": 31,
                            "line": 184
                          },
                          "start": {
                            "column": 24,
                            "line": 184
                          }
                        },
                        "range": [
                          4445,
                          4452
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'foo'",
                            "value": "foo",
                            "range": [
                              4447,
                              4452
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 184
                              },
                              "start": {
                                "column": 26,
                                "line": 184
                              }
                            }
                          },
                          "range": [
                            4447,
                            4452
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 184
                            },
                            "start": {
                              "column": 26,
                              "line": 184
                            }
                          }
                        }
                      },
                      "range": [
                        4441,
                        4453
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 184
                        },
                        "start": {
                          "column": 20,
                          "line": 184
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          4454,
                          4457
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 184
                          },
                          "start": {
                            "column": 33,
                            "line": 184
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
                            "column": 44,
                            "line": 184
                          },
                          "start": {
                            "column": 36,
                            "line": 184
                          }
                        },
                        "range": [
                          4457,
                          4465
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            4459,
                            4465
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 184
                            },
                            "start": {
                              "column": 38,
                              "line": 184
                            }
                          }
                        }
                      },
                      "range": [
                        4454,
                        4465
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 184
                        },
                        "start": {
                          "column": 33,
                          "line": 184
                        }
                      }
                    }
                  ],
                  "range": [
                    4439,
                    4467
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 184
                    },
                    "start": {
                      "column": 18,
                      "line": 184
                    }
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          4472,
                          4476
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 184
                          },
                          "start": {
                            "column": 51,
                            "line": 184
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
                            "column": 62,
                            "line": 184
                          },
                          "start": {
                            "column": 55,
                            "line": 184
                          }
                        },
                        "range": [
                          4476,
                          4483
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'bar'",
                            "value": "bar",
                            "range": [
                              4478,
                              4483
                            ],
                            "loc": {
                              "end": {
                                "column": 62,
                                "line": 184
                              },
                              "start": {
                                "column": 57,
                                "line": 184
                              }
                            }
                          },
                          "range": [
                            4478,
                            4483
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 184
                            },
                            "start": {
                              "column": 57,
                              "line": 184
                            }
                          }
                        }
                      },
                      "range": [
                        4472,
                        4484
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 184
                        },
                        "start": {
                          "column": 51,
                          "line": 184
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "range": [
                          4485,
                          4488
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 184
                          },
                          "start": {
                            "column": 64,
                            "line": 184
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
                            "column": 75,
                            "line": 184
                          },
                          "start": {
                            "column": 67,
                            "line": 184
                          }
                        },
                        "range": [
                          4488,
                          4496
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            4490,
                            4496
                          ],
                          "loc": {
                            "end": {
                              "column": 75,
                              "line": 184
                            },
                            "start": {
                              "column": 69,
                              "line": 184
                            }
                          }
                        }
                      },
                      "range": [
                        4485,
                        4496
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 184
                        },
                        "start": {
                          "column": 64,
                          "line": 184
                        }
                      }
                    }
                  ],
                  "range": [
                    4470,
                    4498
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 184
                    },
                    "start": {
                      "column": 49,
                      "line": 184
                    }
                  }
                }
              ],
              "range": [
                4439,
                4498
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 184
                },
                "start": {
                  "column": 18,
                  "line": 184
                }
              }
            }
          },
          "range": [
            4434,
            4498
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 184
            },
            "start": {
              "column": 13,
              "line": 184
            }
          }
        }
      ],
      "range": [
        4421,
        4612
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 192
        },
        "start": {
          "column": 0,
          "line": 184
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          4707,
                          4711
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 195
                          },
                          "start": {
                            "column": 12,
                            "line": 195
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "range": [
                          4713,
                          4714
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 195
                          },
                          "start": {
                            "column": 18,
                            "line": 195
                          }
                        }
                      },
                      "range": [
                        4707,
                        4714
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 195
                        },
                        "start": {
                          "column": 12,
                          "line": 195
                        }
                      }
                    }
                  ],
                  "range": [
                    4705,
                    4716
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 195
                    },
                    "start": {
                      "column": 10,
                      "line": 195
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "range": [
                    4719,
                    4722
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 195
                    },
                    "start": {
                      "column": 24,
                      "line": 195
                    }
                  }
                },
                "range": [
                  4705,
                  4722
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 195
                  },
                  "start": {
                    "column": 10,
                    "line": 195
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              4699,
              4723
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 195
              },
              "start": {
                "column": 4,
                "line": 195
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": {
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
                      "name": "obj",
                      "optional": false,
                      "range": [
                        4789,
                        4792
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 200
                        },
                        "start": {
                          "column": 8,
                          "line": 200
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "range": [
                        4793,
                        4796
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 200
                        },
                        "start": {
                          "column": 12,
                          "line": 200
                        }
                      }
                    },
                    "range": [
                      4789,
                      4796
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 200
                      },
                      "start": {
                        "column": 8,
                        "line": 200
                      }
                    }
                  },
                  "range": [
                    4789,
                    4797
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 200
                    },
                    "start": {
                      "column": 8,
                      "line": 200
                    }
                  }
                }
              ],
              "range": [
                4779,
                4803
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 201
                },
                "start": {
                  "column": 9,
                  "line": 199
                }
              }
            },
            "consequent": {
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
                      "name": "obj",
                      "optional": false,
                      "range": [
                        4755,
                        4758
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 197
                        },
                        "start": {
                          "column": 8,
                          "line": 197
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        4759,
                        4762
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 197
                        },
                        "start": {
                          "column": 12,
                          "line": 197
                        }
                      }
                    },
                    "range": [
                      4755,
                      4762
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 197
                      },
                      "start": {
                        "column": 8,
                        "line": 197
                      }
                    }
                  },
                  "range": [
                    4755,
                    4763
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 197
                    },
                    "start": {
                      "column": 8,
                      "line": 197
                    }
                  }
                }
              ],
              "range": [
                4745,
                4769
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 198
                },
                "start": {
                  "column": 21,
                  "line": 196
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "range": [
                  4732,
                  4733
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 196
                  },
                  "start": {
                    "column": 8,
                    "line": 196
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'foo'",
                "value": "foo",
                "range": [
                  4738,
                  4743
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 196
                  },
                  "start": {
                    "column": 14,
                    "line": 196
                  }
                }
              },
              "range": [
                4732,
                4743
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 196
                },
                "start": {
                  "column": 8,
                  "line": 196
                }
              }
            },
            "range": [
              4728,
              4803
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 201
              },
              "start": {
                "column": 4,
                "line": 196
              }
            }
          }
        ],
        "range": [
          4693,
          4805
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 202
          },
          "start": {
            "column": 79,
            "line": 194
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f32",
        "optional": false,
        "range": [
          4623,
          4626
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 194
          },
          "start": {
            "column": 9,
            "line": 194
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 77,
                "line": 194
              },
              "start": {
                "column": 16,
                "line": 194
              }
            },
            "range": [
              4630,
              4691
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          4634,
                          4638
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 194
                          },
                          "start": {
                            "column": 20,
                            "line": 194
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
                            "column": 31,
                            "line": 194
                          },
                          "start": {
                            "column": 24,
                            "line": 194
                          }
                        },
                        "range": [
                          4638,
                          4645
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'foo'",
                            "value": "foo",
                            "range": [
                              4640,
                              4645
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 194
                              },
                              "start": {
                                "column": 26,
                                "line": 194
                              }
                            }
                          },
                          "range": [
                            4640,
                            4645
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 194
                            },
                            "start": {
                              "column": 26,
                              "line": 194
                            }
                          }
                        }
                      },
                      "range": [
                        4634,
                        4646
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 194
                        },
                        "start": {
                          "column": 20,
                          "line": 194
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          4647,
                          4650
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 194
                          },
                          "start": {
                            "column": 33,
                            "line": 194
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
                            "column": 44,
                            "line": 194
                          },
                          "start": {
                            "column": 36,
                            "line": 194
                          }
                        },
                        "range": [
                          4650,
                          4658
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            4652,
                            4658
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 194
                            },
                            "start": {
                              "column": 38,
                              "line": 194
                            }
                          }
                        }
                      },
                      "range": [
                        4647,
                        4658
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 194
                        },
                        "start": {
                          "column": 33,
                          "line": 194
                        }
                      }
                    }
                  ],
                  "range": [
                    4632,
                    4660
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 194
                    },
                    "start": {
                      "column": 18,
                      "line": 194
                    }
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          4665,
                          4669
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 194
                          },
                          "start": {
                            "column": 51,
                            "line": 194
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
                            "column": 62,
                            "line": 194
                          },
                          "start": {
                            "column": 55,
                            "line": 194
                          }
                        },
                        "range": [
                          4669,
                          4676
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'bar'",
                            "value": "bar",
                            "range": [
                              4671,
                              4676
                            ],
                            "loc": {
                              "end": {
                                "column": 62,
                                "line": 194
                              },
                              "start": {
                                "column": 57,
                                "line": 194
                              }
                            }
                          },
                          "range": [
                            4671,
                            4676
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 194
                            },
                            "start": {
                              "column": 57,
                              "line": 194
                            }
                          }
                        }
                      },
                      "range": [
                        4665,
                        4677
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 194
                        },
                        "start": {
                          "column": 51,
                          "line": 194
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "range": [
                          4678,
                          4681
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 194
                          },
                          "start": {
                            "column": 64,
                            "line": 194
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
                            "column": 75,
                            "line": 194
                          },
                          "start": {
                            "column": 67,
                            "line": 194
                          }
                        },
                        "range": [
                          4681,
                          4689
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            4683,
                            4689
                          ],
                          "loc": {
                            "end": {
                              "column": 75,
                              "line": 194
                            },
                            "start": {
                              "column": 69,
                              "line": 194
                            }
                          }
                        }
                      },
                      "range": [
                        4678,
                        4689
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 194
                        },
                        "start": {
                          "column": 64,
                          "line": 194
                        }
                      }
                    }
                  ],
                  "range": [
                    4663,
                    4691
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 194
                    },
                    "start": {
                      "column": 49,
                      "line": 194
                    }
                  }
                }
              ],
              "range": [
                4632,
                4691
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 194
                },
                "start": {
                  "column": 18,
                  "line": 194
                }
              }
            }
          },
          "range": [
            4627,
            4691
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 194
            },
            "start": {
              "column": 13,
              "line": 194
            }
          }
        }
      ],
      "range": [
        4614,
        4805
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 202
        },
        "start": {
          "column": 0,
          "line": 194
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          4900,
                          4904
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 205
                          },
                          "start": {
                            "column": 12,
                            "line": 205
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          4900,
                          4904
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 205
                          },
                          "start": {
                            "column": 12,
                            "line": 205
                          }
                        }
                      },
                      "range": [
                        4900,
                        4904
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 205
                        },
                        "start": {
                          "column": 12,
                          "line": 205
                        }
                      }
                    }
                  ],
                  "range": [
                    4898,
                    4906
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 205
                    },
                    "start": {
                      "column": 10,
                      "line": 205
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "range": [
                    4909,
                    4912
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 205
                    },
                    "start": {
                      "column": 21,
                      "line": 205
                    }
                  }
                },
                "range": [
                  4898,
                  4912
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 205
                  },
                  "start": {
                    "column": 10,
                    "line": 205
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              4892,
              4913
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 205
              },
              "start": {
                "column": 4,
                "line": 205
              }
            }
          },
          {
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "range": [
                          4954,
                          4957
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 207
                          },
                          "start": {
                            "column": 20,
                            "line": 207
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          4958,
                          4961
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 207
                          },
                          "start": {
                            "column": 24,
                            "line": 207
                          }
                        }
                      },
                      "range": [
                        4954,
                        4961
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 207
                        },
                        "start": {
                          "column": 20,
                          "line": 207
                        }
                      }
                    },
                    "range": [
                      4954,
                      4962
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 207
                      },
                      "start": {
                        "column": 20,
                        "line": 207
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      4963,
                      4969
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 207
                      },
                      "start": {
                        "column": 29,
                        "line": 207
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "'foo'",
                  "value": "foo",
                  "range": [
                    4947,
                    4952
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 207
                    },
                    "start": {
                      "column": 13,
                      "line": 207
                    }
                  }
                },
                "range": [
                  4942,
                  4969
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 207
                  },
                  "start": {
                    "column": 8,
                    "line": 207
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "range": [
                          4990,
                          4993
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 208
                          },
                          "start": {
                            "column": 20,
                            "line": 208
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "range": [
                          4994,
                          4997
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 208
                          },
                          "start": {
                            "column": 24,
                            "line": 208
                          }
                        }
                      },
                      "range": [
                        4990,
                        4997
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 208
                        },
                        "start": {
                          "column": 20,
                          "line": 208
                        }
                      }
                    },
                    "range": [
                      4990,
                      4998
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 208
                      },
                      "start": {
                        "column": 20,
                        "line": 208
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      4999,
                      5005
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 208
                      },
                      "start": {
                        "column": 29,
                        "line": 208
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "'bar'",
                  "value": "bar",
                  "range": [
                    4983,
                    4988
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 208
                    },
                    "start": {
                      "column": 13,
                      "line": 208
                    }
                  }
                },
                "range": [
                  4978,
                  5005
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 208
                  },
                  "start": {
                    "column": 8,
                    "line": 208
                  }
                }
              }
            ],
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "range": [
                4926,
                4930
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 206
                },
                "start": {
                  "column": 12,
                  "line": 206
                }
              }
            },
            "range": [
              4918,
              5011
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 209
              },
              "start": {
                "column": 4,
                "line": 206
              }
            }
          }
        ],
        "range": [
          4886,
          5013
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 210
          },
          "start": {
            "column": 79,
            "line": 204
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f33",
        "optional": false,
        "range": [
          4816,
          4819
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 204
          },
          "start": {
            "column": 9,
            "line": 204
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 77,
                "line": 204
              },
              "start": {
                "column": 16,
                "line": 204
              }
            },
            "range": [
              4823,
              4884
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          4827,
                          4831
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 204
                          },
                          "start": {
                            "column": 20,
                            "line": 204
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
                            "column": 31,
                            "line": 204
                          },
                          "start": {
                            "column": 24,
                            "line": 204
                          }
                        },
                        "range": [
                          4831,
                          4838
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'foo'",
                            "value": "foo",
                            "range": [
                              4833,
                              4838
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 204
                              },
                              "start": {
                                "column": 26,
                                "line": 204
                              }
                            }
                          },
                          "range": [
                            4833,
                            4838
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 204
                            },
                            "start": {
                              "column": 26,
                              "line": 204
                            }
                          }
                        }
                      },
                      "range": [
                        4827,
                        4839
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 204
                        },
                        "start": {
                          "column": 20,
                          "line": 204
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          4840,
                          4843
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 204
                          },
                          "start": {
                            "column": 33,
                            "line": 204
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
                            "column": 44,
                            "line": 204
                          },
                          "start": {
                            "column": 36,
                            "line": 204
                          }
                        },
                        "range": [
                          4843,
                          4851
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            4845,
                            4851
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 204
                            },
                            "start": {
                              "column": 38,
                              "line": 204
                            }
                          }
                        }
                      },
                      "range": [
                        4840,
                        4851
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 204
                        },
                        "start": {
                          "column": 33,
                          "line": 204
                        }
                      }
                    }
                  ],
                  "range": [
                    4825,
                    4853
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 204
                    },
                    "start": {
                      "column": 18,
                      "line": 204
                    }
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          4858,
                          4862
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 204
                          },
                          "start": {
                            "column": 51,
                            "line": 204
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
                            "column": 62,
                            "line": 204
                          },
                          "start": {
                            "column": 55,
                            "line": 204
                          }
                        },
                        "range": [
                          4862,
                          4869
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'bar'",
                            "value": "bar",
                            "range": [
                              4864,
                              4869
                            ],
                            "loc": {
                              "end": {
                                "column": 62,
                                "line": 204
                              },
                              "start": {
                                "column": 57,
                                "line": 204
                              }
                            }
                          },
                          "range": [
                            4864,
                            4869
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 204
                            },
                            "start": {
                              "column": 57,
                              "line": 204
                            }
                          }
                        }
                      },
                      "range": [
                        4858,
                        4870
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 204
                        },
                        "start": {
                          "column": 51,
                          "line": 204
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "range": [
                          4871,
                          4874
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 204
                          },
                          "start": {
                            "column": 64,
                            "line": 204
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
                            "column": 75,
                            "line": 204
                          },
                          "start": {
                            "column": 67,
                            "line": 204
                          }
                        },
                        "range": [
                          4874,
                          4882
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            4876,
                            4882
                          ],
                          "loc": {
                            "end": {
                              "column": 75,
                              "line": 204
                            },
                            "start": {
                              "column": 69,
                              "line": 204
                            }
                          }
                        }
                      },
                      "range": [
                        4871,
                        4882
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 204
                        },
                        "start": {
                          "column": 64,
                          "line": 204
                        }
                      }
                    }
                  ],
                  "range": [
                    4856,
                    4884
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 204
                    },
                    "start": {
                      "column": 49,
                      "line": 204
                    }
                  }
                }
              ],
              "range": [
                4825,
                4884
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 204
                },
                "start": {
                  "column": 18,
                  "line": 204
                }
              }
            }
          },
          "range": [
            4820,
            4884
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 204
            },
            "start": {
              "column": 13,
              "line": 204
            }
          }
        }
      ],
      "range": [
        4807,
        5013
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 210
        },
        "start": {
          "column": 0,
          "line": 204
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          5026,
          5313
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                5032,
                5043
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 214
                },
                "start": {
                  "column": 4,
                  "line": 214
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
                5043,
                5311
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
                          "name": "thisX_isString",
                          "optional": false,
                          "range": [
                            5089,
                            5103
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 215
                            },
                            "start": {
                              "column": 14,
                              "line": 215
                            }
                          }
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "argument": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  5113,
                                  5117
                                ],
                                "loc": {
                                  "end": {
                                    "column": 42,
                                    "line": 215
                                  },
                                  "start": {
                                    "column": 38,
                                    "line": 215
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
                                  5118,
                                  5119
                                ],
                                "loc": {
                                  "end": {
                                    "column": 44,
                                    "line": 215
                                  },
                                  "start": {
                                    "column": 43,
                                    "line": 215
                                  }
                                }
                              },
                              "range": [
                                5113,
                                5119
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 215
                                },
                                "start": {
                                  "column": 38,
                                  "line": 215
                                }
                              }
                            },
                            "operator": "typeof",
                            "prefix": true,
                            "range": [
                              5106,
                              5119
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 215
                              },
                              "start": {
                                "column": 31,
                                "line": 215
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "'string'",
                            "value": "string",
                            "range": [
                              5124,
                              5132
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 215
                              },
                              "start": {
                                "column": 49,
                                "line": 215
                              }
                            }
                          },
                          "range": [
                            5106,
                            5132
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 215
                            },
                            "start": {
                              "column": 31,
                              "line": 215
                            }
                          }
                        },
                        "range": [
                          5089,
                          5132
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 215
                          },
                          "start": {
                            "column": 14,
                            "line": 215
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      5083,
                      5133
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 215
                      },
                      "start": {
                        "column": 8,
                        "line": 215
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
                          "name": "xIsString",
                          "optional": false,
                          "range": [
                            5148,
                            5157
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 216
                            },
                            "start": {
                              "column": 14,
                              "line": 216
                            }
                          }
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                5167,
                                5168
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 216
                                },
                                "start": {
                                  "column": 33,
                                  "line": 216
                                }
                              }
                            },
                            "operator": "typeof",
                            "prefix": true,
                            "range": [
                              5160,
                              5168
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 216
                              },
                              "start": {
                                "column": 26,
                                "line": 216
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "'string'",
                            "value": "string",
                            "range": [
                              5173,
                              5181
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 216
                              },
                              "start": {
                                "column": 39,
                                "line": 216
                              }
                            }
                          },
                          "range": [
                            5160,
                            5181
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 216
                            },
                            "start": {
                              "column": 26,
                              "line": 216
                            }
                          }
                        },
                        "range": [
                          5148,
                          5181
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 216
                          },
                          "start": {
                            "column": 14,
                            "line": 216
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      5142,
                      5182
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 216
                      },
                      "start": {
                        "column": 8,
                        "line": 216
                      }
                    }
                  },
                  {
                    "type": "IfStatement",
                    "alternate": null,
                    "consequent": {
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
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 218
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 218
                                    }
                                  },
                                  "range": [
                                    5243,
                                    5251
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "range": [
                                      5245,
                                      5251
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 25,
                                        "line": 218
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 218
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  5242,
                                  5251
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 218
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 218
                                  }
                                }
                              },
                              "init": null,
                              "range": [
                                5242,
                                5251
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 218
                                },
                                "start": {
                                  "column": 16,
                                  "line": 218
                                }
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "let",
                          "range": [
                            5238,
                            5252
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 218
                            },
                            "start": {
                              "column": 12,
                              "line": 218
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "range": [
                                5265,
                                5266
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 219
                                },
                                "start": {
                                  "column": 12,
                                  "line": 219
                                }
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  5269,
                                  5273
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 219
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 219
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
                                  5274,
                                  5275
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 219
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 219
                                  }
                                }
                              },
                              "range": [
                                5269,
                                5275
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 219
                                },
                                "start": {
                                  "column": 16,
                                  "line": 219
                                }
                              }
                            },
                            "range": [
                              5265,
                              5275
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 219
                              },
                              "start": {
                                "column": 12,
                                "line": 219
                              }
                            }
                          },
                          "range": [
                            5265,
                            5276
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 219
                            },
                            "start": {
                              "column": 12,
                              "line": 219
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "range": [
                                5289,
                                5290
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 220
                                },
                                "start": {
                                  "column": 12,
                                  "line": 220
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                5293,
                                5294
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 220
                                },
                                "start": {
                                  "column": 16,
                                  "line": 220
                                }
                              }
                            },
                            "range": [
                              5289,
                              5294
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 220
                              },
                              "start": {
                                "column": 12,
                                "line": 220
                              }
                            }
                          },
                          "range": [
                            5289,
                            5295
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 220
                            },
                            "start": {
                              "column": 12,
                              "line": 220
                            }
                          }
                        }
                      ],
                      "range": [
                        5224,
                        5305
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 221
                        },
                        "start": {
                          "column": 41,
                          "line": 217
                        }
                      }
                    },
                    "test": {
                      "type": "LogicalExpression",
                      "operator": "&&",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "thisX_isString",
                        "optional": false,
                        "range": [
                          5195,
                          5209
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 217
                          },
                          "start": {
                            "column": 12,
                            "line": 217
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "xIsString",
                        "optional": false,
                        "range": [
                          5213,
                          5222
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 217
                          },
                          "start": {
                            "column": 30,
                            "line": 217
                          }
                        }
                      },
                      "range": [
                        5195,
                        5222
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 217
                        },
                        "start": {
                          "column": 12,
                          "line": 217
                        }
                      }
                    },
                    "range": [
                      5191,
                      5305
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 221
                      },
                      "start": {
                        "column": 8,
                        "line": 217
                      }
                    }
                  }
                ],
                "range": [
                  5073,
                  5311
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 222
                  },
                  "start": {
                    "column": 45,
                    "line": 214
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
                          "column": 43,
                          "line": 214
                        },
                        "start": {
                          "column": 26,
                          "line": 214
                        }
                      },
                      "range": [
                        5054,
                        5071
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "range": [
                              5056,
                              5062
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 214
                              },
                              "start": {
                                "column": 28,
                                "line": 214
                              }
                            }
                          },
                          {
                            "type": "TSNumberKeyword",
                            "range": [
                              5065,
                              5071
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 214
                              },
                              "start": {
                                "column": 37,
                                "line": 214
                              }
                            }
                          }
                        ],
                        "range": [
                          5056,
                          5071
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 214
                          },
                          "start": {
                            "column": 28,
                            "line": 214
                          }
                        }
                      }
                    },
                    "range": [
                      5053,
                      5071
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 214
                      },
                      "start": {
                        "column": 25,
                        "line": 214
                      }
                    }
                  },
                  "readonly": true,
                  "static": false,
                  "range": [
                    5044,
                    5071
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 214
                    },
                    "start": {
                      "column": 16,
                      "line": 214
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 222
                },
                "start": {
                  "column": 15,
                  "line": 214
                }
              }
            },
            "range": [
              5032,
              5311
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 222
              },
              "start": {
                "column": 4,
                "line": 214
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 223
          },
          "start": {
            "column": 10,
            "line": 213
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C10",
        "optional": false,
        "range": [
          5022,
          5025
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 213
          },
          "start": {
            "column": 6,
            "line": 213
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        5016,
        5313
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 223
        },
        "start": {
          "column": 0,
          "line": 213
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          5325,
          5758
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                5331,
                5342
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 226
                },
                "start": {
                  "column": 4,
                  "line": 226
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
                5342,
                5756
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
                          "name": "thisX_isString",
                          "optional": false,
                          "range": [
                            5388,
                            5402
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 227
                            },
                            "start": {
                              "column": 14,
                              "line": 227
                            }
                          }
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "argument": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  5412,
                                  5416
                                ],
                                "loc": {
                                  "end": {
                                    "column": 42,
                                    "line": 227
                                  },
                                  "start": {
                                    "column": 38,
                                    "line": 227
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
                                  5417,
                                  5418
                                ],
                                "loc": {
                                  "end": {
                                    "column": 44,
                                    "line": 227
                                  },
                                  "start": {
                                    "column": 43,
                                    "line": 227
                                  }
                                }
                              },
                              "range": [
                                5412,
                                5418
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 227
                                },
                                "start": {
                                  "column": 38,
                                  "line": 227
                                }
                              }
                            },
                            "operator": "typeof",
                            "prefix": true,
                            "range": [
                              5405,
                              5418
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 227
                              },
                              "start": {
                                "column": 31,
                                "line": 227
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "'string'",
                            "value": "string",
                            "range": [
                              5423,
                              5431
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 227
                              },
                              "start": {
                                "column": 49,
                                "line": 227
                              }
                            }
                          },
                          "range": [
                            5405,
                            5431
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 227
                            },
                            "start": {
                              "column": 31,
                              "line": 227
                            }
                          }
                        },
                        "range": [
                          5388,
                          5431
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 227
                          },
                          "start": {
                            "column": 14,
                            "line": 227
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      5382,
                      5432
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 227
                      },
                      "start": {
                        "column": 8,
                        "line": 227
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
                          "name": "xIsString",
                          "optional": false,
                          "range": [
                            5447,
                            5456
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 228
                            },
                            "start": {
                              "column": 14,
                              "line": 228
                            }
                          }
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                5466,
                                5467
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 228
                                },
                                "start": {
                                  "column": 33,
                                  "line": 228
                                }
                              }
                            },
                            "operator": "typeof",
                            "prefix": true,
                            "range": [
                              5459,
                              5467
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 228
                              },
                              "start": {
                                "column": 26,
                                "line": 228
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "'string'",
                            "value": "string",
                            "range": [
                              5472,
                              5480
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 228
                              },
                              "start": {
                                "column": 39,
                                "line": 228
                              }
                            }
                          },
                          "range": [
                            5459,
                            5480
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 228
                            },
                            "start": {
                              "column": 26,
                              "line": 228
                            }
                          }
                        },
                        "range": [
                          5447,
                          5480
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 228
                          },
                          "start": {
                            "column": 14,
                            "line": 228
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      5441,
                      5481
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 228
                      },
                      "start": {
                        "column": 8,
                        "line": 228
                      }
                    }
                  },
                  {
                    "type": "IfStatement",
                    "alternate": {
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
                                  5708,
                                  5712
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 236
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 236
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
                                  5713,
                                  5714
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 236
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 236
                                  }
                                }
                              },
                              "range": [
                                5708,
                                5714
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 236
                                },
                                "start": {
                                  "column": 12,
                                  "line": 236
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "raw": "10",
                              "value": 10,
                              "range": [
                                5717,
                                5719
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 236
                                },
                                "start": {
                                  "column": 21,
                                  "line": 236
                                }
                              }
                            },
                            "range": [
                              5708,
                              5719
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 236
                              },
                              "start": {
                                "column": 12,
                                "line": 236
                              }
                            }
                          },
                          "range": [
                            5708,
                            5720
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 236
                            },
                            "start": {
                              "column": 12,
                              "line": 236
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                5733,
                                5734
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 237
                                },
                                "start": {
                                  "column": 12,
                                  "line": 237
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "raw": "10",
                              "value": 10,
                              "range": [
                                5737,
                                5739
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 237
                                },
                                "start": {
                                  "column": 16,
                                  "line": 237
                                }
                              }
                            },
                            "range": [
                              5733,
                              5739
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 237
                              },
                              "start": {
                                "column": 12,
                                "line": 237
                              }
                            }
                          },
                          "range": [
                            5733,
                            5740
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 237
                            },
                            "start": {
                              "column": 12,
                              "line": 237
                            }
                          }
                        }
                      ],
                      "range": [
                        5694,
                        5750
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 238
                        },
                        "start": {
                          "column": 13,
                          "line": 235
                        }
                      }
                    },
                    "consequent": {
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
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 231
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 231
                                    }
                                  },
                                  "range": [
                                    5618,
                                    5626
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "range": [
                                      5620,
                                      5626
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 25,
                                        "line": 231
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 231
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  5617,
                                  5626
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 231
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 231
                                  }
                                }
                              },
                              "init": null,
                              "range": [
                                5617,
                                5626
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 231
                                },
                                "start": {
                                  "column": 16,
                                  "line": 231
                                }
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "let",
                          "range": [
                            5613,
                            5627
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 231
                            },
                            "start": {
                              "column": 12,
                              "line": 231
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "range": [
                                5640,
                                5641
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 232
                                },
                                "start": {
                                  "column": 12,
                                  "line": 232
                                }
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  5644,
                                  5648
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 232
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 232
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
                                  5649,
                                  5650
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 232
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 232
                                  }
                                }
                              },
                              "range": [
                                5644,
                                5650
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 232
                                },
                                "start": {
                                  "column": 16,
                                  "line": 232
                                }
                              }
                            },
                            "range": [
                              5640,
                              5650
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 232
                              },
                              "start": {
                                "column": 12,
                                "line": 232
                              }
                            }
                          },
                          "range": [
                            5640,
                            5651
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 232
                            },
                            "start": {
                              "column": 12,
                              "line": 232
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "range": [
                                5664,
                                5665
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 233
                                },
                                "start": {
                                  "column": 12,
                                  "line": 233
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                5668,
                                5669
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 233
                                },
                                "start": {
                                  "column": 16,
                                  "line": 233
                                }
                              }
                            },
                            "range": [
                              5664,
                              5669
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 233
                              },
                              "start": {
                                "column": 12,
                                "line": 233
                              }
                            }
                          },
                          "range": [
                            5664,
                            5670
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 233
                            },
                            "start": {
                              "column": 12,
                              "line": 233
                            }
                          }
                        }
                      ],
                      "range": [
                        5523,
                        5680
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 234
                        },
                        "start": {
                          "column": 41,
                          "line": 229
                        }
                      }
                    },
                    "test": {
                      "type": "LogicalExpression",
                      "operator": "&&",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "thisX_isString",
                        "optional": false,
                        "range": [
                          5494,
                          5508
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 229
                          },
                          "start": {
                            "column": 12,
                            "line": 229
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "xIsString",
                        "optional": false,
                        "range": [
                          5512,
                          5521
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 229
                          },
                          "start": {
                            "column": 30,
                            "line": 229
                          }
                        }
                      },
                      "range": [
                        5494,
                        5521
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 229
                        },
                        "start": {
                          "column": 12,
                          "line": 229
                        }
                      }
                    },
                    "range": [
                      5490,
                      5750
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 238
                      },
                      "start": {
                        "column": 8,
                        "line": 229
                      }
                    }
                  }
                ],
                "range": [
                  5372,
                  5756
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 239
                  },
                  "start": {
                    "column": 45,
                    "line": 226
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
                          "column": 43,
                          "line": 226
                        },
                        "start": {
                          "column": 26,
                          "line": 226
                        }
                      },
                      "range": [
                        5353,
                        5370
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "range": [
                              5355,
                              5361
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 226
                              },
                              "start": {
                                "column": 28,
                                "line": 226
                              }
                            }
                          },
                          {
                            "type": "TSNumberKeyword",
                            "range": [
                              5364,
                              5370
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 226
                              },
                              "start": {
                                "column": 37,
                                "line": 226
                              }
                            }
                          }
                        ],
                        "range": [
                          5355,
                          5370
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 226
                          },
                          "start": {
                            "column": 28,
                            "line": 226
                          }
                        }
                      }
                    },
                    "range": [
                      5352,
                      5370
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 226
                      },
                      "start": {
                        "column": 25,
                        "line": 226
                      }
                    }
                  },
                  "readonly": true,
                  "static": false,
                  "range": [
                    5343,
                    5370
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 226
                    },
                    "start": {
                      "column": 16,
                      "line": 226
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 239
                },
                "start": {
                  "column": 15,
                  "line": 226
                }
              }
            },
            "range": [
              5331,
              5756
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 239
              },
              "start": {
                "column": 4,
                "line": 226
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 240
          },
          "start": {
            "column": 10,
            "line": 225
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C11",
        "optional": false,
        "range": [
          5321,
          5324
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 225
          },
          "start": {
            "column": 6,
            "line": 225
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        5315,
        5758
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 240
        },
        "start": {
          "column": 0,
          "line": 225
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          5908,
                          5912
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 245
                          },
                          "start": {
                            "column": 12,
                            "line": 245
                          }
                        }
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": true,
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          5908,
                          5912
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 245
                          },
                          "start": {
                            "column": 12,
                            "line": 245
                          }
                        }
                      },
                      "range": [
                        5908,
                        5912
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 245
                        },
                        "start": {
                          "column": 12,
                          "line": 245
                        }
                      }
                    }
                  ],
                  "range": [
                    5906,
                    5914
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 245
                    },
                    "start": {
                      "column": 10,
                      "line": 245
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "range": [
                    5917,
                    5920
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 245
                    },
                    "start": {
                      "column": 21,
                      "line": 245
                    }
                  }
                },
                "range": [
                  5906,
                  5920
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 245
                  },
                  "start": {
                    "column": 10,
                    "line": 245
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              5900,
              5921
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 245
              },
              "start": {
                "column": 4,
                "line": 245
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
                  "name": "isFoo",
                  "optional": false,
                  "range": [
                    5932,
                    5937
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 246
                    },
                    "start": {
                      "column": 10,
                      "line": 246
                    }
                  }
                },
                "init": {
                  "type": "BinaryExpression",
                  "operator": "==",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "range": [
                      5940,
                      5944
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 246
                      },
                      "start": {
                        "column": 18,
                        "line": 246
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "'foo'",
                    "value": "foo",
                    "range": [
                      5948,
                      5953
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 246
                      },
                      "start": {
                        "column": 26,
                        "line": 246
                      }
                    }
                  },
                  "range": [
                    5940,
                    5953
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 246
                    },
                    "start": {
                      "column": 18,
                      "line": 246
                    }
                  }
                },
                "range": [
                  5932,
                  5953
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 246
                  },
                  "start": {
                    "column": 10,
                    "line": 246
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              5926,
              5954
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 246
              },
              "start": {
                "column": 4,
                "line": 246
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
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
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 248
                            },
                            "start": {
                              "column": 13,
                              "line": 248
                            }
                          },
                          "range": [
                            5996,
                            6004
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              5998,
                              6004
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 248
                              },
                              "start": {
                                "column": 15,
                                "line": 248
                              }
                            }
                          }
                        },
                        "range": [
                          5995,
                          6004
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 248
                          },
                          "start": {
                            "column": 12,
                            "line": 248
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "range": [
                            6007,
                            6010
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 248
                            },
                            "start": {
                              "column": 24,
                              "line": 248
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "range": [
                            6011,
                            6014
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 248
                            },
                            "start": {
                              "column": 28,
                              "line": 248
                            }
                          }
                        },
                        "range": [
                          6007,
                          6014
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 248
                          },
                          "start": {
                            "column": 24,
                            "line": 248
                          }
                        }
                      },
                      "range": [
                        5995,
                        6014
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 248
                        },
                        "start": {
                          "column": 12,
                          "line": 248
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    5991,
                    6015
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 248
                    },
                    "start": {
                      "column": 8,
                      "line": 248
                    }
                  }
                }
              ],
              "range": [
                5981,
                6021
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 249
                },
                "start": {
                  "column": 26,
                  "line": 247
                }
              }
            },
            "test": {
              "type": "LogicalExpression",
              "operator": "&&",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "isFoo",
                "optional": false,
                "range": [
                  5963,
                  5968
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 247
                  },
                  "start": {
                    "column": 8,
                    "line": 247
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "range": [
                    5972,
                    5975
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 247
                    },
                    "start": {
                      "column": 17,
                      "line": 247
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    5976,
                    5979
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 247
                    },
                    "start": {
                      "column": 21,
                      "line": 247
                    }
                  }
                },
                "range": [
                  5972,
                  5979
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 247
                  },
                  "start": {
                    "column": 17,
                    "line": 247
                  }
                }
              },
              "range": [
                5963,
                5979
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 247
                },
                "start": {
                  "column": 8,
                  "line": 247
                }
              }
            },
            "range": [
              5959,
              6021
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 249
              },
              "start": {
                "column": 4,
                "line": 247
              }
            }
          }
        ],
        "range": [
          5894,
          6023
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 250
          },
          "start": {
            "column": 81,
            "line": 244
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f40",
        "optional": false,
        "range": [
          5822,
          5825
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 244
          },
          "start": {
            "column": 9,
            "line": 244
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 79,
                "line": 244
              },
              "start": {
                "column": 16,
                "line": 244
              }
            },
            "range": [
              5829,
              5892
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          5833,
                          5837
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 244
                          },
                          "start": {
                            "column": 20,
                            "line": 244
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
                            "column": 31,
                            "line": 244
                          },
                          "start": {
                            "column": 24,
                            "line": 244
                          }
                        },
                        "range": [
                          5837,
                          5844
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'foo'",
                            "value": "foo",
                            "range": [
                              5839,
                              5844
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 244
                              },
                              "start": {
                                "column": 26,
                                "line": 244
                              }
                            }
                          },
                          "range": [
                            5839,
                            5844
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 244
                            },
                            "start": {
                              "column": 26,
                              "line": 244
                            }
                          }
                        }
                      },
                      "range": [
                        5833,
                        5845
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 244
                        },
                        "start": {
                          "column": 20,
                          "line": 244
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          5846,
                          5849
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 244
                          },
                          "start": {
                            "column": 33,
                            "line": 244
                          }
                        }
                      },
                      "optional": true,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 244
                          },
                          "start": {
                            "column": 37,
                            "line": 244
                          }
                        },
                        "range": [
                          5850,
                          5858
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            5852,
                            5858
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 244
                            },
                            "start": {
                              "column": 39,
                              "line": 244
                            }
                          }
                        }
                      },
                      "range": [
                        5846,
                        5858
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 244
                        },
                        "start": {
                          "column": 33,
                          "line": 244
                        }
                      }
                    }
                  ],
                  "range": [
                    5831,
                    5860
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 244
                    },
                    "start": {
                      "column": 18,
                      "line": 244
                    }
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "range": [
                          5865,
                          5869
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 244
                          },
                          "start": {
                            "column": 52,
                            "line": 244
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
                            "column": 63,
                            "line": 244
                          },
                          "start": {
                            "column": 56,
                            "line": 244
                          }
                        },
                        "range": [
                          5869,
                          5876
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'bar'",
                            "value": "bar",
                            "range": [
                              5871,
                              5876
                            ],
                            "loc": {
                              "end": {
                                "column": 63,
                                "line": 244
                              },
                              "start": {
                                "column": 58,
                                "line": 244
                              }
                            }
                          },
                          "range": [
                            5871,
                            5876
                          ],
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 244
                            },
                            "start": {
                              "column": 58,
                              "line": 244
                            }
                          }
                        }
                      },
                      "range": [
                        5865,
                        5877
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 244
                        },
                        "start": {
                          "column": 52,
                          "line": 244
                        }
                      }
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "range": [
                          5878,
                          5881
                        ],
                        "loc": {
                          "end": {
                            "column": 68,
                            "line": 244
                          },
                          "start": {
                            "column": 65,
                            "line": 244
                          }
                        }
                      },
                      "optional": true,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 77,
                            "line": 244
                          },
                          "start": {
                            "column": 69,
                            "line": 244
                          }
                        },
                        "range": [
                          5882,
                          5890
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            5884,
                            5890
                          ],
                          "loc": {
                            "end": {
                              "column": 77,
                              "line": 244
                            },
                            "start": {
                              "column": 71,
                              "line": 244
                            }
                          }
                        }
                      },
                      "range": [
                        5878,
                        5890
                      ],
                      "loc": {
                        "end": {
                          "column": 77,
                          "line": 244
                        },
                        "start": {
                          "column": 65,
                          "line": 244
                        }
                      }
                    }
                  ],
                  "range": [
                    5863,
                    5892
                  ],
                  "loc": {
                    "end": {
                      "column": 79,
                      "line": 244
                    },
                    "start": {
                      "column": 50,
                      "line": 244
                    }
                  }
                }
              ],
              "range": [
                5831,
                5892
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 244
                },
                "start": {
                  "column": 18,
                  "line": 244
                }
              }
            }
          },
          "range": [
            5826,
            5892
          ],
          "loc": {
            "end": {
              "column": 79,
              "line": 244
            },
            "start": {
              "column": 13,
              "line": 244
            }
          }
        }
      ],
      "range": [
        5813,
        6023
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 250
        },
        "start": {
          "column": 0,
          "line": 244
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Data",
        "optional": false,
        "range": [
          6109,
          6113
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 254
          },
          "start": {
            "column": 5,
            "line": 254
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "range": [
                    6118,
                    6122
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 254
                    },
                    "start": {
                      "column": 14,
                      "line": 254
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
                      "column": 25,
                      "line": 254
                    },
                    "start": {
                      "column": 18,
                      "line": 254
                    }
                  },
                  "range": [
                    6122,
                    6129
                  ],
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'str'",
                      "value": "str",
                      "range": [
                        6124,
                        6129
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 254
                        },
                        "start": {
                          "column": 20,
                          "line": 254
                        }
                      }
                    },
                    "range": [
                      6124,
                      6129
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 254
                      },
                      "start": {
                        "column": 20,
                        "line": 254
                      }
                    }
                  }
                },
                "range": [
                  6118,
                  6130
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 254
                  },
                  "start": {
                    "column": 14,
                    "line": 254
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "payload",
                  "optional": false,
                  "range": [
                    6131,
                    6138
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 254
                    },
                    "start": {
                      "column": 27,
                      "line": 254
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
                      "column": 42,
                      "line": 254
                    },
                    "start": {
                      "column": 34,
                      "line": 254
                    }
                  },
                  "range": [
                    6138,
                    6146
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      6140,
                      6146
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 254
                      },
                      "start": {
                        "column": 36,
                        "line": 254
                      }
                    }
                  }
                },
                "range": [
                  6131,
                  6146
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 254
                  },
                  "start": {
                    "column": 27,
                    "line": 254
                  }
                }
              }
            ],
            "range": [
              6116,
              6148
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 254
              },
              "start": {
                "column": 12,
                "line": 254
              }
            }
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "range": [
                    6153,
                    6157
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 254
                    },
                    "start": {
                      "column": 49,
                      "line": 254
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
                      "column": 60,
                      "line": 254
                    },
                    "start": {
                      "column": 53,
                      "line": 254
                    }
                  },
                  "range": [
                    6157,
                    6164
                  ],
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'num'",
                      "value": "num",
                      "range": [
                        6159,
                        6164
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 254
                        },
                        "start": {
                          "column": 55,
                          "line": 254
                        }
                      }
                    },
                    "range": [
                      6159,
                      6164
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 254
                      },
                      "start": {
                        "column": 55,
                        "line": 254
                      }
                    }
                  }
                },
                "range": [
                  6153,
                  6165
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 254
                  },
                  "start": {
                    "column": 49,
                    "line": 254
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "payload",
                  "optional": false,
                  "range": [
                    6166,
                    6173
                  ],
                  "loc": {
                    "end": {
                      "column": 69,
                      "line": 254
                    },
                    "start": {
                      "column": 62,
                      "line": 254
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
                      "column": 77,
                      "line": 254
                    },
                    "start": {
                      "column": 69,
                      "line": 254
                    }
                  },
                  "range": [
                    6173,
                    6181
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      6175,
                      6181
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 254
                      },
                      "start": {
                        "column": 71,
                        "line": 254
                      }
                    }
                  }
                },
                "range": [
                  6166,
                  6181
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 254
                  },
                  "start": {
                    "column": 62,
                    "line": 254
                  }
                }
              }
            ],
            "range": [
              6151,
              6183
            ],
            "loc": {
              "end": {
                "column": 79,
                "line": 254
              },
              "start": {
                "column": 47,
                "line": 254
              }
            }
          }
        ],
        "range": [
          6116,
          6183
        ],
        "loc": {
          "end": {
            "column": 79,
            "line": 254
          },
          "start": {
            "column": 12,
            "line": 254
          }
        }
      },
      "range": [
        6104,
        6184
      ],
      "loc": {
        "end": {
          "column": 80,
          "line": 254
        },
        "start": {
          "column": 0,
          "line": 254
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
            "type": "IfStatement",
            "alternate": {
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
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 261
                            },
                            "start": {
                              "column": 13,
                              "line": 261
                            }
                          },
                          "range": [
                            6309,
                            6317
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              6311,
                              6317
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 261
                              },
                              "start": {
                                "column": 15,
                                "line": 261
                              }
                            }
                          }
                        },
                        "range": [
                          6308,
                          6317
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 261
                          },
                          "start": {
                            "column": 12,
                            "line": 261
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "range": [
                            6320,
                            6323
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 261
                            },
                            "start": {
                              "column": 24,
                              "line": 261
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "payload",
                          "optional": false,
                          "range": [
                            6324,
                            6331
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 261
                            },
                            "start": {
                              "column": 28,
                              "line": 261
                            }
                          }
                        },
                        "range": [
                          6320,
                          6331
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 261
                          },
                          "start": {
                            "column": 24,
                            "line": 261
                          }
                        }
                      },
                      "range": [
                        6308,
                        6331
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 261
                        },
                        "start": {
                          "column": 12,
                          "line": 261
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    6304,
                    6332
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 261
                    },
                    "start": {
                      "column": 8,
                      "line": 261
                    }
                  }
                }
              ],
              "range": [
                6294,
                6338
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 262
                },
                "start": {
                  "column": 9,
                  "line": 260
                }
              }
            },
            "consequent": {
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
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 258
                            },
                            "start": {
                              "column": 13,
                              "line": 258
                            }
                          },
                          "range": [
                            6255,
                            6263
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              6257,
                              6263
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 258
                              },
                              "start": {
                                "column": 15,
                                "line": 258
                              }
                            }
                          }
                        },
                        "range": [
                          6254,
                          6263
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 258
                          },
                          "start": {
                            "column": 12,
                            "line": 258
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "range": [
                            6266,
                            6269
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 258
                            },
                            "start": {
                              "column": 24,
                              "line": 258
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "payload",
                          "optional": false,
                          "range": [
                            6270,
                            6277
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 258
                            },
                            "start": {
                              "column": 28,
                              "line": 258
                            }
                          }
                        },
                        "range": [
                          6266,
                          6277
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 258
                          },
                          "start": {
                            "column": 24,
                            "line": 258
                          }
                        }
                      },
                      "range": [
                        6254,
                        6277
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 258
                        },
                        "start": {
                          "column": 12,
                          "line": 258
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    6250,
                    6278
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 258
                    },
                    "start": {
                      "column": 8,
                      "line": 258
                    }
                  }
                }
              ],
              "range": [
                6240,
                6284
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 259
                },
                "start": {
                  "column": 28,
                  "line": 257
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "range": [
                    6220,
                    6223
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 257
                    },
                    "start": {
                      "column": 8,
                      "line": 257
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "range": [
                    6224,
                    6228
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 257
                    },
                    "start": {
                      "column": 12,
                      "line": 257
                    }
                  }
                },
                "range": [
                  6220,
                  6228
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 257
                  },
                  "start": {
                    "column": 8,
                    "line": 257
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'str'",
                "value": "str",
                "range": [
                  6233,
                  6238
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 257
                  },
                  "start": {
                    "column": 21,
                    "line": 257
                  }
                }
              },
              "range": [
                6220,
                6238
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 257
                },
                "start": {
                  "column": 8,
                  "line": 257
                }
              }
            },
            "range": [
              6216,
              6338
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 262
              },
              "start": {
                "column": 4,
                "line": 257
              }
            }
          }
        ],
        "range": [
          6210,
          6340
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 263
          },
          "start": {
            "column": 24,
            "line": 256
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "gg2",
        "optional": false,
        "range": [
          6195,
          6198
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 256
          },
          "start": {
            "column": 9,
            "line": 256
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 22,
                "line": 256
              },
              "start": {
                "column": 16,
                "line": 256
              }
            },
            "range": [
              6202,
              6208
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Data",
                "optional": false,
                "range": [
                  6204,
                  6208
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 256
                  },
                  "start": {
                    "column": 18,
                    "line": 256
                  }
                }
              },
              "range": [
                6204,
                6208
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 256
                },
                "start": {
                  "column": 18,
                  "line": 256
                }
              }
            }
          },
          "range": [
            6199,
            6208
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 256
            },
            "start": {
              "column": 13,
              "line": 256
            }
          }
        }
      ],
      "range": [
        6186,
        6340
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 263
        },
        "start": {
          "column": 0,
          "line": 256
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
            "type": "IfStatement",
            "alternate": {
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
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 270
                            },
                            "start": {
                              "column": 13,
                              "line": 270
                            }
                          },
                          "range": [
                            6471,
                            6479
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              6473,
                              6479
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 270
                              },
                              "start": {
                                "column": 15,
                                "line": 270
                              }
                            }
                          }
                        },
                        "range": [
                          6470,
                          6479
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 270
                          },
                          "start": {
                            "column": 12,
                            "line": 270
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "payload",
                        "optional": false,
                        "range": [
                          6482,
                          6489
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 270
                          },
                          "start": {
                            "column": 24,
                            "line": 270
                          }
                        }
                      },
                      "range": [
                        6470,
                        6489
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 270
                        },
                        "start": {
                          "column": 12,
                          "line": 270
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    6466,
                    6490
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 270
                    },
                    "start": {
                      "column": 8,
                      "line": 270
                    }
                  }
                }
              ],
              "range": [
                6456,
                6496
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 271
                },
                "start": {
                  "column": 9,
                  "line": 269
                }
              }
            },
            "consequent": {
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
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 267
                            },
                            "start": {
                              "column": 13,
                              "line": 267
                            }
                          },
                          "range": [
                            6421,
                            6429
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              6423,
                              6429
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 267
                              },
                              "start": {
                                "column": 15,
                                "line": 267
                              }
                            }
                          }
                        },
                        "range": [
                          6420,
                          6429
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 267
                          },
                          "start": {
                            "column": 12,
                            "line": 267
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "payload",
                        "optional": false,
                        "range": [
                          6432,
                          6439
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 267
                          },
                          "start": {
                            "column": 24,
                            "line": 267
                          }
                        }
                      },
                      "range": [
                        6420,
                        6439
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 267
                        },
                        "start": {
                          "column": 12,
                          "line": 267
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    6416,
                    6440
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 267
                    },
                    "start": {
                      "column": 8,
                      "line": 267
                    }
                  }
                }
              ],
              "range": [
                6406,
                6446
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 268
                },
                "start": {
                  "column": 24,
                  "line": 266
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "range": [
                  6390,
                  6394
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 266
                  },
                  "start": {
                    "column": 8,
                    "line": 266
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'str'",
                "value": "str",
                "range": [
                  6399,
                  6404
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 266
                  },
                  "start": {
                    "column": 17,
                    "line": 266
                  }
                }
              },
              "range": [
                6390,
                6404
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 266
                },
                "start": {
                  "column": 8,
                  "line": 266
                }
              }
            },
            "range": [
              6386,
              6496
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 271
              },
              "start": {
                "column": 4,
                "line": 266
              }
            }
          }
        ],
        "range": [
          6380,
          6498
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 272
          },
          "start": {
            "column": 38,
            "line": 265
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
          6351,
          6354
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 265
          },
          "start": {
            "column": 9,
            "line": 265
          }
        }
      },
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "range": [
                  6357,
                  6361
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 265
                  },
                  "start": {
                    "column": 15,
                    "line": 265
                  }
                }
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "range": [
                  6357,
                  6361
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 265
                  },
                  "start": {
                    "column": 15,
                    "line": 265
                  }
                }
              },
              "range": [
                6357,
                6361
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 265
                },
                "start": {
                  "column": 15,
                  "line": 265
                }
              }
            },
            {
              "type": "Property",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "payload",
                "optional": false,
                "range": [
                  6363,
                  6370
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 265
                  },
                  "start": {
                    "column": 21,
                    "line": 265
                  }
                }
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "payload",
                "optional": false,
                "range": [
                  6363,
                  6370
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 265
                  },
                  "start": {
                    "column": 21,
                    "line": 265
                  }
                }
              },
              "range": [
                6363,
                6370
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 265
                },
                "start": {
                  "column": 21,
                  "line": 265
                }
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 36,
                "line": 265
              },
              "start": {
                "column": 30,
                "line": 265
              }
            },
            "range": [
              6372,
              6378
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Data",
                "optional": false,
                "range": [
                  6374,
                  6378
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 265
                  },
                  "start": {
                    "column": 32,
                    "line": 265
                  }
                }
              },
              "range": [
                6374,
                6378
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 265
                },
                "start": {
                  "column": 32,
                  "line": 265
                }
              }
            }
          },
          "range": [
            6355,
            6378
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 265
            },
            "start": {
              "column": 13,
              "line": 265
            }
          }
        }
      ],
      "range": [
        6342,
        6498
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 272
        },
        "start": {
          "column": 0,
          "line": 265
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
            "name": "obj",
            "optional": false,
            "range": [
              6528,
              6531
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 276
              },
              "start": {
                "column": 6,
                "line": 276
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
                  "name": "fn",
                  "optional": false,
                  "range": [
                    6540,
                    6542
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 277
                    },
                    "start": {
                      "column": 4,
                      "line": 277
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      6550,
                      6554
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 277
                      },
                      "start": {
                        "column": 14,
                        "line": 277
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    6544,
                    6554
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 277
                    },
                    "start": {
                      "column": 8,
                      "line": 277
                    }
                  }
                },
                "range": [
                  6540,
                  6554
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 277
                  },
                  "start": {
                    "column": 4,
                    "line": 277
                  }
                }
              }
            ],
            "range": [
              6534,
              6556
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 278
              },
              "start": {
                "column": 12,
                "line": 276
              }
            }
          },
          "range": [
            6528,
            6556
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 278
            },
            "start": {
              "column": 6,
              "line": 276
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        6522,
        6557
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 278
        },
        "start": {
          "column": 0,
          "line": 276
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          6566,
          6569
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 280
          },
          "start": {
            "column": 7,
            "line": 280
          }
        }
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "range": [
          6563,
          6564
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 280
          },
          "start": {
            "column": 4,
            "line": 280
          }
        }
      },
      "range": [
        6559,
        6569
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 280
        },
        "start": {
          "column": 0,
          "line": 280
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
              6577,
              6578
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 282
              },
              "start": {
                "column": 6,
                "line": 282
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
                "name": "obj",
                "optional": false,
                "range": [
                  6581,
                  6584
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 282
                  },
                  "start": {
                    "column": 10,
                    "line": 282
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
                "optional": false,
                "range": [
                  6585,
                  6587
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 282
                  },
                  "start": {
                    "column": 14,
                    "line": 282
                  }
                }
              },
              "range": [
                6581,
                6587
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 282
                },
                "start": {
                  "column": 10,
                  "line": 282
                }
              }
            },
            "optional": false,
            "range": [
              6581,
              6589
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 282
              },
              "start": {
                "column": 10,
                "line": 282
              }
            }
          },
          "range": [
            6577,
            6589
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 282
            },
            "start": {
              "column": 6,
              "line": 282
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        6571,
        6590
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 282
        },
        "start": {
          "column": 0,
          "line": 282
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          6671,
          6763
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isDefined",
              "optional": false,
              "range": [
                6682,
                6691
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 286
                },
                "start": {
                  "column": 9,
                  "line": 286
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                6691,
                6761
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": "!=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "range": [
                          6743,
                          6748
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 287
                          },
                          "start": {
                            "column": 11,
                            "line": 287
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "null",
                        "value": null,
                        "range": [
                          6752,
                          6756
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 287
                          },
                          "start": {
                            "column": 20,
                            "line": 287
                          }
                        }
                      },
                      "range": [
                        6743,
                        6756
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 287
                        },
                        "start": {
                          "column": 11,
                          "line": 287
                        }
                      }
                    },
                    "range": [
                      6736,
                      6757
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 287
                      },
                      "start": {
                        "column": 4,
                        "line": 287
                      }
                    }
                  }
                ],
                "range": [
                  6730,
                  6761
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 288
                  },
                  "start": {
                    "column": 57,
                    "line": 286
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 286
                      },
                      "start": {
                        "column": 27,
                        "line": 286
                      }
                    },
                    "range": [
                      6700,
                      6703
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          6702,
                          6703
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 286
                          },
                          "start": {
                            "column": 29,
                            "line": 286
                          }
                        }
                      },
                      "range": [
                        6702,
                        6703
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 286
                        },
                        "start": {
                          "column": 29,
                          "line": 286
                        }
                      }
                    }
                  },
                  "range": [
                    6695,
                    6703
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 286
                    },
                    "start": {
                      "column": 22,
                      "line": 286
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 286
                  },
                  "start": {
                    "column": 31,
                    "line": 286
                  }
                },
                "range": [
                  6704,
                  6729
                ],
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "asserts": false,
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "range": [
                      6706,
                      6711
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 286
                      },
                      "start": {
                        "column": 33,
                        "line": 286
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 286
                      },
                      "start": {
                        "column": 42,
                        "line": 286
                      }
                    },
                    "range": [
                      6715,
                      6729
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          6726,
                          6729
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
                                6727,
                                6728
                              ],
                              "loc": {
                                "end": {
                                  "column": 55,
                                  "line": 286
                                },
                                "start": {
                                  "column": 54,
                                  "line": 286
                                }
                              }
                            },
                            "range": [
                              6727,
                              6728
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 286
                              },
                              "start": {
                                "column": 54,
                                "line": 286
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 286
                          },
                          "start": {
                            "column": 53,
                            "line": 286
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NonNullable",
                        "optional": false,
                        "range": [
                          6715,
                          6726
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 286
                          },
                          "start": {
                            "column": 42,
                            "line": 286
                          }
                        }
                      },
                      "range": [
                        6715,
                        6729
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 286
                        },
                        "start": {
                          "column": 42,
                          "line": 286
                        }
                      }
                    }
                  },
                  "range": [
                    6706,
                    6729
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 286
                    },
                    "start": {
                      "column": 33,
                      "line": 286
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 286
                  },
                  "start": {
                    "column": 18,
                    "line": 286
                  }
                },
                "range": [
                  6691,
                  6694
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
                        6692,
                        6693
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 286
                        },
                        "start": {
                          "column": 19,
                          "line": 286
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      6692,
                      6693
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 286
                      },
                      "start": {
                        "column": 19,
                        "line": 286
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 3,
                  "line": 288
                },
                "start": {
                  "column": 18,
                  "line": 286
                }
              }
            },
            "range": [
              6675,
              6761
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 288
              },
              "start": {
                "column": 2,
                "line": 286
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 289
          },
          "start": {
            "column": 12,
            "line": 285
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Utils",
        "optional": false,
        "range": [
          6665,
          6670
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 285
          },
          "start": {
            "column": 6,
            "line": 285
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        6659,
        6763
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 289
        },
        "start": {
          "column": 0,
          "line": 285
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          6778,
          6969
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
              "name": "testNumber",
              "optional": false,
              "range": [
                6798,
                6808
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 292
                },
                "start": {
                  "column": 18,
                  "line": 292
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 48,
                  "line": 292
                },
                "start": {
                  "column": 28,
                  "line": 292
                }
              },
              "range": [
                6808,
                6828
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      6810,
                      6816
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 292
                      },
                      "start": {
                        "column": 30,
                        "line": 292
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      6819,
                      6828
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 292
                      },
                      "start": {
                        "column": 39,
                        "line": 292
                      }
                    }
                  }
                ],
                "range": [
                  6810,
                  6828
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 292
                  },
                  "start": {
                    "column": 30,
                    "line": 292
                  }
                }
              }
            },
            "value": null,
            "range": [
              6782,
              6829
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 292
              },
              "start": {
                "column": 2,
                "line": 292
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
              "name": "foo",
              "optional": false,
              "range": [
                6833,
                6836
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 294
                },
                "start": {
                  "column": 2,
                  "line": 294
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
                6836,
                6967
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
                          "name": "isNumber",
                          "optional": false,
                          "range": [
                            6851,
                            6859
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 295
                            },
                            "start": {
                              "column": 10,
                              "line": 295
                            }
                          }
                        },
                        "init": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  6878,
                                  6882
                                ],
                                "loc": {
                                  "end": {
                                    "column": 41,
                                    "line": 295
                                  },
                                  "start": {
                                    "column": 37,
                                    "line": 295
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "testNumber",
                                "optional": false,
                                "range": [
                                  6883,
                                  6893
                                ],
                                "loc": {
                                  "end": {
                                    "column": 52,
                                    "line": 295
                                  },
                                  "start": {
                                    "column": 42,
                                    "line": 295
                                  }
                                }
                              },
                              "range": [
                                6878,
                                6893
                              ],
                              "loc": {
                                "end": {
                                  "column": 52,
                                  "line": 295
                                },
                                "start": {
                                  "column": 37,
                                  "line": 295
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
                              "name": "Utils",
                              "optional": false,
                              "range": [
                                6862,
                                6867
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 295
                                },
                                "start": {
                                  "column": 21,
                                  "line": 295
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "isDefined",
                              "optional": false,
                              "range": [
                                6868,
                                6877
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 295
                                },
                                "start": {
                                  "column": 27,
                                  "line": 295
                                }
                              }
                            },
                            "range": [
                              6862,
                              6877
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 295
                              },
                              "start": {
                                "column": 21,
                                "line": 295
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            6862,
                            6894
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 295
                            },
                            "start": {
                              "column": 21,
                              "line": 295
                            }
                          }
                        },
                        "range": [
                          6851,
                          6894
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 295
                          },
                          "start": {
                            "column": 10,
                            "line": 295
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      6845,
                      6895
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 295
                      },
                      "start": {
                        "column": 4,
                        "line": 295
                      }
                    }
                  },
                  {
                    "type": "IfStatement",
                    "alternate": null,
                    "consequent": {
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
                                      "column": 21,
                                      "line": 298
                                    },
                                    "start": {
                                      "column": 13,
                                      "line": 298
                                    }
                                  },
                                  "range": [
                                    6930,
                                    6938
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "range": [
                                      6932,
                                      6938
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 21,
                                        "line": 298
                                      },
                                      "start": {
                                        "column": 15,
                                        "line": 298
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  6929,
                                  6938
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 298
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 298
                                  }
                                }
                              },
                              "init": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "range": [
                                    6941,
                                    6945
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 298
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 298
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "testNumber",
                                  "optional": false,
                                  "range": [
                                    6946,
                                    6956
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 39,
                                      "line": 298
                                    },
                                    "start": {
                                      "column": 29,
                                      "line": 298
                                    }
                                  }
                                },
                                "range": [
                                  6941,
                                  6956
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 298
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 298
                                  }
                                }
                              },
                              "range": [
                                6929,
                                6956
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 298
                                },
                                "start": {
                                  "column": 12,
                                  "line": 298
                                }
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "const",
                          "range": [
                            6923,
                            6957
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 298
                            },
                            "start": {
                              "column": 6,
                              "line": 298
                            }
                          }
                        }
                      ],
                      "range": [
                        6915,
                        6963
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 299
                        },
                        "start": {
                          "column": 18,
                          "line": 297
                        }
                      }
                    },
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isNumber",
                      "optional": false,
                      "range": [
                        6905,
                        6913
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 297
                        },
                        "start": {
                          "column": 8,
                          "line": 297
                        }
                      }
                    },
                    "range": [
                      6901,
                      6963
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 299
                      },
                      "start": {
                        "column": 4,
                        "line": 297
                      }
                    }
                  }
                ],
                "range": [
                  6839,
                  6967
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 300
                  },
                  "start": {
                    "column": 8,
                    "line": 294
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
                  "column": 3,
                  "line": 300
                },
                "start": {
                  "column": 5,
                  "line": 294
                }
              }
            },
            "range": [
              6833,
              6967
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 300
              },
              "start": {
                "column": 2,
                "line": 294
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 301
          },
          "start": {
            "column": 13,
            "line": 291
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A53267",
        "optional": false,
        "range": [
          6771,
          6777
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 291
          },
          "start": {
            "column": 6,
            "line": 291
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        6765,
        6969
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 301
        },
        "start": {
          "column": 0,
          "line": 291
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 301
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
