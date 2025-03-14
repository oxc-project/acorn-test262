__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    557
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          436
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "foo",
              "range": [
                21,
                25
              ],
              "loc": {
                "end": {
                  "column": 15,
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
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                25,
                39
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  37,
                  39
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 2
                  },
                  "start": {
                    "column": 27,
                    "line": 2
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 2
                      },
                      "start": {
                        "column": 17,
                        "line": 2
                      }
                    },
                    "range": [
                      27,
                      35
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        29,
                        35
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 2
                        },
                        "start": {
                          "column": 19,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    26,
                    35
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 2
                    },
                    "start": {
                      "column": 16,
                      "line": 2
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 2
                },
                "start": {
                  "column": 15,
                  "line": 2
                }
              }
            },
            "range": [
              14,
              39
            ],
            "loc": {
              "end": {
                "column": 29,
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
              "type": "PrivateIdentifier",
              "name": "bar",
              "range": [
                57,
                61
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 3
                },
                "start": {
                  "column": 17,
                  "line": 3
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
                61,
                75
              ],
              "async": true,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  73,
                  75
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 3
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
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 3
                      },
                      "start": {
                        "column": 23,
                        "line": 3
                      }
                    },
                    "range": [
                      63,
                      71
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        65,
                        71
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
                  },
                  "range": [
                    62,
                    71
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 3
                    },
                    "start": {
                      "column": 22,
                      "line": 3
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 3
                },
                "start": {
                  "column": 21,
                  "line": 3
                }
              }
            },
            "range": [
              44,
              75
            ],
            "loc": {
              "end": {
                "column": 35,
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
              "type": "PrivateIdentifier",
              "name": "baz",
              "range": [
                94,
                98
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 4
                },
                "start": {
                  "column": 18,
                  "line": 4
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
                98,
                135
              ],
              "async": true,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "3",
                      "value": 3,
                      "range": [
                        127,
                        128
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 5
                        },
                        "start": {
                          "column": 15,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      120,
                      129
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  110,
                  135
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
                  },
                  "start": {
                    "column": 34,
                    "line": 4
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": true,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 4
                      },
                      "start": {
                        "column": 24,
                        "line": 4
                      }
                    },
                    "range": [
                      100,
                      108
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        102,
                        108
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 4
                        },
                        "start": {
                          "column": 26,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    99,
                    108
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 4
                    },
                    "start": {
                      "column": 23,
                      "line": 4
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 22,
                  "line": 4
                }
              }
            },
            "range": [
              80,
              135
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 4
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
              "type": "PrivateIdentifier",
              "name": "_quux",
              "range": [
                147,
                153
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 7
                },
                "start": {
                  "column": 11,
                  "line": 7
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
                  "column": 25,
                  "line": 7
                },
                "start": {
                  "column": 17,
                  "line": 7
                }
              },
              "range": [
                153,
                161
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  155,
                  161
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 7
                  },
                  "start": {
                    "column": 19,
                    "line": 7
                  }
                }
              }
            },
            "value": null,
            "range": [
              140,
              162
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "quux",
              "range": [
                178,
                183
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 8
                },
                "start": {
                  "column": 15,
                  "line": 8
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                184,
                230
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
                          212,
                          216
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 9
                          },
                          "start": {
                            "column": 15,
                            "line": 9
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "_quux",
                        "range": [
                          217,
                          223
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 9
                          },
                          "start": {
                            "column": 20,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        212,
                        223
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 9
                        },
                        "start": {
                          "column": 15,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      205,
                      224
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
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
                  195,
                  230
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 32,
                    "line": 8
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
                    "column": 31,
                    "line": 8
                  },
                  "start": {
                    "column": 23,
                    "line": 8
                  }
                },
                "range": [
                  186,
                  194
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    188,
                    194
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 8
                    },
                    "start": {
                      "column": 25,
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
                  "column": 21,
                  "line": 8
                }
              }
            },
            "range": [
              167,
              230
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
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "quux",
              "range": [
                246,
                251
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 11
                },
                "start": {
                  "column": 15,
                  "line": 11
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                252,
                300
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
                            276,
                            280
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
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
                          "type": "PrivateIdentifier",
                          "name": "_quux",
                          "range": [
                            281,
                            287
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 12
                            },
                            "start": {
                              "column": 13,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          276,
                          287
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 12
                          },
                          "start": {
                            "column": 8,
                            "line": 12
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "range": [
                          290,
                          293
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 12
                          },
                          "start": {
                            "column": 22,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        276,
                        293
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 12
                        },
                        "start": {
                          "column": 8,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      276,
                      294
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 12
                      }
                    }
                  }
                ],
                "range": [
                  266,
                  300
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 13
                  },
                  "start": {
                    "column": 35,
                    "line": 11
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
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 11
                      },
                      "start": {
                        "column": 25,
                        "line": 11
                      }
                    },
                    "range": [
                      256,
                      264
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        258,
                        264
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 11
                        },
                        "start": {
                          "column": 27,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    253,
                    264
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 11
                    },
                    "start": {
                      "column": 22,
                      "line": 11
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 13
                },
                "start": {
                  "column": 21,
                  "line": 11
                }
              }
            },
            "range": [
              235,
              300
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                305,
                316
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
                317,
                434
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
                          "type": "Literal",
                          "raw": "30",
                          "value": 30,
                          "range": [
                            337,
                            339
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 15
                            },
                            "start": {
                              "column": 15,
                              "line": 15
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
                          "name": "A",
                          "optional": false,
                          "range": [
                            330,
                            331
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
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
                          "type": "PrivateIdentifier",
                          "name": "foo",
                          "range": [
                            332,
                            336
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 15
                            },
                            "start": {
                              "column": 10,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          330,
                          336
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
                      "optional": false,
                      "range": [
                        330,
                        340
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
                    "range": [
                      330,
                      341
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
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "30",
                          "value": 30,
                          "range": [
                            357,
                            359
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 16
                            },
                            "start": {
                              "column": 15,
                              "line": 16
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
                          "name": "A",
                          "optional": false,
                          "range": [
                            350,
                            351
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
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
                          "type": "PrivateIdentifier",
                          "name": "bar",
                          "range": [
                            352,
                            356
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 16
                            },
                            "start": {
                              "column": 10,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          350,
                          356
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 16
                          },
                          "start": {
                            "column": 8,
                            "line": 16
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        350,
                        360
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
                    "range": [
                      350,
                      361
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
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
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "30",
                          "value": 30,
                          "range": [
                            377,
                            379
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 17
                            },
                            "start": {
                              "column": 15,
                              "line": 17
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
                          "name": "A",
                          "optional": false,
                          "range": [
                            370,
                            371
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 17
                            },
                            "start": {
                              "column": 8,
                              "line": 17
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "bar",
                          "range": [
                            372,
                            376
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 17
                            },
                            "start": {
                              "column": 10,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          370,
                          376
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 17
                          },
                          "start": {
                            "column": 8,
                            "line": 17
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        370,
                        380
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
                    "range": [
                      370,
                      381
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
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
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "range": [
                            390,
                            391
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
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "quux",
                          "range": [
                            392,
                            397
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
                        "range": [
                          390,
                          397
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 18
                          },
                          "start": {
                            "column": 8,
                            "line": 18
                          }
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "range": [
                              400,
                              401
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 18
                              },
                              "start": {
                                "column": 18,
                                "line": 18
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "quux",
                            "range": [
                              402,
                              407
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 18
                              },
                              "start": {
                                "column": 20,
                                "line": 18
                              }
                            }
                          },
                          "range": [
                            400,
                            407
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 18
                            },
                            "start": {
                              "column": 18,
                              "line": 18
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            410,
                            411
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 18
                            },
                            "start": {
                              "column": 28,
                              "line": 18
                            }
                          }
                        },
                        "range": [
                          400,
                          411
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 18
                          },
                          "start": {
                            "column": 18,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        390,
                        411
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 18
                        },
                        "start": {
                          "column": 8,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      390,
                      412
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
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
                      "type": "UpdateExpression",
                      "argument": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "range": [
                            421,
                            422
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
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "quux",
                          "range": [
                            423,
                            428
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 19
                            },
                            "start": {
                              "column": 10,
                              "line": 19
                            }
                          }
                        },
                        "range": [
                          421,
                          428
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 19
                          },
                          "start": {
                            "column": 8,
                            "line": 19
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": false,
                      "range": [
                        421,
                        430
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
                    },
                    "range": [
                      421,
                      431
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
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
                  320,
                  434
                ],
                "loc": {
                  "end": {
                    "column": 2,
                    "line": 20
                  },
                  "start": {
                    "column": 19,
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
                  "column": 2,
                  "line": 20
                },
                "start": {
                  "column": 16,
                  "line": 14
                }
              }
            },
            "range": [
              305,
              434
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 14
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
            "column": 8,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          6,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
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
        436
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          456,
          556
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "foo",
              "range": [
                469,
                473
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 24
                },
                "start": {
                  "column": 11,
                  "line": 24
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
                473,
                487
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  485,
                  487
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 24
                  },
                  "start": {
                    "column": 27,
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 24
                      },
                      "start": {
                        "column": 17,
                        "line": 24
                      }
                    },
                    "range": [
                      475,
                      483
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        477,
                        483
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 24
                        },
                        "start": {
                          "column": 19,
                          "line": 24
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
                      "column": 25,
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
                  "column": 29,
                  "line": 24
                },
                "start": {
                  "column": 15,
                  "line": 24
                }
              }
            },
            "range": [
              462,
              487
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                492,
                503
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 25
                },
                "start": {
                  "column": 4,
                  "line": 25
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
                504,
                554
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "range": [
                          517,
                          522
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
                      "range": [
                        517,
                        524
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 26
                        },
                        "start": {
                          "column": 8,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      517,
                      525
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
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
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "\"str\"",
                          "value": "str",
                          "range": [
                            541,
                            546
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 27
                            },
                            "start": {
                              "column": 15,
                              "line": 27
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
                          "name": "B",
                          "optional": false,
                          "range": [
                            534,
                            535
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 27
                            },
                            "start": {
                              "column": 8,
                              "line": 27
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "foo",
                          "range": [
                            536,
                            540
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 27
                            },
                            "start": {
                              "column": 10,
                              "line": 27
                            }
                          }
                        },
                        "range": [
                          534,
                          540
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 27
                          },
                          "start": {
                            "column": 8,
                            "line": 27
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        534,
                        547
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
                    "range": [
                      534,
                      548
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
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
                  507,
                  554
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 28
                  },
                  "start": {
                    "column": 19,
                    "line": 25
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
                  "line": 28
                },
                "start": {
                  "column": 16,
                  "line": 25
                }
              }
            },
            "range": [
              492,
              554
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 25
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
            "column": 18,
            "line": 23
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          444,
          445
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 23
          },
          "start": {
            "column": 6,
            "line": 23
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          454,
          455
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 23
          },
          "start": {
            "column": 16,
            "line": 23
          }
        }
      },
      "range": [
        438,
        556
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 23
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
