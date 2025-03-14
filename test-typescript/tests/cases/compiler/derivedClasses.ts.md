__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    464
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          24,
          135
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
              "name": "shade",
              "optional": false,
              "range": [
                37,
                42
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
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
                42,
                133
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
                          "name": "getHue",
                          "optional": false,
                          "range": [
                            57,
                            63
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 3
                            },
                            "start": {
                              "column": 9,
                              "line": 3
                            }
                          }
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "CallExpression",
                                  "arguments": [],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "range": [
                                        81,
                                        85
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 37,
                                          "line": 3
                                        },
                                        "start": {
                                          "column": 33,
                                          "line": 3
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "hue",
                                      "optional": false,
                                      "range": [
                                        86,
                                        89
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 41,
                                          "line": 3
                                        },
                                        "start": {
                                          "column": 38,
                                          "line": 3
                                        }
                                      }
                                    },
                                    "range": [
                                      81,
                                      89
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 41,
                                        "line": 3
                                      },
                                      "start": {
                                        "column": 33,
                                        "line": 3
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "range": [
                                    81,
                                    91
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 43,
                                      "line": 3
                                    },
                                    "start": {
                                      "column": 33,
                                      "line": 3
                                    }
                                  }
                                },
                                "range": [
                                  74,
                                  92
                                ],
                                "loc": {
                                  "end": {
                                    "column": 44,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 3
                                  }
                                }
                              }
                            ],
                            "range": [
                              72,
                              94
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 3
                              },
                              "start": {
                                "column": 24,
                                "line": 3
                              }
                            }
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            66,
                            94
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 3
                            },
                            "start": {
                              "column": 18,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          57,
                          94
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 3
                          },
                          "start": {
                            "column": 9,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      53,
                      95
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 3
                      },
                      "start": {
                        "column": 5,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getHue",
                          "optional": false,
                          "range": [
                            108,
                            114
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 4
                            },
                            "start": {
                              "column": 12,
                              "line": 4
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          108,
                          116
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 4
                          },
                          "start": {
                            "column": 12,
                            "line": 4
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "\" red\"",
                        "value": " red",
                        "range": [
                          119,
                          125
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 4
                          },
                          "start": {
                            "column": 23,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        108,
                        125
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 4
                        },
                        "start": {
                          "column": 12,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      101,
                      126
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 4
                      },
                      "start": {
                        "column": 5,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  45,
                  133
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 5
                  },
                  "start": {
                    "column": 19,
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
                  "column": 5,
                  "line": 5
                },
                "start": {
                  "column": 16,
                  "line": 2
                }
              }
            },
            "range": [
              30,
              133
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 5
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
            "line": 6
          },
          "start": {
            "column": 24,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Red",
        "optional": false,
        "range": [
          6,
          9
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Color",
        "optional": false,
        "range": [
          18,
          23
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 1
          },
          "start": {
            "column": 18,
            "line": 1
          }
        }
      },
      "range": [
        0,
        135
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
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
          149,
          236
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
              "name": "shade",
              "optional": false,
              "range": [
                162,
                167
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 9
                },
                "start": {
                  "column": 11,
                  "line": 9
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
                167,
                194
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"some shade\"",
                      "value": "some shade",
                      "range": [
                        179,
                        191
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 9
                        },
                        "start": {
                          "column": 28,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      172,
                      192
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 9
                      },
                      "start": {
                        "column": 21,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  170,
                  194
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 9
                  },
                  "start": {
                    "column": 19,
                    "line": 9
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
                  "column": 43,
                  "line": 9
                },
                "start": {
                  "column": 16,
                  "line": 9
                }
              }
            },
            "range": [
              155,
              194
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
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
              "name": "hue",
              "optional": false,
              "range": [
                206,
                209
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 10
                },
                "start": {
                  "column": 11,
                  "line": 10
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
                209,
                234
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"some hue\"",
                      "value": "some hue",
                      "range": [
                        221,
                        231
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 10
                        },
                        "start": {
                          "column": 26,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      214,
                      232
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 10
                      },
                      "start": {
                        "column": 19,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  212,
                  234
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 10
                  },
                  "start": {
                    "column": 17,
                    "line": 10
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
                  "column": 39,
                  "line": 10
                },
                "start": {
                  "column": 14,
                  "line": 10
                }
              }
            },
            "range": [
              199,
              234
            ],
            "loc": {
              "end": {
                "column": 39,
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
            "column": 12,
            "line": 8
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Color",
        "optional": false,
        "range": [
          143,
          148
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 8
          },
          "start": {
            "column": 6,
            "line": 8
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        137,
        236
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          263,
          380
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
              "name": "shade",
              "optional": false,
              "range": [
                281,
                286
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 15
                },
                "start": {
                  "column": 11,
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
                286,
                378
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
                          "name": "getHue",
                          "optional": false,
                          "range": [
                            301,
                            307
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 16
                            },
                            "start": {
                              "column": 9,
                              "line": 16
                            }
                          }
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "CallExpression",
                                  "arguments": [],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "range": [
                                        325,
                                        329
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 37,
                                          "line": 16
                                        },
                                        "start": {
                                          "column": 33,
                                          "line": 16
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "hue",
                                      "optional": false,
                                      "range": [
                                        330,
                                        333
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 41,
                                          "line": 16
                                        },
                                        "start": {
                                          "column": 38,
                                          "line": 16
                                        }
                                      }
                                    },
                                    "range": [
                                      325,
                                      333
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 41,
                                        "line": 16
                                      },
                                      "start": {
                                        "column": 33,
                                        "line": 16
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "range": [
                                    325,
                                    335
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 43,
                                      "line": 16
                                    },
                                    "start": {
                                      "column": 33,
                                      "line": 16
                                    }
                                  }
                                },
                                "range": [
                                  318,
                                  336
                                ],
                                "loc": {
                                  "end": {
                                    "column": 44,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 16
                                  }
                                }
                              }
                            ],
                            "range": [
                              316,
                              338
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 16
                              },
                              "start": {
                                "column": 24,
                                "line": 16
                              }
                            }
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            310,
                            338
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 16
                            },
                            "start": {
                              "column": 18,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          301,
                          338
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 16
                          },
                          "start": {
                            "column": 9,
                            "line": 16
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      297,
                      339
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 16
                      },
                      "start": {
                        "column": 5,
                        "line": 16
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getHue",
                          "optional": false,
                          "range": [
                            352,
                            358
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 17
                            },
                            "start": {
                              "column": 12,
                              "line": 17
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          352,
                          360
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 17
                          },
                          "start": {
                            "column": 12,
                            "line": 17
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "\" blue\"",
                        "value": " blue",
                        "range": [
                          363,
                          370
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 17
                          },
                          "start": {
                            "column": 23,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        352,
                        370
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 17
                        },
                        "start": {
                          "column": 12,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      345,
                      371
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 17
                      },
                      "start": {
                        "column": 5,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  289,
                  378
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 18
                  },
                  "start": {
                    "column": 19,
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
                  "column": 5,
                  "line": 18
                },
                "start": {
                  "column": 16,
                  "line": 15
                }
              }
            },
            "range": [
              274,
              378
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 18
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
            "line": 19
          },
          "start": {
            "column": 25,
            "line": 13
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Blue",
        "optional": false,
        "range": [
          244,
          248
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 13
          },
          "start": {
            "column": 6,
            "line": 13
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Color",
        "optional": false,
        "range": [
          257,
          262
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 13
          },
          "start": {
            "column": 19,
            "line": 13
          }
        }
      },
      "range": [
        238,
        380
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 13
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
              386,
              387
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
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Red",
              "optional": false,
              "range": [
                394,
                397
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 21
                },
                "start": {
                  "column": 12,
                  "line": 21
                }
              }
            },
            "range": [
              390,
              399
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 21
              },
              "start": {
                "column": 8,
                "line": 21
              }
            }
          },
          "range": [
            386,
            399
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 21
            },
            "start": {
              "column": 4,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        382,
        400
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 21
        },
        "start": {
          "column": 0,
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
            "name": "b",
            "optional": false,
            "range": [
              405,
              406
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
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Blue",
              "optional": false,
              "range": [
                413,
                417
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 22
                },
                "start": {
                  "column": 12,
                  "line": 22
                }
              }
            },
            "range": [
              409,
              419
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
            405,
            419
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 22
            },
            "start": {
              "column": 4,
              "line": 22
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        401,
        420
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "r",
            "optional": false,
            "range": [
              422,
              423
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 24
              },
              "start": {
                "column": 0,
                "line": 24
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "shade",
            "optional": false,
            "range": [
              424,
              429
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 24
              },
              "start": {
                "column": 2,
                "line": 24
              }
            }
          },
          "range": [
            422,
            429
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 24
            },
            "start": {
              "column": 0,
              "line": 24
            }
          }
        },
        "optional": false,
        "range": [
          422,
          431
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 24
          },
          "start": {
            "column": 0,
            "line": 24
          }
        }
      },
      "range": [
        422,
        432
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "r",
            "optional": false,
            "range": [
              433,
              434
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 25
              },
              "start": {
                "column": 0,
                "line": 25
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "hue",
            "optional": false,
            "range": [
              435,
              438
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 25
              },
              "start": {
                "column": 2,
                "line": 25
              }
            }
          },
          "range": [
            433,
            438
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 25
            },
            "start": {
              "column": 0,
              "line": 25
            }
          }
        },
        "optional": false,
        "range": [
          433,
          440
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 25
          },
          "start": {
            "column": 0,
            "line": 25
          }
        }
      },
      "range": [
        433,
        441
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "range": [
              442,
              443
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 26
              },
              "start": {
                "column": 0,
                "line": 26
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "shade",
            "optional": false,
            "range": [
              444,
              449
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 26
              },
              "start": {
                "column": 2,
                "line": 26
              }
            }
          },
          "range": [
            442,
            449
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 26
            },
            "start": {
              "column": 0,
              "line": 26
            }
          }
        },
        "optional": false,
        "range": [
          442,
          451
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 26
          },
          "start": {
            "column": 0,
            "line": 26
          }
        }
      },
      "range": [
        442,
        452
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "range": [
              453,
              454
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 27
              },
              "start": {
                "column": 0,
                "line": 27
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "hue",
            "optional": false,
            "range": [
              455,
              458
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 27
              },
              "start": {
                "column": 2,
                "line": 27
              }
            }
          },
          "range": [
            453,
            458
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 27
            },
            "start": {
              "column": 0,
              "line": 27
            }
          }
        },
        "optional": false,
        "range": [
          453,
          460
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 27
          },
          "start": {
            "column": 0,
            "line": 27
          }
        }
      },
      "range": [
        453,
        461
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 30
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
