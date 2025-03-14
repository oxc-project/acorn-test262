__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    450
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              20,
              319
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  41,
                  319
                ],
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "accessibility": "private",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "someNumber",
                      "optional": false,
                      "range": [
                        61,
                        71
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 5
                        },
                        "start": {
                          "column": 16,
                          "line": 5
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
                          "column": 34,
                          "line": 5
                        },
                        "start": {
                          "column": 26,
                          "line": 5
                        }
                      },
                      "range": [
                        71,
                        79
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          73,
                          79
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 5
                          },
                          "start": {
                            "column": 28,
                            "line": 5
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      53,
                      80
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 5
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
                      "name": "doSomething",
                      "optional": false,
                      "range": [
                        108,
                        119
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
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        119,
                        304
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
                                  "name": "that",
                                  "optional": false,
                                  "range": [
                                    142,
                                    146
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 20,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 11
                                    }
                                  }
                                },
                                "init": {
                                  "type": "ThisExpression",
                                  "range": [
                                    149,
                                    153
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 27,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 11
                                    }
                                  }
                                },
                                "range": [
                                  142,
                                  153
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 11
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "var",
                            "range": [
                              138,
                              154
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 11
                              },
                              "start": {
                                "column": 12,
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
                                        "name": "num",
                                        "optional": false,
                                        "range": [
                                          254,
                                          257
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 23,
                                            "line": 15
                                          },
                                          "start": {
                                            "column": 20,
                                            "line": 15
                                          }
                                        }
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "that",
                                          "optional": false,
                                          "range": [
                                            260,
                                            264
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 30,
                                              "line": 15
                                            },
                                            "start": {
                                              "column": 26,
                                              "line": 15
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "someNumber",
                                          "optional": false,
                                          "range": [
                                            265,
                                            275
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 41,
                                              "line": 15
                                            },
                                            "start": {
                                              "column": 31,
                                              "line": 15
                                            }
                                          }
                                        },
                                        "range": [
                                          260,
                                          275
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 41,
                                            "line": 15
                                          },
                                          "start": {
                                            "column": 26,
                                            "line": 15
                                          }
                                        }
                                      },
                                      "range": [
                                        254,
                                        275
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 41,
                                          "line": 15
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 15
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var",
                                  "range": [
                                    250,
                                    276
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 42,
                                      "line": 15
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 15
                                    }
                                  }
                                }
                              ],
                              "range": [
                                215,
                                292
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 17
                                },
                                "start": {
                                  "column": 37,
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
                              "name": "innerFunction",
                              "optional": false,
                              "range": [
                                199,
                                212
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 13
                                },
                                "start": {
                                  "column": 21,
                                  "line": 13
                                }
                              }
                            },
                            "params": [],
                            "range": [
                              190,
                              292
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 17
                              },
                              "start": {
                                "column": 12,
                                "line": 13
                              }
                            }
                          }
                        ],
                        "range": [
                          122,
                          304
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 19
                          },
                          "start": {
                            "column": 29,
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
                          "column": 9,
                          "line": 19
                        },
                        "start": {
                          "column": 26,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      101,
                      304
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 19
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 21
                  },
                  "start": {
                    "column": 25,
                    "line": 3
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
                  33,
                  40
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 3
                  },
                  "start": {
                    "column": 17,
                    "line": 3
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                27,
                319
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 21
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "range": [
          12,
          323
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 12,
            "line": 1
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          7,
          11
        ],
        "decorators": [],
        "name": "Test",
        "optional": false,
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "kind": "module",
      "range": [
        0,
        323
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
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
          335,
          449
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "private",
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
                350,
                351
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
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 29
                },
                "start": {
                  "column": 13,
                  "line": 29
                }
              },
              "range": [
                351,
                359
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  353,
                  359
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 29
                  },
                  "start": {
                    "column": 15,
                    "line": 29
                  }
                }
              }
            },
            "value": null,
            "range": [
              342,
              360
            ],
            "loc": {
              "end": {
                "column": 22,
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
              "name": "getX",
              "optional": false,
              "range": [
                366,
                370
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 31
                },
                "start": {
                  "column": 4,
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
                370,
                391
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
                          382,
                          386
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 31
                          },
                          "start": {
                            "column": 20,
                            "line": 31
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
                          387,
                          388
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 31
                          },
                          "start": {
                            "column": 25,
                            "line": 31
                          }
                        }
                      },
                      "range": [
                        382,
                        388
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 31
                        },
                        "start": {
                          "column": 20,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      375,
                      389
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
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
                  373,
                  391
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 31
                  },
                  "start": {
                    "column": 11,
                    "line": 31
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
                  "column": 29,
                  "line": 31
                },
                "start": {
                  "column": 8,
                  "line": 31
                }
              }
            },
            "range": [
              366,
              391
            ],
            "loc": {
              "end": {
                "column": 29,
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
              "name": "clone",
              "optional": false,
              "range": [
                397,
                402
              ],
              "loc": {
                "end": {
                  "column": 9,
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
                402,
                447
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
                            423,
                            427
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
                            428,
                            429
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
                          423,
                          429
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
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "other",
                          "optional": false,
                          "range": [
                            432,
                            437
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 34
                            },
                            "start": {
                              "column": 17,
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
                            438,
                            439
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 34
                            },
                            "start": {
                              "column": 23,
                              "line": 34
                            }
                          }
                        },
                        "range": [
                          432,
                          439
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 34
                          },
                          "start": {
                            "column": 17,
                            "line": 34
                          }
                        }
                      },
                      "range": [
                        423,
                        439
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 34
                        },
                        "start": {
                          "column": 8,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      423,
                      440
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
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
                  413,
                  447
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 36
                  },
                  "start": {
                    "column": 20,
                    "line": 33
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
                  "name": "other",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 33
                      },
                      "start": {
                        "column": 15,
                        "line": 33
                      }
                    },
                    "range": [
                      408,
                      411
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "range": [
                          410,
                          411
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 33
                          },
                          "start": {
                            "column": 17,
                            "line": 33
                          }
                        }
                      },
                      "range": [
                        410,
                        411
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 33
                        },
                        "start": {
                          "column": 17,
                          "line": 33
                        }
                      }
                    }
                  },
                  "range": [
                    403,
                    411
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
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 36
                },
                "start": {
                  "column": 9,
                  "line": 33
                }
              }
            },
            "range": [
              397,
              447
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 37
          },
          "start": {
            "column": 8,
            "line": 27
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
          333,
          334
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 27
          },
          "start": {
            "column": 6,
            "line": 27
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        327,
        449
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 37
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
      "line": 38
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
