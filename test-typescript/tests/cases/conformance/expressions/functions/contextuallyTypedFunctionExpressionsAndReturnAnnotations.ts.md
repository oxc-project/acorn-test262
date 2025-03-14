__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    355
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          17,
          20
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 59,
                "line": 1
              },
              "start": {
                "column": 22,
                "line": 1
              }
            },
            "range": [
              22,
              59
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 1
                      },
                      "start": {
                        "column": 26,
                        "line": 1
                      }
                    },
                    "range": [
                      26,
                      34
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        28,
                        34
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 1
                        },
                        "start": {
                          "column": 28,
                          "line": 1
                        }
                      }
                    }
                  },
                  "range": [
                    25,
                    34
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 1
                    },
                    "start": {
                      "column": 25,
                      "line": 1
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 1
                  },
                  "start": {
                    "column": 36,
                    "line": 1
                  }
                },
                "range": [
                  36,
                  59
                ],
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y2",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 1
                          },
                          "start": {
                            "column": 42,
                            "line": 1
                          }
                        },
                        "range": [
                          42,
                          50
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            44,
                            50
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 1
                            },
                            "start": {
                              "column": 44,
                              "line": 1
                            }
                          }
                        }
                      },
                      "range": [
                        40,
                        50
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 1
                        },
                        "start": {
                          "column": 40,
                          "line": 1
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 1
                      },
                      "start": {
                        "column": 52,
                        "line": 1
                      }
                    },
                    "range": [
                      52,
                      59
                    ],
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "range": [
                        55,
                        59
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 1
                        },
                        "start": {
                          "column": 55,
                          "line": 1
                        }
                      }
                    }
                  },
                  "range": [
                    39,
                    59
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 1
                    },
                    "start": {
                      "column": 39,
                      "line": 1
                    }
                  }
                }
              },
              "range": [
                24,
                59
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 1
                },
                "start": {
                  "column": 24,
                  "line": 1
                }
              }
            }
          },
          "range": [
            21,
            59
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 1
            },
            "start": {
              "column": 21,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        61
      ],
      "loc": {
        "end": {
          "column": 61,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
                        "name": "z",
                        "optional": false,
                        "range": [
                          178,
                          179
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 5
                          },
                          "start": {
                            "column": 8,
                            "line": 5
                          }
                        }
                      },
                      "init": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              191,
                              192
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 5
                              },
                              "start": {
                                "column": 21,
                                "line": 5
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
                            "name": "y",
                            "optional": false,
                            "range": [
                              182,
                              183
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 5
                              },
                              "start": {
                                "column": 12,
                                "line": 5
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "charAt",
                            "optional": false,
                            "range": [
                              184,
                              190
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 5
                              },
                              "start": {
                                "column": 14,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            182,
                            190
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 5
                            },
                            "start": {
                              "column": 12,
                              "line": 5
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          182,
                          193
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 5
                          },
                          "start": {
                            "column": 12,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        178,
                        193
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 5
                        },
                        "start": {
                          "column": 8,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    174,
                    194
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 5
                    },
                    "start": {
                      "column": 4,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "null",
                    "value": null,
                    "range": [
                      226,
                      230
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 6
                      },
                      "start": {
                        "column": 11,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    219,
                    231
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 6
                    },
                    "start": {
                      "column": 4,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                168,
                233
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 7
                },
                "start": {
                  "column": 33,
                  "line": 4
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  140,
                  141
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 4
                  },
                  "start": {
                    "column": 5,
                    "line": 4
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 4
                },
                "start": {
                  "column": 7,
                  "line": 4
                }
              },
              "range": [
                142,
                164
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 4
                        },
                        "start": {
                          "column": 12,
                          "line": 4
                        }
                      },
                      "range": [
                        147,
                        155
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          149,
                          155
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 4
                          },
                          "start": {
                            "column": 14,
                            "line": 4
                          }
                        }
                      }
                    },
                    "range": [
                      145,
                      155
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 4
                      },
                      "start": {
                        "column": 10,
                        "line": 4
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 4
                    },
                    "start": {
                      "column": 22,
                      "line": 4
                    }
                  },
                  "range": [
                    157,
                    164
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      160,
                      164
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 4
                      },
                      "start": {
                        "column": 25,
                        "line": 4
                      }
                    }
                  }
                },
                "range": [
                  144,
                  164
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 4
                  },
                  "start": {
                    "column": 9,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              139,
              233
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            135,
            138
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 4
            },
            "start": {
              "column": 0,
              "line": 4
            }
          }
        },
        "optional": false,
        "range": [
          135,
          234
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        135,
        235
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 4
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
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrowFunctionExpression",
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
                                "name": "z",
                                "optional": false,
                                "range": [
                                  289,
                                  290
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 11
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
                                    "name": "y2",
                                    "optional": false,
                                    "range": [
                                      293,
                                      295
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 18,
                                        "line": 11
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 11
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "toFixed",
                                    "optional": false,
                                    "range": [
                                      296,
                                      303
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 26,
                                        "line": 11
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 11
                                      }
                                    }
                                  },
                                  "range": [
                                    293,
                                    303
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 11
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  293,
                                  305
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 11
                                  }
                                }
                              },
                              "range": [
                                289,
                                305
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
                            }
                          ],
                          "declare": false,
                          "kind": "var",
                          "range": [
                            285,
                            306
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 11
                            },
                            "start": {
                              "column": 8,
                              "line": 11
                            }
                          }
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              342,
                              343
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
                          "range": [
                            335,
                            344
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
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
                        275,
                        350
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 13
                        },
                        "start": {
                          "column": 17,
                          "line": 10
                        }
                      }
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y2",
                        "optional": false,
                        "range": [
                          269,
                          271
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 10
                          },
                          "start": {
                            "column": 11,
                            "line": 10
                          }
                        }
                      }
                    ],
                    "range": [
                      269,
                      350
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 13
                      },
                      "start": {
                        "column": 11,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    262,
                    351
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 13
                    },
                    "start": {
                      "column": 4,
                      "line": 10
                    }
                  }
                }
              ],
              "range": [
                256,
                353
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 14
                },
                "start": {
                  "column": 19,
                  "line": 9
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 9
                    },
                    "start": {
                      "column": 6,
                      "line": 9
                    }
                  },
                  "range": [
                    243,
                    251
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      245,
                      251
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  }
                },
                "range": [
                  242,
                  251
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 9
                  },
                  "start": {
                    "column": 5,
                    "line": 9
                  }
                }
              }
            ],
            "range": [
              241,
              353
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            237,
            240
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
        "range": [
          237,
          354
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 14
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        237,
        355
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 14
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
      "column": 3,
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
