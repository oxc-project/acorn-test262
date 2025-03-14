__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    800
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExpressionStatement",
            "directive": "use strict",
            "expression": {
              "type": "Literal",
              "raw": "\"use strict\"",
              "value": "use strict",
              "range": [
                21,
                33
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "range": [
              21,
              34
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 2
              },
              "start": {
                "column": 4,
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
                54,
                200
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "range": [
                      64,
                      75
                    ],
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 5
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
                      75,
                      112
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        101,
                        112
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 6
                        },
                        "start": {
                          "column": 45,
                          "line": 5
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
                          "name": "greeting",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 5
                              },
                              "start": {
                                "column": 35,
                                "line": 5
                              }
                            },
                            "range": [
                              91,
                              99
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                93,
                                99
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 5
                                },
                                "start": {
                                  "column": 37,
                                  "line": 5
                                }
                              }
                            }
                          },
                          "range": [
                            83,
                            99
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 5
                            },
                            "start": {
                              "column": 27,
                              "line": 5
                            }
                          }
                        },
                        "readonly": false,
                        "static": false,
                        "range": [
                          76,
                          99
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 5
                          },
                          "start": {
                            "column": 20,
                            "line": 5
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 6
                      },
                      "start": {
                        "column": 19,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    64,
                    112
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 6
                    },
                    "start": {
                      "column": 8,
                      "line": 5
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
                    "name": "greet",
                    "optional": false,
                    "range": [
                      122,
                      127
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
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
                      127,
                      194
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
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Literal",
                                "raw": "\"<h1>\"",
                                "value": "<h1>",
                                "range": [
                                  151,
                                  157
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 9
                                  }
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "range": [
                                    160,
                                    164
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 32,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 9
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "greeting",
                                  "optional": false,
                                  "range": [
                                    165,
                                    173
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 41,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 33,
                                      "line": 9
                                    }
                                  }
                                },
                                "range": [
                                  160,
                                  173
                                ],
                                "loc": {
                                  "end": {
                                    "column": 41,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 28,
                                    "line": 9
                                  }
                                }
                              },
                              "range": [
                                151,
                                173
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 9
                                },
                                "start": {
                                  "column": 19,
                                  "line": 9
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "raw": "\"</h1>\"",
                              "value": "</h1>",
                              "range": [
                                176,
                                183
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 9
                                },
                                "start": {
                                  "column": 44,
                                  "line": 9
                                }
                              }
                            },
                            "range": [
                              151,
                              183
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 9
                              },
                              "start": {
                                "column": 19,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            144,
                            184
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 9
                            },
                            "start": {
                              "column": 12,
                              "line": 9
                            }
                          }
                        }
                      ],
                      "range": [
                        130,
                        194
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 10
                        },
                        "start": {
                          "column": 16,
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
                        "column": 9,
                        "line": 10
                      },
                      "start": {
                        "column": 13,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    122,
                    194
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 10
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
                  "line": 11
                },
                "start": {
                  "column": 18,
                  "line": 4
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Greeter",
              "optional": false,
              "range": [
                46,
                53
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 4
                },
                "start": {
                  "column": 10,
                  "line": 4
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              40,
              200
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 4
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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "NewExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "greeting",
                        "optional": false,
                        "range": [
                          284,
                          292
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 15
                          },
                          "start": {
                            "column": 27,
                            "line": 15
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Greeter",
                      "optional": false,
                      "range": [
                        276,
                        283
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 15
                        },
                        "start": {
                          "column": 19,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      272,
                      293
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 15
                      },
                      "start": {
                        "column": 15,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    265,
                    294
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
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
                255,
                300
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 16
                },
                "start": {
                  "column": 52,
                  "line": 14
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                216,
                219
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 14
                },
                "start": {
                  "column": 13,
                  "line": 14
                }
              }
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "greeting",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 14
                    },
                    "start": {
                      "column": 25,
                      "line": 14
                    }
                  },
                  "range": [
                    228,
                    236
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      230,
                      236
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 14
                      },
                      "start": {
                        "column": 27,
                        "line": 14
                      }
                    }
                  }
                },
                "range": [
                  220,
                  236
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 14
                  },
                  "start": {
                    "column": 17,
                    "line": 14
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 51,
                  "line": 14
                },
                "start": {
                  "column": 34,
                  "line": 14
                }
              },
              "range": [
                237,
                254
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        239,
                        242
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 14
                        },
                        "start": {
                          "column": 36,
                          "line": 14
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "range": [
                        243,
                        246
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 14
                        },
                        "start": {
                          "column": 40,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      239,
                      246
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 14
                      },
                      "start": {
                        "column": 36,
                        "line": 14
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Greeter",
                    "optional": false,
                    "range": [
                      247,
                      254
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 14
                      },
                      "start": {
                        "column": 44,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    239,
                    254
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 14
                    },
                    "start": {
                      "column": 36,
                      "line": 14
                    }
                  }
                },
                "range": [
                  239,
                  254
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 14
                  },
                  "start": {
                    "column": 36,
                    "line": 14
                  }
                }
              }
            },
            "range": [
              207,
              300
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "greeter",
                  "optional": false,
                  "range": [
                    310,
                    317
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
                "init": {
                  "type": "NewExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "\"Hello, world!\"",
                      "value": "Hello, world!",
                      "range": [
                        332,
                        347
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 18
                        },
                        "start": {
                          "column": 30,
                          "line": 18
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Greeter",
                    "optional": false,
                    "range": [
                      324,
                      331
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 18
                      },
                      "start": {
                        "column": 22,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    320,
                    348
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 18
                    },
                    "start": {
                      "column": 18,
                      "line": 18
                    }
                  }
                },
                "range": [
                  310,
                  348
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 18
                  },
                  "start": {
                    "column": 8,
                    "line": 18
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              306,
              349
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
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
                  "name": "str",
                  "optional": false,
                  "range": [
                    358,
                    361
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 19
                    },
                    "start": {
                      "column": 8,
                      "line": 19
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "greeter",
                      "optional": false,
                      "range": [
                        364,
                        371
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
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "greet",
                      "optional": false,
                      "range": [
                        372,
                        377
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 19
                        },
                        "start": {
                          "column": 22,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      364,
                      377
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 19
                      },
                      "start": {
                        "column": 14,
                        "line": 19
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    364,
                    379
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 19
                    },
                    "start": {
                      "column": 14,
                      "line": 19
                    }
                  }
                },
                "range": [
                  358,
                  379
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
            "declare": false,
            "kind": "var",
            "range": [
              354,
              380
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
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
                        "name": "greeters",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 22
                            },
                            "start": {
                              "column": 20,
                              "line": 22
                            }
                          },
                          "range": [
                            468,
                            479
                          ],
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Greeter",
                                "optional": false,
                                "range": [
                                  470,
                                  477
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 22
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 22
                                  }
                                }
                              },
                              "range": [
                                470,
                                477
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 22
                                },
                                "start": {
                                  "column": 22,
                                  "line": 22
                                }
                              }
                            },
                            "range": [
                              470,
                              479
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 22
                              },
                              "start": {
                                "column": 22,
                                "line": 22
                              }
                            }
                          }
                        },
                        "range": [
                          460,
                          479
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 22
                          },
                          "start": {
                            "column": 12,
                            "line": 22
                          }
                        }
                      },
                      "init": {
                        "type": "ArrayExpression",
                        "elements": [],
                        "range": [
                          482,
                          484
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 22
                          },
                          "start": {
                            "column": 34,
                            "line": 22
                          }
                        }
                      },
                      "range": [
                        460,
                        484
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 22
                        },
                        "start": {
                          "column": 12,
                          "line": 22
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    456,
                    485
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "greeters",
                        "optional": false,
                        "range": [
                          494,
                          502
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
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
                        "raw": "0",
                        "value": 0,
                        "range": [
                          503,
                          504
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 23
                          },
                          "start": {
                            "column": 17,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        494,
                        505
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 23
                        },
                        "start": {
                          "column": 8,
                          "line": 23
                        }
                      }
                    },
                    "right": {
                      "type": "NewExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "greeting",
                          "optional": false,
                          "range": [
                            520,
                            528
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 23
                            },
                            "start": {
                              "column": 34,
                              "line": 23
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Greeter",
                        "optional": false,
                        "range": [
                          512,
                          519
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 23
                          },
                          "start": {
                            "column": 26,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        508,
                        529
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 23
                        },
                        "start": {
                          "column": 22,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      494,
                      529
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 23
                      },
                      "start": {
                        "column": 8,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    494,
                    530
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 23
                    },
                    "start": {
                      "column": 8,
                      "line": 23
                    }
                  }
                },
                {
                  "type": "ForStatement",
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "NewExpression",
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "restGreetings",
                                    "optional": false,
                                    "range": [
                                      626,
                                      639
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 51,
                                        "line": 25
                                      },
                                      "start": {
                                        "column": 38,
                                        "line": 25
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "i",
                                    "optional": false,
                                    "range": [
                                      640,
                                      641
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 53,
                                        "line": 25
                                      },
                                      "start": {
                                        "column": 52,
                                        "line": 25
                                      }
                                    }
                                  },
                                  "range": [
                                    626,
                                    642
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 54,
                                      "line": 25
                                    },
                                    "start": {
                                      "column": 38,
                                      "line": 25
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Greeter",
                                "optional": false,
                                "range": [
                                  618,
                                  625
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 25
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 25
                                  }
                                }
                              },
                              "range": [
                                614,
                                643
                              ],
                              "loc": {
                                "end": {
                                  "column": 55,
                                  "line": 25
                                },
                                "start": {
                                  "column": 26,
                                  "line": 25
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
                              "name": "greeters",
                              "optional": false,
                              "range": [
                                600,
                                608
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 25
                                },
                                "start": {
                                  "column": 12,
                                  "line": 25
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "push",
                              "optional": false,
                              "range": [
                                609,
                                613
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 25
                                },
                                "start": {
                                  "column": 21,
                                  "line": 25
                                }
                              }
                            },
                            "range": [
                              600,
                              613
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 25
                              },
                              "start": {
                                "column": 12,
                                "line": 25
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            600,
                            644
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 25
                            },
                            "start": {
                              "column": 12,
                              "line": 25
                            }
                          }
                        },
                        "range": [
                          600,
                          645
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 25
                          },
                          "start": {
                            "column": 12,
                            "line": 25
                          }
                        }
                      }
                    ],
                    "range": [
                      586,
                      655
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 26
                      },
                      "start": {
                        "column": 55,
                        "line": 24
                      }
                    }
                  },
                  "init": {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "range": [
                            548,
                            549
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 24
                            },
                            "start": {
                              "column": 17,
                              "line": 24
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            552,
                            553
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 24
                            },
                            "start": {
                              "column": 21,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          548,
                          553
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 24
                          },
                          "start": {
                            "column": 17,
                            "line": 24
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      544,
                      553
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 24
                      },
                      "start": {
                        "column": 13,
                        "line": 24
                      }
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "<",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "range": [
                        555,
                        556
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 24
                        },
                        "start": {
                          "column": 24,
                          "line": 24
                        }
                      }
                    },
                    "right": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "restGreetings",
                        "optional": false,
                        "range": [
                          559,
                          572
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 24
                          },
                          "start": {
                            "column": 28,
                            "line": 24
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "range": [
                          573,
                          579
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 24
                          },
                          "start": {
                            "column": 42,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        559,
                        579
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 24
                        },
                        "start": {
                          "column": 28,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      555,
                      579
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 24
                      },
                      "start": {
                        "column": 24,
                        "line": 24
                      }
                    }
                  },
                  "update": {
                    "type": "UpdateExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "range": [
                        581,
                        582
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 24
                        },
                        "start": {
                          "column": 50,
                          "line": 24
                        }
                      }
                    },
                    "operator": "++",
                    "prefix": false,
                    "range": [
                      581,
                      584
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 24
                      },
                      "start": {
                        "column": 50,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    539,
                    655
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 26
                    },
                    "start": {
                      "column": 8,
                      "line": 24
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "greeters",
                    "optional": false,
                    "range": [
                      672,
                      680
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 28
                      },
                      "start": {
                        "column": 15,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    665,
                    681
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 28
                    },
                    "start": {
                      "column": 8,
                      "line": 28
                    }
                  }
                }
              ],
              "range": [
                446,
                687
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 29
                },
                "start": {
                  "column": 64,
                  "line": 21
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "range": [
                395,
                399
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 21
                },
                "start": {
                  "column": 13,
                  "line": 21
                }
              }
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "greeting",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 21
                    },
                    "start": {
                      "column": 26,
                      "line": 21
                    }
                  },
                  "range": [
                    408,
                    416
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      410,
                      416
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 21
                      },
                      "start": {
                        "column": 28,
                        "line": 21
                      }
                    }
                  }
                },
                "range": [
                  400,
                  416
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 21
                  },
                  "start": {
                    "column": 18,
                    "line": 21
                  }
                }
              },
              {
                "type": "RestElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "restGreetings",
                  "optional": false,
                  "range": [
                    421,
                    434
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 21
                    },
                    "start": {
                      "column": 39,
                      "line": 21
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
                      "line": 21
                    },
                    "start": {
                      "column": 52,
                      "line": 21
                    }
                  },
                  "range": [
                    434,
                    444
                  ],
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "range": [
                        436,
                        442
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 21
                        },
                        "start": {
                          "column": 54,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      436,
                      444
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 21
                      },
                      "start": {
                        "column": 54,
                        "line": 21
                      }
                    }
                  }
                },
                "range": [
                  418,
                  444
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 21
                  },
                  "start": {
                    "column": 36,
                    "line": 21
                  }
                }
              }
            ],
            "range": [
              386,
              687
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 29
              },
              "start": {
                "column": 4,
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
                    697,
                    698
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
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "\"Hello\"",
                      "value": "Hello",
                      "range": [
                        706,
                        713
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 31
                        },
                        "start": {
                          "column": 17,
                          "line": 31
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "\"World\"",
                      "value": "World",
                      "range": [
                        715,
                        722
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 31
                        },
                        "start": {
                          "column": 26,
                          "line": 31
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "\"!\"",
                      "value": "!",
                      "range": [
                        724,
                        727
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 31
                        },
                        "start": {
                          "column": 35,
                          "line": 31
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "range": [
                      701,
                      705
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 31
                      },
                      "start": {
                        "column": 12,
                        "line": 31
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    701,
                    728
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 31
                    },
                    "start": {
                      "column": 12,
                      "line": 31
                    }
                  }
                },
                "range": [
                  697,
                  728
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 31
                  },
                  "start": {
                    "column": 8,
                    "line": 31
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              693,
              729
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          },
          {
            "type": "ForStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "range": [
                            779,
                            780
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
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
                          "name": "j",
                          "optional": false,
                          "range": [
                            781,
                            782
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 33
                            },
                            "start": {
                              "column": 10,
                              "line": 33
                            }
                          }
                        },
                        "range": [
                          779,
                          783
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
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
                        "name": "greet",
                        "optional": false,
                        "range": [
                          784,
                          789
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 33
                          },
                          "start": {
                            "column": 13,
                            "line": 33
                          }
                        }
                      },
                      "range": [
                        779,
                        789
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 33
                        },
                        "start": {
                          "column": 8,
                          "line": 33
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      779,
                      791
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
                    779,
                    792
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
                }
              ],
              "range": [
                769,
                798
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 34
                },
                "start": {
                  "column": 39,
                  "line": 32
                }
              }
            },
            "init": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "j",
                    "optional": false,
                    "range": [
                      743,
                      744
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 32
                      },
                      "start": {
                        "column": 13,
                        "line": 32
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      747,
                      748
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 32
                      },
                      "start": {
                        "column": 17,
                        "line": 32
                      }
                    }
                  },
                  "range": [
                    743,
                    748
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 32
                    },
                    "start": {
                      "column": 13,
                      "line": 32
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                739,
                748
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 32
                },
                "start": {
                  "column": 9,
                  "line": 32
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "j",
                "optional": false,
                "range": [
                  750,
                  751
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 32
                  },
                  "start": {
                    "column": 20,
                    "line": 32
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    754,
                    755
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 32
                    },
                    "start": {
                      "column": 24,
                      "line": 32
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "range": [
                    756,
                    762
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 32
                    },
                    "start": {
                      "column": 26,
                      "line": 32
                    }
                  }
                },
                "range": [
                  754,
                  762
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 32
                  },
                  "start": {
                    "column": 24,
                    "line": 32
                  }
                }
              },
              "range": [
                750,
                762
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 32
                },
                "start": {
                  "column": 20,
                  "line": 32
                }
              }
            },
            "update": {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "j",
                "optional": false,
                "range": [
                  764,
                  765
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 32
                  },
                  "start": {
                    "column": 34,
                    "line": 32
                  }
                }
              },
              "operator": "++",
              "prefix": false,
              "range": [
                764,
                767
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 32
                },
                "start": {
                  "column": 34,
                  "line": 32
                }
              }
            },
            "range": [
              734,
              798
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          }
        ],
        "range": [
          15,
          800
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "range": [
          7,
          14
        ],
        "left": {
          "type": "Identifier",
          "range": [
            7,
            10
          ],
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "loc": {
            "end": {
              "column": 10,
              "line": 1
            },
            "start": {
              "column": 7,
              "line": 1
            }
          }
        },
        "right": {
          "type": "Identifier",
          "range": [
            11,
            14
          ],
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "loc": {
            "end": {
              "column": 14,
              "line": 1
            },
            "start": {
              "column": 11,
              "line": 1
            }
          }
        },
        "loc": {
          "end": {
            "column": 14,
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
        800
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 35
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
