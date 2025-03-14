__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    886
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          11
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 11,
            "line": 1
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
        11
      ],
      "loc": {
        "end": {
          "column": 11,
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
          30,
          33
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 21,
            "line": 2
          },
          "start": {
            "column": 18,
            "line": 2
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
          18,
          19
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 2
          },
          "start": {
            "column": 6,
            "line": 2
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
          28,
          29
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 2
          },
          "start": {
            "column": 16,
            "line": 2
          }
        }
      },
      "range": [
        12,
        33
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          76,
          886
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
              "name": "InferredGetterFromSetterAnnotation",
              "optional": false,
              "range": [
                94,
                128
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 6
                },
                "start": {
                  "column": 15,
                  "line": 6
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
                128,
                138
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  135,
                  138
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 6
                  },
                  "start": {
                    "column": 56,
                    "line": 6
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
                        "column": 54,
                        "line": 6
                      },
                      "start": {
                        "column": 51,
                        "line": 6
                      }
                    },
                    "range": [
                      130,
                      133
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          132,
                          133
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 6
                          },
                          "start": {
                            "column": 53,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        132,
                        133
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 6
                        },
                        "start": {
                          "column": 53,
                          "line": 6
                        }
                      }
                    }
                  },
                  "range": [
                    129,
                    133
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 6
                    },
                    "start": {
                      "column": 50,
                      "line": 6
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 6
                },
                "start": {
                  "column": 49,
                  "line": 6
                }
              }
            },
            "range": [
              83,
              138
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 6
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
              "name": "InferredGetterFromSetterAnnotation",
              "optional": false,
              "range": [
                154,
                188
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 7
                },
                "start": {
                  "column": 15,
                  "line": 7
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
                188,
                210
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "range": [
                          204,
                          205
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 7
                          },
                          "start": {
                            "column": 65,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        200,
                        207
                      ],
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 7
                        },
                        "start": {
                          "column": 61,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      193,
                      208
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 7
                      },
                      "start": {
                        "column": 54,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  191,
                  210
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 7
                  },
                  "start": {
                    "column": 52,
                    "line": 7
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
                  "column": 71,
                  "line": 7
                },
                "start": {
                  "column": 49,
                  "line": 7
                }
              }
            },
            "range": [
              143,
              210
            ],
            "loc": {
              "end": {
                "column": 71,
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
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "InferredGetterFromSetterAnnotation_GetterFirst",
              "optional": false,
              "range": [
                227,
                273
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 9
                },
                "start": {
                  "column": 15,
                  "line": 9
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
                273,
                295
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "range": [
                          289,
                          290
                        ],
                        "loc": {
                          "end": {
                            "column": 78,
                            "line": 9
                          },
                          "start": {
                            "column": 77,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        285,
                        292
                      ],
                      "loc": {
                        "end": {
                          "column": 80,
                          "line": 9
                        },
                        "start": {
                          "column": 73,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      278,
                      293
                    ],
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 9
                      },
                      "start": {
                        "column": 66,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  276,
                  295
                ],
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 9
                  },
                  "start": {
                    "column": 64,
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
                  "column": 83,
                  "line": 9
                },
                "start": {
                  "column": 61,
                  "line": 9
                }
              }
            },
            "range": [
              216,
              295
            ],
            "loc": {
              "end": {
                "column": 83,
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
              "name": "InferredGetterFromSetterAnnotation_GetterFirst",
              "optional": false,
              "range": [
                311,
                357
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 10
                },
                "start": {
                  "column": 15,
                  "line": 10
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
                357,
                367
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  364,
                  367
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 10
                  },
                  "start": {
                    "column": 68,
                    "line": 10
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
                        "column": 66,
                        "line": 10
                      },
                      "start": {
                        "column": 63,
                        "line": 10
                      }
                    },
                    "range": [
                      359,
                      362
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          361,
                          362
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 10
                          },
                          "start": {
                            "column": 65,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        361,
                        362
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 10
                        },
                        "start": {
                          "column": 65,
                          "line": 10
                        }
                      }
                    }
                  },
                  "range": [
                    358,
                    362
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 10
                    },
                    "start": {
                      "column": 62,
                      "line": 10
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 10
                },
                "start": {
                  "column": 61,
                  "line": 10
                }
              }
            },
            "range": [
              300,
              367
            ],
            "loc": {
              "end": {
                "column": 71,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
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
              "name": "InferredFromGetter",
              "optional": false,
              "range": [
                389,
                407
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 13
                },
                "start": {
                  "column": 15,
                  "line": 13
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
                407,
                429
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "range": [
                          423,
                          424
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 13
                          },
                          "start": {
                            "column": 49,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        419,
                        426
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 13
                        },
                        "start": {
                          "column": 45,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      412,
                      427
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 13
                      },
                      "start": {
                        "column": 38,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  410,
                  429
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 13
                  },
                  "start": {
                    "column": 36,
                    "line": 13
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
                  "column": 55,
                  "line": 13
                },
                "start": {
                  "column": 33,
                  "line": 13
                }
              }
            },
            "range": [
              378,
              429
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
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
              "name": "InferredFromGetter",
              "optional": false,
              "range": [
                445,
                463
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 14
                },
                "start": {
                  "column": 15,
                  "line": 14
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
                463,
                470
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  467,
                  470
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 14
                  },
                  "start": {
                    "column": 37,
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
                  "name": "a",
                  "optional": false,
                  "range": [
                    464,
                    465
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 14
                    },
                    "start": {
                      "column": 34,
                      "line": 14
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 14
                },
                "start": {
                  "column": 33,
                  "line": 14
                }
              }
            },
            "range": [
              434,
              470
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
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
              "name": "InferredFromGetter_SetterFirst",
              "optional": false,
              "range": [
                487,
                517
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 16
                },
                "start": {
                  "column": 15,
                  "line": 16
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
                517,
                524
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  521,
                  524
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 16
                  },
                  "start": {
                    "column": 49,
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
                  "name": "a",
                  "optional": false,
                  "range": [
                    518,
                    519
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 16
                    },
                    "start": {
                      "column": 46,
                      "line": 16
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 16
                },
                "start": {
                  "column": 45,
                  "line": 16
                }
              }
            },
            "range": [
              476,
              524
            ],
            "loc": {
              "end": {
                "column": 52,
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
              "name": "InferredFromGetter_SetterFirst",
              "optional": false,
              "range": [
                540,
                570
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 17
                },
                "start": {
                  "column": 15,
                  "line": 17
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
                570,
                592
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "range": [
                          586,
                          587
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 17
                          },
                          "start": {
                            "column": 61,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        582,
                        589
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 17
                        },
                        "start": {
                          "column": 57,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      575,
                      590
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 17
                      },
                      "start": {
                        "column": 50,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  573,
                  592
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 17
                  },
                  "start": {
                    "column": 48,
                    "line": 17
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
                  "column": 67,
                  "line": 17
                },
                "start": {
                  "column": 45,
                  "line": 17
                }
              }
            },
            "range": [
              529,
              592
            ],
            "loc": {
              "end": {
                "column": 67,
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
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "InferredSetterFromGetterAnnotation",
              "optional": false,
              "range": [
                609,
                643
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 19
                },
                "start": {
                  "column": 15,
                  "line": 19
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
                643,
                650
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  647,
                  650
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 19
                  },
                  "start": {
                    "column": 53,
                    "line": 19
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
                  "range": [
                    644,
                    645
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 19
                    },
                    "start": {
                      "column": 50,
                      "line": 19
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 19
                },
                "start": {
                  "column": 49,
                  "line": 19
                }
              }
            },
            "range": [
              598,
              650
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
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
              "name": "InferredSetterFromGetterAnnotation",
              "optional": false,
              "range": [
                666,
                700
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 20
                },
                "start": {
                  "column": 15,
                  "line": 20
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
                700,
                726
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "range": [
                          720,
                          721
                        ],
                        "loc": {
                          "end": {
                            "column": 70,
                            "line": 20
                          },
                          "start": {
                            "column": 69,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        716,
                        723
                      ],
                      "loc": {
                        "end": {
                          "column": 72,
                          "line": 20
                        },
                        "start": {
                          "column": 65,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      709,
                      724
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 20
                      },
                      "start": {
                        "column": 58,
                        "line": 20
                      }
                    }
                  }
                ],
                "range": [
                  707,
                  726
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 20
                  },
                  "start": {
                    "column": 56,
                    "line": 20
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
                    "column": 55,
                    "line": 20
                  },
                  "start": {
                    "column": 52,
                    "line": 20
                  }
                },
                "range": [
                  703,
                  706
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      705,
                      706
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 20
                      },
                      "start": {
                        "column": 54,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    705,
                    706
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 20
                    },
                    "start": {
                      "column": 54,
                      "line": 20
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 75,
                  "line": 20
                },
                "start": {
                  "column": 49,
                  "line": 20
                }
              }
            },
            "range": [
              655,
              726
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
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
              "name": "InferredSetterFromGetterAnnotation_GetterFirst",
              "optional": false,
              "range": [
                743,
                789
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 22
                },
                "start": {
                  "column": 15,
                  "line": 22
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
                789,
                815
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "range": [
                          809,
                          810
                        ],
                        "loc": {
                          "end": {
                            "column": 82,
                            "line": 22
                          },
                          "start": {
                            "column": 81,
                            "line": 22
                          }
                        }
                      },
                      "range": [
                        805,
                        812
                      ],
                      "loc": {
                        "end": {
                          "column": 84,
                          "line": 22
                        },
                        "start": {
                          "column": 77,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      798,
                      813
                    ],
                    "loc": {
                      "end": {
                        "column": 85,
                        "line": 22
                      },
                      "start": {
                        "column": 70,
                        "line": 22
                      }
                    }
                  }
                ],
                "range": [
                  796,
                  815
                ],
                "loc": {
                  "end": {
                    "column": 87,
                    "line": 22
                  },
                  "start": {
                    "column": 68,
                    "line": 22
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
                    "column": 67,
                    "line": 22
                  },
                  "start": {
                    "column": 64,
                    "line": 22
                  }
                },
                "range": [
                  792,
                  795
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      794,
                      795
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 22
                      },
                      "start": {
                        "column": 66,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    794,
                    795
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 22
                    },
                    "start": {
                      "column": 66,
                      "line": 22
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 87,
                  "line": 22
                },
                "start": {
                  "column": 61,
                  "line": 22
                }
              }
            },
            "range": [
              732,
              815
            ],
            "loc": {
              "end": {
                "column": 87,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
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
              "name": "InferredSetterFromGetterAnnotation_GetterFirst",
              "optional": false,
              "range": [
                831,
                877
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 23
                },
                "start": {
                  "column": 15,
                  "line": 23
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
                877,
                884
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  881,
                  884
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 23
                  },
                  "start": {
                    "column": 65,
                    "line": 23
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
                  "range": [
                    878,
                    879
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 23
                    },
                    "start": {
                      "column": 62,
                      "line": 23
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 23
                },
                "start": {
                  "column": 61,
                  "line": 23
                }
              }
            },
            "range": [
              820,
              884
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 41,
            "line": 4
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LanguageSpec_section_4_5_inference",
        "optional": false,
        "range": [
          41,
          75
        ],
        "loc": {
          "end": {
            "column": 40,
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
        35,
        886
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
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
