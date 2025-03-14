__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1838
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          14,
          47
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "secret",
              "optional": false,
              "range": [
                28,
                34
              ],
              "loc": {
                "end": {
                  "column": 18,
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
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                34,
                45
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  43,
                  45
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 2
                  },
                  "start": {
                    "column": 27,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 2
                  },
                  "start": {
                    "column": 20,
                    "line": 2
                  }
                },
                "range": [
                  36,
                  42
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    38,
                    42
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 2
                    },
                    "start": {
                      "column": 22,
                      "line": 2
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 29,
                  "line": 2
                },
                "start": {
                  "column": 18,
                  "line": 2
                }
              }
            },
            "range": [
              18,
              45
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 2
              },
              "start": {
                "column": 2,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 14,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Message",
        "optional": false,
        "range": [
          6,
          13
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        47
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          69,
          224
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
              "name": "message",
              "optional": false,
              "range": [
                73,
                80
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 5
                },
                "start": {
                  "column": 2,
                  "line": 5
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
                  "column": 18,
                  "line": 5
                },
                "start": {
                  "column": 9,
                  "line": 5
                }
              },
              "range": [
                80,
                89
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Message",
                  "optional": false,
                  "range": [
                    82,
                    89
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 5
                    },
                    "start": {
                      "column": 11,
                      "line": 5
                    }
                  }
                },
                "range": [
                  82,
                  89
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 5
                  },
                  "start": {
                    "column": 11,
                    "line": 5
                  }
                }
              }
            },
            "value": {
              "type": "NewExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Message",
                "optional": false,
                "range": [
                  96,
                  103
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 5
                  },
                  "start": {
                    "column": 25,
                    "line": 5
                  }
                }
              },
              "range": [
                92,
                105
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 5
                },
                "start": {
                  "column": 21,
                  "line": 5
                }
              }
            },
            "range": [
              73,
              106
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 5
              },
              "start": {
                "column": 2,
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
              "name": "wrap",
              "optional": false,
              "range": [
                109,
                113
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 6
                },
                "start": {
                  "column": 2,
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
                113,
                222
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
                          "name": "m",
                          "optional": false,
                          "range": [
                            129,
                            130
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 7
                            },
                            "start": {
                              "column": 8,
                              "line": 7
                            }
                          }
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              133,
                              137
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 7
                              },
                              "start": {
                                "column": 12,
                                "line": 7
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "message",
                            "optional": false,
                            "range": [
                              138,
                              145
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 7
                              },
                              "start": {
                                "column": 17,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            133,
                            145
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 7
                            },
                            "start": {
                              "column": 12,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          129,
                          145
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 7
                          },
                          "start": {
                            "column": 8,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let",
                    "range": [
                      125,
                      146
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 7
                      },
                      "start": {
                        "column": 4,
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
                          "name": "f",
                          "optional": false,
                          "range": [
                            155,
                            156
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 8
                            },
                            "start": {
                              "column": 8,
                              "line": 8
                            }
                          }
                        },
                        "init": {
                          "type": "FunctionExpression",
                          "async": false,
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
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "m",
                                      "optional": false,
                                      "range": [
                                        185,
                                        186
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 7,
                                          "line": 9
                                        },
                                        "start": {
                                          "column": 6,
                                          "line": 9
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "secret",
                                      "optional": false,
                                      "range": [
                                        187,
                                        193
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
                                    },
                                    "range": [
                                      185,
                                      193
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 14,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 6,
                                        "line": 9
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "range": [
                                    185,
                                    195
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 16,
                                      "line": 9
                                    },
                                    "start": {
                                      "column": 6,
                                      "line": 9
                                    }
                                  }
                                },
                                "range": [
                                  185,
                                  196
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 6,
                                    "line": 9
                                  }
                                }
                              }
                            ],
                            "range": [
                              177,
                              218
                            ],
                            "loc": {
                              "end": {
                                "column": 5,
                                "line": 10
                              },
                              "start": {
                                "column": 30,
                                "line": 8
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
                              "name": "this",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 8
                                  }
                                },
                                "range": [
                                  172,
                                  175
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "range": [
                                      174,
                                      175
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 27,
                                        "line": 8
                                      }
                                    }
                                  },
                                  "range": [
                                    174,
                                    175
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 8
                                    }
                                  }
                                }
                              },
                              "range": [
                                168,
                                175
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 8
                                },
                                "start": {
                                  "column": 21,
                                  "line": 8
                                }
                              }
                            }
                          ],
                          "range": [
                            159,
                            218
                          ],
                          "loc": {
                            "end": {
                              "column": 5,
                              "line": 10
                            },
                            "start": {
                              "column": 12,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          155,
                          218
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 10
                          },
                          "start": {
                            "column": 8,
                            "line": 8
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let",
                    "range": [
                      151,
                      218
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
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
                  119,
                  222
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 11
                  },
                  "start": {
                    "column": 12,
                    "line": 6
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 6
                  },
                  "start": {
                    "column": 6,
                    "line": 6
                  }
                },
                "range": [
                  113,
                  116
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
                        114,
                        115
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 6
                        },
                        "start": {
                          "column": 7,
                          "line": 6
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      114,
                      115
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 6
                      },
                      "start": {
                        "column": 7,
                        "line": 6
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 3,
                  "line": 11
                },
                "start": {
                  "column": 6,
                  "line": 6
                }
              }
            },
            "range": [
              109,
              222
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 11
              },
              "start": {
                "column": 2,
                "line": 6
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
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
        "name": "MessageWrapper",
        "optional": false,
        "range": [
          54,
          68
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 4
          },
          "start": {
            "column": 6,
            "line": 4
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        48,
        224
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          234,
          256
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                248,
                249
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 15
                },
                "start": {
                  "column": 12,
                  "line": 15
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
                249,
                254
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  252,
                  254
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 15
                  },
                  "start": {
                    "column": 16,
                    "line": 15
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
                  "column": 18,
                  "line": 15
                },
                "start": {
                  "column": 13,
                  "line": 15
                }
              }
            },
            "range": [
              238,
              254
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 15
              },
              "start": {
                "column": 2,
                "line": 15
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 8,
            "line": 14
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          232,
          233
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 14
          },
          "start": {
            "column": 6,
            "line": 14
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        226,
        256
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          275,
          297
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                289,
                290
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 18
                },
                "start": {
                  "column": 12,
                  "line": 18
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
                290,
                295
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  293,
                  295
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 18
                  },
                  "start": {
                    "column": 16,
                    "line": 18
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
                  "column": 18,
                  "line": 18
                },
                "start": {
                  "column": 13,
                  "line": 18
                }
              }
            },
            "range": [
              279,
              295
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 18
              },
              "start": {
                "column": 2,
                "line": 18
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 18,
            "line": 17
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          263,
          264
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 17
          },
          "start": {
            "column": 6,
            "line": 17
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          273,
          274
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 17
          },
          "start": {
            "column": 16,
            "line": 17
          }
        }
      },
      "range": [
        257,
        297
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
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          316,
          338
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "range": [
                330,
                331
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 21
                },
                "start": {
                  "column": 12,
                  "line": 21
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
                331,
                336
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  334,
                  336
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 21
                  },
                  "start": {
                    "column": 16,
                    "line": 21
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
                  "column": 18,
                  "line": 21
                },
                "start": {
                  "column": 13,
                  "line": 21
                }
              }
            },
            "range": [
              320,
              336
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 21
              },
              "start": {
                "column": 2,
                "line": 21
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 18,
            "line": 20
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
          304,
          305
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 20
          },
          "start": {
            "column": 6,
            "line": 20
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          314,
          315
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 20
          },
          "start": {
            "column": 16,
            "line": 20
          }
        }
      },
      "range": [
        298,
        338
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          347,
          369
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "range": [
                361,
                362
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 24
                },
                "start": {
                  "column": 12,
                  "line": 24
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
                362,
                367
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  365,
                  367
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 24
                  },
                  "start": {
                    "column": 16,
                    "line": 24
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
                  "column": 18,
                  "line": 24
                },
                "start": {
                  "column": 13,
                  "line": 24
                }
              }
            },
            "range": [
              351,
              367
            ],
            "loc": {
              "end": {
                "column": 18,
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
            "column": 8,
            "line": 23
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Z",
        "optional": false,
        "range": [
          345,
          346
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 23
          },
          "start": {
            "column": 6,
            "line": 23
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        339,
        369
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
      "type": "FunctionDeclaration",
      "async": false,
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
                  "type": "ThisExpression",
                  "range": [
                    417,
                    421
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 28
                    },
                    "start": {
                      "column": 2,
                      "line": 28
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    422,
                    423
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 28
                    },
                    "start": {
                      "column": 7,
                      "line": 28
                    }
                  }
                },
                "range": [
                  417,
                  423
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 28
                  },
                  "start": {
                    "column": 2,
                    "line": 28
                  }
                }
              },
              "optional": false,
              "range": [
                417,
                425
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 28
                },
                "start": {
                  "column": 2,
                  "line": 28
                }
              }
            },
            "range": [
              417,
              426
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 28
              },
              "start": {
                "column": 2,
                "line": 28
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "range": [
                    429,
                    432
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 29
                    },
                    "start": {
                      "column": 2,
                      "line": 29
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    433,
                    434
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 29
                    },
                    "start": {
                      "column": 6,
                      "line": 29
                    }
                  }
                },
                "range": [
                  429,
                  434
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 29
                  },
                  "start": {
                    "column": 2,
                    "line": 29
                  }
                }
              },
              "optional": false,
              "range": [
                429,
                436
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 29
                },
                "start": {
                  "column": 2,
                  "line": 29
                }
              }
            },
            "range": [
              429,
              437
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 29
              },
              "start": {
                "column": 2,
                "line": 29
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "range": [
                    440,
                    443
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 30
                    },
                    "start": {
                      "column": 2,
                      "line": 30
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    444,
                    445
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 30
                    },
                    "start": {
                      "column": 6,
                      "line": 30
                    }
                  }
                },
                "range": [
                  440,
                  445
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 30
                  },
                  "start": {
                    "column": 2,
                    "line": 30
                  }
                }
              },
              "optional": false,
              "range": [
                440,
                447
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 30
                },
                "start": {
                  "column": 2,
                  "line": 30
                }
              }
            },
            "range": [
              440,
              448
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 30
              },
              "start": {
                "column": 2,
                "line": 30
              }
            }
          }
        ],
        "range": [
          413,
          601
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 31
          },
          "start": {
            "column": 42,
            "line": 27
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bA",
        "optional": false,
        "range": [
          380,
          382
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 27
          },
          "start": {
            "column": 9,
            "line": 27
          }
        }
      },
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
                "column": 32,
                "line": 27
              },
              "start": {
                "column": 29,
                "line": 27
              }
            },
            "range": [
              400,
              403
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  402,
                  403
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 27
                  },
                  "start": {
                    "column": 31,
                    "line": 27
                  }
                }
              },
              "range": [
                402,
                403
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 27
                },
                "start": {
                  "column": 31,
                  "line": 27
                }
              }
            }
          },
          "range": [
            396,
            403
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 27
            },
            "start": {
              "column": 25,
              "line": 27
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 40,
                "line": 27
              },
              "start": {
                "column": 37,
                "line": 27
              }
            },
            "range": [
              408,
              411
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  410,
                  411
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 27
                  },
                  "start": {
                    "column": 39,
                    "line": 27
                  }
                }
              },
              "range": [
                410,
                411
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 27
                },
                "start": {
                  "column": 39,
                  "line": 27
                }
              }
            }
          },
          "range": [
            405,
            411
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 27
            },
            "start": {
              "column": 34,
              "line": 27
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 24,
            "line": 27
          },
          "start": {
            "column": 11,
            "line": 27
          }
        },
        "range": [
          382,
          395
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
                "name": "A",
                "optional": false,
                "range": [
                  393,
                  394
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 27
                  },
                  "start": {
                    "column": 22,
                    "line": 27
                  }
                }
              },
              "range": [
                393,
                394
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 27
                },
                "start": {
                  "column": 22,
                  "line": 27
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
                383,
                384
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 27
                },
                "start": {
                  "column": 12,
                  "line": 27
                }
              }
            },
            "out": false,
            "range": [
              383,
              394
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 27
              },
              "start": {
                "column": 12,
                "line": 27
              }
            }
          }
        ]
      },
      "range": [
        371,
        601
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 27
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
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "range": [
                    648,
                    652
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 33
                    },
                    "start": {
                      "column": 2,
                      "line": 33
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    653,
                    654
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 33
                    },
                    "start": {
                      "column": 7,
                      "line": 33
                    }
                  }
                },
                "range": [
                  648,
                  654
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 33
                  },
                  "start": {
                    "column": 2,
                    "line": 33
                  }
                }
              },
              "optional": false,
              "range": [
                648,
                656
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 33
                },
                "start": {
                  "column": 2,
                  "line": 33
                }
              }
            },
            "range": [
              648,
              657
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 33
              },
              "start": {
                "column": 2,
                "line": 33
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "range": [
                    660,
                    664
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 34
                    },
                    "start": {
                      "column": 2,
                      "line": 34
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    665,
                    666
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 34
                    },
                    "start": {
                      "column": 7,
                      "line": 34
                    }
                  }
                },
                "range": [
                  660,
                  666
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 34
                  },
                  "start": {
                    "column": 2,
                    "line": 34
                  }
                }
              },
              "optional": false,
              "range": [
                660,
                668
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 34
                },
                "start": {
                  "column": 2,
                  "line": 34
                }
              }
            },
            "range": [
              660,
              669
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 34
              },
              "start": {
                "column": 2,
                "line": 34
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "range": [
                    672,
                    675
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 35
                    },
                    "start": {
                      "column": 2,
                      "line": 35
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    676,
                    677
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 35
                    },
                    "start": {
                      "column": 6,
                      "line": 35
                    }
                  }
                },
                "range": [
                  672,
                  677
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 35
                  },
                  "start": {
                    "column": 2,
                    "line": 35
                  }
                }
              },
              "optional": false,
              "range": [
                672,
                679
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 35
                },
                "start": {
                  "column": 2,
                  "line": 35
                }
              }
            },
            "range": [
              672,
              680
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 35
              },
              "start": {
                "column": 2,
                "line": 35
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "range": [
                    683,
                    686
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 36
                    },
                    "start": {
                      "column": 2,
                      "line": 36
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    687,
                    688
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 36
                    },
                    "start": {
                      "column": 6,
                      "line": 36
                    }
                  }
                },
                "range": [
                  683,
                  688
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 36
                  },
                  "start": {
                    "column": 2,
                    "line": 36
                  }
                }
              },
              "optional": false,
              "range": [
                683,
                690
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 36
                },
                "start": {
                  "column": 2,
                  "line": 36
                }
              }
            },
            "range": [
              683,
              691
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 36
              },
              "start": {
                "column": 2,
                "line": 36
              }
            }
          }
        ],
        "range": [
          644,
          693
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 37
          },
          "start": {
            "column": 42,
            "line": 32
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bB",
        "optional": false,
        "range": [
          611,
          613
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 32
          },
          "start": {
            "column": 9,
            "line": 32
          }
        }
      },
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
                "column": 32,
                "line": 32
              },
              "start": {
                "column": 29,
                "line": 32
              }
            },
            "range": [
              631,
              634
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  633,
                  634
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 32
                  },
                  "start": {
                    "column": 31,
                    "line": 32
                  }
                }
              },
              "range": [
                633,
                634
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 32
                },
                "start": {
                  "column": 31,
                  "line": 32
                }
              }
            }
          },
          "range": [
            627,
            634
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 32
            },
            "start": {
              "column": 25,
              "line": 32
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 40,
                "line": 32
              },
              "start": {
                "column": 37,
                "line": 32
              }
            },
            "range": [
              639,
              642
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  641,
                  642
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 32
                  },
                  "start": {
                    "column": 39,
                    "line": 32
                  }
                }
              },
              "range": [
                641,
                642
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 32
                },
                "start": {
                  "column": 39,
                  "line": 32
                }
              }
            }
          },
          "range": [
            636,
            642
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 32
            },
            "start": {
              "column": 34,
              "line": 32
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 24,
            "line": 32
          },
          "start": {
            "column": 11,
            "line": 32
          }
        },
        "range": [
          613,
          626
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
                "name": "B",
                "optional": false,
                "range": [
                  624,
                  625
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 32
                  },
                  "start": {
                    "column": 22,
                    "line": 32
                  }
                }
              },
              "range": [
                624,
                625
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 32
                },
                "start": {
                  "column": 22,
                  "line": 32
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
                614,
                615
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 32
                },
                "start": {
                  "column": 12,
                  "line": 32
                }
              }
            },
            "out": false,
            "range": [
              614,
              625
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 32
              },
              "start": {
                "column": 12,
                "line": 32
              }
            }
          }
        ]
      },
      "range": [
        602,
        693
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 32
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
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "range": [
                    740,
                    744
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 39
                    },
                    "start": {
                      "column": 2,
                      "line": 39
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    745,
                    746
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 39
                    },
                    "start": {
                      "column": 7,
                      "line": 39
                    }
                  }
                },
                "range": [
                  740,
                  746
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 39
                  },
                  "start": {
                    "column": 2,
                    "line": 39
                  }
                }
              },
              "optional": false,
              "range": [
                740,
                748
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 39
                },
                "start": {
                  "column": 2,
                  "line": 39
                }
              }
            },
            "range": [
              740,
              749
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 39
              },
              "start": {
                "column": 2,
                "line": 39
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "range": [
                    752,
                    756
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 40
                    },
                    "start": {
                      "column": 2,
                      "line": 40
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "range": [
                    757,
                    758
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 40
                    },
                    "start": {
                      "column": 7,
                      "line": 40
                    }
                  }
                },
                "range": [
                  752,
                  758
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 40
                  },
                  "start": {
                    "column": 2,
                    "line": 40
                  }
                }
              },
              "optional": false,
              "range": [
                752,
                760
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 40
                },
                "start": {
                  "column": 2,
                  "line": 40
                }
              }
            },
            "range": [
              752,
              761
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 40
              },
              "start": {
                "column": 2,
                "line": 40
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "range": [
                    764,
                    767
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 41
                    },
                    "start": {
                      "column": 2,
                      "line": 41
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    768,
                    769
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 41
                    },
                    "start": {
                      "column": 6,
                      "line": 41
                    }
                  }
                },
                "range": [
                  764,
                  769
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 41
                  },
                  "start": {
                    "column": 2,
                    "line": 41
                  }
                }
              },
              "optional": false,
              "range": [
                764,
                771
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 41
                },
                "start": {
                  "column": 2,
                  "line": 41
                }
              }
            },
            "range": [
              764,
              772
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 41
              },
              "start": {
                "column": 2,
                "line": 41
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "range": [
                    791,
                    794
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 42
                    },
                    "start": {
                      "column": 2,
                      "line": 42
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    795,
                    796
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 42
                    },
                    "start": {
                      "column": 6,
                      "line": 42
                    }
                  }
                },
                "range": [
                  791,
                  796
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 42
                  },
                  "start": {
                    "column": 2,
                    "line": 42
                  }
                }
              },
              "optional": false,
              "range": [
                791,
                798
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 42
                },
                "start": {
                  "column": 2,
                  "line": 42
                }
              }
            },
            "range": [
              791,
              799
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 42
              },
              "start": {
                "column": 2,
                "line": 42
              }
            }
          }
        ],
        "range": [
          736,
          817
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 43
          },
          "start": {
            "column": 42,
            "line": 38
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bC",
        "optional": false,
        "range": [
          703,
          705
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 38
          },
          "start": {
            "column": 9,
            "line": 38
          }
        }
      },
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
                "column": 32,
                "line": 38
              },
              "start": {
                "column": 29,
                "line": 38
              }
            },
            "range": [
              723,
              726
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  725,
                  726
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 38
                  },
                  "start": {
                    "column": 31,
                    "line": 38
                  }
                }
              },
              "range": [
                725,
                726
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 38
                },
                "start": {
                  "column": 31,
                  "line": 38
                }
              }
            }
          },
          "range": [
            719,
            726
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 38
            },
            "start": {
              "column": 25,
              "line": 38
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 40,
                "line": 38
              },
              "start": {
                "column": 37,
                "line": 38
              }
            },
            "range": [
              731,
              734
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  733,
                  734
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 38
                  },
                  "start": {
                    "column": 39,
                    "line": 38
                  }
                }
              },
              "range": [
                733,
                734
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 38
                },
                "start": {
                  "column": 39,
                  "line": 38
                }
              }
            }
          },
          "range": [
            728,
            734
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 38
            },
            "start": {
              "column": 34,
              "line": 38
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 24,
            "line": 38
          },
          "start": {
            "column": 11,
            "line": 38
          }
        },
        "range": [
          705,
          718
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
                "name": "C",
                "optional": false,
                "range": [
                  716,
                  717
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 38
                  },
                  "start": {
                    "column": 22,
                    "line": 38
                  }
                }
              },
              "range": [
                716,
                717
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 38
                },
                "start": {
                  "column": 22,
                  "line": 38
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
                706,
                707
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 38
                },
                "start": {
                  "column": 12,
                  "line": 38
                }
              }
            },
            "out": false,
            "range": [
              706,
              717
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 38
              },
              "start": {
                "column": 12,
                "line": 38
              }
            }
          }
        ]
      },
      "range": [
        694,
        817
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 38
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
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "range": [
                    864,
                    868
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 45
                    },
                    "start": {
                      "column": 2,
                      "line": 45
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "range": [
                    869,
                    870
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 45
                    },
                    "start": {
                      "column": 7,
                      "line": 45
                    }
                  }
                },
                "range": [
                  864,
                  870
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 45
                  },
                  "start": {
                    "column": 2,
                    "line": 45
                  }
                }
              },
              "optional": false,
              "range": [
                864,
                872
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 45
                },
                "start": {
                  "column": 2,
                  "line": 45
                }
              }
            },
            "range": [
              864,
              873
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 45
              },
              "start": {
                "column": 2,
                "line": 45
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "range": [
                    876,
                    879
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 46
                    },
                    "start": {
                      "column": 2,
                      "line": 46
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    880,
                    881
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 46
                    },
                    "start": {
                      "column": 6,
                      "line": 46
                    }
                  }
                },
                "range": [
                  876,
                  881
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 46
                  },
                  "start": {
                    "column": 2,
                    "line": 46
                  }
                }
              },
              "optional": false,
              "range": [
                876,
                883
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 46
                },
                "start": {
                  "column": 2,
                  "line": 46
                }
              }
            },
            "range": [
              876,
              884
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 46
              },
              "start": {
                "column": 2,
                "line": 46
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "range": [
                    903,
                    906
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 47
                    },
                    "start": {
                      "column": 2,
                      "line": 47
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    907,
                    908
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 47
                    },
                    "start": {
                      "column": 6,
                      "line": 47
                    }
                  }
                },
                "range": [
                  903,
                  908
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 47
                  },
                  "start": {
                    "column": 2,
                    "line": 47
                  }
                }
              },
              "optional": false,
              "range": [
                903,
                910
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 47
                },
                "start": {
                  "column": 2,
                  "line": 47
                }
              }
            },
            "range": [
              903,
              911
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 47
              },
              "start": {
                "column": 2,
                "line": 47
              }
            }
          }
        ],
        "range": [
          860,
          929
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 48
          },
          "start": {
            "column": 42,
            "line": 44
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bZ",
        "optional": false,
        "range": [
          827,
          829
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 44
          },
          "start": {
            "column": 9,
            "line": 44
          }
        }
      },
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
                "column": 32,
                "line": 44
              },
              "start": {
                "column": 29,
                "line": 44
              }
            },
            "range": [
              847,
              850
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  849,
                  850
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 44
                  },
                  "start": {
                    "column": 31,
                    "line": 44
                  }
                }
              },
              "range": [
                849,
                850
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 44
                },
                "start": {
                  "column": 31,
                  "line": 44
                }
              }
            }
          },
          "range": [
            843,
            850
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 44
            },
            "start": {
              "column": 25,
              "line": 44
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 40,
                "line": 44
              },
              "start": {
                "column": 37,
                "line": 44
              }
            },
            "range": [
              855,
              858
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  857,
                  858
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 44
                  },
                  "start": {
                    "column": 39,
                    "line": 44
                  }
                }
              },
              "range": [
                857,
                858
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 44
                },
                "start": {
                  "column": 39,
                  "line": 44
                }
              }
            }
          },
          "range": [
            852,
            858
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 44
            },
            "start": {
              "column": 34,
              "line": 44
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 24,
            "line": 44
          },
          "start": {
            "column": 11,
            "line": 44
          }
        },
        "range": [
          829,
          842
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
                "name": "Z",
                "optional": false,
                "range": [
                  840,
                  841
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 44
                  },
                  "start": {
                    "column": 22,
                    "line": 44
                  }
                }
              },
              "range": [
                840,
                841
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 44
                },
                "start": {
                  "column": 22,
                  "line": 44
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
                830,
                831
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 44
                },
                "start": {
                  "column": 12,
                  "line": 44
                }
              }
            },
            "out": false,
            "range": [
              830,
              841
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 44
              },
              "start": {
                "column": 12,
                "line": 44
              }
            }
          }
        ]
      },
      "range": [
        818,
        929
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 44
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
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "range": [
                    986,
                    990
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 50
                    },
                    "start": {
                      "column": 2,
                      "line": 50
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toLowerCase",
                  "optional": false,
                  "range": [
                    991,
                    1002
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 50
                    },
                    "start": {
                      "column": 7,
                      "line": 50
                    }
                  }
                },
                "range": [
                  986,
                  1002
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 50
                  },
                  "start": {
                    "column": 2,
                    "line": 50
                  }
                }
              },
              "optional": false,
              "range": [
                986,
                1004
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 50
                },
                "start": {
                  "column": 2,
                  "line": 50
                }
              }
            },
            "range": [
              986,
              1005
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 50
              },
              "start": {
                "column": 2,
                "line": 50
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "range": [
                    1008,
                    1011
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 51
                    },
                    "start": {
                      "column": 2,
                      "line": 51
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    1012,
                    1013
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 51
                    },
                    "start": {
                      "column": 6,
                      "line": 51
                    }
                  }
                },
                "range": [
                  1008,
                  1013
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 51
                  },
                  "start": {
                    "column": 2,
                    "line": 51
                  }
                }
              },
              "optional": false,
              "range": [
                1008,
                1015
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 51
                },
                "start": {
                  "column": 2,
                  "line": 51
                }
              }
            },
            "range": [
              1008,
              1016
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 51
              },
              "start": {
                "column": 2,
                "line": 51
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "range": [
                    1035,
                    1038
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 52
                    },
                    "start": {
                      "column": 2,
                      "line": 52
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    1039,
                    1040
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 52
                    },
                    "start": {
                      "column": 6,
                      "line": 52
                    }
                  }
                },
                "range": [
                  1035,
                  1040
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 52
                  },
                  "start": {
                    "column": 2,
                    "line": 52
                  }
                }
              },
              "optional": false,
              "range": [
                1035,
                1042
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 52
                },
                "start": {
                  "column": 2,
                  "line": 52
                }
              }
            },
            "range": [
              1035,
              1043
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 52
              },
              "start": {
                "column": 2,
                "line": 52
              }
            }
          }
        ],
        "range": [
          982,
          1061
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 53
          },
          "start": {
            "column": 52,
            "line": 49
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bString",
        "optional": false,
        "range": [
          939,
          946
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 49
          },
          "start": {
            "column": 9,
            "line": 49
          }
        }
      },
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
                "column": 42,
                "line": 49
              },
              "start": {
                "column": 39,
                "line": 49
              }
            },
            "range": [
              969,
              972
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  971,
                  972
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 49
                  },
                  "start": {
                    "column": 41,
                    "line": 49
                  }
                }
              },
              "range": [
                971,
                972
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 49
                },
                "start": {
                  "column": 41,
                  "line": 49
                }
              }
            }
          },
          "range": [
            965,
            972
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 49
            },
            "start": {
              "column": 35,
              "line": 49
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 50,
                "line": 49
              },
              "start": {
                "column": 47,
                "line": 49
              }
            },
            "range": [
              977,
              980
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  979,
                  980
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 49
                  },
                  "start": {
                    "column": 49,
                    "line": 49
                  }
                }
              },
              "range": [
                979,
                980
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 49
                },
                "start": {
                  "column": 49,
                  "line": 49
                }
              }
            }
          },
          "range": [
            974,
            980
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 49
            },
            "start": {
              "column": 44,
              "line": 49
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 34,
            "line": 49
          },
          "start": {
            "column": 16,
            "line": 49
          }
        },
        "range": [
          946,
          964
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                957,
                963
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 49
                },
                "start": {
                  "column": 27,
                  "line": 49
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
                947,
                948
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 49
                },
                "start": {
                  "column": 17,
                  "line": 49
                }
              }
            },
            "out": false,
            "range": [
              947,
              963
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 49
              },
              "start": {
                "column": 17,
                "line": 49
              }
            }
          }
        ]
      },
      "range": [
        930,
        1061
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 49
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
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "range": [
                    1100,
                    1103
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 55
                    },
                    "start": {
                      "column": 2,
                      "line": 55
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    1104,
                    1105
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 55
                    },
                    "start": {
                      "column": 6,
                      "line": 55
                    }
                  }
                },
                "range": [
                  1100,
                  1105
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 55
                  },
                  "start": {
                    "column": 2,
                    "line": 55
                  }
                }
              },
              "optional": false,
              "range": [
                1100,
                1107
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 55
                },
                "start": {
                  "column": 2,
                  "line": 55
                }
              }
            },
            "range": [
              1100,
              1108
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 55
              },
              "start": {
                "column": 2,
                "line": 55
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "range": [
                    1127,
                    1130
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 56
                    },
                    "start": {
                      "column": 2,
                      "line": 56
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    1131,
                    1132
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 56
                    },
                    "start": {
                      "column": 6,
                      "line": 56
                    }
                  }
                },
                "range": [
                  1127,
                  1132
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 56
                  },
                  "start": {
                    "column": 2,
                    "line": 56
                  }
                }
              },
              "optional": false,
              "range": [
                1127,
                1134
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 56
                },
                "start": {
                  "column": 2,
                  "line": 56
                }
              }
            },
            "range": [
              1127,
              1135
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 56
              },
              "start": {
                "column": 2,
                "line": 56
              }
            }
          }
        ],
        "range": [
          1096,
          1153
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 57
          },
          "start": {
            "column": 34,
            "line": 54
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bAny",
        "optional": false,
        "range": [
          1071,
          1075
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 54
          },
          "start": {
            "column": 9,
            "line": 54
          }
        }
      },
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
                "column": 24,
                "line": 54
              },
              "start": {
                "column": 21,
                "line": 54
              }
            },
            "range": [
              1083,
              1086
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  1085,
                  1086
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 54
                  },
                  "start": {
                    "column": 23,
                    "line": 54
                  }
                }
              },
              "range": [
                1085,
                1086
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 54
                },
                "start": {
                  "column": 23,
                  "line": 54
                }
              }
            }
          },
          "range": [
            1079,
            1086
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 54
            },
            "start": {
              "column": 17,
              "line": 54
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 32,
                "line": 54
              },
              "start": {
                "column": 29,
                "line": 54
              }
            },
            "range": [
              1091,
              1094
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  1093,
                  1094
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 54
                  },
                  "start": {
                    "column": 31,
                    "line": 54
                  }
                }
              },
              "range": [
                1093,
                1094
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 54
                },
                "start": {
                  "column": 31,
                  "line": 54
                }
              }
            }
          },
          "range": [
            1088,
            1094
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 54
            },
            "start": {
              "column": 26,
              "line": 54
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 54
          },
          "start": {
            "column": 13,
            "line": 54
          }
        },
        "range": [
          1075,
          1078
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
                1076,
                1077
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 54
                },
                "start": {
                  "column": 14,
                  "line": 54
                }
              }
            },
            "out": false,
            "range": [
              1076,
              1077
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 54
              },
              "start": {
                "column": 14,
                "line": 54
              }
            }
          }
        ]
      },
      "range": [
        1062,
        1153
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 54
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1163,
          1731
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "range": [
                1177,
                1178
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 60
                },
                "start": {
                  "column": 12,
                  "line": 60
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
                1178,
                1183
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  1181,
                  1183
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 60
                  },
                  "start": {
                    "column": 16,
                    "line": 60
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
                  "column": 18,
                  "line": 60
                },
                "start": {
                  "column": 13,
                  "line": 60
                }
              }
            },
            "range": [
              1167,
              1183
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 60
              },
              "start": {
                "column": 2,
                "line": 60
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
              "name": "derived1",
              "optional": false,
              "range": [
                1187,
                1195
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 62
                },
                "start": {
                  "column": 2,
                  "line": 62
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
                1195,
                1253
              ],
              "async": false,
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "range": [
                            1211,
                            1214
                          ],
                          "loc": {
                            "end": {
                              "column": 7,
                              "line": 63
                            },
                            "start": {
                              "column": 4,
                              "line": 63
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "range": [
                            1215,
                            1216
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 63
                            },
                            "start": {
                              "column": 8,
                              "line": 63
                            }
                          }
                        },
                        "range": [
                          1211,
                          1216
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 63
                          },
                          "start": {
                            "column": 4,
                            "line": 63
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1211,
                        1218
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 63
                        },
                        "start": {
                          "column": 4,
                          "line": 63
                        }
                      }
                    },
                    "range": [
                      1211,
                      1219
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 63
                      },
                      "start": {
                        "column": 4,
                        "line": 63
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "range": [
                            1224,
                            1227
                          ],
                          "loc": {
                            "end": {
                              "column": 7,
                              "line": 64
                            },
                            "start": {
                              "column": 4,
                              "line": 64
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d1",
                          "optional": false,
                          "range": [
                            1228,
                            1230
                          ],
                          "loc": {
                            "end": {
                              "column": 10,
                              "line": 64
                            },
                            "start": {
                              "column": 8,
                              "line": 64
                            }
                          }
                        },
                        "range": [
                          1224,
                          1230
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 64
                          },
                          "start": {
                            "column": 4,
                            "line": 64
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1224,
                        1232
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 64
                        },
                        "start": {
                          "column": 4,
                          "line": 64
                        }
                      }
                    },
                    "range": [
                      1224,
                      1233
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 64
                      },
                      "start": {
                        "column": 4,
                        "line": 64
                      }
                    }
                  }
                ],
                "range": [
                  1205,
                  1253
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 65
                  },
                  "start": {
                    "column": 20,
                    "line": 62
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
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 62
                      },
                      "start": {
                        "column": 14,
                        "line": 62
                      }
                    },
                    "range": [
                      1199,
                      1203
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D1",
                        "optional": false,
                        "range": [
                          1201,
                          1203
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 62
                          },
                          "start": {
                            "column": 16,
                            "line": 62
                          }
                        }
                      },
                      "range": [
                        1201,
                        1203
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 62
                        },
                        "start": {
                          "column": 16,
                          "line": 62
                        }
                      }
                    }
                  },
                  "range": [
                    1196,
                    1203
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 62
                    },
                    "start": {
                      "column": 11,
                      "line": 62
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 65
                },
                "start": {
                  "column": 10,
                  "line": 62
                }
              }
            },
            "range": [
              1187,
              1253
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 65
              },
              "start": {
                "column": 2,
                "line": 62
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
              "name": "derived1ThisD",
              "optional": false,
              "range": [
                1256,
                1269
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 66
                },
                "start": {
                  "column": 2,
                  "line": 66
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
                1269,
                1336
              ],
              "async": false,
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "range": [
                            1294,
                            1297
                          ],
                          "loc": {
                            "end": {
                              "column": 7,
                              "line": 67
                            },
                            "start": {
                              "column": 4,
                              "line": 67
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "range": [
                            1298,
                            1299
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 67
                            },
                            "start": {
                              "column": 8,
                              "line": 67
                            }
                          }
                        },
                        "range": [
                          1294,
                          1299
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 67
                          },
                          "start": {
                            "column": 4,
                            "line": 67
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1294,
                        1301
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 67
                        },
                        "start": {
                          "column": 4,
                          "line": 67
                        }
                      }
                    },
                    "range": [
                      1294,
                      1302
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 67
                      },
                      "start": {
                        "column": 4,
                        "line": 67
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "range": [
                            1307,
                            1310
                          ],
                          "loc": {
                            "end": {
                              "column": 7,
                              "line": 68
                            },
                            "start": {
                              "column": 4,
                              "line": 68
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d1",
                          "optional": false,
                          "range": [
                            1311,
                            1313
                          ],
                          "loc": {
                            "end": {
                              "column": 10,
                              "line": 68
                            },
                            "start": {
                              "column": 8,
                              "line": 68
                            }
                          }
                        },
                        "range": [
                          1307,
                          1313
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 68
                          },
                          "start": {
                            "column": 4,
                            "line": 68
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1307,
                        1315
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 68
                        },
                        "start": {
                          "column": 4,
                          "line": 68
                        }
                      }
                    },
                    "range": [
                      1307,
                      1316
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 68
                      },
                      "start": {
                        "column": 4,
                        "line": 68
                      }
                    }
                  }
                ],
                "range": [
                  1288,
                  1336
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 69
                  },
                  "start": {
                    "column": 34,
                    "line": 66
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
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 66
                      },
                      "start": {
                        "column": 20,
                        "line": 66
                      }
                    },
                    "range": [
                      1274,
                      1277
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "range": [
                          1276,
                          1277
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 66
                          },
                          "start": {
                            "column": 22,
                            "line": 66
                          }
                        }
                      },
                      "range": [
                        1276,
                        1277
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 66
                        },
                        "start": {
                          "column": 22,
                          "line": 66
                        }
                      }
                    }
                  },
                  "range": [
                    1270,
                    1277
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 66
                    },
                    "start": {
                      "column": 16,
                      "line": 66
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 66
                      },
                      "start": {
                        "column": 28,
                        "line": 66
                      }
                    },
                    "range": [
                      1282,
                      1286
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D1",
                        "optional": false,
                        "range": [
                          1284,
                          1286
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 66
                          },
                          "start": {
                            "column": 30,
                            "line": 66
                          }
                        }
                      },
                      "range": [
                        1284,
                        1286
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 66
                        },
                        "start": {
                          "column": 30,
                          "line": 66
                        }
                      }
                    }
                  },
                  "range": [
                    1279,
                    1286
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 66
                    },
                    "start": {
                      "column": 25,
                      "line": 66
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 69
                },
                "start": {
                  "column": 15,
                  "line": 66
                }
              }
            },
            "range": [
              1256,
              1336
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 69
              },
              "start": {
                "column": 2,
                "line": 66
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
              "name": "derived1ThisD1",
              "optional": false,
              "range": [
                1339,
                1353
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 70
                },
                "start": {
                  "column": 2,
                  "line": 70
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
                1353,
                1405
              ],
              "async": false,
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "range": [
                            1379,
                            1382
                          ],
                          "loc": {
                            "end": {
                              "column": 7,
                              "line": 71
                            },
                            "start": {
                              "column": 4,
                              "line": 71
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "range": [
                            1383,
                            1384
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 71
                            },
                            "start": {
                              "column": 8,
                              "line": 71
                            }
                          }
                        },
                        "range": [
                          1379,
                          1384
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 71
                          },
                          "start": {
                            "column": 4,
                            "line": 71
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1379,
                        1386
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 71
                        },
                        "start": {
                          "column": 4,
                          "line": 71
                        }
                      }
                    },
                    "range": [
                      1379,
                      1387
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 71
                      },
                      "start": {
                        "column": 4,
                        "line": 71
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "range": [
                            1392,
                            1395
                          ],
                          "loc": {
                            "end": {
                              "column": 7,
                              "line": 72
                            },
                            "start": {
                              "column": 4,
                              "line": 72
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d1",
                          "optional": false,
                          "range": [
                            1396,
                            1398
                          ],
                          "loc": {
                            "end": {
                              "column": 10,
                              "line": 72
                            },
                            "start": {
                              "column": 8,
                              "line": 72
                            }
                          }
                        },
                        "range": [
                          1392,
                          1398
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 72
                          },
                          "start": {
                            "column": 4,
                            "line": 72
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1392,
                        1400
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 72
                        },
                        "start": {
                          "column": 4,
                          "line": 72
                        }
                      }
                    },
                    "range": [
                      1392,
                      1401
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 72
                      },
                      "start": {
                        "column": 4,
                        "line": 72
                      }
                    }
                  }
                ],
                "range": [
                  1373,
                  1405
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 73
                  },
                  "start": {
                    "column": 36,
                    "line": 70
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
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 70
                      },
                      "start": {
                        "column": 21,
                        "line": 70
                      }
                    },
                    "range": [
                      1358,
                      1362
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D1",
                        "optional": false,
                        "range": [
                          1360,
                          1362
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 70
                          },
                          "start": {
                            "column": 23,
                            "line": 70
                          }
                        }
                      },
                      "range": [
                        1360,
                        1362
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 70
                        },
                        "start": {
                          "column": 23,
                          "line": 70
                        }
                      }
                    }
                  },
                  "range": [
                    1354,
                    1362
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 70
                    },
                    "start": {
                      "column": 17,
                      "line": 70
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 70
                      },
                      "start": {
                        "column": 30,
                        "line": 70
                      }
                    },
                    "range": [
                      1367,
                      1371
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D1",
                        "optional": false,
                        "range": [
                          1369,
                          1371
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 70
                          },
                          "start": {
                            "column": 32,
                            "line": 70
                          }
                        }
                      },
                      "range": [
                        1369,
                        1371
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 70
                        },
                        "start": {
                          "column": 32,
                          "line": 70
                        }
                      }
                    }
                  },
                  "range": [
                    1364,
                    1371
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 70
                    },
                    "start": {
                      "column": 27,
                      "line": 70
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 73
                },
                "start": {
                  "column": 16,
                  "line": 70
                }
              }
            },
            "range": [
              1339,
              1405
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 73
              },
              "start": {
                "column": 2,
                "line": 70
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
              "name": "derived2",
              "optional": false,
              "range": [
                1409,
                1417
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 75
                },
                "start": {
                  "column": 2,
                  "line": 75
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
                1417,
                1526
              ],
              "async": false,
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "range": [
                            1433,
                            1436
                          ],
                          "loc": {
                            "end": {
                              "column": 7,
                              "line": 76
                            },
                            "start": {
                              "column": 4,
                              "line": 76
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "range": [
                            1437,
                            1438
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 76
                            },
                            "start": {
                              "column": 8,
                              "line": 76
                            }
                          }
                        },
                        "range": [
                          1433,
                          1438
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 76
                          },
                          "start": {
                            "column": 4,
                            "line": 76
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1433,
                        1440
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 76
                        },
                        "start": {
                          "column": 4,
                          "line": 76
                        }
                      }
                    },
                    "range": [
                      1433,
                      1441
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 76
                      },
                      "start": {
                        "column": 4,
                        "line": 76
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "range": [
                            1497,
                            1500
                          ],
                          "loc": {
                            "end": {
                              "column": 7,
                              "line": 77
                            },
                            "start": {
                              "column": 4,
                              "line": 77
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d2",
                          "optional": false,
                          "range": [
                            1501,
                            1503
                          ],
                          "loc": {
                            "end": {
                              "column": 10,
                              "line": 77
                            },
                            "start": {
                              "column": 8,
                              "line": 77
                            }
                          }
                        },
                        "range": [
                          1497,
                          1503
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 77
                          },
                          "start": {
                            "column": 4,
                            "line": 77
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1497,
                        1505
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 77
                        },
                        "start": {
                          "column": 4,
                          "line": 77
                        }
                      }
                    },
                    "range": [
                      1497,
                      1506
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 77
                      },
                      "start": {
                        "column": 4,
                        "line": 77
                      }
                    }
                  }
                ],
                "range": [
                  1427,
                  1526
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 78
                  },
                  "start": {
                    "column": 20,
                    "line": 75
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
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 75
                      },
                      "start": {
                        "column": 14,
                        "line": 75
                      }
                    },
                    "range": [
                      1421,
                      1425
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D2",
                        "optional": false,
                        "range": [
                          1423,
                          1425
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 75
                          },
                          "start": {
                            "column": 16,
                            "line": 75
                          }
                        }
                      },
                      "range": [
                        1423,
                        1425
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 75
                        },
                        "start": {
                          "column": 16,
                          "line": 75
                        }
                      }
                    }
                  },
                  "range": [
                    1418,
                    1425
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 75
                    },
                    "start": {
                      "column": 11,
                      "line": 75
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 78
                },
                "start": {
                  "column": 10,
                  "line": 75
                }
              }
            },
            "range": [
              1409,
              1526
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 78
              },
              "start": {
                "column": 2,
                "line": 75
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
              "name": "derived2ThisD",
              "optional": false,
              "range": [
                1529,
                1542
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 79
                },
                "start": {
                  "column": 2,
                  "line": 79
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
                1542,
                1660
              ],
              "async": false,
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "range": [
                            1567,
                            1570
                          ],
                          "loc": {
                            "end": {
                              "column": 7,
                              "line": 80
                            },
                            "start": {
                              "column": 4,
                              "line": 80
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "range": [
                            1571,
                            1572
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 80
                            },
                            "start": {
                              "column": 8,
                              "line": 80
                            }
                          }
                        },
                        "range": [
                          1567,
                          1572
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 80
                          },
                          "start": {
                            "column": 4,
                            "line": 80
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1567,
                        1574
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 80
                        },
                        "start": {
                          "column": 4,
                          "line": 80
                        }
                      }
                    },
                    "range": [
                      1567,
                      1575
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 80
                      },
                      "start": {
                        "column": 4,
                        "line": 80
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "range": [
                            1631,
                            1634
                          ],
                          "loc": {
                            "end": {
                              "column": 7,
                              "line": 81
                            },
                            "start": {
                              "column": 4,
                              "line": 81
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d2",
                          "optional": false,
                          "range": [
                            1635,
                            1637
                          ],
                          "loc": {
                            "end": {
                              "column": 10,
                              "line": 81
                            },
                            "start": {
                              "column": 8,
                              "line": 81
                            }
                          }
                        },
                        "range": [
                          1631,
                          1637
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 81
                          },
                          "start": {
                            "column": 4,
                            "line": 81
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1631,
                        1639
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 81
                        },
                        "start": {
                          "column": 4,
                          "line": 81
                        }
                      }
                    },
                    "range": [
                      1631,
                      1640
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 81
                      },
                      "start": {
                        "column": 4,
                        "line": 81
                      }
                    }
                  }
                ],
                "range": [
                  1561,
                  1660
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 82
                  },
                  "start": {
                    "column": 34,
                    "line": 79
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
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 79
                      },
                      "start": {
                        "column": 20,
                        "line": 79
                      }
                    },
                    "range": [
                      1547,
                      1550
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "range": [
                          1549,
                          1550
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 79
                          },
                          "start": {
                            "column": 22,
                            "line": 79
                          }
                        }
                      },
                      "range": [
                        1549,
                        1550
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 79
                        },
                        "start": {
                          "column": 22,
                          "line": 79
                        }
                      }
                    }
                  },
                  "range": [
                    1543,
                    1550
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 79
                    },
                    "start": {
                      "column": 16,
                      "line": 79
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 79
                      },
                      "start": {
                        "column": 28,
                        "line": 79
                      }
                    },
                    "range": [
                      1555,
                      1559
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D2",
                        "optional": false,
                        "range": [
                          1557,
                          1559
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 79
                          },
                          "start": {
                            "column": 30,
                            "line": 79
                          }
                        }
                      },
                      "range": [
                        1557,
                        1559
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 79
                        },
                        "start": {
                          "column": 30,
                          "line": 79
                        }
                      }
                    }
                  },
                  "range": [
                    1552,
                    1559
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 79
                    },
                    "start": {
                      "column": 25,
                      "line": 79
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 82
                },
                "start": {
                  "column": 15,
                  "line": 79
                }
              }
            },
            "range": [
              1529,
              1660
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 82
              },
              "start": {
                "column": 2,
                "line": 79
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
              "name": "derived2ThisD2",
              "optional": false,
              "range": [
                1663,
                1677
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 83
                },
                "start": {
                  "column": 2,
                  "line": 83
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
                1677,
                1729
              ],
              "async": false,
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "range": [
                            1703,
                            1706
                          ],
                          "loc": {
                            "end": {
                              "column": 7,
                              "line": 84
                            },
                            "start": {
                              "column": 4,
                              "line": 84
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "range": [
                            1707,
                            1708
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 84
                            },
                            "start": {
                              "column": 8,
                              "line": 84
                            }
                          }
                        },
                        "range": [
                          1703,
                          1708
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 84
                          },
                          "start": {
                            "column": 4,
                            "line": 84
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1703,
                        1710
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 84
                        },
                        "start": {
                          "column": 4,
                          "line": 84
                        }
                      }
                    },
                    "range": [
                      1703,
                      1711
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 84
                      },
                      "start": {
                        "column": 4,
                        "line": 84
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "range": [
                            1716,
                            1719
                          ],
                          "loc": {
                            "end": {
                              "column": 7,
                              "line": 85
                            },
                            "start": {
                              "column": 4,
                              "line": 85
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d2",
                          "optional": false,
                          "range": [
                            1720,
                            1722
                          ],
                          "loc": {
                            "end": {
                              "column": 10,
                              "line": 85
                            },
                            "start": {
                              "column": 8,
                              "line": 85
                            }
                          }
                        },
                        "range": [
                          1716,
                          1722
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 85
                          },
                          "start": {
                            "column": 4,
                            "line": 85
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1716,
                        1724
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 85
                        },
                        "start": {
                          "column": 4,
                          "line": 85
                        }
                      }
                    },
                    "range": [
                      1716,
                      1725
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 85
                      },
                      "start": {
                        "column": 4,
                        "line": 85
                      }
                    }
                  }
                ],
                "range": [
                  1697,
                  1729
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 86
                  },
                  "start": {
                    "column": 36,
                    "line": 83
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
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 83
                      },
                      "start": {
                        "column": 21,
                        "line": 83
                      }
                    },
                    "range": [
                      1682,
                      1686
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D2",
                        "optional": false,
                        "range": [
                          1684,
                          1686
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 83
                          },
                          "start": {
                            "column": 23,
                            "line": 83
                          }
                        }
                      },
                      "range": [
                        1684,
                        1686
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 83
                        },
                        "start": {
                          "column": 23,
                          "line": 83
                        }
                      }
                    }
                  },
                  "range": [
                    1678,
                    1686
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 83
                    },
                    "start": {
                      "column": 17,
                      "line": 83
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 83
                      },
                      "start": {
                        "column": 30,
                        "line": 83
                      }
                    },
                    "range": [
                      1691,
                      1695
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D2",
                        "optional": false,
                        "range": [
                          1693,
                          1695
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 83
                          },
                          "start": {
                            "column": 32,
                            "line": 83
                          }
                        }
                      },
                      "range": [
                        1693,
                        1695
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 83
                        },
                        "start": {
                          "column": 32,
                          "line": 83
                        }
                      }
                    }
                  },
                  "range": [
                    1688,
                    1695
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 83
                    },
                    "start": {
                      "column": 27,
                      "line": 83
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 86
                },
                "start": {
                  "column": 16,
                  "line": 83
                }
              }
            },
            "range": [
              1663,
              1729
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 86
              },
              "start": {
                "column": 2,
                "line": 83
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 87
          },
          "start": {
            "column": 8,
            "line": 59
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "range": [
          1161,
          1162
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 59
          },
          "start": {
            "column": 6,
            "line": 59
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1155,
        1731
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 87
        },
        "start": {
          "column": 0,
          "line": 59
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1751,
          1774
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d1",
              "optional": false,
              "range": [
                1765,
                1767
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 89
                },
                "start": {
                  "column": 12,
                  "line": 89
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
                1767,
                1772
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  1770,
                  1772
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 89
                  },
                  "start": {
                    "column": 17,
                    "line": 89
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
                  "column": 19,
                  "line": 89
                },
                "start": {
                  "column": 14,
                  "line": 89
                }
              }
            },
            "range": [
              1755,
              1772
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 89
              },
              "start": {
                "column": 2,
                "line": 89
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 90
          },
          "start": {
            "column": 19,
            "line": 88
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D1",
        "optional": false,
        "range": [
          1738,
          1740
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 88
          },
          "start": {
            "column": 6,
            "line": 88
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "range": [
          1749,
          1750
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 88
          },
          "start": {
            "column": 17,
            "line": 88
          }
        }
      },
      "range": [
        1732,
        1774
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 90
        },
        "start": {
          "column": 0,
          "line": 88
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1794,
          1836
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "range": [
                1808,
                1809
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 92
                },
                "start": {
                  "column": 12,
                  "line": 92
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
                1809,
                1814
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  1812,
                  1814
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 92
                  },
                  "start": {
                    "column": 16,
                    "line": 92
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
                  "column": 18,
                  "line": 92
                },
                "start": {
                  "column": 13,
                  "line": 92
                }
              }
            },
            "range": [
              1798,
              1814
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 92
              },
              "start": {
                "column": 2,
                "line": 92
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d2",
              "optional": false,
              "range": [
                1827,
                1829
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 93
                },
                "start": {
                  "column": 12,
                  "line": 93
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
                1829,
                1834
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  1832,
                  1834
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 93
                  },
                  "start": {
                    "column": 17,
                    "line": 93
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
                  "column": 19,
                  "line": 93
                },
                "start": {
                  "column": 14,
                  "line": 93
                }
              }
            },
            "range": [
              1817,
              1834
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 93
              },
              "start": {
                "column": 2,
                "line": 93
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 94
          },
          "start": {
            "column": 19,
            "line": 91
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D2",
        "optional": false,
        "range": [
          1781,
          1783
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 91
          },
          "start": {
            "column": 6,
            "line": 91
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "range": [
          1792,
          1793
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 91
          },
          "start": {
            "column": 17,
            "line": 91
          }
        }
      },
      "range": [
        1775,
        1836
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 94
        },
        "start": {
          "column": 0,
          "line": 91
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 96
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
