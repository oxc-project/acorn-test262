__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    914
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          193
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "\"Yadda\"",
                      "value": "Yadda",
                      "range": [
                        33,
                        40
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 2
                        },
                        "start": {
                          "column": 23,
                          "line": 2
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "true",
                      "value": true,
                      "range": [
                        52,
                        56
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 2
                        },
                        "start": {
                          "column": 42,
                          "line": 2
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "boundMethodLogger",
                    "optional": false,
                    "range": [
                      15,
                      32
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 2
                      },
                      "start": {
                        "column": 5,
                        "line": 2
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    15,
                    57
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 2
                    },
                    "start": {
                      "column": 5,
                      "line": 2
                    }
                  }
                },
                "range": [
                  14,
                  57
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 2
                  },
                  "start": {
                    "column": 4,
                    "line": 2
                  }
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                62,
                65
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
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
                65,
                101
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
                          "type": "ThisExpression",
                          "range": [
                            78,
                            82
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 4
                            },
                            "start": {
                              "column": 8,
                              "line": 4
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fooHelper",
                          "optional": false,
                          "range": [
                            83,
                            92
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 4
                            },
                            "start": {
                              "column": 13,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          78,
                          92
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 4
                          },
                          "start": {
                            "column": 8,
                            "line": 4
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        78,
                        94
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 4
                        },
                        "start": {
                          "column": 8,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      78,
                      95
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  68,
                  101
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 5
                  },
                  "start": {
                    "column": 10,
                    "line": 3
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
                  "line": 5
                },
                "start": {
                  "column": 7,
                  "line": 3
                }
              }
            },
            "range": [
              14,
              101
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 5
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
              "name": "fooHelper",
              "optional": false,
              "range": [
                107,
                116
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
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
                116,
                191
              ],
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
                          "raw": "\"Behold! The actual method implementation!\"",
                          "value": "Behold! The actual method implementation!",
                          "range": [
                            141,
                            184
                          ],
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 8
                            },
                            "start": {
                              "column": 20,
                              "line": 8
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
                          "name": "console",
                          "optional": false,
                          "range": [
                            129,
                            136
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 8
                            },
                            "start": {
                              "column": 8,
                              "line": 8
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "range": [
                            137,
                            140
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 8
                            },
                            "start": {
                              "column": 16,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          129,
                          140
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 8
                          },
                          "start": {
                            "column": 8,
                            "line": 8
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        129,
                        185
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 8
                        },
                        "start": {
                          "column": 8,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      129,
                      185
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  119,
                  191
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 9
                  },
                  "start": {
                    "column": 16,
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
                  "column": 5,
                  "line": 9
                },
                "start": {
                  "column": 13,
                  "line": 7
                }
              }
            },
            "range": [
              107,
              191
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 8,
            "line": 1
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
          6,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
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
        193
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "EmptyStatement",
      "range": [
        193,
        194
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 10
        },
        "start": {
          "column": 1,
          "line": 10
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "range": [
              204,
              205
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 11
              },
              "start": {
                "column": 9,
                "line": 11
              }
            }
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "range": [
              204,
              205
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 11
              },
              "start": {
                "column": 9,
                "line": 11
              }
            }
          },
          "range": [
            204,
            205
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 11
            },
            "start": {
              "column": 9,
              "line": 11
            }
          }
        }
      ],
      "range": [
        195,
        208
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
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
              "type": "FunctionExpression",
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
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "FunctionExpression",
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
                                          "computed": true,
                                          "object": {
                                            "type": "TSAsExpression",
                                            "expression": {
                                              "type": "ThisExpression",
                                              "range": [
                                                622,
                                                626
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 21,
                                                  "line": 21
                                                },
                                                "start": {
                                                  "column": 17,
                                                  "line": 21
                                                }
                                              }
                                            },
                                            "typeAnnotation": {
                                              "type": "TSAnyKeyword",
                                              "range": [
                                                630,
                                                633
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 28,
                                                  "line": 21
                                                },
                                                "start": {
                                                  "column": 25,
                                                  "line": 21
                                                }
                                              }
                                            },
                                            "range": [
                                              622,
                                              633
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 28,
                                                "line": 21
                                              },
                                              "start": {
                                                "column": 17,
                                                "line": 21
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "context",
                                              "optional": false,
                                              "range": [
                                                635,
                                                642
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 37,
                                                  "line": 21
                                                },
                                                "start": {
                                                  "column": 30,
                                                  "line": 21
                                                }
                                              }
                                            },
                                            "optional": false,
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "name",
                                              "optional": false,
                                              "range": [
                                                643,
                                                647
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 42,
                                                  "line": 21
                                                },
                                                "start": {
                                                  "column": 38,
                                                  "line": 21
                                                }
                                              }
                                            },
                                            "range": [
                                              635,
                                              647
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 42,
                                                "line": 21
                                              },
                                              "start": {
                                                "column": 30,
                                                "line": 21
                                              }
                                            }
                                          },
                                          "range": [
                                            621,
                                            648
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 43,
                                              "line": 21
                                            },
                                            "start": {
                                              "column": 16,
                                              "line": 21
                                            }
                                          }
                                        },
                                        "right": {
                                          "type": "CallExpression",
                                          "arguments": [
                                            {
                                              "type": "ThisExpression",
                                              "range": [
                                                684,
                                                688
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 83,
                                                  "line": 21
                                                },
                                                "start": {
                                                  "column": 79,
                                                  "line": 21
                                                }
                                              }
                                            }
                                          ],
                                          "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "MemberExpression",
                                              "computed": true,
                                              "object": {
                                                "type": "TSAsExpression",
                                                "expression": {
                                                  "type": "ThisExpression",
                                                  "range": [
                                                    652,
                                                    656
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 51,
                                                      "line": 21
                                                    },
                                                    "start": {
                                                      "column": 47,
                                                      "line": 21
                                                    }
                                                  }
                                                },
                                                "typeAnnotation": {
                                                  "type": "TSAnyKeyword",
                                                  "range": [
                                                    660,
                                                    663
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 58,
                                                      "line": 21
                                                    },
                                                    "start": {
                                                      "column": 55,
                                                      "line": 21
                                                    }
                                                  }
                                                },
                                                "range": [
                                                  652,
                                                  663
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 58,
                                                    "line": 21
                                                  },
                                                  "start": {
                                                    "column": 47,
                                                    "line": 21
                                                  }
                                                }
                                              },
                                              "optional": false,
                                              "property": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "context",
                                                  "optional": false,
                                                  "range": [
                                                    665,
                                                    672
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 67,
                                                      "line": 21
                                                    },
                                                    "start": {
                                                      "column": 60,
                                                      "line": 21
                                                    }
                                                  }
                                                },
                                                "optional": false,
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "name",
                                                  "optional": false,
                                                  "range": [
                                                    673,
                                                    677
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 72,
                                                      "line": 21
                                                    },
                                                    "start": {
                                                      "column": 68,
                                                      "line": 21
                                                    }
                                                  }
                                                },
                                                "range": [
                                                  665,
                                                  677
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 72,
                                                    "line": 21
                                                  },
                                                  "start": {
                                                    "column": 60,
                                                    "line": 21
                                                  }
                                                }
                                              },
                                              "range": [
                                                651,
                                                678
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 73,
                                                  "line": 21
                                                },
                                                "start": {
                                                  "column": 46,
                                                  "line": 21
                                                }
                                              }
                                            },
                                            "optional": false,
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "bind",
                                              "optional": false,
                                              "range": [
                                                679,
                                                683
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 78,
                                                  "line": 21
                                                },
                                                "start": {
                                                  "column": 74,
                                                  "line": 21
                                                }
                                              }
                                            },
                                            "range": [
                                              651,
                                              683
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 78,
                                                "line": 21
                                              },
                                              "start": {
                                                "column": 46,
                                                "line": 21
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "range": [
                                            651,
                                            689
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 84,
                                              "line": 21
                                            },
                                            "start": {
                                              "column": 46,
                                              "line": 21
                                            }
                                          }
                                        },
                                        "range": [
                                          621,
                                          689
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 84,
                                            "line": 21
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 21
                                          }
                                        }
                                      },
                                      "range": [
                                        621,
                                        690
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 85,
                                          "line": 21
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 21
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    603,
                                    704
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 22
                                    },
                                    "start": {
                                      "column": 47,
                                      "line": 20
                                    }
                                  }
                                },
                                "declare": false,
                                "expression": false,
                                "generator": false,
                                "id": null,
                                "params": [],
                                "range": [
                                  591,
                                  704
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 22
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 20
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
                                "name": "context",
                                "optional": false,
                                "range": [
                                  568,
                                  575
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 20
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "addInitializer",
                                "optional": false,
                                "range": [
                                  576,
                                  590
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 20
                                  }
                                }
                              },
                              "range": [
                                568,
                                590
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 20
                                },
                                "start": {
                                  "column": 12,
                                  "line": 20
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              568,
                              705
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 22
                              },
                              "start": {
                                "column": 12,
                                "line": 20
                              }
                            }
                          },
                          "range": [
                            568,
                            706
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 22
                            },
                            "start": {
                              "column": 12,
                              "line": 20
                            }
                          }
                        }
                      ],
                      "range": [
                        554,
                        716
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 23
                        },
                        "start": {
                          "column": 19,
                          "line": 19
                        }
                      }
                    },
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bound",
                      "optional": false,
                      "range": [
                        547,
                        552
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 19
                        },
                        "start": {
                          "column": 12,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      543,
                      716
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 23
                      },
                      "start": {
                        "column": 8,
                        "line": 19
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "FunctionExpression",
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
                                  "type": "TemplateLiteral",
                                  "expressions": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "source",
                                      "optional": false,
                                      "range": [
                                        788,
                                        794
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 34,
                                          "line": 26
                                        },
                                        "start": {
                                          "column": 28,
                                          "line": 26
                                        }
                                      }
                                    },
                                    {
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
                                            "name": "context",
                                            "optional": false,
                                            "range": [
                                              823,
                                              830
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 70,
                                                "line": 26
                                              },
                                              "start": {
                                                "column": 63,
                                                "line": 26
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "name",
                                            "optional": false,
                                            "range": [
                                              831,
                                              835
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 75,
                                                "line": 26
                                              },
                                              "start": {
                                                "column": 71,
                                                "line": 26
                                              }
                                            }
                                          },
                                          "range": [
                                            823,
                                            835
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 75,
                                              "line": 26
                                            },
                                            "start": {
                                              "column": 63,
                                              "line": 26
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
                                            836,
                                            844
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 84,
                                              "line": 26
                                            },
                                            "start": {
                                              "column": 76,
                                              "line": 26
                                            }
                                          }
                                        },
                                        "range": [
                                          823,
                                          844
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 84,
                                            "line": 26
                                          },
                                          "start": {
                                            "column": 63,
                                            "line": 26
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "range": [
                                        823,
                                        846
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 86,
                                          "line": 26
                                        },
                                        "start": {
                                          "column": 63,
                                          "line": 26
                                        }
                                      }
                                    }
                                  ],
                                  "quasis": [
                                    {
                                      "type": "TemplateElement",
                                      "tail": false,
                                      "value": {
                                        "cooked": "<",
                                        "raw": "<"
                                      },
                                      "range": [
                                        784,
                                        788
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 28,
                                          "line": 26
                                        },
                                        "start": {
                                          "column": 24,
                                          "line": 26
                                        }
                                      }
                                    },
                                    {
                                      "type": "TemplateElement",
                                      "tail": false,
                                      "value": {
                                        "cooked": ">: I'm logging stuff from ",
                                        "raw": ">: I'm logging stuff from "
                                      },
                                      "range": [
                                        794,
                                        823
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 63,
                                          "line": 26
                                        },
                                        "start": {
                                          "column": 34,
                                          "line": 26
                                        }
                                      }
                                    },
                                    {
                                      "type": "TemplateElement",
                                      "tail": true,
                                      "value": {
                                        "cooked": "!",
                                        "raw": "!"
                                      },
                                      "range": [
                                        846,
                                        849
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 89,
                                          "line": 26
                                        },
                                        "start": {
                                          "column": 86,
                                          "line": 26
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    784,
                                    849
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 89,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 26
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
                                  "name": "console",
                                  "optional": false,
                                  "range": [
                                    772,
                                    779
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 26
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "log",
                                  "optional": false,
                                  "range": [
                                    780,
                                    783
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 26
                                    }
                                  }
                                },
                                "range": [
                                  772,
                                  783
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
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
                                772,
                                850
                              ],
                              "loc": {
                                "end": {
                                  "column": 90,
                                  "line": 26
                                },
                                "start": {
                                  "column": 12,
                                  "line": 26
                                }
                              }
                            },
                            "range": [
                              772,
                              851
                            ],
                            "loc": {
                              "end": {
                                "column": 91,
                                "line": 26
                              },
                              "start": {
                                "column": 12,
                                "line": 26
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "ThisExpression",
                                  "range": [
                                    884,
                                    888
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 36,
                                      "line": 27
                                    },
                                    "start": {
                                      "column": 32,
                                      "line": 27
                                    }
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "args",
                                  "optional": false,
                                  "range": [
                                    890,
                                    894
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 42,
                                      "line": 27
                                    },
                                    "start": {
                                      "column": 38,
                                      "line": 27
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
                                  "name": "target",
                                  "optional": false,
                                  "range": [
                                    871,
                                    877
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 27
                                    },
                                    "start": {
                                      "column": 19,
                                      "line": 27
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "apply",
                                  "optional": false,
                                  "range": [
                                    878,
                                    883
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 27
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 27
                                    }
                                  }
                                },
                                "range": [
                                  871,
                                  883
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 27
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 27
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                871,
                                895
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 27
                                },
                                "start": {
                                  "column": 19,
                                  "line": 27
                                }
                              }
                            },
                            "range": [
                              864,
                              896
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 27
                              },
                              "start": {
                                "column": 12,
                                "line": 27
                              }
                            }
                          }
                        ],
                        "range": [
                          758,
                          906
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 28
                          },
                          "start": {
                            "column": 40,
                            "line": 25
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
                          "range": [
                            743,
                            747
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 25
                            },
                            "start": {
                              "column": 25,
                              "line": 25
                            }
                          }
                        },
                        {
                          "type": "RestElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "range": [
                              752,
                              756
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 25
                              },
                              "start": {
                                "column": 34,
                                "line": 25
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false,
                          "range": [
                            749,
                            756
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 25
                            },
                            "start": {
                              "column": 31,
                              "line": 25
                            }
                          }
                        }
                      ],
                      "range": [
                        733,
                        906
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 28
                        },
                        "start": {
                          "column": 15,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      726,
                      906
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 28
                      },
                      "start": {
                        "column": 8,
                        "line": 25
                      }
                    }
                  }
                ],
                "range": [
                  532,
                  912
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 29
                  },
                  "start": {
                    "column": 47,
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
                "name": "loggedDecorator",
                "optional": false,
                "range": [
                  323,
                  338
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 14
                  },
                  "start": {
                    "column": 20,
                    "line": 14
                  }
                }
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "target",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 15
                      },
                      "start": {
                        "column": 14,
                        "line": 15
                      }
                    },
                    "range": [
                      354,
                      393
                    ],
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
                                "column": 27,
                                "line": 15
                              },
                              "start": {
                                "column": 21,
                                "line": 15
                              }
                            },
                            "range": [
                              361,
                              367
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "This",
                                "optional": false,
                                "range": [
                                  363,
                                  367
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 15
                                  }
                                }
                              },
                              "range": [
                                363,
                                367
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 15
                                },
                                "start": {
                                  "column": 23,
                                  "line": 15
                                }
                              }
                            }
                          },
                          "range": [
                            357,
                            367
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 15
                            },
                            "start": {
                              "column": 17,
                              "line": 15
                            }
                          }
                        },
                        {
                          "type": "RestElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "range": [
                              372,
                              376
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 15
                              },
                              "start": {
                                "column": 32,
                                "line": 15
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 15
                              },
                              "start": {
                                "column": 36,
                                "line": 15
                              }
                            },
                            "range": [
                              376,
                              382
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Args",
                                "optional": false,
                                "range": [
                                  378,
                                  382
                                ],
                                "loc": {
                                  "end": {
                                    "column": 42,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 38,
                                    "line": 15
                                  }
                                }
                              },
                              "range": [
                                378,
                                382
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 15
                                },
                                "start": {
                                  "column": 38,
                                  "line": 15
                                }
                              }
                            }
                          },
                          "range": [
                            369,
                            382
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 15
                            },
                            "start": {
                              "column": 29,
                              "line": 15
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 15
                          },
                          "start": {
                            "column": 44,
                            "line": 15
                          }
                        },
                        "range": [
                          384,
                          393
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Return",
                            "optional": false,
                            "range": [
                              387,
                              393
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 15
                              },
                              "start": {
                                "column": 47,
                                "line": 15
                              }
                            }
                          },
                          "range": [
                            387,
                            393
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 15
                            },
                            "start": {
                              "column": 47,
                              "line": 15
                            }
                          }
                        }
                      },
                      "range": [
                        356,
                        393
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 15
                        },
                        "start": {
                          "column": 16,
                          "line": 15
                        }
                      }
                    }
                  },
                  "range": [
                    348,
                    393
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
                      "line": 15
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "context",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 89,
                        "line": 16
                      },
                      "start": {
                        "column": 15,
                        "line": 16
                      }
                    },
                    "range": [
                      410,
                      484
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          439,
                          484
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "This",
                              "optional": false,
                              "range": [
                                440,
                                444
                              ],
                              "loc": {
                                "end": {
                                  "column": 49,
                                  "line": 16
                                },
                                "start": {
                                  "column": 45,
                                  "line": 16
                                }
                              }
                            },
                            "range": [
                              440,
                              444
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 16
                              },
                              "start": {
                                "column": 45,
                                "line": 16
                              }
                            }
                          },
                          {
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
                                      "column": 62,
                                      "line": 16
                                    },
                                    "start": {
                                      "column": 56,
                                      "line": 16
                                    }
                                  },
                                  "range": [
                                    451,
                                    457
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "This",
                                      "optional": false,
                                      "range": [
                                        453,
                                        457
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 62,
                                          "line": 16
                                        },
                                        "start": {
                                          "column": 58,
                                          "line": 16
                                        }
                                      }
                                    },
                                    "range": [
                                      453,
                                      457
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 62,
                                        "line": 16
                                      },
                                      "start": {
                                        "column": 58,
                                        "line": 16
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  447,
                                  457
                                ],
                                "loc": {
                                  "end": {
                                    "column": 62,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 52,
                                    "line": 16
                                  }
                                }
                              },
                              {
                                "type": "RestElement",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "args",
                                  "optional": false,
                                  "range": [
                                    462,
                                    466
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 71,
                                      "line": 16
                                    },
                                    "start": {
                                      "column": 67,
                                      "line": 16
                                    }
                                  }
                                },
                                "decorators": [],
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 77,
                                      "line": 16
                                    },
                                    "start": {
                                      "column": 71,
                                      "line": 16
                                    }
                                  },
                                  "range": [
                                    466,
                                    472
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Args",
                                      "optional": false,
                                      "range": [
                                        468,
                                        472
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 77,
                                          "line": 16
                                        },
                                        "start": {
                                          "column": 73,
                                          "line": 16
                                        }
                                      }
                                    },
                                    "range": [
                                      468,
                                      472
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 77,
                                        "line": 16
                                      },
                                      "start": {
                                        "column": 73,
                                        "line": 16
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  459,
                                  472
                                ],
                                "loc": {
                                  "end": {
                                    "column": 77,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 64,
                                    "line": 16
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 88,
                                  "line": 16
                                },
                                "start": {
                                  "column": 79,
                                  "line": 16
                                }
                              },
                              "range": [
                                474,
                                483
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Return",
                                  "optional": false,
                                  "range": [
                                    477,
                                    483
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 88,
                                      "line": 16
                                    },
                                    "start": {
                                      "column": 82,
                                      "line": 16
                                    }
                                  }
                                },
                                "range": [
                                  477,
                                  483
                                ],
                                "loc": {
                                  "end": {
                                    "column": 88,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 82,
                                    "line": 16
                                  }
                                }
                              }
                            },
                            "range": [
                              446,
                              483
                            ],
                            "loc": {
                              "end": {
                                "column": 88,
                                "line": 16
                              },
                              "start": {
                                "column": 51,
                                "line": 16
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 89,
                            "line": 16
                          },
                          "start": {
                            "column": 44,
                            "line": 16
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ClassMethodDecoratorContext",
                        "optional": false,
                        "range": [
                          412,
                          439
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 16
                          },
                          "start": {
                            "column": 17,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        412,
                        484
                      ],
                      "loc": {
                        "end": {
                          "column": 89,
                          "line": 16
                        },
                        "start": {
                          "column": 17,
                          "line": 16
                        }
                      }
                    }
                  },
                  "range": [
                    403,
                    484
                  ],
                  "loc": {
                    "end": {
                      "column": 89,
                      "line": 16
                    },
                    "start": {
                      "column": 8,
                      "line": 16
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 17
                  },
                  "start": {
                    "column": 5,
                    "line": 17
                  }
                },
                "range": [
                  490,
                  531
                ],
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
                            "column": 19,
                            "line": 17
                          },
                          "start": {
                            "column": 13,
                            "line": 17
                          }
                        },
                        "range": [
                          498,
                          504
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "This",
                            "optional": false,
                            "range": [
                              500,
                              504
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 17
                              },
                              "start": {
                                "column": 15,
                                "line": 17
                              }
                            }
                          },
                          "range": [
                            500,
                            504
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 17
                            },
                            "start": {
                              "column": 15,
                              "line": 17
                            }
                          }
                        }
                      },
                      "range": [
                        494,
                        504
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 17
                        },
                        "start": {
                          "column": 9,
                          "line": 17
                        }
                      }
                    },
                    {
                      "type": "RestElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "range": [
                          509,
                          513
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 17
                          },
                          "start": {
                            "column": 24,
                            "line": 17
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 17
                          },
                          "start": {
                            "column": 28,
                            "line": 17
                          }
                        },
                        "range": [
                          513,
                          519
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Args",
                            "optional": false,
                            "range": [
                              515,
                              519
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 17
                              },
                              "start": {
                                "column": 30,
                                "line": 17
                              }
                            }
                          },
                          "range": [
                            515,
                            519
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 17
                            },
                            "start": {
                              "column": 30,
                              "line": 17
                            }
                          }
                        }
                      },
                      "range": [
                        506,
                        519
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 17
                        },
                        "start": {
                          "column": 21,
                          "line": 17
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 17
                      },
                      "start": {
                        "column": 36,
                        "line": 17
                      }
                    },
                    "range": [
                      521,
                      530
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Return",
                        "optional": false,
                        "range": [
                          524,
                          530
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
                      },
                      "range": [
                        524,
                        530
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
                    493,
                    530
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 17
                    },
                    "start": {
                      "column": 8,
                      "line": 17
                    }
                  }
                }
              },
              "range": [
                314,
                912
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 29
                },
                "start": {
                  "column": 11,
                  "line": 14
                }
              }
            },
            "range": [
              307,
              912
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "range": [
          301,
          914
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 30
          },
          "start": {
            "column": 91,
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
        "name": "boundMethodLogger",
        "optional": false,
        "range": [
          219,
          236
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 13
          },
          "start": {
            "column": 9,
            "line": 13
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "source",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 75,
                "line": 13
              },
              "start": {
                "column": 67,
                "line": 13
              }
            },
            "range": [
              277,
              285
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                279,
                285
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 13
                },
                "start": {
                  "column": 69,
                  "line": 13
                }
              }
            }
          },
          "range": [
            271,
            285
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 13
            },
            "start": {
              "column": 61,
              "line": 13
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "bound",
            "optional": false,
            "range": [
              287,
              292
            ],
            "loc": {
              "end": {
                "column": 82,
                "line": 13
              },
              "start": {
                "column": 77,
                "line": 13
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "raw": "true",
            "value": true,
            "range": [
              295,
              299
            ],
            "loc": {
              "end": {
                "column": 89,
                "line": 13
              },
              "start": {
                "column": 85,
                "line": 13
              }
            }
          },
          "range": [
            287,
            299
          ],
          "loc": {
            "end": {
              "column": 89,
              "line": 13
            },
            "start": {
              "column": 77,
              "line": 13
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 60,
            "line": 13
          },
          "start": {
            "column": 26,
            "line": 13
          }
        },
        "range": [
          236,
          270
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "This",
              "optional": false,
              "range": [
                237,
                241
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 13
                },
                "start": {
                  "column": 27,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              237,
              241
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 13
              },
              "start": {
                "column": 27,
                "line": 13
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "range": [
                  256,
                  259
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 13
                  },
                  "start": {
                    "column": 46,
                    "line": 13
                  }
                }
              },
              "range": [
                256,
                261
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 13
                },
                "start": {
                  "column": 46,
                  "line": 13
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Args",
              "optional": false,
              "range": [
                243,
                247
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 13
                },
                "start": {
                  "column": 33,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              243,
              261
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 13
              },
              "start": {
                "column": 33,
                "line": 13
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Return",
              "optional": false,
              "range": [
                263,
                269
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 13
                },
                "start": {
                  "column": 53,
                  "line": 13
                }
              }
            },
            "out": false,
            "range": [
              263,
              269
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 13
              },
              "start": {
                "column": 53,
                "line": 13
              }
            }
          }
        ]
      },
      "range": [
        210,
        914
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 30
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
