__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1782
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          24,
          387
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
              "name": "_x",
              "optional": false,
              "range": [
                30,
                32
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 2
                },
                "start": {
                  "column": 6,
                  "line": 2
                }
              },
              "range": [
                32,
                52
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      34,
                      40
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 2
                      },
                      "start": {
                        "column": 8,
                        "line": 2
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      43,
                      52
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 2
                      },
                      "start": {
                        "column": 17,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  34,
                  52
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
                    "line": 2
                  }
                }
              }
            },
            "value": null,
            "range": [
              30,
              53
            ],
            "loc": {
              "end": {
                "column": 27,
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
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                62,
                63
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 3
                },
                "start": {
                  "column": 8,
                  "line": 3
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
                63,
                98
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "LogicalExpression",
                      "operator": "??",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            83,
                            87
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 3
                            },
                            "start": {
                              "column": 29,
                              "line": 3
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_x",
                          "optional": false,
                          "range": [
                            88,
                            90
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 3
                            },
                            "start": {
                              "column": 34,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          83,
                          90
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 3
                          },
                          "start": {
                            "column": 29,
                            "line": 3
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          94,
                          95
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 3
                          },
                          "start": {
                            "column": 40,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        83,
                        95
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 3
                        },
                        "start": {
                          "column": 29,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      76,
                      96
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 3
                      },
                      "start": {
                        "column": 22,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  74,
                  98
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 3
                  },
                  "start": {
                    "column": 20,
                    "line": 3
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
                    "column": 19,
                    "line": 3
                  },
                  "start": {
                    "column": 11,
                    "line": 3
                  }
                },
                "range": [
                  65,
                  73
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    67,
                    73
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 3
                    },
                    "start": {
                      "column": 13,
                      "line": 3
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 44,
                  "line": 3
                },
                "start": {
                  "column": 9,
                  "line": 3
                }
              }
            },
            "range": [
              58,
              98
            ],
            "loc": {
              "end": {
                "column": 44,
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
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                107,
                108
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 4
                },
                "start": {
                  "column": 8,
                  "line": 4
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
                108,
                156
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
                            138,
                            142
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 4
                            },
                            "start": {
                              "column": 39,
                              "line": 4
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_x",
                          "optional": false,
                          "range": [
                            143,
                            145
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 4
                            },
                            "start": {
                              "column": 44,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          138,
                          145
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 4
                          },
                          "start": {
                            "column": 39,
                            "line": 4
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "range": [
                          148,
                          153
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 4
                          },
                          "start": {
                            "column": 49,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        138,
                        153
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 4
                        },
                        "start": {
                          "column": 39,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      138,
                      154
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 4
                      },
                      "start": {
                        "column": 39,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  136,
                  156
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 4
                  },
                  "start": {
                    "column": 37,
                    "line": 4
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
                        "column": 35,
                        "line": 4
                      },
                      "start": {
                        "column": 15,
                        "line": 4
                      }
                    },
                    "range": [
                      114,
                      134
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            116,
                            122
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 4
                            },
                            "start": {
                              "column": 17,
                              "line": 4
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            125,
                            134
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 4
                            },
                            "start": {
                              "column": 26,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "range": [
                        116,
                        134
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 4
                        },
                        "start": {
                          "column": 17,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    109,
                    134
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 4
                    },
                    "start": {
                      "column": 10,
                      "line": 4
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 4
                },
                "start": {
                  "column": 9,
                  "line": 4
                }
              }
            },
            "range": [
              103,
              156
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 4
              },
              "start": {
                "column": 4,
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
              "name": "additionAssignment",
              "optional": false,
              "range": [
                162,
                180
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
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
                180,
                211
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "+=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            193,
                            197
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 7
                            },
                            "start": {
                              "column": 8,
                              "line": 7
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
                            198,
                            199
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 7
                            },
                            "start": {
                              "column": 13,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          193,
                          199
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 7
                          },
                          "start": {
                            "column": 8,
                            "line": 7
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          203,
                          204
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 7
                          },
                          "start": {
                            "column": 18,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        193,
                        204
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 7
                        },
                        "start": {
                          "column": 8,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      193,
                      205
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  183,
                  211
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 8
                  },
                  "start": {
                    "column": 25,
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
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 22,
                  "line": 6
                }
              }
            },
            "range": [
              162,
              211
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 6
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
              "name": "subtractionAssignment",
              "optional": false,
              "range": [
                217,
                238
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 10
                },
                "start": {
                  "column": 4,
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
                238,
                269
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "-=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            251,
                            255
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 11
                            },
                            "start": {
                              "column": 8,
                              "line": 11
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
                            256,
                            257
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 11
                            },
                            "start": {
                              "column": 13,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          251,
                          257
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
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          261,
                          262
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 11
                          },
                          "start": {
                            "column": 18,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        251,
                        262
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 11
                        },
                        "start": {
                          "column": 8,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      251,
                      263
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  241,
                  269
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 12
                  },
                  "start": {
                    "column": 28,
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
                  "column": 5,
                  "line": 12
                },
                "start": {
                  "column": 25,
                  "line": 10
                }
              }
            },
            "range": [
              217,
              269
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 10
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
              "name": "multiplicationAssignment",
              "optional": false,
              "range": [
                275,
                299
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
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                299,
                330
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "*=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            312,
                            316
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
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
                            317,
                            318
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 15
                            },
                            "start": {
                              "column": 13,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          312,
                          318
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 15
                          },
                          "start": {
                            "column": 8,
                            "line": 15
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          322,
                          323
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 15
                          },
                          "start": {
                            "column": 18,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        312,
                        323
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 15
                        },
                        "start": {
                          "column": 8,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      312,
                      324
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 15
                      },
                      "start": {
                        "column": 8,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  302,
                  330
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 16
                  },
                  "start": {
                    "column": 31,
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
                  "column": 5,
                  "line": 16
                },
                "start": {
                  "column": 28,
                  "line": 14
                }
              }
            },
            "range": [
              275,
              330
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 14
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
              "name": "divisionAssignment",
              "optional": false,
              "range": [
                336,
                354
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 18
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
                354,
                385
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "/=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            367,
                            371
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 19
                            },
                            "start": {
                              "column": 8,
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
                            372,
                            373
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 19
                            },
                            "start": {
                              "column": 13,
                              "line": 19
                            }
                          }
                        },
                        "range": [
                          367,
                          373
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 19
                          },
                          "start": {
                            "column": 8,
                            "line": 19
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          377,
                          378
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 19
                          },
                          "start": {
                            "column": 18,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        367,
                        378
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 19
                        },
                        "start": {
                          "column": 8,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      367,
                      379
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 19
                      },
                      "start": {
                        "column": 8,
                        "line": 19
                      }
                    }
                  }
                ],
                "range": [
                  357,
                  385
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 20
                  },
                  "start": {
                    "column": 25,
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
                  "column": 5,
                  "line": 20
                },
                "start": {
                  "column": 22,
                  "line": 18
                }
              }
            },
            "range": [
              336,
              385
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
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
        "name": "NumberOrUndefined",
        "optional": false,
        "range": [
          6,
          23
        ],
        "loc": {
          "end": {
            "column": 23,
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
        387
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
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
            "name": "numberOrUndefined",
            "optional": false,
            "range": [
              394,
              411
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 22
              },
              "start": {
                "column": 6,
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
              "name": "NumberOrUndefined",
              "optional": false,
              "range": [
                418,
                435
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 22
                },
                "start": {
                  "column": 30,
                  "line": 22
                }
              }
            },
            "range": [
              414,
              437
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 22
              },
              "start": {
                "column": 26,
                "line": 22
              }
            }
          },
          "range": [
            394,
            437
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 22
            },
            "start": {
              "column": 6,
              "line": 22
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        388,
        438
      ],
      "loc": {
        "end": {
          "column": 50,
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
        "type": "AssignmentExpression",
        "operator": "+=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "numberOrUndefined",
            "optional": false,
            "range": [
              439,
              456
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 23
              },
              "start": {
                "column": 0,
                "line": 23
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
              457,
              458
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 23
              },
              "start": {
                "column": 18,
                "line": 23
              }
            }
          },
          "range": [
            439,
            458
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 23
            },
            "start": {
              "column": 0,
              "line": 23
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            462,
            463
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 23
            },
            "start": {
              "column": 23,
              "line": 23
            }
          }
        },
        "range": [
          439,
          463
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        439,
        464
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "-=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "numberOrUndefined",
            "optional": false,
            "range": [
              465,
              482
            ],
            "loc": {
              "end": {
                "column": 17,
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
            "name": "x",
            "optional": false,
            "range": [
              483,
              484
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 24
              },
              "start": {
                "column": 18,
                "line": 24
              }
            }
          },
          "range": [
            465,
            484
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 24
            },
            "start": {
              "column": 0,
              "line": 24
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            488,
            489
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 24
            },
            "start": {
              "column": 23,
              "line": 24
            }
          }
        },
        "range": [
          465,
          489
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 24
          },
          "start": {
            "column": 0,
            "line": 24
          }
        }
      },
      "range": [
        465,
        490
      ],
      "loc": {
        "end": {
          "column": 25,
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
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "numberOrUndefined",
            "optional": false,
            "range": [
              491,
              508
            ],
            "loc": {
              "end": {
                "column": 17,
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
            "name": "x",
            "optional": false,
            "range": [
              509,
              510
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 25
              },
              "start": {
                "column": 18,
                "line": 25
              }
            }
          },
          "range": [
            491,
            510
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 25
            },
            "start": {
              "column": 0,
              "line": 25
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            514,
            515
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 25
            },
            "start": {
              "column": 23,
              "line": 25
            }
          }
        },
        "range": [
          491,
          515
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 25
          },
          "start": {
            "column": 0,
            "line": 25
          }
        }
      },
      "range": [
        491,
        516
      ],
      "loc": {
        "end": {
          "column": 25,
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
        "type": "AssignmentExpression",
        "operator": "/=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "numberOrUndefined",
            "optional": false,
            "range": [
              517,
              534
            ],
            "loc": {
              "end": {
                "column": 17,
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
            "name": "x",
            "optional": false,
            "range": [
              535,
              536
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 26
              },
              "start": {
                "column": 18,
                "line": 26
              }
            }
          },
          "range": [
            517,
            536
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 26
            },
            "start": {
              "column": 0,
              "line": 26
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            540,
            541
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 26
            },
            "start": {
              "column": 23,
              "line": 26
            }
          }
        },
        "range": [
          517,
          541
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 26
          },
          "start": {
            "column": 0,
            "line": 26
          }
        }
      },
      "range": [
        517,
        542
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          565,
          1037
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
              "name": "_x",
              "optional": false,
              "range": [
                571,
                573
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 29
                },
                "start": {
                  "column": 4,
                  "line": 29
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 29
                },
                "start": {
                  "column": 6,
                  "line": 29
                }
              },
              "range": [
                573,
                590
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      575,
                      581
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 29
                      },
                      "start": {
                        "column": 8,
                        "line": 29
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      584,
                      590
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 29
                      },
                      "start": {
                        "column": 17,
                        "line": 29
                      }
                    }
                  }
                ],
                "range": [
                  575,
                  590
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 29
                  },
                  "start": {
                    "column": 8,
                    "line": 29
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                593,
                594
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 29
                },
                "start": {
                  "column": 26,
                  "line": 29
                }
              }
            },
            "range": [
              571,
              595
            ],
            "loc": {
              "end": {
                "column": 28,
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
                604,
                605
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
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                605,
                683
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ConditionalExpression",
                      "alternate": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                672,
                                676
                              ],
                              "loc": {
                                "end": {
                                  "column": 80,
                                  "line": 30
                                },
                                "start": {
                                  "column": 76,
                                  "line": 30
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "_x",
                              "optional": false,
                              "range": [
                                677,
                                679
                              ],
                              "loc": {
                                "end": {
                                  "column": 83,
                                  "line": 30
                                },
                                "start": {
                                  "column": 81,
                                  "line": 30
                                }
                              }
                            },
                            "range": [
                              672,
                              679
                            ],
                            "loc": {
                              "end": {
                                "column": 83,
                                "line": 30
                              },
                              "start": {
                                "column": 76,
                                "line": 30
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Number",
                          "optional": false,
                          "range": [
                            665,
                            671
                          ],
                          "loc": {
                            "end": {
                              "column": 75,
                              "line": 30
                            },
                            "start": {
                              "column": 69,
                              "line": 30
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          665,
                          680
                        ],
                        "loc": {
                          "end": {
                            "column": 84,
                            "line": 30
                          },
                          "start": {
                            "column": 69,
                            "line": 30
                          }
                        }
                      },
                      "consequent": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            655,
                            659
                          ],
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 30
                            },
                            "start": {
                              "column": 59,
                              "line": 30
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_x",
                          "optional": false,
                          "range": [
                            660,
                            662
                          ],
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 30
                            },
                            "start": {
                              "column": 64,
                              "line": 30
                            }
                          }
                        },
                        "range": [
                          655,
                          662
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 30
                          },
                          "start": {
                            "column": 59,
                            "line": 30
                          }
                        }
                      },
                      "test": {
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
                                632,
                                636
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 30
                                },
                                "start": {
                                  "column": 36,
                                  "line": 30
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "_x",
                              "optional": false,
                              "range": [
                                637,
                                639
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 30
                                },
                                "start": {
                                  "column": 41,
                                  "line": 30
                                }
                              }
                            },
                            "range": [
                              632,
                              639
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 30
                              },
                              "start": {
                                "column": 36,
                                "line": 30
                              }
                            }
                          },
                          "operator": "typeof",
                          "prefix": true,
                          "range": [
                            625,
                            639
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 30
                            },
                            "start": {
                              "column": 29,
                              "line": 30
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "'number'",
                          "value": "number",
                          "range": [
                            644,
                            652
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 30
                            },
                            "start": {
                              "column": 48,
                              "line": 30
                            }
                          }
                        },
                        "range": [
                          625,
                          652
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 30
                          },
                          "start": {
                            "column": 29,
                            "line": 30
                          }
                        }
                      },
                      "range": [
                        625,
                        680
                      ],
                      "loc": {
                        "end": {
                          "column": 84,
                          "line": 30
                        },
                        "start": {
                          "column": 29,
                          "line": 30
                        }
                      }
                    },
                    "range": [
                      618,
                      681
                    ],
                    "loc": {
                      "end": {
                        "column": 85,
                        "line": 30
                      },
                      "start": {
                        "column": 22,
                        "line": 30
                      }
                    }
                  }
                ],
                "range": [
                  616,
                  683
                ],
                "loc": {
                  "end": {
                    "column": 87,
                    "line": 30
                  },
                  "start": {
                    "column": 20,
                    "line": 30
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
                    "column": 19,
                    "line": 30
                  },
                  "start": {
                    "column": 11,
                    "line": 30
                  }
                },
                "range": [
                  607,
                  615
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    609,
                    615
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 30
                    },
                    "start": {
                      "column": 13,
                      "line": 30
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 87,
                  "line": 30
                },
                "start": {
                  "column": 9,
                  "line": 30
                }
              }
            },
            "range": [
              600,
              683
            ],
            "loc": {
              "end": {
                "column": 87,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
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
                692,
                693
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 31
                },
                "start": {
                  "column": 8,
                  "line": 31
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
                693,
                738
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
                            720,
                            724
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 31
                            },
                            "start": {
                              "column": 36,
                              "line": 31
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_x",
                          "optional": false,
                          "range": [
                            725,
                            727
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 31
                            },
                            "start": {
                              "column": 41,
                              "line": 31
                            }
                          }
                        },
                        "range": [
                          720,
                          727
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 31
                          },
                          "start": {
                            "column": 36,
                            "line": 31
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "range": [
                          730,
                          735
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 31
                          },
                          "start": {
                            "column": 46,
                            "line": 31
                          }
                        }
                      },
                      "range": [
                        720,
                        735
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 31
                        },
                        "start": {
                          "column": 36,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      720,
                      736
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 31
                      },
                      "start": {
                        "column": 36,
                        "line": 31
                      }
                    }
                  }
                ],
                "range": [
                  718,
                  738
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 31
                  },
                  "start": {
                    "column": 34,
                    "line": 31
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
                        "column": 32,
                        "line": 31
                      },
                      "start": {
                        "column": 15,
                        "line": 31
                      }
                    },
                    "range": [
                      699,
                      716
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            701,
                            707
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 31
                            },
                            "start": {
                              "column": 17,
                              "line": 31
                            }
                          }
                        },
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            710,
                            716
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 31
                            },
                            "start": {
                              "column": 26,
                              "line": 31
                            }
                          }
                        }
                      ],
                      "range": [
                        701,
                        716
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 31
                        },
                        "start": {
                          "column": 17,
                          "line": 31
                        }
                      }
                    }
                  },
                  "range": [
                    694,
                    716
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 31
                    },
                    "start": {
                      "column": 10,
                      "line": 31
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 31
                },
                "start": {
                  "column": 9,
                  "line": 31
                }
              }
            },
            "range": [
              688,
              738
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
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
              "name": "additionAssignmentNumber",
              "optional": false,
              "range": [
                744,
                768
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 33
                },
                "start": {
                  "column": 4,
                  "line": 33
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
                768,
                799
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "+=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            781,
                            785
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
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
                            786,
                            787
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 34
                            },
                            "start": {
                              "column": 13,
                              "line": 34
                            }
                          }
                        },
                        "range": [
                          781,
                          787
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
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
                          791,
                          792
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 34
                          },
                          "start": {
                            "column": 18,
                            "line": 34
                          }
                        }
                      },
                      "range": [
                        781,
                        792
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 34
                        },
                        "start": {
                          "column": 8,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      781,
                      793
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 34
                      },
                      "start": {
                        "column": 8,
                        "line": 34
                      }
                    }
                  }
                ],
                "range": [
                  771,
                  799
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 35
                  },
                  "start": {
                    "column": 31,
                    "line": 33
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
                  "line": 35
                },
                "start": {
                  "column": 28,
                  "line": 33
                }
              }
            },
            "range": [
              744,
              799
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 35
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
              "name": "additionAssignmentString",
              "optional": false,
              "range": [
                804,
                828
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 36
                },
                "start": {
                  "column": 4,
                  "line": 36
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
                828,
                861
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "+=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            841,
                            845
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 37
                            },
                            "start": {
                              "column": 8,
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
                            846,
                            847
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 37
                            },
                            "start": {
                              "column": 13,
                              "line": 37
                            }
                          }
                        },
                        "range": [
                          841,
                          847
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 37
                          },
                          "start": {
                            "column": 8,
                            "line": 37
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "'1'",
                        "value": "1",
                        "range": [
                          851,
                          854
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 37
                          },
                          "start": {
                            "column": 18,
                            "line": 37
                          }
                        }
                      },
                      "range": [
                        841,
                        854
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 37
                        },
                        "start": {
                          "column": 8,
                          "line": 37
                        }
                      }
                    },
                    "range": [
                      841,
                      855
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 37
                      },
                      "start": {
                        "column": 8,
                        "line": 37
                      }
                    }
                  }
                ],
                "range": [
                  831,
                  861
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 38
                  },
                  "start": {
                    "column": 31,
                    "line": 36
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
                  "line": 38
                },
                "start": {
                  "column": 28,
                  "line": 36
                }
              }
            },
            "range": [
              804,
              861
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 36
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
              "name": "subtractionAssignment",
              "optional": false,
              "range": [
                867,
                888
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 40
                },
                "start": {
                  "column": 4,
                  "line": 40
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
                888,
                919
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "-=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            901,
                            905
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 41
                            },
                            "start": {
                              "column": 8,
                              "line": 41
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
                            906,
                            907
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 41
                            },
                            "start": {
                              "column": 13,
                              "line": 41
                            }
                          }
                        },
                        "range": [
                          901,
                          907
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 41
                          },
                          "start": {
                            "column": 8,
                            "line": 41
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          911,
                          912
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 41
                          },
                          "start": {
                            "column": 18,
                            "line": 41
                          }
                        }
                      },
                      "range": [
                        901,
                        912
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 41
                        },
                        "start": {
                          "column": 8,
                          "line": 41
                        }
                      }
                    },
                    "range": [
                      901,
                      913
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 41
                      },
                      "start": {
                        "column": 8,
                        "line": 41
                      }
                    }
                  }
                ],
                "range": [
                  891,
                  919
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 42
                  },
                  "start": {
                    "column": 28,
                    "line": 40
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
                  "line": 42
                },
                "start": {
                  "column": 25,
                  "line": 40
                }
              }
            },
            "range": [
              867,
              919
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 40
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
              "name": "multiplicationAssignment",
              "optional": false,
              "range": [
                925,
                949
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 44
                },
                "start": {
                  "column": 4,
                  "line": 44
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
                949,
                980
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "*=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            962,
                            966
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 45
                            },
                            "start": {
                              "column": 8,
                              "line": 45
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
                            967,
                            968
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 45
                            },
                            "start": {
                              "column": 13,
                              "line": 45
                            }
                          }
                        },
                        "range": [
                          962,
                          968
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 45
                          },
                          "start": {
                            "column": 8,
                            "line": 45
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          972,
                          973
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 45
                          },
                          "start": {
                            "column": 18,
                            "line": 45
                          }
                        }
                      },
                      "range": [
                        962,
                        973
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 45
                        },
                        "start": {
                          "column": 8,
                          "line": 45
                        }
                      }
                    },
                    "range": [
                      962,
                      974
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 45
                      },
                      "start": {
                        "column": 8,
                        "line": 45
                      }
                    }
                  }
                ],
                "range": [
                  952,
                  980
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 46
                  },
                  "start": {
                    "column": 31,
                    "line": 44
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
                  "line": 46
                },
                "start": {
                  "column": 28,
                  "line": 44
                }
              }
            },
            "range": [
              925,
              980
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 44
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
              "name": "divisionAssignment",
              "optional": false,
              "range": [
                986,
                1004
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 48
                },
                "start": {
                  "column": 4,
                  "line": 48
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
                1004,
                1035
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "/=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            1017,
                            1021
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 49
                            },
                            "start": {
                              "column": 8,
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
                            1022,
                            1023
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 49
                            },
                            "start": {
                              "column": 13,
                              "line": 49
                            }
                          }
                        },
                        "range": [
                          1017,
                          1023
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 49
                          },
                          "start": {
                            "column": 8,
                            "line": 49
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          1027,
                          1028
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 49
                          },
                          "start": {
                            "column": 18,
                            "line": 49
                          }
                        }
                      },
                      "range": [
                        1017,
                        1028
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 49
                        },
                        "start": {
                          "column": 8,
                          "line": 49
                        }
                      }
                    },
                    "range": [
                      1017,
                      1029
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 49
                      },
                      "start": {
                        "column": 8,
                        "line": 49
                      }
                    }
                  }
                ],
                "range": [
                  1007,
                  1035
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 50
                  },
                  "start": {
                    "column": 25,
                    "line": 48
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
                  "line": 50
                },
                "start": {
                  "column": 22,
                  "line": 48
                }
              }
            },
            "range": [
              986,
              1035
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 50
              },
              "start": {
                "column": 4,
                "line": 48
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 51
          },
          "start": {
            "column": 21,
            "line": 28
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumberOrString",
        "optional": false,
        "range": [
          550,
          564
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 28
          },
          "start": {
            "column": 6,
            "line": 28
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        544,
        1037
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 28
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
            "name": "numberOrString",
            "optional": false,
            "range": [
              1044,
              1058
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 52
              },
              "start": {
                "column": 6,
                "line": 52
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "NumberOrString",
              "optional": false,
              "range": [
                1065,
                1079
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 52
                },
                "start": {
                  "column": 27,
                  "line": 52
                }
              }
            },
            "range": [
              1061,
              1081
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 52
              },
              "start": {
                "column": 23,
                "line": 52
              }
            }
          },
          "range": [
            1044,
            1081
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 52
            },
            "start": {
              "column": 6,
              "line": 52
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1038,
        1082
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 52
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
            "type": "Identifier",
            "decorators": [],
            "name": "numberOrString",
            "optional": false,
            "range": [
              1083,
              1097
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 53
              },
              "start": {
                "column": 0,
                "line": 53
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
              1098,
              1099
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 53
              },
              "start": {
                "column": 15,
                "line": 53
              }
            }
          },
          "range": [
            1083,
            1099
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 53
            },
            "start": {
              "column": 0,
              "line": 53
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1103,
            1104
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 53
            },
            "start": {
              "column": 20,
              "line": 53
            }
          }
        },
        "range": [
          1083,
          1104
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 53
          },
          "start": {
            "column": 0,
            "line": 53
          }
        }
      },
      "range": [
        1083,
        1105
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 53
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
            "type": "Identifier",
            "decorators": [],
            "name": "numberOrString",
            "optional": false,
            "range": [
              1106,
              1120
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 54
              },
              "start": {
                "column": 0,
                "line": 54
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
              1121,
              1122
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 54
              },
              "start": {
                "column": 15,
                "line": 54
              }
            }
          },
          "range": [
            1106,
            1122
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 54
            },
            "start": {
              "column": 0,
              "line": 54
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "'1'",
          "value": "1",
          "range": [
            1126,
            1129
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 54
            },
            "start": {
              "column": 20,
              "line": 54
            }
          }
        },
        "range": [
          1106,
          1129
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 54
          },
          "start": {
            "column": 0,
            "line": 54
          }
        }
      },
      "range": [
        1106,
        1130
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 54
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "-=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "numberOrString",
            "optional": false,
            "range": [
              1131,
              1145
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 55
              },
              "start": {
                "column": 0,
                "line": 55
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
              1146,
              1147
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 55
              },
              "start": {
                "column": 15,
                "line": 55
              }
            }
          },
          "range": [
            1131,
            1147
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 55
            },
            "start": {
              "column": 0,
              "line": 55
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1151,
            1152
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 55
            },
            "start": {
              "column": 20,
              "line": 55
            }
          }
        },
        "range": [
          1131,
          1152
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 55
          },
          "start": {
            "column": 0,
            "line": 55
          }
        }
      },
      "range": [
        1131,
        1153
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 55
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "numberOrString",
            "optional": false,
            "range": [
              1154,
              1168
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 56
              },
              "start": {
                "column": 0,
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
              1169,
              1170
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 56
              },
              "start": {
                "column": 15,
                "line": 56
              }
            }
          },
          "range": [
            1154,
            1170
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 56
            },
            "start": {
              "column": 0,
              "line": 56
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1174,
            1175
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 56
            },
            "start": {
              "column": 20,
              "line": 56
            }
          }
        },
        "range": [
          1154,
          1175
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 56
          },
          "start": {
            "column": 0,
            "line": 56
          }
        }
      },
      "range": [
        1154,
        1176
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 56
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "/=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "numberOrString",
            "optional": false,
            "range": [
              1177,
              1191
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 57
              },
              "start": {
                "column": 0,
                "line": 57
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
              1192,
              1193
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 57
              },
              "start": {
                "column": 15,
                "line": 57
              }
            }
          },
          "range": [
            1177,
            1193
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 57
            },
            "start": {
              "column": 0,
              "line": 57
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1197,
            1198
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 57
            },
            "start": {
              "column": 20,
              "line": 57
            }
          }
        },
        "range": [
          1177,
          1198
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 57
          },
          "start": {
            "column": 0,
            "line": 57
          }
        }
      },
      "range": [
        1177,
        1199
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 57
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          1206,
          1209
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 59
          },
          "start": {
            "column": 5,
            "line": 59
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                1214,
                1217
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 59
                },
                "start": {
                  "column": 13,
                  "line": 59
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
                  "column": 24,
                  "line": 59
                },
                "start": {
                  "column": 16,
                  "line": 59
                }
              },
              "range": [
                1217,
                1225
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1219,
                  1225
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 59
                  },
                  "start": {
                    "column": 18,
                    "line": 59
                  }
                }
              }
            },
            "range": [
              1214,
              1226
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 59
              },
              "start": {
                "column": 13,
                "line": 59
              }
            }
          }
        ],
        "range": [
          1212,
          1228
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 59
          },
          "start": {
            "column": 11,
            "line": 59
          }
        }
      },
      "range": [
        1201,
        1229
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 59
        },
        "start": {
          "column": 0,
          "line": 59
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1251,
          1645
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
              "name": "_x",
              "optional": false,
              "range": [
                1257,
                1259
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 61
                },
                "start": {
                  "column": 4,
                  "line": 61
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 61
                },
                "start": {
                  "column": 6,
                  "line": 61
                }
              },
              "range": [
                1259,
                1273
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      1261,
                      1267
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 61
                      },
                      "start": {
                        "column": 8,
                        "line": 61
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        1270,
                        1273
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 61
                        },
                        "start": {
                          "column": 17,
                          "line": 61
                        }
                      }
                    },
                    "range": [
                      1270,
                      1273
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 61
                      },
                      "start": {
                        "column": 17,
                        "line": 61
                      }
                    }
                  }
                ],
                "range": [
                  1261,
                  1273
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 61
                  },
                  "start": {
                    "column": 8,
                    "line": 61
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1276,
                1277
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 61
                },
                "start": {
                  "column": 23,
                  "line": 61
                }
              }
            },
            "range": [
              1257,
              1278
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 61
              },
              "start": {
                "column": 4,
                "line": 61
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
                1287,
                1288
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 62
                },
                "start": {
                  "column": 8,
                  "line": 62
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
                1288,
                1362
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ConditionalExpression",
                      "alternate": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              1348,
                              1352
                            ],
                            "loc": {
                              "end": {
                                "column": 73,
                                "line": 62
                              },
                              "start": {
                                "column": 69,
                                "line": 62
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_x",
                            "optional": false,
                            "range": [
                              1353,
                              1355
                            ],
                            "loc": {
                              "end": {
                                "column": 76,
                                "line": 62
                              },
                              "start": {
                                "column": 74,
                                "line": 62
                              }
                            }
                          },
                          "range": [
                            1348,
                            1355
                          ],
                          "loc": {
                            "end": {
                              "column": 76,
                              "line": 62
                            },
                            "start": {
                              "column": 69,
                              "line": 62
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
                            1356,
                            1359
                          ],
                          "loc": {
                            "end": {
                              "column": 80,
                              "line": 62
                            },
                            "start": {
                              "column": 77,
                              "line": 62
                            }
                          }
                        },
                        "range": [
                          1348,
                          1359
                        ],
                        "loc": {
                          "end": {
                            "column": 80,
                            "line": 62
                          },
                          "start": {
                            "column": 69,
                            "line": 62
                          }
                        }
                      },
                      "consequent": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            1338,
                            1342
                          ],
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 62
                            },
                            "start": {
                              "column": 59,
                              "line": 62
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_x",
                          "optional": false,
                          "range": [
                            1343,
                            1345
                          ],
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 62
                            },
                            "start": {
                              "column": 64,
                              "line": 62
                            }
                          }
                        },
                        "range": [
                          1338,
                          1345
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 62
                          },
                          "start": {
                            "column": 59,
                            "line": 62
                          }
                        }
                      },
                      "test": {
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
                                1315,
                                1319
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 62
                                },
                                "start": {
                                  "column": 36,
                                  "line": 62
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "_x",
                              "optional": false,
                              "range": [
                                1320,
                                1322
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 62
                                },
                                "start": {
                                  "column": 41,
                                  "line": 62
                                }
                              }
                            },
                            "range": [
                              1315,
                              1322
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 62
                              },
                              "start": {
                                "column": 36,
                                "line": 62
                              }
                            }
                          },
                          "operator": "typeof",
                          "prefix": true,
                          "range": [
                            1308,
                            1322
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 62
                            },
                            "start": {
                              "column": 29,
                              "line": 62
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "'number'",
                          "value": "number",
                          "range": [
                            1327,
                            1335
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 62
                            },
                            "start": {
                              "column": 48,
                              "line": 62
                            }
                          }
                        },
                        "range": [
                          1308,
                          1335
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 62
                          },
                          "start": {
                            "column": 29,
                            "line": 62
                          }
                        }
                      },
                      "range": [
                        1308,
                        1359
                      ],
                      "loc": {
                        "end": {
                          "column": 80,
                          "line": 62
                        },
                        "start": {
                          "column": 29,
                          "line": 62
                        }
                      }
                    },
                    "range": [
                      1301,
                      1360
                    ],
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 62
                      },
                      "start": {
                        "column": 22,
                        "line": 62
                      }
                    }
                  }
                ],
                "range": [
                  1299,
                  1362
                ],
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 62
                  },
                  "start": {
                    "column": 20,
                    "line": 62
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
                    "column": 19,
                    "line": 62
                  },
                  "start": {
                    "column": 11,
                    "line": 62
                  }
                },
                "range": [
                  1290,
                  1298
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    1292,
                    1298
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 62
                    },
                    "start": {
                      "column": 13,
                      "line": 62
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 83,
                  "line": 62
                },
                "start": {
                  "column": 9,
                  "line": 62
                }
              }
            },
            "range": [
              1283,
              1362
            ],
            "loc": {
              "end": {
                "column": 83,
                "line": 62
              },
              "start": {
                "column": 4,
                "line": 62
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
                1371,
                1372
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 63
                },
                "start": {
                  "column": 8,
                  "line": 63
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
                1372,
                1414
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
                            1396,
                            1400
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 63
                            },
                            "start": {
                              "column": 33,
                              "line": 63
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_x",
                          "optional": false,
                          "range": [
                            1401,
                            1403
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 63
                            },
                            "start": {
                              "column": 38,
                              "line": 63
                            }
                          }
                        },
                        "range": [
                          1396,
                          1403
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 63
                          },
                          "start": {
                            "column": 33,
                            "line": 63
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "range": [
                          1406,
                          1411
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 63
                          },
                          "start": {
                            "column": 43,
                            "line": 63
                          }
                        }
                      },
                      "range": [
                        1396,
                        1411
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 63
                        },
                        "start": {
                          "column": 33,
                          "line": 63
                        }
                      }
                    },
                    "range": [
                      1396,
                      1412
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 63
                      },
                      "start": {
                        "column": 33,
                        "line": 63
                      }
                    }
                  }
                ],
                "range": [
                  1394,
                  1414
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 63
                  },
                  "start": {
                    "column": 31,
                    "line": 63
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
                        "column": 29,
                        "line": 63
                      },
                      "start": {
                        "column": 15,
                        "line": 63
                      }
                    },
                    "range": [
                      1378,
                      1392
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1380,
                            1386
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 63
                            },
                            "start": {
                              "column": 17,
                              "line": 63
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "range": [
                              1389,
                              1392
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 63
                              },
                              "start": {
                                "column": 26,
                                "line": 63
                              }
                            }
                          },
                          "range": [
                            1389,
                            1392
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 63
                            },
                            "start": {
                              "column": 26,
                              "line": 63
                            }
                          }
                        }
                      ],
                      "range": [
                        1380,
                        1392
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 63
                        },
                        "start": {
                          "column": 17,
                          "line": 63
                        }
                      }
                    }
                  },
                  "range": [
                    1373,
                    1392
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 63
                    },
                    "start": {
                      "column": 10,
                      "line": 63
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 63
                },
                "start": {
                  "column": 9,
                  "line": 63
                }
              }
            },
            "range": [
              1367,
              1414
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 63
              },
              "start": {
                "column": 4,
                "line": 63
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
              "name": "additionAssignment",
              "optional": false,
              "range": [
                1420,
                1438
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 65
                },
                "start": {
                  "column": 4,
                  "line": 65
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
                1438,
                1469
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "+=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            1451,
                            1455
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 66
                            },
                            "start": {
                              "column": 8,
                              "line": 66
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
                            1456,
                            1457
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 66
                            },
                            "start": {
                              "column": 13,
                              "line": 66
                            }
                          }
                        },
                        "range": [
                          1451,
                          1457
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 66
                          },
                          "start": {
                            "column": 8,
                            "line": 66
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          1461,
                          1462
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 66
                          },
                          "start": {
                            "column": 18,
                            "line": 66
                          }
                        }
                      },
                      "range": [
                        1451,
                        1462
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 66
                        },
                        "start": {
                          "column": 8,
                          "line": 66
                        }
                      }
                    },
                    "range": [
                      1451,
                      1463
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
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
                  1441,
                  1469
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 67
                  },
                  "start": {
                    "column": 25,
                    "line": 65
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
                  "line": 67
                },
                "start": {
                  "column": 22,
                  "line": 65
                }
              }
            },
            "range": [
              1420,
              1469
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
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "subtractionAssignment",
              "optional": false,
              "range": [
                1475,
                1496
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 69
                },
                "start": {
                  "column": 4,
                  "line": 69
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
                1496,
                1527
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "-=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            1509,
                            1513
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 70
                            },
                            "start": {
                              "column": 8,
                              "line": 70
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
                            1514,
                            1515
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 70
                            },
                            "start": {
                              "column": 13,
                              "line": 70
                            }
                          }
                        },
                        "range": [
                          1509,
                          1515
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 70
                          },
                          "start": {
                            "column": 8,
                            "line": 70
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          1519,
                          1520
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 70
                          },
                          "start": {
                            "column": 18,
                            "line": 70
                          }
                        }
                      },
                      "range": [
                        1509,
                        1520
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 70
                        },
                        "start": {
                          "column": 8,
                          "line": 70
                        }
                      }
                    },
                    "range": [
                      1509,
                      1521
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 70
                      },
                      "start": {
                        "column": 8,
                        "line": 70
                      }
                    }
                  }
                ],
                "range": [
                  1499,
                  1527
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 71
                  },
                  "start": {
                    "column": 28,
                    "line": 69
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
                  "line": 71
                },
                "start": {
                  "column": 25,
                  "line": 69
                }
              }
            },
            "range": [
              1475,
              1527
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 71
              },
              "start": {
                "column": 4,
                "line": 69
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
              "name": "multiplicationAssignment",
              "optional": false,
              "range": [
                1533,
                1557
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 73
                },
                "start": {
                  "column": 4,
                  "line": 73
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
                1557,
                1588
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "*=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            1570,
                            1574
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 74
                            },
                            "start": {
                              "column": 8,
                              "line": 74
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
                            1575,
                            1576
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 74
                            },
                            "start": {
                              "column": 13,
                              "line": 74
                            }
                          }
                        },
                        "range": [
                          1570,
                          1576
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 74
                          },
                          "start": {
                            "column": 8,
                            "line": 74
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          1580,
                          1581
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 74
                          },
                          "start": {
                            "column": 18,
                            "line": 74
                          }
                        }
                      },
                      "range": [
                        1570,
                        1581
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 74
                        },
                        "start": {
                          "column": 8,
                          "line": 74
                        }
                      }
                    },
                    "range": [
                      1570,
                      1582
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
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
                  1560,
                  1588
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 75
                  },
                  "start": {
                    "column": 31,
                    "line": 73
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
                  "line": 75
                },
                "start": {
                  "column": 28,
                  "line": 73
                }
              }
            },
            "range": [
              1533,
              1588
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
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "divisionAssignment",
              "optional": false,
              "range": [
                1594,
                1612
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 77
                },
                "start": {
                  "column": 4,
                  "line": 77
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
                1612,
                1643
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "/=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            1625,
                            1629
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 78
                            },
                            "start": {
                              "column": 8,
                              "line": 78
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
                            1630,
                            1631
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 78
                            },
                            "start": {
                              "column": 13,
                              "line": 78
                            }
                          }
                        },
                        "range": [
                          1625,
                          1631
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 78
                          },
                          "start": {
                            "column": 8,
                            "line": 78
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          1635,
                          1636
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 78
                          },
                          "start": {
                            "column": 18,
                            "line": 78
                          }
                        }
                      },
                      "range": [
                        1625,
                        1636
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 78
                        },
                        "start": {
                          "column": 8,
                          "line": 78
                        }
                      }
                    },
                    "range": [
                      1625,
                      1637
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 78
                      },
                      "start": {
                        "column": 8,
                        "line": 78
                      }
                    }
                  }
                ],
                "range": [
                  1615,
                  1643
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 79
                  },
                  "start": {
                    "column": 25,
                    "line": 77
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
                  "line": 79
                },
                "start": {
                  "column": 22,
                  "line": 77
                }
              }
            },
            "range": [
              1594,
              1643
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 79
              },
              "start": {
                "column": 4,
                "line": 77
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 80
          },
          "start": {
            "column": 21,
            "line": 60
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumberOrObject",
        "optional": false,
        "range": [
          1236,
          1250
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 60
          },
          "start": {
            "column": 6,
            "line": 60
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1230,
        1645
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 80
        },
        "start": {
          "column": 0,
          "line": 60
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
            "name": "numberOrObject",
            "optional": false,
            "range": [
              1652,
              1666
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 81
              },
              "start": {
                "column": 6,
                "line": 81
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "NumberOrObject",
              "optional": false,
              "range": [
                1673,
                1687
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 81
                },
                "start": {
                  "column": 27,
                  "line": 81
                }
              }
            },
            "range": [
              1669,
              1689
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 81
              },
              "start": {
                "column": 23,
                "line": 81
              }
            }
          },
          "range": [
            1652,
            1689
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 81
            },
            "start": {
              "column": 6,
              "line": 81
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1646,
        1690
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 81
        },
        "start": {
          "column": 0,
          "line": 81
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
            "type": "Identifier",
            "decorators": [],
            "name": "numberOrObject",
            "optional": false,
            "range": [
              1691,
              1705
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 82
              },
              "start": {
                "column": 0,
                "line": 82
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
              1706,
              1707
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 82
              },
              "start": {
                "column": 15,
                "line": 82
              }
            }
          },
          "range": [
            1691,
            1707
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 82
            },
            "start": {
              "column": 0,
              "line": 82
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1711,
            1712
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 82
            },
            "start": {
              "column": 20,
              "line": 82
            }
          }
        },
        "range": [
          1691,
          1712
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 82
          },
          "start": {
            "column": 0,
            "line": 82
          }
        }
      },
      "range": [
        1691,
        1713
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 82
        },
        "start": {
          "column": 0,
          "line": 82
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "-=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "numberOrObject",
            "optional": false,
            "range": [
              1714,
              1728
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 83
              },
              "start": {
                "column": 0,
                "line": 83
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
              1729,
              1730
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 83
              },
              "start": {
                "column": 15,
                "line": 83
              }
            }
          },
          "range": [
            1714,
            1730
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 83
            },
            "start": {
              "column": 0,
              "line": 83
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1734,
            1735
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 83
            },
            "start": {
              "column": 20,
              "line": 83
            }
          }
        },
        "range": [
          1714,
          1735
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 83
          },
          "start": {
            "column": 0,
            "line": 83
          }
        }
      },
      "range": [
        1714,
        1736
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 83
        },
        "start": {
          "column": 0,
          "line": 83
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "*=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "numberOrObject",
            "optional": false,
            "range": [
              1737,
              1751
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 84
              },
              "start": {
                "column": 0,
                "line": 84
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
              1752,
              1753
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 84
              },
              "start": {
                "column": 15,
                "line": 84
              }
            }
          },
          "range": [
            1737,
            1753
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 84
            },
            "start": {
              "column": 0,
              "line": 84
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1757,
            1758
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 84
            },
            "start": {
              "column": 20,
              "line": 84
            }
          }
        },
        "range": [
          1737,
          1758
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 84
          },
          "start": {
            "column": 0,
            "line": 84
          }
        }
      },
      "range": [
        1737,
        1759
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 84
        },
        "start": {
          "column": 0,
          "line": 84
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "/=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "numberOrObject",
            "optional": false,
            "range": [
              1760,
              1774
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 85
              },
              "start": {
                "column": 0,
                "line": 85
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
              1775,
              1776
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 85
              },
              "start": {
                "column": 15,
                "line": 85
              }
            }
          },
          "range": [
            1760,
            1776
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 85
            },
            "start": {
              "column": 0,
              "line": 85
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1780,
            1781
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 85
            },
            "start": {
              "column": 20,
              "line": 85
            }
          }
        },
        "range": [
          1760,
          1781
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 85
          },
          "start": {
            "column": 0,
            "line": 85
          }
        }
      },
      "range": [
        1760,
        1782
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 85
        },
        "start": {
          "column": 0,
          "line": 85
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 22,
      "line": 85
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
