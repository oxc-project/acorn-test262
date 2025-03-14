__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    475
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
              21,
              78
            ],
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "body": {
                "type": "TSInterfaceBody",
                "range": [
                  49,
                  78
                ],
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Clone",
                      "optional": false,
                      "range": [
                        59,
                        64
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 3
                        },
                        "start": {
                          "column": 8,
                          "line": 3
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
                          "column": 20,
                          "line": 3
                        },
                        "start": {
                          "column": 15,
                          "line": 3
                        }
                      },
                      "range": [
                        66,
                        71
                      ],
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          68,
                          71
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 3
                          },
                          "start": {
                            "column": 17,
                            "line": 3
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      59,
                      72
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 3
                      },
                      "start": {
                        "column": 8,
                        "line": 3
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 4
                  },
                  "start": {
                    "column": 32,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ICloneable",
                "optional": false,
                "range": [
                  38,
                  48
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 2
                  },
                  "start": {
                    "column": 21,
                    "line": 2
                  }
                }
              },
              "range": [
                28,
                78
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "range": [
          15,
          80
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
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
        "type": "Identifier",
        "range": [
          7,
          14
        ],
        "decorators": [],
        "name": "EndGate",
        "optional": false,
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
        80
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
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
          126,
          129
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 47,
            "line": 7
          },
          "start": {
            "column": 44,
            "line": 7
          }
        }
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "EndGate",
              "optional": false,
              "range": [
                107,
                114
              ],
              "loc": {
                "end": {
                  "column": 32,
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
              "name": "ICloneable",
              "optional": false,
              "range": [
                115,
                125
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 7
                },
                "start": {
                  "column": 33,
                  "line": 7
                }
              }
            },
            "range": [
              107,
              125
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 7
              },
              "start": {
                "column": 25,
                "line": 7
              }
            }
          },
          "range": [
            107,
            125
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 7
            },
            "start": {
              "column": 25,
              "line": 7
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Number",
        "optional": false,
        "range": [
          92,
          98
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 7
          },
          "start": {
            "column": 10,
            "line": 7
          }
        }
      },
      "range": [
        82,
        129
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              161,
              315
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  201,
                  315
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
                      "name": "_from",
                      "optional": false,
                      "range": [
                        219,
                        224
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 11
                        },
                        "start": {
                          "column": 16,
                          "line": 11
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
                          "column": 24,
                          "line": 11
                        },
                        "start": {
                          "column": 21,
                          "line": 11
                        }
                      },
                      "range": [
                        224,
                        227
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            226,
                            227
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 11
                            },
                            "start": {
                              "column": 23,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          226,
                          227
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 11
                          },
                          "start": {
                            "column": 23,
                            "line": 11
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      211,
                      228
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
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
                        238,
                        249
                      ],
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 13
                        },
                        "start": {
                          "column": 8,
                          "line": 13
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
                        249,
                        309
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
                                    273,
                                    277
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 16,
                                      "line": 14
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 14
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_from",
                                  "optional": false,
                                  "range": [
                                    278,
                                    283
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 14
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 14
                                    }
                                  }
                                },
                                "range": [
                                  273,
                                  283
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 14
                                  }
                                }
                              },
                              "right": {
                                "type": "CallExpression",
                                "arguments": [],
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "from",
                                    "optional": false,
                                    "range": [
                                      286,
                                      290
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 14
                                      },
                                      "start": {
                                        "column": 25,
                                        "line": 14
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Clone",
                                    "optional": false,
                                    "range": [
                                      291,
                                      296
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 35,
                                        "line": 14
                                      },
                                      "start": {
                                        "column": 30,
                                        "line": 14
                                      }
                                    }
                                  },
                                  "range": [
                                    286,
                                    296
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 35,
                                      "line": 14
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 14
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  286,
                                  298
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 14
                                  }
                                }
                              },
                              "range": [
                                273,
                                298
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 14
                                },
                                "start": {
                                  "column": 12,
                                  "line": 14
                                }
                              }
                            },
                            "range": [
                              273,
                              299
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 14
                              },
                              "start": {
                                "column": 12,
                                "line": 14
                              }
                            }
                          }
                        ],
                        "range": [
                          259,
                          309
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 15
                          },
                          "start": {
                            "column": 29,
                            "line": 13
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
                          "name": "from",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 13
                              },
                              "start": {
                                "column": 24,
                                "line": 13
                              }
                            },
                            "range": [
                              254,
                              257
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  256,
                                  257
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 13
                                  }
                                }
                              },
                              "range": [
                                256,
                                257
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 13
                                },
                                "start": {
                                  "column": 26,
                                  "line": 13
                                }
                              }
                            }
                          },
                          "range": [
                            250,
                            257
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 13
                            },
                            "start": {
                              "column": 20,
                              "line": 13
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 15
                        },
                        "start": {
                          "column": 19,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      238,
                      309
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 15
                      },
                      "start": {
                        "column": 8,
                        "line": 13
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
                    "column": 44,
                    "line": 10
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Tween",
                "optional": false,
                "range": [
                  174,
                  179
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 10
                  },
                  "start": {
                    "column": 17,
                    "line": 10
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 10
                  },
                  "start": {
                    "column": 22,
                    "line": 10
                  }
                },
                "range": [
                  179,
                  201
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ICloneable",
                        "optional": false,
                        "range": [
                          190,
                          200
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 10
                          },
                          "start": {
                            "column": 33,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        190,
                        200
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 10
                        },
                        "start": {
                          "column": 33,
                          "line": 10
                        }
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        180,
                        181
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 10
                        },
                        "start": {
                          "column": 23,
                          "line": 10
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      180,
                      200
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 10
                      },
                      "start": {
                        "column": 23,
                        "line": 10
                      }
                    }
                  }
                ]
              },
              "range": [
                168,
                315
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 16
                },
                "start": {
                  "column": 11,
                  "line": 10
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "range": [
          155,
          317
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 24,
            "line": 9
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "range": [
          138,
          154
        ],
        "left": {
          "type": "Identifier",
          "range": [
            138,
            145
          ],
          "decorators": [],
          "name": "EndGate",
          "optional": false,
          "loc": {
            "end": {
              "column": 14,
              "line": 9
            },
            "start": {
              "column": 7,
              "line": 9
            }
          }
        },
        "right": {
          "type": "Identifier",
          "range": [
            146,
            154
          ],
          "decorators": [],
          "name": "Tweening",
          "optional": false,
          "loc": {
            "end": {
              "column": 23,
              "line": 9
            },
            "start": {
              "column": 15,
              "line": 9
            }
          }
        },
        "loc": {
          "end": {
            "column": 23,
            "line": 9
          },
          "start": {
            "column": 7,
            "line": 9
          }
        }
      },
      "kind": "module",
      "range": [
        131,
        317
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              349,
              473
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  395,
                  473
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "range": [
                        405,
                        416
                      ],
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 21
                        },
                        "start": {
                          "column": 8,
                          "line": 21
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
                        416,
                        467
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
                                  "name": "from",
                                  "optional": false,
                                  "range": [
                                    451,
                                    455
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 22
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 22
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "Super",
                                "range": [
                                  445,
                                  450
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 22
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 22
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                445,
                                456
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 22
                                },
                                "start": {
                                  "column": 12,
                                  "line": 22
                                }
                              }
                            },
                            "range": [
                              445,
                              457
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 22
                              },
                              "start": {
                                "column": 12,
                                "line": 22
                              }
                            }
                          }
                        ],
                        "range": [
                          431,
                          467
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 23
                          },
                          "start": {
                            "column": 34,
                            "line": 21
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
                          "name": "from",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 21
                              },
                              "start": {
                                "column": 24,
                                "line": 21
                              }
                            },
                            "range": [
                              421,
                              429
                            ],
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "range": [
                                423,
                                429
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 21
                                },
                                "start": {
                                  "column": 26,
                                  "line": 21
                                }
                              }
                            }
                          },
                          "range": [
                            417,
                            429
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 21
                            },
                            "start": {
                              "column": 20,
                              "line": 21
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 23
                        },
                        "start": {
                          "column": 19,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      405,
                      467
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 23
                      },
                      "start": {
                        "column": 8,
                        "line": 21
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 24
                  },
                  "start": {
                    "column": 50,
                    "line": 20
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumberTween",
                "optional": false,
                "range": [
                  362,
                  373
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 20
                  },
                  "start": {
                    "column": 17,
                    "line": 20
                  }
                }
              },
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "Tween",
                "optional": false,
                "range": [
                  382,
                  387
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 20
                  },
                  "start": {
                    "column": 37,
                    "line": 20
                  }
                }
              },
              "superTypeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  387,
                  395
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "range": [
                        388,
                        394
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 20
                        },
                        "start": {
                          "column": 43,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      388,
                      394
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 20
                      },
                      "start": {
                        "column": 43,
                        "line": 20
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 20
                  },
                  "start": {
                    "column": 42,
                    "line": 20
                  }
                }
              },
              "range": [
                356,
                473
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 24
                },
                "start": {
                  "column": 11,
                  "line": 20
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          }
        ],
        "range": [
          343,
          475
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 24,
            "line": 19
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "TSQualifiedName",
        "range": [
          326,
          342
        ],
        "left": {
          "type": "Identifier",
          "range": [
            326,
            333
          ],
          "decorators": [],
          "name": "EndGate",
          "optional": false,
          "loc": {
            "end": {
              "column": 14,
              "line": 19
            },
            "start": {
              "column": 7,
              "line": 19
            }
          }
        },
        "right": {
          "type": "Identifier",
          "range": [
            334,
            342
          ],
          "decorators": [],
          "name": "Tweening",
          "optional": false,
          "loc": {
            "end": {
              "column": 23,
              "line": 19
            },
            "start": {
              "column": 15,
              "line": 19
            }
          }
        },
        "loc": {
          "end": {
            "column": 23,
            "line": 19
          },
          "start": {
            "column": 7,
            "line": 19
          }
        }
      },
      "kind": "module",
      "range": [
        319,
        475
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 25
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
