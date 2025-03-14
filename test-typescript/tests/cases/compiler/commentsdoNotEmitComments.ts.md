__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    24,
    1578
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
            "name": "myVariable",
            "optional": false,
            "range": [
              28,
              38
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "10",
            "value": 10,
            "range": [
              41,
              43
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 2
              },
              "start": {
                "column": 17,
                "line": 2
              }
            }
          },
          "range": [
            28,
            43
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        24,
        44
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          117,
          120
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 47,
            "line": 5
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          79,
          82
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 45,
                "line": 5
              },
              "start": {
                "column": 37,
                "line": 5
              }
            },
            "range": [
              107,
              115
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                109,
                115
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 5
                },
                "start": {
                  "column": 39,
                  "line": 5
                }
              }
            }
          },
          "range": [
            106,
            115
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 5
            },
            "start": {
              "column": 36,
              "line": 5
            }
          }
        }
      ],
      "range": [
        70,
        120
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 5
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
            "name": "fooVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 9
                },
                "start": {
                  "column": 10,
                  "line": 9
                }
              },
              "range": [
                174,
                186
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 9
                    },
                    "start": {
                      "column": 15,
                      "line": 9
                    }
                  },
                  "range": [
                    179,
                    186
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      182,
                      186
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 9
                      },
                      "start": {
                        "column": 18,
                        "line": 9
                      }
                    }
                  }
                },
                "range": [
                  176,
                  186
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 9
                  },
                  "start": {
                    "column": 12,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              168,
              186
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          "init": null,
          "range": [
            168,
            186
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 9
            },
            "start": {
              "column": 4,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        164,
        187
      ],
      "loc": {
        "end": {
          "column": 23,
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "50",
            "value": 50,
            "range": [
              192,
              194
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            188,
            191
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 10
            },
            "start": {
              "column": 0,
              "line": 10
            }
          }
        },
        "optional": false,
        "range": [
          188,
          195
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        188,
        196
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooVar",
          "optional": false,
          "range": [
            197,
            203
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 11
            },
            "start": {
              "column": 0,
              "line": 11
            }
          }
        },
        "optional": false,
        "range": [
          197,
          205
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        197,
        206
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
          831
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                271,
                282
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                282,
                292
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  285,
                  292
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 17
                  },
                  "start": {
                    "column": 18,
                    "line": 16
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
                  "column": 5,
                  "line": 17
                },
                "start": {
                  "column": 15,
                  "line": 16
                }
              }
            },
            "range": [
              271,
              292
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                333,
                334
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 20
                },
                "start": {
                  "column": 11,
                  "line": 20
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "10",
              "value": 10,
              "range": [
                337,
                339
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 20
                },
                "start": {
                  "column": 15,
                  "line": 20
                }
              }
            },
            "range": [
              326,
              340
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myFoo",
              "optional": false,
              "range": [
                381,
                386
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 23
                },
                "start": {
                  "column": 11,
                  "line": 23
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
                386,
                419
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "range": [
                          406,
                          410
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 24
                          },
                          "start": {
                            "column": 15,
                            "line": 24
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
                          411,
                          412
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 24
                          },
                          "start": {
                            "column": 20,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        406,
                        412
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 24
                        },
                        "start": {
                          "column": 15,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      399,
                      413
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 24
                      },
                      "start": {
                        "column": 8,
                        "line": 24
                      }
                    }
                  }
                ],
                "range": [
                  389,
                  419
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 25
                  },
                  "start": {
                    "column": 19,
                    "line": 23
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
                  "column": 5,
                  "line": 25
                },
                "start": {
                  "column": 16,
                  "line": 23
                }
              }
            },
            "range": [
              374,
              419
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "range": [
                461,
                466
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 28
                },
                "start": {
                  "column": 15,
                  "line": 28
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                466,
                499
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "range": [
                          486,
                          490
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 29
                          },
                          "start": {
                            "column": 15,
                            "line": 29
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
                          491,
                          492
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 29
                          },
                          "start": {
                            "column": 20,
                            "line": 29
                          }
                        }
                      },
                      "range": [
                        486,
                        492
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 29
                        },
                        "start": {
                          "column": 15,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      479,
                      493
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 29
                      },
                      "start": {
                        "column": 8,
                        "line": 29
                      }
                    }
                  }
                ],
                "range": [
                  469,
                  499
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 30
                  },
                  "start": {
                    "column": 23,
                    "line": 28
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
                  "column": 5,
                  "line": 30
                },
                "start": {
                  "column": 20,
                  "line": 28
                }
              }
            },
            "range": [
              450,
              499
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "range": [
                541,
                546
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 33
                },
                "start": {
                  "column": 15,
                  "line": 33
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                546,
                589
              ],
              "async": false,
              "body": {
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
                          "type": "ThisExpression",
                          "range": [
                            570,
                            574
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 34
                            },
                            "start": {
                              "column": 8,
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
                            575,
                            576
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 34
                            },
                            "start": {
                              "column": 13,
                              "line": 34
                            }
                          }
                        },
                        "range": [
                          570,
                          576
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 34
                          },
                          "start": {
                            "column": 8,
                            "line": 34
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "range": [
                          579,
                          582
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 34
                          },
                          "start": {
                            "column": 17,
                            "line": 34
                          }
                        }
                      },
                      "range": [
                        570,
                        582
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 34
                        },
                        "start": {
                          "column": 8,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      570,
                      583
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 34
                      },
                      "start": {
                        "column": 8,
                        "line": 34
                      }
                    }
                  }
                ],
                "range": [
                  560,
                  589
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 35
                  },
                  "start": {
                    "column": 34,
                    "line": 33
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
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 33
                      },
                      "start": {
                        "column": 24,
                        "line": 33
                      }
                    },
                    "range": [
                      550,
                      558
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        552,
                        558
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 33
                        },
                        "start": {
                          "column": 26,
                          "line": 33
                        }
                      }
                    }
                  },
                  "range": [
                    547,
                    558
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 33
                    },
                    "start": {
                      "column": 21,
                      "line": 33
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 35
                },
                "start": {
                  "column": 20,
                  "line": 33
                }
              }
            },
            "range": [
              530,
              589
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
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "range": [
                632,
                636
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 38
                },
                "start": {
                  "column": 11,
                  "line": 38
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                636,
                656
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                        "column": 25,
                        "line": 38
                      },
                      "start": {
                        "column": 17,
                        "line": 38
                      }
                    },
                    "range": [
                      638,
                      646
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        640,
                        646
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 38
                        },
                        "start": {
                          "column": 19,
                          "line": 38
                        }
                      }
                    }
                  },
                  "range": [
                    637,
                    646
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 38
                    },
                    "start": {
                      "column": 16,
                      "line": 38
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 38
                  },
                  "start": {
                    "column": 26,
                    "line": 38
                  }
                },
                "range": [
                  647,
                  655
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    649,
                    655
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 38
                    },
                    "start": {
                      "column": 28,
                      "line": 38
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 35,
                  "line": 38
                },
                "start": {
                  "column": 15,
                  "line": 38
                }
              }
            },
            "range": [
              625,
              656
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "range": [
                699,
                703
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 40
                },
                "start": {
                  "column": 11,
                  "line": 40
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                703,
                723
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 40
                      },
                      "start": {
                        "column": 17,
                        "line": 40
                      }
                    },
                    "range": [
                      705,
                      713
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        707,
                        713
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 40
                        },
                        "start": {
                          "column": 19,
                          "line": 40
                        }
                      }
                    }
                  },
                  "range": [
                    704,
                    713
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 40
                    },
                    "start": {
                      "column": 16,
                      "line": 40
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 40
                  },
                  "start": {
                    "column": 26,
                    "line": 40
                  }
                },
                "range": [
                  714,
                  722
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    716,
                    722
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 40
                    },
                    "start": {
                      "column": 28,
                      "line": 40
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 35,
                  "line": 40
                },
                "start": {
                  "column": 15,
                  "line": 40
                }
              }
            },
            "range": [
              692,
              723
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "range": [
                779,
                783
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 42
                },
                "start": {
                  "column": 11,
                  "line": 42
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
                783,
                829
              ],
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
                          "name": "aOrb",
                          "optional": false,
                          "range": [
                            807,
                            811
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 43
                            },
                            "start": {
                              "column": 15,
                              "line": 43
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "range": [
                            812,
                            820
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 43
                            },
                            "start": {
                              "column": 20,
                              "line": 43
                            }
                          }
                        },
                        "range": [
                          807,
                          820
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 43
                          },
                          "start": {
                            "column": 15,
                            "line": 43
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        807,
                        822
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 43
                        },
                        "start": {
                          "column": 15,
                          "line": 43
                        }
                      }
                    },
                    "range": [
                      800,
                      823
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 43
                      },
                      "start": {
                        "column": 8,
                        "line": 43
                      }
                    }
                  }
                ],
                "range": [
                  790,
                  829
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 44
                  },
                  "start": {
                    "column": 22,
                    "line": 42
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
                  "name": "aOrb",
                  "optional": false,
                  "range": [
                    784,
                    788
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 42
                    },
                    "start": {
                      "column": 16,
                      "line": 42
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 44
                },
                "start": {
                  "column": 15,
                  "line": 42
                }
              }
            },
            "range": [
              772,
              829
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 44
              },
              "start": {
                "column": 4,
                "line": 42
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
        "name": "c",
        "optional": false,
        "range": [
          233,
          234
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
        227,
        831
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 45
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
            "name": "i",
            "optional": false,
            "range": [
              859,
              860
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
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "range": [
                867,
                868
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 48
                },
                "start": {
                  "column": 12,
                  "line": 48
                }
              }
            },
            "range": [
              863,
              870
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 48
              },
              "start": {
                "column": 8,
                "line": 48
              }
            }
          },
          "range": [
            859,
            870
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 48
            },
            "start": {
              "column": 4,
              "line": 48
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        855,
        871
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 48
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          911,
          1170
        ],
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
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
                      "column": 14,
                      "line": 53
                    },
                    "start": {
                      "column": 6,
                      "line": 53
                    }
                  },
                  "range": [
                    945,
                    953
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      947,
                      953
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 53
                      },
                      "start": {
                        "column": 8,
                        "line": 53
                      }
                    }
                  }
                },
                "range": [
                  944,
                  953
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 53
                  },
                  "start": {
                    "column": 5,
                    "line": 53
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 53
                },
                "start": {
                  "column": 15,
                  "line": 53
                }
              },
              "range": [
                954,
                962
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  956,
                  962
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 53
                  },
                  "start": {
                    "column": 17,
                    "line": 53
                  }
                }
              }
            },
            "range": [
              943,
              963
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 53
              }
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 56
                    },
                    "start": {
                      "column": 10,
                      "line": 56
                    }
                  },
                  "range": [
                    998,
                    1006
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      1000,
                      1006
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 56
                      },
                      "start": {
                        "column": 12,
                        "line": 56
                      }
                    }
                  }
                },
                "range": [
                  997,
                  1006
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 56
                  },
                  "start": {
                    "column": 9,
                    "line": 56
                  }
                }
              }
            ],
            "range": [
              992,
              1008
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 56
              },
              "start": {
                "column": 4,
                "line": 56
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 59
                    },
                    "start": {
                      "column": 6,
                      "line": 59
                    }
                  },
                  "range": [
                    1042,
                    1050
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      1044,
                      1050
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 59
                      },
                      "start": {
                        "column": 8,
                        "line": 59
                      }
                    }
                  }
                },
                "range": [
                  1041,
                  1050
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 59
                  },
                  "start": {
                    "column": 5,
                    "line": 59
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 59
                },
                "start": {
                  "column": 15,
                  "line": 59
                }
              },
              "range": [
                1051,
                1059
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1053,
                  1059
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 59
                  },
                  "start": {
                    "column": 17,
                    "line": 59
                  }
                }
              }
            },
            "range": [
              1040,
              1060
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 59
              },
              "start": {
                "column": 4,
                "line": 59
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myFoo",
              "optional": false,
              "range": [
                1095,
                1100
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 62
                },
                "start": {
                  "column": 4,
                  "line": 62
                }
              }
            },
            "kind": "method",
            "optional": false,
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
                      "column": 33,
                      "line": 62
                    },
                    "start": {
                      "column": 25,
                      "line": 62
                    }
                  },
                  "range": [
                    1116,
                    1124
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      1118,
                      1124
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
                },
                "range": [
                  1115,
                  1124
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 62
                  },
                  "start": {
                    "column": 24,
                    "line": 62
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 42,
                  "line": 62
                },
                "start": {
                  "column": 34,
                  "line": 62
                }
              },
              "range": [
                1125,
                1133
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1127,
                  1133
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 62
                  },
                  "start": {
                    "column": 36,
                    "line": 62
                  }
                }
              }
            },
            "static": false,
            "range": [
              1095,
              1134
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 62
              },
              "start": {
                "column": 4,
                "line": 62
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "range": [
                1155,
                1159
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 65
                },
                "start": {
                  "column": 4,
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
                  "column": 16,
                  "line": 65
                },
                "start": {
                  "column": 8,
                  "line": 65
                }
              },
              "range": [
                1159,
                1167
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1161,
                  1167
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 65
                  },
                  "start": {
                    "column": 10,
                    "line": 65
                  }
                }
              }
            },
            "range": [
              1155,
              1168
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 65
              },
              "start": {
                "column": 4,
                "line": 65
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
            "column": 13,
            "line": 51
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i1",
        "optional": false,
        "range": [
          908,
          910
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 51
          },
          "start": {
            "column": 10,
            "line": 51
          }
        }
      },
      "range": [
        898,
        1170
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 66
        },
        "start": {
          "column": 0,
          "line": 51
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
            "name": "i1_i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 12,
                  "line": 69
                },
                "start": {
                  "column": 8,
                  "line": 69
                }
              },
              "range": [
                1213,
                1217
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i1",
                  "optional": false,
                  "range": [
                    1215,
                    1217
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 69
                    },
                    "start": {
                      "column": 10,
                      "line": 69
                    }
                  }
                },
                "range": [
                  1215,
                  1217
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 69
                  },
                  "start": {
                    "column": 10,
                    "line": 69
                  }
                }
              }
            },
            "range": [
              1209,
              1217
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 69
              },
              "start": {
                "column": 4,
                "line": 69
              }
            }
          },
          "init": null,
          "range": [
            1209,
            1217
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 69
            },
            "start": {
              "column": 4,
              "line": 69
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1205,
        1218
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 69
        },
        "start": {
          "column": 0,
          "line": 69
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              1284,
              1368
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  1299,
                  1368
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "range": [
                        1309,
                        1320
                      ],
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 75
                        },
                        "start": {
                          "column": 8,
                          "line": 75
                        }
                      }
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "range": [
                        1320,
                        1362
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          1339,
                          1362
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 77
                          },
                          "start": {
                            "column": 38,
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
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 75
                                },
                                "start": {
                                  "column": 28,
                                  "line": 75
                                }
                              },
                              "range": [
                                1329,
                                1337
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  1331,
                                  1337
                                ],
                                "loc": {
                                  "end": {
                                    "column": 36,
                                    "line": 75
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 75
                                  }
                                }
                              }
                            },
                            "range": [
                              1328,
                              1337
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 75
                              },
                              "start": {
                                "column": 27,
                                "line": 75
                              }
                            }
                          },
                          "readonly": false,
                          "static": false,
                          "range": [
                            1321,
                            1337
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 75
                            },
                            "start": {
                              "column": 20,
                              "line": 75
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 77
                        },
                        "start": {
                          "column": 19,
                          "line": 75
                        }
                      }
                    },
                    "range": [
                      1309,
                      1362
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 77
                      },
                      "start": {
                        "column": 8,
                        "line": 75
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 78
                  },
                  "start": {
                    "column": 19,
                    "line": 74
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  1297,
                  1298
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 74
                  },
                  "start": {
                    "column": 17,
                    "line": 74
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                1291,
                1368
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 78
                },
                "start": {
                  "column": 11,
                  "line": 74
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 78
              },
              "start": {
                "column": 4,
                "line": 74
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              1392,
              1416
            ],
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "body": {
                "type": "TSModuleBlock",
                "body": [],
                "range": [
                  1409,
                  1416
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 82
                  },
                  "start": {
                    "column": 21,
                    "line": 81
                  }
                }
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "range": [
                  1406,
                  1408
                ],
                "decorators": [],
                "name": "m2",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 81
                  },
                  "start": {
                    "column": 18,
                    "line": 81
                  }
                }
              },
              "kind": "module",
              "range": [
                1399,
                1416
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 82
                },
                "start": {
                  "column": 11,
                  "line": 81
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 82
              },
              "start": {
                "column": 4,
                "line": 81
              }
            }
          }
        ],
        "range": [
          1259,
          1418
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 83
          },
          "start": {
            "column": 10,
            "line": 72
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          1256,
          1258
        ],
        "decorators": [],
        "name": "m1",
        "optional": false,
        "loc": {
          "end": {
            "column": 9,
            "line": 72
          },
          "start": {
            "column": 7,
            "line": 72
          }
        }
      },
      "kind": "module",
      "range": [
        1249,
        1418
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 83
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
            "name": "x",
            "optional": false,
            "range": [
              1446,
              1447
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 86
              },
              "start": {
                "column": 12,
                "line": 86
              }
            }
          },
          "init": null,
          "range": [
            1446,
            1447
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 86
            },
            "start": {
              "column": 12,
              "line": 86
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        1434,
        1448
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 86
        },
        "start": {
          "column": 0,
          "line": 86
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          1525,
          1545
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "red",
              "optional": false,
              "range": [
                1527,
                1530
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 90
                },
                "start": {
                  "column": 19,
                  "line": 90
                }
              }
            },
            "range": [
              1527,
              1530
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 90
              },
              "start": {
                "column": 19,
                "line": 90
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "green",
              "optional": false,
              "range": [
                1532,
                1537
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 90
                },
                "start": {
                  "column": 24,
                  "line": 90
                }
              }
            },
            "range": [
              1532,
              1537
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 90
              },
              "start": {
                "column": 24,
                "line": 90
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "blue",
              "optional": false,
              "range": [
                1539,
                1543
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 90
                },
                "start": {
                  "column": 31,
                  "line": 90
                }
              }
            },
            "range": [
              1539,
              1543
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 90
              },
              "start": {
                "column": 31,
                "line": 90
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 90
          },
          "start": {
            "column": 17,
            "line": 90
          }
        }
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "color",
        "optional": false,
        "range": [
          1519,
          1524
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 90
          },
          "start": {
            "column": 11,
            "line": 90
          }
        }
      },
      "range": [
        1508,
        1545
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 90
        },
        "start": {
          "column": 0,
          "line": 90
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
            "name": "shade",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 91
                },
                "start": {
                  "column": 9,
                  "line": 91
                }
              },
              "range": [
                1555,
                1562
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "color",
                  "optional": false,
                  "range": [
                    1557,
                    1562
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 91
                    },
                    "start": {
                      "column": 11,
                      "line": 91
                    }
                  }
                },
                "range": [
                  1557,
                  1562
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 91
                  },
                  "start": {
                    "column": 11,
                    "line": 91
                  }
                }
              }
            },
            "range": [
              1550,
              1562
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 91
              },
              "start": {
                "column": 4,
                "line": 91
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "color",
              "optional": false,
              "range": [
                1565,
                1570
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 91
                },
                "start": {
                  "column": 19,
                  "line": 91
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "green",
              "optional": false,
              "range": [
                1571,
                1576
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 91
                },
                "start": {
                  "column": 25,
                  "line": 91
                }
              }
            },
            "range": [
              1565,
              1576
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 91
              },
              "start": {
                "column": 19,
                "line": 91
              }
            }
          },
          "range": [
            1550,
            1576
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 91
            },
            "start": {
              "column": 4,
              "line": 91
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1546,
        1577
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 91
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
      "line": 92
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
