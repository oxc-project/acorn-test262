__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    2837
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        2423
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            16,
            2423
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
                "name": "foo",
                "optional": false,
                "range": [
                  74,
                  77
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 3
                  },
                  "start": {
                    "column": 11,
                    "line": 3
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
                  77,
                  87
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    80,
                    87
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 4
                    },
                    "start": {
                      "column": 17,
                      "line": 3
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
                    "line": 4
                  },
                  "start": {
                    "column": 14,
                    "line": 3
                  }
                }
              },
              "range": [
                67,
                87
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 3
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
                "name": "fooWithParameters",
                "optional": false,
                "range": [
                  148,
                  165
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 6
                  },
                  "start": {
                    "column": 11,
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
                  165,
                  287
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
                            "name": "d",
                            "optional": false,
                            "range": [
                              275,
                              276
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
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
                            "name": "a",
                            "optional": false,
                            "range": [
                              279,
                              280
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 9
                              },
                              "start": {
                                "column": 16,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            275,
                            280
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
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
                      "kind": "var",
                      "range": [
                        271,
                        281
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
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
                    261,
                    287
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 10
                    },
                    "start": {
                      "column": 19,
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 6
                        },
                        "start": {
                          "column": 59,
                          "line": 6
                        }
                      },
                      "range": [
                        196,
                        204
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          198,
                          204
                        ],
                        "loc": {
                          "end": {
                            "column": 67,
                            "line": 6
                          },
                          "start": {
                            "column": 61,
                            "line": 6
                          }
                        }
                      }
                    },
                    "range": [
                      195,
                      204
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 6
                      },
                      "start": {
                        "column": 58,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 8
                        },
                        "start": {
                          "column": 9,
                          "line": 8
                        }
                      },
                      "range": [
                        251,
                        259
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          253,
                          259
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 8
                          },
                          "start": {
                            "column": 11,
                            "line": 8
                          }
                        }
                      }
                    },
                    "range": [
                      250,
                      259
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 8
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 28,
                    "line": 6
                  }
                }
              },
              "range": [
                141,
                287
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 6
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
                "name": "fooWithRestParameters",
                "optional": false,
                "range": [
                  299,
                  320
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 11
                  },
                  "start": {
                    "column": 11,
                    "line": 11
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
                  320,
                  394
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            369,
                            370
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 12
                            },
                            "start": {
                              "column": 15,
                              "line": 12
                            }
                          }
                        },
                        "right": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Literal",
                              "raw": "\"\"",
                              "value": "",
                              "range": [
                                384,
                                386
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 12
                                },
                                "start": {
                                  "column": 30,
                                  "line": 12
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
                              "name": "rests",
                              "optional": false,
                              "range": [
                                373,
                                378
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 12
                                },
                                "start": {
                                  "column": 19,
                                  "line": 12
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "join",
                              "optional": false,
                              "range": [
                                379,
                                383
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 12
                                },
                                "start": {
                                  "column": 25,
                                  "line": 12
                                }
                              }
                            },
                            "range": [
                              373,
                              383
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 12
                              },
                              "start": {
                                "column": 19,
                                "line": 12
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            373,
                            387
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 12
                            },
                            "start": {
                              "column": 19,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          369,
                          387
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 12
                          },
                          "start": {
                            "column": 15,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        362,
                        388
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
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
                    352,
                    394
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 13
                    },
                    "start": {
                      "column": 64,
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 11
                        },
                        "start": {
                          "column": 34,
                          "line": 11
                        }
                      },
                      "range": [
                        322,
                        330
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          324,
                          330
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 11
                          },
                          "start": {
                            "column": 36,
                            "line": 11
                          }
                        }
                      }
                    },
                    "range": [
                      321,
                      330
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 11
                      },
                      "start": {
                        "column": 33,
                        "line": 11
                      }
                    }
                  },
                  {
                    "type": "RestElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "rests",
                      "optional": false,
                      "range": [
                        335,
                        340
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 11
                        },
                        "start": {
                          "column": 47,
                          "line": 11
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 11
                        },
                        "start": {
                          "column": 52,
                          "line": 11
                        }
                      },
                      "range": [
                        340,
                        350
                      ],
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "range": [
                            342,
                            348
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 11
                            },
                            "start": {
                              "column": 54,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          342,
                          350
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 11
                          },
                          "start": {
                            "column": 54,
                            "line": 11
                          }
                        }
                      }
                    },
                    "range": [
                      332,
                      350
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 11
                      },
                      "start": {
                        "column": 44,
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
                    "column": 32,
                    "line": 11
                  }
                }
              },
              "range": [
                292,
                394
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
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fooWithOverloads",
                "optional": false,
                "range": [
                  407,
                  423
                ],
                "loc": {
                  "end": {
                    "column": 27,
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
                "type": "TSEmptyBodyFunctionExpression",
                "range": [
                  423,
                  443
                ],
                "async": false,
                "body": null,
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
                          "column": 37,
                          "line": 15
                        },
                        "start": {
                          "column": 29,
                          "line": 15
                        }
                      },
                      "range": [
                        425,
                        433
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          427,
                          433
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 15
                          },
                          "start": {
                            "column": 31,
                            "line": 15
                          }
                        }
                      }
                    },
                    "range": [
                      424,
                      433
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 15
                      },
                      "start": {
                        "column": 28,
                        "line": 15
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 15
                    },
                    "start": {
                      "column": 38,
                      "line": 15
                    }
                  },
                  "range": [
                    434,
                    442
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      436,
                      442
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 15
                      },
                      "start": {
                        "column": 40,
                        "line": 15
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 15
                  },
                  "start": {
                    "column": 27,
                    "line": 15
                  }
                }
              },
              "range": [
                400,
                443
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 15
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
                "name": "fooWithOverloads",
                "optional": false,
                "range": [
                  455,
                  471
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 16
                  },
                  "start": {
                    "column": 11,
                    "line": 16
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "range": [
                  471,
                  491
                ],
                "async": false,
                "body": null,
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
                          "column": 37,
                          "line": 16
                        },
                        "start": {
                          "column": 29,
                          "line": 16
                        }
                      },
                      "range": [
                        473,
                        481
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          475,
                          481
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 16
                          },
                          "start": {
                            "column": 31,
                            "line": 16
                          }
                        }
                      }
                    },
                    "range": [
                      472,
                      481
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 16
                      },
                      "start": {
                        "column": 28,
                        "line": 16
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 16
                    },
                    "start": {
                      "column": 38,
                      "line": 16
                    }
                  },
                  "range": [
                    482,
                    490
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      484,
                      490
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 16
                      },
                      "start": {
                        "column": 40,
                        "line": 16
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 16
                  },
                  "start": {
                    "column": 27,
                    "line": 16
                  }
                }
              },
              "range": [
                448,
                491
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
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
                "name": "fooWithOverloads",
                "optional": false,
                "range": [
                  503,
                  519
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 17
                  },
                  "start": {
                    "column": 11,
                    "line": 17
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
                  519,
                  558
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
                          550,
                          551
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 18
                          },
                          "start": {
                            "column": 15,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        543,
                        552
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
                    }
                  ],
                  "range": [
                    533,
                    558
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 19
                    },
                    "start": {
                      "column": 41,
                      "line": 17
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
                          "column": 34,
                          "line": 17
                        },
                        "start": {
                          "column": 29,
                          "line": 17
                        }
                      },
                      "range": [
                        521,
                        526
                      ],
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          523,
                          526
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 17
                          },
                          "start": {
                            "column": 31,
                            "line": 17
                          }
                        }
                      }
                    },
                    "range": [
                      520,
                      526
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 17
                      },
                      "start": {
                        "column": 28,
                        "line": 17
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 17
                    },
                    "start": {
                      "column": 35,
                      "line": 17
                    }
                  },
                  "range": [
                    527,
                    532
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      529,
                      532
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 17
                      },
                      "start": {
                        "column": 37,
                        "line": 17
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 19
                  },
                  "start": {
                    "column": 27,
                    "line": 17
                  }
                }
              },
              "range": [
                496,
                558
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 19
                },
                "start": {
                  "column": 4,
                  "line": 17
                }
              }
            },
            {
              "type": "MethodDefinition",
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateFoo",
                "optional": false,
                "range": [
                  625,
                  635
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 23
                  },
                  "start": {
                    "column": 12,
                    "line": 23
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
                  635,
                  645
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    638,
                    645
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 24
                    },
                    "start": {
                      "column": 25,
                      "line": 23
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
                    "line": 24
                  },
                  "start": {
                    "column": 22,
                    "line": 23
                  }
                }
              },
              "range": [
                617,
                645
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 24
                },
                "start": {
                  "column": 4,
                  "line": 23
                }
              }
            },
            {
              "type": "MethodDefinition",
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateFooWithParameters",
                "optional": false,
                "range": [
                  707,
                  731
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 26
                  },
                  "start": {
                    "column": 12,
                    "line": 26
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
                  731,
                  853
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
                            "name": "d",
                            "optional": false,
                            "range": [
                              841,
                              842
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 29
                              },
                              "start": {
                                "column": 12,
                                "line": 29
                              }
                            }
                          },
                          "init": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "range": [
                              845,
                              846
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 29
                              },
                              "start": {
                                "column": 16,
                                "line": 29
                              }
                            }
                          },
                          "range": [
                            841,
                            846
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 29
                            },
                            "start": {
                              "column": 12,
                              "line": 29
                            }
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var",
                      "range": [
                        837,
                        847
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 29
                        },
                        "start": {
                          "column": 8,
                          "line": 29
                        }
                      }
                    }
                  ],
                  "range": [
                    827,
                    853
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 30
                    },
                    "start": {
                      "column": 19,
                      "line": 28
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
                          "column": 75,
                          "line": 26
                        },
                        "start": {
                          "column": 67,
                          "line": 26
                        }
                      },
                      "range": [
                        762,
                        770
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          764,
                          770
                        ],
                        "loc": {
                          "end": {
                            "column": 75,
                            "line": 26
                          },
                          "start": {
                            "column": 69,
                            "line": 26
                          }
                        }
                      }
                    },
                    "range": [
                      761,
                      770
                    ],
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 26
                      },
                      "start": {
                        "column": 66,
                        "line": 26
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 28
                        },
                        "start": {
                          "column": 9,
                          "line": 28
                        }
                      },
                      "range": [
                        817,
                        825
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          819,
                          825
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 28
                          },
                          "start": {
                            "column": 11,
                            "line": 28
                          }
                        }
                      }
                    },
                    "range": [
                      816,
                      825
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 28
                      },
                      "start": {
                        "column": 8,
                        "line": 28
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 30
                  },
                  "start": {
                    "column": 36,
                    "line": 26
                  }
                }
              },
              "range": [
                699,
                853
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 30
                },
                "start": {
                  "column": 4,
                  "line": 26
                }
              }
            },
            {
              "type": "MethodDefinition",
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateFooWithRestParameters",
                "optional": false,
                "range": [
                  866,
                  894
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 31
                  },
                  "start": {
                    "column": 12,
                    "line": 31
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
                  894,
                  968
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            943,
                            944
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 32
                            },
                            "start": {
                              "column": 15,
                              "line": 32
                            }
                          }
                        },
                        "right": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Literal",
                              "raw": "\"\"",
                              "value": "",
                              "range": [
                                958,
                                960
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 32
                                },
                                "start": {
                                  "column": 30,
                                  "line": 32
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
                              "name": "rests",
                              "optional": false,
                              "range": [
                                947,
                                952
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 32
                                },
                                "start": {
                                  "column": 19,
                                  "line": 32
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "join",
                              "optional": false,
                              "range": [
                                953,
                                957
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 32
                                },
                                "start": {
                                  "column": 25,
                                  "line": 32
                                }
                              }
                            },
                            "range": [
                              947,
                              957
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 32
                              },
                              "start": {
                                "column": 19,
                                "line": 32
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            947,
                            961
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 32
                            },
                            "start": {
                              "column": 19,
                              "line": 32
                            }
                          }
                        },
                        "range": [
                          943,
                          961
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 32
                          },
                          "start": {
                            "column": 15,
                            "line": 32
                          }
                        }
                      },
                      "range": [
                        936,
                        962
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 32
                        },
                        "start": {
                          "column": 8,
                          "line": 32
                        }
                      }
                    }
                  ],
                  "range": [
                    926,
                    968
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 33
                    },
                    "start": {
                      "column": 72,
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 31
                        },
                        "start": {
                          "column": 42,
                          "line": 31
                        }
                      },
                      "range": [
                        896,
                        904
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          898,
                          904
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 31
                          },
                          "start": {
                            "column": 44,
                            "line": 31
                          }
                        }
                      }
                    },
                    "range": [
                      895,
                      904
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 31
                      },
                      "start": {
                        "column": 41,
                        "line": 31
                      }
                    }
                  },
                  {
                    "type": "RestElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "rests",
                      "optional": false,
                      "range": [
                        909,
                        914
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 31
                        },
                        "start": {
                          "column": 55,
                          "line": 31
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 70,
                          "line": 31
                        },
                        "start": {
                          "column": 60,
                          "line": 31
                        }
                      },
                      "range": [
                        914,
                        924
                      ],
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "range": [
                            916,
                            922
                          ],
                          "loc": {
                            "end": {
                              "column": 68,
                              "line": 31
                            },
                            "start": {
                              "column": 62,
                              "line": 31
                            }
                          }
                        },
                        "range": [
                          916,
                          924
                        ],
                        "loc": {
                          "end": {
                            "column": 70,
                            "line": 31
                          },
                          "start": {
                            "column": 62,
                            "line": 31
                          }
                        }
                      }
                    },
                    "range": [
                      906,
                      924
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 31
                      },
                      "start": {
                        "column": 52,
                        "line": 31
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 33
                  },
                  "start": {
                    "column": 40,
                    "line": 31
                  }
                }
              },
              "range": [
                858,
                968
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 33
                },
                "start": {
                  "column": 4,
                  "line": 31
                }
              }
            },
            {
              "type": "MethodDefinition",
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateFooWithOverloads",
                "optional": false,
                "range": [
                  981,
                  1004
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 34
                  },
                  "start": {
                    "column": 12,
                    "line": 34
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "range": [
                  1004,
                  1024
                ],
                "async": false,
                "body": null,
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
                          "column": 45,
                          "line": 34
                        },
                        "start": {
                          "column": 37,
                          "line": 34
                        }
                      },
                      "range": [
                        1006,
                        1014
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          1008,
                          1014
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 34
                          },
                          "start": {
                            "column": 39,
                            "line": 34
                          }
                        }
                      }
                    },
                    "range": [
                      1005,
                      1014
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 34
                      },
                      "start": {
                        "column": 36,
                        "line": 34
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 34
                    },
                    "start": {
                      "column": 46,
                      "line": 34
                    }
                  },
                  "range": [
                    1015,
                    1023
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      1017,
                      1023
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 34
                      },
                      "start": {
                        "column": 48,
                        "line": 34
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 34
                  },
                  "start": {
                    "column": 35,
                    "line": 34
                  }
                }
              },
              "range": [
                973,
                1024
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 34
                },
                "start": {
                  "column": 4,
                  "line": 34
                }
              }
            },
            {
              "type": "MethodDefinition",
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateFooWithOverloads",
                "optional": false,
                "range": [
                  1037,
                  1060
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 35
                  },
                  "start": {
                    "column": 12,
                    "line": 35
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "range": [
                  1060,
                  1080
                ],
                "async": false,
                "body": null,
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
                          "column": 45,
                          "line": 35
                        },
                        "start": {
                          "column": 37,
                          "line": 35
                        }
                      },
                      "range": [
                        1062,
                        1070
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          1064,
                          1070
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 35
                          },
                          "start": {
                            "column": 39,
                            "line": 35
                          }
                        }
                      }
                    },
                    "range": [
                      1061,
                      1070
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 35
                      },
                      "start": {
                        "column": 36,
                        "line": 35
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 35
                    },
                    "start": {
                      "column": 46,
                      "line": 35
                    }
                  },
                  "range": [
                    1071,
                    1079
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      1073,
                      1079
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 35
                      },
                      "start": {
                        "column": 48,
                        "line": 35
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 35
                  },
                  "start": {
                    "column": 35,
                    "line": 35
                  }
                }
              },
              "range": [
                1029,
                1080
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 35
                },
                "start": {
                  "column": 4,
                  "line": 35
                }
              }
            },
            {
              "type": "MethodDefinition",
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateFooWithOverloads",
                "optional": false,
                "range": [
                  1093,
                  1116
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 36
                  },
                  "start": {
                    "column": 12,
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
                  1116,
                  1155
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
                          1147,
                          1148
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 37
                          },
                          "start": {
                            "column": 15,
                            "line": 37
                          }
                        }
                      },
                      "range": [
                        1140,
                        1149
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
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
                    1130,
                    1155
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 38
                    },
                    "start": {
                      "column": 49,
                      "line": 36
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
                          "column": 42,
                          "line": 36
                        },
                        "start": {
                          "column": 37,
                          "line": 36
                        }
                      },
                      "range": [
                        1118,
                        1123
                      ],
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          1120,
                          1123
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 36
                          },
                          "start": {
                            "column": 39,
                            "line": 36
                          }
                        }
                      }
                    },
                    "range": [
                      1117,
                      1123
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 36
                      },
                      "start": {
                        "column": 36,
                        "line": 36
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 36
                    },
                    "start": {
                      "column": 43,
                      "line": 36
                    }
                  },
                  "range": [
                    1124,
                    1129
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      1126,
                      1129
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 36
                      },
                      "start": {
                        "column": 45,
                        "line": 36
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 38
                  },
                  "start": {
                    "column": 35,
                    "line": 36
                  }
                }
              },
              "range": [
                1085,
                1155
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
                "name": "staticFoo",
                "optional": false,
                "range": [
                  1221,
                  1230
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 42
                  },
                  "start": {
                    "column": 11,
                    "line": 42
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
                  1230,
                  1240
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    1233,
                    1240
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 43
                    },
                    "start": {
                      "column": 23,
                      "line": 42
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
                    "line": 43
                  },
                  "start": {
                    "column": 20,
                    "line": 42
                  }
                }
              },
              "range": [
                1214,
                1240
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 43
                },
                "start": {
                  "column": 4,
                  "line": 42
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
                "name": "staticFooWithParameters",
                "optional": false,
                "range": [
                  1301,
                  1324
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 45
                  },
                  "start": {
                    "column": 11,
                    "line": 45
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
                  1324,
                  1446
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
                            "name": "d",
                            "optional": false,
                            "range": [
                              1434,
                              1435
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 48
                              },
                              "start": {
                                "column": 12,
                                "line": 48
                              }
                            }
                          },
                          "init": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "range": [
                              1438,
                              1439
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 48
                              },
                              "start": {
                                "column": 16,
                                "line": 48
                              }
                            }
                          },
                          "range": [
                            1434,
                            1439
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 48
                            },
                            "start": {
                              "column": 12,
                              "line": 48
                            }
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var",
                      "range": [
                        1430,
                        1440
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 48
                        },
                        "start": {
                          "column": 8,
                          "line": 48
                        }
                      }
                    }
                  ],
                  "range": [
                    1420,
                    1446
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 49
                    },
                    "start": {
                      "column": 19,
                      "line": 47
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
                          "column": 73,
                          "line": 45
                        },
                        "start": {
                          "column": 65,
                          "line": 45
                        }
                      },
                      "range": [
                        1355,
                        1363
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          1357,
                          1363
                        ],
                        "loc": {
                          "end": {
                            "column": 73,
                            "line": 45
                          },
                          "start": {
                            "column": 67,
                            "line": 45
                          }
                        }
                      }
                    },
                    "range": [
                      1354,
                      1363
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 45
                      },
                      "start": {
                        "column": 64,
                        "line": 45
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 47
                        },
                        "start": {
                          "column": 9,
                          "line": 47
                        }
                      },
                      "range": [
                        1410,
                        1418
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          1412,
                          1418
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 47
                          },
                          "start": {
                            "column": 11,
                            "line": 47
                          }
                        }
                      }
                    },
                    "range": [
                      1409,
                      1418
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 47
                      },
                      "start": {
                        "column": 8,
                        "line": 47
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 49
                  },
                  "start": {
                    "column": 34,
                    "line": 45
                  }
                }
              },
              "range": [
                1294,
                1446
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 49
                },
                "start": {
                  "column": 4,
                  "line": 45
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
                "name": "staticFooWithRestParameters",
                "optional": false,
                "range": [
                  1458,
                  1485
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 50
                  },
                  "start": {
                    "column": 11,
                    "line": 50
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
                  1485,
                  1559
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            1534,
                            1535
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 51
                            },
                            "start": {
                              "column": 15,
                              "line": 51
                            }
                          }
                        },
                        "right": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Literal",
                              "raw": "\"\"",
                              "value": "",
                              "range": [
                                1549,
                                1551
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 51
                                },
                                "start": {
                                  "column": 30,
                                  "line": 51
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
                              "name": "rests",
                              "optional": false,
                              "range": [
                                1538,
                                1543
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 51
                                },
                                "start": {
                                  "column": 19,
                                  "line": 51
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "join",
                              "optional": false,
                              "range": [
                                1544,
                                1548
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 51
                                },
                                "start": {
                                  "column": 25,
                                  "line": 51
                                }
                              }
                            },
                            "range": [
                              1538,
                              1548
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 51
                              },
                              "start": {
                                "column": 19,
                                "line": 51
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            1538,
                            1552
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 51
                            },
                            "start": {
                              "column": 19,
                              "line": 51
                            }
                          }
                        },
                        "range": [
                          1534,
                          1552
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 51
                          },
                          "start": {
                            "column": 15,
                            "line": 51
                          }
                        }
                      },
                      "range": [
                        1527,
                        1553
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
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
                    1517,
                    1559
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 52
                    },
                    "start": {
                      "column": 70,
                      "line": 50
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
                          "column": 48,
                          "line": 50
                        },
                        "start": {
                          "column": 40,
                          "line": 50
                        }
                      },
                      "range": [
                        1487,
                        1495
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          1489,
                          1495
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 50
                          },
                          "start": {
                            "column": 42,
                            "line": 50
                          }
                        }
                      }
                    },
                    "range": [
                      1486,
                      1495
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 50
                      },
                      "start": {
                        "column": 39,
                        "line": 50
                      }
                    }
                  },
                  {
                    "type": "RestElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "rests",
                      "optional": false,
                      "range": [
                        1500,
                        1505
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 50
                        },
                        "start": {
                          "column": 53,
                          "line": 50
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 50
                        },
                        "start": {
                          "column": 58,
                          "line": 50
                        }
                      },
                      "range": [
                        1505,
                        1515
                      ],
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "range": [
                            1507,
                            1513
                          ],
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 50
                            },
                            "start": {
                              "column": 60,
                              "line": 50
                            }
                          }
                        },
                        "range": [
                          1507,
                          1515
                        ],
                        "loc": {
                          "end": {
                            "column": 68,
                            "line": 50
                          },
                          "start": {
                            "column": 60,
                            "line": 50
                          }
                        }
                      }
                    },
                    "range": [
                      1497,
                      1515
                    ],
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 50
                      },
                      "start": {
                        "column": 50,
                        "line": 50
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 52
                  },
                  "start": {
                    "column": 38,
                    "line": 50
                  }
                }
              },
              "range": [
                1451,
                1559
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
            },
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "staticFooWithOverloads",
                "optional": false,
                "range": [
                  1571,
                  1593
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 53
                  },
                  "start": {
                    "column": 11,
                    "line": 53
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "range": [
                  1593,
                  1613
                ],
                "async": false,
                "body": null,
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
                          "column": 43,
                          "line": 53
                        },
                        "start": {
                          "column": 35,
                          "line": 53
                        }
                      },
                      "range": [
                        1595,
                        1603
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          1597,
                          1603
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 53
                          },
                          "start": {
                            "column": 37,
                            "line": 53
                          }
                        }
                      }
                    },
                    "range": [
                      1594,
                      1603
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 53
                      },
                      "start": {
                        "column": 34,
                        "line": 53
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 53
                    },
                    "start": {
                      "column": 44,
                      "line": 53
                    }
                  },
                  "range": [
                    1604,
                    1612
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      1606,
                      1612
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 53
                      },
                      "start": {
                        "column": 46,
                        "line": 53
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 53
                  },
                  "start": {
                    "column": 33,
                    "line": 53
                  }
                }
              },
              "range": [
                1564,
                1613
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 53
                },
                "start": {
                  "column": 4,
                  "line": 53
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
                "name": "staticFooWithOverloads",
                "optional": false,
                "range": [
                  1625,
                  1647
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 54
                  },
                  "start": {
                    "column": 11,
                    "line": 54
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "range": [
                  1647,
                  1667
                ],
                "async": false,
                "body": null,
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
                          "column": 43,
                          "line": 54
                        },
                        "start": {
                          "column": 35,
                          "line": 54
                        }
                      },
                      "range": [
                        1649,
                        1657
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          1651,
                          1657
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 54
                          },
                          "start": {
                            "column": 37,
                            "line": 54
                          }
                        }
                      }
                    },
                    "range": [
                      1648,
                      1657
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 54
                      },
                      "start": {
                        "column": 34,
                        "line": 54
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 54
                    },
                    "start": {
                      "column": 44,
                      "line": 54
                    }
                  },
                  "range": [
                    1658,
                    1666
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      1660,
                      1666
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 54
                      },
                      "start": {
                        "column": 46,
                        "line": 54
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 54
                  },
                  "start": {
                    "column": 33,
                    "line": 54
                  }
                }
              },
              "range": [
                1618,
                1667
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 54
                },
                "start": {
                  "column": 4,
                  "line": 54
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
                "name": "staticFooWithOverloads",
                "optional": false,
                "range": [
                  1679,
                  1701
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 55
                  },
                  "start": {
                    "column": 11,
                    "line": 55
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
                  1701,
                  1740
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
                          1732,
                          1733
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
                        1725,
                        1734
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 56
                        },
                        "start": {
                          "column": 8,
                          "line": 56
                        }
                      }
                    }
                  ],
                  "range": [
                    1715,
                    1740
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 57
                    },
                    "start": {
                      "column": 47,
                      "line": 55
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
                          "column": 40,
                          "line": 55
                        },
                        "start": {
                          "column": 35,
                          "line": 55
                        }
                      },
                      "range": [
                        1703,
                        1708
                      ],
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          1705,
                          1708
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 55
                          },
                          "start": {
                            "column": 37,
                            "line": 55
                          }
                        }
                      }
                    },
                    "range": [
                      1702,
                      1708
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 55
                      },
                      "start": {
                        "column": 34,
                        "line": 55
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 55
                    },
                    "start": {
                      "column": 41,
                      "line": 55
                    }
                  },
                  "range": [
                    1709,
                    1714
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      1711,
                      1714
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 55
                      },
                      "start": {
                        "column": 43,
                        "line": 55
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 57
                  },
                  "start": {
                    "column": 33,
                    "line": 55
                  }
                }
              },
              "range": [
                1672,
                1740
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 57
                },
                "start": {
                  "column": 4,
                  "line": 55
                }
              }
            },
            {
              "type": "MethodDefinition",
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateStaticFoo",
                "optional": false,
                "range": [
                  1820,
                  1836
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 61
                  },
                  "start": {
                    "column": 19,
                    "line": 61
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
                  1836,
                  1846
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    1839,
                    1846
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 62
                    },
                    "start": {
                      "column": 38,
                      "line": 61
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
                    "line": 62
                  },
                  "start": {
                    "column": 35,
                    "line": 61
                  }
                }
              },
              "range": [
                1805,
                1846
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 62
                },
                "start": {
                  "column": 4,
                  "line": 61
                }
              }
            },
            {
              "type": "MethodDefinition",
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateStaticFooWithParameters",
                "optional": false,
                "range": [
                  1915,
                  1945
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 64
                  },
                  "start": {
                    "column": 19,
                    "line": 64
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
                  1945,
                  2067
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
                            "name": "d",
                            "optional": false,
                            "range": [
                              2055,
                              2056
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 67
                              },
                              "start": {
                                "column": 12,
                                "line": 67
                              }
                            }
                          },
                          "init": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "range": [
                              2059,
                              2060
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 67
                              },
                              "start": {
                                "column": 16,
                                "line": 67
                              }
                            }
                          },
                          "range": [
                            2055,
                            2060
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 67
                            },
                            "start": {
                              "column": 12,
                              "line": 67
                            }
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var",
                      "range": [
                        2051,
                        2061
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 67
                        },
                        "start": {
                          "column": 8,
                          "line": 67
                        }
                      }
                    }
                  ],
                  "range": [
                    2041,
                    2067
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 68
                    },
                    "start": {
                      "column": 19,
                      "line": 66
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
                          "column": 88,
                          "line": 64
                        },
                        "start": {
                          "column": 80,
                          "line": 64
                        }
                      },
                      "range": [
                        1976,
                        1984
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          1978,
                          1984
                        ],
                        "loc": {
                          "end": {
                            "column": 88,
                            "line": 64
                          },
                          "start": {
                            "column": 82,
                            "line": 64
                          }
                        }
                      }
                    },
                    "range": [
                      1975,
                      1984
                    ],
                    "loc": {
                      "end": {
                        "column": 88,
                        "line": 64
                      },
                      "start": {
                        "column": 79,
                        "line": 64
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 66
                        },
                        "start": {
                          "column": 9,
                          "line": 66
                        }
                      },
                      "range": [
                        2031,
                        2039
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          2033,
                          2039
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 66
                          },
                          "start": {
                            "column": 11,
                            "line": 66
                          }
                        }
                      }
                    },
                    "range": [
                      2030,
                      2039
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 66
                      },
                      "start": {
                        "column": 8,
                        "line": 66
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 68
                  },
                  "start": {
                    "column": 49,
                    "line": 64
                  }
                }
              },
              "range": [
                1900,
                2067
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 68
                },
                "start": {
                  "column": 4,
                  "line": 64
                }
              }
            },
            {
              "type": "MethodDefinition",
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateStaticFooWithRestParameters",
                "optional": false,
                "range": [
                  2087,
                  2121
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 69
                  },
                  "start": {
                    "column": 19,
                    "line": 69
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
                  2121,
                  2195
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            2170,
                            2171
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 70
                            },
                            "start": {
                              "column": 15,
                              "line": 70
                            }
                          }
                        },
                        "right": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Literal",
                              "raw": "\"\"",
                              "value": "",
                              "range": [
                                2185,
                                2187
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 70
                                },
                                "start": {
                                  "column": 30,
                                  "line": 70
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
                              "name": "rests",
                              "optional": false,
                              "range": [
                                2174,
                                2179
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 70
                                },
                                "start": {
                                  "column": 19,
                                  "line": 70
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "join",
                              "optional": false,
                              "range": [
                                2180,
                                2184
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 70
                                },
                                "start": {
                                  "column": 25,
                                  "line": 70
                                }
                              }
                            },
                            "range": [
                              2174,
                              2184
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 70
                              },
                              "start": {
                                "column": 19,
                                "line": 70
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            2174,
                            2188
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 70
                            },
                            "start": {
                              "column": 19,
                              "line": 70
                            }
                          }
                        },
                        "range": [
                          2170,
                          2188
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 70
                          },
                          "start": {
                            "column": 15,
                            "line": 70
                          }
                        }
                      },
                      "range": [
                        2163,
                        2189
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
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
                    2153,
                    2195
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 71
                    },
                    "start": {
                      "column": 85,
                      "line": 69
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
                          "column": 63,
                          "line": 69
                        },
                        "start": {
                          "column": 55,
                          "line": 69
                        }
                      },
                      "range": [
                        2123,
                        2131
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          2125,
                          2131
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 69
                          },
                          "start": {
                            "column": 57,
                            "line": 69
                          }
                        }
                      }
                    },
                    "range": [
                      2122,
                      2131
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 69
                      },
                      "start": {
                        "column": 54,
                        "line": 69
                      }
                    }
                  },
                  {
                    "type": "RestElement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "rests",
                      "optional": false,
                      "range": [
                        2136,
                        2141
                      ],
                      "loc": {
                        "end": {
                          "column": 73,
                          "line": 69
                        },
                        "start": {
                          "column": 68,
                          "line": 69
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 83,
                          "line": 69
                        },
                        "start": {
                          "column": 73,
                          "line": 69
                        }
                      },
                      "range": [
                        2141,
                        2151
                      ],
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "range": [
                            2143,
                            2149
                          ],
                          "loc": {
                            "end": {
                              "column": 81,
                              "line": 69
                            },
                            "start": {
                              "column": 75,
                              "line": 69
                            }
                          }
                        },
                        "range": [
                          2143,
                          2151
                        ],
                        "loc": {
                          "end": {
                            "column": 83,
                            "line": 69
                          },
                          "start": {
                            "column": 75,
                            "line": 69
                          }
                        }
                      }
                    },
                    "range": [
                      2133,
                      2151
                    ],
                    "loc": {
                      "end": {
                        "column": 83,
                        "line": 69
                      },
                      "start": {
                        "column": 65,
                        "line": 69
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 71
                  },
                  "start": {
                    "column": 53,
                    "line": 69
                  }
                }
              },
              "range": [
                2072,
                2195
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
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateStaticFooWithOverloads",
                "optional": false,
                "range": [
                  2215,
                  2244
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 72
                  },
                  "start": {
                    "column": 19,
                    "line": 72
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "range": [
                  2244,
                  2264
                ],
                "async": false,
                "body": null,
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
                          "column": 58,
                          "line": 72
                        },
                        "start": {
                          "column": 50,
                          "line": 72
                        }
                      },
                      "range": [
                        2246,
                        2254
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          2248,
                          2254
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 72
                          },
                          "start": {
                            "column": 52,
                            "line": 72
                          }
                        }
                      }
                    },
                    "range": [
                      2245,
                      2254
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 72
                      },
                      "start": {
                        "column": 49,
                        "line": 72
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 72
                    },
                    "start": {
                      "column": 59,
                      "line": 72
                    }
                  },
                  "range": [
                    2255,
                    2263
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      2257,
                      2263
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 72
                      },
                      "start": {
                        "column": 61,
                        "line": 72
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 72
                  },
                  "start": {
                    "column": 48,
                    "line": 72
                  }
                }
              },
              "range": [
                2200,
                2264
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 72
                },
                "start": {
                  "column": 4,
                  "line": 72
                }
              }
            },
            {
              "type": "MethodDefinition",
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateStaticFooWithOverloads",
                "optional": false,
                "range": [
                  2284,
                  2313
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 73
                  },
                  "start": {
                    "column": 19,
                    "line": 73
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "range": [
                  2313,
                  2333
                ],
                "async": false,
                "body": null,
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
                          "column": 58,
                          "line": 73
                        },
                        "start": {
                          "column": 50,
                          "line": 73
                        }
                      },
                      "range": [
                        2315,
                        2323
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          2317,
                          2323
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 73
                          },
                          "start": {
                            "column": 52,
                            "line": 73
                          }
                        }
                      }
                    },
                    "range": [
                      2314,
                      2323
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 73
                      },
                      "start": {
                        "column": 49,
                        "line": 73
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 73
                    },
                    "start": {
                      "column": 59,
                      "line": 73
                    }
                  },
                  "range": [
                    2324,
                    2332
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      2326,
                      2332
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 73
                      },
                      "start": {
                        "column": 61,
                        "line": 73
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 73
                  },
                  "start": {
                    "column": 48,
                    "line": 73
                  }
                }
              },
              "range": [
                2269,
                2333
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 73
                },
                "start": {
                  "column": 4,
                  "line": 73
                }
              }
            },
            {
              "type": "MethodDefinition",
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateStaticFooWithOverloads",
                "optional": false,
                "range": [
                  2353,
                  2382
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 74
                  },
                  "start": {
                    "column": 19,
                    "line": 74
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
                  2382,
                  2421
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
                          2413,
                          2414
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 75
                          },
                          "start": {
                            "column": 15,
                            "line": 75
                          }
                        }
                      },
                      "range": [
                        2406,
                        2415
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 75
                        },
                        "start": {
                          "column": 8,
                          "line": 75
                        }
                      }
                    }
                  ],
                  "range": [
                    2396,
                    2421
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 76
                    },
                    "start": {
                      "column": 62,
                      "line": 74
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
                          "column": 55,
                          "line": 74
                        },
                        "start": {
                          "column": 50,
                          "line": 74
                        }
                      },
                      "range": [
                        2384,
                        2389
                      ],
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          2386,
                          2389
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 74
                          },
                          "start": {
                            "column": 52,
                            "line": 74
                          }
                        }
                      }
                    },
                    "range": [
                      2383,
                      2389
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 74
                      },
                      "start": {
                        "column": 49,
                        "line": 74
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 74
                    },
                    "start": {
                      "column": 56,
                      "line": 74
                    }
                  },
                  "range": [
                    2390,
                    2395
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      2392,
                      2395
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 74
                      },
                      "start": {
                        "column": 58,
                        "line": 74
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 76
                  },
                  "start": {
                    "column": 48,
                    "line": 74
                  }
                }
              },
              "range": [
                2338,
                2421
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 76
                },
                "start": {
                  "column": 4,
                  "line": 74
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 77
            },
            "start": {
              "column": 16,
              "line": 1
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "c1",
          "optional": false,
          "range": [
            13,
            15
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 1
            },
            "start": {
              "column": 13,
              "line": 1
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          7,
          2423
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 77
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 77
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2425,
        2836
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            2445,
            2836
          ],
          "body": [
            {
              "type": "TSMethodSignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  2496,
                  2499
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 81
                  },
                  "start": {
                    "column": 4,
                    "line": 81
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 81
                  },
                  "start": {
                    "column": 9,
                    "line": 81
                  }
                },
                "range": [
                  2501,
                  2509
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    2503,
                    2509
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 81
                    },
                    "start": {
                      "column": 11,
                      "line": 81
                    }
                  }
                }
              },
              "static": false,
              "range": [
                2496,
                2510
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 81
                },
                "start": {
                  "column": 4,
                  "line": 81
                }
              }
            },
            {
              "type": "TSMethodSignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fooWithParameters",
                "optional": false,
                "range": [
                  2565,
                  2582
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 84
                  },
                  "start": {
                    "column": 4,
                    "line": 84
                  }
                }
              },
              "kind": "method",
              "optional": false,
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
                        "column": 60,
                        "line": 84
                      },
                      "start": {
                        "column": 52,
                        "line": 84
                      }
                    },
                    "range": [
                      2613,
                      2621
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        2615,
                        2621
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 84
                        },
                        "start": {
                          "column": 54,
                          "line": 84
                        }
                      }
                    }
                  },
                  "range": [
                    2612,
                    2621
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 84
                    },
                    "start": {
                      "column": 51,
                      "line": 84
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 86
                      },
                      "start": {
                        "column": 9,
                        "line": 86
                      }
                    },
                    "range": [
                      2668,
                      2676
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        2670,
                        2676
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 86
                        },
                        "start": {
                          "column": 11,
                          "line": 86
                        }
                      }
                    }
                  },
                  "range": [
                    2667,
                    2676
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 86
                    },
                    "start": {
                      "column": 8,
                      "line": 86
                    }
                  }
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 86
                  },
                  "start": {
                    "column": 18,
                    "line": 86
                  }
                },
                "range": [
                  2677,
                  2683
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    2679,
                    2683
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 86
                    },
                    "start": {
                      "column": 20,
                      "line": 86
                    }
                  }
                }
              },
              "static": false,
              "range": [
                2565,
                2684
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 86
                },
                "start": {
                  "column": 4,
                  "line": 84
                }
              }
            },
            {
              "type": "TSMethodSignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fooWithRestParameters",
                "optional": false,
                "range": [
                  2690,
                  2711
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 88
                  },
                  "start": {
                    "column": 4,
                    "line": 88
                  }
                }
              },
              "kind": "method",
              "optional": false,
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
                        "column": 35,
                        "line": 88
                      },
                      "start": {
                        "column": 27,
                        "line": 88
                      }
                    },
                    "range": [
                      2713,
                      2721
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        2715,
                        2721
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 88
                        },
                        "start": {
                          "column": 29,
                          "line": 88
                        }
                      }
                    }
                  },
                  "range": [
                    2712,
                    2721
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 88
                    },
                    "start": {
                      "column": 26,
                      "line": 88
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rests",
                    "optional": false,
                    "range": [
                      2726,
                      2731
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 88
                      },
                      "start": {
                        "column": 40,
                        "line": 88
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 88
                      },
                      "start": {
                        "column": 45,
                        "line": 88
                      }
                    },
                    "range": [
                      2731,
                      2741
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "range": [
                          2733,
                          2739
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 88
                          },
                          "start": {
                            "column": 47,
                            "line": 88
                          }
                        }
                      },
                      "range": [
                        2733,
                        2741
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 88
                        },
                        "start": {
                          "column": 47,
                          "line": 88
                        }
                      }
                    }
                  },
                  "range": [
                    2723,
                    2741
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 88
                    },
                    "start": {
                      "column": 37,
                      "line": 88
                    }
                  }
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 88
                  },
                  "start": {
                    "column": 56,
                    "line": 88
                  }
                },
                "range": [
                  2742,
                  2750
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    2744,
                    2750
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 88
                    },
                    "start": {
                      "column": 58,
                      "line": 88
                    }
                  }
                }
              },
              "static": false,
              "range": [
                2690,
                2751
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 88
                },
                "start": {
                  "column": 4,
                  "line": 88
                }
              }
            },
            {
              "type": "TSMethodSignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fooWithOverloads",
                "optional": false,
                "range": [
                  2757,
                  2773
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 90
                  },
                  "start": {
                    "column": 4,
                    "line": 90
                  }
                }
              },
              "kind": "method",
              "optional": false,
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
                        "column": 30,
                        "line": 90
                      },
                      "start": {
                        "column": 22,
                        "line": 90
                      }
                    },
                    "range": [
                      2775,
                      2783
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        2777,
                        2783
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 90
                        },
                        "start": {
                          "column": 24,
                          "line": 90
                        }
                      }
                    }
                  },
                  "range": [
                    2774,
                    2783
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 90
                    },
                    "start": {
                      "column": 21,
                      "line": 90
                    }
                  }
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 90
                  },
                  "start": {
                    "column": 31,
                    "line": 90
                  }
                },
                "range": [
                  2784,
                  2792
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    2786,
                    2792
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 90
                    },
                    "start": {
                      "column": 33,
                      "line": 90
                    }
                  }
                }
              },
              "static": false,
              "range": [
                2757,
                2793
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 90
                },
                "start": {
                  "column": 4,
                  "line": 90
                }
              }
            },
            {
              "type": "TSMethodSignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "fooWithOverloads",
                "optional": false,
                "range": [
                  2798,
                  2814
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 91
                  },
                  "start": {
                    "column": 4,
                    "line": 91
                  }
                }
              },
              "kind": "method",
              "optional": false,
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
                        "column": 30,
                        "line": 91
                      },
                      "start": {
                        "column": 22,
                        "line": 91
                      }
                    },
                    "range": [
                      2816,
                      2824
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        2818,
                        2824
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 91
                        },
                        "start": {
                          "column": 24,
                          "line": 91
                        }
                      }
                    }
                  },
                  "range": [
                    2815,
                    2824
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 91
                    },
                    "start": {
                      "column": 21,
                      "line": 91
                    }
                  }
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 91
                  },
                  "start": {
                    "column": 31,
                    "line": 91
                  }
                },
                "range": [
                  2825,
                  2833
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    2827,
                    2833
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 91
                    },
                    "start": {
                      "column": 33,
                      "line": 91
                    }
                  }
                }
              },
              "static": false,
              "range": [
                2798,
                2834
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 91
                },
                "start": {
                  "column": 4,
                  "line": 91
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 92
            },
            "start": {
              "column": 20,
              "line": 79
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
            2442,
            2444
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 79
            },
            "start": {
              "column": 17,
              "line": 79
            }
          }
        },
        "range": [
          2432,
          2836
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 92
          },
          "start": {
            "column": 7,
            "line": 79
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 92
        },
        "start": {
          "column": 0,
          "line": 79
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 93
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    2823
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          9,
          2416
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
              "name": "foo",
              "optional": false,
              "range": [
                67,
                70
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
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
                70,
                80
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  73,
                  80
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 4
                  },
                  "start": {
                    "column": 17,
                    "line": 3
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
                  "line": 4
                },
                "start": {
                  "column": 14,
                  "line": 3
                }
              }
            },
            "range": [
              60,
              80
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 3
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
              "name": "fooWithParameters",
              "optional": false,
              "range": [
                141,
                158
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 6
                },
                "start": {
                  "column": 11,
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
                158,
                280
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
                          "name": "d",
                          "optional": false,
                          "range": [
                            268,
                            269
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            272,
                            273
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 9
                            },
                            "start": {
                              "column": 16,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          268,
                          273
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
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
                    "kind": "var",
                    "range": [
                      264,
                      274
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
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
                  254,
                  280
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 19,
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 6
                      },
                      "start": {
                        "column": 59,
                        "line": 6
                      }
                    },
                    "range": [
                      189,
                      197
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        191,
                        197
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 6
                        },
                        "start": {
                          "column": 61,
                          "line": 6
                        }
                      }
                    }
                  },
                  "range": [
                    188,
                    197
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 6
                    },
                    "start": {
                      "column": 58,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 8
                      },
                      "start": {
                        "column": 9,
                        "line": 8
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
                          "column": 17,
                          "line": 8
                        },
                        "start": {
                          "column": 11,
                          "line": 8
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
                      "column": 17,
                      "line": 8
                    },
                    "start": {
                      "column": 8,
                      "line": 8
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 10
                },
                "start": {
                  "column": 28,
                  "line": 6
                }
              }
            },
            "range": [
              134,
              280
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 6
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
              "name": "fooWithRestParameters",
              "optional": false,
              "range": [
                292,
                313
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 11
                },
                "start": {
                  "column": 11,
                  "line": 11
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
                313,
                387
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          362,
                          363
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 12
                          },
                          "start": {
                            "column": 15,
                            "line": 12
                          }
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Literal",
                            "raw": "\"\"",
                            "value": "",
                            "range": [
                              377,
                              379
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 12
                              },
                              "start": {
                                "column": 30,
                                "line": 12
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
                            "name": "rests",
                            "optional": false,
                            "range": [
                              366,
                              371
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 12
                              },
                              "start": {
                                "column": 19,
                                "line": 12
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "join",
                            "optional": false,
                            "range": [
                              372,
                              376
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 12
                              },
                              "start": {
                                "column": 25,
                                "line": 12
                              }
                            }
                          },
                          "range": [
                            366,
                            376
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 12
                            },
                            "start": {
                              "column": 19,
                              "line": 12
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          366,
                          380
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 12
                          },
                          "start": {
                            "column": 19,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        362,
                        380
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 12
                        },
                        "start": {
                          "column": 15,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      355,
                      381
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
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
                  345,
                  387
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 13
                  },
                  "start": {
                    "column": 64,
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 11
                      },
                      "start": {
                        "column": 34,
                        "line": 11
                      }
                    },
                    "range": [
                      315,
                      323
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        317,
                        323
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 11
                        },
                        "start": {
                          "column": 36,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    314,
                    323
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 11
                    },
                    "start": {
                      "column": 33,
                      "line": 11
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rests",
                    "optional": false,
                    "range": [
                      328,
                      333
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 11
                      },
                      "start": {
                        "column": 47,
                        "line": 11
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 11
                      },
                      "start": {
                        "column": 52,
                        "line": 11
                      }
                    },
                    "range": [
                      333,
                      343
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "range": [
                          335,
                          341
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 11
                          },
                          "start": {
                            "column": 54,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        335,
                        343
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 11
                        },
                        "start": {
                          "column": 54,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    325,
                    343
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 11
                    },
                    "start": {
                      "column": 44,
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
                  "column": 32,
                  "line": 11
                }
              }
            },
            "range": [
              285,
              387
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
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fooWithOverloads",
              "optional": false,
              "range": [
                400,
                416
              ],
              "loc": {
                "end": {
                  "column": 27,
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
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                416,
                436
              ],
              "async": false,
              "body": null,
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
                        "column": 37,
                        "line": 15
                      },
                      "start": {
                        "column": 29,
                        "line": 15
                      }
                    },
                    "range": [
                      418,
                      426
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        420,
                        426
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 15
                        },
                        "start": {
                          "column": 31,
                          "line": 15
                        }
                      }
                    }
                  },
                  "range": [
                    417,
                    426
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 15
                    },
                    "start": {
                      "column": 28,
                      "line": 15
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 15
                  },
                  "start": {
                    "column": 38,
                    "line": 15
                  }
                },
                "range": [
                  427,
                  435
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    429,
                    435
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 15
                    },
                    "start": {
                      "column": 40,
                      "line": 15
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 47,
                  "line": 15
                },
                "start": {
                  "column": 27,
                  "line": 15
                }
              }
            },
            "range": [
              393,
              436
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
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
              "name": "fooWithOverloads",
              "optional": false,
              "range": [
                448,
                464
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 16
                },
                "start": {
                  "column": 11,
                  "line": 16
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                464,
                484
              ],
              "async": false,
              "body": null,
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
                        "column": 37,
                        "line": 16
                      },
                      "start": {
                        "column": 29,
                        "line": 16
                      }
                    },
                    "range": [
                      466,
                      474
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        468,
                        474
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 16
                        },
                        "start": {
                          "column": 31,
                          "line": 16
                        }
                      }
                    }
                  },
                  "range": [
                    465,
                    474
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 16
                    },
                    "start": {
                      "column": 28,
                      "line": 16
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 16
                  },
                  "start": {
                    "column": 38,
                    "line": 16
                  }
                },
                "range": [
                  475,
                  483
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    477,
                    483
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 16
                    },
                    "start": {
                      "column": 40,
                      "line": 16
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 47,
                  "line": 16
                },
                "start": {
                  "column": 27,
                  "line": 16
                }
              }
            },
            "range": [
              441,
              484
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
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
              "name": "fooWithOverloads",
              "optional": false,
              "range": [
                496,
                512
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 17
                },
                "start": {
                  "column": 11,
                  "line": 17
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
                512,
                551
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
                        543,
                        544
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 18
                        },
                        "start": {
                          "column": 15,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      536,
                      545
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
                  }
                ],
                "range": [
                  526,
                  551
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 19
                  },
                  "start": {
                    "column": 41,
                    "line": 17
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
                        "column": 34,
                        "line": 17
                      },
                      "start": {
                        "column": 29,
                        "line": 17
                      }
                    },
                    "range": [
                      514,
                      519
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        516,
                        519
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 17
                        },
                        "start": {
                          "column": 31,
                          "line": 17
                        }
                      }
                    }
                  },
                  "range": [
                    513,
                    519
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 17
                    },
                    "start": {
                      "column": 28,
                      "line": 17
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 17
                  },
                  "start": {
                    "column": 35,
                    "line": 17
                  }
                },
                "range": [
                  520,
                  525
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    522,
                    525
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 17
                    },
                    "start": {
                      "column": 37,
                      "line": 17
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 19
                },
                "start": {
                  "column": 27,
                  "line": 17
                }
              }
            },
            "range": [
              489,
              551
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateFoo",
              "optional": false,
              "range": [
                618,
                628
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 23
                },
                "start": {
                  "column": 12,
                  "line": 23
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
                628,
                638
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  631,
                  638
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 24
                  },
                  "start": {
                    "column": 25,
                    "line": 23
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
                  "line": 24
                },
                "start": {
                  "column": 22,
                  "line": 23
                }
              }
            },
            "range": [
              610,
              638
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateFooWithParameters",
              "optional": false,
              "range": [
                700,
                724
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 26
                },
                "start": {
                  "column": 12,
                  "line": 26
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
                724,
                846
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
                          "name": "d",
                          "optional": false,
                          "range": [
                            834,
                            835
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 29
                            },
                            "start": {
                              "column": 12,
                              "line": 29
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            838,
                            839
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 29
                            },
                            "start": {
                              "column": 16,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          834,
                          839
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 29
                          },
                          "start": {
                            "column": 12,
                            "line": 29
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      830,
                      840
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 29
                      },
                      "start": {
                        "column": 8,
                        "line": 29
                      }
                    }
                  }
                ],
                "range": [
                  820,
                  846
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 30
                  },
                  "start": {
                    "column": 19,
                    "line": 28
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
                        "column": 75,
                        "line": 26
                      },
                      "start": {
                        "column": 67,
                        "line": 26
                      }
                    },
                    "range": [
                      755,
                      763
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        757,
                        763
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 26
                        },
                        "start": {
                          "column": 69,
                          "line": 26
                        }
                      }
                    }
                  },
                  "range": [
                    754,
                    763
                  ],
                  "loc": {
                    "end": {
                      "column": 75,
                      "line": 26
                    },
                    "start": {
                      "column": 66,
                      "line": 26
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 28
                      },
                      "start": {
                        "column": 9,
                        "line": 28
                      }
                    },
                    "range": [
                      810,
                      818
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        812,
                        818
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 28
                        },
                        "start": {
                          "column": 11,
                          "line": 28
                        }
                      }
                    }
                  },
                  "range": [
                    809,
                    818
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 28
                    },
                    "start": {
                      "column": 8,
                      "line": 28
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 30
                },
                "start": {
                  "column": 36,
                  "line": 26
                }
              }
            },
            "range": [
              692,
              846
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateFooWithRestParameters",
              "optional": false,
              "range": [
                859,
                887
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 31
                },
                "start": {
                  "column": 12,
                  "line": 31
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
                887,
                961
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          936,
                          937
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 32
                          },
                          "start": {
                            "column": 15,
                            "line": 32
                          }
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Literal",
                            "raw": "\"\"",
                            "value": "",
                            "range": [
                              951,
                              953
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 32
                              },
                              "start": {
                                "column": 30,
                                "line": 32
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
                            "name": "rests",
                            "optional": false,
                            "range": [
                              940,
                              945
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 32
                              },
                              "start": {
                                "column": 19,
                                "line": 32
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "join",
                            "optional": false,
                            "range": [
                              946,
                              950
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 32
                              },
                              "start": {
                                "column": 25,
                                "line": 32
                              }
                            }
                          },
                          "range": [
                            940,
                            950
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 32
                            },
                            "start": {
                              "column": 19,
                              "line": 32
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          940,
                          954
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 32
                          },
                          "start": {
                            "column": 19,
                            "line": 32
                          }
                        }
                      },
                      "range": [
                        936,
                        954
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 32
                        },
                        "start": {
                          "column": 15,
                          "line": 32
                        }
                      }
                    },
                    "range": [
                      929,
                      955
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 32
                      },
                      "start": {
                        "column": 8,
                        "line": 32
                      }
                    }
                  }
                ],
                "range": [
                  919,
                  961
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 33
                  },
                  "start": {
                    "column": 72,
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 31
                      },
                      "start": {
                        "column": 42,
                        "line": 31
                      }
                    },
                    "range": [
                      889,
                      897
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        891,
                        897
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 31
                        },
                        "start": {
                          "column": 44,
                          "line": 31
                        }
                      }
                    }
                  },
                  "range": [
                    888,
                    897
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 31
                    },
                    "start": {
                      "column": 41,
                      "line": 31
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rests",
                    "optional": false,
                    "range": [
                      902,
                      907
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 31
                      },
                      "start": {
                        "column": 55,
                        "line": 31
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 31
                      },
                      "start": {
                        "column": 60,
                        "line": 31
                      }
                    },
                    "range": [
                      907,
                      917
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "range": [
                          909,
                          915
                        ],
                        "loc": {
                          "end": {
                            "column": 68,
                            "line": 31
                          },
                          "start": {
                            "column": 62,
                            "line": 31
                          }
                        }
                      },
                      "range": [
                        909,
                        917
                      ],
                      "loc": {
                        "end": {
                          "column": 70,
                          "line": 31
                        },
                        "start": {
                          "column": 62,
                          "line": 31
                        }
                      }
                    }
                  },
                  "range": [
                    899,
                    917
                  ],
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 31
                    },
                    "start": {
                      "column": 52,
                      "line": 31
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 33
                },
                "start": {
                  "column": 40,
                  "line": 31
                }
              }
            },
            "range": [
              851,
              961
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateFooWithOverloads",
              "optional": false,
              "range": [
                974,
                997
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 34
                },
                "start": {
                  "column": 12,
                  "line": 34
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                997,
                1017
              ],
              "async": false,
              "body": null,
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
                        "column": 45,
                        "line": 34
                      },
                      "start": {
                        "column": 37,
                        "line": 34
                      }
                    },
                    "range": [
                      999,
                      1007
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        1001,
                        1007
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 34
                        },
                        "start": {
                          "column": 39,
                          "line": 34
                        }
                      }
                    }
                  },
                  "range": [
                    998,
                    1007
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 34
                    },
                    "start": {
                      "column": 36,
                      "line": 34
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 34
                  },
                  "start": {
                    "column": 46,
                    "line": 34
                  }
                },
                "range": [
                  1008,
                  1016
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    1010,
                    1016
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 34
                    },
                    "start": {
                      "column": 48,
                      "line": 34
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 55,
                  "line": 34
                },
                "start": {
                  "column": 35,
                  "line": 34
                }
              }
            },
            "range": [
              966,
              1017
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateFooWithOverloads",
              "optional": false,
              "range": [
                1030,
                1053
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 35
                },
                "start": {
                  "column": 12,
                  "line": 35
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                1053,
                1073
              ],
              "async": false,
              "body": null,
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
                        "column": 45,
                        "line": 35
                      },
                      "start": {
                        "column": 37,
                        "line": 35
                      }
                    },
                    "range": [
                      1055,
                      1063
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        1057,
                        1063
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 35
                        },
                        "start": {
                          "column": 39,
                          "line": 35
                        }
                      }
                    }
                  },
                  "range": [
                    1054,
                    1063
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 35
                    },
                    "start": {
                      "column": 36,
                      "line": 35
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 35
                  },
                  "start": {
                    "column": 46,
                    "line": 35
                  }
                },
                "range": [
                  1064,
                  1072
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    1066,
                    1072
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 35
                    },
                    "start": {
                      "column": 48,
                      "line": 35
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 55,
                  "line": 35
                },
                "start": {
                  "column": 35,
                  "line": 35
                }
              }
            },
            "range": [
              1022,
              1073
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateFooWithOverloads",
              "optional": false,
              "range": [
                1086,
                1109
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 36
                },
                "start": {
                  "column": 12,
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
                1109,
                1148
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
                        1140,
                        1141
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 37
                        },
                        "start": {
                          "column": 15,
                          "line": 37
                        }
                      }
                    },
                    "range": [
                      1133,
                      1142
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
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
                  1123,
                  1148
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 38
                  },
                  "start": {
                    "column": 49,
                    "line": 36
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
                        "column": 42,
                        "line": 36
                      },
                      "start": {
                        "column": 37,
                        "line": 36
                      }
                    },
                    "range": [
                      1111,
                      1116
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1113,
                        1116
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 36
                        },
                        "start": {
                          "column": 39,
                          "line": 36
                        }
                      }
                    }
                  },
                  "range": [
                    1110,
                    1116
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 36
                    },
                    "start": {
                      "column": 36,
                      "line": 36
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 36
                  },
                  "start": {
                    "column": 43,
                    "line": 36
                  }
                },
                "range": [
                  1117,
                  1122
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    1119,
                    1122
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 36
                    },
                    "start": {
                      "column": 45,
                      "line": 36
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 38
                },
                "start": {
                  "column": 35,
                  "line": 36
                }
              }
            },
            "range": [
              1078,
              1148
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
              "name": "staticFoo",
              "optional": false,
              "range": [
                1214,
                1223
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 42
                },
                "start": {
                  "column": 11,
                  "line": 42
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
                1223,
                1233
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  1226,
                  1233
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 43
                  },
                  "start": {
                    "column": 23,
                    "line": 42
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
                  "line": 43
                },
                "start": {
                  "column": 20,
                  "line": 42
                }
              }
            },
            "range": [
              1207,
              1233
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 43
              },
              "start": {
                "column": 4,
                "line": 42
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
              "name": "staticFooWithParameters",
              "optional": false,
              "range": [
                1294,
                1317
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 45
                },
                "start": {
                  "column": 11,
                  "line": 45
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
                1317,
                1439
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
                          "name": "d",
                          "optional": false,
                          "range": [
                            1427,
                            1428
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 48
                            },
                            "start": {
                              "column": 12,
                              "line": 48
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            1431,
                            1432
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 48
                            },
                            "start": {
                              "column": 16,
                              "line": 48
                            }
                          }
                        },
                        "range": [
                          1427,
                          1432
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 48
                          },
                          "start": {
                            "column": 12,
                            "line": 48
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      1423,
                      1433
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 48
                      },
                      "start": {
                        "column": 8,
                        "line": 48
                      }
                    }
                  }
                ],
                "range": [
                  1413,
                  1439
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 49
                  },
                  "start": {
                    "column": 19,
                    "line": 47
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
                        "column": 73,
                        "line": 45
                      },
                      "start": {
                        "column": 65,
                        "line": 45
                      }
                    },
                    "range": [
                      1348,
                      1356
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        1350,
                        1356
                      ],
                      "loc": {
                        "end": {
                          "column": 73,
                          "line": 45
                        },
                        "start": {
                          "column": 67,
                          "line": 45
                        }
                      }
                    }
                  },
                  "range": [
                    1347,
                    1356
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 45
                    },
                    "start": {
                      "column": 64,
                      "line": 45
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 47
                      },
                      "start": {
                        "column": 9,
                        "line": 47
                      }
                    },
                    "range": [
                      1403,
                      1411
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        1405,
                        1411
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 47
                        },
                        "start": {
                          "column": 11,
                          "line": 47
                        }
                      }
                    }
                  },
                  "range": [
                    1402,
                    1411
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 47
                    },
                    "start": {
                      "column": 8,
                      "line": 47
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 49
                },
                "start": {
                  "column": 34,
                  "line": 45
                }
              }
            },
            "range": [
              1287,
              1439
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 45
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
              "name": "staticFooWithRestParameters",
              "optional": false,
              "range": [
                1451,
                1478
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 50
                },
                "start": {
                  "column": 11,
                  "line": 50
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
                1478,
                1552
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          1527,
                          1528
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 51
                          },
                          "start": {
                            "column": 15,
                            "line": 51
                          }
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Literal",
                            "raw": "\"\"",
                            "value": "",
                            "range": [
                              1542,
                              1544
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 51
                              },
                              "start": {
                                "column": 30,
                                "line": 51
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
                            "name": "rests",
                            "optional": false,
                            "range": [
                              1531,
                              1536
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 51
                              },
                              "start": {
                                "column": 19,
                                "line": 51
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "join",
                            "optional": false,
                            "range": [
                              1537,
                              1541
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 51
                              },
                              "start": {
                                "column": 25,
                                "line": 51
                              }
                            }
                          },
                          "range": [
                            1531,
                            1541
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 51
                            },
                            "start": {
                              "column": 19,
                              "line": 51
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          1531,
                          1545
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 51
                          },
                          "start": {
                            "column": 19,
                            "line": 51
                          }
                        }
                      },
                      "range": [
                        1527,
                        1545
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 51
                        },
                        "start": {
                          "column": 15,
                          "line": 51
                        }
                      }
                    },
                    "range": [
                      1520,
                      1546
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
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
                  1510,
                  1552
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 52
                  },
                  "start": {
                    "column": 70,
                    "line": 50
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
                        "column": 48,
                        "line": 50
                      },
                      "start": {
                        "column": 40,
                        "line": 50
                      }
                    },
                    "range": [
                      1480,
                      1488
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        1482,
                        1488
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 50
                        },
                        "start": {
                          "column": 42,
                          "line": 50
                        }
                      }
                    }
                  },
                  "range": [
                    1479,
                    1488
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 50
                    },
                    "start": {
                      "column": 39,
                      "line": 50
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rests",
                    "optional": false,
                    "range": [
                      1493,
                      1498
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 50
                      },
                      "start": {
                        "column": 53,
                        "line": 50
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 68,
                        "line": 50
                      },
                      "start": {
                        "column": 58,
                        "line": 50
                      }
                    },
                    "range": [
                      1498,
                      1508
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "range": [
                          1500,
                          1506
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 50
                          },
                          "start": {
                            "column": 60,
                            "line": 50
                          }
                        }
                      },
                      "range": [
                        1500,
                        1508
                      ],
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 50
                        },
                        "start": {
                          "column": 60,
                          "line": 50
                        }
                      }
                    }
                  },
                  "range": [
                    1490,
                    1508
                  ],
                  "loc": {
                    "end": {
                      "column": 68,
                      "line": 50
                    },
                    "start": {
                      "column": 50,
                      "line": 50
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 52
                },
                "start": {
                  "column": 38,
                  "line": 50
                }
              }
            },
            "range": [
              1444,
              1552
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
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticFooWithOverloads",
              "optional": false,
              "range": [
                1564,
                1586
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 53
                },
                "start": {
                  "column": 11,
                  "line": 53
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                1586,
                1606
              ],
              "async": false,
              "body": null,
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
                        "column": 43,
                        "line": 53
                      },
                      "start": {
                        "column": 35,
                        "line": 53
                      }
                    },
                    "range": [
                      1588,
                      1596
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        1590,
                        1596
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 53
                        },
                        "start": {
                          "column": 37,
                          "line": 53
                        }
                      }
                    }
                  },
                  "range": [
                    1587,
                    1596
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 53
                    },
                    "start": {
                      "column": 34,
                      "line": 53
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 53
                  },
                  "start": {
                    "column": 44,
                    "line": 53
                  }
                },
                "range": [
                  1597,
                  1605
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    1599,
                    1605
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 53
                    },
                    "start": {
                      "column": 46,
                      "line": 53
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 53,
                  "line": 53
                },
                "start": {
                  "column": 33,
                  "line": 53
                }
              }
            },
            "range": [
              1557,
              1606
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 53
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
              "name": "staticFooWithOverloads",
              "optional": false,
              "range": [
                1618,
                1640
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 54
                },
                "start": {
                  "column": 11,
                  "line": 54
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                1640,
                1660
              ],
              "async": false,
              "body": null,
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
                        "column": 43,
                        "line": 54
                      },
                      "start": {
                        "column": 35,
                        "line": 54
                      }
                    },
                    "range": [
                      1642,
                      1650
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        1644,
                        1650
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 54
                        },
                        "start": {
                          "column": 37,
                          "line": 54
                        }
                      }
                    }
                  },
                  "range": [
                    1641,
                    1650
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 54
                    },
                    "start": {
                      "column": 34,
                      "line": 54
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 54
                  },
                  "start": {
                    "column": 44,
                    "line": 54
                  }
                },
                "range": [
                  1651,
                  1659
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    1653,
                    1659
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 54
                    },
                    "start": {
                      "column": 46,
                      "line": 54
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 53,
                  "line": 54
                },
                "start": {
                  "column": 33,
                  "line": 54
                }
              }
            },
            "range": [
              1611,
              1660
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 54
              },
              "start": {
                "column": 4,
                "line": 54
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
              "name": "staticFooWithOverloads",
              "optional": false,
              "range": [
                1672,
                1694
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 55
                },
                "start": {
                  "column": 11,
                  "line": 55
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
                1694,
                1733
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
                        1725,
                        1726
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
                      1718,
                      1727
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 56
                      },
                      "start": {
                        "column": 8,
                        "line": 56
                      }
                    }
                  }
                ],
                "range": [
                  1708,
                  1733
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 57
                  },
                  "start": {
                    "column": 47,
                    "line": 55
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
                        "column": 40,
                        "line": 55
                      },
                      "start": {
                        "column": 35,
                        "line": 55
                      }
                    },
                    "range": [
                      1696,
                      1701
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1698,
                        1701
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 55
                        },
                        "start": {
                          "column": 37,
                          "line": 55
                        }
                      }
                    }
                  },
                  "range": [
                    1695,
                    1701
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 55
                    },
                    "start": {
                      "column": 34,
                      "line": 55
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 55
                  },
                  "start": {
                    "column": 41,
                    "line": 55
                  }
                },
                "range": [
                  1702,
                  1707
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    1704,
                    1707
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 55
                    },
                    "start": {
                      "column": 43,
                      "line": 55
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 57
                },
                "start": {
                  "column": 33,
                  "line": 55
                }
              }
            },
            "range": [
              1665,
              1733
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 57
              },
              "start": {
                "column": 4,
                "line": 55
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateStaticFoo",
              "optional": false,
              "range": [
                1813,
                1829
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 61
                },
                "start": {
                  "column": 19,
                  "line": 61
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
                1829,
                1839
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  1832,
                  1839
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 62
                  },
                  "start": {
                    "column": 38,
                    "line": 61
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
                  "line": 62
                },
                "start": {
                  "column": 35,
                  "line": 61
                }
              }
            },
            "range": [
              1798,
              1839
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 62
              },
              "start": {
                "column": 4,
                "line": 61
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateStaticFooWithParameters",
              "optional": false,
              "range": [
                1908,
                1938
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 64
                },
                "start": {
                  "column": 19,
                  "line": 64
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
                1938,
                2060
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
                          "name": "d",
                          "optional": false,
                          "range": [
                            2048,
                            2049
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 67
                            },
                            "start": {
                              "column": 12,
                              "line": 67
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            2052,
                            2053
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 67
                            },
                            "start": {
                              "column": 16,
                              "line": 67
                            }
                          }
                        },
                        "range": [
                          2048,
                          2053
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 67
                          },
                          "start": {
                            "column": 12,
                            "line": 67
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      2044,
                      2054
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 67
                      },
                      "start": {
                        "column": 8,
                        "line": 67
                      }
                    }
                  }
                ],
                "range": [
                  2034,
                  2060
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 68
                  },
                  "start": {
                    "column": 19,
                    "line": 66
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
                        "column": 88,
                        "line": 64
                      },
                      "start": {
                        "column": 80,
                        "line": 64
                      }
                    },
                    "range": [
                      1969,
                      1977
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        1971,
                        1977
                      ],
                      "loc": {
                        "end": {
                          "column": 88,
                          "line": 64
                        },
                        "start": {
                          "column": 82,
                          "line": 64
                        }
                      }
                    }
                  },
                  "range": [
                    1968,
                    1977
                  ],
                  "loc": {
                    "end": {
                      "column": 88,
                      "line": 64
                    },
                    "start": {
                      "column": 79,
                      "line": 64
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 66
                      },
                      "start": {
                        "column": 9,
                        "line": 66
                      }
                    },
                    "range": [
                      2024,
                      2032
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        2026,
                        2032
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 66
                        },
                        "start": {
                          "column": 11,
                          "line": 66
                        }
                      }
                    }
                  },
                  "range": [
                    2023,
                    2032
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 66
                    },
                    "start": {
                      "column": 8,
                      "line": 66
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 68
                },
                "start": {
                  "column": 49,
                  "line": 64
                }
              }
            },
            "range": [
              1893,
              2060
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 68
              },
              "start": {
                "column": 4,
                "line": 64
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateStaticFooWithRestParameters",
              "optional": false,
              "range": [
                2080,
                2114
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 69
                },
                "start": {
                  "column": 19,
                  "line": 69
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
                2114,
                2188
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          2163,
                          2164
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 70
                          },
                          "start": {
                            "column": 15,
                            "line": 70
                          }
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Literal",
                            "raw": "\"\"",
                            "value": "",
                            "range": [
                              2178,
                              2180
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 70
                              },
                              "start": {
                                "column": 30,
                                "line": 70
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
                            "name": "rests",
                            "optional": false,
                            "range": [
                              2167,
                              2172
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 70
                              },
                              "start": {
                                "column": 19,
                                "line": 70
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "join",
                            "optional": false,
                            "range": [
                              2173,
                              2177
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 70
                              },
                              "start": {
                                "column": 25,
                                "line": 70
                              }
                            }
                          },
                          "range": [
                            2167,
                            2177
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 70
                            },
                            "start": {
                              "column": 19,
                              "line": 70
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          2167,
                          2181
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 70
                          },
                          "start": {
                            "column": 19,
                            "line": 70
                          }
                        }
                      },
                      "range": [
                        2163,
                        2181
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 70
                        },
                        "start": {
                          "column": 15,
                          "line": 70
                        }
                      }
                    },
                    "range": [
                      2156,
                      2182
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
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
                  2146,
                  2188
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 71
                  },
                  "start": {
                    "column": 85,
                    "line": 69
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
                        "column": 63,
                        "line": 69
                      },
                      "start": {
                        "column": 55,
                        "line": 69
                      }
                    },
                    "range": [
                      2116,
                      2124
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        2118,
                        2124
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 69
                        },
                        "start": {
                          "column": 57,
                          "line": 69
                        }
                      }
                    }
                  },
                  "range": [
                    2115,
                    2124
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 69
                    },
                    "start": {
                      "column": 54,
                      "line": 69
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rests",
                    "optional": false,
                    "range": [
                      2129,
                      2134
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 69
                      },
                      "start": {
                        "column": 68,
                        "line": 69
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 83,
                        "line": 69
                      },
                      "start": {
                        "column": 73,
                        "line": 69
                      }
                    },
                    "range": [
                      2134,
                      2144
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "range": [
                          2136,
                          2142
                        ],
                        "loc": {
                          "end": {
                            "column": 81,
                            "line": 69
                          },
                          "start": {
                            "column": 75,
                            "line": 69
                          }
                        }
                      },
                      "range": [
                        2136,
                        2144
                      ],
                      "loc": {
                        "end": {
                          "column": 83,
                          "line": 69
                        },
                        "start": {
                          "column": 75,
                          "line": 69
                        }
                      }
                    }
                  },
                  "range": [
                    2126,
                    2144
                  ],
                  "loc": {
                    "end": {
                      "column": 83,
                      "line": 69
                    },
                    "start": {
                      "column": 65,
                      "line": 69
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 71
                },
                "start": {
                  "column": 53,
                  "line": 69
                }
              }
            },
            "range": [
              2065,
              2188
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
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateStaticFooWithOverloads",
              "optional": false,
              "range": [
                2208,
                2237
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 72
                },
                "start": {
                  "column": 19,
                  "line": 72
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                2237,
                2257
              ],
              "async": false,
              "body": null,
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
                        "column": 58,
                        "line": 72
                      },
                      "start": {
                        "column": 50,
                        "line": 72
                      }
                    },
                    "range": [
                      2239,
                      2247
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        2241,
                        2247
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 72
                        },
                        "start": {
                          "column": 52,
                          "line": 72
                        }
                      }
                    }
                  },
                  "range": [
                    2238,
                    2247
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 72
                    },
                    "start": {
                      "column": 49,
                      "line": 72
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 72
                  },
                  "start": {
                    "column": 59,
                    "line": 72
                  }
                },
                "range": [
                  2248,
                  2256
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    2250,
                    2256
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 72
                    },
                    "start": {
                      "column": 61,
                      "line": 72
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 68,
                  "line": 72
                },
                "start": {
                  "column": 48,
                  "line": 72
                }
              }
            },
            "range": [
              2193,
              2257
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 72
              },
              "start": {
                "column": 4,
                "line": 72
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateStaticFooWithOverloads",
              "optional": false,
              "range": [
                2277,
                2306
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 73
                },
                "start": {
                  "column": 19,
                  "line": 73
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                2306,
                2326
              ],
              "async": false,
              "body": null,
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
                        "column": 58,
                        "line": 73
                      },
                      "start": {
                        "column": 50,
                        "line": 73
                      }
                    },
                    "range": [
                      2308,
                      2316
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        2310,
                        2316
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 73
                        },
                        "start": {
                          "column": 52,
                          "line": 73
                        }
                      }
                    }
                  },
                  "range": [
                    2307,
                    2316
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 73
                    },
                    "start": {
                      "column": 49,
                      "line": 73
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 73
                  },
                  "start": {
                    "column": 59,
                    "line": 73
                  }
                },
                "range": [
                  2317,
                  2325
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    2319,
                    2325
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 73
                    },
                    "start": {
                      "column": 61,
                      "line": 73
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 68,
                  "line": 73
                },
                "start": {
                  "column": 48,
                  "line": 73
                }
              }
            },
            "range": [
              2262,
              2326
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 73
              },
              "start": {
                "column": 4,
                "line": 73
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateStaticFooWithOverloads",
              "optional": false,
              "range": [
                2346,
                2375
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 74
                },
                "start": {
                  "column": 19,
                  "line": 74
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
                2375,
                2414
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
                        2406,
                        2407
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 75
                        },
                        "start": {
                          "column": 15,
                          "line": 75
                        }
                      }
                    },
                    "range": [
                      2399,
                      2408
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 75
                      },
                      "start": {
                        "column": 8,
                        "line": 75
                      }
                    }
                  }
                ],
                "range": [
                  2389,
                  2414
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 76
                  },
                  "start": {
                    "column": 62,
                    "line": 74
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
                        "column": 55,
                        "line": 74
                      },
                      "start": {
                        "column": 50,
                        "line": 74
                      }
                    },
                    "range": [
                      2377,
                      2382
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        2379,
                        2382
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 74
                        },
                        "start": {
                          "column": 52,
                          "line": 74
                        }
                      }
                    }
                  },
                  "range": [
                    2376,
                    2382
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 74
                    },
                    "start": {
                      "column": 49,
                      "line": 74
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 74
                  },
                  "start": {
                    "column": 56,
                    "line": 74
                  }
                },
                "range": [
                  2383,
                  2388
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    2385,
                    2388
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 74
                    },
                    "start": {
                      "column": 58,
                      "line": 74
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 76
                },
                "start": {
                  "column": 48,
                  "line": 74
                }
              }
            },
            "range": [
              2331,
              2414
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 76
              },
              "start": {
                "column": 4,
                "line": 74
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 77
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c2",
        "optional": false,
        "range": [
          6,
          8
        ],
        "loc": {
          "end": {
            "column": 8,
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
        2416
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 77
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          2431,
          2822
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                2482,
                2485
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 81
                },
                "start": {
                  "column": 4,
                  "line": 81
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 81
                },
                "start": {
                  "column": 9,
                  "line": 81
                }
              },
              "range": [
                2487,
                2495
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  2489,
                  2495
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 81
                  },
                  "start": {
                    "column": 11,
                    "line": 81
                  }
                }
              }
            },
            "static": false,
            "range": [
              2482,
              2496
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 81
              },
              "start": {
                "column": 4,
                "line": 81
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fooWithParameters",
              "optional": false,
              "range": [
                2551,
                2568
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 84
                },
                "start": {
                  "column": 4,
                  "line": 84
                }
              }
            },
            "kind": "method",
            "optional": false,
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
                      "column": 60,
                      "line": 84
                    },
                    "start": {
                      "column": 52,
                      "line": 84
                    }
                  },
                  "range": [
                    2599,
                    2607
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      2601,
                      2607
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 84
                      },
                      "start": {
                        "column": 54,
                        "line": 84
                      }
                    }
                  }
                },
                "range": [
                  2598,
                  2607
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 84
                  },
                  "start": {
                    "column": 51,
                    "line": 84
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 86
                    },
                    "start": {
                      "column": 9,
                      "line": 86
                    }
                  },
                  "range": [
                    2654,
                    2662
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      2656,
                      2662
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 86
                      },
                      "start": {
                        "column": 11,
                        "line": 86
                      }
                    }
                  }
                },
                "range": [
                  2653,
                  2662
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 86
                  },
                  "start": {
                    "column": 8,
                    "line": 86
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 86
                },
                "start": {
                  "column": 18,
                  "line": 86
                }
              },
              "range": [
                2663,
                2669
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  2665,
                  2669
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 86
                  },
                  "start": {
                    "column": 20,
                    "line": 86
                  }
                }
              }
            },
            "static": false,
            "range": [
              2551,
              2670
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 86
              },
              "start": {
                "column": 4,
                "line": 84
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fooWithRestParameters",
              "optional": false,
              "range": [
                2676,
                2697
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 88
                },
                "start": {
                  "column": 4,
                  "line": 88
                }
              }
            },
            "kind": "method",
            "optional": false,
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
                      "column": 35,
                      "line": 88
                    },
                    "start": {
                      "column": 27,
                      "line": 88
                    }
                  },
                  "range": [
                    2699,
                    2707
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      2701,
                      2707
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 88
                      },
                      "start": {
                        "column": 29,
                        "line": 88
                      }
                    }
                  }
                },
                "range": [
                  2698,
                  2707
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 88
                  },
                  "start": {
                    "column": 26,
                    "line": 88
                  }
                }
              },
              {
                "type": "RestElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rests",
                  "optional": false,
                  "range": [
                    2712,
                    2717
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 88
                    },
                    "start": {
                      "column": 40,
                      "line": 88
                    }
                  }
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 88
                    },
                    "start": {
                      "column": 45,
                      "line": 88
                    }
                  },
                  "range": [
                    2717,
                    2727
                  ],
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "range": [
                        2719,
                        2725
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 88
                        },
                        "start": {
                          "column": 47,
                          "line": 88
                        }
                      }
                    },
                    "range": [
                      2719,
                      2727
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 88
                      },
                      "start": {
                        "column": 47,
                        "line": 88
                      }
                    }
                  }
                },
                "range": [
                  2709,
                  2727
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 88
                  },
                  "start": {
                    "column": 37,
                    "line": 88
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 64,
                  "line": 88
                },
                "start": {
                  "column": 56,
                  "line": 88
                }
              },
              "range": [
                2728,
                2736
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  2730,
                  2736
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 88
                  },
                  "start": {
                    "column": 58,
                    "line": 88
                  }
                }
              }
            },
            "static": false,
            "range": [
              2676,
              2737
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 88
              },
              "start": {
                "column": 4,
                "line": 88
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fooWithOverloads",
              "optional": false,
              "range": [
                2743,
                2759
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 90
                },
                "start": {
                  "column": 4,
                  "line": 90
                }
              }
            },
            "kind": "method",
            "optional": false,
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
                      "column": 30,
                      "line": 90
                    },
                    "start": {
                      "column": 22,
                      "line": 90
                    }
                  },
                  "range": [
                    2761,
                    2769
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      2763,
                      2769
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 90
                      },
                      "start": {
                        "column": 24,
                        "line": 90
                      }
                    }
                  }
                },
                "range": [
                  2760,
                  2769
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 90
                  },
                  "start": {
                    "column": 21,
                    "line": 90
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 39,
                  "line": 90
                },
                "start": {
                  "column": 31,
                  "line": 90
                }
              },
              "range": [
                2770,
                2778
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  2772,
                  2778
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 90
                  },
                  "start": {
                    "column": 33,
                    "line": 90
                  }
                }
              }
            },
            "static": false,
            "range": [
              2743,
              2779
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 90
              },
              "start": {
                "column": 4,
                "line": 90
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fooWithOverloads",
              "optional": false,
              "range": [
                2784,
                2800
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 91
                },
                "start": {
                  "column": 4,
                  "line": 91
                }
              }
            },
            "kind": "method",
            "optional": false,
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
                      "column": 30,
                      "line": 91
                    },
                    "start": {
                      "column": 22,
                      "line": 91
                    }
                  },
                  "range": [
                    2802,
                    2810
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      2804,
                      2810
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 91
                      },
                      "start": {
                        "column": 24,
                        "line": 91
                      }
                    }
                  }
                },
                "range": [
                  2801,
                  2810
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 91
                  },
                  "start": {
                    "column": 21,
                    "line": 91
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 39,
                  "line": 91
                },
                "start": {
                  "column": 31,
                  "line": 91
                }
              },
              "range": [
                2811,
                2819
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  2813,
                  2819
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 91
                  },
                  "start": {
                    "column": 33,
                    "line": 91
                  }
                }
              }
            },
            "static": false,
            "range": [
              2784,
              2820
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 91
              },
              "start": {
                "column": 4,
                "line": 91
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 92
          },
          "start": {
            "column": 13,
            "line": 79
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "range": [
          2428,
          2430
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 79
          },
          "start": {
            "column": 10,
            "line": 79
          }
        }
      },
      "range": [
        2418,
        2822
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 92
        },
        "start": {
          "column": 0,
          "line": 79
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 93
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
