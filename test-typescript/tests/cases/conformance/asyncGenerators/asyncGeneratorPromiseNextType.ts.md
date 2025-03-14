__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    57,
    1031
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Result",
        "optional": false,
        "range": [
          62,
          68
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "message",
              "optional": false,
              "range": [
                72,
                79
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 3
                },
                "start": {
                  "column": 15,
                  "line": 3
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 3
                },
                "start": {
                  "column": 22,
                  "line": 3
                }
              },
              "range": [
                79,
                87
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  81,
                  87
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 3
                  },
                  "start": {
                    "column": 24,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              72,
              87
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 3
              },
              "start": {
                "column": 15,
                "line": 3
              }
            }
          }
        ],
        "range": [
          71,
          88
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 3
          },
          "start": {
            "column": 14,
            "line": 3
          }
        }
      },
      "range": [
        57,
        88
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
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
                  "name": "pending",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 6
                      },
                      "start": {
                        "column": 15,
                        "line": 6
                      }
                    },
                    "range": [
                      191,
                      210
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            200,
                            208
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Result",
                                "optional": false,
                                "range": [
                                  201,
                                  207
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 6
                                  }
                                }
                              },
                              "range": [
                                201,
                                207
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 6
                                },
                                "start": {
                                  "column": 25,
                                  "line": 6
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 6
                            },
                            "start": {
                              "column": 24,
                              "line": 6
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "range": [
                            193,
                            200
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 6
                            },
                            "start": {
                              "column": 17,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          193,
                          208
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 6
                          },
                          "start": {
                            "column": 17,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        193,
                        210
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 6
                        },
                        "start": {
                          "column": 17,
                          "line": 6
                        }
                      }
                    }
                  },
                  "range": [
                    184,
                    210
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 6
                    },
                    "start": {
                      "column": 8,
                      "line": 6
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    213,
                    215
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 6
                    },
                    "start": {
                      "column": 37,
                      "line": 6
                    }
                  }
                },
                "range": [
                  184,
                  215
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              180,
              216
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          },
          {
            "type": "WhileStatement",
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
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 8
                            },
                            "start": {
                              "column": 15,
                              "line": 8
                            }
                          },
                          "range": [
                            251,
                            280
                          ],
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "range": [
                                    260,
                                    268
                                  ],
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Result",
                                        "optional": false,
                                        "range": [
                                          261,
                                          267
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
                                      },
                                      "range": [
                                        261,
                                        267
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
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 32,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 8
                                    }
                                  }
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Promise",
                                  "optional": false,
                                  "range": [
                                    253,
                                    260
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 8
                                    }
                                  }
                                },
                                "range": [
                                  253,
                                  268
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 8
                                  }
                                }
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "range": [
                                  271,
                                  280
                                ],
                                "loc": {
                                  "end": {
                                    "column": 44,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 8
                                  }
                                }
                              }
                            ],
                            "range": [
                              253,
                              280
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 8
                              },
                              "start": {
                                "column": 17,
                                "line": 8
                              }
                            }
                          }
                        },
                        "range": [
                          250,
                          280
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 8
                          },
                          "start": {
                            "column": 14,
                            "line": 8
                          }
                        }
                      },
                      "init": {
                        "type": "YieldExpression",
                        "argument": null,
                        "delegate": false,
                        "range": [
                          283,
                          288
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 8
                          },
                          "start": {
                            "column": 47,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        250,
                        288
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 8
                        },
                        "start": {
                          "column": 14,
                          "line": 8
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    244,
                    289
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 8
                    },
                    "start": {
                      "column": 8,
                      "line": 8
                    }
                  }
                },
                {
                  "type": "IfStatement",
                  "alternate": {
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
                              "name": "results",
                              "optional": false,
                              "range": [
                                375,
                                382
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 12
                                },
                                "start": {
                                  "column": 18,
                                  "line": 12
                                }
                              }
                            },
                            "init": {
                              "type": "AwaitExpression",
                              "argument": {
                                "type": "CallExpression",
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "pending",
                                    "optional": false,
                                    "range": [
                                      403,
                                      410
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 53,
                                        "line": 12
                                      },
                                      "start": {
                                        "column": 46,
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
                                    "name": "Promise",
                                    "optional": false,
                                    "range": [
                                      391,
                                      398
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 41,
                                        "line": 12
                                      },
                                      "start": {
                                        "column": 34,
                                        "line": 12
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "all",
                                    "optional": false,
                                    "range": [
                                      399,
                                      402
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 45,
                                        "line": 12
                                      },
                                      "start": {
                                        "column": 42,
                                        "line": 12
                                      }
                                    }
                                  },
                                  "range": [
                                    391,
                                    402
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 45,
                                      "line": 12
                                    },
                                    "start": {
                                      "column": 34,
                                      "line": 12
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  391,
                                  411
                                ],
                                "loc": {
                                  "end": {
                                    "column": 54,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 34,
                                    "line": 12
                                  }
                                }
                              },
                              "range": [
                                385,
                                411
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 12
                                },
                                "start": {
                                  "column": 28,
                                  "line": 12
                                }
                              }
                            },
                            "range": [
                              375,
                              411
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 12
                              },
                              "start": {
                                "column": 18,
                                "line": 12
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "const",
                        "range": [
                          369,
                          412
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 12
                          },
                          "start": {
                            "column": 12,
                            "line": 12
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "pending",
                            "optional": false,
                            "range": [
                              425,
                              432
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 13
                              },
                              "start": {
                                "column": 12,
                                "line": 13
                              }
                            }
                          },
                          "right": {
                            "type": "ArrayExpression",
                            "elements": [],
                            "range": [
                              435,
                              437
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 13
                              },
                              "start": {
                                "column": 22,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            425,
                            437
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 13
                            },
                            "start": {
                              "column": 12,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          425,
                          438
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 13
                          },
                          "start": {
                            "column": 12,
                            "line": 13
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
                              "raw": "'Storing...'",
                              "value": "Storing...",
                              "range": [
                                463,
                                475
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 14
                                },
                                "start": {
                                  "column": 24,
                                  "line": 14
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
                              "name": "console",
                              "optional": false,
                              "range": [
                                451,
                                458
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
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
                              "name": "log",
                              "optional": false,
                              "range": [
                                459,
                                462
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 14
                                },
                                "start": {
                                  "column": 20,
                                  "line": 14
                                }
                              }
                            },
                            "range": [
                              451,
                              462
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 14
                              },
                              "start": {
                                "column": 12,
                                "line": 14
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            451,
                            476
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
                          451,
                          477
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
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "results",
                                "optional": false,
                                "range": [
                                  509,
                                  516
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 31,
                                    "line": 15
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "storeResults",
                              "optional": false,
                              "range": [
                                496,
                                508
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 15
                                },
                                "start": {
                                  "column": 18,
                                  "line": 15
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              496,
                              517
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 15
                              },
                              "start": {
                                "column": 18,
                                "line": 15
                              }
                            }
                          },
                          "range": [
                            490,
                            517
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 15
                            },
                            "start": {
                              "column": 12,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          490,
                          518
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 15
                          },
                          "start": {
                            "column": 12,
                            "line": 15
                          }
                        }
                      }
                    ],
                    "range": [
                      355,
                      528
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 16
                      },
                      "start": {
                        "column": 13,
                        "line": 11
                      }
                    }
                  },
                  "consequent": {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "range": [
                            338,
                            339
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 10
                            },
                            "start": {
                              "column": 25,
                              "line": 10
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
                          "name": "pending",
                          "optional": false,
                          "range": [
                            325,
                            332
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 10
                            },
                            "start": {
                              "column": 12,
                              "line": 10
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
                            333,
                            337
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 10
                            },
                            "start": {
                              "column": 20,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          325,
                          337
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 10
                          },
                          "start": {
                            "column": 12,
                            "line": 10
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        325,
                        340
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 10
                        },
                        "start": {
                          "column": 12,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      325,
                      341
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 10
                      },
                      "start": {
                        "column": 12,
                        "line": 10
                      }
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "!=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "range": [
                        302,
                        303
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
                    "right": {
                      "type": "Literal",
                      "raw": "null",
                      "value": null,
                      "range": [
                        307,
                        311
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 9
                        },
                        "start": {
                          "column": 17,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      302,
                      311
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 9
                      },
                      "start": {
                        "column": 12,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    298,
                    528
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 16
                    },
                    "start": {
                      "column": 8,
                      "line": 9
                    }
                  }
                }
              ],
              "range": [
                234,
                534
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 17
                },
                "start": {
                  "column": 17,
                  "line": 7
                }
              }
            },
            "test": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                228,
                232
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 7
                },
                "start": {
                  "column": 11,
                  "line": 7
                }
              }
            },
            "range": [
              221,
              534
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "range": [
          174,
          536
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 84,
            "line": 5
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "saverGen",
        "optional": false,
        "range": [
          106,
          114
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 5
          },
          "start": {
            "column": 16,
            "line": 5
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 83,
            "line": 5
          },
          "start": {
            "column": 26,
            "line": 5
          }
        },
        "range": [
          116,
          173
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              132,
              173
            ],
            "params": [
              {
                "type": "TSVoidKeyword",
                "range": [
                  133,
                  137
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 5
                  },
                  "start": {
                    "column": 43,
                    "line": 5
                  }
                }
              },
              {
                "type": "TSVoidKeyword",
                "range": [
                  139,
                  143
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 5
                  },
                  "start": {
                    "column": 49,
                    "line": 5
                  }
                }
              },
              {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        152,
                        160
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Result",
                            "optional": false,
                            "range": [
                              153,
                              159
                            ],
                            "loc": {
                              "end": {
                                "column": 69,
                                "line": 5
                              },
                              "start": {
                                "column": 63,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            153,
                            159
                          ],
                          "loc": {
                            "end": {
                              "column": 69,
                              "line": 5
                            },
                            "start": {
                              "column": 63,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 70,
                          "line": 5
                        },
                        "start": {
                          "column": 62,
                          "line": 5
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "range": [
                        145,
                        152
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 5
                        },
                        "start": {
                          "column": 55,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      145,
                      160
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 5
                      },
                      "start": {
                        "column": 55,
                        "line": 5
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      163,
                      172
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 5
                      },
                      "start": {
                        "column": 73,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  145,
                  172
                ],
                "loc": {
                  "end": {
                    "column": 82,
                    "line": 5
                  },
                  "start": {
                    "column": 55,
                    "line": 5
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 83,
                "line": 5
              },
              "start": {
                "column": 42,
                "line": 5
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncGenerator",
            "optional": false,
            "range": [
              118,
              132
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 5
              },
              "start": {
                "column": 28,
                "line": 5
              }
            }
          },
          "range": [
            118,
            173
          ],
          "loc": {
            "end": {
              "column": 83,
              "line": 5
            },
            "start": {
              "column": 28,
              "line": 5
            }
          }
        }
      },
      "range": [
        90,
        536
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 5
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "results",
                  "optional": false,
                  "range": [
                    597,
                    604
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 21
                    },
                    "start": {
                      "column": 16,
                      "line": 21
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
                  "name": "console",
                  "optional": false,
                  "range": [
                    585,
                    592
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 21
                    },
                    "start": {
                      "column": 4,
                      "line": 21
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "range": [
                    593,
                    596
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 21
                    },
                    "start": {
                      "column": 12,
                      "line": 21
                    }
                  }
                },
                "range": [
                  585,
                  596
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 21
                  },
                  "start": {
                    "column": 4,
                    "line": 21
                  }
                }
              },
              "optional": false,
              "range": [
                585,
                605
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 21
                }
              }
            },
            "range": [
              585,
              606
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "range": [
                    618,
                    625
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 22
                    },
                    "start": {
                      "column": 11,
                      "line": 22
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "range": [
                    626,
                    633
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 22
                    },
                    "start": {
                      "column": 19,
                      "line": 22
                    }
                  }
                },
                "range": [
                  618,
                  633
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 22
                  },
                  "start": {
                    "column": 11,
                    "line": 22
                  }
                }
              },
              "optional": false,
              "range": [
                618,
                635
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 22
                },
                "start": {
                  "column": 11,
                  "line": 22
                }
              }
            },
            "range": [
              611,
              636
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          }
        ],
        "range": [
          579,
          638
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 41,
            "line": 20
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "storeResults",
        "optional": false,
        "range": [
          547,
          559
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 20
          },
          "start": {
            "column": 9,
            "line": 20
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "results",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 39,
                "line": 20
              },
              "start": {
                "column": 29,
                "line": 20
              }
            },
            "range": [
              567,
              577
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Result",
                  "optional": false,
                  "range": [
                    569,
                    575
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 20
                    },
                    "start": {
                      "column": 31,
                      "line": 20
                    }
                  }
                },
                "range": [
                  569,
                  575
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 20
                  },
                  "start": {
                    "column": 31,
                    "line": 20
                  }
                }
              },
              "range": [
                569,
                577
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 20
                },
                "start": {
                  "column": 31,
                  "line": 20
                }
              }
            }
          },
          "range": [
            560,
            577
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 20
            },
            "start": {
              "column": 22,
              "line": 20
            }
          }
        }
      ],
      "range": [
        538,
        638
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
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
                  "name": "pending",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 26
                      },
                      "start": {
                        "column": 15,
                        "line": 26
                      }
                    },
                    "range": [
                      685,
                      704
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            694,
                            702
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Result",
                                "optional": false,
                                "range": [
                                  695,
                                  701
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 26
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 26
                                  }
                                }
                              },
                              "range": [
                                695,
                                701
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 26
                                },
                                "start": {
                                  "column": 25,
                                  "line": 26
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 26
                            },
                            "start": {
                              "column": 24,
                              "line": 26
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "range": [
                            687,
                            694
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 26
                            },
                            "start": {
                              "column": 17,
                              "line": 26
                            }
                          }
                        },
                        "range": [
                          687,
                          702
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 26
                          },
                          "start": {
                            "column": 17,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        687,
                        704
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 26
                        },
                        "start": {
                          "column": 17,
                          "line": 26
                        }
                      }
                    }
                  },
                  "range": [
                    678,
                    704
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 26
                    },
                    "start": {
                      "column": 8,
                      "line": 26
                    }
                  }
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "range": [
                    707,
                    709
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 26
                    },
                    "start": {
                      "column": 37,
                      "line": 26
                    }
                  }
                },
                "range": [
                  678,
                  709
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 26
                  },
                  "start": {
                    "column": 8,
                    "line": 26
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              674,
              710
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          },
          {
            "type": "WhileStatement",
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
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 28
                            },
                            "start": {
                              "column": 15,
                              "line": 28
                            }
                          },
                          "range": [
                            745,
                            774
                          ],
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "range": [
                                    754,
                                    762
                                  ],
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Result",
                                        "optional": false,
                                        "range": [
                                          755,
                                          761
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 31,
                                            "line": 28
                                          },
                                          "start": {
                                            "column": 25,
                                            "line": 28
                                          }
                                        }
                                      },
                                      "range": [
                                        755,
                                        761
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 31,
                                          "line": 28
                                        },
                                        "start": {
                                          "column": 25,
                                          "line": 28
                                        }
                                      }
                                    }
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 32,
                                      "line": 28
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 28
                                    }
                                  }
                                },
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Promise",
                                  "optional": false,
                                  "range": [
                                    747,
                                    754
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 28
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 28
                                    }
                                  }
                                },
                                "range": [
                                  747,
                                  762
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 28
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 28
                                  }
                                }
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "range": [
                                  765,
                                  774
                                ],
                                "loc": {
                                  "end": {
                                    "column": 44,
                                    "line": 28
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 28
                                  }
                                }
                              }
                            ],
                            "range": [
                              747,
                              774
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 28
                              },
                              "start": {
                                "column": 17,
                                "line": 28
                              }
                            }
                          }
                        },
                        "range": [
                          744,
                          774
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 28
                          },
                          "start": {
                            "column": 14,
                            "line": 28
                          }
                        }
                      },
                      "init": {
                        "type": "YieldExpression",
                        "argument": null,
                        "delegate": false,
                        "range": [
                          777,
                          782
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 28
                          },
                          "start": {
                            "column": 47,
                            "line": 28
                          }
                        }
                      },
                      "range": [
                        744,
                        782
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 28
                        },
                        "start": {
                          "column": 14,
                          "line": 28
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    738,
                    783
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 28
                    },
                    "start": {
                      "column": 8,
                      "line": 28
                    }
                  }
                },
                {
                  "type": "IfStatement",
                  "alternate": {
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
                              "name": "results",
                              "optional": false,
                              "range": [
                                869,
                                876
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 32
                                },
                                "start": {
                                  "column": 18,
                                  "line": 32
                                }
                              }
                            },
                            "init": {
                              "type": "AwaitExpression",
                              "argument": {
                                "type": "CallExpression",
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "pending",
                                    "optional": false,
                                    "range": [
                                      897,
                                      904
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 53,
                                        "line": 32
                                      },
                                      "start": {
                                        "column": 46,
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
                                    "name": "Promise",
                                    "optional": false,
                                    "range": [
                                      885,
                                      892
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 41,
                                        "line": 32
                                      },
                                      "start": {
                                        "column": 34,
                                        "line": 32
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "all",
                                    "optional": false,
                                    "range": [
                                      893,
                                      896
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 45,
                                        "line": 32
                                      },
                                      "start": {
                                        "column": 42,
                                        "line": 32
                                      }
                                    }
                                  },
                                  "range": [
                                    885,
                                    896
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 45,
                                      "line": 32
                                    },
                                    "start": {
                                      "column": 34,
                                      "line": 32
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  885,
                                  905
                                ],
                                "loc": {
                                  "end": {
                                    "column": 54,
                                    "line": 32
                                  },
                                  "start": {
                                    "column": 34,
                                    "line": 32
                                  }
                                }
                              },
                              "range": [
                                879,
                                905
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 32
                                },
                                "start": {
                                  "column": 28,
                                  "line": 32
                                }
                              }
                            },
                            "range": [
                              869,
                              905
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 32
                              },
                              "start": {
                                "column": 18,
                                "line": 32
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "const",
                        "range": [
                          863,
                          906
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 32
                          },
                          "start": {
                            "column": 12,
                            "line": 32
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "pending",
                            "optional": false,
                            "range": [
                              919,
                              926
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 33
                              },
                              "start": {
                                "column": 12,
                                "line": 33
                              }
                            }
                          },
                          "right": {
                            "type": "ArrayExpression",
                            "elements": [],
                            "range": [
                              929,
                              931
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 33
                              },
                              "start": {
                                "column": 22,
                                "line": 33
                              }
                            }
                          },
                          "range": [
                            919,
                            931
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 33
                            },
                            "start": {
                              "column": 12,
                              "line": 33
                            }
                          }
                        },
                        "range": [
                          919,
                          932
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 33
                          },
                          "start": {
                            "column": 12,
                            "line": 33
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
                              "raw": "'Storing...'",
                              "value": "Storing...",
                              "range": [
                                957,
                                969
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 34
                                },
                                "start": {
                                  "column": 24,
                                  "line": 34
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
                              "name": "console",
                              "optional": false,
                              "range": [
                                945,
                                952
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 34
                                },
                                "start": {
                                  "column": 12,
                                  "line": 34
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "log",
                              "optional": false,
                              "range": [
                                953,
                                956
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 34
                                },
                                "start": {
                                  "column": 20,
                                  "line": 34
                                }
                              }
                            },
                            "range": [
                              945,
                              956
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 34
                              },
                              "start": {
                                "column": 12,
                                "line": 34
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            945,
                            970
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 34
                            },
                            "start": {
                              "column": 12,
                              "line": 34
                            }
                          }
                        },
                        "range": [
                          945,
                          971
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 34
                          },
                          "start": {
                            "column": 12,
                            "line": 34
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "results",
                                "optional": false,
                                "range": [
                                  1003,
                                  1010
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 35
                                  },
                                  "start": {
                                    "column": 31,
                                    "line": 35
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "storeResults",
                              "optional": false,
                              "range": [
                                990,
                                1002
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 35
                                },
                                "start": {
                                  "column": 18,
                                  "line": 35
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              990,
                              1011
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 35
                              },
                              "start": {
                                "column": 18,
                                "line": 35
                              }
                            }
                          },
                          "range": [
                            984,
                            1011
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 35
                            },
                            "start": {
                              "column": 12,
                              "line": 35
                            }
                          }
                        },
                        "range": [
                          984,
                          1012
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 35
                          },
                          "start": {
                            "column": 12,
                            "line": 35
                          }
                        }
                      }
                    ],
                    "range": [
                      849,
                      1022
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 36
                      },
                      "start": {
                        "column": 13,
                        "line": 31
                      }
                    }
                  },
                  "consequent": {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "range": [
                            832,
                            833
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 30
                            },
                            "start": {
                              "column": 25,
                              "line": 30
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
                          "name": "pending",
                          "optional": false,
                          "range": [
                            819,
                            826
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
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "push",
                          "optional": false,
                          "range": [
                            827,
                            831
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 30
                            },
                            "start": {
                              "column": 20,
                              "line": 30
                            }
                          }
                        },
                        "range": [
                          819,
                          831
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 30
                          },
                          "start": {
                            "column": 12,
                            "line": 30
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        819,
                        834
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 30
                        },
                        "start": {
                          "column": 12,
                          "line": 30
                        }
                      }
                    },
                    "range": [
                      819,
                      835
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 30
                      },
                      "start": {
                        "column": 12,
                        "line": 30
                      }
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "!=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "range": [
                        796,
                        797
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
                    "right": {
                      "type": "Literal",
                      "raw": "null",
                      "value": null,
                      "range": [
                        801,
                        805
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 29
                        },
                        "start": {
                          "column": 17,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      796,
                      805
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 29
                      },
                      "start": {
                        "column": 12,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    792,
                    1022
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 36
                    },
                    "start": {
                      "column": 8,
                      "line": 29
                    }
                  }
                }
              ],
              "range": [
                728,
                1028
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 37
                },
                "start": {
                  "column": 17,
                  "line": 27
                }
              }
            },
            "test": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                722,
                726
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 27
                },
                "start": {
                  "column": 11,
                  "line": 27
                }
              }
            },
            "range": [
              715,
              1028
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          }
        ],
        "range": [
          668,
          1030
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 38
          },
          "start": {
            "column": 28,
            "line": 25
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "saverGen2",
        "optional": false,
        "range": [
          656,
          665
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 25
          },
          "start": {
            "column": 16,
            "line": 25
          }
        }
      },
      "params": [],
      "range": [
        640,
        1030
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 39
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
