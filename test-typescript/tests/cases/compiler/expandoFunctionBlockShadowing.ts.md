__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    57,
    388
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        57,
        79
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "range": [
            77,
            79
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 3
            },
            "start": {
              "column": 20,
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
          "name": "X",
          "optional": false,
          "range": [
            73,
            74
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
        "params": [],
        "range": [
          64,
          79
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 3
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 22,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
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
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 5
                      },
                      "start": {
                        "column": 9,
                        "line": 5
                      }
                    },
                    "range": [
                      110,
                      126
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "test",
                            "optional": false,
                            "range": [
                              114,
                              118
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 5
                              },
                              "start": {
                                "column": 13,
                                "line": 5
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
                                "column": 23,
                                "line": 5
                              },
                              "start": {
                                "column": 18,
                                "line": 5
                              }
                            },
                            "range": [
                              119,
                              124
                            ],
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "range": [
                                121,
                                124
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 5
                                },
                                "start": {
                                  "column": 20,
                                  "line": 5
                                }
                              }
                            }
                          },
                          "range": [
                            114,
                            124
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 5
                            },
                            "start": {
                              "column": 13,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "range": [
                        112,
                        126
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 5
                        },
                        "start": {
                          "column": 11,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    109,
                    126
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 5
                    },
                    "start": {
                      "column": 8,
                      "line": 5
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "range": [
                    129,
                    131
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 5
                    },
                    "start": {
                      "column": 28,
                      "line": 5
                    }
                  }
                },
                "range": [
                  109,
                  131
                ],
                "loc": {
                  "end": {
                    "column": 30,
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
            "kind": "const",
            "range": [
              103,
              132
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 5
              },
              "start": {
                "column": 2,
                "line": 5
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "range": [
                    135,
                    136
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 6
                    },
                    "start": {
                      "column": 2,
                      "line": 6
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "range": [
                    137,
                    141
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 6
                    },
                    "start": {
                      "column": 4,
                      "line": 6
                    }
                  }
                },
                "range": [
                  135,
                  141
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 6
                  },
                  "start": {
                    "column": 2,
                    "line": 6
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  144,
                  145
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 6
                  },
                  "start": {
                    "column": 11,
                    "line": 6
                  }
                }
              },
              "range": [
                135,
                145
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 6
                },
                "start": {
                  "column": 2,
                  "line": 6
                }
              }
            },
            "range": [
              135,
              146
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 6
              },
              "start": {
                "column": 2,
                "line": 6
              }
            }
          }
        ],
        "range": [
          99,
          148
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 19,
            "line": 4
          }
        }
      },
      "test": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Math",
            "optional": false,
            "range": [
              84,
              88
            ],
            "loc": {
              "end": {
                "column": 8,
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
            "name": "random",
            "optional": false,
            "range": [
              89,
              95
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 4
              },
              "start": {
                "column": 9,
                "line": 4
              }
            }
          },
          "range": [
            84,
            95
          ],
          "loc": {
            "end": {
              "column": 15,
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
          84,
          97
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 4
          },
          "start": {
            "column": 4,
            "line": 4
          }
        }
      },
      "range": [
        80,
        148
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        150,
        172
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "range": [
            170,
            172
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 9
            },
            "start": {
              "column": 20,
              "line": 9
            }
          }
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Y",
          "optional": false,
          "range": [
            166,
            167
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 9
            },
            "start": {
              "column": 16,
              "line": 9
            }
          }
        },
        "params": [],
        "range": [
          157,
          172
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 9
          },
          "start": {
            "column": 7,
            "line": 9
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 22,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Y",
            "optional": false,
            "range": [
              173,
              174
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 10
              },
              "start": {
                "column": 0,
                "line": 10
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "range": [
              175,
              179
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 10
              },
              "start": {
                "column": 2,
                "line": 10
              }
            }
          },
          "range": [
            173,
            179
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 10
            },
            "start": {
              "column": 0,
              "line": 10
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"foo\"",
          "value": "foo",
          "range": [
            182,
            187
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 10
            },
            "start": {
              "column": 9,
              "line": 10
            }
          }
        },
        "range": [
          173,
          187
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        173,
        188
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
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
            "name": "aliasTopY",
            "optional": false,
            "range": [
              195,
              204
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 11
              },
              "start": {
                "column": 6,
                "line": 11
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "Y",
            "optional": false,
            "range": [
              207,
              208
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 11
              },
              "start": {
                "column": 18,
                "line": 11
              }
            }
          },
          "range": [
            195,
            208
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 11
            },
            "start": {
              "column": 6,
              "line": 11
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        189,
        209
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": null,
      "consequent": {
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
                  "name": "Y",
                  "optional": false,
                  "range": [
                    239,
                    240
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
                      "line": 13
                    }
                  }
                },
                "init": {
                  "type": "FunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      256,
                      258
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 13
                      },
                      "start": {
                        "column": 25,
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
                    "name": "Y",
                    "optional": false,
                    "range": [
                      252,
                      253
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 13
                      },
                      "start": {
                        "column": 21,
                        "line": 13
                      }
                    }
                  },
                  "params": [],
                  "range": [
                    243,
                    258
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 13
                    },
                    "start": {
                      "column": 12,
                      "line": 13
                    }
                  }
                },
                "range": [
                  239,
                  258
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 13
                  },
                  "start": {
                    "column": 8,
                    "line": 13
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              233,
              258
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 13
              },
              "start": {
                "column": 2,
                "line": 13
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "range": [
                    261,
                    262
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
                  "name": "test",
                  "optional": false,
                  "range": [
                    263,
                    267
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 14
                    },
                    "start": {
                      "column": 4,
                      "line": 14
                    }
                  }
                },
                "range": [
                  261,
                  267
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 14
                  },
                  "start": {
                    "column": 2,
                    "line": 14
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "42",
                "value": 42,
                "range": [
                  270,
                  272
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 14
                  },
                  "start": {
                    "column": 11,
                    "line": 14
                  }
                }
              },
              "range": [
                261,
                272
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 14
                },
                "start": {
                  "column": 2,
                  "line": 14
                }
              }
            },
            "range": [
              261,
              273
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 14
              },
              "start": {
                "column": 2,
                "line": 14
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
                  "name": "topYcheck",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 16
                      },
                      "start": {
                        "column": 17,
                        "line": 16
                      }
                    },
                    "range": [
                      292,
                      320
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSCallSignatureDeclaration",
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 16
                              },
                              "start": {
                                "column": 23,
                                "line": 16
                              }
                            },
                            "range": [
                              298,
                              304
                            ],
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "range": [
                                300,
                                304
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 16
                                },
                                "start": {
                                  "column": 25,
                                  "line": 16
                                }
                              }
                            }
                          },
                          "range": [
                            296,
                            305
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 16
                            },
                            "start": {
                              "column": 21,
                              "line": 16
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "test",
                            "optional": false,
                            "range": [
                              306,
                              310
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 16
                              },
                              "start": {
                                "column": 31,
                                "line": 16
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
                                "column": 43,
                                "line": 16
                              },
                              "start": {
                                "column": 35,
                                "line": 16
                              }
                            },
                            "range": [
                              310,
                              318
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                312,
                                318
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 16
                                },
                                "start": {
                                  "column": 37,
                                  "line": 16
                                }
                              }
                            }
                          },
                          "range": [
                            306,
                            318
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 16
                            },
                            "start": {
                              "column": 31,
                              "line": 16
                            }
                          }
                        }
                      ],
                      "range": [
                        294,
                        320
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 16
                        },
                        "start": {
                          "column": 19,
                          "line": 16
                        }
                      }
                    }
                  },
                  "range": [
                    283,
                    320
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 16
                    },
                    "start": {
                      "column": 8,
                      "line": 16
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "aliasTopY",
                  "optional": false,
                  "range": [
                    323,
                    332
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 16
                    },
                    "start": {
                      "column": 48,
                      "line": 16
                    }
                  }
                },
                "range": [
                  283,
                  332
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 16
                  },
                  "start": {
                    "column": 8,
                    "line": 16
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              277,
              333
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 16
              },
              "start": {
                "column": 2,
                "line": 16
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
                  "name": "blockYcheck",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 17
                      },
                      "start": {
                        "column": 19,
                        "line": 17
                      }
                    },
                    "range": [
                      353,
                      381
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSCallSignatureDeclaration",
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 17
                              },
                              "start": {
                                "column": 25,
                                "line": 17
                              }
                            },
                            "range": [
                              359,
                              365
                            ],
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "range": [
                                361,
                                365
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 17
                                },
                                "start": {
                                  "column": 27,
                                  "line": 17
                                }
                              }
                            }
                          },
                          "range": [
                            357,
                            366
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 17
                            },
                            "start": {
                              "column": 23,
                              "line": 17
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "test",
                            "optional": false,
                            "range": [
                              367,
                              371
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 17
                              },
                              "start": {
                                "column": 33,
                                "line": 17
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
                                "column": 45,
                                "line": 17
                              },
                              "start": {
                                "column": 37,
                                "line": 17
                              }
                            },
                            "range": [
                              371,
                              379
                            ],
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "range": [
                                373,
                                379
                              ],
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 17
                                },
                                "start": {
                                  "column": 39,
                                  "line": 17
                                }
                              }
                            }
                          },
                          "range": [
                            367,
                            379
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 17
                            },
                            "start": {
                              "column": 33,
                              "line": 17
                            }
                          }
                        }
                      ],
                      "range": [
                        355,
                        381
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 17
                        },
                        "start": {
                          "column": 21,
                          "line": 17
                        }
                      }
                    }
                  },
                  "range": [
                    342,
                    381
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 17
                    },
                    "start": {
                      "column": 8,
                      "line": 17
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "range": [
                    384,
                    385
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 17
                    },
                    "start": {
                      "column": 50,
                      "line": 17
                    }
                  }
                },
                "range": [
                  342,
                  385
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 17
                  },
                  "start": {
                    "column": 8,
                    "line": 17
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              336,
              386
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 17
              },
              "start": {
                "column": 2,
                "line": 17
              }
            }
          }
        ],
        "range": [
          229,
          388
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 19,
            "line": 12
          }
        }
      },
      "test": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Math",
            "optional": false,
            "range": [
              214,
              218
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "random",
            "optional": false,
            "range": [
              219,
              225
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 12
              },
              "start": {
                "column": 9,
                "line": 12
              }
            }
          },
          "range": [
            214,
            225
          ],
          "loc": {
            "end": {
              "column": 15,
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
          214,
          227
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
        210,
        388
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 18
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
