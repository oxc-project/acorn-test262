__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1820
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          14,
          31
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "key",
              "optional": false,
              "range": [
                16,
                19
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 1
                },
                "start": {
                  "column": 16,
                  "line": 1
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
                  "column": 28,
                  "line": 1
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              },
              "range": [
                19,
                28
              ],
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"value\"",
                  "value": "value",
                  "range": [
                    21,
                    28
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 1
                    },
                    "start": {
                      "column": 21,
                      "line": 1
                    }
                  }
                },
                "range": [
                  21,
                  28
                ],
                "loc": {
                  "end": {
                    "column": 28,
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
              16,
              29
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 1
              },
              "start": {
                "column": 16,
                "line": 1
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 1
          },
          "start": {
            "column": 14,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Obj",
        "optional": false,
        "range": [
          10,
          13
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "range": [
        0,
        31
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "range": [
                      83,
                      86
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 4
                      },
                      "start": {
                        "column": 13,
                        "line": 4
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "raw": "\"value\"",
                    "value": "value",
                    "range": [
                      88,
                      95
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 4
                      },
                      "start": {
                        "column": 18,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    83,
                    95
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 4
                    },
                    "start": {
                      "column": 13,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                81,
                97
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "range": [
              74,
              98
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          68,
          100
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 35,
            "line": 3
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "range": [
          48,
          51
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 3
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 34,
            "line": 3
          },
          "start": {
            "column": 20,
            "line": 3
          }
        },
        "range": [
          53,
          67
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              62,
              67
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj",
                  "optional": false,
                  "range": [
                    63,
                    66
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 3
                    },
                    "start": {
                      "column": 30,
                      "line": 3
                    }
                  }
                },
                "range": [
                  63,
                  66
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 3
                  },
                  "start": {
                    "column": 30,
                    "line": 3
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 3
              },
              "start": {
                "column": 29,
                "line": 3
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "range": [
              55,
              62
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 3
              },
              "start": {
                "column": 22,
                "line": 3
              }
            }
          },
          "range": [
            55,
            67
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 3
            },
            "start": {
              "column": 22,
              "line": 3
            }
          }
        }
      },
      "range": [
        33,
        100
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
      "type": "FunctionDeclaration",
      "async": true,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "NewExpression",
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
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
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "key",
                                    "optional": false,
                                    "range": [
                                      193,
                                      196
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 21,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 18,
                                        "line": 9
                                      }
                                    }
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "Literal",
                                    "raw": "\"value\"",
                                    "value": "value",
                                    "range": [
                                      198,
                                      205
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 30,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 23,
                                        "line": 9
                                      }
                                    }
                                  },
                                  "range": [
                                    193,
                                    205
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 30,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 9
                                    }
                                  }
                                }
                              ],
                              "range": [
                                191,
                                207
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 9
                                },
                                "start": {
                                  "column": 16,
                                  "line": 9
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "resolve",
                            "optional": false,
                            "range": [
                              183,
                              190
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 9
                              },
                              "start": {
                                "column": 8,
                                "line": 9
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            183,
                            208
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 9
                            },
                            "start": {
                              "column": 8,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          183,
                          209
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
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
                      173,
                      215
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 10
                      },
                      "start": {
                        "column": 34,
                        "line": 8
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
                      "name": "resolve",
                      "optional": false,
                      "range": [
                        162,
                        169
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 8
                        },
                        "start": {
                          "column": 23,
                          "line": 8
                        }
                      }
                    }
                  ],
                  "range": [
                    162,
                    215
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 10
                    },
                    "start": {
                      "column": 23,
                      "line": 8
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "range": [
                  154,
                  161
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 8
                  },
                  "start": {
                    "column": 15,
                    "line": 8
                  }
                }
              },
              "range": [
                150,
                216
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 10
                },
                "start": {
                  "column": 11,
                  "line": 8
                }
              }
            },
            "range": [
              143,
              217
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "range": [
          137,
          219
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 35,
            "line": 7
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "range": [
          117,
          120
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 7
          },
          "start": {
            "column": 15,
            "line": 7
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 34,
            "line": 7
          },
          "start": {
            "column": 20,
            "line": 7
          }
        },
        "range": [
          122,
          136
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              131,
              136
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj",
                  "optional": false,
                  "range": [
                    132,
                    135
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 7
                    },
                    "start": {
                      "column": 30,
                      "line": 7
                    }
                  }
                },
                "range": [
                  132,
                  135
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 7
                  },
                  "start": {
                    "column": 30,
                    "line": 7
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 7
              },
              "start": {
                "column": 29,
                "line": 7
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "range": [
              124,
              131
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 7
              },
              "start": {
                "column": 22,
                "line": 7
              }
            }
          },
          "range": [
            124,
            136
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 7
            },
            "start": {
              "column": 22,
              "line": 7
            }
          }
        }
      },
      "range": [
        102,
        219
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 7
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
            "type": "ReturnStatement",
            "argument": {
              "type": "AwaitExpression",
              "argument": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "range": [
                        277,
                        280
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 14
                        },
                        "start": {
                          "column": 19,
                          "line": 14
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "\"value\"",
                      "value": "value",
                      "range": [
                        282,
                        289
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 14
                        },
                        "start": {
                          "column": 24,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      277,
                      289
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
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
                  275,
                  291
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
              },
              "range": [
                269,
                291
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 14
                },
                "start": {
                  "column": 11,
                  "line": 14
                }
              }
            },
            "range": [
              262,
              292
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "range": [
          256,
          294
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 35,
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
        "name": "fn3",
        "optional": false,
        "range": [
          236,
          239
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 13
          },
          "start": {
            "column": 15,
            "line": 13
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 34,
            "line": 13
          },
          "start": {
            "column": 20,
            "line": 13
          }
        },
        "range": [
          241,
          255
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              250,
              255
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj",
                  "optional": false,
                  "range": [
                    251,
                    254
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 13
                    },
                    "start": {
                      "column": 30,
                      "line": 13
                    }
                  }
                },
                "range": [
                  251,
                  254
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 13
                  },
                  "start": {
                    "column": 30,
                    "line": 13
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 13
              },
              "start": {
                "column": 29,
                "line": 13
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "range": [
              243,
              250
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 13
              },
              "start": {
                "column": 22,
                "line": 13
              }
            }
          },
          "range": [
            243,
            255
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 13
            },
            "start": {
              "column": 22,
              "line": 13
            }
          }
        }
      },
      "range": [
        221,
        294
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
      "async": true,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "AwaitExpression",
              "argument": {
                "type": "NewExpression",
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
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
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "key",
                                      "optional": false,
                                      "range": [
                                        393,
                                        396
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 21,
                                          "line": 19
                                        },
                                        "start": {
                                          "column": 18,
                                          "line": 19
                                        }
                                      }
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "optional": false,
                                    "shorthand": false,
                                    "value": {
                                      "type": "Literal",
                                      "raw": "\"value\"",
                                      "value": "value",
                                      "range": [
                                        398,
                                        405
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 30,
                                          "line": 19
                                        },
                                        "start": {
                                          "column": 23,
                                          "line": 19
                                        }
                                      }
                                    },
                                    "range": [
                                      393,
                                      405
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 30,
                                        "line": 19
                                      },
                                      "start": {
                                        "column": 18,
                                        "line": 19
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  391,
                                  407
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 19
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "resolve",
                              "optional": false,
                              "range": [
                                383,
                                390
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 19
                                },
                                "start": {
                                  "column": 8,
                                  "line": 19
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              383,
                              408
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 19
                              },
                              "start": {
                                "column": 8,
                                "line": 19
                              }
                            }
                          },
                          "range": [
                            383,
                            409
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 19
                            },
                            "start": {
                              "column": 8,
                              "line": 19
                            }
                          }
                        }
                      ],
                      "range": [
                        373,
                        415
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 20
                        },
                        "start": {
                          "column": 40,
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
                        "name": "resolve",
                        "optional": false,
                        "range": [
                          362,
                          369
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 18
                          },
                          "start": {
                            "column": 29,
                            "line": 18
                          }
                        }
                      }
                    ],
                    "range": [
                      362,
                      415
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 20
                      },
                      "start": {
                        "column": 29,
                        "line": 18
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "range": [
                    354,
                    361
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 18
                    },
                    "start": {
                      "column": 21,
                      "line": 18
                    }
                  }
                },
                "range": [
                  350,
                  416
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 20
                  },
                  "start": {
                    "column": 17,
                    "line": 18
                  }
                }
              },
              "range": [
                344,
                416
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 20
                },
                "start": {
                  "column": 11,
                  "line": 18
                }
              }
            },
            "range": [
              337,
              417
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          }
        ],
        "range": [
          331,
          419
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 35,
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
        "name": "fn4",
        "optional": false,
        "range": [
          311,
          314
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 17
          },
          "start": {
            "column": 15,
            "line": 17
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 34,
            "line": 17
          },
          "start": {
            "column": 20,
            "line": 17
          }
        },
        "range": [
          316,
          330
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              325,
              330
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Obj",
                  "optional": false,
                  "range": [
                    326,
                    329
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 17
                    },
                    "start": {
                      "column": 30,
                      "line": 17
                    }
                  }
                },
                "range": [
                  326,
                  329
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 17
                  },
                  "start": {
                    "column": 30,
                    "line": 17
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 17
              },
              "start": {
                "column": 29,
                "line": 17
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "range": [
              318,
              325
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 17
              },
              "start": {
                "column": 22,
                "line": 17
              }
            }
          },
          "range": [
            318,
            330
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 17
            },
            "start": {
              "column": 22,
              "line": 17
            }
          }
        }
      },
      "range": [
        296,
        419
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          443,
          467
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
              "name": "_runnable",
              "optional": false,
              "range": [
                455,
                464
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 24
                },
                "start": {
                  "column": 10,
                  "line": 24
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null,
            "range": [
              447,
              465
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 24
              },
              "start": {
                "column": 2,
                "line": 24
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 22,
            "line": 23
          }
        }
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Context",
        "optional": false,
        "range": [
          435,
          442
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 23
          },
          "start": {
            "column": 14,
            "line": 23
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        421,
        467
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Done",
        "optional": false,
        "range": [
          473,
          477
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 26
          },
          "start": {
            "column": 5,
            "line": 26
          }
        }
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "err",
            "optional": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 26
                },
                "start": {
                  "column": 17,
                  "line": 26
                }
              },
              "range": [
                485,
                490
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  487,
                  490
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 26
                  },
                  "start": {
                    "column": 19,
                    "line": 26
                  }
                }
              }
            },
            "range": [
              481,
              490
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 26
              },
              "start": {
                "column": 13,
                "line": 26
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 31,
              "line": 26
            },
            "start": {
              "column": 24,
              "line": 26
            }
          },
          "range": [
            492,
            499
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              495,
              499
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 26
              },
              "start": {
                "column": 27,
                "line": 26
              }
            }
          }
        },
        "range": [
          480,
          499
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 26
          },
          "start": {
            "column": 12,
            "line": 26
          }
        }
      },
      "range": [
        468,
        500
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Func",
        "optional": false,
        "range": [
          506,
          510
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 27
          },
          "start": {
            "column": 5,
            "line": 27
          }
        }
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "this",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 27
                },
                "start": {
                  "column": 17,
                  "line": 27
                }
              },
              "range": [
                518,
                527
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Context",
                  "optional": false,
                  "range": [
                    520,
                    527
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 27
                    },
                    "start": {
                      "column": 19,
                      "line": 27
                    }
                  }
                },
                "range": [
                  520,
                  527
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 27
                  },
                  "start": {
                    "column": 19,
                    "line": 27
                  }
                }
              }
            },
            "range": [
              514,
              527
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 27
              },
              "start": {
                "column": 13,
                "line": 27
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "done",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 27
                },
                "start": {
                  "column": 32,
                  "line": 27
                }
              },
              "range": [
                533,
                539
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Done",
                  "optional": false,
                  "range": [
                    535,
                    539
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 27
                    },
                    "start": {
                      "column": 34,
                      "line": 27
                    }
                  }
                },
                "range": [
                  535,
                  539
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 27
                  },
                  "start": {
                    "column": 34,
                    "line": 27
                  }
                }
              }
            },
            "range": [
              529,
              539
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 27
              },
              "start": {
                "column": 28,
                "line": 27
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 47,
              "line": 27
            },
            "start": {
              "column": 40,
              "line": 27
            }
          },
          "range": [
            541,
            548
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              544,
              548
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 27
              },
              "start": {
                "column": 43,
                "line": 27
              }
            }
          }
        },
        "range": [
          513,
          548
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 27
          },
          "start": {
            "column": 12,
            "line": 27
          }
        }
      },
      "range": [
        501,
        549
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AsyncFunc",
        "optional": false,
        "range": [
          555,
          564
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 28
          },
          "start": {
            "column": 5,
            "line": 28
          }
        }
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "this",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 31,
                  "line": 28
                },
                "start": {
                  "column": 22,
                  "line": 28
                }
              },
              "range": [
                572,
                581
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Context",
                  "optional": false,
                  "range": [
                    574,
                    581
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 28
                    },
                    "start": {
                      "column": 24,
                      "line": 28
                    }
                  }
                },
                "range": [
                  574,
                  581
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 28
                  },
                  "start": {
                    "column": 24,
                    "line": 28
                  }
                }
              }
            },
            "range": [
              568,
              581
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 28
              },
              "start": {
                "column": 18,
                "line": 28
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 52,
              "line": 28
            },
            "start": {
              "column": 33,
              "line": 28
            }
          },
          "range": [
            583,
            602
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                597,
                602
              ],
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "range": [
                    598,
                    601
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 28
                    },
                    "start": {
                      "column": 48,
                      "line": 28
                    }
                  }
                }
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
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "PromiseLike",
              "optional": false,
              "range": [
                586,
                597
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 28
                },
                "start": {
                  "column": 36,
                  "line": 28
                }
              }
            },
            "range": [
              586,
              602
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 28
              },
              "start": {
                "column": 36,
                "line": 28
              }
            }
          }
        },
        "range": [
          567,
          602
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 28
          },
          "start": {
            "column": 17,
            "line": 28
          }
        }
      },
      "range": [
        550,
        603
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          628,
          753
        ],
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 31
                    },
                    "start": {
                      "column": 5,
                      "line": 31
                    }
                  },
                  "range": [
                    635,
                    641
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Func",
                      "optional": false,
                      "range": [
                        637,
                        641
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 31
                        },
                        "start": {
                          "column": 7,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      637,
                      641
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 31
                      },
                      "start": {
                        "column": 7,
                        "line": 31
                      }
                    }
                  }
                },
                "range": [
                  633,
                  641
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 31
                  },
                  "start": {
                    "column": 3,
                    "line": 31
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 31
                },
                "start": {
                  "column": 12,
                  "line": 31
                }
              },
              "range": [
                642,
                648
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  644,
                  648
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 31
                  },
                  "start": {
                    "column": 14,
                    "line": 31
                  }
                }
              }
            },
            "range": [
              632,
              649
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 31
              },
              "start": {
                "column": 2,
                "line": 31
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 32
                    },
                    "start": {
                      "column": 5,
                      "line": 32
                    }
                  },
                  "range": [
                    655,
                    666
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncFunc",
                      "optional": false,
                      "range": [
                        657,
                        666
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 32
                        },
                        "start": {
                          "column": 7,
                          "line": 32
                        }
                      }
                    },
                    "range": [
                      657,
                      666
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 32
                      },
                      "start": {
                        "column": 7,
                        "line": 32
                      }
                    }
                  }
                },
                "range": [
                  653,
                  666
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 32
                  },
                  "start": {
                    "column": 3,
                    "line": 32
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 32
                },
                "start": {
                  "column": 17,
                  "line": 32
                }
              },
              "range": [
                667,
                673
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  669,
                  673
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
              }
            },
            "range": [
              652,
              674
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 32
              },
              "start": {
                "column": 2,
                "line": 32
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "title",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 33
                    },
                    "start": {
                      "column": 8,
                      "line": 33
                    }
                  },
                  "range": [
                    683,
                    691
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      685,
                      691
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 33
                      },
                      "start": {
                        "column": 10,
                        "line": 33
                      }
                    }
                  }
                },
                "range": [
                  678,
                  691
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 33
                  },
                  "start": {
                    "column": 3,
                    "line": 33
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 33
                    },
                    "start": {
                      "column": 21,
                      "line": 33
                    }
                  },
                  "range": [
                    696,
                    702
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Func",
                      "optional": false,
                      "range": [
                        698,
                        702
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 33
                        },
                        "start": {
                          "column": 23,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      698,
                      702
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 33
                      },
                      "start": {
                        "column": 23,
                        "line": 33
                      }
                    }
                  }
                },
                "range": [
                  693,
                  702
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 33
                  },
                  "start": {
                    "column": 18,
                    "line": 33
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 33
                },
                "start": {
                  "column": 28,
                  "line": 33
                }
              },
              "range": [
                703,
                709
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  705,
                  709
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 33
                  },
                  "start": {
                    "column": 30,
                    "line": 33
                  }
                }
              }
            },
            "range": [
              677,
              710
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 33
              },
              "start": {
                "column": 2,
                "line": 33
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "title",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 34
                    },
                    "start": {
                      "column": 8,
                      "line": 34
                    }
                  },
                  "range": [
                    719,
                    727
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      721,
                      727
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 34
                      },
                      "start": {
                        "column": 10,
                        "line": 34
                      }
                    }
                  }
                },
                "range": [
                  714,
                  727
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 34
                  },
                  "start": {
                    "column": 3,
                    "line": 34
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 34
                    },
                    "start": {
                      "column": 21,
                      "line": 34
                    }
                  },
                  "range": [
                    732,
                    743
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AsyncFunc",
                      "optional": false,
                      "range": [
                        734,
                        743
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 34
                        },
                        "start": {
                          "column": 23,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      734,
                      743
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 34
                      },
                      "start": {
                        "column": 23,
                        "line": 34
                      }
                    }
                  }
                },
                "range": [
                  729,
                  743
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 34
                  },
                  "start": {
                    "column": 18,
                    "line": 34
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 39,
                  "line": 34
                },
                "start": {
                  "column": 33,
                  "line": 34
                }
              },
              "range": [
                744,
                750
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  746,
                  750
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 34
                  },
                  "start": {
                    "column": 35,
                    "line": 34
                  }
                }
              }
            },
            "range": [
              713,
              751
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 34
              },
              "start": {
                "column": 2,
                "line": 34
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 23,
            "line": 30
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestFunction",
        "optional": false,
        "range": [
          615,
          627
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 30
          },
          "start": {
            "column": 10,
            "line": 30
          }
        }
      },
      "range": [
        605,
        753
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 30
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
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 37
                },
                "start": {
                  "column": 18,
                  "line": 37
                }
              },
              "range": [
                773,
                787
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TestFunction",
                  "optional": false,
                  "range": [
                    775,
                    787
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 37
                    },
                    "start": {
                      "column": 20,
                      "line": 37
                    }
                  }
                },
                "range": [
                  775,
                  787
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 37
                  },
                  "start": {
                    "column": 20,
                    "line": 37
                  }
                }
              }
            },
            "range": [
              769,
              787
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 37
              },
              "start": {
                "column": 14,
                "line": 37
              }
            }
          },
          "init": null,
          "range": [
            769,
            787
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 37
            },
            "start": {
              "column": 14,
              "line": 37
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        755,
        788
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          816,
          924
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "pid",
              "optional": false,
              "range": [
                820,
                823
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 40
                },
                "start": {
                  "column": 2,
                  "line": 40
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
                  "column": 13,
                  "line": 40
                },
                "start": {
                  "column": 5,
                  "line": 40
                }
              },
              "range": [
                823,
                831
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  825,
                  831
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 40
                  },
                  "start": {
                    "column": 7,
                    "line": 40
                  }
                }
              }
            },
            "range": [
              820,
              832
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 40
              },
              "start": {
                "column": 2,
                "line": 40
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "range": [
                835,
                839
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 41
                },
                "start": {
                  "column": 2,
                  "line": 41
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
                  "column": 14,
                  "line": 41
                },
                "start": {
                  "column": 6,
                  "line": 41
                }
              },
              "range": [
                839,
                847
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  841,
                  847
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 41
                  },
                  "start": {
                    "column": 8,
                    "line": 41
                  }
                }
              }
            },
            "range": [
              835,
              848
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 41
              },
              "start": {
                "column": 2,
                "line": 41
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "memory",
              "optional": false,
              "range": [
                851,
                857
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 42
                },
                "start": {
                  "column": 2,
                  "line": 42
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 42
                },
                "start": {
                  "column": 9,
                  "line": 42
                }
              },
              "range": [
                858,
                866
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  860,
                  866
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 42
                  },
                  "start": {
                    "column": 11,
                    "line": 42
                  }
                }
              }
            },
            "range": [
              851,
              867
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 42
              },
              "start": {
                "column": 2,
                "line": 42
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commandLine",
              "optional": false,
              "range": [
                870,
                881
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 43
                },
                "start": {
                  "column": 2,
                  "line": 43
                }
              }
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 43
                },
                "start": {
                  "column": 14,
                  "line": 43
                }
              },
              "range": [
                882,
                890
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  884,
                  890
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 43
                  },
                  "start": {
                    "column": 16,
                    "line": 43
                  }
                }
              }
            },
            "range": [
              870,
              891
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 43
              },
              "start": {
                "column": 2,
                "line": 43
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "children",
              "optional": false,
              "range": [
                894,
                902
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 44
                },
                "start": {
                  "column": 2,
                  "line": 44
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
                  "column": 29,
                  "line": 44
                },
                "start": {
                  "column": 10,
                  "line": 44
                }
              },
              "range": [
                902,
                921
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ProcessTreeNode",
                    "optional": false,
                    "range": [
                      904,
                      919
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 44
                      },
                      "start": {
                        "column": 12,
                        "line": 44
                      }
                    }
                  },
                  "range": [
                    904,
                    919
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 44
                    },
                    "start": {
                      "column": 12,
                      "line": 44
                    }
                  }
                },
                "range": [
                  904,
                  921
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 44
                  },
                  "start": {
                    "column": 12,
                    "line": 44
                  }
                }
              }
            },
            "range": [
              894,
              922
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 44
              },
              "start": {
                "column": 2,
                "line": 44
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 45
          },
          "start": {
            "column": 26,
            "line": 39
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ProcessTreeNode",
        "optional": false,
        "range": [
          800,
          815
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 39
          },
          "start": {
            "column": 10,
            "line": 39
          }
        }
      },
      "range": [
        790,
        924
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 39
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        926,
        1037
      ],
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "getProcessTree",
          "optional": false,
          "range": [
            950,
            964
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 47
            },
            "start": {
              "column": 24,
              "line": 47
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "rootPid",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 48
                },
                "start": {
                  "column": 9,
                  "line": 48
                }
              },
              "range": [
                975,
                983
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  977,
                  983
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 48
                  },
                  "start": {
                    "column": 11,
                    "line": 48
                  }
                }
              }
            },
            "range": [
              968,
              983
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 48
              },
              "start": {
                "column": 2,
                "line": 48
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "callback",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 43,
                  "line": 49
                },
                "start": {
                  "column": 10,
                  "line": 49
                }
              },
              "range": [
                995,
                1028
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "tree",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 49
                        },
                        "start": {
                          "column": 17,
                          "line": 49
                        }
                      },
                      "range": [
                        1002,
                        1019
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ProcessTreeNode",
                          "optional": false,
                          "range": [
                            1004,
                            1019
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 49
                            },
                            "start": {
                              "column": 19,
                              "line": 49
                            }
                          }
                        },
                        "range": [
                          1004,
                          1019
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 49
                          },
                          "start": {
                            "column": 19,
                            "line": 49
                          }
                        }
                      }
                    },
                    "range": [
                      998,
                      1019
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 49
                      },
                      "start": {
                        "column": 13,
                        "line": 49
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 49
                    },
                    "start": {
                      "column": 36,
                      "line": 49
                    }
                  },
                  "range": [
                    1021,
                    1028
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      1024,
                      1028
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 49
                      },
                      "start": {
                        "column": 39,
                        "line": 49
                      }
                    }
                  }
                },
                "range": [
                  997,
                  1028
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 49
                  },
                  "start": {
                    "column": 12,
                    "line": 49
                  }
                }
              }
            },
            "range": [
              987,
              1028
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 49
              },
              "start": {
                "column": 2,
                "line": 49
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 7,
              "line": 50
            },
            "start": {
              "column": 1,
              "line": 50
            }
          },
          "range": [
            1030,
            1036
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              1032,
              1036
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 50
              },
              "start": {
                "column": 3,
                "line": 50
              }
            }
          }
        },
        "range": [
          933,
          1037
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 50
          },
          "start": {
            "column": 7,
            "line": 47
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 8,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 47
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
            "raw": "\"windows-process-tree\"",
            "value": "windows-process-tree",
            "range": [
              1044,
              1066
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 52
              },
              "start": {
                "column": 5,
                "line": 52
              }
            }
          },
          {
            "type": "ArrowFunctionExpression",
            "async": true,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "NewExpression",
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
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
                                    "type": "Literal",
                                    "raw": "123",
                                    "value": 123,
                                    "range": [
                                      1145,
                                      1148
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 22,
                                        "line": 54
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 54
                                      }
                                    }
                                  },
                                  {
                                    "type": "ArrowFunctionExpression",
                                    "async": false,
                                    "body": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "IfStatement",
                                          "alternate": {
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
                                                          "type": "Literal",
                                                          "raw": "\"windows-process-tree\"",
                                                          "value": "windows-process-tree",
                                                          "range": [
                                                            1239,
                                                            1261
                                                          ],
                                                          "loc": {
                                                            "end": {
                                                              "column": 47,
                                                              "line": 58
                                                            },
                                                            "start": {
                                                              "column": 25,
                                                              "line": 58
                                                            }
                                                          }
                                                        }
                                                      ],
                                                      "callee": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "Error",
                                                        "optional": false,
                                                        "range": [
                                                          1233,
                                                          1238
                                                        ],
                                                        "loc": {
                                                          "end": {
                                                            "column": 24,
                                                            "line": 58
                                                          },
                                                          "start": {
                                                            "column": 19,
                                                            "line": 58
                                                          }
                                                        }
                                                      },
                                                      "range": [
                                                        1229,
                                                        1262
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 48,
                                                          "line": 58
                                                        },
                                                        "start": {
                                                          "column": 15,
                                                          "line": 58
                                                        }
                                                      }
                                                    }
                                                  ],
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "reject",
                                                    "optional": false,
                                                    "range": [
                                                      1222,
                                                      1228
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 14,
                                                        "line": 58
                                                      },
                                                      "start": {
                                                        "column": 8,
                                                        "line": 58
                                                      }
                                                    }
                                                  },
                                                  "optional": false,
                                                  "range": [
                                                    1222,
                                                    1263
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 49,
                                                      "line": 58
                                                    },
                                                    "start": {
                                                      "column": 8,
                                                      "line": 58
                                                    }
                                                  }
                                                },
                                                "range": [
                                                  1222,
                                                  1264
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 50,
                                                    "line": 58
                                                  },
                                                  "start": {
                                                    "column": 8,
                                                    "line": 58
                                                  }
                                                }
                                              }
                                            ],
                                            "range": [
                                              1212,
                                              1272
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 7,
                                                "line": 59
                                              },
                                              "start": {
                                                "column": 13,
                                                "line": 57
                                              }
                                            }
                                          },
                                          "consequent": {
                                            "type": "BlockStatement",
                                            "body": [
                                              {
                                                "type": "ExpressionStatement",
                                                "expression": {
                                                  "type": "CallExpression",
                                                  "arguments": [],
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "resolve",
                                                    "optional": false,
                                                    "range": [
                                                      1188,
                                                      1195
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 15,
                                                        "line": 56
                                                      },
                                                      "start": {
                                                        "column": 8,
                                                        "line": 56
                                                      }
                                                    }
                                                  },
                                                  "optional": false,
                                                  "range": [
                                                    1188,
                                                    1197
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 17,
                                                      "line": 56
                                                    },
                                                    "start": {
                                                      "column": 8,
                                                      "line": 56
                                                    }
                                                  }
                                                },
                                                "range": [
                                                  1188,
                                                  1198
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 18,
                                                    "line": 56
                                                  },
                                                  "start": {
                                                    "column": 8,
                                                    "line": 56
                                                  }
                                                }
                                              }
                                            ],
                                            "range": [
                                              1178,
                                              1206
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 7,
                                                "line": 57
                                              },
                                              "start": {
                                                "column": 16,
                                                "line": 55
                                              }
                                            }
                                          },
                                          "test": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "tree",
                                            "optional": false,
                                            "range": [
                                              1172,
                                              1176
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 14,
                                                "line": 55
                                              },
                                              "start": {
                                                "column": 10,
                                                "line": 55
                                              }
                                            }
                                          },
                                          "range": [
                                            1168,
                                            1272
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 7,
                                              "line": 59
                                            },
                                            "start": {
                                              "column": 6,
                                              "line": 55
                                            }
                                          }
                                        }
                                      ],
                                      "range": [
                                        1160,
                                        1278
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 5,
                                          "line": 60
                                        },
                                        "start": {
                                          "column": 34,
                                          "line": 54
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
                                        "name": "tree",
                                        "optional": false,
                                        "range": [
                                          1151,
                                          1155
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 29,
                                            "line": 54
                                          },
                                          "start": {
                                            "column": 25,
                                            "line": 54
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      1150,
                                      1278
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 5,
                                        "line": 60
                                      },
                                      "start": {
                                        "column": 24,
                                        "line": 54
                                      }
                                    }
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getProcessTree",
                                  "optional": false,
                                  "range": [
                                    1130,
                                    1144
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
                                      "line": 54
                                    },
                                    "start": {
                                      "column": 4,
                                      "line": 54
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  1130,
                                  1279
                                ],
                                "loc": {
                                  "end": {
                                    "column": 6,
                                    "line": 60
                                  },
                                  "start": {
                                    "column": 4,
                                    "line": 54
                                  }
                                }
                              },
                              "range": [
                                1130,
                                1280
                              ],
                              "loc": {
                                "end": {
                                  "column": 7,
                                  "line": 60
                                },
                                "start": {
                                  "column": 4,
                                  "line": 54
                                }
                              }
                            }
                          ],
                          "range": [
                            1124,
                            1284
                          ],
                          "loc": {
                            "end": {
                              "column": 3,
                              "line": 61
                            },
                            "start": {
                              "column": 42,
                              "line": 53
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
                            "name": "resolve",
                            "optional": false,
                            "range": [
                              1104,
                              1111
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 53
                              },
                              "start": {
                                "column": 22,
                                "line": 53
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "reject",
                            "optional": false,
                            "range": [
                              1113,
                              1119
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 53
                              },
                              "start": {
                                "column": 31,
                                "line": 53
                              }
                            }
                          }
                        ],
                        "range": [
                          1103,
                          1284
                        ],
                        "loc": {
                          "end": {
                            "column": 3,
                            "line": 61
                          },
                          "start": {
                            "column": 21,
                            "line": 53
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "range": [
                        1095,
                        1102
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 53
                        },
                        "start": {
                          "column": 13,
                          "line": 53
                        }
                      }
                    },
                    "range": [
                      1091,
                      1285
                    ],
                    "loc": {
                      "end": {
                        "column": 4,
                        "line": 61
                      },
                      "start": {
                        "column": 9,
                        "line": 53
                      }
                    }
                  },
                  "range": [
                    1084,
                    1286
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 61
                    },
                    "start": {
                      "column": 2,
                      "line": 53
                    }
                  }
                }
              ],
              "range": [
                1080,
                1288
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 62
                },
                "start": {
                  "column": 41,
                  "line": 52
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              1068,
              1288
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 62
              },
              "start": {
                "column": 29,
                "line": 52
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "range": [
            1039,
            1043
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 52
            },
            "start": {
              "column": 0,
              "line": 52
            }
          }
        },
        "optional": false,
        "range": [
          1039,
          1289
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 62
          },
          "start": {
            "column": 0,
            "line": 52
          }
        }
      },
      "range": [
        1039,
        1290
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 62
        },
        "start": {
          "column": 0,
          "line": 52
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1318,
          1383
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isApplicationScoped",
              "optional": false,
              "range": [
                1322,
                1341
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 65
                },
                "start": {
                  "column": 2,
                  "line": 65
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
                  "line": 65
                },
                "start": {
                  "column": 21,
                  "line": 65
                }
              },
              "range": [
                1341,
                1350
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  1343,
                  1350
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 65
                  },
                  "start": {
                    "column": 23,
                    "line": 65
                  }
                }
              }
            },
            "range": [
              1322,
              1351
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 65
              },
              "start": {
                "column": 2,
                "line": 65
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "publisherId",
              "optional": false,
              "range": [
                1354,
                1365
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 66
                },
                "start": {
                  "column": 2,
                  "line": 66
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
                  "column": 28,
                  "line": 66
                },
                "start": {
                  "column": 13,
                  "line": 66
                }
              },
              "range": [
                1365,
                1380
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      1367,
                      1373
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 66
                      },
                      "start": {
                        "column": 15,
                        "line": 66
                      }
                    }
                  },
                  {
                    "type": "TSNullKeyword",
                    "range": [
                      1376,
                      1380
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 66
                      },
                      "start": {
                        "column": 24,
                        "line": 66
                      }
                    }
                  }
                ],
                "range": [
                  1367,
                  1380
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 66
                  },
                  "start": {
                    "column": 15,
                    "line": 66
                  }
                }
              }
            },
            "range": [
              1354,
              1381
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 66
              },
              "start": {
                "column": 2,
                "line": 66
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 67
          },
          "start": {
            "column": 26,
            "line": 64
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ILocalExtension",
        "optional": false,
        "range": [
          1302,
          1317
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 64
          },
          "start": {
            "column": 10,
            "line": 64
          }
        }
      },
      "range": [
        1292,
        1383
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 67
        },
        "start": {
          "column": 0,
          "line": 64
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Metadata",
        "optional": false,
        "range": [
          1389,
          1397
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 68
          },
          "start": {
            "column": 5,
            "line": 68
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
              "name": "updated",
              "optional": false,
              "range": [
                1404,
                1411
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 69
                },
                "start": {
                  "column": 2,
                  "line": 69
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
                  "line": 69
                },
                "start": {
                  "column": 9,
                  "line": 69
                }
              },
              "range": [
                1411,
                1420
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  1413,
                  1420
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 69
                  },
                  "start": {
                    "column": 11,
                    "line": 69
                  }
                }
              }
            },
            "range": [
              1404,
              1421
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 69
              },
              "start": {
                "column": 2,
                "line": 69
              }
            }
          }
        ],
        "range": [
          1400,
          1423
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 70
          },
          "start": {
            "column": 16,
            "line": 68
          }
        }
      },
      "range": [
        1384,
        1424
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 70
        },
        "start": {
          "column": 0,
          "line": 68
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "scanMetadata",
        "optional": false,
        "range": [
          1442,
          1454
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 71
          },
          "start": {
            "column": 17,
            "line": 71
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "local",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 24,
                "line": 72
              },
              "start": {
                "column": 7,
                "line": 72
              }
            },
            "range": [
              1463,
              1480
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ILocalExtension",
                "optional": false,
                "range": [
                  1465,
                  1480
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 72
                  },
                  "start": {
                    "column": 9,
                    "line": 72
                  }
                }
              },
              "range": [
                1465,
                1480
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 72
                },
                "start": {
                  "column": 9,
                  "line": 72
                }
              }
            }
          },
          "range": [
            1458,
            1480
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 72
            },
            "start": {
              "column": 2,
              "line": 72
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 32,
            "line": 73
          },
          "start": {
            "column": 1,
            "line": 73
          }
        },
        "range": [
          1482,
          1513
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              1491,
              1513
            ],
            "params": [
              {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Metadata",
                      "optional": false,
                      "range": [
                        1492,
                        1500
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 73
                        },
                        "start": {
                          "column": 11,
                          "line": 73
                        }
                      }
                    },
                    "range": [
                      1492,
                      1500
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 73
                      },
                      "start": {
                        "column": 11,
                        "line": 73
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      1503,
                      1512
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 73
                      },
                      "start": {
                        "column": 22,
                        "line": 73
                      }
                    }
                  }
                ],
                "range": [
                  1492,
                  1512
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 73
                  },
                  "start": {
                    "column": 11,
                    "line": 73
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 73
              },
              "start": {
                "column": 10,
                "line": 73
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "range": [
              1484,
              1491
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 73
              },
              "start": {
                "column": 3,
                "line": 73
              }
            }
          },
          "range": [
            1484,
            1513
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 73
            },
            "start": {
              "column": 3,
              "line": 73
            }
          }
        }
      },
      "range": [
        1425,
        1514
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 73
        },
        "start": {
          "column": 0,
          "line": 71
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
                  "name": "extensions",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 78
                      },
                      "start": {
                        "column": 18,
                        "line": 78
                      }
                    },
                    "range": [
                      1620,
                      1663
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ILocalExtension",
                              "optional": false,
                              "range": [
                                1623,
                                1638
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 78
                                },
                                "start": {
                                  "column": 21,
                                  "line": 78
                                }
                              }
                            },
                            "range": [
                              1623,
                              1638
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 78
                              },
                              "start": {
                                "column": 21,
                                "line": 78
                              }
                            }
                          },
                          {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Metadata",
                                  "optional": false,
                                  "range": [
                                    1640,
                                    1648
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 46,
                                      "line": 78
                                    },
                                    "start": {
                                      "column": 38,
                                      "line": 78
                                    }
                                  }
                                },
                                "range": [
                                  1640,
                                  1648
                                ],
                                "loc": {
                                  "end": {
                                    "column": 46,
                                    "line": 78
                                  },
                                  "start": {
                                    "column": 38,
                                    "line": 78
                                  }
                                }
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "range": [
                                  1651,
                                  1660
                                ],
                                "loc": {
                                  "end": {
                                    "column": 58,
                                    "line": 78
                                  },
                                  "start": {
                                    "column": 49,
                                    "line": 78
                                  }
                                }
                              }
                            ],
                            "range": [
                              1640,
                              1660
                            ],
                            "loc": {
                              "end": {
                                "column": 58,
                                "line": 78
                              },
                              "start": {
                                "column": 38,
                                "line": 78
                              }
                            }
                          }
                        ],
                        "range": [
                          1622,
                          1661
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 78
                          },
                          "start": {
                            "column": 20,
                            "line": 78
                          }
                        }
                      },
                      "range": [
                        1622,
                        1663
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 78
                        },
                        "start": {
                          "column": 20,
                          "line": 78
                        }
                      }
                    }
                  },
                  "range": [
                    1610,
                    1663
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 78
                    },
                    "start": {
                      "column": 8,
                      "line": 78
                    }
                  }
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "async": true,
                            "body": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "e",
                                  "optional": false,
                                  "range": [
                                    1784,
                                    1785
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 82
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 82
                                    }
                                  }
                                },
                                {
                                  "type": "AwaitExpression",
                                  "argument": {
                                    "type": "CallExpression",
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "e",
                                        "optional": false,
                                        "range": [
                                          1806,
                                          1807
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 50,
                                            "line": 82
                                          },
                                          "start": {
                                            "column": 49,
                                            "line": 82
                                          }
                                        }
                                      }
                                    ],
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "scanMetadata",
                                      "optional": false,
                                      "range": [
                                        1793,
                                        1805
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 48,
                                          "line": 82
                                        },
                                        "start": {
                                          "column": 36,
                                          "line": 82
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "range": [
                                      1793,
                                      1808
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 51,
                                        "line": 82
                                      },
                                      "start": {
                                        "column": 36,
                                        "line": 82
                                      }
                                    }
                                  },
                                  "range": [
                                    1787,
                                    1808
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 51,
                                      "line": 82
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 82
                                    }
                                  }
                                }
                              ],
                              "range": [
                                1783,
                                1809
                              ],
                              "loc": {
                                "end": {
                                  "column": 52,
                                  "line": 82
                                },
                                "start": {
                                  "column": 26,
                                  "line": 82
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
                                "name": "e",
                                "optional": false,
                                "range": [
                                  1777,
                                  1778
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 82
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 82
                                  }
                                }
                              }
                            ],
                            "range": [
                              1770,
                              1809
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 82
                              },
                              "start": {
                                "column": 13,
                                "line": 82
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
                                  "type": "UnaryExpression",
                                  "argument": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "e",
                                      "optional": false,
                                      "range": [
                                        1734,
                                        1735
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 25,
                                          "line": 81
                                        },
                                        "start": {
                                          "column": 24,
                                          "line": 81
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "isApplicationScoped",
                                      "optional": false,
                                      "range": [
                                        1736,
                                        1755
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 45,
                                          "line": 81
                                        },
                                        "start": {
                                          "column": 26,
                                          "line": 81
                                        }
                                      }
                                    },
                                    "range": [
                                      1734,
                                      1755
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 45,
                                        "line": 81
                                      },
                                      "start": {
                                        "column": 24,
                                        "line": 81
                                      }
                                    }
                                  },
                                  "operator": "!",
                                  "prefix": true,
                                  "range": [
                                    1733,
                                    1755
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 45,
                                      "line": 81
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 81
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
                                    "name": "e",
                                    "optional": false,
                                    "range": [
                                      1727,
                                      1728
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 18,
                                        "line": 81
                                      },
                                      "start": {
                                        "column": 17,
                                        "line": 81
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  1726,
                                  1755
                                ],
                                "loc": {
                                  "end": {
                                    "column": 45,
                                    "line": 81
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 81
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
                                "name": "fromExtensions",
                                "optional": false,
                                "range": [
                                  1695,
                                  1709
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 80
                                  },
                                  "start": {
                                    "column": 6,
                                    "line": 80
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
                                  1719,
                                  1725
                                ],
                                "loc": {
                                  "end": {
                                    "column": 15,
                                    "line": 81
                                  },
                                  "start": {
                                    "column": 9,
                                    "line": 81
                                  }
                                }
                              },
                              "range": [
                                1695,
                                1725
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 81
                                },
                                "start": {
                                  "column": 6,
                                  "line": 80
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              1695,
                              1756
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 81
                              },
                              "start": {
                                "column": 6,
                                "line": 80
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
                              1766,
                              1769
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 82
                              },
                              "start": {
                                "column": 9,
                                "line": 82
                              }
                            }
                          },
                          "range": [
                            1695,
                            1769
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 82
                            },
                            "start": {
                              "column": 6,
                              "line": 80
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          1695,
                          1810
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 82
                          },
                          "start": {
                            "column": 6,
                            "line": 80
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
                          1676,
                          1683
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 79
                          },
                          "start": {
                            "column": 10,
                            "line": 79
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
                          1684,
                          1687
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 79
                          },
                          "start": {
                            "column": 18,
                            "line": 79
                          }
                        }
                      },
                      "range": [
                        1676,
                        1687
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 79
                        },
                        "start": {
                          "column": 10,
                          "line": 79
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      1676,
                      1816
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 83
                      },
                      "start": {
                        "column": 10,
                        "line": 79
                      }
                    }
                  },
                  "range": [
                    1670,
                    1816
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 83
                    },
                    "start": {
                      "column": 4,
                      "line": 79
                    }
                  }
                },
                "range": [
                  1610,
                  1816
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 83
                  },
                  "start": {
                    "column": 8,
                    "line": 78
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1604,
              1817
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 83
              },
              "start": {
                "column": 2,
                "line": 78
              }
            }
          }
        ],
        "range": [
          1600,
          1819
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 84
          },
          "start": {
            "column": 17,
            "line": 77
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "copyExtensions",
        "optional": false,
        "range": [
          1531,
          1545
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 75
          },
          "start": {
            "column": 15,
            "line": 75
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fromExtensions",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 35,
                "line": 76
              },
              "start": {
                "column": 16,
                "line": 76
              }
            },
            "range": [
              1563,
              1582
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ILocalExtension",
                  "optional": false,
                  "range": [
                    1565,
                    1580
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 76
                    },
                    "start": {
                      "column": 18,
                      "line": 76
                    }
                  }
                },
                "range": [
                  1565,
                  1580
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 76
                  },
                  "start": {
                    "column": 18,
                    "line": 76
                  }
                }
              },
              "range": [
                1565,
                1582
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 76
                },
                "start": {
                  "column": 18,
                  "line": 76
                }
              }
            }
          },
          "range": [
            1549,
            1582
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 76
            },
            "start": {
              "column": 2,
              "line": 76
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 16,
            "line": 77
          },
          "start": {
            "column": 1,
            "line": 77
          }
        },
        "range": [
          1584,
          1599
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              1593,
              1599
            ],
            "params": [
              {
                "type": "TSVoidKeyword",
                "range": [
                  1594,
                  1598
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 77
                  },
                  "start": {
                    "column": 11,
                    "line": 77
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 77
              },
              "start": {
                "column": 10,
                "line": 77
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "range": [
              1586,
              1593
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 77
              },
              "start": {
                "column": 3,
                "line": 77
              }
            }
          },
          "range": [
            1586,
            1599
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 77
            },
            "start": {
              "column": 3,
              "line": 77
            }
          }
        }
      },
      "range": [
        1516,
        1819
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 84
        },
        "start": {
          "column": 0,
          "line": 75
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 85
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
