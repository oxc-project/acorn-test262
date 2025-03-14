__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    955
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          17,
          198
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isLeader",
              "optional": false,
              "range": [
                23,
                31
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 2
                },
                "start": {
                  "column": 4,
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
                31,
                102
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": "instanceof",
                      "left": {
                        "type": "ThisExpression",
                        "range": [
                          70,
                          74
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 3
                          },
                          "start": {
                            "column": 15,
                            "line": 3
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "LeadGuard",
                        "optional": false,
                        "range": [
                          86,
                          95
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 3
                          },
                          "start": {
                            "column": 31,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        70,
                        95
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 3
                        },
                        "start": {
                          "column": 15,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      63,
                      96
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 3
                      },
                      "start": {
                        "column": 8,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  53,
                  102
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 4
                  },
                  "start": {
                    "column": 34,
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
                    "column": 33,
                    "line": 2
                  },
                  "start": {
                    "column": 14,
                    "line": 2
                  }
                },
                "range": [
                  33,
                  52
                ],
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "asserts": false,
                  "parameterName": {
                    "type": "TSThisType",
                    "range": [
                      35,
                      39
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 2
                      },
                      "start": {
                        "column": 16,
                        "line": 2
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 2
                      },
                      "start": {
                        "column": 24,
                        "line": 2
                      }
                    },
                    "range": [
                      43,
                      52
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "LeadGuard",
                        "optional": false,
                        "range": [
                          43,
                          52
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 2
                          },
                          "start": {
                            "column": 24,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        43,
                        52
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 2
                        },
                        "start": {
                          "column": 24,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    35,
                    52
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 2
                    },
                    "start": {
                      "column": 16,
                      "line": 2
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 12,
                  "line": 2
                }
              }
            },
            "range": [
              23,
              102
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 2
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
              "name": "isFollower",
              "optional": false,
              "range": [
                107,
                117
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
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
                117,
                196
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": "instanceof",
                      "left": {
                        "type": "ThisExpression",
                        "range": [
                          160,
                          164
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 6
                          },
                          "start": {
                            "column": 15,
                            "line": 6
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "FollowerGuard",
                        "optional": false,
                        "range": [
                          176,
                          189
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 6
                          },
                          "start": {
                            "column": 31,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        160,
                        189
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 6
                        },
                        "start": {
                          "column": 15,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      153,
                      190
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
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
                  143,
                  196
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 7
                  },
                  "start": {
                    "column": 40,
                    "line": 5
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
                    "column": 39,
                    "line": 5
                  },
                  "start": {
                    "column": 16,
                    "line": 5
                  }
                },
                "range": [
                  119,
                  142
                ],
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "asserts": false,
                  "parameterName": {
                    "type": "TSThisType",
                    "range": [
                      121,
                      125
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 5
                      },
                      "start": {
                        "column": 18,
                        "line": 5
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 5
                      },
                      "start": {
                        "column": 26,
                        "line": 5
                      }
                    },
                    "range": [
                      129,
                      142
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "FollowerGuard",
                        "optional": false,
                        "range": [
                          129,
                          142
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 5
                          },
                          "start": {
                            "column": 26,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        129,
                        142
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 5
                        },
                        "start": {
                          "column": 26,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    121,
                    142
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 5
                    },
                    "start": {
                      "column": 18,
                      "line": 5
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 7
                },
                "start": {
                  "column": 14,
                  "line": 5
                }
              }
            },
            "range": [
              107,
              196
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RoyalGuard",
        "optional": false,
        "range": [
          6,
          16
        ],
        "loc": {
          "end": {
            "column": 16,
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
        198
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
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
          235,
          259
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "lead",
              "optional": false,
              "range": [
                241,
                245
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
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
                245,
                256
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  254,
                  256
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 11
                  },
                  "start": {
                    "column": 17,
                    "line": 11
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
                    "column": 16,
                    "line": 11
                  },
                  "start": {
                    "column": 10,
                    "line": 11
                  }
                },
                "range": [
                  247,
                  253
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    249,
                    253
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 11
                    },
                    "start": {
                      "column": 12,
                      "line": 11
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 19,
                  "line": 11
                },
                "start": {
                  "column": 8,
                  "line": 11
                }
              }
            },
            "range": [
              241,
              256
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
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
            "column": 35,
            "line": 10
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LeadGuard",
        "optional": false,
        "range": [
          206,
          215
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 10
          },
          "start": {
            "column": 6,
            "line": 10
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "RoyalGuard",
        "optional": false,
        "range": [
          224,
          234
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 10
          },
          "start": {
            "column": 24,
            "line": 10
          }
        }
      },
      "range": [
        200,
        259
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          300,
          326
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "follow",
              "optional": false,
              "range": [
                306,
                312
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 15
                },
                "start": {
                  "column": 4,
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
                312,
                323
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  321,
                  323
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 15
                  },
                  "start": {
                    "column": 19,
                    "line": 15
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
                    "column": 18,
                    "line": 15
                  },
                  "start": {
                    "column": 12,
                    "line": 15
                  }
                },
                "range": [
                  314,
                  320
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    316,
                    320
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 15
                    },
                    "start": {
                      "column": 14,
                      "line": 15
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 21,
                  "line": 15
                },
                "start": {
                  "column": 10,
                  "line": 15
                }
              }
            },
            "range": [
              306,
              323
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 15
              },
              "start": {
                "column": 4,
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
            "column": 39,
            "line": 14
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FollowerGuard",
        "optional": false,
        "range": [
          267,
          280
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 14
          },
          "start": {
            "column": 6,
            "line": 14
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "RoyalGuard",
        "optional": false,
        "range": [
          289,
          299
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 14
          },
          "start": {
            "column": 28,
            "line": 14
          }
        }
      },
      "range": [
        261,
        326
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
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          372,
          374
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 46,
            "line": 18
          },
          "start": {
            "column": 44,
            "line": 18
          }
        }
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "RoyalGuard",
            "optional": false,
            "range": [
              361,
              371
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 18
              },
              "start": {
                "column": 33,
                "line": 18
              }
            }
          },
          "range": [
            361,
            371
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 18
            },
            "start": {
              "column": 33,
              "line": 18
            }
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GuardInterface",
        "optional": false,
        "range": [
          338,
          352
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 18
          },
          "start": {
            "column": 10,
            "line": 18
          }
        }
      },
      "range": [
        328,
        374
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 19
                },
                "start": {
                  "column": 5,
                  "line": 19
                }
              },
              "range": [
                380,
                392
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RoyalGuard",
                  "optional": false,
                  "range": [
                    382,
                    392
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 19
                    },
                    "start": {
                      "column": 7,
                      "line": 19
                    }
                  }
                },
                "range": [
                  382,
                  392
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 19
                  },
                  "start": {
                    "column": 7,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              379,
              392
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "FollowerGuard",
              "optional": false,
              "range": [
                399,
                412
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 19
                },
                "start": {
                  "column": 24,
                  "line": 19
                }
              }
            },
            "range": [
              395,
              414
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 19
              },
              "start": {
                "column": 20,
                "line": 19
              }
            }
          },
          "range": [
            379,
            414
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 19
            },
            "start": {
              "column": 4,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        375,
        415
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 20
                },
                "start": {
                  "column": 5,
                  "line": 20
                }
              },
              "range": [
                421,
                437
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "GuardInterface",
                  "optional": false,
                  "range": [
                    423,
                    437
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 20
                    },
                    "start": {
                      "column": 7,
                      "line": 20
                    }
                  }
                },
                "range": [
                  423,
                  437
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 20
                  },
                  "start": {
                    "column": 7,
                    "line": 20
                  }
                }
              }
            },
            "range": [
              420,
              437
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "LeadGuard",
              "optional": false,
              "range": [
                444,
                453
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 20
                },
                "start": {
                  "column": 28,
                  "line": 20
                }
              }
            },
            "range": [
              440,
              455
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 20
              },
              "start": {
                "column": 24,
                "line": 20
              }
            }
          },
          "range": [
            420,
            455
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 20
            },
            "start": {
              "column": 4,
              "line": 20
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        416,
        456
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
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
            "name": "b",
            "optional": false,
            "range": [
              503,
              504
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 23
              },
              "start": {
                "column": 0,
                "line": 23
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isFollower",
            "optional": false,
            "range": [
              505,
              515
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 23
              },
              "start": {
                "column": 2,
                "line": 23
              }
            }
          },
          "range": [
            503,
            515
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 23
            },
            "start": {
              "column": 0,
              "line": 23
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "range": [
              518,
              519
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 23
              },
              "start": {
                "column": 15,
                "line": 23
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isLeader",
            "optional": false,
            "range": [
              520,
              528
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 23
              },
              "start": {
                "column": 17,
                "line": 23
              }
            }
          },
          "range": [
            518,
            528
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 23
            },
            "start": {
              "column": 15,
              "line": 23
            }
          }
        },
        "range": [
          503,
          528
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        503,
        529
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
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
            "name": "b",
            "optional": false,
            "range": [
              530,
              531
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 24
              },
              "start": {
                "column": 0,
                "line": 24
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isLeader",
            "optional": false,
            "range": [
              532,
              540
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 24
              },
              "start": {
                "column": 2,
                "line": 24
              }
            }
          },
          "range": [
            530,
            540
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 24
            },
            "start": {
              "column": 0,
              "line": 24
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "range": [
              543,
              544
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 24
              },
              "start": {
                "column": 13,
                "line": 24
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isFollower",
            "optional": false,
            "range": [
              545,
              555
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 24
              },
              "start": {
                "column": 15,
                "line": 24
              }
            }
          },
          "range": [
            543,
            555
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 24
            },
            "start": {
              "column": 13,
              "line": 24
            }
          }
        },
        "range": [
          530,
          555
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 24
          },
          "start": {
            "column": 0,
            "line": 24
          }
        }
      },
      "range": [
        530,
        556
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
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
            "name": "a",
            "optional": false,
            "range": [
              558,
              559
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 26
              },
              "start": {
                "column": 0,
                "line": 26
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isFollower",
            "optional": false,
            "range": [
              560,
              570
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 26
              },
              "start": {
                "column": 2,
                "line": 26
              }
            }
          },
          "range": [
            558,
            570
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 26
            },
            "start": {
              "column": 0,
              "line": 26
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              573,
              574
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 26
              },
              "start": {
                "column": 15,
                "line": 26
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isLeader",
            "optional": false,
            "range": [
              575,
              583
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 26
              },
              "start": {
                "column": 17,
                "line": 26
              }
            }
          },
          "range": [
            573,
            583
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 26
            },
            "start": {
              "column": 15,
              "line": 26
            }
          }
        },
        "range": [
          558,
          583
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 26
          },
          "start": {
            "column": 0,
            "line": 26
          }
        }
      },
      "range": [
        558,
        584
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
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
            "name": "a",
            "optional": false,
            "range": [
              585,
              586
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 27
              },
              "start": {
                "column": 0,
                "line": 27
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isLeader",
            "optional": false,
            "range": [
              587,
              595
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 27
              },
              "start": {
                "column": 2,
                "line": 27
              }
            }
          },
          "range": [
            585,
            595
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 27
            },
            "start": {
              "column": 0,
              "line": 27
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              598,
              599
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 27
              },
              "start": {
                "column": 13,
                "line": 27
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isFollower",
            "optional": false,
            "range": [
              600,
              610
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 27
              },
              "start": {
                "column": 15,
                "line": 27
              }
            }
          },
          "range": [
            598,
            610
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 27
            },
            "start": {
              "column": 13,
              "line": 27
            }
          }
        },
        "range": [
          585,
          610
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 27
          },
          "start": {
            "column": 0,
            "line": 27
          }
        }
      },
      "range": [
        585,
        611
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 27
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "raw": "false",
              "value": false,
              "range": [
                672,
                677
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 30
                },
                "start": {
                  "column": 11,
                  "line": 30
                }
              }
            },
            "range": [
              665,
              678
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          }
        ],
        "range": [
          659,
          680
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 31
          },
          "start": {
            "column": 46,
            "line": 29
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "invalidGuard",
        "optional": false,
        "range": [
          622,
          634
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 29
          },
          "start": {
            "column": 9,
            "line": 29
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 28,
                "line": 29
              },
              "start": {
                "column": 23,
                "line": 29
              }
            },
            "range": [
              636,
              641
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                638,
                641
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 29
                },
                "start": {
                  "column": 25,
                  "line": 29
                }
              }
            }
          },
          "range": [
            635,
            641
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 29
            },
            "start": {
              "column": 22,
              "line": 29
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 45,
            "line": 29
          },
          "start": {
            "column": 29,
            "line": 29
          }
        },
        "range": [
          642,
          658
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "TSThisType",
            "range": [
              644,
              648
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 29
              },
              "start": {
                "column": 31,
                "line": 29
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 45,
                "line": 29
              },
              "start": {
                "column": 39,
                "line": 29
              }
            },
            "range": [
              652,
              658
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                652,
                658
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 29
                },
                "start": {
                  "column": 39,
                  "line": 29
                }
              }
            }
          },
          "range": [
            644,
            658
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 29
            },
            "start": {
              "column": 31,
              "line": 29
            }
          }
        }
      },
      "range": [
        613,
        680
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 29
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 33
                },
                "start": {
                  "column": 5,
                  "line": 33
                }
              },
              "range": [
                687,
                706
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      689,
                      695
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 33
                      },
                      "start": {
                        "column": 7,
                        "line": 33
                      }
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "range": [
                        698,
                        704
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 33
                        },
                        "start": {
                          "column": 16,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      698,
                      706
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 33
                      },
                      "start": {
                        "column": 16,
                        "line": 33
                      }
                    }
                  }
                ],
                "range": [
                  689,
                  706
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 33
                  },
                  "start": {
                    "column": 7,
                    "line": 33
                  }
                }
              }
            },
            "range": [
              686,
              706
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          },
          "init": null,
          "range": [
            686,
            706
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 33
            },
            "start": {
              "column": 4,
              "line": 33
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        682,
        707
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
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
              "name": "c",
              "optional": false,
              "range": [
                751,
                752
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 38
                },
                "start": {
                  "column": 4,
                  "line": 38
                }
              }
            },
            "range": [
              751,
              753
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          }
        ],
        "range": [
          745,
          755
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 39
          },
          "start": {
            "column": 5,
            "line": 37
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
              "name": "c",
              "optional": false,
              "range": [
                735,
                736
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 35
                },
                "start": {
                  "column": 4,
                  "line": 35
                }
              }
            },
            "range": [
              735,
              737
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          }
        ],
        "range": [
          729,
          739
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 36
          },
          "start": {
            "column": 21,
            "line": 34
          }
        }
      },
      "test": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "range": [
              725,
              726
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 34
              },
              "start": {
                "column": 17,
                "line": 34
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "invalidGuard",
          "optional": false,
          "range": [
            712,
            724
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 34
            },
            "start": {
              "column": 4,
              "line": 34
            }
          }
        },
        "optional": false,
        "range": [
          712,
          727
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 34
          },
          "start": {
            "column": 4,
            "line": 34
          }
        }
      },
      "range": [
        708,
        755
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 34
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
            "name": "holder",
            "optional": false,
            "range": [
              761,
              767
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 41
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
                  "name": "invalidGuard",
                  "optional": false,
                  "range": [
                    771,
                    783
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 41
                    },
                    "start": {
                      "column": 14,
                      "line": 41
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "invalidGuard",
                  "optional": false,
                  "range": [
                    771,
                    783
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 41
                    },
                    "start": {
                      "column": 14,
                      "line": 41
                    }
                  }
                },
                "range": [
                  771,
                  783
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 41
                  },
                  "start": {
                    "column": 14,
                    "line": 41
                  }
                }
              }
            ],
            "range": [
              770,
              784
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 41
              },
              "start": {
                "column": 13,
                "line": 41
              }
            }
          },
          "range": [
            761,
            784
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 41
            },
            "start": {
              "column": 4,
              "line": 41
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        757,
        785
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 41
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
              "name": "c",
              "optional": false,
              "range": [
                849,
                850
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 48
                },
                "start": {
                  "column": 4,
                  "line": 48
                }
              }
            },
            "range": [
              849,
              851
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 48
              },
              "start": {
                "column": 4,
                "line": 48
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "holder",
              "optional": false,
              "range": [
                856,
                862
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 49
                },
                "start": {
                  "column": 4,
                  "line": 49
                }
              }
            },
            "range": [
              856,
              863
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 49
              }
            }
          }
        ],
        "range": [
          843,
          865
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 50
          },
          "start": {
            "column": 5,
            "line": 47
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
              "name": "c",
              "optional": false,
              "range": [
                821,
                822
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 44
                },
                "start": {
                  "column": 4,
                  "line": 44
                }
              }
            },
            "range": [
              821,
              823
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 44
              },
              "start": {
                "column": 4,
                "line": 44
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "holder",
              "optional": false,
              "range": [
                828,
                834
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 45
                },
                "start": {
                  "column": 4,
                  "line": 45
                }
              }
            },
            "range": [
              828,
              835
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 45
              }
            }
          }
        ],
        "range": [
          815,
          837
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 46
          },
          "start": {
            "column": 28,
            "line": 43
          }
        }
      },
      "test": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "range": [
              811,
              812
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 43
              },
              "start": {
                "column": 24,
                "line": 43
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
            "name": "holder",
            "optional": false,
            "range": [
              791,
              797
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 43
              },
              "start": {
                "column": 4,
                "line": 43
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "invalidGuard",
            "optional": false,
            "range": [
              798,
              810
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 43
              },
              "start": {
                "column": 11,
                "line": 43
              }
            }
          },
          "range": [
            791,
            810
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 43
            },
            "start": {
              "column": 4,
              "line": 43
            }
          }
        },
        "optional": false,
        "range": [
          791,
          813
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 43
          },
          "start": {
            "column": 4,
            "line": 43
          }
        }
      },
      "range": [
        787,
        865
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 43
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
            "name": "detached",
            "optional": false,
            "range": [
              871,
              879
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 52
              },
              "start": {
                "column": 4,
                "line": 52
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                882,
                883
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 52
                },
                "start": {
                  "column": 15,
                  "line": 52
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "isFollower",
              "optional": false,
              "range": [
                884,
                894
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 52
                },
                "start": {
                  "column": 17,
                  "line": 52
                }
              }
            },
            "range": [
              882,
              894
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 52
              },
              "start": {
                "column": 15,
                "line": 52
              }
            }
          },
          "range": [
            871,
            894
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 52
            },
            "start": {
              "column": 4,
              "line": 52
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        867,
        895
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 52
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
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    944,
                    945
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 58
                    },
                    "start": {
                      "column": 4,
                      "line": 58
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "lead",
                  "optional": false,
                  "range": [
                    946,
                    950
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 58
                    },
                    "start": {
                      "column": 6,
                      "line": 58
                    }
                  }
                },
                "range": [
                  944,
                  950
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 58
                  },
                  "start": {
                    "column": 4,
                    "line": 58
                  }
                }
              },
              "optional": false,
              "range": [
                944,
                952
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 58
                },
                "start": {
                  "column": 4,
                  "line": 58
                }
              }
            },
            "range": [
              944,
              953
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 58
              },
              "start": {
                "column": 4,
                "line": 58
              }
            }
          }
        ],
        "range": [
          938,
          955
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 59
          },
          "start": {
            "column": 5,
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
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    919,
                    920
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 55
                    },
                    "start": {
                      "column": 4,
                      "line": 55
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "follow",
                  "optional": false,
                  "range": [
                    921,
                    927
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 55
                    },
                    "start": {
                      "column": 6,
                      "line": 55
                    }
                  }
                },
                "range": [
                  919,
                  927
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 55
                  },
                  "start": {
                    "column": 4,
                    "line": 55
                  }
                }
              },
              "optional": false,
              "range": [
                919,
                929
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 55
                },
                "start": {
                  "column": 4,
                  "line": 55
                }
              }
            },
            "range": [
              919,
              930
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 55
              },
              "start": {
                "column": 4,
                "line": 55
              }
            }
          }
        ],
        "range": [
          913,
          932
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 56
          },
          "start": {
            "column": 16,
            "line": 54
          }
        }
      },
      "test": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "detached",
          "optional": false,
          "range": [
            901,
            909
          ],
          "loc": {
            "end": {
              "column": 12,
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
          901,
          911
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 54
          },
          "start": {
            "column": 4,
            "line": 54
          }
        }
      },
      "range": [
        897,
        955
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 59
        },
        "start": {
          "column": 0,
          "line": 54
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 59
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
