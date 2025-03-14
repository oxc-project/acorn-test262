__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    302
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
      "kind": "let",
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
          58,
          126
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "name": "foo",
              "range": [
                64,
                68
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "3",
              "value": 3,
              "range": [
                71,
                72
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              }
            },
            "range": [
              64,
              73
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
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "ThisExpression",
                      "range": [
                        84,
                        88
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 7
                        },
                        "start": {
                          "column": 9,
                          "line": 7
                        }
                      }
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            100,
                            101
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
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
                          "type": "PrivateIdentifier",
                          "name": "foo",
                          "range": [
                            102,
                            106
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 7
                            },
                            "start": {
                              "column": 27,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          100,
                          106
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
                      "expression": true,
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
                                "column": 20,
                                "line": 7
                              },
                              "start": {
                                "column": 17,
                                "line": 7
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
                                "name": "A",
                                "optional": false,
                                "range": [
                                  94,
                                  95
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 7
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
                                  "line": 7
                                },
                                "start": {
                                  "column": 19,
                                  "line": 7
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
                              "line": 7
                            },
                            "start": {
                              "column": 16,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "range": [
                        90,
                        106
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 7
                        },
                        "start": {
                          "column": 15,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dec",
                    "optional": false,
                    "range": [
                      80,
                      83
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 7
                      },
                      "start": {
                        "column": 5,
                        "line": 7
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    80,
                    107
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 7
                    },
                    "start": {
                      "column": 5,
                      "line": 7
                    }
                  }
                },
                "range": [
                  79,
                  107
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 7
                  },
                  "start": {
                    "column": 4,
                    "line": 7
                  }
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "range": [
                118,
                119
              ],
              "loc": {
                "end": {
                  "column": 5,
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
                119,
                124
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  122,
                  124
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 8
                  },
                  "start": {
                    "column": 8,
                    "line": 8
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
                  "column": 10,
                  "line": 8
                },
                "start": {
                  "column": 5,
                  "line": 8
                }
              }
            },
            "range": [
              79,
              124
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 8,
            "line": 4
          }
        }
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      33,
                      34
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
                  "optional": false,
                  "property": {
                    "type": "PrivateIdentifier",
                    "name": "foo",
                    "range": [
                      35,
                      39
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 3
                      },
                      "start": {
                        "column": 12,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    33,
                    39
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 3
                    },
                    "start": {
                      "column": 10,
                      "line": 3
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      28,
                      29
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 3
                      },
                      "start": {
                        "column": 5,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  28,
                  39
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 3
                  },
                  "start": {
                    "column": 5,
                    "line": 3
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "dec",
              "optional": false,
              "range": [
                24,
                27
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 3
                },
                "start": {
                  "column": 1,
                  "line": 3
                }
              }
            },
            "optional": false,
            "range": [
              24,
              40
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 3
              },
              "start": {
                "column": 1,
                "line": 3
              }
            }
          },
          "range": [
            23,
            40
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 3
            },
            "start": {
              "column": 0,
              "line": 3
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          56,
          57
        ],
        "loc": {
          "end": {
            "column": 7,
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
        23,
        126
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          168,
          185
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "name": "foo",
              "range": [
                174,
                178
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "3",
              "value": 3,
              "range": [
                181,
                182
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
              174,
              183
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
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 8,
            "line": 12
          }
        }
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      143,
                      144
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 11
                      },
                      "start": {
                        "column": 15,
                        "line": 11
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "PrivateIdentifier",
                    "name": "foo",
                    "range": [
                      145,
                      149
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 11
                      },
                      "start": {
                        "column": 17,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    143,
                    149
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 11
                    },
                    "start": {
                      "column": 15,
                      "line": 11
                    }
                  }
                },
                "expression": true,
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
                          "column": 10,
                          "line": 11
                        },
                        "start": {
                          "column": 7,
                          "line": 11
                        }
                      },
                      "range": [
                        135,
                        138
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "range": [
                            137,
                            138
                          ],
                          "loc": {
                            "end": {
                              "column": 10,
                              "line": 11
                            },
                            "start": {
                              "column": 9,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          137,
                          138
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 11
                          },
                          "start": {
                            "column": 9,
                            "line": 11
                          }
                        }
                      }
                    },
                    "range": [
                      134,
                      138
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 11
                      },
                      "start": {
                        "column": 6,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  133,
                  149
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 11
                  },
                  "start": {
                    "column": 5,
                    "line": 11
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "dec",
              "optional": false,
              "range": [
                129,
                132
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 11
                },
                "start": {
                  "column": 1,
                  "line": 11
                }
              }
            },
            "optional": false,
            "range": [
              129,
              150
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 11
              },
              "start": {
                "column": 1,
                "line": 11
              }
            }
          },
          "range": [
            128,
            150
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 11
            },
            "start": {
              "column": 0,
              "line": 11
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          166,
          167
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 12
          },
          "start": {
            "column": 6,
            "line": 12
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        128,
        185
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          195,
          301
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "name": "foo",
              "range": [
                201,
                205
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "2",
              "value": 2,
              "range": [
                208,
                209
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 17
                },
                "start": {
                  "column": 11,
                  "line": 17
                }
              }
            },
            "range": [
              201,
              210
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
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
              "name": "m",
              "optional": false,
              "range": [
                215,
                216
              ],
              "loc": {
                "end": {
                  "column": 5,
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
                216,
                299
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "range": [
                        273,
                        275
                      ],
                      "body": [],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 20
                        },
                        "start": {
                          "column": 16,
                          "line": 20
                        }
                      }
                    },
                    "declare": false,
                    "decorators": [
                      {
                        "type": "Decorator",
                        "expression": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "async": false,
                              "body": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "range": [
                                    240,
                                    244
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 19
                                    },
                                    "start": {
                                      "column": 19,
                                      "line": 19
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "name": "foo",
                                  "range": [
                                    245,
                                    249
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 19
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 19
                                    }
                                  }
                                },
                                "range": [
                                  240,
                                  249
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 19
                                  }
                                }
                              },
                              "expression": true,
                              "generator": false,
                              "id": null,
                              "params": [],
                              "range": [
                                234,
                                249
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 19
                                },
                                "start": {
                                  "column": 13,
                                  "line": 19
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dec",
                            "optional": false,
                            "range": [
                              230,
                              233
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 19
                              },
                              "start": {
                                "column": 9,
                                "line": 19
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            230,
                            250
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 19
                            },
                            "start": {
                              "column": 9,
                              "line": 19
                            }
                          }
                        },
                        "range": [
                          229,
                          250
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 19
                          },
                          "start": {
                            "column": 8,
                            "line": 19
                          }
                        }
                      }
                    ],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "range": [
                        271,
                        272
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 20
                        },
                        "start": {
                          "column": 14,
                          "line": 20
                        }
                      }
                    },
                    "implements": [],
                    "superClass": null,
                    "range": [
                      229,
                      275
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 20
                      },
                      "start": {
                        "column": 8,
                        "line": 19
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "range": [
                        291,
                        292
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 21
                        },
                        "start": {
                          "column": 15,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      284,
                      293
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
                  }
                ],
                "range": [
                  219,
                  299
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 22
                  },
                  "start": {
                    "column": 8,
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
                  "line": 22
                },
                "start": {
                  "column": 5,
                  "line": 18
                }
              }
            },
            "range": [
              215,
              299
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 22
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
            "line": 23
          },
          "start": {
            "column": 8,
            "line": 16
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          193,
          194
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 16
          },
          "start": {
            "column": 6,
            "line": 16
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        187,
        301
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 24
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
