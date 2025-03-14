__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    2457
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
                  "line": 18
                },
                "start": {
                  "column": 5,
                  "line": 18
                }
              },
              "range": [
                333,
                345
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RoyalGuard",
                  "optional": false,
                  "range": [
                    335,
                    345
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 18
                    },
                    "start": {
                      "column": 7,
                      "line": 18
                    }
                  }
                },
                "range": [
                  335,
                  345
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 18
                  },
                  "start": {
                    "column": 7,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              332,
              345
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
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
                352,
                365
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 18
                },
                "start": {
                  "column": 24,
                  "line": 18
                }
              }
            },
            "range": [
              348,
              367
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 18
              },
              "start": {
                "column": 20,
                "line": 18
              }
            }
          },
          "range": [
            332,
            367
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 18
            },
            "start": {
              "column": 4,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        328,
        368
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
        "type": "IfStatement",
        "alternate": null,
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
                      436,
                      437
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 23
                      },
                      "start": {
                        "column": 4,
                        "line": 23
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
                      438,
                      444
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 23
                      },
                      "start": {
                        "column": 6,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    436,
                    444
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 23
                    },
                    "start": {
                      "column": 4,
                      "line": 23
                    }
                  }
                },
                "optional": false,
                "range": [
                  436,
                  446
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 23
                  },
                  "start": {
                    "column": 4,
                    "line": 23
                  }
                }
              },
              "range": [
                436,
                447
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 23
                },
                "start": {
                  "column": 4,
                  "line": 23
                }
              }
            }
          ],
          "range": [
            430,
            449
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 24
            },
            "start": {
              "column": 25,
              "line": 22
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
              "name": "a",
              "optional": false,
              "range": [
                414,
                415
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 22
                },
                "start": {
                  "column": 9,
                  "line": 22
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
                416,
                426
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 22
                },
                "start": {
                  "column": 11,
                  "line": 22
                }
              }
            },
            "range": [
              414,
              426
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 22
              },
              "start": {
                "column": 9,
                "line": 22
              }
            }
          },
          "optional": false,
          "range": [
            414,
            428
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 22
            },
            "start": {
              "column": 9,
              "line": 22
            }
          }
        },
        "range": [
          410,
          449
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 5,
            "line": 22
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
                    393,
                    394
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 20
                    },
                    "start": {
                      "column": 4,
                      "line": 20
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
                    395,
                    399
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 20
                    },
                    "start": {
                      "column": 6,
                      "line": 20
                    }
                  }
                },
                "range": [
                  393,
                  399
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 20
                  },
                  "start": {
                    "column": 4,
                    "line": 20
                  }
                }
              },
              "optional": false,
              "range": [
                393,
                401
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 20
                },
                "start": {
                  "column": 4,
                  "line": 20
                }
              }
            },
            "range": [
              393,
              402
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          }
        ],
        "range": [
          387,
          404
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 18,
            "line": 19
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
            "name": "a",
            "optional": false,
            "range": [
              373,
              374
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
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
              375,
              383
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 19
              },
              "start": {
                "column": 6,
                "line": 19
              }
            }
          },
          "range": [
            373,
            383
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 19
            },
            "start": {
              "column": 4,
              "line": 19
            }
          }
        },
        "optional": false,
        "range": [
          373,
          385
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 19
          },
          "start": {
            "column": 4,
            "line": 19
          }
        }
      },
      "range": [
        369,
        449
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          495,
          497
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 46,
            "line": 26
          },
          "start": {
            "column": 44,
            "line": 26
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
              484,
              494
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 26
              },
              "start": {
                "column": 33,
                "line": 26
              }
            }
          },
          "range": [
            484,
            494
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 26
            },
            "start": {
              "column": 33,
              "line": 26
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
          461,
          475
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 26
          },
          "start": {
            "column": 10,
            "line": 26
          }
        }
      },
      "range": [
        451,
        497
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
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
                  "line": 28
                },
                "start": {
                  "column": 5,
                  "line": 28
                }
              },
              "range": [
                504,
                520
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "GuardInterface",
                  "optional": false,
                  "range": [
                    506,
                    520
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 28
                    },
                    "start": {
                      "column": 7,
                      "line": 28
                    }
                  }
                },
                "range": [
                  506,
                  520
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 28
                  },
                  "start": {
                    "column": 7,
                    "line": 28
                  }
                }
              }
            },
            "range": [
              503,
              520
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          "init": null,
          "range": [
            503,
            520
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 28
            },
            "start": {
              "column": 4,
              "line": 28
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        499,
        521
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
        "type": "IfStatement",
        "alternate": null,
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
                    "name": "b",
                    "optional": false,
                    "range": [
                      589,
                      590
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 33
                      },
                      "start": {
                        "column": 4,
                        "line": 33
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
                      591,
                      597
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 33
                      },
                      "start": {
                        "column": 6,
                        "line": 33
                      }
                    }
                  },
                  "range": [
                    589,
                    597
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 33
                    },
                    "start": {
                      "column": 4,
                      "line": 33
                    }
                  }
                },
                "optional": false,
                "range": [
                  589,
                  599
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 33
                  },
                  "start": {
                    "column": 4,
                    "line": 33
                  }
                }
              },
              "range": [
                589,
                600
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 33
                },
                "start": {
                  "column": 4,
                  "line": 33
                }
              }
            }
          ],
          "range": [
            583,
            602
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 34
            },
            "start": {
              "column": 25,
              "line": 32
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
              "name": "b",
              "optional": false,
              "range": [
                567,
                568
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 32
                },
                "start": {
                  "column": 9,
                  "line": 32
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
                569,
                579
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 32
                },
                "start": {
                  "column": 11,
                  "line": 32
                }
              }
            },
            "range": [
              567,
              579
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 32
              },
              "start": {
                "column": 9,
                "line": 32
              }
            }
          },
          "optional": false,
          "range": [
            567,
            581
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 32
            },
            "start": {
              "column": 9,
              "line": 32
            }
          }
        },
        "range": [
          563,
          602
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 34
          },
          "start": {
            "column": 5,
            "line": 32
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
                  "name": "b",
                  "optional": false,
                  "range": [
                    546,
                    547
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 30
                    },
                    "start": {
                      "column": 4,
                      "line": 30
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
                    548,
                    552
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 30
                    },
                    "start": {
                      "column": 6,
                      "line": 30
                    }
                  }
                },
                "range": [
                  546,
                  552
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 30
                  },
                  "start": {
                    "column": 4,
                    "line": 30
                  }
                }
              },
              "optional": false,
              "range": [
                546,
                554
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 30
                },
                "start": {
                  "column": 4,
                  "line": 30
                }
              }
            },
            "range": [
              546,
              555
            ],
            "loc": {
              "end": {
                "column": 13,
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
          540,
          557
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 31
          },
          "start": {
            "column": 18,
            "line": 29
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
            "name": "b",
            "optional": false,
            "range": [
              526,
              527
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
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
              528,
              536
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 29
              },
              "start": {
                "column": 6,
                "line": 29
              }
            }
          },
          "range": [
            526,
            536
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 29
            },
            "start": {
              "column": 4,
              "line": 29
            }
          }
        },
        "optional": false,
        "range": [
          526,
          538
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 29
          },
          "start": {
            "column": 4,
            "line": 29
          }
        }
      },
      "range": [
        522,
        602
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 34
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
            "name": "holder2",
            "optional": false,
            "range": [
              830,
              837
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 50
              },
              "start": {
                "column": 4,
                "line": 50
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
                  "name": "a",
                  "optional": false,
                  "range": [
                    841,
                    842
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 50
                    },
                    "start": {
                      "column": 15,
                      "line": 50
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
                  "name": "a",
                  "optional": false,
                  "range": [
                    841,
                    842
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 50
                    },
                    "start": {
                      "column": 15,
                      "line": 50
                    }
                  }
                },
                "range": [
                  841,
                  842
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 50
                  },
                  "start": {
                    "column": 15,
                    "line": 50
                  }
                }
              }
            ],
            "range": [
              840,
              843
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 50
              },
              "start": {
                "column": 14,
                "line": 50
              }
            }
          },
          "range": [
            830,
            843
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 50
            },
            "start": {
              "column": 4,
              "line": 50
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        826,
        844
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 50
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
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "holder2",
                "optional": false,
                "range": [
                  902,
                  909
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 56
                  },
                  "start": {
                    "column": 4,
                    "line": 56
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
                  910,
                  911
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 56
                  },
                  "start": {
                    "column": 12,
                    "line": 56
                  }
                }
              },
              "range": [
                902,
                911
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 56
                },
                "start": {
                  "column": 4,
                  "line": 56
                }
              }
            },
            "range": [
              902,
              912
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 56
              },
              "start": {
                "column": 4,
                "line": 56
              }
            }
          }
        ],
        "range": [
          896,
          914
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 57
          },
          "start": {
            "column": 5,
            "line": 55
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "holder2",
                "optional": false,
                "range": [
                  878,
                  885
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 53
                  },
                  "start": {
                    "column": 4,
                    "line": 53
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
                  886,
                  887
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 53
                  },
                  "start": {
                    "column": 12,
                    "line": 53
                  }
                }
              },
              "range": [
                878,
                887
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 53
                },
                "start": {
                  "column": 4,
                  "line": 53
                }
              }
            },
            "range": [
              878,
              888
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 53
              }
            }
          }
        ],
        "range": [
          872,
          890
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 54
          },
          "start": {
            "column": 26,
            "line": 52
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
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "holder2",
              "optional": false,
              "range": [
                850,
                857
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 52
                },
                "start": {
                  "column": 4,
                  "line": 52
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
                858,
                859
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 52
                },
                "start": {
                  "column": 12,
                  "line": 52
                }
              }
            },
            "range": [
              850,
              859
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 52
              },
              "start": {
                "column": 4,
                "line": 52
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
              860,
              868
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 52
              },
              "start": {
                "column": 14,
                "line": 52
              }
            }
          },
          "range": [
            850,
            868
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 52
            },
            "start": {
              "column": 4,
              "line": 52
            }
          }
        },
        "optional": false,
        "range": [
          850,
          870
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 52
          },
          "start": {
            "column": 4,
            "line": 52
          }
        }
      },
      "range": [
        846,
        914
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 52
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          933,
          1118
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
              "name": "isElite",
              "optional": false,
              "range": [
                939,
                946
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 60
                },
                "start": {
                  "column": 4,
                  "line": 60
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": "instanceof",
                      "left": {
                        "type": "ThisExpression",
                        "range": [
                          992,
                          996
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 61
                          },
                          "start": {
                            "column": 15,
                            "line": 61
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ArrowElite",
                        "optional": false,
                        "range": [
                          1008,
                          1018
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 61
                          },
                          "start": {
                            "column": 31,
                            "line": 61
                          }
                        }
                      },
                      "range": [
                        992,
                        1018
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 61
                        },
                        "start": {
                          "column": 15,
                          "line": 61
                        }
                      }
                    },
                    "range": [
                      985,
                      1019
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 61
                      },
                      "start": {
                        "column": 8,
                        "line": 61
                      }
                    }
                  }
                ],
                "range": [
                  975,
                  1025
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 62
                  },
                  "start": {
                    "column": 40,
                    "line": 60
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 60
                  },
                  "start": {
                    "column": 16,
                    "line": 60
                  }
                },
                "range": [
                  951,
                  971
                ],
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "asserts": false,
                  "parameterName": {
                    "type": "TSThisType",
                    "range": [
                      953,
                      957
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 60
                      },
                      "start": {
                        "column": 18,
                        "line": 60
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 60
                      },
                      "start": {
                        "column": 26,
                        "line": 60
                      }
                    },
                    "range": [
                      961,
                      971
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ArrowElite",
                        "optional": false,
                        "range": [
                          961,
                          971
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 60
                          },
                          "start": {
                            "column": 26,
                            "line": 60
                          }
                        }
                      },
                      "range": [
                        961,
                        971
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 60
                        },
                        "start": {
                          "column": 26,
                          "line": 60
                        }
                      }
                    }
                  },
                  "range": [
                    953,
                    971
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 60
                    },
                    "start": {
                      "column": 18,
                      "line": 60
                    }
                  }
                }
              },
              "range": [
                949,
                1025
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 62
                },
                "start": {
                  "column": 14,
                  "line": 60
                }
              }
            },
            "range": [
              939,
              1025
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 62
              },
              "start": {
                "column": 4,
                "line": 60
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
              "name": "isMedic",
              "optional": false,
              "range": [
                1030,
                1037
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": "instanceof",
                      "left": {
                        "type": "ThisExpression",
                        "range": [
                          1083,
                          1087
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 64
                          },
                          "start": {
                            "column": 15,
                            "line": 64
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ArrowMedic",
                        "optional": false,
                        "range": [
                          1099,
                          1109
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 64
                          },
                          "start": {
                            "column": 31,
                            "line": 64
                          }
                        }
                      },
                      "range": [
                        1083,
                        1109
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 64
                        },
                        "start": {
                          "column": 15,
                          "line": 64
                        }
                      }
                    },
                    "range": [
                      1076,
                      1110
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 64
                      },
                      "start": {
                        "column": 8,
                        "line": 64
                      }
                    }
                  }
                ],
                "range": [
                  1066,
                  1116
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 65
                  },
                  "start": {
                    "column": 40,
                    "line": 63
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 63
                  },
                  "start": {
                    "column": 16,
                    "line": 63
                  }
                },
                "range": [
                  1042,
                  1062
                ],
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "asserts": false,
                  "parameterName": {
                    "type": "TSThisType",
                    "range": [
                      1044,
                      1048
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 63
                      },
                      "start": {
                        "column": 18,
                        "line": 63
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 63
                      },
                      "start": {
                        "column": 26,
                        "line": 63
                      }
                    },
                    "range": [
                      1052,
                      1062
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ArrowMedic",
                        "optional": false,
                        "range": [
                          1052,
                          1062
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 63
                          },
                          "start": {
                            "column": 26,
                            "line": 63
                          }
                        }
                      },
                      "range": [
                        1052,
                        1062
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 63
                        },
                        "start": {
                          "column": 26,
                          "line": 63
                        }
                      }
                    }
                  },
                  "range": [
                    1044,
                    1062
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 63
                    },
                    "start": {
                      "column": 18,
                      "line": 63
                    }
                  }
                }
              },
              "range": [
                1040,
                1116
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 65
                },
                "start": {
                  "column": 14,
                  "line": 63
                }
              }
            },
            "range": [
              1030,
              1116
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 65
              },
              "start": {
                "column": 4,
                "line": 63
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 66
          },
          "start": {
            "column": 17,
            "line": 59
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ArrowGuard",
        "optional": false,
        "range": [
          922,
          932
        ],
        "loc": {
          "end": {
            "column": 16,
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
        916,
        1118
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 66
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
          1156,
          1181
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "defend",
              "optional": false,
              "range": [
                1162,
                1168
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 69
                },
                "start": {
                  "column": 4,
                  "line": 69
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
                1168,
                1179
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  1177,
                  1179
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 69
                  },
                  "start": {
                    "column": 19,
                    "line": 69
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
                    "line": 69
                  },
                  "start": {
                    "column": 12,
                    "line": 69
                  }
                },
                "range": [
                  1170,
                  1176
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    1172,
                    1176
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 69
                    },
                    "start": {
                      "column": 14,
                      "line": 69
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 21,
                  "line": 69
                },
                "start": {
                  "column": 10,
                  "line": 69
                }
              }
            },
            "range": [
              1162,
              1179
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 69
              },
              "start": {
                "column": 4,
                "line": 69
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 70
          },
          "start": {
            "column": 36,
            "line": 68
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ArrowElite",
        "optional": false,
        "range": [
          1126,
          1136
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 68
          },
          "start": {
            "column": 6,
            "line": 68
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "ArrowGuard",
        "optional": false,
        "range": [
          1145,
          1155
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 68
          },
          "start": {
            "column": 25,
            "line": 68
          }
        }
      },
      "range": [
        1120,
        1181
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 70
        },
        "start": {
          "column": 0,
          "line": 68
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1219,
          1242
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "heal",
              "optional": false,
              "range": [
                1225,
                1229
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 73
                },
                "start": {
                  "column": 4,
                  "line": 73
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
                1229,
                1240
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  1238,
                  1240
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 73
                  },
                  "start": {
                    "column": 17,
                    "line": 73
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
                    "line": 73
                  },
                  "start": {
                    "column": 10,
                    "line": 73
                  }
                },
                "range": [
                  1231,
                  1237
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    1233,
                    1237
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 73
                    },
                    "start": {
                      "column": 12,
                      "line": 73
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 19,
                  "line": 73
                },
                "start": {
                  "column": 8,
                  "line": 73
                }
              }
            },
            "range": [
              1225,
              1240
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 73
              },
              "start": {
                "column": 4,
                "line": 73
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 74
          },
          "start": {
            "column": 36,
            "line": 72
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ArrowMedic",
        "optional": false,
        "range": [
          1189,
          1199
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 72
          },
          "start": {
            "column": 6,
            "line": 72
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "ArrowGuard",
        "optional": false,
        "range": [
          1208,
          1218
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 72
          },
          "start": {
            "column": 25,
            "line": 72
          }
        }
      },
      "range": [
        1183,
        1242
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 74
        },
        "start": {
          "column": 0,
          "line": 72
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
            "name": "guard",
            "optional": false,
            "range": [
              1248,
              1253
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
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ArrowGuard",
              "optional": false,
              "range": [
                1260,
                1270
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 76
                },
                "start": {
                  "column": 16,
                  "line": 76
                }
              }
            },
            "range": [
              1256,
              1272
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 76
              },
              "start": {
                "column": 12,
                "line": 76
              }
            }
          },
          "range": [
            1248,
            1272
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 76
            },
            "start": {
              "column": 4,
              "line": 76
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        1244,
        1273
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 76
        },
        "start": {
          "column": 0,
          "line": 76
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
        "type": "IfStatement",
        "alternate": null,
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
                    "name": "guard",
                    "optional": false,
                    "range": [
                      1351,
                      1356
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
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
                    "name": "heal",
                    "optional": false,
                    "range": [
                      1357,
                      1361
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 81
                      },
                      "start": {
                        "column": 10,
                        "line": 81
                      }
                    }
                  },
                  "range": [
                    1351,
                    1361
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
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
                  1351,
                  1363
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 81
                  },
                  "start": {
                    "column": 4,
                    "line": 81
                  }
                }
              },
              "range": [
                1351,
                1364
              ],
              "loc": {
                "end": {
                  "column": 17,
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
            1345,
            1366
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 82
            },
            "start": {
              "column": 26,
              "line": 80
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
              "name": "guard",
              "optional": false,
              "range": [
                1328,
                1333
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 80
                },
                "start": {
                  "column": 9,
                  "line": 80
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "isMedic",
              "optional": false,
              "range": [
                1334,
                1341
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 80
                },
                "start": {
                  "column": 15,
                  "line": 80
                }
              }
            },
            "range": [
              1328,
              1341
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 80
              },
              "start": {
                "column": 9,
                "line": 80
              }
            }
          },
          "optional": false,
          "range": [
            1328,
            1343
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 80
            },
            "start": {
              "column": 9,
              "line": 80
            }
          }
        },
        "range": [
          1324,
          1366
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 82
          },
          "start": {
            "column": 5,
            "line": 80
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
                  "name": "guard",
                  "optional": false,
                  "range": [
                    1301,
                    1306
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 78
                    },
                    "start": {
                      "column": 4,
                      "line": 78
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "defend",
                  "optional": false,
                  "range": [
                    1307,
                    1313
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 78
                    },
                    "start": {
                      "column": 10,
                      "line": 78
                    }
                  }
                },
                "range": [
                  1301,
                  1313
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 78
                  },
                  "start": {
                    "column": 4,
                    "line": 78
                  }
                }
              },
              "optional": false,
              "range": [
                1301,
                1315
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 78
                },
                "start": {
                  "column": 4,
                  "line": 78
                }
              }
            },
            "range": [
              1301,
              1316
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 78
              },
              "start": {
                "column": 4,
                "line": 78
              }
            }
          }
        ],
        "range": [
          1295,
          1318
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 79
          },
          "start": {
            "column": 21,
            "line": 77
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
            "name": "guard",
            "optional": false,
            "range": [
              1278,
              1283
            ],
            "loc": {
              "end": {
                "column": 9,
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
            "name": "isElite",
            "optional": false,
            "range": [
              1284,
              1291
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 77
              },
              "start": {
                "column": 10,
                "line": 77
              }
            }
          },
          "range": [
            1278,
            1291
          ],
          "loc": {
            "end": {
              "column": 17,
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
          1278,
          1293
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 77
          },
          "start": {
            "column": 4,
            "line": 77
          }
        }
      },
      "range": [
        1274,
        1366
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 82
        },
        "start": {
          "column": 0,
          "line": 77
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1387,
          1412
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "spoiled",
              "optional": false,
              "range": [
                1393,
                1400
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 85
                },
                "start": {
                  "column": 4,
                  "line": 85
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
                  "column": 20,
                  "line": 85
                },
                "start": {
                  "column": 11,
                  "line": 85
                }
              },
              "range": [
                1400,
                1409
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  1402,
                  1409
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 85
                  },
                  "start": {
                    "column": 13,
                    "line": 85
                  }
                }
              }
            },
            "range": [
              1393,
              1410
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 85
              },
              "start": {
                "column": 4,
                "line": 85
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 86
          },
          "start": {
            "column": 19,
            "line": 84
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Supplies",
        "optional": false,
        "range": [
          1378,
          1386
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 84
          },
          "start": {
            "column": 10,
            "line": 84
          }
        }
      },
      "range": [
        1368,
        1412
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 86
        },
        "start": {
          "column": 0,
          "line": 84
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1433,
          1457
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "broken",
              "optional": false,
              "range": [
                1439,
                1445
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 89
                },
                "start": {
                  "column": 4,
                  "line": 89
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
                  "column": 19,
                  "line": 89
                },
                "start": {
                  "column": 10,
                  "line": 89
                }
              },
              "range": [
                1445,
                1454
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  1447,
                  1454
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 89
                  },
                  "start": {
                    "column": 12,
                    "line": 89
                  }
                }
              }
            },
            "range": [
              1439,
              1455
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 89
              },
              "start": {
                "column": 4,
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
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Sundries",
        "optional": false,
        "range": [
          1424,
          1432
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 88
          },
          "start": {
            "column": 10,
            "line": 88
          }
        }
      },
      "range": [
        1414,
        1457
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
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1478,
          1604
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "contents",
              "optional": false,
              "range": [
                1484,
                1492
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 93
                },
                "start": {
                  "column": 4,
                  "line": 93
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
                  "column": 15,
                  "line": 93
                },
                "start": {
                  "column": 12,
                  "line": 93
                }
              },
              "range": [
                1492,
                1495
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    1494,
                    1495
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 93
                    },
                    "start": {
                      "column": 14,
                      "line": 93
                    }
                  }
                },
                "range": [
                  1494,
                  1495
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 93
                  },
                  "start": {
                    "column": 14,
                    "line": 93
                  }
                }
              }
            },
            "range": [
              1484,
              1496
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 93
              },
              "start": {
                "column": 4,
                "line": 93
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "volume",
              "optional": false,
              "range": [
                1501,
                1507
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 94
                },
                "start": {
                  "column": 4,
                  "line": 94
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
                  "line": 94
                },
                "start": {
                  "column": 10,
                  "line": 94
                }
              },
              "range": [
                1507,
                1515
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1509,
                  1515
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 94
                  },
                  "start": {
                    "column": 12,
                    "line": 94
                  }
                }
              }
            },
            "range": [
              1501,
              1516
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 94
              },
              "start": {
                "column": 4,
                "line": 94
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isSupplies",
              "optional": false,
              "range": [
                1521,
                1531
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 95
                },
                "start": {
                  "column": 4,
                  "line": 95
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
                  "column": 41,
                  "line": 95
                },
                "start": {
                  "column": 16,
                  "line": 95
                }
              },
              "range": [
                1533,
                1558
              ],
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "asserts": false,
                "parameterName": {
                  "type": "TSThisType",
                  "range": [
                    1535,
                    1539
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 95
                    },
                    "start": {
                      "column": 18,
                      "line": 95
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 95
                    },
                    "start": {
                      "column": 26,
                      "line": 95
                    }
                  },
                  "range": [
                    1543,
                    1558
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1548,
                        1558
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Supplies",
                            "optional": false,
                            "range": [
                              1549,
                              1557
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 95
                              },
                              "start": {
                                "column": 32,
                                "line": 95
                              }
                            }
                          },
                          "range": [
                            1549,
                            1557
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 95
                            },
                            "start": {
                              "column": 32,
                              "line": 95
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 95
                        },
                        "start": {
                          "column": 31,
                          "line": 95
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Crate",
                      "optional": false,
                      "range": [
                        1543,
                        1548
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 95
                        },
                        "start": {
                          "column": 26,
                          "line": 95
                        }
                      }
                    },
                    "range": [
                      1543,
                      1558
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 95
                      },
                      "start": {
                        "column": 26,
                        "line": 95
                      }
                    }
                  }
                },
                "range": [
                  1535,
                  1558
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 95
                  },
                  "start": {
                    "column": 18,
                    "line": 95
                  }
                }
              }
            },
            "static": false,
            "range": [
              1521,
              1559
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 95
              },
              "start": {
                "column": 4,
                "line": 95
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isSundries",
              "optional": false,
              "range": [
                1564,
                1574
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 96
                },
                "start": {
                  "column": 4,
                  "line": 96
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
                  "column": 41,
                  "line": 96
                },
                "start": {
                  "column": 16,
                  "line": 96
                }
              },
              "range": [
                1576,
                1601
              ],
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "asserts": false,
                "parameterName": {
                  "type": "TSThisType",
                  "range": [
                    1578,
                    1582
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 96
                    },
                    "start": {
                      "column": 18,
                      "line": 96
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 96
                    },
                    "start": {
                      "column": 26,
                      "line": 96
                    }
                  },
                  "range": [
                    1586,
                    1601
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1591,
                        1601
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Sundries",
                            "optional": false,
                            "range": [
                              1592,
                              1600
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 96
                              },
                              "start": {
                                "column": 32,
                                "line": 96
                              }
                            }
                          },
                          "range": [
                            1592,
                            1600
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 96
                            },
                            "start": {
                              "column": 32,
                              "line": 96
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 96
                        },
                        "start": {
                          "column": 31,
                          "line": 96
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Crate",
                      "optional": false,
                      "range": [
                        1586,
                        1591
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 96
                        },
                        "start": {
                          "column": 26,
                          "line": 96
                        }
                      }
                    },
                    "range": [
                      1586,
                      1601
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 96
                      },
                      "start": {
                        "column": 26,
                        "line": 96
                      }
                    }
                  }
                },
                "range": [
                  1578,
                  1601
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 96
                  },
                  "start": {
                    "column": 18,
                    "line": 96
                  }
                }
              }
            },
            "static": false,
            "range": [
              1564,
              1602
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 96
              },
              "start": {
                "column": 4,
                "line": 96
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 97
          },
          "start": {
            "column": 19,
            "line": 92
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Crate",
        "optional": false,
        "range": [
          1469,
          1474
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 92
          },
          "start": {
            "column": 10,
            "line": 92
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 92
          },
          "start": {
            "column": 15,
            "line": 92
          }
        },
        "range": [
          1474,
          1477
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
                1475,
                1476
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 92
                },
                "start": {
                  "column": 16,
                  "line": 92
                }
              }
            },
            "out": false,
            "range": [
              1475,
              1476
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 92
              },
              "start": {
                "column": 16,
                "line": 92
              }
            }
          }
        ]
      },
      "range": [
        1459,
        1604
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 97
        },
        "start": {
          "column": 0,
          "line": 92
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
            "name": "crate",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 99
                },
                "start": {
                  "column": 9,
                  "line": 99
                }
              },
              "range": [
                1615,
                1626
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    1622,
                    1626
                  ],
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "range": [
                        1623,
                        1625
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 99
                        },
                        "start": {
                          "column": 17,
                          "line": 99
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 99
                    },
                    "start": {
                      "column": 16,
                      "line": 99
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Crate",
                  "optional": false,
                  "range": [
                    1617,
                    1622
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 99
                    },
                    "start": {
                      "column": 11,
                      "line": 99
                    }
                  }
                },
                "range": [
                  1617,
                  1626
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 99
                  },
                  "start": {
                    "column": 11,
                    "line": 99
                  }
                }
              }
            },
            "range": [
              1610,
              1626
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 99
              },
              "start": {
                "column": 4,
                "line": 99
              }
            }
          },
          "init": null,
          "range": [
            1610,
            1626
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 99
            },
            "start": {
              "column": 4,
              "line": 99
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        1606,
        1627
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 99
        },
        "start": {
          "column": 0,
          "line": 99
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
        "type": "IfStatement",
        "alternate": null,
        "consequent": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "crate",
                      "optional": false,
                      "range": [
                        1726,
                        1731
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 105
                        },
                        "start": {
                          "column": 4,
                          "line": 105
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "contents",
                      "optional": false,
                      "range": [
                        1732,
                        1740
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 105
                        },
                        "start": {
                          "column": 10,
                          "line": 105
                        }
                      }
                    },
                    "range": [
                      1726,
                      1740
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 105
                      },
                      "start": {
                        "column": 4,
                        "line": 105
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "spoiled",
                    "optional": false,
                    "range": [
                      1741,
                      1748
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 105
                      },
                      "start": {
                        "column": 19,
                        "line": 105
                      }
                    }
                  },
                  "range": [
                    1726,
                    1748
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 105
                    },
                    "start": {
                      "column": 4,
                      "line": 105
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    1751,
                    1755
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 105
                    },
                    "start": {
                      "column": 29,
                      "line": 105
                    }
                  }
                },
                "range": [
                  1726,
                  1755
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 105
                  },
                  "start": {
                    "column": 4,
                    "line": 105
                  }
                }
              },
              "range": [
                1726,
                1756
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 105
                },
                "start": {
                  "column": 4,
                  "line": 105
                }
              }
            }
          ],
          "range": [
            1720,
            1758
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 106
            },
            "start": {
              "column": 29,
              "line": 104
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
              "name": "crate",
              "optional": false,
              "range": [
                1700,
                1705
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 104
                },
                "start": {
                  "column": 9,
                  "line": 104
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "isSupplies",
              "optional": false,
              "range": [
                1706,
                1716
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 104
                },
                "start": {
                  "column": 15,
                  "line": 104
                }
              }
            },
            "range": [
              1700,
              1716
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 104
              },
              "start": {
                "column": 9,
                "line": 104
              }
            }
          },
          "optional": false,
          "range": [
            1700,
            1718
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 104
            },
            "start": {
              "column": 9,
              "line": 104
            }
          }
        },
        "range": [
          1696,
          1758
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 106
          },
          "start": {
            "column": 5,
            "line": 104
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
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "crate",
                    "optional": false,
                    "range": [
                      1659,
                      1664
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 102
                      },
                      "start": {
                        "column": 4,
                        "line": 102
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "contents",
                    "optional": false,
                    "range": [
                      1665,
                      1673
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 102
                      },
                      "start": {
                        "column": 10,
                        "line": 102
                      }
                    }
                  },
                  "range": [
                    1659,
                    1673
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 102
                    },
                    "start": {
                      "column": 4,
                      "line": 102
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "broken",
                  "optional": false,
                  "range": [
                    1674,
                    1680
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 102
                    },
                    "start": {
                      "column": 19,
                      "line": 102
                    }
                  }
                },
                "range": [
                  1659,
                  1680
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 102
                  },
                  "start": {
                    "column": 4,
                    "line": 102
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "true",
                "value": true,
                "range": [
                  1683,
                  1687
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 102
                  },
                  "start": {
                    "column": 28,
                    "line": 102
                  }
                }
              },
              "range": [
                1659,
                1687
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 102
                },
                "start": {
                  "column": 4,
                  "line": 102
                }
              }
            },
            "range": [
              1659,
              1688
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 102
              },
              "start": {
                "column": 4,
                "line": 102
              }
            }
          }
        ],
        "range": [
          1653,
          1690
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 103
          },
          "start": {
            "column": 24,
            "line": 101
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
            "name": "crate",
            "optional": false,
            "range": [
              1633,
              1638
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 101
              },
              "start": {
                "column": 4,
                "line": 101
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isSundries",
            "optional": false,
            "range": [
              1639,
              1649
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 101
              },
              "start": {
                "column": 10,
                "line": 101
              }
            }
          },
          "range": [
            1633,
            1649
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 101
            },
            "start": {
              "column": 4,
              "line": 101
            }
          }
        },
        "optional": false,
        "range": [
          1633,
          1651
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 101
          },
          "start": {
            "column": 4,
            "line": 101
          }
        }
      },
      "range": [
        1629,
        1758
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 106
        },
        "start": {
          "column": 0,
          "line": 101
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
              1801,
              1802
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 110
              },
              "start": {
                "column": 0,
                "line": 110
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
              1803,
              1813
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 110
              },
              "start": {
                "column": 2,
                "line": 110
              }
            }
          },
          "range": [
            1801,
            1813
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 110
            },
            "start": {
              "column": 0,
              "line": 110
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
              1816,
              1817
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 110
              },
              "start": {
                "column": 15,
                "line": 110
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
              1818,
              1828
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 110
              },
              "start": {
                "column": 17,
                "line": 110
              }
            }
          },
          "range": [
            1816,
            1828
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 110
            },
            "start": {
              "column": 15,
              "line": 110
            }
          }
        },
        "range": [
          1801,
          1828
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 110
          },
          "start": {
            "column": 0,
            "line": 110
          }
        }
      },
      "range": [
        1801,
        1829
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 110
        },
        "start": {
          "column": 0,
          "line": 110
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
              1830,
              1831
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 111
              },
              "start": {
                "column": 0,
                "line": 111
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
              1832,
              1840
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 111
              },
              "start": {
                "column": 2,
                "line": 111
              }
            }
          },
          "range": [
            1830,
            1840
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 111
            },
            "start": {
              "column": 0,
              "line": 111
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
              1843,
              1844
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 111
              },
              "start": {
                "column": 13,
                "line": 111
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
              1845,
              1853
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 111
              },
              "start": {
                "column": 15,
                "line": 111
              }
            }
          },
          "range": [
            1843,
            1853
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 111
            },
            "start": {
              "column": 13,
              "line": 111
            }
          }
        },
        "range": [
          1830,
          1853
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 111
          },
          "start": {
            "column": 0,
            "line": 111
          }
        }
      },
      "range": [
        1830,
        1854
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 111
        },
        "start": {
          "column": 0,
          "line": 111
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1873,
          2036
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
                1879,
                1887
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 114
                },
                "start": {
                  "column": 4,
                  "line": 114
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
                1887,
                1950
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
                          1920,
                          1924
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 114
                          },
                          "start": {
                            "column": 45,
                            "line": 114
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MimicLeader",
                        "optional": false,
                        "range": [
                          1936,
                          1947
                        ],
                        "loc": {
                          "end": {
                            "column": 72,
                            "line": 114
                          },
                          "start": {
                            "column": 61,
                            "line": 114
                          }
                        }
                      },
                      "range": [
                        1920,
                        1947
                      ],
                      "loc": {
                        "end": {
                          "column": 72,
                          "line": 114
                        },
                        "start": {
                          "column": 45,
                          "line": 114
                        }
                      }
                    },
                    "range": [
                      1913,
                      1948
                    ],
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 114
                      },
                      "start": {
                        "column": 38,
                        "line": 114
                      }
                    }
                  }
                ],
                "range": [
                  1911,
                  1950
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 114
                  },
                  "start": {
                    "column": 36,
                    "line": 114
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
                    "column": 35,
                    "line": 114
                  },
                  "start": {
                    "column": 14,
                    "line": 114
                  }
                },
                "range": [
                  1889,
                  1910
                ],
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "asserts": false,
                  "parameterName": {
                    "type": "TSThisType",
                    "range": [
                      1891,
                      1895
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 114
                      },
                      "start": {
                        "column": 16,
                        "line": 114
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 114
                      },
                      "start": {
                        "column": 24,
                        "line": 114
                      }
                    },
                    "range": [
                      1899,
                      1910
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MimicLeader",
                        "optional": false,
                        "range": [
                          1899,
                          1910
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 114
                          },
                          "start": {
                            "column": 24,
                            "line": 114
                          }
                        }
                      },
                      "range": [
                        1899,
                        1910
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 114
                        },
                        "start": {
                          "column": 24,
                          "line": 114
                        }
                      }
                    }
                  },
                  "range": [
                    1891,
                    1910
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 114
                    },
                    "start": {
                      "column": 16,
                      "line": 114
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 75,
                  "line": 114
                },
                "start": {
                  "column": 12,
                  "line": 114
                }
              }
            },
            "range": [
              1879,
              1950
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 114
              },
              "start": {
                "column": 4,
                "line": 114
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
                1956,
                1966
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 115
                },
                "start": {
                  "column": 4,
                  "line": 115
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
                1966,
                2033
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
                          2001,
                          2005
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 115
                          },
                          "start": {
                            "column": 49,
                            "line": 115
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MimicFollower",
                        "optional": false,
                        "range": [
                          2017,
                          2030
                        ],
                        "loc": {
                          "end": {
                            "column": 78,
                            "line": 115
                          },
                          "start": {
                            "column": 65,
                            "line": 115
                          }
                        }
                      },
                      "range": [
                        2001,
                        2030
                      ],
                      "loc": {
                        "end": {
                          "column": 78,
                          "line": 115
                        },
                        "start": {
                          "column": 49,
                          "line": 115
                        }
                      }
                    },
                    "range": [
                      1994,
                      2031
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 115
                      },
                      "start": {
                        "column": 42,
                        "line": 115
                      }
                    }
                  }
                ],
                "range": [
                  1992,
                  2033
                ],
                "loc": {
                  "end": {
                    "column": 81,
                    "line": 115
                  },
                  "start": {
                    "column": 40,
                    "line": 115
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
                    "line": 115
                  },
                  "start": {
                    "column": 16,
                    "line": 115
                  }
                },
                "range": [
                  1968,
                  1991
                ],
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "asserts": false,
                  "parameterName": {
                    "type": "TSThisType",
                    "range": [
                      1970,
                      1974
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 115
                      },
                      "start": {
                        "column": 18,
                        "line": 115
                      }
                    }
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 115
                      },
                      "start": {
                        "column": 26,
                        "line": 115
                      }
                    },
                    "range": [
                      1978,
                      1991
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MimicFollower",
                        "optional": false,
                        "range": [
                          1978,
                          1991
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 115
                          },
                          "start": {
                            "column": 26,
                            "line": 115
                          }
                        }
                      },
                      "range": [
                        1978,
                        1991
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 115
                        },
                        "start": {
                          "column": 26,
                          "line": 115
                        }
                      }
                    }
                  },
                  "range": [
                    1970,
                    1991
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 115
                    },
                    "start": {
                      "column": 18,
                      "line": 115
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 81,
                  "line": 115
                },
                "start": {
                  "column": 14,
                  "line": 115
                }
              }
            },
            "range": [
              1956,
              2033
            ],
            "loc": {
              "end": {
                "column": 81,
                "line": 115
              },
              "start": {
                "column": 4,
                "line": 115
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 116
          },
          "start": {
            "column": 17,
            "line": 113
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MimicGuard",
        "optional": false,
        "range": [
          1862,
          1872
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 113
          },
          "start": {
            "column": 6,
            "line": 113
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1856,
        2036
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 116
        },
        "start": {
          "column": 0,
          "line": 113
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          2075,
          2098
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
                2081,
                2085
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 119
                },
                "start": {
                  "column": 4,
                  "line": 119
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
                2085,
                2096
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  2094,
                  2096
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 119
                  },
                  "start": {
                    "column": 17,
                    "line": 119
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
                    "line": 119
                  },
                  "start": {
                    "column": 10,
                    "line": 119
                  }
                },
                "range": [
                  2087,
                  2093
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    2089,
                    2093
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 119
                    },
                    "start": {
                      "column": 12,
                      "line": 119
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 19,
                  "line": 119
                },
                "start": {
                  "column": 8,
                  "line": 119
                }
              }
            },
            "range": [
              2081,
              2096
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 119
              },
              "start": {
                "column": 4,
                "line": 119
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 120
          },
          "start": {
            "column": 37,
            "line": 118
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MimicLeader",
        "optional": false,
        "range": [
          2044,
          2055
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 118
          },
          "start": {
            "column": 6,
            "line": 118
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "MimicGuard",
        "optional": false,
        "range": [
          2064,
          2074
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 118
          },
          "start": {
            "column": 26,
            "line": 118
          }
        }
      },
      "range": [
        2038,
        2098
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 120
        },
        "start": {
          "column": 0,
          "line": 118
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          2139,
          2164
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
                2145,
                2151
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 123
                },
                "start": {
                  "column": 4,
                  "line": 123
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
                2151,
                2162
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  2160,
                  2162
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 123
                  },
                  "start": {
                    "column": 19,
                    "line": 123
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
                    "line": 123
                  },
                  "start": {
                    "column": 12,
                    "line": 123
                  }
                },
                "range": [
                  2153,
                  2159
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    2155,
                    2159
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 123
                    },
                    "start": {
                      "column": 14,
                      "line": 123
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 21,
                  "line": 123
                },
                "start": {
                  "column": 10,
                  "line": 123
                }
              }
            },
            "range": [
              2145,
              2162
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 123
              },
              "start": {
                "column": 4,
                "line": 123
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 124
          },
          "start": {
            "column": 39,
            "line": 122
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MimicFollower",
        "optional": false,
        "range": [
          2106,
          2119
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 122
          },
          "start": {
            "column": 6,
            "line": 122
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "MimicGuard",
        "optional": false,
        "range": [
          2128,
          2138
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 122
          },
          "start": {
            "column": 28,
            "line": 122
          }
        }
      },
      "range": [
        2100,
        2164
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 124
        },
        "start": {
          "column": 0,
          "line": 122
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
            "name": "mimic",
            "optional": false,
            "range": [
              2170,
              2175
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 126
              },
              "start": {
                "column": 4,
                "line": 126
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "MimicGuard",
              "optional": false,
              "range": [
                2182,
                2192
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 126
                },
                "start": {
                  "column": 16,
                  "line": 126
                }
              }
            },
            "range": [
              2178,
              2194
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 126
              },
              "start": {
                "column": 12,
                "line": 126
              }
            }
          },
          "range": [
            2170,
            2194
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 126
            },
            "start": {
              "column": 4,
              "line": 126
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        2166,
        2195
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 126
        },
        "start": {
          "column": 0,
          "line": 126
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
              2197,
              2198
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 128
              },
              "start": {
                "column": 0,
                "line": 128
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
              2199,
              2207
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 128
              },
              "start": {
                "column": 2,
                "line": 128
              }
            }
          },
          "range": [
            2197,
            2207
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 128
            },
            "start": {
              "column": 0,
              "line": 128
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "mimic",
            "optional": false,
            "range": [
              2210,
              2215
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 128
              },
              "start": {
                "column": 13,
                "line": 128
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
              2216,
              2224
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 128
              },
              "start": {
                "column": 19,
                "line": 128
              }
            }
          },
          "range": [
            2210,
            2224
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 128
            },
            "start": {
              "column": 13,
              "line": 128
            }
          }
        },
        "range": [
          2197,
          2224
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 128
          },
          "start": {
            "column": 0,
            "line": 128
          }
        }
      },
      "range": [
        2197,
        2225
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 128
        },
        "start": {
          "column": 0,
          "line": 128
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
              2226,
              2227
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 129
              },
              "start": {
                "column": 0,
                "line": 129
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
              2228,
              2238
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 129
              },
              "start": {
                "column": 2,
                "line": 129
              }
            }
          },
          "range": [
            2226,
            2238
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 129
            },
            "start": {
              "column": 0,
              "line": 129
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "mimic",
            "optional": false,
            "range": [
              2241,
              2246
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 129
              },
              "start": {
                "column": 15,
                "line": 129
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
              2247,
              2257
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 129
              },
              "start": {
                "column": 21,
                "line": 129
              }
            }
          },
          "range": [
            2241,
            2257
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 129
            },
            "start": {
              "column": 15,
              "line": 129
            }
          }
        },
        "range": [
          2226,
          2257
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 129
          },
          "start": {
            "column": 0,
            "line": 129
          }
        }
      },
      "range": [
        2226,
        2258
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 129
        },
        "start": {
          "column": 0,
          "line": 129
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
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "mimic",
                  "optional": false,
                  "range": [
                    2290,
                    2295
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 132
                    },
                    "start": {
                      "column": 4,
                      "line": 132
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
                    2296,
                    2302
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 132
                    },
                    "start": {
                      "column": 10,
                      "line": 132
                    }
                  }
                },
                "range": [
                  2290,
                  2302
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 132
                  },
                  "start": {
                    "column": 4,
                    "line": 132
                  }
                }
              },
              "optional": false,
              "range": [
                2290,
                2304
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 132
                },
                "start": {
                  "column": 4,
                  "line": 132
                }
              }
            },
            "range": [
              2290,
              2305
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 132
              },
              "start": {
                "column": 4,
                "line": 132
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
                  "name": "mimic",
                  "optional": false,
                  "range": [
                    2310,
                    2315
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 133
                    },
                    "start": {
                      "column": 4,
                      "line": 133
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
                    2316,
                    2326
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 133
                    },
                    "start": {
                      "column": 10,
                      "line": 133
                    }
                  }
                },
                "range": [
                  2310,
                  2326
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 133
                  },
                  "start": {
                    "column": 4,
                    "line": 133
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
                    2329,
                    2330
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 133
                    },
                    "start": {
                      "column": 23,
                      "line": 133
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
                    2331,
                    2341
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 133
                    },
                    "start": {
                      "column": 25,
                      "line": 133
                    }
                  }
                },
                "range": [
                  2329,
                  2341
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 133
                  },
                  "start": {
                    "column": 23,
                    "line": 133
                  }
                }
              },
              "range": [
                2310,
                2341
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 133
                },
                "start": {
                  "column": 4,
                  "line": 133
                }
              }
            },
            "range": [
              2310,
              2342
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 133
              },
              "start": {
                "column": 4,
                "line": 133
              }
            }
          }
        ],
        "range": [
          2284,
          2344
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 134
          },
          "start": {
            "column": 24,
            "line": 131
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
            "name": "mimic",
            "optional": false,
            "range": [
              2264,
              2269
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 131
              },
              "start": {
                "column": 4,
                "line": 131
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
              2270,
              2280
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 131
              },
              "start": {
                "column": 10,
                "line": 131
              }
            }
          },
          "range": [
            2264,
            2280
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 131
            },
            "start": {
              "column": 4,
              "line": 131
            }
          }
        },
        "optional": false,
        "range": [
          2264,
          2282
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 131
          },
          "start": {
            "column": 4,
            "line": 131
          }
        }
      },
      "range": [
        2260,
        2344
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 134
        },
        "start": {
          "column": 0,
          "line": 131
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          2377,
          2456
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isLeader",
              "optional": false,
              "range": [
                2383,
                2391
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 138
                },
                "start": {
                  "column": 4,
                  "line": 138
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
                  "column": 33,
                  "line": 138
                },
                "start": {
                  "column": 14,
                  "line": 138
                }
              },
              "range": [
                2393,
                2412
              ],
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "asserts": false,
                "parameterName": {
                  "type": "TSThisType",
                  "range": [
                    2395,
                    2399
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 138
                    },
                    "start": {
                      "column": 16,
                      "line": 138
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 138
                    },
                    "start": {
                      "column": 24,
                      "line": 138
                    }
                  },
                  "range": [
                    2403,
                    2412
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LeadGuard",
                      "optional": false,
                      "range": [
                        2403,
                        2412
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 138
                        },
                        "start": {
                          "column": 24,
                          "line": 138
                        }
                      }
                    },
                    "range": [
                      2403,
                      2412
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 138
                      },
                      "start": {
                        "column": 24,
                        "line": 138
                      }
                    }
                  }
                },
                "range": [
                  2395,
                  2412
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 138
                  },
                  "start": {
                    "column": 16,
                    "line": 138
                  }
                }
              }
            },
            "static": false,
            "range": [
              2383,
              2413
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 138
              },
              "start": {
                "column": 4,
                "line": 138
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isFollower",
              "optional": false,
              "range": [
                2418,
                2428
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 139
                },
                "start": {
                  "column": 4,
                  "line": 139
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
                  "column": 39,
                  "line": 139
                },
                "start": {
                  "column": 16,
                  "line": 139
                }
              },
              "range": [
                2430,
                2453
              ],
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "asserts": false,
                "parameterName": {
                  "type": "TSThisType",
                  "range": [
                    2432,
                    2436
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 139
                    },
                    "start": {
                      "column": 18,
                      "line": 139
                    }
                  }
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 139
                    },
                    "start": {
                      "column": 26,
                      "line": 139
                    }
                  },
                  "range": [
                    2440,
                    2453
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FollowerGuard",
                      "optional": false,
                      "range": [
                        2440,
                        2453
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 139
                        },
                        "start": {
                          "column": 26,
                          "line": 139
                        }
                      }
                    },
                    "range": [
                      2440,
                      2453
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 139
                      },
                      "start": {
                        "column": 26,
                        "line": 139
                      }
                    }
                  }
                },
                "range": [
                  2432,
                  2453
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 139
                  },
                  "start": {
                    "column": 18,
                    "line": 139
                  }
                }
              }
            },
            "static": false,
            "range": [
              2418,
              2454
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 139
              },
              "start": {
                "column": 4,
                "line": 139
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 140
          },
          "start": {
            "column": 30,
            "line": 137
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MimicGuardInterface",
        "optional": false,
        "range": [
          2357,
          2376
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 137
          },
          "start": {
            "column": 10,
            "line": 137
          }
        }
      },
      "range": [
        2347,
        2456
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 140
        },
        "start": {
          "column": 0,
          "line": 137
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 141
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
