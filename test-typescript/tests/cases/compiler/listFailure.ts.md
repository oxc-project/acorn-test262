__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    863
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
              301
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  41,
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "lines",
                      "optional": false,
                      "range": [
                        48,
                        53
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 4
                        },
                        "start": {
                          "column": 5,
                          "line": 4
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
                          "column": 22,
                          "line": 4
                        },
                        "start": {
                          "column": 10,
                          "line": 4
                        }
                      },
                      "range": [
                        53,
                        65
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            59,
                            65
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Line",
                                "optional": false,
                                "range": [
                                  60,
                                  64
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 4
                                  }
                                }
                              },
                              "range": [
                                60,
                                64
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 4
                                },
                                "start": {
                                  "column": 17,
                                  "line": 4
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 4
                            },
                            "start": {
                              "column": 16,
                              "line": 4
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "List",
                          "optional": false,
                          "range": [
                            55,
                            59
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 4
                            },
                            "start": {
                              "column": 12,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          55,
                          65
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 4
                          },
                          "start": {
                            "column": 12,
                            "line": 4
                          }
                        }
                      }
                    },
                    "value": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ListMakeHead",
                        "optional": false,
                        "range": [
                          68,
                          80
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 4
                          },
                          "start": {
                            "column": 25,
                            "line": 4
                          }
                        }
                      },
                      "optional": false,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          80,
                          86
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Line",
                              "optional": false,
                              "range": [
                                81,
                                85
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 4
                                },
                                "start": {
                                  "column": 38,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              81,
                              85
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 4
                              },
                              "start": {
                                "column": 38,
                                "line": 4
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 4
                          },
                          "start": {
                            "column": 37,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        68,
                        88
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 4
                        },
                        "start": {
                          "column": 25,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      48,
                      89
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 4
                      },
                      "start": {
                        "column": 5,
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
                      "name": "addLine",
                      "optional": false,
                      "range": [
                        107,
                        114
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 6
                        },
                        "start": {
                          "column": 8,
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
                        114,
                        291
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
                                  "name": "line",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 26,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 20,
                                        "line": 8
                                      }
                                    },
                                    "range": [
                                      180,
                                      186
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Line",
                                        "optional": false,
                                        "range": [
                                          182,
                                          186
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 26,
                                            "line": 8
                                          },
                                          "start": {
                                            "column": 22,
                                            "line": 8
                                          }
                                        }
                                      },
                                      "range": [
                                        182,
                                        186
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 26,
                                          "line": 8
                                        },
                                        "start": {
                                          "column": 22,
                                          "line": 8
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    176,
                                    186
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 8
                                    }
                                  }
                                },
                                "init": {
                                  "type": "NewExpression",
                                  "arguments": [],
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Line",
                                    "optional": false,
                                    "range": [
                                      193,
                                      197
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 37,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 33,
                                        "line": 8
                                      }
                                    }
                                  },
                                  "range": [
                                    189,
                                    199
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 39,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 29,
                                      "line": 8
                                    }
                                  }
                                },
                                "range": [
                                  176,
                                  199
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 8
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "var",
                            "range": [
                              172,
                              200
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 8
                              },
                              "start": {
                                "column": 12,
                                "line": 8
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
                                  "name": "lineEntry",
                                  "optional": false,
                                  "range": [
                                    217,
                                    226
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 9
                                    }
                                  }
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "line",
                                      "optional": false,
                                      "range": [
                                        244,
                                        248
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 47,
                                          "line": 9
                                        },
                                        "start": {
                                          "column": 43,
                                          "line": 9
                                        }
                                      }
                                    }
                                  ],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "range": [
                                          229,
                                          233
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
                                        "name": "lines",
                                        "optional": false,
                                        "range": [
                                          234,
                                          239
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 38,
                                            "line": 9
                                          },
                                          "start": {
                                            "column": 33,
                                            "line": 9
                                          }
                                        }
                                      },
                                      "range": [
                                        229,
                                        239
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 38,
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
                                      "name": "add",
                                      "optional": false,
                                      "range": [
                                        240,
                                        243
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 42,
                                          "line": 9
                                        },
                                        "start": {
                                          "column": 39,
                                          "line": 9
                                        }
                                      }
                                    },
                                    "range": [
                                      229,
                                      243
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 42,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 28,
                                        "line": 9
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "range": [
                                    229,
                                    249
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 48,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 9
                                    }
                                  }
                                },
                                "range": [
                                  217,
                                  249
                                ],
                                "loc": {
                                  "end": {
                                    "column": 48,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 9
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "var",
                            "range": [
                              213,
                              250
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 9
                              },
                              "start": {
                                "column": 12,
                                "line": 9
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "lineEntry",
                              "optional": false,
                              "range": [
                                271,
                                280
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 11
                                },
                                "start": {
                                  "column": 19,
                                  "line": 11
                                }
                              }
                            },
                            "range": [
                              264,
                              281
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 11
                              },
                              "start": {
                                "column": 12,
                                "line": 11
                              }
                            }
                          }
                        ],
                        "range": [
                          145,
                          291
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 12
                          },
                          "start": {
                            "column": 46,
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
                          "name": "lineText",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 6
                              },
                              "start": {
                                "column": 24,
                                "line": 6
                              }
                            },
                            "range": [
                              123,
                              131
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                125,
                                131
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 6
                                },
                                "start": {
                                  "column": 26,
                                  "line": 6
                                }
                              }
                            }
                          },
                          "range": [
                            115,
                            131
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 6
                            },
                            "start": {
                              "column": 16,
                              "line": 6
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 6
                          },
                          "start": {
                            "column": 33,
                            "line": 6
                          }
                        },
                        "range": [
                          132,
                          144
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              138,
                              144
                            ],
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Line",
                                  "optional": false,
                                  "range": [
                                    139,
                                    143
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 44,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 40,
                                      "line": 6
                                    }
                                  }
                                },
                                "range": [
                                  139,
                                  143
                                ],
                                "loc": {
                                  "end": {
                                    "column": 44,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 40,
                                    "line": 6
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 6
                              },
                              "start": {
                                "column": 39,
                                "line": 6
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "List",
                            "optional": false,
                            "range": [
                              134,
                              138
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 6
                              },
                              "start": {
                                "column": 35,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            134,
                            144
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 6
                            },
                            "start": {
                              "column": 35,
                              "line": 6
                            }
                          }
                        }
                      },
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 12
                        },
                        "start": {
                          "column": 15,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      107,
                      291
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 6
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
                    "column": 24,
                    "line": 3
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Buffer",
                "optional": false,
                "range": [
                  34,
                  40
                ],
                "loc": {
                  "end": {
                    "column": 23,
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
                28,
                301
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 13
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
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              311,
              398
            ],
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "entry",
                      "optional": false,
                      "range": [
                        386,
                        391
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 16
                        },
                        "start": {
                          "column": 12,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      379,
                      392
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 16
                      },
                      "start": {
                        "column": 5,
                        "line": 16
                      }
                    }
                  }
                ],
                "range": [
                  371,
                  398
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 17
                  },
                  "start": {
                    "column": 64,
                    "line": 15
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ListRemoveEntry",
                "optional": false,
                "range": [
                  327,
                  342
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 15
                  },
                  "start": {
                    "column": 20,
                    "line": 15
                  }
                }
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "entry",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 15
                      },
                      "start": {
                        "column": 44,
                        "line": 15
                      }
                    },
                    "range": [
                      351,
                      360
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          357,
                          360
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "range": [
                                358,
                                359
                              ],
                              "loc": {
                                "end": {
                                  "column": 52,
                                  "line": 15
                                },
                                "start": {
                                  "column": 51,
                                  "line": 15
                                }
                              }
                            },
                            "range": [
                              358,
                              359
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 15
                              },
                              "start": {
                                "column": 51,
                                "line": 15
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 15
                          },
                          "start": {
                            "column": 50,
                            "line": 15
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "List",
                        "optional": false,
                        "range": [
                          353,
                          357
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 15
                          },
                          "start": {
                            "column": 46,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        353,
                        360
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 15
                        },
                        "start": {
                          "column": 46,
                          "line": 15
                        }
                      }
                    }
                  },
                  "range": [
                    346,
                    360
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 15
                    },
                    "start": {
                      "column": 39,
                      "line": 15
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 15
                  },
                  "start": {
                    "column": 54,
                    "line": 15
                  }
                },
                "range": [
                  361,
                  370
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      367,
                      370
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            368,
                            369
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 15
                            },
                            "start": {
                              "column": 61,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          368,
                          369
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 15
                          },
                          "start": {
                            "column": 61,
                            "line": 15
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 15
                      },
                      "start": {
                        "column": 60,
                        "line": 15
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "List",
                    "optional": false,
                    "range": [
                      363,
                      367
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 15
                      },
                      "start": {
                        "column": 56,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    363,
                    370
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 15
                    },
                    "start": {
                      "column": 56,
                      "line": 15
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 15
                  },
                  "start": {
                    "column": 35,
                    "line": 15
                  }
                },
                "range": [
                  342,
                  345
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        343,
                        344
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 15
                        },
                        "start": {
                          "column": 36,
                          "line": 15
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      343,
                      344
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 15
                      },
                      "start": {
                        "column": 36,
                        "line": 15
                      }
                    }
                  }
                ]
              },
              "range": [
                318,
                398
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 17
                },
                "start": {
                  "column": 11,
                  "line": 15
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              404,
              469
            ],
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "null",
                      "value": null,
                      "range": [
                        458,
                        462
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 20
                        },
                        "start": {
                          "column": 9,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      451,
                      463
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 20
                      },
                      "start": {
                        "column": 2,
                        "line": 20
                      }
                    }
                  }
                ],
                "range": [
                  447,
                  469
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 21
                  },
                  "start": {
                    "column": 47,
                    "line": 19
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ListMakeHead",
                "optional": false,
                "range": [
                  420,
                  432
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 19
                  },
                  "start": {
                    "column": 20,
                    "line": 19
                  }
                }
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 19
                  },
                  "start": {
                    "column": 37,
                    "line": 19
                  }
                },
                "range": [
                  437,
                  446
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      443,
                      446
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            444,
                            445
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 19
                            },
                            "start": {
                              "column": 44,
                              "line": 19
                            }
                          }
                        },
                        "range": [
                          444,
                          445
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 19
                          },
                          "start": {
                            "column": 44,
                            "line": 19
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 19
                      },
                      "start": {
                        "column": 43,
                        "line": 19
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "List",
                    "optional": false,
                    "range": [
                      439,
                      443
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 19
                      },
                      "start": {
                        "column": 39,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    439,
                    446
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 19
                    },
                    "start": {
                      "column": 39,
                      "line": 19
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 19
                  },
                  "start": {
                    "column": 32,
                    "line": 19
                  }
                },
                "range": [
                  432,
                  435
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        433,
                        434
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 19
                        },
                        "start": {
                          "column": 33,
                          "line": 19
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      433,
                      434
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 19
                      },
                      "start": {
                        "column": 33,
                        "line": 19
                      }
                    }
                  }
                ]
              },
              "range": [
                411,
                469
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 21
                },
                "start": {
                  "column": 11,
                  "line": 19
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
                "line": 19
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              475,
              548
            ],
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "null",
                      "value": null,
                      "range": [
                        537,
                        541
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 24
                        },
                        "start": {
                          "column": 9,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      530,
                      542
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 24
                      },
                      "start": {
                        "column": 2,
                        "line": 24
                      }
                    }
                  }
                ],
                "range": [
                  526,
                  548
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 25
                  },
                  "start": {
                    "column": 55,
                    "line": 23
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ListMakeEntry",
                "optional": false,
                "range": [
                  491,
                  504
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 23
                  },
                  "start": {
                    "column": 20,
                    "line": 23
                  }
                }
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 23
                      },
                      "start": {
                        "column": 41,
                        "line": 23
                      }
                    },
                    "range": [
                      512,
                      515
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          514,
                          515
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 23
                          },
                          "start": {
                            "column": 43,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        514,
                        515
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 23
                        },
                        "start": {
                          "column": 43,
                          "line": 23
                        }
                      }
                    }
                  },
                  "range": [
                    508,
                    515
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 23
                    },
                    "start": {
                      "column": 37,
                      "line": 23
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 23
                  },
                  "start": {
                    "column": 45,
                    "line": 23
                  }
                },
                "range": [
                  516,
                  525
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      522,
                      525
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            523,
                            524
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 23
                            },
                            "start": {
                              "column": 52,
                              "line": 23
                            }
                          }
                        },
                        "range": [
                          523,
                          524
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 23
                          },
                          "start": {
                            "column": 52,
                            "line": 23
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 23
                      },
                      "start": {
                        "column": 51,
                        "line": 23
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "List",
                    "optional": false,
                    "range": [
                      518,
                      522
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 23
                      },
                      "start": {
                        "column": 47,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    518,
                    525
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 23
                    },
                    "start": {
                      "column": 47,
                      "line": 23
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 23
                  },
                  "start": {
                    "column": 33,
                    "line": 23
                  }
                },
                "range": [
                  504,
                  507
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        505,
                        506
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 23
                        },
                        "start": {
                          "column": 34,
                          "line": 23
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      505,
                      506
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 23
                      },
                      "start": {
                        "column": 34,
                        "line": 23
                      }
                    }
                  }
                ]
              },
              "range": [
                482,
                548
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 25
                },
                "start": {
                  "column": 11,
                  "line": 23
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                572,
                838
              ],
              "body": [
                {
                  "type": "PropertyDefinition",
                  "accessibility": "public",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "next",
                    "optional": false,
                    "range": [
                      590,
                      594
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 28
                      },
                      "start": {
                        "column": 15,
                        "line": 28
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
                        "column": 28,
                        "line": 28
                      },
                      "start": {
                        "column": 19,
                        "line": 28
                      }
                    },
                    "range": [
                      594,
                      603
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          600,
                          603
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                601,
                                602
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 28
                                },
                                "start": {
                                  "column": 26,
                                  "line": 28
                                }
                              }
                            },
                            "range": [
                              601,
                              602
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 28
                              },
                              "start": {
                                "column": 26,
                                "line": 28
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 28
                          },
                          "start": {
                            "column": 25,
                            "line": 28
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "List",
                        "optional": false,
                        "range": [
                          596,
                          600
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 28
                          },
                          "start": {
                            "column": 21,
                            "line": 28
                          }
                        }
                      },
                      "range": [
                        596,
                        603
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 28
                        },
                        "start": {
                          "column": 21,
                          "line": 28
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    583,
                    604
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 28
                    },
                    "start": {
                      "column": 8,
                      "line": 28
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
                    "name": "add",
                    "optional": false,
                    "range": [
                      615,
                      618
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 30
                      },
                      "start": {
                        "column": 8,
                        "line": 30
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
                      618,
                      723
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
                                  651,
                                  655
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
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "next",
                                "optional": false,
                                "range": [
                                  656,
                                  660
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 31
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 31
                                  }
                                }
                              },
                              "range": [
                                651,
                                660
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 31
                                },
                                "start": {
                                  "column": 12,
                                  "line": 31
                                }
                              }
                            },
                            "right": {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "data",
                                  "optional": false,
                                  "range": [
                                    677,
                                    681
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 42,
                                      "line": 31
                                    },
                                    "start": {
                                      "column": 38,
                                      "line": 31
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ListMakeEntry",
                                "optional": false,
                                "range": [
                                  663,
                                  676
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 31
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 31
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                663,
                                682
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 31
                                },
                                "start": {
                                  "column": 24,
                                  "line": 31
                                }
                              }
                            },
                            "range": [
                              651,
                              682
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 31
                              },
                              "start": {
                                "column": 12,
                                "line": 31
                              }
                            }
                          },
                          "range": [
                            651,
                            683
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 31
                            },
                            "start": {
                              "column": 12,
                              "line": 31
                            }
                          }
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                703,
                                707
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
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
                              "name": "next",
                              "optional": false,
                              "range": [
                                708,
                                712
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 32
                                },
                                "start": {
                                  "column": 24,
                                  "line": 32
                                }
                              }
                            },
                            "range": [
                              703,
                              712
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 32
                              },
                              "start": {
                                "column": 19,
                                "line": 32
                              }
                            }
                          },
                          "range": [
                            696,
                            713
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 32
                            },
                            "start": {
                              "column": 12,
                              "line": 32
                            }
                          }
                        }
                      ],
                      "range": [
                        637,
                        723
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 33
                        },
                        "start": {
                          "column": 30,
                          "line": 30
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
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 30
                            },
                            "start": {
                              "column": 16,
                              "line": 30
                            }
                          },
                          "range": [
                            623,
                            626
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                625,
                                626
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 30
                                },
                                "start": {
                                  "column": 18,
                                  "line": 30
                                }
                              }
                            },
                            "range": [
                              625,
                              626
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 30
                              },
                              "start": {
                                "column": 18,
                                "line": 30
                              }
                            }
                          }
                        },
                        "range": [
                          619,
                          626
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 30
                          },
                          "start": {
                            "column": 12,
                            "line": 30
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 30
                        },
                        "start": {
                          "column": 20,
                          "line": 30
                        }
                      },
                      "range": [
                        627,
                        636
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            633,
                            636
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  634,
                                  635
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 30
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 30
                                  }
                                }
                              },
                              "range": [
                                634,
                                635
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 30
                                },
                                "start": {
                                  "column": 27,
                                  "line": 30
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 30
                            },
                            "start": {
                              "column": 26,
                              "line": 30
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "List",
                          "optional": false,
                          "range": [
                            629,
                            633
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 30
                            },
                            "start": {
                              "column": 22,
                              "line": 30
                            }
                          }
                        },
                        "range": [
                          629,
                          636
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 30
                          },
                          "start": {
                            "column": 22,
                            "line": 30
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 33
                      },
                      "start": {
                        "column": 11,
                        "line": 30
                      }
                    }
                  },
                  "range": [
                    615,
                    723
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 33
                    },
                    "start": {
                      "column": 8,
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
                    "name": "popEntry",
                    "optional": false,
                    "range": [
                      733,
                      741
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 35
                      },
                      "start": {
                        "column": 8,
                        "line": 35
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
                      741,
                      826
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
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "range": [
                                    804,
                                    808
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 40,
                                      "line": 36
                                    },
                                    "start": {
                                      "column": 36,
                                      "line": 36
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "next",
                                  "optional": false,
                                  "range": [
                                    809,
                                    813
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 45,
                                      "line": 36
                                    },
                                    "start": {
                                      "column": 41,
                                      "line": 36
                                    }
                                  }
                                },
                                "range": [
                                  804,
                                  813
                                ],
                                "loc": {
                                  "end": {
                                    "column": 45,
                                    "line": 36
                                  },
                                  "start": {
                                    "column": 36,
                                    "line": 36
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ListRemoveEntry",
                              "optional": false,
                              "range": [
                                788,
                                803
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 36
                                },
                                "start": {
                                  "column": 20,
                                  "line": 36
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              788,
                              814
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 36
                              },
                              "start": {
                                "column": 20,
                                "line": 36
                              }
                            }
                          },
                          "range": [
                            780,
                            816
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 36
                            },
                            "start": {
                              "column": 12,
                              "line": 36
                            }
                          }
                        }
                      ],
                      "range": [
                        766,
                        826
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 37
                        },
                        "start": {
                          "column": 41,
                          "line": 35
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
                        "name": "head",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 35
                            },
                            "start": {
                              "column": 21,
                              "line": 35
                            }
                          },
                          "range": [
                            746,
                            755
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "range": [
                                752,
                                755
                              ],
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "range": [
                                      753,
                                      754
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 35
                                      },
                                      "start": {
                                        "column": 28,
                                        "line": 35
                                      }
                                    }
                                  },
                                  "range": [
                                    753,
                                    754
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 35
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 35
                                    }
                                  }
                                }
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 35
                                },
                                "start": {
                                  "column": 27,
                                  "line": 35
                                }
                              }
                            },
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "List",
                              "optional": false,
                              "range": [
                                748,
                                752
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 35
                                },
                                "start": {
                                  "column": 23,
                                  "line": 35
                                }
                              }
                            },
                            "range": [
                              748,
                              755
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 35
                              },
                              "start": {
                                "column": 23,
                                "line": 35
                              }
                            }
                          }
                        },
                        "range": [
                          742,
                          755
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 35
                          },
                          "start": {
                            "column": 17,
                            "line": 35
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 35
                        },
                        "start": {
                          "column": 31,
                          "line": 35
                        }
                      },
                      "range": [
                        756,
                        765
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            762,
                            765
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  763,
                                  764
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 35
                                  },
                                  "start": {
                                    "column": 38,
                                    "line": 35
                                  }
                                }
                              },
                              "range": [
                                763,
                                764
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 35
                                },
                                "start": {
                                  "column": 38,
                                  "line": 35
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 35
                            },
                            "start": {
                              "column": 37,
                              "line": 35
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "List",
                          "optional": false,
                          "range": [
                            758,
                            762
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 35
                            },
                            "start": {
                              "column": 33,
                              "line": 35
                            }
                          }
                        },
                        "range": [
                          758,
                          765
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 35
                          },
                          "start": {
                            "column": 33,
                            "line": 35
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 37
                      },
                      "start": {
                        "column": 16,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    733,
                    826
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 37
                    },
                    "start": {
                      "column": 8,
                      "line": 35
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 38
                },
                "start": {
                  "column": 18,
                  "line": 27
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "List",
              "optional": false,
              "range": [
                564,
                568
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
            "implements": [],
            "superClass": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 27
                },
                "start": {
                  "column": 14,
                  "line": 27
                }
              },
              "range": [
                568,
                571
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      569,
                      570
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 27
                      },
                      "start": {
                        "column": 15,
                        "line": 27
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    569,
                    570
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 27
                    },
                    "start": {
                      "column": 15,
                      "line": 27
                    }
                  }
                }
              ]
            },
            "range": [
              558,
              838
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              841,
              861
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  859,
                  861
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 40
                  },
                  "start": {
                    "column": 19,
                    "line": 40
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Line",
                "optional": false,
                "range": [
                  854,
                  858
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 40
                  },
                  "start": {
                    "column": 14,
                    "line": 40
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                848,
                861
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 40
                },
                "start": {
                  "column": 8,
                  "line": 40
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 21,
                "line": 40
              },
              "start": {
                "column": 1,
                "line": 40
              }
            }
          }
        ],
        "range": [
          14,
          863
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 41
          },
          "start": {
            "column": 14,
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
          13
        ],
        "decorators": [],
        "name": "Editor",
        "optional": false,
        "loc": {
          "end": {
            "column": 13,
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
        863
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 41
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
      "line": 41
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
