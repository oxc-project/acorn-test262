__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    3844
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
            "name": "require",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 3
                },
                "start": {
                  "column": 19,
                  "line": 3
                }
              },
              "range": [
                41,
                45
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  42,
                  45
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 3
                  },
                  "start": {
                    "column": 20,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              34,
              45
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 3
              }
            }
          },
          "init": null,
          "range": [
            34,
            45
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 3
            },
            "start": {
              "column": 12,
              "line": 3
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        22,
        46
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 3
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
            "name": "HTMLDOMPropertyConfig",
            "optional": false,
            "range": [
              52,
              73
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "'react/lib/HTMLDOMPropertyConfig'",
                "value": "react/lib/HTMLDOMPropertyConfig",
                "range": [
                  84,
                  117
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 5
                  },
                  "start": {
                    "column": 36,
                    "line": 5
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "range": [
                76,
                83
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 5
                },
                "start": {
                  "column": 28,
                  "line": 5
                }
              }
            },
            "optional": false,
            "range": [
              76,
              118
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 5
              },
              "start": {
                "column": 28,
                "line": 5
              }
            }
          },
          "range": [
            52,
            118
          ],
          "loc": {
            "end": {
              "column": 70,
              "line": 5
            },
            "start": {
              "column": 4,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        48,
        119
      ],
      "loc": {
        "end": {
          "column": 71,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ForInStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "range": [
                    398,
                    407
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 11
                    },
                    "start": {
                      "column": 4,
                      "line": 11
                    }
                  }
                }
              ],
              "range": [
                392,
                411
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 12
                },
                "start": {
                  "column": 66,
                  "line": 10
                }
              }
            },
            "test": {
              "type": "UnaryExpression",
              "argument": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "propname",
                    "optional": false,
                    "range": [
                      381,
                      389
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 10
                      },
                      "start": {
                        "column": 55,
                        "line": 10
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HTMLDOMPropertyConfig",
                      "optional": false,
                      "range": [
                        333,
                        354
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 10
                        },
                        "start": {
                          "column": 7,
                          "line": 10
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Properties",
                      "optional": false,
                      "range": [
                        355,
                        365
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 10
                        },
                        "start": {
                          "column": 29,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      333,
                      365
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 10
                      },
                      "start": {
                        "column": 7,
                        "line": 10
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "hasOwnProperty",
                    "optional": false,
                    "range": [
                      366,
                      380
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 10
                      },
                      "start": {
                        "column": 40,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    333,
                    380
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 10
                    },
                    "start": {
                      "column": 7,
                      "line": 10
                    }
                  }
                },
                "optional": false,
                "range": [
                  333,
                  390
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 10
                  },
                  "start": {
                    "column": 7,
                    "line": 10
                  }
                }
              },
              "operator": "!",
              "prefix": true,
              "range": [
                332,
                390
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 10
                },
                "start": {
                  "column": 6,
                  "line": 10
                }
              }
            },
            "range": [
              328,
              411
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 12
              },
              "start": {
                "column": 2,
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
                  "name": "mapFrom",
                  "optional": false,
                  "range": [
                    419,
                    426
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 14
                    },
                    "start": {
                      "column": 6,
                      "line": 14
                    }
                  }
                },
                "init": {
                  "type": "LogicalExpression",
                  "operator": "||",
                  "left": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "HTMLDOMPropertyConfig",
                        "optional": false,
                        "range": [
                          429,
                          450
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 14
                          },
                          "start": {
                            "column": 16,
                            "line": 14
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "DOMAttributeNames",
                        "optional": false,
                        "range": [
                          451,
                          468
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 14
                          },
                          "start": {
                            "column": 38,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        429,
                        468
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 14
                        },
                        "start": {
                          "column": 16,
                          "line": 14
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "propname",
                      "optional": false,
                      "range": [
                        469,
                        477
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 14
                        },
                        "start": {
                          "column": 56,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      429,
                      478
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 14
                      },
                      "start": {
                        "column": 16,
                        "line": 14
                      }
                    }
                  },
                  "right": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "propname",
                        "optional": false,
                        "range": [
                          482,
                          490
                        ],
                        "loc": {
                          "end": {
                            "column": 77,
                            "line": 14
                          },
                          "start": {
                            "column": 69,
                            "line": 14
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
                          491,
                          502
                        ],
                        "loc": {
                          "end": {
                            "column": 89,
                            "line": 14
                          },
                          "start": {
                            "column": 78,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        482,
                        502
                      ],
                      "loc": {
                        "end": {
                          "column": 89,
                          "line": 14
                        },
                        "start": {
                          "column": 69,
                          "line": 14
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      482,
                      504
                    ],
                    "loc": {
                      "end": {
                        "column": 91,
                        "line": 14
                      },
                      "start": {
                        "column": 69,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    429,
                    504
                  ],
                  "loc": {
                    "end": {
                      "column": 91,
                      "line": 14
                    },
                    "start": {
                      "column": 16,
                      "line": 14
                    }
                  }
                },
                "range": [
                  419,
                  504
                ],
                "loc": {
                  "end": {
                    "column": 91,
                    "line": 14
                  },
                  "start": {
                    "column": 6,
                    "line": 14
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              415,
              505
            ],
            "loc": {
              "end": {
                "column": 92,
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
          324,
          507
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 55,
            "line": 9
          }
        }
      },
      "left": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "propname",
              "optional": false,
              "range": [
                278,
                286
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 9
                },
                "start": {
                  "column": 9,
                  "line": 9
                }
              }
            },
            "init": null,
            "range": [
              278,
              286
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 9
              },
              "start": {
                "column": 9,
                "line": 9
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          274,
          286
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 9
          },
          "start": {
            "column": 5,
            "line": 9
          }
        }
      },
      "right": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "HTMLDOMPropertyConfig",
          "optional": false,
          "range": [
            290,
            311
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 9
            },
            "start": {
              "column": 21,
              "line": 9
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Properties",
          "optional": false,
          "range": [
            312,
            322
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 9
            },
            "start": {
              "column": 43,
              "line": 9
            }
          }
        },
        "range": [
          290,
          322
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 9
          },
          "start": {
            "column": 21,
            "line": 9
          }
        }
      },
      "range": [
        269,
        507
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
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
            "type": "IfStatement",
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "string",
                    "optional": false,
                    "range": [
                      966,
                      972
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 28
                      },
                      "start": {
                        "column": 11,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    959,
                    973
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 28
                    },
                    "start": {
                      "column": 4,
                      "line": 28
                    }
                  }
                }
              ],
              "range": [
                953,
                977
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 29
                },
                "start": {
                  "column": 19,
                  "line": 27
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "times",
                "optional": false,
                "range": [
                  940,
                  945
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 27
                  },
                  "start": {
                    "column": 6,
                    "line": 27
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  950,
                  951
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 27
                  },
                  "start": {
                    "column": 16,
                    "line": 27
                  }
                }
              },
              "range": [
                940,
                951
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 27
                },
                "start": {
                  "column": 6,
                  "line": 27
                }
              }
            },
            "range": [
              936,
              977
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 29
              },
              "start": {
                "column": 2,
                "line": 27
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
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "range": [
                        1007,
                        1012
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 30
                        },
                        "start": {
                          "column": 29,
                          "line": 30
                        }
                      }
                    },
                    "range": [
                      1003,
                      1014
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 30
                      },
                      "start": {
                        "column": 25,
                        "line": 30
                      }
                    }
                  },
                  "range": [
                    997,
                    1015
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 30
                    },
                    "start": {
                      "column": 19,
                      "line": 30
                    }
                  }
                }
              ],
              "range": [
                995,
                1017
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 30
                },
                "start": {
                  "column": 17,
                  "line": 30
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "times",
                "optional": false,
                "range": [
                  984,
                  989
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 30
                  },
                  "start": {
                    "column": 6,
                    "line": 30
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  992,
                  993
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 30
                  },
                  "start": {
                    "column": 14,
                    "line": 30
                  }
                }
              },
              "range": [
                984,
                993
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 30
                },
                "start": {
                  "column": 6,
                  "line": 30
                }
              }
            },
            "range": [
              980,
              1017
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 30
              },
              "start": {
                "column": 2,
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
                  "name": "repeated",
                  "optional": false,
                  "range": [
                    1024,
                    1032
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 31
                    },
                    "start": {
                      "column": 6,
                      "line": 31
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "''",
                  "value": "",
                  "range": [
                    1035,
                    1037
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 31
                    },
                    "start": {
                      "column": 17,
                      "line": 31
                    }
                  }
                },
                "range": [
                  1024,
                  1037
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 31
                  },
                  "start": {
                    "column": 6,
                    "line": 31
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1020,
              1038
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 31
              },
              "start": {
                "column": 2,
                "line": 31
              }
            }
          },
          {
            "type": "WhileStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "+=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "repeated",
                            "optional": false,
                            "range": [
                              1084,
                              1092
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 34
                              },
                              "start": {
                                "column": 6,
                                "line": 34
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "string",
                            "optional": false,
                            "range": [
                              1096,
                              1102
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 34
                              },
                              "start": {
                                "column": 18,
                                "line": 34
                              }
                            }
                          },
                          "range": [
                            1084,
                            1102
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 34
                            },
                            "start": {
                              "column": 6,
                              "line": 34
                            }
                          }
                        },
                        "range": [
                          1084,
                          1103
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 34
                          },
                          "start": {
                            "column": 6,
                            "line": 34
                          }
                        }
                      }
                    ],
                    "range": [
                      1076,
                      1109
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 35
                      },
                      "start": {
                        "column": 19,
                        "line": 33
                      }
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "&",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "times",
                      "optional": false,
                      "range": [
                        1065,
                        1070
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 33
                        },
                        "start": {
                          "column": 8,
                          "line": 33
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1073,
                        1074
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 33
                        },
                        "start": {
                          "column": 16,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      1065,
                      1074
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 33
                      },
                      "start": {
                        "column": 8,
                        "line": 33
                      }
                    }
                  },
                  "range": [
                    1061,
                    1109
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 35
                    },
                    "start": {
                      "column": 4,
                      "line": 33
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "+=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "string",
                            "optional": false,
                            "range": [
                              1139,
                              1145
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 37
                              },
                              "start": {
                                "column": 6,
                                "line": 37
                              }
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "string",
                            "optional": false,
                            "range": [
                              1149,
                              1155
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 37
                              },
                              "start": {
                                "column": 16,
                                "line": 37
                              }
                            }
                          },
                          "range": [
                            1139,
                            1155
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 37
                            },
                            "start": {
                              "column": 6,
                              "line": 37
                            }
                          }
                        },
                        "range": [
                          1139,
                          1156
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 37
                          },
                          "start": {
                            "column": 6,
                            "line": 37
                          }
                        }
                      }
                    ],
                    "range": [
                      1131,
                      1162
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 38
                      },
                      "start": {
                        "column": 21,
                        "line": 36
                      }
                    }
                  },
                  "test": {
                    "type": "AssignmentExpression",
                    "operator": ">>=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "times",
                      "optional": false,
                      "range": [
                        1118,
                        1123
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 36
                        },
                        "start": {
                          "column": 8,
                          "line": 36
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1128,
                        1129
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 36
                        },
                        "start": {
                          "column": 18,
                          "line": 36
                        }
                      }
                    },
                    "range": [
                      1118,
                      1129
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 36
                      },
                      "start": {
                        "column": 8,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    1114,
                    1162
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 38
                    },
                    "start": {
                      "column": 4,
                      "line": 36
                    }
                  }
                }
              ],
              "range": [
                1055,
                1166
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 39
                },
                "start": {
                  "column": 16,
                  "line": 32
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "times",
              "optional": false,
              "range": [
                1048,
                1053
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 32
                },
                "start": {
                  "column": 9,
                  "line": 32
                }
              }
            },
            "range": [
              1041,
              1166
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 39
              },
              "start": {
                "column": 2,
                "line": 32
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "repeated",
              "optional": false,
              "range": [
                1176,
                1184
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 40
                },
                "start": {
                  "column": 9,
                  "line": 40
                }
              }
            },
            "range": [
              1169,
              1185
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 40
              },
              "start": {
                "column": 2,
                "line": 40
              }
            }
          }
        ],
        "range": [
          932,
          1187
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 41
          },
          "start": {
            "column": 37,
            "line": 26
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "repeatString",
        "optional": false,
        "range": [
          904,
          916
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 26
          },
          "start": {
            "column": 9,
            "line": 26
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "string",
          "optional": false,
          "range": [
            917,
            923
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 26
            },
            "start": {
              "column": 22,
              "line": 26
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "times",
          "optional": false,
          "range": [
            925,
            930
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 26
            },
            "start": {
              "column": 30,
              "line": 26
            }
          }
        }
      ],
      "range": [
        895,
        1187
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 26
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
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "needle",
                        "optional": false,
                        "range": [
                          1443,
                          1449
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 51
                          },
                          "start": {
                            "column": 25,
                            "line": 51
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "range": [
                          1450,
                          1456
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 51
                          },
                          "start": {
                            "column": 32,
                            "line": 51
                          }
                        }
                      },
                      "range": [
                        1443,
                        1456
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 51
                        },
                        "start": {
                          "column": 25,
                          "line": 51
                        }
                      }
                    },
                    "operator": "-",
                    "prefix": true,
                    "range": [
                      1442,
                      1456
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 51
                      },
                      "start": {
                        "column": 24,
                        "line": 51
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
                    "name": "haystack",
                    "optional": false,
                    "range": [
                      1427,
                      1435
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 51
                      },
                      "start": {
                        "column": 9,
                        "line": 51
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "slice",
                    "optional": false,
                    "range": [
                      1436,
                      1441
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 51
                      },
                      "start": {
                        "column": 18,
                        "line": 51
                      }
                    }
                  },
                  "range": [
                    1427,
                    1441
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 51
                    },
                    "start": {
                      "column": 9,
                      "line": 51
                    }
                  }
                },
                "optional": false,
                "range": [
                  1427,
                  1457
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 51
                  },
                  "start": {
                    "column": 9,
                    "line": 51
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "needle",
                "optional": false,
                "range": [
                  1462,
                  1468
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 51
                  },
                  "start": {
                    "column": 44,
                    "line": 51
                  }
                }
              },
              "range": [
                1427,
                1468
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 51
                },
                "start": {
                  "column": 9,
                  "line": 51
                }
              }
            },
            "range": [
              1420,
              1469
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 51
              },
              "start": {
                "column": 2,
                "line": 51
              }
            }
          }
        ],
        "range": [
          1416,
          1471
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 52
          },
          "start": {
            "column": 36,
            "line": 50
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "endsWith",
        "optional": false,
        "range": [
          1389,
          1397
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 50
          },
          "start": {
            "column": 9,
            "line": 50
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "haystack",
          "optional": false,
          "range": [
            1398,
            1406
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 50
            },
            "start": {
              "column": 18,
              "line": 50
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "needle",
          "optional": false,
          "range": [
            1408,
            1414
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 50
            },
            "start": {
              "column": 28,
              "line": 50
            }
          }
        }
      ],
      "range": [
        1380,
        1471
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 50
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
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "alternate": {
                "type": "Identifier",
                "decorators": [],
                "name": "haystack",
                "optional": false,
                "range": [
                  1845,
                  1853
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 65
                  },
                  "start": {
                    "column": 6,
                    "line": 65
                  }
                }
              },
              "consequent": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      1820,
                      1821
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 64
                      },
                      "start": {
                        "column": 21,
                        "line": 64
                      }
                    }
                  },
                  {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "needle",
                        "optional": false,
                        "range": [
                          1824,
                          1830
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 64
                          },
                          "start": {
                            "column": 25,
                            "line": 64
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "range": [
                          1831,
                          1837
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 64
                          },
                          "start": {
                            "column": 32,
                            "line": 64
                          }
                        }
                      },
                      "range": [
                        1824,
                        1837
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 64
                        },
                        "start": {
                          "column": 25,
                          "line": 64
                        }
                      }
                    },
                    "operator": "-",
                    "prefix": true,
                    "range": [
                      1823,
                      1837
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 64
                      },
                      "start": {
                        "column": 24,
                        "line": 64
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
                    "name": "haystack",
                    "optional": false,
                    "range": [
                      1805,
                      1813
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 64
                      },
                      "start": {
                        "column": 6,
                        "line": 64
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "slice",
                    "optional": false,
                    "range": [
                      1814,
                      1819
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 64
                      },
                      "start": {
                        "column": 15,
                        "line": 64
                      }
                    }
                  },
                  "range": [
                    1805,
                    1819
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 64
                    },
                    "start": {
                      "column": 6,
                      "line": 64
                    }
                  }
                },
                "optional": false,
                "range": [
                  1805,
                  1838
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 64
                  },
                  "start": {
                    "column": 6,
                    "line": 64
                  }
                }
              },
              "test": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "haystack",
                    "optional": false,
                    "range": [
                      1781,
                      1789
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 63
                      },
                      "start": {
                        "column": 18,
                        "line": 63
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "needle",
                    "optional": false,
                    "range": [
                      1791,
                      1797
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 63
                      },
                      "start": {
                        "column": 28,
                        "line": 63
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "endsWith",
                  "optional": false,
                  "range": [
                    1772,
                    1780
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 63
                    },
                    "start": {
                      "column": 9,
                      "line": 63
                    }
                  }
                },
                "optional": false,
                "range": [
                  1772,
                  1798
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 63
                  },
                  "start": {
                    "column": 9,
                    "line": 63
                  }
                }
              },
              "range": [
                1772,
                1853
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 65
                },
                "start": {
                  "column": 9,
                  "line": 63
                }
              }
            },
            "range": [
              1765,
              1854
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 65
              },
              "start": {
                "column": 2,
                "line": 63
              }
            }
          }
        ],
        "range": [
          1761,
          1856
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 66
          },
          "start": {
            "column": 35,
            "line": 62
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "trimEnd",
        "optional": false,
        "range": [
          1735,
          1742
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 62
          },
          "start": {
            "column": 9,
            "line": 62
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "haystack",
          "optional": false,
          "range": [
            1743,
            1751
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 62
            },
            "start": {
              "column": 17,
              "line": 62
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "needle",
          "optional": false,
          "range": [
            1753,
            1759
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 62
            },
            "start": {
              "column": 27,
              "line": 62
            }
          }
        }
      ],
      "range": [
        1726,
        1856
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 66
        },
        "start": {
          "column": 0,
          "line": 62
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
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "/-(.)/g",
                  "regex": {
                    "flags": "g",
                    "pattern": "-(.)"
                  },
                  "value": null,
                  "range": [
                    1972,
                    1979
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 72
                    },
                    "start": {
                      "column": 24,
                      "line": 72
                    }
                  }
                },
                {
                  "type": "FunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
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
                              "name": "chr",
                              "optional": false,
                              "range": [
                                2015,
                                2018
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 73
                                },
                                "start": {
                                  "column": 11,
                                  "line": 73
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toUpperCase",
                              "optional": false,
                              "range": [
                                2019,
                                2030
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 73
                                },
                                "start": {
                                  "column": 15,
                                  "line": 73
                                }
                              }
                            },
                            "range": [
                              2015,
                              2030
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 73
                              },
                              "start": {
                                "column": 11,
                                "line": 73
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            2015,
                            2032
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 73
                            },
                            "start": {
                              "column": 11,
                              "line": 73
                            }
                          }
                        },
                        "range": [
                          2008,
                          2033
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 73
                          },
                          "start": {
                            "column": 4,
                            "line": 73
                          }
                        }
                      }
                    ],
                    "range": [
                      2002,
                      2037
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 74
                      },
                      "start": {
                        "column": 54,
                        "line": 72
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
                      "name": "match",
                      "optional": false,
                      "range": [
                        1990,
                        1995
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 72
                        },
                        "start": {
                          "column": 42,
                          "line": 72
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "chr",
                      "optional": false,
                      "range": [
                        1997,
                        2000
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 72
                        },
                        "start": {
                          "column": 49,
                          "line": 72
                        }
                      }
                    }
                  ],
                  "range": [
                    1981,
                    2037
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 74
                    },
                    "start": {
                      "column": 33,
                      "line": 72
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
                  "name": "string",
                  "optional": false,
                  "range": [
                    1957,
                    1963
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 72
                    },
                    "start": {
                      "column": 9,
                      "line": 72
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "replace",
                  "optional": false,
                  "range": [
                    1964,
                    1971
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 72
                    },
                    "start": {
                      "column": 16,
                      "line": 72
                    }
                  }
                },
                "range": [
                  1957,
                  1971
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 72
                  },
                  "start": {
                    "column": 9,
                    "line": 72
                  }
                }
              },
              "optional": false,
              "range": [
                1957,
                2038
              ],
              "loc": {
                "end": {
                  "column": 4,
                  "line": 74
                },
                "start": {
                  "column": 9,
                  "line": 72
                }
              }
            },
            "range": [
              1950,
              2039
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 74
              },
              "start": {
                "column": 2,
                "line": 72
              }
            }
          }
        ],
        "range": [
          1946,
          2041
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 75
          },
          "start": {
            "column": 35,
            "line": 71
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "hyphenToCamelCase",
        "optional": false,
        "range": [
          1920,
          1937
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 71
          },
          "start": {
            "column": 9,
            "line": 71
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "string",
          "optional": false,
          "range": [
            1938,
            1944
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 71
            },
            "start": {
              "column": 27,
              "line": 71
            }
          }
        }
      ],
      "range": [
        1911,
        2041
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 75
        },
        "start": {
          "column": 0,
          "line": 71
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
            "type": "ReturnStatement",
            "argument": {
              "type": "UnaryExpression",
              "argument": {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "string",
                    "optional": false,
                    "range": [
                      2173,
                      2179
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 81
                      },
                      "start": {
                        "column": 24,
                        "line": 81
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Literal",
                    "raw": "/[^\\s]/",
                    "regex": {
                      "flags": "",
                      "pattern": "[^\\s]"
                    },
                    "value": null,
                    "range": [
                      2160,
                      2167
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 81
                      },
                      "start": {
                        "column": 11,
                        "line": 81
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
                      2168,
                      2172
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 81
                      },
                      "start": {
                        "column": 19,
                        "line": 81
                      }
                    }
                  },
                  "range": [
                    2160,
                    2172
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 81
                    },
                    "start": {
                      "column": 11,
                      "line": 81
                    }
                  }
                },
                "optional": false,
                "range": [
                  2160,
                  2180
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 81
                  },
                  "start": {
                    "column": 11,
                    "line": 81
                  }
                }
              },
              "operator": "!",
              "prefix": true,
              "range": [
                2159,
                2180
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 81
                },
                "start": {
                  "column": 10,
                  "line": 81
                }
              }
            },
            "range": [
              2152,
              2181
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 81
              },
              "start": {
                "column": 3,
                "line": 81
              }
            }
          }
        ],
        "range": [
          2147,
          2183
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 82
          },
          "start": {
            "column": 25,
            "line": 80
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isEmpty",
        "optional": false,
        "range": [
          2131,
          2138
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 80
          },
          "start": {
            "column": 9,
            "line": 80
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "string",
          "optional": false,
          "range": [
            2139,
            2145
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 80
            },
            "start": {
              "column": 17,
              "line": 80
            }
          }
        }
      ],
      "range": [
        2122,
        2183
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 82
        },
        "start": {
          "column": 0,
          "line": 80
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
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "range": [
                    2425,
                    2430
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 92
                    },
                    "start": {
                      "column": 24,
                      "line": 92
                    }
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Literal",
                  "raw": "/^\\d+px$/",
                  "regex": {
                    "flags": "",
                    "pattern": "^\\d+px$"
                  },
                  "value": null,
                  "range": [
                    2410,
                    2419
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 92
                    },
                    "start": {
                      "column": 9,
                      "line": 92
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
                    2420,
                    2424
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 92
                    },
                    "start": {
                      "column": 19,
                      "line": 92
                    }
                  }
                },
                "range": [
                  2410,
                  2424
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 92
                  },
                  "start": {
                    "column": 9,
                    "line": 92
                  }
                }
              },
              "optional": false,
              "range": [
                2410,
                2431
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 92
                },
                "start": {
                  "column": 9,
                  "line": 92
                }
              }
            },
            "range": [
              2403,
              2432
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 92
              },
              "start": {
                "column": 2,
                "line": 92
              }
            }
          }
        ],
        "range": [
          2399,
          2434
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 93
          },
          "start": {
            "column": 40,
            "line": 91
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isConvertiblePixelValue",
        "optional": false,
        "range": [
          2368,
          2391
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 91
          },
          "start": {
            "column": 9,
            "line": 91
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "range": [
            2392,
            2397
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 91
            },
            "start": {
              "column": 33,
              "line": 91
            }
          }
        }
      ],
      "range": [
        2359,
        2434
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 93
        },
        "start": {
          "column": 0,
          "line": 91
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2436,
        3631
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            2459,
            3631
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
                "name": "output",
                "optional": false,
                "range": [
                  2473,
                  2479
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 96
                  },
                  "start": {
                    "column": 12,
                    "line": 96
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
                    "column": 26,
                    "line": 96
                  },
                  "start": {
                    "column": 18,
                    "line": 96
                  }
                },
                "range": [
                  2479,
                  2487
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    2481,
                    2487
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 96
                    },
                    "start": {
                      "column": 20,
                      "line": 96
                    }
                  }
                }
              },
              "value": null,
              "range": [
                2465,
                2488
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 96
                },
                "start": {
                  "column": 4,
                  "line": 96
                }
              }
            },
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
                "name": "level",
                "optional": false,
                "range": [
                  2501,
                  2506
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 97
                  },
                  "start": {
                    "column": 12,
                    "line": 97
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
                    "column": 25,
                    "line": 97
                  },
                  "start": {
                    "column": 17,
                    "line": 97
                  }
                },
                "range": [
                  2506,
                  2514
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    2508,
                    2514
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 97
                    },
                    "start": {
                      "column": 19,
                      "line": 97
                    }
                  }
                }
              },
              "value": null,
              "range": [
                2493,
                2515
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 97
                },
                "start": {
                  "column": 4,
                  "line": 97
                }
              }
            },
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
                "name": "_inPreTag",
                "optional": false,
                "range": [
                  2528,
                  2537
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 98
                  },
                  "start": {
                    "column": 12,
                    "line": 98
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
                    "column": 30,
                    "line": 98
                  },
                  "start": {
                    "column": 21,
                    "line": 98
                  }
                },
                "range": [
                  2537,
                  2546
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    2539,
                    2546
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 98
                    },
                    "start": {
                      "column": 23,
                      "line": 98
                    }
                  }
                }
              },
              "value": null,
              "range": [
                2520,
                2547
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 98
                },
                "start": {
                  "column": 4,
                  "line": 98
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
                "name": "_visitText",
                "optional": false,
                "range": [
                  2648,
                  2658
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 106
                  },
                  "start": {
                    "column": 2,
                    "line": 106
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
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
                            "name": "parentTag",
                            "optional": false,
                            "range": [
                              2681,
                              2690
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 107
                              },
                              "start": {
                                "column": 8,
                                "line": 107
                              }
                            }
                          },
                          "init": {
                            "type": "LogicalExpression",
                            "operator": "&&",
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "node",
                                "optional": false,
                                "range": [
                                  2693,
                                  2697
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 107
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 107
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "parentNode",
                                "optional": false,
                                "range": [
                                  2698,
                                  2708
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 107
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 107
                                  }
                                }
                              },
                              "range": [
                                2693,
                                2708
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 107
                                },
                                "start": {
                                  "column": 20,
                                  "line": 107
                                }
                              }
                            },
                            "right": {
                              "type": "CallExpression",
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "node",
                                      "optional": false,
                                      "range": [
                                        2712,
                                        2716
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 43,
                                          "line": 107
                                        },
                                        "start": {
                                          "column": 39,
                                          "line": 107
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "parentNode",
                                      "optional": false,
                                      "range": [
                                        2717,
                                        2727
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 54,
                                          "line": 107
                                        },
                                        "start": {
                                          "column": 44,
                                          "line": 107
                                        }
                                      }
                                    },
                                    "range": [
                                      2712,
                                      2727
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 54,
                                        "line": 107
                                      },
                                      "start": {
                                        "column": 39,
                                        "line": 107
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "tagName",
                                    "optional": false,
                                    "range": [
                                      2728,
                                      2735
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 62,
                                        "line": 107
                                      },
                                      "start": {
                                        "column": 55,
                                        "line": 107
                                      }
                                    }
                                  },
                                  "range": [
                                    2712,
                                    2735
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 62,
                                      "line": 107
                                    },
                                    "start": {
                                      "column": 39,
                                      "line": 107
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
                                    2736,
                                    2747
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 74,
                                      "line": 107
                                    },
                                    "start": {
                                      "column": 63,
                                      "line": 107
                                    }
                                  }
                                },
                                "range": [
                                  2712,
                                  2747
                                ],
                                "loc": {
                                  "end": {
                                    "column": 74,
                                    "line": 107
                                  },
                                  "start": {
                                    "column": 39,
                                    "line": 107
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                2712,
                                2749
                              ],
                              "loc": {
                                "end": {
                                  "column": 76,
                                  "line": 107
                                },
                                "start": {
                                  "column": 39,
                                  "line": 107
                                }
                              }
                            },
                            "range": [
                              2693,
                              2749
                            ],
                            "loc": {
                              "end": {
                                "column": 76,
                                "line": 107
                              },
                              "start": {
                                "column": 20,
                                "line": 107
                              }
                            }
                          },
                          "range": [
                            2681,
                            2749
                          ],
                          "loc": {
                            "end": {
                              "column": 76,
                              "line": 107
                            },
                            "start": {
                              "column": 8,
                              "line": 107
                            }
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var",
                      "range": [
                        2677,
                        2750
                      ],
                      "loc": {
                        "end": {
                          "column": 77,
                          "line": 107
                        },
                        "start": {
                          "column": 4,
                          "line": 107
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
                            "type": "ReturnStatement",
                            "argument": null,
                            "range": [
                              3000,
                              3007
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 111
                              },
                              "start": {
                                "column": 6,
                                "line": 111
                              }
                            }
                          }
                        ],
                        "range": [
                          2810,
                          3013
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 112
                          },
                          "start": {
                            "column": 59,
                            "line": 108
                          }
                        }
                      },
                      "test": {
                        "type": "LogicalExpression",
                        "operator": "||",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "parentTag",
                            "optional": false,
                            "range": [
                              2759,
                              2768
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 108
                              },
                              "start": {
                                "column": 8,
                                "line": 108
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "'textarea'",
                            "value": "textarea",
                            "range": [
                              2773,
                              2783
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 108
                              },
                              "start": {
                                "column": 22,
                                "line": 108
                              }
                            }
                          },
                          "range": [
                            2759,
                            2783
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 108
                            },
                            "start": {
                              "column": 8,
                              "line": 108
                            }
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "parentTag",
                            "optional": false,
                            "range": [
                              2787,
                              2796
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 108
                              },
                              "start": {
                                "column": 36,
                                "line": 108
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "'style'",
                            "value": "style",
                            "range": [
                              2801,
                              2808
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 108
                              },
                              "start": {
                                "column": 50,
                                "line": 108
                              }
                            }
                          },
                          "range": [
                            2787,
                            2808
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 108
                            },
                            "start": {
                              "column": 36,
                              "line": 108
                            }
                          }
                        },
                        "range": [
                          2759,
                          2808
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 108
                          },
                          "start": {
                            "column": 8,
                            "line": 108
                          }
                        }
                      },
                      "range": [
                        2755,
                        3013
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 112
                        },
                        "start": {
                          "column": 4,
                          "line": 108
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
                            "name": "text",
                            "optional": false,
                            "range": [
                              3023,
                              3027
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
                                "line": 114
                              },
                              "start": {
                                "column": 8,
                                "line": 114
                              }
                            }
                          },
                          "init": {
                            "type": "Literal",
                            "raw": "''",
                            "value": "",
                            "range": [
                              3030,
                              3032
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 114
                              },
                              "start": {
                                "column": 15,
                                "line": 114
                              }
                            }
                          },
                          "range": [
                            3023,
                            3032
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 114
                            },
                            "start": {
                              "column": 8,
                              "line": 114
                            }
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var",
                      "range": [
                        3019,
                        3032
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 114
                        },
                        "start": {
                          "column": 4,
                          "line": 114
                        }
                      }
                    },
                    {
                      "type": "IfStatement",
                      "alternate": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "IfStatement",
                            "alternate": null,
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [],
                              "range": [
                                3582,
                                3591
                              ],
                              "loc": {
                                "end": {
                                  "column": 7,
                                  "line": 128
                                },
                                "start": {
                                  "column": 35,
                                  "line": 127
                                }
                              }
                            },
                            "test": {
                              "type": "BinaryExpression",
                              "operator": ">",
                              "left": {
                                "type": "CallExpression",
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "raw": "'\\n'",
                                    "value": "\n",
                                    "range": [
                                      3570,
                                      3574
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 27,
                                        "line": 127
                                      },
                                      "start": {
                                        "column": 23,
                                        "line": 127
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
                                    "name": "text",
                                    "optional": false,
                                    "range": [
                                      3557,
                                      3561
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 14,
                                        "line": 127
                                      },
                                      "start": {
                                        "column": 10,
                                        "line": 127
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "indexOf",
                                    "optional": false,
                                    "range": [
                                      3562,
                                      3569
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 22,
                                        "line": 127
                                      },
                                      "start": {
                                        "column": 15,
                                        "line": 127
                                      }
                                    }
                                  },
                                  "range": [
                                    3557,
                                    3569
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 127
                                    },
                                    "start": {
                                      "column": 10,
                                      "line": 127
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  3557,
                                  3575
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 127
                                  },
                                  "start": {
                                    "column": 10,
                                    "line": 127
                                  }
                                }
                              },
                              "right": {
                                "type": "UnaryExpression",
                                "argument": {
                                  "type": "Literal",
                                  "raw": "1",
                                  "value": 1,
                                  "range": [
                                    3579,
                                    3580
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 127
                                    },
                                    "start": {
                                      "column": 32,
                                      "line": 127
                                    }
                                  }
                                },
                                "operator": "-",
                                "prefix": true,
                                "range": [
                                  3578,
                                  3580
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 127
                                  },
                                  "start": {
                                    "column": 31,
                                    "line": 127
                                  }
                                }
                              },
                              "range": [
                                3557,
                                3580
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 127
                                },
                                "start": {
                                  "column": 10,
                                  "line": 127
                                }
                              }
                            },
                            "range": [
                              3553,
                              3591
                            ],
                            "loc": {
                              "end": {
                                "column": 7,
                                "line": 128
                              },
                              "start": {
                                "column": 6,
                                "line": 127
                              }
                            }
                          }
                        ],
                        "range": [
                          3478,
                          3597
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 129
                          },
                          "start": {
                            "column": 11,
                            "line": 125
                          }
                        }
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "text",
                                "optional": false,
                                "range": [
                                  3294,
                                  3298
                                ],
                                "loc": {
                                  "end": {
                                    "column": 10,
                                    "line": 120
                                  },
                                  "start": {
                                    "column": 6,
                                    "line": 120
                                  }
                                }
                              },
                              "right": {
                                "type": "CallExpression",
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "raw": "/( {2,}|\\n|\\t|\\{|\\})/g",
                                    "regex": {
                                      "flags": "g",
                                      "pattern": "( {2,}|\\n|\\t|\\{|\\})"
                                    },
                                    "value": null,
                                    "range": [
                                      3351,
                                      3373
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 39,
                                        "line": 122
                                      },
                                      "start": {
                                        "column": 17,
                                        "line": 122
                                      }
                                    }
                                  },
                                  {
                                    "type": "FunctionExpression",
                                    "async": false,
                                    "body": {
                                      "type": "BlockStatement",
                                      "body": [
                                        {
                                          "type": "ReturnStatement",
                                          "argument": {
                                            "type": "BinaryExpression",
                                            "operator": "+",
                                            "left": {
                                              "type": "BinaryExpression",
                                              "operator": "+",
                                              "left": {
                                                "type": "Literal",
                                                "raw": "'{'",
                                                "value": "{",
                                                "range": [
                                                  3415,
                                                  3418
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 20,
                                                    "line": 123
                                                  },
                                                  "start": {
                                                    "column": 17,
                                                    "line": 123
                                                  }
                                                }
                                              },
                                              "right": {
                                                "type": "CallExpression",
                                                "arguments": [
                                                  {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "whitespace",
                                                    "optional": false,
                                                    "range": [
                                                      3436,
                                                      3446
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 48,
                                                        "line": 123
                                                      },
                                                      "start": {
                                                        "column": 38,
                                                        "line": 123
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
                                                    "name": "JSON",
                                                    "optional": false,
                                                    "range": [
                                                      3421,
                                                      3425
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 27,
                                                        "line": 123
                                                      },
                                                      "start": {
                                                        "column": 23,
                                                        "line": 123
                                                      }
                                                    }
                                                  },
                                                  "optional": false,
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "stringify",
                                                    "optional": false,
                                                    "range": [
                                                      3426,
                                                      3435
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 37,
                                                        "line": 123
                                                      },
                                                      "start": {
                                                        "column": 28,
                                                        "line": 123
                                                      }
                                                    }
                                                  },
                                                  "range": [
                                                    3421,
                                                    3435
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 37,
                                                      "line": 123
                                                    },
                                                    "start": {
                                                      "column": 23,
                                                      "line": 123
                                                    }
                                                  }
                                                },
                                                "optional": false,
                                                "range": [
                                                  3421,
                                                  3447
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 49,
                                                    "line": 123
                                                  },
                                                  "start": {
                                                    "column": 23,
                                                    "line": 123
                                                  }
                                                }
                                              },
                                              "range": [
                                                3415,
                                                3447
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 49,
                                                  "line": 123
                                                },
                                                "start": {
                                                  "column": 17,
                                                  "line": 123
                                                }
                                              }
                                            },
                                            "right": {
                                              "type": "Literal",
                                              "raw": "'}'",
                                              "value": "}",
                                              "range": [
                                                3450,
                                                3453
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 55,
                                                  "line": 123
                                                },
                                                "start": {
                                                  "column": 52,
                                                  "line": 123
                                                }
                                              }
                                            },
                                            "range": [
                                              3415,
                                              3453
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 55,
                                                "line": 123
                                              },
                                              "start": {
                                                "column": 17,
                                                "line": 123
                                              }
                                            }
                                          },
                                          "range": [
                                            3408,
                                            3454
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 56,
                                              "line": 123
                                            },
                                            "start": {
                                              "column": 10,
                                              "line": 123
                                            }
                                          }
                                        }
                                      ],
                                      "range": [
                                        3396,
                                        3464
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 9,
                                          "line": 124
                                        },
                                        "start": {
                                          "column": 62,
                                          "line": 122
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
                                        "name": "whitespace",
                                        "optional": false,
                                        "range": [
                                          3384,
                                          3394
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 60,
                                            "line": 122
                                          },
                                          "start": {
                                            "column": 50,
                                            "line": 122
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      3375,
                                      3464
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 9,
                                        "line": 124
                                      },
                                      "start": {
                                        "column": 41,
                                        "line": 122
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
                                        "type": "Literal",
                                        "raw": "/\\r/g",
                                        "regex": {
                                          "flags": "g",
                                          "pattern": "\\r"
                                        },
                                        "value": null,
                                        "range": [
                                          3323,
                                          3328
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 22,
                                            "line": 121
                                          },
                                          "start": {
                                            "column": 17,
                                            "line": 121
                                          }
                                        }
                                      },
                                      {
                                        "type": "Literal",
                                        "raw": "''",
                                        "value": "",
                                        "range": [
                                          3330,
                                          3332
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 26,
                                            "line": 121
                                          },
                                          "start": {
                                            "column": 24,
                                            "line": 121
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
                                        "name": "text",
                                        "optional": false,
                                        "range": [
                                          3301,
                                          3305
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 17,
                                            "line": 120
                                          },
                                          "start": {
                                            "column": 13,
                                            "line": 120
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "replace",
                                        "optional": false,
                                        "range": [
                                          3315,
                                          3322
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 16,
                                            "line": 121
                                          },
                                          "start": {
                                            "column": 9,
                                            "line": 121
                                          }
                                        }
                                      },
                                      "range": [
                                        3301,
                                        3322
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 16,
                                          "line": 121
                                        },
                                        "start": {
                                          "column": 13,
                                          "line": 120
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "range": [
                                      3301,
                                      3333
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 27,
                                        "line": 121
                                      },
                                      "start": {
                                        "column": 13,
                                        "line": 120
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "replace",
                                    "optional": false,
                                    "range": [
                                      3343,
                                      3350
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 16,
                                        "line": 122
                                      },
                                      "start": {
                                        "column": 9,
                                        "line": 122
                                      }
                                    }
                                  },
                                  "range": [
                                    3301,
                                    3350
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 16,
                                      "line": 122
                                    },
                                    "start": {
                                      "column": 13,
                                      "line": 120
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  3301,
                                  3465
                                ],
                                "loc": {
                                  "end": {
                                    "column": 10,
                                    "line": 124
                                  },
                                  "start": {
                                    "column": 13,
                                    "line": 120
                                  }
                                }
                              },
                              "range": [
                                3294,
                                3465
                              ],
                              "loc": {
                                "end": {
                                  "column": 10,
                                  "line": 124
                                },
                                "start": {
                                  "column": 6,
                                  "line": 120
                                }
                              }
                            },
                            "range": [
                              3294,
                              3466
                            ],
                            "loc": {
                              "end": {
                                "column": 11,
                                "line": 124
                              },
                              "start": {
                                "column": 6,
                                "line": 120
                              }
                            }
                          }
                        ],
                        "range": [
                          3058,
                          3472
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 125
                          },
                          "start": {
                            "column": 24,
                            "line": 116
                          }
                        }
                      },
                      "test": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            3042,
                            3046
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 116
                            },
                            "start": {
                              "column": 8,
                              "line": 116
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_inPreTag",
                          "optional": false,
                          "range": [
                            3047,
                            3056
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 116
                            },
                            "start": {
                              "column": 13,
                              "line": 116
                            }
                          }
                        },
                        "range": [
                          3042,
                          3056
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 116
                          },
                          "start": {
                            "column": 8,
                            "line": 116
                          }
                        }
                      },
                      "range": [
                        3038,
                        3597
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 129
                        },
                        "start": {
                          "column": 4,
                          "line": 116
                        }
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "+=",
                        "left": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              3602,
                              3606
                            ],
                            "loc": {
                              "end": {
                                "column": 8,
                                "line": 130
                              },
                              "start": {
                                "column": 4,
                                "line": 130
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "output",
                            "optional": false,
                            "range": [
                              3607,
                              3613
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 130
                              },
                              "start": {
                                "column": 9,
                                "line": 130
                              }
                            }
                          },
                          "range": [
                            3602,
                            3613
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 130
                            },
                            "start": {
                              "column": 4,
                              "line": 130
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "text",
                          "optional": false,
                          "range": [
                            3617,
                            3621
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 130
                            },
                            "start": {
                              "column": 19,
                              "line": 130
                            }
                          }
                        },
                        "range": [
                          3602,
                          3621
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 130
                          },
                          "start": {
                            "column": 4,
                            "line": 130
                          }
                        }
                      },
                      "range": [
                        3602,
                        3622
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 130
                        },
                        "start": {
                          "column": 4,
                          "line": 130
                        }
                      }
                    }
                  ],
                  "range": [
                    2671,
                    3626
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 131
                    },
                    "start": {
                      "column": 25,
                      "line": 106
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
                    "name": "node",
                    "optional": false,
                    "range": [
                      2662,
                      2666
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 106
                      },
                      "start": {
                        "column": 16,
                        "line": 106
                      }
                    }
                  }
                ],
                "range": [
                  2661,
                  3626
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 131
                  },
                  "start": {
                    "column": 15,
                    "line": 106
                  }
                }
              },
              "range": [
                2648,
                3626
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 131
                },
                "start": {
                  "column": 2,
                  "line": 106
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 135
            },
            "start": {
              "column": 23,
              "line": 95
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "HTMLtoJSX",
          "optional": false,
          "range": [
            2449,
            2458
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 95
            },
            "start": {
              "column": 13,
              "line": 95
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          2443,
          3631
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 135
          },
          "start": {
            "column": 7,
            "line": 95
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 135
        },
        "start": {
          "column": 0,
          "line": 95
        }
      }
    },
    {
      "type": "EmptyStatement",
      "range": [
        3631,
        3632
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 135
        },
        "start": {
          "column": 1,
          "line": 135
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        3678,
        3844
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            3703,
            3844
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
                "name": "styles",
                "optional": false,
                "range": [
                  3707,
                  3713
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 141
                  },
                  "start": {
                    "column": 2,
                    "line": 141
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "ObjectExpression",
                "properties": [],
                "range": [
                  3716,
                  3718
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 141
                  },
                  "start": {
                    "column": 11,
                    "line": 141
                  }
                }
              },
              "range": [
                3707,
                3719
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 141
                },
                "start": {
                  "column": 2,
                  "line": 141
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
                "name": "toJSXString",
                "optional": false,
                "range": [
                  3722,
                  3733
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 142
                  },
                  "start": {
                    "column": 2,
                    "line": 142
                  }
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ForInStatement",
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "IfStatement",
                            "alternate": null,
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [],
                              "range": [
                                3823,
                                3832
                              ],
                              "loc": {
                                "end": {
                                  "column": 7,
                                  "line": 145
                                },
                                "start": {
                                  "column": 44,
                                  "line": 144
                                }
                              }
                            },
                            "test": {
                              "type": "UnaryExpression",
                              "argument": {
                                "type": "CallExpression",
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "key",
                                    "optional": false,
                                    "range": [
                                      3817,
                                      3820
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 41,
                                        "line": 144
                                      },
                                      "start": {
                                        "column": 38,
                                        "line": 144
                                      }
                                    }
                                  }
                                ],
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "range": [
                                        3790,
                                        3794
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 15,
                                          "line": 144
                                        },
                                        "start": {
                                          "column": 11,
                                          "line": 144
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "styles",
                                      "optional": false,
                                      "range": [
                                        3795,
                                        3801
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 22,
                                          "line": 144
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 144
                                        }
                                      }
                                    },
                                    "range": [
                                      3790,
                                      3801
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 22,
                                        "line": 144
                                      },
                                      "start": {
                                        "column": 11,
                                        "line": 144
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "hasOwnProperty",
                                    "optional": false,
                                    "range": [
                                      3802,
                                      3816
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 37,
                                        "line": 144
                                      },
                                      "start": {
                                        "column": 23,
                                        "line": 144
                                      }
                                    }
                                  },
                                  "range": [
                                    3790,
                                    3816
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 37,
                                      "line": 144
                                    },
                                    "start": {
                                      "column": 11,
                                      "line": 144
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  3790,
                                  3821
                                ],
                                "loc": {
                                  "end": {
                                    "column": 42,
                                    "line": 144
                                  },
                                  "start": {
                                    "column": 11,
                                    "line": 144
                                  }
                                }
                              },
                              "operator": "!",
                              "prefix": true,
                              "range": [
                                3789,
                                3821
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 144
                                },
                                "start": {
                                  "column": 10,
                                  "line": 144
                                }
                              }
                            },
                            "range": [
                              3785,
                              3832
                            ],
                            "loc": {
                              "end": {
                                "column": 7,
                                "line": 145
                              },
                              "start": {
                                "column": 6,
                                "line": 144
                              }
                            }
                          }
                        ],
                        "range": [
                          3777,
                          3838
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 146
                          },
                          "start": {
                            "column": 33,
                            "line": 143
                          }
                        }
                      },
                      "left": {
                        "type": "VariableDeclaration",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "key",
                              "optional": false,
                              "range": [
                                3757,
                                3760
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 143
                                },
                                "start": {
                                  "column": 13,
                                  "line": 143
                                }
                              }
                            },
                            "init": null,
                            "range": [
                              3757,
                              3760
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 143
                              },
                              "start": {
                                "column": 13,
                                "line": 143
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "var",
                        "range": [
                          3753,
                          3760
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 143
                          },
                          "start": {
                            "column": 9,
                            "line": 143
                          }
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            3764,
                            3768
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 143
                            },
                            "start": {
                              "column": 20,
                              "line": 143
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "styles",
                          "optional": false,
                          "range": [
                            3769,
                            3775
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 143
                            },
                            "start": {
                              "column": 25,
                              "line": 143
                            }
                          }
                        },
                        "range": [
                          3764,
                          3775
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 143
                          },
                          "start": {
                            "column": 20,
                            "line": 143
                          }
                        }
                      },
                      "range": [
                        3748,
                        3838
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 146
                        },
                        "start": {
                          "column": 4,
                          "line": 143
                        }
                      }
                    }
                  ],
                  "range": [
                    3742,
                    3842
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 147
                    },
                    "start": {
                      "column": 22,
                      "line": 142
                    }
                  }
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "range": [
                  3736,
                  3842
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 147
                  },
                  "start": {
                    "column": 16,
                    "line": 142
                  }
                }
              },
              "range": [
                3722,
                3842
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 147
                },
                "start": {
                  "column": 2,
                  "line": 142
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 148
            },
            "start": {
              "column": 25,
              "line": 140
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "StyleParser",
          "optional": false,
          "range": [
            3691,
            3702
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 140
            },
            "start": {
              "column": 13,
              "line": 140
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          3685,
          3844
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 148
          },
          "start": {
            "column": 7,
            "line": 140
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 148
        },
        "start": {
          "column": 0,
          "line": 140
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 148
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
