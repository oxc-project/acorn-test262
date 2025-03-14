__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    11,
    284
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          29,
          51
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isSuccess",
              "optional": false,
              "range": [
                33,
                42
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 4
                },
                "start": {
                  "column": 2,
                  "line": 4
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
                  "column": 17,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              },
              "range": [
                42,
                48
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    44,
                    48
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 4
                    },
                    "start": {
                      "column": 13,
                      "line": 4
                    }
                  }
                },
                "range": [
                  44,
                  48
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 4
                  },
                  "start": {
                    "column": 13,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              33,
              49
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 4
              },
              "start": {
                "column": 2,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 18,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Success",
        "optional": false,
        "range": [
          21,
          28
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "range": [
        11,
        51
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          68,
          91
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isSuccess",
              "optional": false,
              "range": [
                72,
                81
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 8
                },
                "start": {
                  "column": 2,
                  "line": 8
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
                  "column": 18,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 8
                }
              },
              "range": [
                81,
                88
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "false",
                  "value": false,
                  "range": [
                    83,
                    88
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 8
                    },
                    "start": {
                      "column": 13,
                      "line": 8
                    }
                  }
                },
                "range": [
                  83,
                  88
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 8
                  },
                  "start": {
                    "column": 13,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              72,
              89
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 8
              },
              "start": {
                "column": 2,
                "line": 8
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 15,
            "line": 7
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Fail",
        "optional": false,
        "range": [
          63,
          67
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 7
          },
          "start": {
            "column": 10,
            "line": 7
          }
        }
      },
      "range": [
        53,
        91
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Item",
        "optional": false,
        "range": [
          98,
          102
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 11
          },
          "start": {
            "column": 5,
            "line": 11
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Success",
              "optional": false,
              "range": [
                105,
                112
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 11
                },
                "start": {
                  "column": 12,
                  "line": 11
                }
              }
            },
            "range": [
              105,
              112
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 11
              },
              "start": {
                "column": 12,
                "line": 11
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Fail",
              "optional": false,
              "range": [
                115,
                119
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 11
                },
                "start": {
                  "column": 22,
                  "line": 11
                }
              }
            },
            "range": [
              115,
              119
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 11
              },
              "start": {
                "column": 22,
                "line": 11
              }
            }
          }
        ],
        "range": [
          105,
          119
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 11
          },
          "start": {
            "column": 12,
            "line": 11
          }
        }
      },
      "range": [
        93,
        120
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 11
        },
        "start": {
          "column": 0,
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      194,
                      196
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 14
                      },
                      "start": {
                        "column": 47,
                        "line": 14
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
                      "name": "value",
                      "optional": false,
                      "range": [
                        185,
                        190
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 14
                        },
                        "start": {
                          "column": 38,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "range": [
                    185,
                    196
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 14
                    },
                    "start": {
                      "column": 38,
                      "line": 14
                    }
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "SpreadElement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "item",
                              "optional": false,
                              "range": [
                                169,
                                173
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 14
                                },
                                "start": {
                                  "column": 22,
                                  "line": 14
                                }
                              }
                            },
                            "range": [
                              166,
                              173
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 14
                              },
                              "start": {
                                "column": 19,
                                "line": 14
                              }
                            }
                          }
                        ],
                        "range": [
                          164,
                          175
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 14
                          },
                          "start": {
                            "column": 17,
                            "line": 14
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
                          "name": "item",
                          "optional": false,
                          "range": [
                            155,
                            159
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 14
                            },
                            "start": {
                              "column": 8,
                              "line": 14
                            }
                          }
                        }
                      ],
                      "range": [
                        155,
                        176
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 14
                        },
                        "start": {
                          "column": 8,
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
                      "name": "a",
                      "optional": false,
                      "range": [
                        149,
                        150
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 14
                        },
                        "start": {
                          "column": 2,
                          "line": 14
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "range": [
                        151,
                        154
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 14
                        },
                        "start": {
                          "column": 4,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      149,
                      154
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 14
                      },
                      "start": {
                        "column": 2,
                        "line": 14
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    149,
                    177
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 14
                    },
                    "start": {
                      "column": 2,
                      "line": 14
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "filter",
                  "optional": false,
                  "range": [
                    178,
                    184
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 14
                    },
                    "start": {
                      "column": 31,
                      "line": 14
                    }
                  }
                },
                "range": [
                  149,
                  184
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 14
                  },
                  "start": {
                    "column": 2,
                    "line": 14
                  }
                }
              },
              "optional": false,
              "range": [
                149,
                197
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 14
                },
                "start": {
                  "column": 2,
                  "line": 14
                }
              }
            },
            "range": [
              149,
              198
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 14
              },
              "start": {
                "column": 2,
                "line": 14
              }
            }
          }
        ],
        "range": [
          145,
          200
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 23,
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
        "name": "f1",
        "optional": false,
        "range": [
          131,
          133
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 13
          },
          "start": {
            "column": 9,
            "line": 13
          }
        }
      },
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
                "column": 21,
                "line": 13
              },
              "start": {
                "column": 13,
                "line": 13
              }
            },
            "range": [
              135,
              143
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Item",
                  "optional": false,
                  "range": [
                    137,
                    141
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 13
                    },
                    "start": {
                      "column": 15,
                      "line": 13
                    }
                  }
                },
                "range": [
                  137,
                  141
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 13
                  },
                  "start": {
                    "column": 15,
                    "line": 13
                  }
                }
              },
              "range": [
                137,
                143
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 13
                },
                "start": {
                  "column": 15,
                  "line": 13
                }
              }
            }
          },
          "range": [
            134,
            143
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 13
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
        200
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 13
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
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      277,
                      279
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 18
                      },
                      "start": {
                        "column": 47,
                        "line": 18
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
                      "name": "value",
                      "optional": false,
                      "range": [
                        268,
                        273
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 18
                        },
                        "start": {
                          "column": 38,
                          "line": 18
                        }
                      }
                    }
                  ],
                  "range": [
                    268,
                    279
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 18
                    },
                    "start": {
                      "column": 38,
                      "line": 18
                    }
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "SpreadElement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "item",
                              "optional": false,
                              "range": [
                                252,
                                256
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 18
                                },
                                "start": {
                                  "column": 22,
                                  "line": 18
                                }
                              }
                            },
                            "range": [
                              249,
                              256
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 18
                              },
                              "start": {
                                "column": 19,
                                "line": 18
                              }
                            }
                          }
                        ],
                        "range": [
                          247,
                          258
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 18
                          },
                          "start": {
                            "column": 17,
                            "line": 18
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
                          "name": "item",
                          "optional": false,
                          "range": [
                            238,
                            242
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
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
                        238,
                        259
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 18
                        },
                        "start": {
                          "column": 8,
                          "line": 18
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
                      "name": "a",
                      "optional": false,
                      "range": [
                        232,
                        233
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 18
                        },
                        "start": {
                          "column": 2,
                          "line": 18
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "map",
                      "optional": false,
                      "range": [
                        234,
                        237
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 18
                        },
                        "start": {
                          "column": 4,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      232,
                      237
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 18
                      },
                      "start": {
                        "column": 2,
                        "line": 18
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    232,
                    260
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 18
                    },
                    "start": {
                      "column": 2,
                      "line": 18
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "filter",
                  "optional": false,
                  "range": [
                    261,
                    267
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 18
                    },
                    "start": {
                      "column": 31,
                      "line": 18
                    }
                  }
                },
                "range": [
                  232,
                  267
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 18
                  },
                  "start": {
                    "column": 2,
                    "line": 18
                  }
                }
              },
              "optional": false,
              "range": [
                232,
                280
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 18
                },
                "start": {
                  "column": 2,
                  "line": 18
                }
              }
            },
            "range": [
              232,
              281
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 18
              },
              "start": {
                "column": 2,
                "line": 18
              }
            }
          }
        ],
        "range": [
          228,
          283
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 26,
            "line": 17
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "range": [
          211,
          213
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 17
          },
          "start": {
            "column": 9,
            "line": 17
          }
        }
      },
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
                "column": 24,
                "line": 17
              },
              "start": {
                "column": 16,
                "line": 17
              }
            },
            "range": [
              218,
              226
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Item",
                  "optional": false,
                  "range": [
                    220,
                    224
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 17
                    },
                    "start": {
                      "column": 18,
                      "line": 17
                    }
                  }
                },
                "range": [
                  220,
                  224
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 17
                  },
                  "start": {
                    "column": 18,
                    "line": 17
                  }
                }
              },
              "range": [
                220,
                226
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 17
                },
                "start": {
                  "column": 18,
                  "line": 17
                }
              }
            }
          },
          "range": [
            217,
            226
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 17
            },
            "start": {
              "column": 15,
              "line": 17
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 17
          },
          "start": {
            "column": 11,
            "line": 17
          }
        },
        "range": [
          213,
          216
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
                214,
                215
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 17
                },
                "start": {
                  "column": 12,
                  "line": 17
                }
              }
            },
            "out": false,
            "range": [
              214,
              215
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 17
              },
              "start": {
                "column": 12,
                "line": 17
              }
            }
          }
        ]
      },
      "range": [
        202,
        283
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 20
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
