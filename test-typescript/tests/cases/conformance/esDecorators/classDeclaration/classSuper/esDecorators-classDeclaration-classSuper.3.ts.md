__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    766
  ],
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
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              },
              "range": [
                15,
                20
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  17,
                  20
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 1
                  },
                  "start": {
                    "column": 17,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              12,
              20
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            12,
            20
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        0,
        21
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 1
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
          42,
          67
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
              "name": "x",
              "optional": false,
              "range": [
                55,
                56
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
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 4
                },
                "start": {
                  "column": 12,
                  "line": 4
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
                    "column": 20,
                    "line": 4
                  },
                  "start": {
                    "column": 14,
                    "line": 4
                  }
                }
              }
            },
            "value": null,
            "range": [
              48,
              65
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 19,
            "line": 3
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          37,
          41
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 3
          },
          "start": {
            "column": 14,
            "line": 3
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        23,
        67
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
            "name": "x",
            "optional": false,
            "range": [
              75,
              76
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 7
              },
              "start": {
                "column": 6,
                "line": 7
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"x\"",
            "value": "x",
            "range": [
              79,
              82
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 7
              },
              "start": {
                "column": 10,
                "line": 7
              }
            }
          },
          "range": [
            75,
            82
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 7
            },
            "start": {
              "column": 6,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        69,
        83
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          111,
          765
        ],
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Super",
                    "range": [
                      134,
                      139
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 12
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
                      140,
                      141
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 12
                      },
                      "start": {
                        "column": 14,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    134,
                    141
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 12
                    },
                    "start": {
                      "column": 8,
                      "line": 12
                    }
                  }
                },
                "range": [
                  134,
                  142
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 12
                  },
                  "start": {
                    "column": 8,
                    "line": 12
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
                      "type": "Super",
                      "range": [
                        151,
                        156
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 13
                        },
                        "start": {
                          "column": 8,
                          "line": 13
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
                        157,
                        158
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 13
                        },
                        "start": {
                          "column": 14,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      151,
                      158
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
                        "line": 13
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      161,
                      162
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 13
                      },
                      "start": {
                        "column": 18,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    151,
                    162
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
                      "line": 13
                    }
                  }
                },
                "range": [
                  151,
                  163
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 13
                  },
                  "start": {
                    "column": 8,
                    "line": 13
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "+=",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "range": [
                        172,
                        177
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 14
                        },
                        "start": {
                          "column": 8,
                          "line": 14
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
                        178,
                        179
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
                    },
                    "range": [
                      172,
                      179
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 14
                      },
                      "start": {
                        "column": 8,
                        "line": 14
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      183,
                      184
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 14
                      },
                      "start": {
                        "column": 19,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    172,
                    184
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 14
                    },
                    "start": {
                      "column": 8,
                      "line": 14
                    }
                  }
                },
                "range": [
                  172,
                  185
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 14
                  },
                  "start": {
                    "column": 8,
                    "line": 14
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "UpdateExpression",
                  "argument": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "range": [
                        194,
                        199
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 15
                        },
                        "start": {
                          "column": 8,
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
                        200,
                        201
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 15
                        },
                        "start": {
                          "column": 14,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      194,
                      201
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
                  "operator": "++",
                  "prefix": false,
                  "range": [
                    194,
                    203
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
                      "line": 15
                    }
                  }
                },
                "range": [
                  194,
                  204
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 15
                  },
                  "start": {
                    "column": 8,
                    "line": 15
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "UpdateExpression",
                  "argument": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "range": [
                        213,
                        218
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 16
                        },
                        "start": {
                          "column": 8,
                          "line": 16
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
                        219,
                        220
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 16
                        },
                        "start": {
                          "column": 14,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      213,
                      220
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 16
                      },
                      "start": {
                        "column": 8,
                        "line": 16
                      }
                    }
                  },
                  "operator": "--",
                  "prefix": false,
                  "range": [
                    213,
                    222
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 16
                    },
                    "start": {
                      "column": 8,
                      "line": 16
                    }
                  }
                },
                "range": [
                  213,
                  223
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 16
                  },
                  "start": {
                    "column": 8,
                    "line": 16
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "UpdateExpression",
                  "argument": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "range": [
                        234,
                        239
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 17
                        },
                        "start": {
                          "column": 10,
                          "line": 17
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
                        240,
                        241
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 17
                        },
                        "start": {
                          "column": 16,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      234,
                      241
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 17
                      },
                      "start": {
                        "column": 10,
                        "line": 17
                      }
                    }
                  },
                  "operator": "++",
                  "prefix": true,
                  "range": [
                    232,
                    241
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
                },
                "range": [
                  232,
                  242
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 17
                  },
                  "start": {
                    "column": 8,
                    "line": 17
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "UpdateExpression",
                  "argument": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "range": [
                        253,
                        258
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 18
                        },
                        "start": {
                          "column": 10,
                          "line": 18
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
                        259,
                        260
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 18
                        },
                        "start": {
                          "column": 16,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      253,
                      260
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 18
                      },
                      "start": {
                        "column": 10,
                        "line": 18
                      }
                    }
                  },
                  "operator": "--",
                  "prefix": true,
                  "range": [
                    251,
                    260
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 18
                    },
                    "start": {
                      "column": 8,
                      "line": 18
                    }
                  }
                },
                "range": [
                  251,
                  261
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 18
                  },
                  "start": {
                    "column": 8,
                    "line": 18
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            273,
                            274
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 19
                            },
                            "start": {
                              "column": 11,
                              "line": 19
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "range": [
                              276,
                              281
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 19
                              },
                              "start": {
                                "column": 14,
                                "line": 19
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
                              282,
                              283
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 19
                              },
                              "start": {
                                "column": 20,
                                "line": 19
                              }
                            }
                          },
                          "range": [
                            276,
                            283
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 19
                            },
                            "start": {
                              "column": 14,
                              "line": 19
                            }
                          }
                        },
                        "range": [
                          273,
                          283
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 19
                          },
                          "start": {
                            "column": 11,
                            "line": 19
                          }
                        }
                      }
                    ],
                    "range": [
                      271,
                      285
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 19
                      },
                      "start": {
                        "column": 9,
                        "line": 19
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
                            290,
                            291
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 19
                            },
                            "start": {
                              "column": 28,
                              "line": 19
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            293,
                            294
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 19
                            },
                            "start": {
                              "column": 31,
                              "line": 19
                            }
                          }
                        },
                        "range": [
                          290,
                          294
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 19
                          },
                          "start": {
                            "column": 28,
                            "line": 19
                          }
                        }
                      }
                    ],
                    "range": [
                      288,
                      296
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 19
                      },
                      "start": {
                        "column": 26,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    271,
                    296
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 19
                    },
                    "start": {
                      "column": 9,
                      "line": 19
                    }
                  }
                },
                "range": [
                  270,
                  298
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 19
                  },
                  "start": {
                    "column": 8,
                    "line": 19
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "range": [
                            308,
                            313
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 20
                            },
                            "start": {
                              "column": 9,
                              "line": 20
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
                            314,
                            315
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 20
                            },
                            "start": {
                              "column": 15,
                              "line": 20
                            }
                          }
                        },
                        "range": [
                          308,
                          315
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 20
                          },
                          "start": {
                            "column": 9,
                            "line": 20
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      307,
                      316
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 20
                      },
                      "start": {
                        "column": 8,
                        "line": 20
                      }
                    }
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          320,
                          321
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 20
                          },
                          "start": {
                            "column": 21,
                            "line": 20
                          }
                        }
                      }
                    ],
                    "range": [
                      319,
                      322
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 20
                      },
                      "start": {
                        "column": 20,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    307,
                    322
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 20
                    },
                    "start": {
                      "column": 8,
                      "line": 20
                    }
                  }
                },
                "range": [
                  307,
                  323
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 20
                  },
                  "start": {
                    "column": 8,
                    "line": 20
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Super",
                    "range": [
                      333,
                      338
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
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
                    "type": "Literal",
                    "raw": "\"x\"",
                    "value": "x",
                    "range": [
                      339,
                      342
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 22
                      },
                      "start": {
                        "column": 14,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    333,
                    343
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 22
                    },
                    "start": {
                      "column": 8,
                      "line": 22
                    }
                  }
                },
                "range": [
                  333,
                  344
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 22
                  },
                  "start": {
                    "column": 8,
                    "line": 22
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
                    "computed": true,
                    "object": {
                      "type": "Super",
                      "range": [
                        353,
                        358
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 23
                        },
                        "start": {
                          "column": 8,
                          "line": 23
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "raw": "\"x\"",
                      "value": "x",
                      "range": [
                        359,
                        362
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 23
                        },
                        "start": {
                          "column": 14,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      353,
                      363
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
                  "right": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      366,
                      367
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 23
                      },
                      "start": {
                        "column": 21,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    353,
                    367
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 23
                    },
                    "start": {
                      "column": 8,
                      "line": 23
                    }
                  }
                },
                "range": [
                  353,
                  368
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 23
                  },
                  "start": {
                    "column": 8,
                    "line": 23
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "+=",
                  "left": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Super",
                      "range": [
                        377,
                        382
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 24
                        },
                        "start": {
                          "column": 8,
                          "line": 24
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "raw": "\"x\"",
                      "value": "x",
                      "range": [
                        383,
                        386
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 24
                        },
                        "start": {
                          "column": 14,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      377,
                      387
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 24
                      },
                      "start": {
                        "column": 8,
                        "line": 24
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      391,
                      392
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 24
                      },
                      "start": {
                        "column": 22,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    377,
                    392
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 24
                    },
                    "start": {
                      "column": 8,
                      "line": 24
                    }
                  }
                },
                "range": [
                  377,
                  393
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 24
                  },
                  "start": {
                    "column": 8,
                    "line": 24
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "UpdateExpression",
                  "argument": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Super",
                      "range": [
                        402,
                        407
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 25
                        },
                        "start": {
                          "column": 8,
                          "line": 25
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "raw": "\"x\"",
                      "value": "x",
                      "range": [
                        408,
                        411
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 25
                        },
                        "start": {
                          "column": 14,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      402,
                      412
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 25
                      },
                      "start": {
                        "column": 8,
                        "line": 25
                      }
                    }
                  },
                  "operator": "++",
                  "prefix": false,
                  "range": [
                    402,
                    414
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 25
                    },
                    "start": {
                      "column": 8,
                      "line": 25
                    }
                  }
                },
                "range": [
                  402,
                  415
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 25
                  },
                  "start": {
                    "column": 8,
                    "line": 25
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "UpdateExpression",
                  "argument": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Super",
                      "range": [
                        424,
                        429
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 26
                        },
                        "start": {
                          "column": 8,
                          "line": 26
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "raw": "\"x\"",
                      "value": "x",
                      "range": [
                        430,
                        433
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 26
                        },
                        "start": {
                          "column": 14,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      424,
                      434
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 26
                      },
                      "start": {
                        "column": 8,
                        "line": 26
                      }
                    }
                  },
                  "operator": "--",
                  "prefix": false,
                  "range": [
                    424,
                    436
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 26
                    },
                    "start": {
                      "column": 8,
                      "line": 26
                    }
                  }
                },
                "range": [
                  424,
                  437
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 26
                  },
                  "start": {
                    "column": 8,
                    "line": 26
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "UpdateExpression",
                  "argument": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Super",
                      "range": [
                        448,
                        453
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 27
                        },
                        "start": {
                          "column": 10,
                          "line": 27
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "raw": "\"x\"",
                      "value": "x",
                      "range": [
                        454,
                        457
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 27
                        },
                        "start": {
                          "column": 16,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      448,
                      458
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 27
                      },
                      "start": {
                        "column": 10,
                        "line": 27
                      }
                    }
                  },
                  "operator": "++",
                  "prefix": true,
                  "range": [
                    446,
                    458
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 27
                    },
                    "start": {
                      "column": 8,
                      "line": 27
                    }
                  }
                },
                "range": [
                  446,
                  459
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 27
                  },
                  "start": {
                    "column": 8,
                    "line": 27
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "UpdateExpression",
                  "argument": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Super",
                      "range": [
                        470,
                        475
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 28
                        },
                        "start": {
                          "column": 10,
                          "line": 28
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "raw": "\"x\"",
                      "value": "x",
                      "range": [
                        476,
                        479
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 28
                        },
                        "start": {
                          "column": 16,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      470,
                      480
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 28
                      },
                      "start": {
                        "column": 10,
                        "line": 28
                      }
                    }
                  },
                  "operator": "--",
                  "prefix": true,
                  "range": [
                    468,
                    480
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 28
                    },
                    "start": {
                      "column": 8,
                      "line": 28
                    }
                  }
                },
                "range": [
                  468,
                  481
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 28
                  },
                  "start": {
                    "column": 8,
                    "line": 28
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            493,
                            494
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 29
                            },
                            "start": {
                              "column": 11,
                              "line": 29
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Super",
                            "range": [
                              496,
                              501
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 29
                              },
                              "start": {
                                "column": 14,
                                "line": 29
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "raw": "\"x\"",
                            "value": "x",
                            "range": [
                              502,
                              505
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 29
                              },
                              "start": {
                                "column": 20,
                                "line": 29
                              }
                            }
                          },
                          "range": [
                            496,
                            506
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 29
                            },
                            "start": {
                              "column": 14,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          493,
                          506
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 29
                          },
                          "start": {
                            "column": 11,
                            "line": 29
                          }
                        }
                      }
                    ],
                    "range": [
                      491,
                      508
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 29
                      },
                      "start": {
                        "column": 9,
                        "line": 29
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
                            513,
                            514
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 29
                            },
                            "start": {
                              "column": 31,
                              "line": 29
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            516,
                            517
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 29
                            },
                            "start": {
                              "column": 34,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          513,
                          517
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
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
                      511,
                      519
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 29
                      },
                      "start": {
                        "column": 29,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    491,
                    519
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 29
                    },
                    "start": {
                      "column": 9,
                      "line": 29
                    }
                  }
                },
                "range": [
                  490,
                  521
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 29
                  },
                  "start": {
                    "column": 8,
                    "line": 29
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Super",
                          "range": [
                            531,
                            536
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 30
                            },
                            "start": {
                              "column": 9,
                              "line": 30
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "raw": "\"x\"",
                          "value": "x",
                          "range": [
                            537,
                            540
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 30
                            },
                            "start": {
                              "column": 15,
                              "line": 30
                            }
                          }
                        },
                        "range": [
                          531,
                          541
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 30
                          },
                          "start": {
                            "column": 9,
                            "line": 30
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      530,
                      542
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 30
                      },
                      "start": {
                        "column": 8,
                        "line": 30
                      }
                    }
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          546,
                          547
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 30
                          },
                          "start": {
                            "column": 24,
                            "line": 30
                          }
                        }
                      }
                    ],
                    "range": [
                      545,
                      548
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 30
                      },
                      "start": {
                        "column": 23,
                        "line": 30
                      }
                    }
                  },
                  "range": [
                    530,
                    548
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 30
                    },
                    "start": {
                      "column": 8,
                      "line": 30
                    }
                  }
                },
                "range": [
                  530,
                  549
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 30
                  },
                  "start": {
                    "column": 8,
                    "line": 30
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Super",
                    "range": [
                      559,
                      564
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 32
                      },
                      "start": {
                        "column": 8,
                        "line": 32
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
                      565,
                      566
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 32
                      },
                      "start": {
                        "column": 14,
                        "line": 32
                      }
                    }
                  },
                  "range": [
                    559,
                    567
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 32
                    },
                    "start": {
                      "column": 8,
                      "line": 32
                    }
                  }
                },
                "range": [
                  559,
                  568
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 32
                  },
                  "start": {
                    "column": 8,
                    "line": 32
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
                    "computed": true,
                    "object": {
                      "type": "Super",
                      "range": [
                        577,
                        582
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 33
                        },
                        "start": {
                          "column": 8,
                          "line": 33
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
                        583,
                        584
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 33
                        },
                        "start": {
                          "column": 14,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      577,
                      585
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 33
                      },
                      "start": {
                        "column": 8,
                        "line": 33
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      588,
                      589
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 33
                      },
                      "start": {
                        "column": 19,
                        "line": 33
                      }
                    }
                  },
                  "range": [
                    577,
                    589
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 33
                    },
                    "start": {
                      "column": 8,
                      "line": 33
                    }
                  }
                },
                "range": [
                  577,
                  590
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 33
                  },
                  "start": {
                    "column": 8,
                    "line": 33
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "+=",
                  "left": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Super",
                      "range": [
                        599,
                        604
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 34
                        },
                        "start": {
                          "column": 8,
                          "line": 34
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
                        605,
                        606
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 34
                        },
                        "start": {
                          "column": 14,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      599,
                      607
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 34
                      },
                      "start": {
                        "column": 8,
                        "line": 34
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      611,
                      612
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 34
                      },
                      "start": {
                        "column": 20,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    599,
                    612
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 34
                    },
                    "start": {
                      "column": 8,
                      "line": 34
                    }
                  }
                },
                "range": [
                  599,
                  613
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 34
                  },
                  "start": {
                    "column": 8,
                    "line": 34
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "UpdateExpression",
                  "argument": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Super",
                      "range": [
                        622,
                        627
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 35
                        },
                        "start": {
                          "column": 8,
                          "line": 35
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
                        628,
                        629
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 35
                        },
                        "start": {
                          "column": 14,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      622,
                      630
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 35
                      },
                      "start": {
                        "column": 8,
                        "line": 35
                      }
                    }
                  },
                  "operator": "++",
                  "prefix": false,
                  "range": [
                    622,
                    632
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 35
                    },
                    "start": {
                      "column": 8,
                      "line": 35
                    }
                  }
                },
                "range": [
                  622,
                  633
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 35
                  },
                  "start": {
                    "column": 8,
                    "line": 35
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "UpdateExpression",
                  "argument": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Super",
                      "range": [
                        642,
                        647
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 36
                        },
                        "start": {
                          "column": 8,
                          "line": 36
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
                        648,
                        649
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 36
                        },
                        "start": {
                          "column": 14,
                          "line": 36
                        }
                      }
                    },
                    "range": [
                      642,
                      650
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 36
                      },
                      "start": {
                        "column": 8,
                        "line": 36
                      }
                    }
                  },
                  "operator": "--",
                  "prefix": false,
                  "range": [
                    642,
                    652
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 36
                    },
                    "start": {
                      "column": 8,
                      "line": 36
                    }
                  }
                },
                "range": [
                  642,
                  653
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 36
                  },
                  "start": {
                    "column": 8,
                    "line": 36
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "UpdateExpression",
                  "argument": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Super",
                      "range": [
                        664,
                        669
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 37
                        },
                        "start": {
                          "column": 10,
                          "line": 37
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
                        670,
                        671
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 37
                        },
                        "start": {
                          "column": 16,
                          "line": 37
                        }
                      }
                    },
                    "range": [
                      664,
                      672
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 37
                      },
                      "start": {
                        "column": 10,
                        "line": 37
                      }
                    }
                  },
                  "operator": "++",
                  "prefix": true,
                  "range": [
                    662,
                    672
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 37
                    },
                    "start": {
                      "column": 8,
                      "line": 37
                    }
                  }
                },
                "range": [
                  662,
                  673
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 37
                  },
                  "start": {
                    "column": 8,
                    "line": 37
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "UpdateExpression",
                  "argument": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Super",
                      "range": [
                        684,
                        689
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 38
                        },
                        "start": {
                          "column": 10,
                          "line": 38
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
                        690,
                        691
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 38
                        },
                        "start": {
                          "column": 16,
                          "line": 38
                        }
                      }
                    },
                    "range": [
                      684,
                      692
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 38
                      },
                      "start": {
                        "column": 10,
                        "line": 38
                      }
                    }
                  },
                  "operator": "--",
                  "prefix": true,
                  "range": [
                    682,
                    692
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 38
                    },
                    "start": {
                      "column": 8,
                      "line": 38
                    }
                  }
                },
                "range": [
                  682,
                  693
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 38
                  },
                  "start": {
                    "column": 8,
                    "line": 38
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            705,
                            706
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 39
                            },
                            "start": {
                              "column": 11,
                              "line": 39
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Super",
                            "range": [
                              708,
                              713
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 39
                              },
                              "start": {
                                "column": 14,
                                "line": 39
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
                              714,
                              715
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 39
                              },
                              "start": {
                                "column": 20,
                                "line": 39
                              }
                            }
                          },
                          "range": [
                            708,
                            716
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 39
                            },
                            "start": {
                              "column": 14,
                              "line": 39
                            }
                          }
                        },
                        "range": [
                          705,
                          716
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 39
                          },
                          "start": {
                            "column": 11,
                            "line": 39
                          }
                        }
                      }
                    ],
                    "range": [
                      703,
                      718
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 39
                      },
                      "start": {
                        "column": 9,
                        "line": 39
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
                            723,
                            724
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 39
                            },
                            "start": {
                              "column": 29,
                              "line": 39
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            726,
                            727
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 39
                            },
                            "start": {
                              "column": 32,
                              "line": 39
                            }
                          }
                        },
                        "range": [
                          723,
                          727
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 39
                          },
                          "start": {
                            "column": 29,
                            "line": 39
                          }
                        }
                      }
                    ],
                    "range": [
                      721,
                      729
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 39
                      },
                      "start": {
                        "column": 27,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    703,
                    729
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 39
                    },
                    "start": {
                      "column": 9,
                      "line": 39
                    }
                  }
                },
                "range": [
                  702,
                  731
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 39
                  },
                  "start": {
                    "column": 8,
                    "line": 39
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Super",
                          "range": [
                            741,
                            746
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 40
                            },
                            "start": {
                              "column": 9,
                              "line": 40
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
                            747,
                            748
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 40
                            },
                            "start": {
                              "column": 15,
                              "line": 40
                            }
                          }
                        },
                        "range": [
                          741,
                          749
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 40
                          },
                          "start": {
                            "column": 9,
                            "line": 40
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      740,
                      750
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 40
                      },
                      "start": {
                        "column": 8,
                        "line": 40
                      }
                    }
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          754,
                          755
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 40
                          },
                          "start": {
                            "column": 22,
                            "line": 40
                          }
                        }
                      }
                    ],
                    "range": [
                      753,
                      756
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 40
                      },
                      "start": {
                        "column": 21,
                        "line": 40
                      }
                    }
                  },
                  "range": [
                    740,
                    756
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 40
                    },
                    "start": {
                      "column": 8,
                      "line": 40
                    }
                  }
                },
                "range": [
                  740,
                  757
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 40
                  },
                  "start": {
                    "column": 8,
                    "line": 40
                  }
                }
              }
            ],
            "range": [
              117,
              763
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 41
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
            "line": 42
          },
          "start": {
            "column": 21,
            "line": 10
          }
        }
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "range": [
              86,
              89
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 9
              },
              "start": {
                "column": 1,
                "line": 9
              }
            }
          },
          "range": [
            85,
            89
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          96,
          97
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 10
          },
          "start": {
            "column": 6,
            "line": 10
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          106,
          110
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 10
          },
          "start": {
            "column": 16,
            "line": 10
          }
        }
      },
      "range": [
        85,
        765
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 43
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
