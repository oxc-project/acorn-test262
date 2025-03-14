__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    232
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 4
                      },
                      "start": {
                        "column": 14,
                        "line": 4
                      }
                    },
                    "range": [
                      84,
                      89
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Obj",
                        "optional": false,
                        "range": [
                          86,
                          89
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 4
                          },
                          "start": {
                            "column": 16,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        86,
                        89
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 4
                        },
                        "start": {
                          "column": 16,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    80,
                    89
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 4
                    },
                    "start": {
                      "column": 10,
                      "line": 4
                    }
                  }
                },
                "init": {
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
                            100,
                            103
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 4
                            },
                            "start": {
                              "column": 30,
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
                            105,
                            112
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 4
                            },
                            "start": {
                              "column": 35,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          100,
                          112
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 4
                          },
                          "start": {
                            "column": 30,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "range": [
                      98,
                      114
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 4
                      },
                      "start": {
                        "column": 28,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    92,
                    114
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 4
                    },
                    "start": {
                      "column": 22,
                      "line": 4
                    }
                  }
                },
                "range": [
                  80,
                  114
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 4
                  },
                  "start": {
                    "column": 10,
                    "line": 4
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              74,
              115
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
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
                  "name": "obj2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 5
                      },
                      "start": {
                        "column": 14,
                        "line": 5
                      }
                    },
                    "range": [
                      130,
                      135
                    ],
                    "typeAnnotation": {
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
                            "column": 19,
                            "line": 5
                          },
                          "start": {
                            "column": 16,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        132,
                        135
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 5
                        },
                        "start": {
                          "column": 16,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    126,
                    135
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 5
                    },
                    "start": {
                      "column": 10,
                      "line": 5
                    }
                  }
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "NewExpression",
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
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
                                      177,
                                      180
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 64,
                                        "line": 5
                                      },
                                      "start": {
                                        "column": 61,
                                        "line": 5
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
                                      182,
                                      189
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 73,
                                        "line": 5
                                      },
                                      "start": {
                                        "column": 66,
                                        "line": 5
                                      }
                                    }
                                  },
                                  "range": [
                                    177,
                                    189
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 73,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 61,
                                      "line": 5
                                    }
                                  }
                                }
                              ],
                              "range": [
                                175,
                                191
                              ],
                              "loc": {
                                "end": {
                                  "column": 75,
                                  "line": 5
                                },
                                "start": {
                                  "column": 59,
                                  "line": 5
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
                              167,
                              174
                            ],
                            "loc": {
                              "end": {
                                "column": 58,
                                "line": 5
                              },
                              "start": {
                                "column": 51,
                                "line": 5
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            167,
                            192
                          ],
                          "loc": {
                            "end": {
                              "column": 76,
                              "line": 5
                            },
                            "start": {
                              "column": 51,
                              "line": 5
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
                            "name": "resolve",
                            "optional": false,
                            "range": [
                              156,
                              163
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 5
                              },
                              "start": {
                                "column": 40,
                                "line": 5
                              }
                            }
                          }
                        ],
                        "range": [
                          156,
                          192
                        ],
                        "loc": {
                          "end": {
                            "column": 76,
                            "line": 5
                          },
                          "start": {
                            "column": 40,
                            "line": 5
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
                        148,
                        155
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 5
                        },
                        "start": {
                          "column": 32,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      144,
                      193
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 5
                      },
                      "start": {
                        "column": 28,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    138,
                    193
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 5
                    },
                    "start": {
                      "column": 22,
                      "line": 5
                    }
                  }
                },
                "range": [
                  126,
                  193
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 5
                  },
                  "start": {
                    "column": 10,
                    "line": 5
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              120,
              194
            ],
            "loc": {
              "end": {
                "column": 78,
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
                        214,
                        217
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 6
                        },
                        "start": {
                          "column": 19,
                          "line": 6
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
                        219,
                        226
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 6
                        },
                        "start": {
                          "column": 24,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      214,
                      226
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 6
                      },
                      "start": {
                        "column": 19,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  212,
                  228
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 6
                  },
                  "start": {
                    "column": 17,
                    "line": 6
                  }
                }
              },
              "range": [
                206,
                228
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 6
                },
                "start": {
                  "column": 11,
                  "line": 6
                }
              }
            },
            "range": [
              199,
              229
            ],
            "loc": {
              "end": {
                "column": 34,
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
          68,
          231
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
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
        231
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 8
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
