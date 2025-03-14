__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    215
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
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 1
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              },
              "range": [
                19,
                24
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  21,
                  24
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 1
                  },
                  "start": {
                    "column": 21,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              12,
              24
            ],
            "loc": {
              "end": {
                "column": 24,
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
            24
          ],
          "loc": {
            "end": {
              "column": 24,
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
      "kind": "var",
      "range": [
        0,
        25
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 2
                },
                "start": {
                  "column": 9,
                  "line": 2
                }
              },
              "range": [
                35,
                52
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSMethodSignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          38,
                          39
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 2
                          },
                          "start": {
                            "column": 12,
                            "line": 2
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
                            "column": 23,
                            "line": 2
                          },
                          "start": {
                            "column": 15,
                            "line": 2
                          }
                        },
                        "range": [
                          41,
                          49
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            43,
                            49
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 2
                            },
                            "start": {
                              "column": 17,
                              "line": 2
                            }
                          }
                        }
                      },
                      "static": false,
                      "range": [
                        38,
                        49
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 2
                        },
                        "start": {
                          "column": 12,
                          "line": 2
                        }
                      }
                    }
                  ],
                  "range": [
                    37,
                    50
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 2
                    },
                    "start": {
                      "column": 11,
                      "line": 2
                    }
                  }
                },
                "range": [
                  37,
                  52
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 2
                  },
                  "start": {
                    "column": 11,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              32,
              52
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 2
              },
              "start": {
                "column": 6,
                "line": 2
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "range": [
              55,
              57
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 2
              },
              "start": {
                "column": 29,
                "line": 2
              }
            }
          },
          "range": [
            32,
            57
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 2
            },
            "start": {
              "column": 6,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        26,
        58
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
                  "type": "ClassExpression",
                  "abstract": false,
                  "body": {
                    "type": "ClassBody",
                    "range": [
                      110,
                      173
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
                          "name": "x",
                          "optional": false,
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
                        "optional": false,
                        "override": false,
                        "readonly": false,
                        "static": true,
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "range": [
                            131,
                            132
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 5
                            },
                            "start": {
                              "column": 19,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          120,
                          133
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 5
                          },
                          "start": {
                            "column": 8,
                            "line": 5
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            149,
                            150
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 6
                            },
                            "start": {
                              "column": 15,
                              "line": 6
                            }
                          }
                        },
                        "optional": false,
                        "override": false,
                        "readonly": false,
                        "static": true,
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C",
                                "optional": false,
                                "range": [
                                  159,
                                  160
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 6
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
                                  161,
                                  162
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 6
                                  }
                                }
                              },
                              "range": [
                                159,
                                162
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 6
                                },
                                "start": {
                                  "column": 25,
                                  "line": 6
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "raw": "2",
                              "value": 2,
                              "range": [
                                165,
                                166
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 6
                                },
                                "start": {
                                  "column": 31,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              159,
                              166
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 6
                              },
                              "start": {
                                "column": 25,
                                "line": 6
                              }
                            }
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            153,
                            166
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 6
                            },
                            "start": {
                              "column": 19,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          142,
                          167
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 6
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
                        "line": 7
                      },
                      "start": {
                        "column": 21,
                        "line": 4
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
                      108,
                      109
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 4
                      },
                      "start": {
                        "column": 19,
                        "line": 4
                      }
                    }
                  },
                  "implements": [],
                  "superClass": null,
                  "range": [
                    102,
                    173
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 7
                    },
                    "start": {
                      "column": 13,
                      "line": 4
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
                  "name": "arr",
                  "optional": false,
                  "range": [
                    93,
                    96
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 4
                    },
                    "start": {
                      "column": 4,
                      "line": 4
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
                    97,
                    101
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 4
                    },
                    "start": {
                      "column": 8,
                      "line": 4
                    }
                  }
                },
                "range": [
                  93,
                  101
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 4
                  },
                  "start": {
                    "column": 4,
                    "line": 4
                  }
                }
              },
              "optional": false,
              "range": [
                93,
                174
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "range": [
              93,
              175
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          87,
          177
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 28,
            "line": 3
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
                68,
                69
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 3
                },
                "start": {
                  "column": 9,
                  "line": 3
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                72,
                73
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              }
            },
            "range": [
              68,
              73
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 3
              },
              "start": {
                "column": 9,
                "line": 3
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          64,
          73
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
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
            75,
            76
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 3
            },
            "start": {
              "column": 16,
              "line": 3
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "3",
          "value": 3,
          "range": [
            79,
            80
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 3
            },
            "start": {
              "column": 20,
              "line": 3
            }
          }
        },
        "range": [
          75,
          80
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 3
          },
          "start": {
            "column": 16,
            "line": 3
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
            82,
            83
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 3
            },
            "start": {
              "column": 23,
              "line": 3
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          82,
          85
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 3
          },
          "start": {
            "column": 23,
            "line": 3
          }
        }
      },
      "range": [
        59,
        177
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "range": [
                        207,
                        208
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 9
                        },
                        "start": {
                          "column": 29,
                          "line": 9
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "range": [
                        209,
                        210
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 9
                        },
                        "start": {
                          "column": 31,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      207,
                      210
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 9
                      },
                      "start": {
                        "column": 29,
                        "line": 9
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    207,
                    212
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 9
                    },
                    "start": {
                      "column": 29,
                      "line": 9
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
                    195,
                    202
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 9
                    },
                    "start": {
                      "column": 17,
                      "line": 9
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
                    203,
                    206
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 9
                    },
                    "start": {
                      "column": 25,
                      "line": 9
                    }
                  }
                },
                "range": [
                  195,
                  206
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 9
                  },
                  "start": {
                    "column": 17,
                    "line": 9
                  }
                }
              },
              "optional": false,
              "range": [
                195,
                213
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 9
                },
                "start": {
                  "column": 17,
                  "line": 9
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
                "name": "C",
                "optional": false,
                "range": [
                  190,
                  191
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
              }
            ],
            "range": [
              190,
              213
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 9
              },
              "start": {
                "column": 12,
                "line": 9
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
            "name": "arr",
            "optional": false,
            "range": [
              178,
              181
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 9
              },
              "start": {
                "column": 0,
                "line": 9
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forEach",
            "optional": false,
            "range": [
              182,
              189
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          "range": [
            178,
            189
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        },
        "optional": false,
        "range": [
          178,
          214
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        178,
        215
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 37,
      "line": 9
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
