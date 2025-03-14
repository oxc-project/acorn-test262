__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1736
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              16,
              79
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  39,
                  79
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "range": [
                        57,
                        59
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 3
                        },
                        "start": {
                          "column": 16,
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
                        59,
                        73
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          62,
                          73
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 4
                          },
                          "start": {
                            "column": 21,
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
                          "column": 9,
                          "line": 4
                        },
                        "start": {
                          "column": 18,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      49,
                      73
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 3
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 5
                  },
                  "start": {
                    "column": 27,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C1_public",
                "optional": false,
                "range": [
                  29,
                  38
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 2
                  },
                  "start": {
                    "column": 17,
                    "line": 2
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                23,
                79
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
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
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                102,
                109
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 21,
                  "line": 7
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2_private",
              "optional": false,
              "range": [
                91,
                101
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 7
                },
                "start": {
                  "column": 10,
                  "line": 7
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              85,
              109
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              115,
              786
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  138,
                  786
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p1_private",
                      "optional": false,
                      "range": [
                        160,
                        170
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 11
                        },
                        "start": {
                          "column": 20,
                          "line": 11
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
                        170,
                        220
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C1_public",
                                "optional": false,
                                "range": [
                                  198,
                                  207
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 12
                                  }
                                }
                              },
                              "range": [
                                194,
                                209
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 12
                                },
                                "start": {
                                  "column": 19,
                                  "line": 12
                                }
                              }
                            },
                            "range": [
                              187,
                              210
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 12
                              },
                              "start": {
                                "column": 12,
                                "line": 12
                              }
                            }
                          }
                        ],
                        "range": [
                          173,
                          220
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 13
                          },
                          "start": {
                            "column": 33,
                            "line": 11
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
                          "column": 9,
                          "line": 13
                        },
                        "start": {
                          "column": 30,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      148,
                      220
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
                        "line": 11
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p1_private",
                      "optional": false,
                      "range": [
                        242,
                        252
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 15
                        },
                        "start": {
                          "column": 20,
                          "line": 15
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
                        252,
                        289
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          278,
                          289
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 16
                          },
                          "start": {
                            "column": 56,
                            "line": 15
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
                          "name": "m1_c3_p1_arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 15
                              },
                              "start": {
                                "column": 43,
                                "line": 15
                              }
                            },
                            "range": [
                              265,
                              276
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C1_public",
                                "optional": false,
                                "range": [
                                  267,
                                  276
                                ],
                                "loc": {
                                  "end": {
                                    "column": 54,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 45,
                                    "line": 15
                                  }
                                }
                              },
                              "range": [
                                267,
                                276
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 15
                                },
                                "start": {
                                  "column": 45,
                                  "line": 15
                                }
                              }
                            }
                          },
                          "range": [
                            253,
                            276
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 15
                            },
                            "start": {
                              "column": 31,
                              "line": 15
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 16
                        },
                        "start": {
                          "column": 30,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      230,
                      289
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 16
                      },
                      "start": {
                        "column": 8,
                        "line": 15
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p2_private",
                      "optional": false,
                      "range": [
                        311,
                        321
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 18
                        },
                        "start": {
                          "column": 20,
                          "line": 18
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
                        321,
                        371
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C1_public",
                                "optional": false,
                                "range": [
                                  349,
                                  358
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 19
                                  }
                                }
                              },
                              "range": [
                                345,
                                360
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 19
                                },
                                "start": {
                                  "column": 19,
                                  "line": 19
                                }
                              }
                            },
                            "range": [
                              338,
                              361
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 19
                              },
                              "start": {
                                "column": 12,
                                "line": 19
                              }
                            }
                          }
                        ],
                        "range": [
                          324,
                          371
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 20
                          },
                          "start": {
                            "column": 33,
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
                          "column": 9,
                          "line": 20
                        },
                        "start": {
                          "column": 30,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      299,
                      371
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 20
                      },
                      "start": {
                        "column": 8,
                        "line": 18
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p2_private",
                      "optional": false,
                      "range": [
                        393,
                        403
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 22
                        },
                        "start": {
                          "column": 20,
                          "line": 22
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
                        403,
                        440
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          429,
                          440
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 23
                          },
                          "start": {
                            "column": 56,
                            "line": 22
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
                          "name": "m1_c3_p2_arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 22
                              },
                              "start": {
                                "column": 43,
                                "line": 22
                              }
                            },
                            "range": [
                              416,
                              427
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C1_public",
                                "optional": false,
                                "range": [
                                  418,
                                  427
                                ],
                                "loc": {
                                  "end": {
                                    "column": 54,
                                    "line": 22
                                  },
                                  "start": {
                                    "column": 45,
                                    "line": 22
                                  }
                                }
                              },
                              "range": [
                                418,
                                427
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 22
                                },
                                "start": {
                                  "column": 45,
                                  "line": 22
                                }
                              }
                            }
                          },
                          "range": [
                            404,
                            427
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 22
                            },
                            "start": {
                              "column": 31,
                              "line": 22
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 23
                        },
                        "start": {
                          "column": 30,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      381,
                      440
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 23
                      },
                      "start": {
                        "column": 8,
                        "line": 22
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p3_private",
                      "optional": false,
                      "range": [
                        462,
                        472
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 25
                        },
                        "start": {
                          "column": 20,
                          "line": 25
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
                        472,
                        523
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C2_private",
                                "optional": false,
                                "range": [
                                  500,
                                  510
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 26
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 26
                                  }
                                }
                              },
                              "range": [
                                496,
                                512
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 26
                                },
                                "start": {
                                  "column": 19,
                                  "line": 26
                                }
                              }
                            },
                            "range": [
                              489,
                              513
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 26
                              },
                              "start": {
                                "column": 12,
                                "line": 26
                              }
                            }
                          }
                        ],
                        "range": [
                          475,
                          523
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 27
                          },
                          "start": {
                            "column": 33,
                            "line": 25
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
                          "column": 9,
                          "line": 27
                        },
                        "start": {
                          "column": 30,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      450,
                      523
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 27
                      },
                      "start": {
                        "column": 8,
                        "line": 25
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p3_private",
                      "optional": false,
                      "range": [
                        545,
                        555
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 29
                        },
                        "start": {
                          "column": 20,
                          "line": 29
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
                        555,
                        593
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          582,
                          593
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 30
                          },
                          "start": {
                            "column": 57,
                            "line": 29
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
                          "name": "m1_c3_p3_arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 29
                              },
                              "start": {
                                "column": 43,
                                "line": 29
                              }
                            },
                            "range": [
                              568,
                              580
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C2_private",
                                "optional": false,
                                "range": [
                                  570,
                                  580
                                ],
                                "loc": {
                                  "end": {
                                    "column": 55,
                                    "line": 29
                                  },
                                  "start": {
                                    "column": 45,
                                    "line": 29
                                  }
                                }
                              },
                              "range": [
                                570,
                                580
                              ],
                              "loc": {
                                "end": {
                                  "column": 55,
                                  "line": 29
                                },
                                "start": {
                                  "column": 45,
                                  "line": 29
                                }
                              }
                            }
                          },
                          "range": [
                            556,
                            580
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 29
                            },
                            "start": {
                              "column": 31,
                              "line": 29
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 30
                        },
                        "start": {
                          "column": 30,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      533,
                      593
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 30
                      },
                      "start": {
                        "column": 8,
                        "line": 29
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
                      "name": "p4_public",
                      "optional": false,
                      "range": [
                        614,
                        623
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 32
                        },
                        "start": {
                          "column": 19,
                          "line": 32
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
                        623,
                        703
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C2_private",
                                "optional": false,
                                "range": [
                                  672,
                                  682
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 33
                                  }
                                }
                              },
                              "range": [
                                668,
                                684
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 33
                                },
                                "start": {
                                  "column": 19,
                                  "line": 33
                                }
                              }
                            },
                            "range": [
                              661,
                              685
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 33
                              },
                              "start": {
                                "column": 12,
                                "line": 33
                              }
                            }
                          }
                        ],
                        "range": [
                          638,
                          703
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 34
                          },
                          "start": {
                            "column": 43,
                            "line": 32
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
                            "column": 42,
                            "line": 32
                          },
                          "start": {
                            "column": 30,
                            "line": 32
                          }
                        },
                        "range": [
                          625,
                          637
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C2_private",
                            "optional": false,
                            "range": [
                              627,
                              637
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 32
                              },
                              "start": {
                                "column": 32,
                                "line": 32
                              }
                            }
                          },
                          "range": [
                            627,
                            637
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 32
                            },
                            "start": {
                              "column": 32,
                              "line": 32
                            }
                          }
                        }
                      },
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 34
                        },
                        "start": {
                          "column": 28,
                          "line": 32
                        }
                      }
                    },
                    "range": [
                      603,
                      703
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 34
                      },
                      "start": {
                        "column": 8,
                        "line": 32
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
                      "name": "p4_public",
                      "optional": false,
                      "range": [
                        724,
                        733
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 36
                        },
                        "start": {
                          "column": 19,
                          "line": 36
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
                        733,
                        780
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          760,
                          780
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 37
                          },
                          "start": {
                            "column": 55,
                            "line": 36
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
                          "name": "m1_c3_p4_arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 36
                              },
                              "start": {
                                "column": 41,
                                "line": 36
                              }
                            },
                            "range": [
                              746,
                              758
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C2_private",
                                "optional": false,
                                "range": [
                                  748,
                                  758
                                ],
                                "loc": {
                                  "end": {
                                    "column": 53,
                                    "line": 36
                                  },
                                  "start": {
                                    "column": 43,
                                    "line": 36
                                  }
                                }
                              },
                              "range": [
                                748,
                                758
                              ],
                              "loc": {
                                "end": {
                                  "column": 53,
                                  "line": 36
                                },
                                "start": {
                                  "column": 43,
                                  "line": 36
                                }
                              }
                            }
                          },
                          "range": [
                            734,
                            758
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 36
                            },
                            "start": {
                              "column": 29,
                              "line": 36
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 37
                        },
                        "start": {
                          "column": 28,
                          "line": 36
                        }
                      }
                    },
                    "range": [
                      713,
                      780
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 37
                      },
                      "start": {
                        "column": 8,
                        "line": 36
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 38
                  },
                  "start": {
                    "column": 27,
                    "line": 10
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C3_public",
                "optional": false,
                "range": [
                  128,
                  137
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 10
                  },
                  "start": {
                    "column": 17,
                    "line": 10
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                122,
                786
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 38
                },
                "start": {
                  "column": 11,
                  "line": 10
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 38
              },
              "start": {
                "column": 4,
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
                809,
                1431
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p1_private",
                    "optional": false,
                    "range": [
                      831,
                      841
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 41
                      },
                      "start": {
                        "column": 20,
                        "line": 41
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
                      841,
                      891
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "NewExpression",
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C1_public",
                              "optional": false,
                              "range": [
                                869,
                                878
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 42
                                },
                                "start": {
                                  "column": 23,
                                  "line": 42
                                }
                              }
                            },
                            "range": [
                              865,
                              880
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 42
                              },
                              "start": {
                                "column": 19,
                                "line": 42
                              }
                            }
                          },
                          "range": [
                            858,
                            881
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 42
                            },
                            "start": {
                              "column": 12,
                              "line": 42
                            }
                          }
                        }
                      ],
                      "range": [
                        844,
                        891
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 43
                        },
                        "start": {
                          "column": 33,
                          "line": 41
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
                        "column": 9,
                        "line": 43
                      },
                      "start": {
                        "column": 30,
                        "line": 41
                      }
                    }
                  },
                  "range": [
                    819,
                    891
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 43
                    },
                    "start": {
                      "column": 8,
                      "line": 41
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p1_private",
                    "optional": false,
                    "range": [
                      913,
                      923
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 45
                      },
                      "start": {
                        "column": 20,
                        "line": 45
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
                      923,
                      960
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        949,
                        960
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 46
                        },
                        "start": {
                          "column": 56,
                          "line": 45
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
                        "name": "m1_c3_p1_arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 45
                            },
                            "start": {
                              "column": 43,
                              "line": 45
                            }
                          },
                          "range": [
                            936,
                            947
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C1_public",
                              "optional": false,
                              "range": [
                                938,
                                947
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 45
                                },
                                "start": {
                                  "column": 45,
                                  "line": 45
                                }
                              }
                            },
                            "range": [
                              938,
                              947
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 45
                              },
                              "start": {
                                "column": 45,
                                "line": 45
                              }
                            }
                          }
                        },
                        "range": [
                          924,
                          947
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 45
                          },
                          "start": {
                            "column": 31,
                            "line": 45
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 46
                      },
                      "start": {
                        "column": 30,
                        "line": 45
                      }
                    }
                  },
                  "range": [
                    901,
                    960
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 46
                    },
                    "start": {
                      "column": 8,
                      "line": 45
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p2_private",
                    "optional": false,
                    "range": [
                      982,
                      992
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 48
                      },
                      "start": {
                        "column": 20,
                        "line": 48
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
                      992,
                      1042
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "NewExpression",
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C1_public",
                              "optional": false,
                              "range": [
                                1020,
                                1029
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 49
                                },
                                "start": {
                                  "column": 23,
                                  "line": 49
                                }
                              }
                            },
                            "range": [
                              1016,
                              1031
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 49
                              },
                              "start": {
                                "column": 19,
                                "line": 49
                              }
                            }
                          },
                          "range": [
                            1009,
                            1032
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 49
                            },
                            "start": {
                              "column": 12,
                              "line": 49
                            }
                          }
                        }
                      ],
                      "range": [
                        995,
                        1042
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 50
                        },
                        "start": {
                          "column": 33,
                          "line": 48
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
                        "column": 9,
                        "line": 50
                      },
                      "start": {
                        "column": 30,
                        "line": 48
                      }
                    }
                  },
                  "range": [
                    970,
                    1042
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 50
                    },
                    "start": {
                      "column": 8,
                      "line": 48
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p2_private",
                    "optional": false,
                    "range": [
                      1064,
                      1074
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 52
                      },
                      "start": {
                        "column": 20,
                        "line": 52
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
                      1074,
                      1111
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        1100,
                        1111
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 53
                        },
                        "start": {
                          "column": 56,
                          "line": 52
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
                        "name": "m1_c3_p2_arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 52
                            },
                            "start": {
                              "column": 43,
                              "line": 52
                            }
                          },
                          "range": [
                            1087,
                            1098
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C1_public",
                              "optional": false,
                              "range": [
                                1089,
                                1098
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 52
                                },
                                "start": {
                                  "column": 45,
                                  "line": 52
                                }
                              }
                            },
                            "range": [
                              1089,
                              1098
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 52
                              },
                              "start": {
                                "column": 45,
                                "line": 52
                              }
                            }
                          }
                        },
                        "range": [
                          1075,
                          1098
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 52
                          },
                          "start": {
                            "column": 31,
                            "line": 52
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 53
                      },
                      "start": {
                        "column": 30,
                        "line": 52
                      }
                    }
                  },
                  "range": [
                    1052,
                    1111
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 53
                    },
                    "start": {
                      "column": 8,
                      "line": 52
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p3_private",
                    "optional": false,
                    "range": [
                      1133,
                      1143
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 55
                      },
                      "start": {
                        "column": 20,
                        "line": 55
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
                      1143,
                      1194
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "NewExpression",
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C2_private",
                              "optional": false,
                              "range": [
                                1171,
                                1181
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 56
                                },
                                "start": {
                                  "column": 23,
                                  "line": 56
                                }
                              }
                            },
                            "range": [
                              1167,
                              1183
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 56
                              },
                              "start": {
                                "column": 19,
                                "line": 56
                              }
                            }
                          },
                          "range": [
                            1160,
                            1184
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 56
                            },
                            "start": {
                              "column": 12,
                              "line": 56
                            }
                          }
                        }
                      ],
                      "range": [
                        1146,
                        1194
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 57
                        },
                        "start": {
                          "column": 33,
                          "line": 55
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
                        "column": 9,
                        "line": 57
                      },
                      "start": {
                        "column": 30,
                        "line": 55
                      }
                    }
                  },
                  "range": [
                    1121,
                    1194
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 57
                    },
                    "start": {
                      "column": 8,
                      "line": 55
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p3_private",
                    "optional": false,
                    "range": [
                      1216,
                      1226
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 59
                      },
                      "start": {
                        "column": 20,
                        "line": 59
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
                      1226,
                      1264
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        1253,
                        1264
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 60
                        },
                        "start": {
                          "column": 57,
                          "line": 59
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
                        "name": "m1_c3_p3_arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 59
                            },
                            "start": {
                              "column": 43,
                              "line": 59
                            }
                          },
                          "range": [
                            1239,
                            1251
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C2_private",
                              "optional": false,
                              "range": [
                                1241,
                                1251
                              ],
                              "loc": {
                                "end": {
                                  "column": 55,
                                  "line": 59
                                },
                                "start": {
                                  "column": 45,
                                  "line": 59
                                }
                              }
                            },
                            "range": [
                              1241,
                              1251
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 59
                              },
                              "start": {
                                "column": 45,
                                "line": 59
                              }
                            }
                          }
                        },
                        "range": [
                          1227,
                          1251
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 59
                          },
                          "start": {
                            "column": 31,
                            "line": 59
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 60
                      },
                      "start": {
                        "column": 30,
                        "line": 59
                      }
                    }
                  },
                  "range": [
                    1204,
                    1264
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 60
                    },
                    "start": {
                      "column": 8,
                      "line": 59
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
                    "name": "p4_public",
                    "optional": false,
                    "range": [
                      1285,
                      1294
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 62
                      },
                      "start": {
                        "column": 19,
                        "line": 62
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
                      1294,
                      1357
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "NewExpression",
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C2_private",
                              "optional": false,
                              "range": [
                                1334,
                                1344
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 63
                                },
                                "start": {
                                  "column": 23,
                                  "line": 63
                                }
                              }
                            },
                            "range": [
                              1330,
                              1346
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 63
                              },
                              "start": {
                                "column": 19,
                                "line": 63
                              }
                            }
                          },
                          "range": [
                            1323,
                            1347
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 63
                            },
                            "start": {
                              "column": 12,
                              "line": 63
                            }
                          }
                        }
                      ],
                      "range": [
                        1309,
                        1357
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 64
                        },
                        "start": {
                          "column": 43,
                          "line": 62
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
                          "column": 42,
                          "line": 62
                        },
                        "start": {
                          "column": 30,
                          "line": 62
                        }
                      },
                      "range": [
                        1296,
                        1308
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "range": [
                            1298,
                            1308
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 62
                            },
                            "start": {
                              "column": 32,
                              "line": 62
                            }
                          }
                        },
                        "range": [
                          1298,
                          1308
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 62
                          },
                          "start": {
                            "column": 32,
                            "line": 62
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 64
                      },
                      "start": {
                        "column": 28,
                        "line": 62
                      }
                    }
                  },
                  "range": [
                    1274,
                    1357
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 64
                    },
                    "start": {
                      "column": 8,
                      "line": 62
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
                    "name": "p4_public",
                    "optional": false,
                    "range": [
                      1378,
                      1387
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 66
                      },
                      "start": {
                        "column": 19,
                        "line": 66
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
                      1387,
                      1425
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        1414,
                        1425
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 67
                        },
                        "start": {
                          "column": 55,
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
                        "name": "m1_c3_p4_arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 66
                            },
                            "start": {
                              "column": 41,
                              "line": 66
                            }
                          },
                          "range": [
                            1400,
                            1412
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C2_private",
                              "optional": false,
                              "range": [
                                1402,
                                1412
                              ],
                              "loc": {
                                "end": {
                                  "column": 53,
                                  "line": 66
                                },
                                "start": {
                                  "column": 43,
                                  "line": 66
                                }
                              }
                            },
                            "range": [
                              1402,
                              1412
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 66
                              },
                              "start": {
                                "column": 43,
                                "line": 66
                              }
                            }
                          }
                        },
                        "range": [
                          1388,
                          1412
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 66
                          },
                          "start": {
                            "column": 29,
                            "line": 66
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 67
                      },
                      "start": {
                        "column": 28,
                        "line": 66
                      }
                    }
                  },
                  "range": [
                    1367,
                    1425
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 67
                    },
                    "start": {
                      "column": 8,
                      "line": 66
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 68
                },
                "start": {
                  "column": 21,
                  "line": 40
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C4_private",
              "optional": false,
              "range": [
                798,
                808
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 40
                },
                "start": {
                  "column": 10,
                  "line": 40
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              792,
              1431
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 68
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          }
        ],
        "range": [
          10,
          1433
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 69
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          7,
          9
        ],
        "decorators": [],
        "name": "m1",
        "optional": false,
        "loc": {
          "end": {
            "column": 9,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "kind": "module",
      "range": [
        0,
        1433
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 69
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
          1451,
          1454
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 72
          },
          "start": {
            "column": 16,
            "line": 71
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C6_public",
        "optional": false,
        "range": [
          1441,
          1450
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 71
          },
          "start": {
            "column": 6,
            "line": 71
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1435,
        1454
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 72
        },
        "start": {
          "column": 0,
          "line": 71
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1472,
          1736
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1_private",
              "optional": false,
              "range": [
                1490,
                1500
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 75
                },
                "start": {
                  "column": 16,
                  "line": 75
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
                1500,
                1542
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C6_public",
                        "optional": false,
                        "range": [
                          1524,
                          1533
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 76
                          },
                          "start": {
                            "column": 19,
                            "line": 76
                          }
                        }
                      },
                      "range": [
                        1520,
                        1535
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 76
                        },
                        "start": {
                          "column": 15,
                          "line": 76
                        }
                      }
                    },
                    "range": [
                      1513,
                      1536
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 76
                      },
                      "start": {
                        "column": 8,
                        "line": 76
                      }
                    }
                  }
                ],
                "range": [
                  1503,
                  1542
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 77
                  },
                  "start": {
                    "column": 29,
                    "line": 75
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
                  "line": 77
                },
                "start": {
                  "column": 26,
                  "line": 75
                }
              }
            },
            "range": [
              1478,
              1542
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 77
              },
              "start": {
                "column": 4,
                "line": 75
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1_private",
              "optional": false,
              "range": [
                1560,
                1570
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 79
                },
                "start": {
                  "column": 16,
                  "line": 79
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
                1570,
                1603
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  1596,
                  1603
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 80
                  },
                  "start": {
                    "column": 52,
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
                  "name": "m1_c3_p1_arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 79
                      },
                      "start": {
                        "column": 39,
                        "line": 79
                      }
                    },
                    "range": [
                      1583,
                      1594
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C6_public",
                        "optional": false,
                        "range": [
                          1585,
                          1594
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 79
                          },
                          "start": {
                            "column": 41,
                            "line": 79
                          }
                        }
                      },
                      "range": [
                        1585,
                        1594
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 79
                        },
                        "start": {
                          "column": 41,
                          "line": 79
                        }
                      }
                    }
                  },
                  "range": [
                    1571,
                    1594
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 79
                    },
                    "start": {
                      "column": 27,
                      "line": 79
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 80
                },
                "start": {
                  "column": 26,
                  "line": 79
                }
              }
            },
            "range": [
              1548,
              1603
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 80
              },
              "start": {
                "column": 4,
                "line": 79
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2_private",
              "optional": false,
              "range": [
                1621,
                1631
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 82
                },
                "start": {
                  "column": 16,
                  "line": 82
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
                1631,
                1673
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C6_public",
                        "optional": false,
                        "range": [
                          1655,
                          1664
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 83
                          },
                          "start": {
                            "column": 19,
                            "line": 83
                          }
                        }
                      },
                      "range": [
                        1651,
                        1666
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 83
                        },
                        "start": {
                          "column": 15,
                          "line": 83
                        }
                      }
                    },
                    "range": [
                      1644,
                      1667
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 83
                      },
                      "start": {
                        "column": 8,
                        "line": 83
                      }
                    }
                  }
                ],
                "range": [
                  1634,
                  1673
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 84
                  },
                  "start": {
                    "column": 29,
                    "line": 82
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
                  "line": 84
                },
                "start": {
                  "column": 26,
                  "line": 82
                }
              }
            },
            "range": [
              1609,
              1673
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 84
              },
              "start": {
                "column": 4,
                "line": 82
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2_private",
              "optional": false,
              "range": [
                1691,
                1701
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 86
                },
                "start": {
                  "column": 16,
                  "line": 86
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
                1701,
                1734
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  1727,
                  1734
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 87
                  },
                  "start": {
                    "column": 52,
                    "line": 86
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
                  "name": "m1_c3_p2_arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 86
                      },
                      "start": {
                        "column": 39,
                        "line": 86
                      }
                    },
                    "range": [
                      1714,
                      1725
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C6_public",
                        "optional": false,
                        "range": [
                          1716,
                          1725
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 86
                          },
                          "start": {
                            "column": 41,
                            "line": 86
                          }
                        }
                      },
                      "range": [
                        1716,
                        1725
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 86
                        },
                        "start": {
                          "column": 41,
                          "line": 86
                        }
                      }
                    }
                  },
                  "range": [
                    1702,
                    1725
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 86
                    },
                    "start": {
                      "column": 27,
                      "line": 86
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 87
                },
                "start": {
                  "column": 26,
                  "line": 86
                }
              }
            },
            "range": [
              1679,
              1734
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 87
              },
              "start": {
                "column": 4,
                "line": 86
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 88
          },
          "start": {
            "column": 16,
            "line": 74
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C7_public",
        "optional": false,
        "range": [
          1462,
          1471
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 74
          },
          "start": {
            "column": 6,
            "line": 74
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1456,
        1736
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 88
        },
        "start": {
          "column": 0,
          "line": 74
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 88
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
