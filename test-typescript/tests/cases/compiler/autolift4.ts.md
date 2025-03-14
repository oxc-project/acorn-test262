__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    433
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          12,
          194
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                19,
                30
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
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
                30,
                75
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  67,
                  75
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 5
                  },
                  "start": {
                    "column": 52,
                    "line": 3
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
                          "column": 32,
                          "line": 3
                        },
                        "start": {
                          "column": 24,
                          "line": 3
                        }
                      },
                      "range": [
                        39,
                        47
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          41,
                          47
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 3
                          },
                          "start": {
                            "column": 26,
                            "line": 3
                          }
                        }
                      }
                    },
                    "range": [
                      38,
                      47
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 3
                      },
                      "start": {
                        "column": 23,
                        "line": 3
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    31,
                    47
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 3
                    },
                    "start": {
                      "column": 16,
                      "line": 3
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
                          "column": 50,
                          "line": 3
                        },
                        "start": {
                          "column": 42,
                          "line": 3
                        }
                      },
                      "range": [
                        57,
                        65
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          59,
                          65
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 3
                          },
                          "start": {
                            "column": 44,
                            "line": 3
                          }
                        }
                      }
                    },
                    "range": [
                      56,
                      65
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 3
                      },
                      "start": {
                        "column": 41,
                        "line": 3
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    49,
                    65
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 3
                    },
                    "start": {
                      "column": 34,
                      "line": 3
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 5
                },
                "start": {
                  "column": 15,
                  "line": 3
                }
              }
            },
            "range": [
              19,
              75
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 5
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
              "name": "getDist",
              "optional": false,
              "range": [
                80,
                87
              ],
              "loc": {
                "end": {
                  "column": 11,
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
                87,
                156
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
                                  118,
                                  122
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 25,
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
                                  123,
                                  124
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 7
                                  }
                                }
                              },
                              "range": [
                                118,
                                124
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 7
                                },
                                "start": {
                                  "column": 25,
                                  "line": 7
                                }
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  125,
                                  129
                                ],
                                "loc": {
                                  "end": {
                                    "column": 36,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 32,
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
                                  130,
                                  131
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 37,
                                    "line": 7
                                  }
                                }
                              },
                              "range": [
                                125,
                                131
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 7
                                },
                                "start": {
                                  "column": 32,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              118,
                              131
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 7
                              },
                              "start": {
                                "column": 25,
                                "line": 7
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
                                  134,
                                  138
                                ],
                                "loc": {
                                  "end": {
                                    "column": 45,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 41,
                                    "line": 7
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
                                  139,
                                  140
                                ],
                                "loc": {
                                  "end": {
                                    "column": 47,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 46,
                                    "line": 7
                                  }
                                }
                              },
                              "range": [
                                134,
                                140
                              ],
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 7
                                },
                                "start": {
                                  "column": 41,
                                  "line": 7
                                }
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  141,
                                  145
                                ],
                                "loc": {
                                  "end": {
                                    "column": 52,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 48,
                                    "line": 7
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
                                  146,
                                  147
                                ],
                                "loc": {
                                  "end": {
                                    "column": 54,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 53,
                                    "line": 7
                                  }
                                }
                              },
                              "range": [
                                141,
                                147
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 7
                                },
                                "start": {
                                  "column": 48,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              134,
                              147
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 7
                              },
                              "start": {
                                "column": 41,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            118,
                            147
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 7
                            },
                            "start": {
                              "column": 25,
                              "line": 7
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
                            108,
                            112
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 7
                            },
                            "start": {
                              "column": 15,
                              "line": 7
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
                            113,
                            117
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 7
                            },
                            "start": {
                              "column": 20,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          108,
                          117
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 7
                          },
                          "start": {
                            "column": 15,
                            "line": 7
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        108,
                        148
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 7
                        },
                        "start": {
                          "column": 15,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      101,
                      149
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
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
                  90,
                  156
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 8
                  },
                  "start": {
                    "column": 14,
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
                  "column": 11,
                  "line": 6
                }
              }
            },
            "range": [
              80,
              156
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
                168,
                174
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 9
                },
                "start": {
                  "column": 11,
                  "line": 9
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
                    187,
                    188
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 9
                    },
                    "start": {
                      "column": 30,
                      "line": 9
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    189,
                    190
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 9
                    },
                    "start": {
                      "column": 32,
                      "line": 9
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
                  181,
                  186
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 9
                  },
                  "start": {
                    "column": 24,
                    "line": 9
                  }
                }
              },
              "range": [
                177,
                191
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 9
                },
                "start": {
                  "column": 20,
                  "line": 9
                }
              }
            },
            "range": [
              161,
              192
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 12,
            "line": 1
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
          6,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
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
        194
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
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
          224,
          431
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                231,
                242
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
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
                242,
                321
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            309,
                            310
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
                        {
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
                              "column": 18,
                              "line": 15
                            },
                            "start": {
                              "column": 17,
                              "line": 15
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "range": [
                          303,
                          308
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
                      "range": [
                        303,
                        314
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
                      303,
                      315
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
                  293,
                  321
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 16
                  },
                  "start": {
                    "column": 66,
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 14
                      },
                      "start": {
                        "column": 17,
                        "line": 14
                      }
                    },
                    "range": [
                      244,
                      252
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        246,
                        252
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 14
                        },
                        "start": {
                          "column": 19,
                          "line": 14
                        }
                      }
                    }
                  },
                  "range": [
                    243,
                    252
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 14
                    },
                    "start": {
                      "column": 16,
                      "line": 14
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 14
                      },
                      "start": {
                        "column": 28,
                        "line": 14
                      }
                    },
                    "range": [
                      255,
                      263
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        257,
                        263
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 14
                        },
                        "start": {
                          "column": 30,
                          "line": 14
                        }
                      }
                    }
                  },
                  "range": [
                    254,
                    263
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 14
                    },
                    "start": {
                      "column": 27,
                      "line": 14
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
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 14
                        },
                        "start": {
                          "column": 46,
                          "line": 14
                        }
                      },
                      "range": [
                        273,
                        281
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          275,
                          281
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 14
                          },
                          "start": {
                            "column": 48,
                            "line": 14
                          }
                        }
                      }
                    },
                    "range": [
                      272,
                      281
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 14
                      },
                      "start": {
                        "column": 45,
                        "line": 14
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    265,
                    281
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 14
                    },
                    "start": {
                      "column": 38,
                      "line": 14
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 14
                      },
                      "start": {
                        "column": 57,
                        "line": 14
                      }
                    },
                    "range": [
                      284,
                      291
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        285,
                        291
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 14
                        },
                        "start": {
                          "column": 58,
                          "line": 14
                        }
                      }
                    }
                  },
                  "range": [
                    283,
                    291
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 14
                    },
                    "start": {
                      "column": 56,
                      "line": 14
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 16
                },
                "start": {
                  "column": 15,
                  "line": 14
                }
              }
            },
            "range": [
              231,
              321
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
              "name": "getDist",
              "optional": false,
              "range": [
                331,
                338
              ],
              "loc": {
                "end": {
                  "column": 11,
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
                338,
                421
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
                                    368,
                                    372
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 19
                                    },
                                    "start": {
                                      "column": 25,
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
                                    373,
                                    374
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 19
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 19
                                    }
                                  }
                                },
                                "range": [
                                  368,
                                  374
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 19
                                  }
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "range": [
                                    375,
                                    379
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 36,
                                      "line": 19
                                    },
                                    "start": {
                                      "column": 32,
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
                                    380,
                                    381
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 19
                                    },
                                    "start": {
                                      "column": 37,
                                      "line": 19
                                    }
                                  }
                                },
                                "range": [
                                  375,
                                  381
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 32,
                                    "line": 19
                                  }
                                }
                              },
                              "range": [
                                368,
                                381
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 19
                                },
                                "start": {
                                  "column": 25,
                                  "line": 19
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
                                    384,
                                    388
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 45,
                                      "line": 19
                                    },
                                    "start": {
                                      "column": 41,
                                      "line": 19
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
                                    389,
                                    390
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 47,
                                      "line": 19
                                    },
                                    "start": {
                                      "column": 46,
                                      "line": 19
                                    }
                                  }
                                },
                                "range": [
                                  384,
                                  390
                                ],
                                "loc": {
                                  "end": {
                                    "column": 47,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 41,
                                    "line": 19
                                  }
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "range": [
                                    391,
                                    395
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 52,
                                      "line": 19
                                    },
                                    "start": {
                                      "column": 48,
                                      "line": 19
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
                                    396,
                                    397
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 54,
                                      "line": 19
                                    },
                                    "start": {
                                      "column": 53,
                                      "line": 19
                                    }
                                  }
                                },
                                "range": [
                                  391,
                                  397
                                ],
                                "loc": {
                                  "end": {
                                    "column": 54,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 48,
                                    "line": 19
                                  }
                                }
                              },
                              "range": [
                                384,
                                397
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 19
                                },
                                "start": {
                                  "column": 41,
                                  "line": 19
                                }
                              }
                            },
                            "range": [
                              368,
                              397
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 19
                              },
                              "start": {
                                "column": 25,
                                "line": 19
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
                                  400,
                                  404
                                ],
                                "loc": {
                                  "end": {
                                    "column": 61,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 57,
                                    "line": 19
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "z",
                                "optional": false,
                                "range": [
                                  405,
                                  406
                                ],
                                "loc": {
                                  "end": {
                                    "column": 63,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 62,
                                    "line": 19
                                  }
                                }
                              },
                              "range": [
                                400,
                                406
                              ],
                              "loc": {
                                "end": {
                                  "column": 63,
                                  "line": 19
                                },
                                "start": {
                                  "column": 57,
                                  "line": 19
                                }
                              }
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "range": [
                                  407,
                                  411
                                ],
                                "loc": {
                                  "end": {
                                    "column": 68,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 64,
                                    "line": 19
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "m",
                                "optional": false,
                                "range": [
                                  412,
                                  413
                                ],
                                "loc": {
                                  "end": {
                                    "column": 70,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 69,
                                    "line": 19
                                  }
                                }
                              },
                              "range": [
                                407,
                                413
                              ],
                              "loc": {
                                "end": {
                                  "column": 70,
                                  "line": 19
                                },
                                "start": {
                                  "column": 64,
                                  "line": 19
                                }
                              }
                            },
                            "range": [
                              400,
                              413
                            ],
                            "loc": {
                              "end": {
                                "column": 70,
                                "line": 19
                              },
                              "start": {
                                "column": 57,
                                "line": 19
                              }
                            }
                          },
                          "range": [
                            368,
                            413
                          ],
                          "loc": {
                            "end": {
                              "column": 70,
                              "line": 19
                            },
                            "start": {
                              "column": 25,
                              "line": 19
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
                            358,
                            362
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 19
                            },
                            "start": {
                              "column": 15,
                              "line": 19
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
                            363,
                            367
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 19
                            },
                            "start": {
                              "column": 20,
                              "line": 19
                            }
                          }
                        },
                        "range": [
                          358,
                          367
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 19
                          },
                          "start": {
                            "column": 15,
                            "line": 19
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        358,
                        414
                      ],
                      "loc": {
                        "end": {
                          "column": 71,
                          "line": 19
                        },
                        "start": {
                          "column": 15,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      351,
                      415
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
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
                  341,
                  421
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 20
                  },
                  "start": {
                    "column": 14,
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
                  "column": 11,
                  "line": 18
                }
              }
            },
            "range": [
              331,
              421
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
            "column": 28,
            "line": 12
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Point3D",
        "optional": false,
        "range": [
          202,
          209
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 12
          },
          "start": {
            "column": 6,
            "line": 12
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Point",
        "optional": false,
        "range": [
          218,
          223
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 12
          },
          "start": {
            "column": 22,
            "line": 12
          }
        }
      },
      "range": [
        196,
        431
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 23
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
