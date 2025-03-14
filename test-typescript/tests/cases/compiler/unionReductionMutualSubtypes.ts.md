__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    279
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          42,
          68
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "something",
              "optional": false,
              "range": [
                48,
                57
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
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
                  "column": 21,
                  "line": 4
                },
                "start": {
                  "column": 15,
                  "line": 4
                }
              },
              "range": [
                59,
                65
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  61,
                  65
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
            },
            "static": false,
            "range": [
              48,
              66
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 4
              },
              "start": {
                "column": 4,
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
            "column": 20,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReturnVal",
        "optional": false,
        "range": [
          32,
          41
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "range": [
        22,
        68
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 7
                },
                "start": {
                  "column": 7,
                  "line": 7
                }
              },
              "range": [
                77,
                88
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReturnVal",
                  "optional": false,
                  "range": [
                    79,
                    88
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 7
                    },
                    "start": {
                      "column": 9,
                      "line": 7
                    }
                  }
                },
                "range": [
                  79,
                  88
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 7
                  },
                  "start": {
                    "column": 9,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              76,
              88
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 7
              },
              "start": {
                "column": 6,
                "line": 7
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "something",
                  "optional": false,
                  "range": [
                    93,
                    102
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 7
                    },
                    "start": {
                      "column": 23,
                      "line": 7
                    }
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    102,
                    108
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      105,
                      108
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 7
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
                  "id": null,
                  "params": [],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 7
                    },
                    "start": {
                      "column": 32,
                      "line": 7
                    }
                  }
                },
                "range": [
                  93,
                  108
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 7
                  },
                  "start": {
                    "column": 23,
                    "line": 7
                  }
                }
              }
            ],
            "range": [
              91,
              110
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 7
              },
              "start": {
                "column": 21,
                "line": 7
              }
            }
          },
          "range": [
            76,
            110
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 7
            },
            "start": {
              "column": 6,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        70,
        110
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
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
            "name": "val",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 9
                },
                "start": {
                  "column": 17,
                  "line": 9
                }
              },
              "range": [
                129,
                140
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReturnVal",
                  "optional": false,
                  "range": [
                    131,
                    140
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 9
                    },
                    "start": {
                      "column": 19,
                      "line": 9
                    }
                  }
                },
                "range": [
                  131,
                  140
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 9
                  },
                  "start": {
                    "column": 19,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              126,
              140
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 9
              },
              "start": {
                "column": 14,
                "line": 9
              }
            }
          },
          "init": null,
          "range": [
            126,
            140
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 9
            },
            "start": {
              "column": 14,
              "line": 9
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        112,
        141
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
                  "name": "something",
                  "optional": false,
                  "range": [
                    210,
                    219
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 11
                    },
                    "start": {
                      "column": 10,
                      "line": 11
                    }
                  }
                },
                "init": {
                  "type": "LogicalExpression",
                  "operator": "??",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "range": [
                        222,
                        229
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 11
                        },
                        "start": {
                          "column": 22,
                          "line": 11
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "something",
                      "optional": false,
                      "range": [
                        230,
                        239
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 11
                        },
                        "start": {
                          "column": 30,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      222,
                      239
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 11
                      },
                      "start": {
                        "column": 22,
                        "line": 11
                      }
                    }
                  },
                  "right": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "range": [
                        243,
                        246
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 11
                        },
                        "start": {
                          "column": 43,
                          "line": 11
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "something",
                      "optional": false,
                      "range": [
                        247,
                        256
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 11
                        },
                        "start": {
                          "column": 47,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      243,
                      256
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 11
                      },
                      "start": {
                        "column": 43,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    222,
                    256
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 11
                    },
                    "start": {
                      "column": 22,
                      "line": 11
                    }
                  }
                },
                "range": [
                  210,
                  256
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 11
                  },
                  "start": {
                    "column": 10,
                    "line": 11
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              204,
              257
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
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
                  "raw": "''",
                  "value": "",
                  "range": [
                    272,
                    274
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 12
                    },
                    "start": {
                      "column": 14,
                      "line": 12
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "something",
                "optional": false,
                "range": [
                  262,
                  271
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 12
                  },
                  "start": {
                    "column": 4,
                    "line": 12
                  }
                }
              },
              "optional": false,
              "range": [
                262,
                275
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            "range": [
              262,
              276
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "range": [
          198,
          278
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 56,
            "line": 10
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "run",
        "optional": false,
        "range": [
          151,
          154
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 10
          },
          "start": {
            "column": 9,
            "line": 10
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 54,
                "line": 10
              },
              "start": {
                "column": 20,
                "line": 10
              }
            },
            "range": [
              162,
              196
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "something",
                    "optional": false,
                    "range": [
                      166,
                      175
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 10
                      },
                      "start": {
                        "column": 24,
                        "line": 10
                      }
                    }
                  },
                  "kind": "method",
                  "optional": true,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 10
                          },
                          "start": {
                            "column": 37,
                            "line": 10
                          }
                        },
                        "range": [
                          179,
                          187
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            181,
                            187
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 10
                            },
                            "start": {
                              "column": 39,
                              "line": 10
                            }
                          }
                        }
                      },
                      "range": [
                        177,
                        187
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 10
                        },
                        "start": {
                          "column": 35,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 10
                      },
                      "start": {
                        "column": 46,
                        "line": 10
                      }
                    },
                    "range": [
                      188,
                      194
                    ],
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "range": [
                        190,
                        194
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 10
                        },
                        "start": {
                          "column": 48,
                          "line": 10
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    166,
                    194
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 10
                    },
                    "start": {
                      "column": 24,
                      "line": 10
                    }
                  }
                }
              ],
              "range": [
                164,
                196
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 10
                },
                "start": {
                  "column": 22,
                  "line": 10
                }
              }
            }
          },
          "range": [
            155,
            196
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 10
            },
            "start": {
              "column": 13,
              "line": 10
            }
          }
        }
      ],
      "range": [
        142,
        278
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
