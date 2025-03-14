__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    411
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          9,
          160
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
              "name": "name",
              "range": [
                15,
                20
              ],
              "loc": {
                "end": {
                  "column": 9,
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
                  "column": 17,
                  "line": 2
                },
                "start": {
                  "column": 9,
                  "line": 2
                }
              },
              "range": [
                20,
                28
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  22,
                  28
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 2
                  },
                  "start": {
                    "column": 11,
                    "line": 2
                  }
                }
              }
            },
            "value": null,
            "range": [
              15,
              29
            ],
            "loc": {
              "end": {
                "column": 18,
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
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "range": [
                46,
                50
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 4
                },
                "start": {
                  "column": 15,
                  "line": 4
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
                50,
                87
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
                          70,
                          74
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 5
                          },
                          "start": {
                            "column": 15,
                            "line": 5
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "name",
                        "range": [
                          75,
                          80
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 5
                          },
                          "start": {
                            "column": 20,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        70,
                        80
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 5
                        },
                        "start": {
                          "column": 15,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      63,
                      81
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
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
                  53,
                  87
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
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 19,
                  "line": 4
                }
              }
            },
            "range": [
              35,
              87
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
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "range": [
                105,
                109
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 8
                },
                "start": {
                  "column": 16,
                  "line": 8
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
                109,
                158
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
                            134,
                            138
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 9
                            },
                            "start": {
                              "column": 8,
                              "line": 9
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "name",
                          "range": [
                            139,
                            144
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 9
                            },
                            "start": {
                              "column": 13,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          134,
                          144
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
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "range": [
                          147,
                          151
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 9
                          },
                          "start": {
                            "column": 21,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        134,
                        151
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 9
                        },
                        "start": {
                          "column": 8,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      134,
                      152
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
                  124,
                  158
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 35,
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 8
                      },
                      "start": {
                        "column": 25,
                        "line": 8
                      }
                    },
                    "range": [
                      114,
                      122
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        116,
                        122
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 8
                        },
                        "start": {
                          "column": 27,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    110,
                    122
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 8
                    },
                    "start": {
                      "column": 21,
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
                  "column": 20,
                  "line": 8
                }
              }
            },
            "range": [
              93,
              158
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
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
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
        "name": "C1",
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
        160
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
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
          171,
          322
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
              "name": "name",
              "range": [
                177,
                182
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
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
                  "column": 17,
                  "line": 14
                },
                "start": {
                  "column": 9,
                  "line": 14
                }
              },
              "range": [
                182,
                190
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  184,
                  190
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 14
                  },
                  "start": {
                    "column": 11,
                    "line": 14
                  }
                }
              }
            },
            "value": null,
            "range": [
              177,
              191
            ],
            "loc": {
              "end": {
                "column": 18,
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
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "range": [
                209,
                213
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 16
                },
                "start": {
                  "column": 16,
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
                213,
                262
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
                            238,
                            242
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
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
                          "name": "name",
                          "range": [
                            243,
                            248
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 17
                            },
                            "start": {
                              "column": 13,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          238,
                          248
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
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "range": [
                          251,
                          255
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 17
                          },
                          "start": {
                            "column": 21,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        238,
                        255
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 17
                        },
                        "start": {
                          "column": 8,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      238,
                      256
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 17
                      },
                      "start": {
                        "column": 8,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  228,
                  262
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 18
                  },
                  "start": {
                    "column": 35,
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 16
                      },
                      "start": {
                        "column": 25,
                        "line": 16
                      }
                    },
                    "range": [
                      218,
                      226
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        220,
                        226
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 16
                        },
                        "start": {
                          "column": 27,
                          "line": 16
                        }
                      }
                    }
                  },
                  "range": [
                    214,
                    226
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 16
                    },
                    "start": {
                      "column": 21,
                      "line": 16
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 18
                },
                "start": {
                  "column": 20,
                  "line": 16
                }
              }
            },
            "range": [
              197,
              262
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 18
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
              "name": "name",
              "optional": false,
              "range": [
                279,
                283
              ],
              "loc": {
                "end": {
                  "column": 19,
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
                283,
                320
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
                          303,
                          307
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 21
                          },
                          "start": {
                            "column": 15,
                            "line": 21
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "name",
                        "range": [
                          308,
                          313
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 21
                          },
                          "start": {
                            "column": 20,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        303,
                        313
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 21
                        },
                        "start": {
                          "column": 15,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      296,
                      314
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
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
                  286,
                  320
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 22
                  },
                  "start": {
                    "column": 22,
                    "line": 20
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
                  "column": 19,
                  "line": 20
                }
              }
            },
            "range": [
              268,
              320
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 20
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
            "column": 9,
            "line": 13
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "range": [
          168,
          170
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 13
          },
          "start": {
            "column": 6,
            "line": 13
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        162,
        322
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
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
            "name": "c1",
            "optional": false,
            "range": [
              330,
              332
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 25
              },
              "start": {
                "column": 6,
                "line": 25
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1",
              "optional": false,
              "range": [
                339,
                341
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 25
                },
                "start": {
                  "column": 15,
                  "line": 25
                }
              }
            },
            "range": [
              335,
              343
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 25
              },
              "start": {
                "column": 11,
                "line": 25
              }
            }
          },
          "range": [
            330,
            343
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 25
            },
            "start": {
              "column": 6,
              "line": 25
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        324,
        344
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
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
            "name": "c2",
            "optional": false,
            "range": [
              351,
              353
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 26
              },
              "start": {
                "column": 6,
                "line": 26
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2",
              "optional": false,
              "range": [
                360,
                362
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 26
                },
                "start": {
                  "column": 15,
                  "line": 26
                }
              }
            },
            "range": [
              356,
              364
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 26
              },
              "start": {
                "column": 11,
                "line": 26
              }
            }
          },
          "range": [
            351,
            364
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 26
            },
            "start": {
              "column": 6,
              "line": 26
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        345,
        365
      ],
      "loc": {
        "end": {
          "column": 20,
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
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c1",
          "optional": false,
          "range": [
            380,
            382
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 30
            },
            "start": {
              "column": 0,
              "line": 30
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "range": [
            383,
            387
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 30
            },
            "start": {
              "column": 3,
              "line": 30
            }
          }
        },
        "range": [
          380,
          387
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 30
          },
          "start": {
            "column": 0,
            "line": 30
          }
        }
      },
      "range": [
        380,
        388
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c2",
          "optional": false,
          "range": [
            402,
            404
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 33
            },
            "start": {
              "column": 0,
              "line": 33
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "range": [
            405,
            409
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 33
            },
            "start": {
              "column": 3,
              "line": 33
            }
          }
        },
        "range": [
          402,
          409
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 33
          },
          "start": {
            "column": 0,
            "line": 33
          }
        }
      },
      "range": [
        402,
        410
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 34
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
