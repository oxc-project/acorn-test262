__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1434
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
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 42,
            "line": 1
          },
          "start": {
            "column": 22,
            "line": 1
          }
        },
        "range": [
          22,
          42
        ],
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "range": [
                24,
                30
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 1
                },
                "start": {
                  "column": 24,
                  "line": 1
                }
              }
            },
            {
              "type": "TSUndefinedKeyword",
              "range": [
                33,
                42
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 1
                },
                "start": {
                  "column": 33,
                  "line": 1
                }
              }
            }
          ],
          "range": [
            24,
            42
          ],
          "loc": {
            "end": {
              "column": 42,
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
        0,
        43
      ],
      "loc": {
        "end": {
          "column": 43,
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    69,
                    70
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 4
                    },
                    "start": {
                      "column": 8,
                      "line": 4
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      73,
                      76
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 4
                      },
                      "start": {
                        "column": 12,
                        "line": 4
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    73,
                    78
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 4
                    },
                    "start": {
                      "column": 12,
                      "line": 4
                    }
                  }
                },
                "range": [
                  69,
                  78
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 4
                  },
                  "start": {
                    "column": 8,
                    "line": 4
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              65,
              79
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      139,
                      140
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    139,
                    141
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
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
                129,
                169
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 10
                },
                "start": {
                  "column": 9,
                  "line": 8
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      101,
                      102
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    101,
                    103
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 6
                    },
                    "start": {
                      "column": 8,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                91,
                119
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 7
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                88,
                89
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
            "range": [
              84,
              169
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "range": [
          59,
          171
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 14,
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
        "name": "f1",
        "optional": false,
        "range": [
          54,
          56
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "params": [],
      "range": [
        45,
        171
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 3
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 14
                      },
                      "start": {
                        "column": 9,
                        "line": 14
                      }
                    },
                    "range": [
                      198,
                      218
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            200,
                            206
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 14
                            },
                            "start": {
                              "column": 11,
                              "line": 14
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            209,
                            218
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 14
                            },
                            "start": {
                              "column": 20,
                              "line": 14
                            }
                          }
                        }
                      ],
                      "range": [
                        200,
                        218
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 14
                        },
                        "start": {
                          "column": 11,
                          "line": 14
                        }
                      }
                    }
                  },
                  "range": [
                    197,
                    218
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
                },
                "init": null,
                "range": [
                  197,
                  218
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
            "declare": false,
            "kind": "let",
            "range": [
              193,
              219
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
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
                "name": "x",
                "optional": false,
                "range": [
                  224,
                  225
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 15
                  },
                  "start": {
                    "column": 4,
                    "line": 15
                  }
                }
              },
              "right": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    228,
                    231
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
                      "line": 15
                    }
                  }
                },
                "optional": false,
                "range": [
                  228,
                  233
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 15
                  },
                  "start": {
                    "column": 8,
                    "line": 15
                  }
                }
              },
              "range": [
                224,
                233
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 15
                }
              }
            },
            "range": [
              224,
              234
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      294,
                      295
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 20
                      },
                      "start": {
                        "column": 8,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    294,
                    296
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 20
                    },
                    "start": {
                      "column": 8,
                      "line": 20
                    }
                  }
                }
              ],
              "range": [
                284,
                324
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 21
                },
                "start": {
                  "column": 9,
                  "line": 19
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      256,
                      257
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 17
                      },
                      "start": {
                        "column": 8,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    256,
                    258
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 17
                    },
                    "start": {
                      "column": 8,
                      "line": 17
                    }
                  }
                }
              ],
              "range": [
                246,
                274
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 18
                },
                "start": {
                  "column": 11,
                  "line": 16
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                243,
                244
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 16
                },
                "start": {
                  "column": 8,
                  "line": 16
                }
              }
            },
            "range": [
              239,
              324
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          }
        ],
        "range": [
          187,
          326
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 14,
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
        "name": "f2",
        "optional": false,
        "range": [
          182,
          184
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
      "params": [],
      "range": [
        173,
        326
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 25
                      },
                      "start": {
                        "column": 9,
                        "line": 25
                      }
                    },
                    "range": [
                      353,
                      373
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            355,
                            361
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 25
                            },
                            "start": {
                              "column": 11,
                              "line": 25
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            364,
                            373
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 25
                            },
                            "start": {
                              "column": 20,
                              "line": 25
                            }
                          }
                        }
                      ],
                      "range": [
                        355,
                        373
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 25
                        },
                        "start": {
                          "column": 11,
                          "line": 25
                        }
                      }
                    }
                  },
                  "range": [
                    352,
                    373
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 25
                    },
                    "start": {
                      "column": 8,
                      "line": 25
                    }
                  }
                },
                "init": null,
                "range": [
                  352,
                  373
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 25
                  },
                  "start": {
                    "column": 8,
                    "line": 25
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              348,
              374
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      442,
                      443
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 30
                      },
                      "start": {
                        "column": 8,
                        "line": 30
                      }
                    }
                  },
                  "range": [
                    442,
                    444
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 30
                    },
                    "start": {
                      "column": 8,
                      "line": 30
                    }
                  }
                }
              ],
              "range": [
                432,
                472
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 31
                },
                "start": {
                  "column": 9,
                  "line": 29
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      404,
                      405
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 27
                      },
                      "start": {
                        "column": 8,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    404,
                    406
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 27
                    },
                    "start": {
                      "column": 8,
                      "line": 27
                    }
                  }
                }
              ],
              "range": [
                394,
                422
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 28
                },
                "start": {
                  "column": 19,
                  "line": 26
                }
              }
            },
            "test": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  383,
                  384
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 26
                  },
                  "start": {
                    "column": 8,
                    "line": 26
                  }
                }
              },
              "right": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    387,
                    390
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 26
                    },
                    "start": {
                      "column": 12,
                      "line": 26
                    }
                  }
                },
                "optional": false,
                "range": [
                  387,
                  392
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 26
                  },
                  "start": {
                    "column": 12,
                    "line": 26
                  }
                }
              },
              "range": [
                383,
                392
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 26
                },
                "start": {
                  "column": 8,
                  "line": 26
                }
              }
            },
            "range": [
              379,
              472
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          }
        ],
        "range": [
          342,
          474
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 32
          },
          "start": {
            "column": 14,
            "line": 24
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "range": [
          337,
          339
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 24
          },
          "start": {
            "column": 9,
            "line": 24
          }
        }
      },
      "params": [],
      "range": [
        328,
        474
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 24
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 35
                      },
                      "start": {
                        "column": 9,
                        "line": 35
                      }
                    },
                    "range": [
                      501,
                      521
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            503,
                            509
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 35
                            },
                            "start": {
                              "column": 11,
                              "line": 35
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            512,
                            521
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 35
                            },
                            "start": {
                              "column": 20,
                              "line": 35
                            }
                          }
                        }
                      ],
                      "range": [
                        503,
                        521
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 35
                        },
                        "start": {
                          "column": 11,
                          "line": 35
                        }
                      }
                    }
                  },
                  "range": [
                    500,
                    521
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 35
                    },
                    "start": {
                      "column": 8,
                      "line": 35
                    }
                  }
                },
                "init": null,
                "range": [
                  500,
                  521
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 35
                  },
                  "start": {
                    "column": 8,
                    "line": 35
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              496,
              522
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      605,
                      606
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 40
                      },
                      "start": {
                        "column": 8,
                        "line": 40
                      }
                    }
                  },
                  "range": [
                    605,
                    607
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 40
                    },
                    "start": {
                      "column": 8,
                      "line": 40
                    }
                  }
                }
              ],
              "range": [
                595,
                623
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 41
                },
                "start": {
                  "column": 9,
                  "line": 39
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      555,
                      556
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 37
                      },
                      "start": {
                        "column": 8,
                        "line": 37
                      }
                    }
                  },
                  "range": [
                    555,
                    557
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 37
                    },
                    "start": {
                      "column": 8,
                      "line": 37
                    }
                  }
                }
              ],
              "range": [
                545,
                585
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 38
                },
                "start": {
                  "column": 22,
                  "line": 36
                }
              }
            },
            "test": {
              "type": "UnaryExpression",
              "argument": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    533,
                    534
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 36
                    },
                    "start": {
                      "column": 10,
                      "line": 36
                    }
                  }
                },
                "right": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      537,
                      540
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 36
                      },
                      "start": {
                        "column": 14,
                        "line": 36
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    537,
                    542
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 36
                    },
                    "start": {
                      "column": 14,
                      "line": 36
                    }
                  }
                },
                "range": [
                  533,
                  542
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 36
                  },
                  "start": {
                    "column": 10,
                    "line": 36
                  }
                }
              },
              "operator": "!",
              "prefix": true,
              "range": [
                531,
                543
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 36
                },
                "start": {
                  "column": 8,
                  "line": 36
                }
              }
            },
            "range": [
              527,
              623
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          }
        ],
        "range": [
          490,
          625
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 42
          },
          "start": {
            "column": 14,
            "line": 34
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "range": [
          485,
          487
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 34
          },
          "start": {
            "column": 9,
            "line": 34
          }
        }
      },
      "params": [],
      "range": [
        476,
        625
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 34
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 45
                      },
                      "start": {
                        "column": 9,
                        "line": 45
                      }
                    },
                    "range": [
                      652,
                      672
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            654,
                            660
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 45
                            },
                            "start": {
                              "column": 11,
                              "line": 45
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            663,
                            672
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 45
                            },
                            "start": {
                              "column": 20,
                              "line": 45
                            }
                          }
                        }
                      ],
                      "range": [
                        654,
                        672
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 45
                        },
                        "start": {
                          "column": 11,
                          "line": 45
                        }
                      }
                    }
                  },
                  "range": [
                    651,
                    672
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 45
                    },
                    "start": {
                      "column": 8,
                      "line": 45
                    }
                  }
                },
                "init": null,
                "range": [
                  651,
                  672
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 45
                  },
                  "start": {
                    "column": 8,
                    "line": 45
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              647,
              673
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 45
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 46
                      },
                      "start": {
                        "column": 9,
                        "line": 46
                      }
                    },
                    "range": [
                      683,
                      703
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            685,
                            691
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 46
                            },
                            "start": {
                              "column": 11,
                              "line": 46
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            694,
                            703
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 46
                            },
                            "start": {
                              "column": 20,
                              "line": 46
                            }
                          }
                        }
                      ],
                      "range": [
                        685,
                        703
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 46
                        },
                        "start": {
                          "column": 11,
                          "line": 46
                        }
                      }
                    }
                  },
                  "range": [
                    682,
                    703
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 46
                    },
                    "start": {
                      "column": 8,
                      "line": 46
                    }
                  }
                },
                "init": null,
                "range": [
                  682,
                  703
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 46
                  },
                  "start": {
                    "column": 8,
                    "line": 46
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              678,
              704
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 46
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      809,
                      810
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 52
                      },
                      "start": {
                        "column": 8,
                        "line": 52
                      }
                    }
                  },
                  "range": [
                    809,
                    811
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 52
                    },
                    "start": {
                      "column": 8,
                      "line": 52
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      842,
                      843
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 53
                      },
                      "start": {
                        "column": 8,
                        "line": 53
                      }
                    }
                  },
                  "range": [
                    842,
                    844
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 53
                    },
                    "start": {
                      "column": 8,
                      "line": 53
                    }
                  }
                }
              ],
              "range": [
                799,
                872
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 54
                },
                "start": {
                  "column": 9,
                  "line": 51
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      738,
                      739
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 48
                      },
                      "start": {
                        "column": 8,
                        "line": 48
                      }
                    }
                  },
                  "range": [
                    738,
                    740
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 48
                    },
                    "start": {
                      "column": 8,
                      "line": 48
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      759,
                      760
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 49
                      },
                      "start": {
                        "column": 8,
                        "line": 49
                      }
                    }
                  },
                  "range": [
                    759,
                    761
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 49
                    },
                    "start": {
                      "column": 8,
                      "line": 49
                    }
                  }
                }
              ],
              "range": [
                728,
                789
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 50
                },
                "start": {
                  "column": 23,
                  "line": 47
                }
              }
            },
            "test": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  713,
                  714
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 47
                  },
                  "start": {
                    "column": 8,
                    "line": 47
                  }
                }
              },
              "right": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    717,
                    718
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 47
                    },
                    "start": {
                      "column": 12,
                      "line": 47
                    }
                  }
                },
                "right": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      721,
                      724
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 47
                      },
                      "start": {
                        "column": 16,
                        "line": 47
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    721,
                    726
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 47
                    },
                    "start": {
                      "column": 16,
                      "line": 47
                    }
                  }
                },
                "range": [
                  717,
                  726
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 47
                  },
                  "start": {
                    "column": 12,
                    "line": 47
                  }
                }
              },
              "range": [
                713,
                726
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 47
                },
                "start": {
                  "column": 8,
                  "line": 47
                }
              }
            },
            "range": [
              709,
              872
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 54
              },
              "start": {
                "column": 4,
                "line": 47
              }
            }
          }
        ],
        "range": [
          641,
          874
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 55
          },
          "start": {
            "column": 14,
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
        "name": "f5",
        "optional": false,
        "range": [
          636,
          638
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
      "params": [],
      "range": [
        627,
        874
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 55
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 58
                      },
                      "start": {
                        "column": 9,
                        "line": 58
                      }
                    },
                    "range": [
                      901,
                      921
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            903,
                            909
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 58
                            },
                            "start": {
                              "column": 11,
                              "line": 58
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            912,
                            921
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 58
                            },
                            "start": {
                              "column": 20,
                              "line": 58
                            }
                          }
                        }
                      ],
                      "range": [
                        903,
                        921
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 58
                        },
                        "start": {
                          "column": 11,
                          "line": 58
                        }
                      }
                    }
                  },
                  "range": [
                    900,
                    921
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 58
                    },
                    "start": {
                      "column": 8,
                      "line": 58
                    }
                  }
                },
                "init": null,
                "range": [
                  900,
                  921
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 58
                  },
                  "start": {
                    "column": 8,
                    "line": 58
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              896,
              922
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 58
              },
              "start": {
                "column": 4,
                "line": 58
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 59
                      },
                      "start": {
                        "column": 9,
                        "line": 59
                      }
                    },
                    "range": [
                      932,
                      952
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            934,
                            940
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 59
                            },
                            "start": {
                              "column": 11,
                              "line": 59
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            943,
                            952
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 59
                            },
                            "start": {
                              "column": 20,
                              "line": 59
                            }
                          }
                        }
                      ],
                      "range": [
                        934,
                        952
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 59
                        },
                        "start": {
                          "column": 11,
                          "line": 59
                        }
                      }
                    }
                  },
                  "range": [
                    931,
                    952
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 59
                    },
                    "start": {
                      "column": 8,
                      "line": 59
                    }
                  }
                },
                "init": null,
                "range": [
                  931,
                  952
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 59
                  },
                  "start": {
                    "column": 8,
                    "line": 59
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              927,
              953
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 59
              },
              "start": {
                "column": 4,
                "line": 59
              }
            }
          },
          {
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1065,
                      1066
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 65
                      },
                      "start": {
                        "column": 8,
                        "line": 65
                      }
                    }
                  },
                  "range": [
                    1065,
                    1067
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 65
                    },
                    "start": {
                      "column": 8,
                      "line": 65
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      1098,
                      1099
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 66
                      },
                      "start": {
                        "column": 8,
                        "line": 66
                      }
                    }
                  },
                  "range": [
                    1098,
                    1100
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 66
                    },
                    "start": {
                      "column": 8,
                      "line": 66
                    }
                  }
                }
              ],
              "range": [
                1055,
                1128
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 67
                },
                "start": {
                  "column": 9,
                  "line": 64
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      994,
                      995
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 61
                      },
                      "start": {
                        "column": 8,
                        "line": 61
                      }
                    }
                  },
                  "range": [
                    994,
                    996
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 61
                    },
                    "start": {
                      "column": 8,
                      "line": 61
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      1027,
                      1028
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 62
                      },
                      "start": {
                        "column": 8,
                        "line": 62
                      }
                    }
                  },
                  "range": [
                    1027,
                    1029
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 62
                    },
                    "start": {
                      "column": 8,
                      "line": 62
                    }
                  }
                }
              ],
              "range": [
                984,
                1045
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 63
                },
                "start": {
                  "column": 30,
                  "line": 60
                }
              }
            },
            "test": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      962,
                      963
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 60
                      },
                      "start": {
                        "column": 8,
                        "line": 60
                      }
                    }
                  },
                  "right": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        966,
                        969
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 60
                        },
                        "start": {
                          "column": 12,
                          "line": 60
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      966,
                      971
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 60
                      },
                      "start": {
                        "column": 12,
                        "line": 60
                      }
                    }
                  },
                  "range": [
                    962,
                    971
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 60
                    },
                    "start": {
                      "column": 8,
                      "line": 60
                    }
                  }
                },
                {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      973,
                      974
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 60
                      },
                      "start": {
                        "column": 19,
                        "line": 60
                      }
                    }
                  },
                  "right": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        977,
                        980
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 60
                        },
                        "start": {
                          "column": 23,
                          "line": 60
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      977,
                      982
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 60
                      },
                      "start": {
                        "column": 23,
                        "line": 60
                      }
                    }
                  },
                  "range": [
                    973,
                    982
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 60
                    },
                    "start": {
                      "column": 19,
                      "line": 60
                    }
                  }
                }
              ],
              "range": [
                962,
                982
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 60
                },
                "start": {
                  "column": 8,
                  "line": 60
                }
              }
            },
            "range": [
              958,
              1128
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 67
              },
              "start": {
                "column": 4,
                "line": 60
              }
            }
          }
        ],
        "range": [
          890,
          1130
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 68
          },
          "start": {
            "column": 14,
            "line": 57
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "range": [
          885,
          887
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 57
          },
          "start": {
            "column": 9,
            "line": 57
          }
        }
      },
      "params": [],
      "range": [
        876,
        1130
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 68
        },
        "start": {
          "column": 0,
          "line": 57
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
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1208,
                      1209
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 75
                      },
                      "start": {
                        "column": 8,
                        "line": 75
                      }
                    }
                  },
                  "range": [
                    1208,
                    1210
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 75
                    },
                    "start": {
                      "column": 8,
                      "line": 75
                    }
                  }
                }
              ],
              "range": [
                1198,
                1222
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 76
                },
                "start": {
                  "column": 9,
                  "line": 74
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1174,
                      1175
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 72
                      },
                      "start": {
                        "column": 8,
                        "line": 72
                      }
                    }
                  },
                  "range": [
                    1174,
                    1176
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
                }
              ],
              "range": [
                1164,
                1188
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 73
                },
                "start": {
                  "column": 11,
                  "line": 71
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1161,
                1162
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
              1157,
              1222
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 76
              },
              "start": {
                "column": 4,
                "line": 71
              }
            }
          }
        ],
        "range": [
          1151,
          1224
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 77
          },
          "start": {
            "column": 19,
            "line": 70
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "range": [
          1141,
          1143
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 70
          },
          "start": {
            "column": 9,
            "line": 70
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
                "column": 17,
                "line": 70
              },
              "start": {
                "column": 13,
                "line": 70
              }
            },
            "range": [
              1145,
              1149
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [],
              "range": [
                1147,
                1149
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 70
                },
                "start": {
                  "column": 15,
                  "line": 70
                }
              }
            }
          },
          "range": [
            1144,
            1149
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 70
            },
            "start": {
              "column": 12,
              "line": 70
            }
          }
        }
      ],
      "range": [
        1132,
        1224
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 77
        },
        "start": {
          "column": 0,
          "line": 70
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
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1304,
                      1305
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
                    1304,
                    1306
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 84
                    },
                    "start": {
                      "column": 8,
                      "line": 84
                    }
                  }
                }
              ],
              "range": [
                1294,
                1318
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 85
                },
                "start": {
                  "column": 9,
                  "line": 83
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1270,
                      1271
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 81
                      },
                      "start": {
                        "column": 8,
                        "line": 81
                      }
                    }
                  },
                  "range": [
                    1270,
                    1272
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
                }
              ],
              "range": [
                1260,
                1284
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 82
                },
                "start": {
                  "column": 11,
                  "line": 80
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1257,
                1258
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
              1253,
              1318
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 85
              },
              "start": {
                "column": 4,
                "line": 80
              }
            }
          }
        ],
        "range": [
          1247,
          1320
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 86
          },
          "start": {
            "column": 21,
            "line": 79
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f8",
        "optional": false,
        "range": [
          1235,
          1237
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 79
          },
          "start": {
            "column": 9,
            "line": 79
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
                "column": 19,
                "line": 79
              },
              "start": {
                "column": 16,
                "line": 79
              }
            },
            "range": [
              1242,
              1245
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  1244,
                  1245
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 79
                  },
                  "start": {
                    "column": 18,
                    "line": 79
                  }
                }
              },
              "range": [
                1244,
                1245
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 79
                },
                "start": {
                  "column": 18,
                  "line": 79
                }
              }
            }
          },
          "range": [
            1241,
            1245
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 79
            },
            "start": {
              "column": 15,
              "line": 79
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 79
          },
          "start": {
            "column": 11,
            "line": 79
          }
        },
        "range": [
          1237,
          1240
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
                1238,
                1239
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 79
                },
                "start": {
                  "column": 12,
                  "line": 79
                }
              }
            },
            "out": false,
            "range": [
              1238,
              1239
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 79
              },
              "start": {
                "column": 12,
                "line": 79
              }
            }
          }
        ]
      },
      "range": [
        1226,
        1320
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 86
        },
        "start": {
          "column": 0,
          "line": 79
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
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1415,
                      1416
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 93
                      },
                      "start": {
                        "column": 8,
                        "line": 93
                      }
                    }
                  },
                  "range": [
                    1415,
                    1417
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 93
                    },
                    "start": {
                      "column": 8,
                      "line": 93
                    }
                  }
                }
              ],
              "range": [
                1405,
                1432
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 94
                },
                "start": {
                  "column": 9,
                  "line": 92
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1381,
                      1382
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 90
                      },
                      "start": {
                        "column": 8,
                        "line": 90
                      }
                    }
                  },
                  "range": [
                    1381,
                    1383
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 90
                    },
                    "start": {
                      "column": 8,
                      "line": 90
                    }
                  }
                }
              ],
              "range": [
                1371,
                1395
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 91
                },
                "start": {
                  "column": 11,
                  "line": 89
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1368,
                1369
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 89
                },
                "start": {
                  "column": 8,
                  "line": 89
                }
              }
            },
            "range": [
              1364,
              1432
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 94
              },
              "start": {
                "column": 4,
                "line": 89
              }
            }
          }
        ],
        "range": [
          1358,
          1434
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 95
          },
          "start": {
            "column": 36,
            "line": 88
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f9",
        "optional": false,
        "range": [
          1331,
          1333
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 88
          },
          "start": {
            "column": 9,
            "line": 88
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
                "column": 34,
                "line": 88
              },
              "start": {
                "column": 31,
                "line": 88
              }
            },
            "range": [
              1353,
              1356
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  1355,
                  1356
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 88
                  },
                  "start": {
                    "column": 33,
                    "line": 88
                  }
                }
              },
              "range": [
                1355,
                1356
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 88
                },
                "start": {
                  "column": 33,
                  "line": 88
                }
              }
            }
          },
          "range": [
            1352,
            1356
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 88
            },
            "start": {
              "column": 30,
              "line": 88
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 88
          },
          "start": {
            "column": 11,
            "line": 88
          }
        },
        "range": [
          1333,
          1351
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "range": [
                1344,
                1350
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 88
                },
                "start": {
                  "column": 22,
                  "line": 88
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
                1334,
                1335
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 88
                },
                "start": {
                  "column": 12,
                  "line": 88
                }
              }
            },
            "out": false,
            "range": [
              1334,
              1350
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 88
              },
              "start": {
                "column": 12,
                "line": 88
              }
            }
          }
        ]
      },
      "range": [
        1322,
        1434
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 95
        },
        "start": {
          "column": 0,
          "line": 88
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 95
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
