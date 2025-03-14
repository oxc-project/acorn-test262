__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    4776
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          18,
          1860
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
              "name": "canary",
              "optional": false,
              "range": [
                32,
                38
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
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 2
                },
                "start": {
                  "column": 18,
                  "line": 2
                }
              },
              "range": [
                38,
                46
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  40,
                  46
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 2
                  },
                  "start": {
                    "column": 20,
                    "line": 2
                  }
                }
              }
            },
            "value": null,
            "range": [
              24,
              47
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
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
              "name": "staticCanary",
              "optional": false,
              "range": [
                59,
                71
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 31,
                  "line": 3
                },
                "start": {
                  "column": 23,
                  "line": 3
                }
              },
              "range": [
                71,
                79
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  73,
                  79
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 3
                  },
                  "start": {
                    "column": 25,
                    "line": 3
                  }
                }
              }
            },
            "value": null,
            "range": [
              52,
              80
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                86,
                97
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
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
                97,
                256
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
                          "name": "p",
                          "optional": false,
                          "range": [
                            186,
                            187
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 7
                            },
                            "start": {
                              "column": 12,
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
                              190,
                              194
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 7
                              },
                              "start": {
                                "column": 16,
                                "line": 7
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "canary",
                            "optional": false,
                            "range": [
                              195,
                              201
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 7
                              },
                              "start": {
                                "column": 21,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            190,
                            201
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 7
                            },
                            "start": {
                              "column": 16,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          186,
                          201
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 7
                          },
                          "start": {
                            "column": 12,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      182,
                      202
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 8
                              },
                              "start": {
                                "column": 13,
                                "line": 8
                              }
                            },
                            "range": [
                              216,
                              224
                            ],
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "range": [
                                218,
                                224
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 8
                                },
                                "start": {
                                  "column": 15,
                                  "line": 8
                                }
                              }
                            }
                          },
                          "range": [
                            215,
                            224
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 8
                            },
                            "start": {
                              "column": 12,
                              "line": 8
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          215,
                          224
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 8
                          },
                          "start": {
                            "column": 12,
                            "line": 8
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      211,
                      225
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 8
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
                          "type": "ThisExpression",
                          "range": [
                            234,
                            238
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 9
                            },
                            "start": {
                              "column": 8,
                              "line": 9
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "canary",
                          "optional": false,
                          "range": [
                            239,
                            245
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 9
                            },
                            "start": {
                              "column": 13,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          234,
                          245
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 9
                          },
                          "start": {
                            "column": 8,
                            "line": 9
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "3",
                        "value": 3,
                        "range": [
                          248,
                          249
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 9
                          },
                          "start": {
                            "column": 22,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        234,
                        249
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 9
                        },
                        "start": {
                          "column": 8,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      234,
                      250
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
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
                  100,
                  256
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 18,
                    "line": 5
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
                  "line": 10
                },
                "start": {
                  "column": 15,
                  "line": 5
                }
              }
            },
            "range": [
              86,
              256
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
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "memberFunc",
              "optional": false,
              "range": [
                340,
                350
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
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
                350,
                523
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
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 14
                              },
                              "start": {
                                "column": 13,
                                "line": 14
                              }
                            },
                            "range": [
                              376,
                              389
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyTestClass",
                                "optional": false,
                                "range": [
                                  378,
                                  389
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 14
                                  }
                                }
                              },
                              "range": [
                                378,
                                389
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 14
                                },
                                "start": {
                                  "column": 15,
                                  "line": 14
                                }
                              }
                            }
                          },
                          "range": [
                            375,
                            389
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 14
                            },
                            "start": {
                              "column": 12,
                              "line": 14
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          375,
                          389
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 14
                          },
                          "start": {
                            "column": 12,
                            "line": 14
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      371,
                      390
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 14
                      },
                      "start": {
                        "column": 8,
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
                          "name": "p",
                          "optional": false,
                          "range": [
                            480,
                            481
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 17
                            },
                            "start": {
                              "column": 12,
                              "line": 17
                            }
                          }
                        },
                        "init": {
                          "type": "ThisExpression",
                          "range": [
                            484,
                            488
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 17
                            },
                            "start": {
                              "column": 16,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          480,
                          488
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 17
                          },
                          "start": {
                            "column": 12,
                            "line": 17
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      476,
                      489
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 17
                      },
                      "start": {
                        "column": 8,
                        "line": 17
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 18
                              },
                              "start": {
                                "column": 13,
                                "line": 18
                              }
                            },
                            "range": [
                              503,
                              516
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyTestClass",
                                "optional": false,
                                "range": [
                                  505,
                                  516
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 18
                                  }
                                }
                              },
                              "range": [
                                505,
                                516
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 18
                                },
                                "start": {
                                  "column": 15,
                                  "line": 18
                                }
                              }
                            }
                          },
                          "range": [
                            502,
                            516
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 18
                            },
                            "start": {
                              "column": 12,
                              "line": 18
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          502,
                          516
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 18
                          },
                          "start": {
                            "column": 12,
                            "line": 18
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      498,
                      517
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 18
                      },
                      "start": {
                        "column": 8,
                        "line": 18
                      }
                    }
                  }
                ],
                "range": [
                  361,
                  523
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 19
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
              "id": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "range": [
                      351,
                      352
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 13
                      },
                      "start": {
                        "column": 15,
                        "line": 13
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "ThisExpression",
                    "range": [
                      355,
                      359
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 13
                      },
                      "start": {
                        "column": 19,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    351,
                    359
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 13
                    },
                    "start": {
                      "column": 15,
                      "line": 13
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 19
                },
                "start": {
                  "column": 14,
                  "line": 13
                }
              }
            },
            "range": [
              340,
              523
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 13
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
              "name": "prop",
              "optional": false,
              "range": [
                618,
                622
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 22
                },
                "start": {
                  "column": 8,
                  "line": 22
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
                622,
                703
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
                          "name": "p",
                          "optional": false,
                          "range": [
                            639,
                            640
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 23
                            },
                            "start": {
                              "column": 12,
                              "line": 23
                            }
                          }
                        },
                        "init": {
                          "type": "ThisExpression",
                          "range": [
                            643,
                            647
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 23
                            },
                            "start": {
                              "column": 16,
                              "line": 23
                            }
                          }
                        },
                        "range": [
                          639,
                          647
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 23
                          },
                          "start": {
                            "column": 12,
                            "line": 23
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      635,
                      648
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 23
                      },
                      "start": {
                        "column": 8,
                        "line": 23
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 24
                              },
                              "start": {
                                "column": 13,
                                "line": 24
                              }
                            },
                            "range": [
                              662,
                              675
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyTestClass",
                                "optional": false,
                                "range": [
                                  664,
                                  675
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 24
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 24
                                  }
                                }
                              },
                              "range": [
                                664,
                                675
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 24
                                },
                                "start": {
                                  "column": 15,
                                  "line": 24
                                }
                              }
                            }
                          },
                          "range": [
                            661,
                            675
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 24
                            },
                            "start": {
                              "column": 12,
                              "line": 24
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          661,
                          675
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 24
                          },
                          "start": {
                            "column": 12,
                            "line": 24
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      657,
                      676
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 24
                      },
                      "start": {
                        "column": 8,
                        "line": 24
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ThisExpression",
                      "range": [
                        692,
                        696
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 25
                        },
                        "start": {
                          "column": 15,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      685,
                      697
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 25
                      },
                      "start": {
                        "column": 8,
                        "line": 25
                      }
                    }
                  }
                ],
                "range": [
                  625,
                  703
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 26
                  },
                  "start": {
                    "column": 15,
                    "line": 22
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
                  "line": 26
                },
                "start": {
                  "column": 12,
                  "line": 22
                }
              }
            },
            "range": [
              614,
              703
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 22
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
              "name": "prop",
              "optional": false,
              "range": [
                712,
                716
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 27
                },
                "start": {
                  "column": 8,
                  "line": 27
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
                716,
                807
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
                          "name": "p",
                          "optional": false,
                          "range": [
                            734,
                            735
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 28
                            },
                            "start": {
                              "column": 12,
                              "line": 28
                            }
                          }
                        },
                        "init": {
                          "type": "ThisExpression",
                          "range": [
                            738,
                            742
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 28
                            },
                            "start": {
                              "column": 16,
                              "line": 28
                            }
                          }
                        },
                        "range": [
                          734,
                          742
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 28
                          },
                          "start": {
                            "column": 12,
                            "line": 28
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      730,
                      743
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 28
                      },
                      "start": {
                        "column": 8,
                        "line": 28
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 29
                              },
                              "start": {
                                "column": 13,
                                "line": 29
                              }
                            },
                            "range": [
                              757,
                              770
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyTestClass",
                                "optional": false,
                                "range": [
                                  759,
                                  770
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 29
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 29
                                  }
                                }
                              },
                              "range": [
                                759,
                                770
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 29
                                },
                                "start": {
                                  "column": 15,
                                  "line": 29
                                }
                              }
                            }
                          },
                          "range": [
                            756,
                            770
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 29
                            },
                            "start": {
                              "column": 12,
                              "line": 29
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          756,
                          770
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 29
                          },
                          "start": {
                            "column": 12,
                            "line": 29
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      752,
                      771
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 29
                      },
                      "start": {
                        "column": 8,
                        "line": 29
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
                        "name": "p",
                        "optional": false,
                        "range": [
                          780,
                          781
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
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          784,
                          785
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 30
                          },
                          "start": {
                            "column": 12,
                            "line": 30
                          }
                        }
                      },
                      "range": [
                        780,
                        785
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 30
                        },
                        "start": {
                          "column": 8,
                          "line": 30
                        }
                      }
                    },
                    "range": [
                      780,
                      786
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 30
                      },
                      "start": {
                        "column": 8,
                        "line": 30
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
                        "name": "v",
                        "optional": false,
                        "range": [
                          795,
                          796
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 31
                          },
                          "start": {
                            "column": 8,
                            "line": 31
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "range": [
                          799,
                          800
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 31
                          },
                          "start": {
                            "column": 12,
                            "line": 31
                          }
                        }
                      },
                      "range": [
                        795,
                        800
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 31
                        },
                        "start": {
                          "column": 8,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      795,
                      801
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 31
                      },
                      "start": {
                        "column": 8,
                        "line": 31
                      }
                    }
                  }
                ],
                "range": [
                  720,
                  807
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 32
                  },
                  "start": {
                    "column": 16,
                    "line": 27
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
                  "name": "v",
                  "optional": false,
                  "range": [
                    717,
                    718
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
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 32
                },
                "start": {
                  "column": 12,
                  "line": 27
                }
              }
            },
            "range": [
              708,
              807
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 27
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
              "name": "someFunc",
              "optional": false,
              "range": [
                813,
                821
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 34
                },
                "start": {
                  "column": 4,
                  "line": 34
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
                          "name": "t",
                          "optional": false,
                          "range": [
                            927,
                            928
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 36
                            },
                            "start": {
                              "column": 12,
                              "line": 36
                            }
                          }
                        },
                        "init": {
                          "type": "ThisExpression",
                          "range": [
                            931,
                            935
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 36
                            },
                            "start": {
                              "column": 16,
                              "line": 36
                            }
                          }
                        },
                        "range": [
                          927,
                          935
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 36
                          },
                          "start": {
                            "column": 12,
                            "line": 36
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      923,
                      936
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 36
                      },
                      "start": {
                        "column": 8,
                        "line": 36
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
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 37
                              },
                              "start": {
                                "column": 13,
                                "line": 37
                              }
                            },
                            "range": [
                              950,
                              963
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyTestClass",
                                "optional": false,
                                "range": [
                                  952,
                                  963
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 37
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 37
                                  }
                                }
                              },
                              "range": [
                                952,
                                963
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 37
                                },
                                "start": {
                                  "column": 15,
                                  "line": 37
                                }
                              }
                            }
                          },
                          "range": [
                            949,
                            963
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 37
                            },
                            "start": {
                              "column": 12,
                              "line": 37
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          949,
                          963
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 37
                          },
                          "start": {
                            "column": 12,
                            "line": 37
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      945,
                      964
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
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
                  830,
                  970
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 38
                  },
                  "start": {
                    "column": 21,
                    "line": 34
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                824,
                970
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 38
                },
                "start": {
                  "column": 15,
                  "line": 34
                }
              }
            },
            "range": [
              813,
              971
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 34
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
              "name": "staticFn",
              "optional": false,
              "range": [
                1064,
                1072
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 41
                },
                "start": {
                  "column": 11,
                  "line": 41
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                1072,
                1367
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
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 42
                              },
                              "start": {
                                "column": 13,
                                "line": 42
                              }
                            },
                            "range": [
                              1098,
                              1118
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyTestClass",
                                "optional": false,
                                "range": [
                                  1107,
                                  1118
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 42
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 42
                                  }
                                }
                              },
                              "range": [
                                1100,
                                1118
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 42
                                },
                                "start": {
                                  "column": 15,
                                  "line": 42
                                }
                              }
                            }
                          },
                          "range": [
                            1097,
                            1118
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 42
                            },
                            "start": {
                              "column": 12,
                              "line": 42
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          1097,
                          1118
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 42
                          },
                          "start": {
                            "column": 12,
                            "line": 42
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      1093,
                      1119
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 42
                      },
                      "start": {
                        "column": 8,
                        "line": 42
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
                          "name": "t",
                          "optional": false,
                          "range": [
                            1132,
                            1133
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 43
                            },
                            "start": {
                              "column": 12,
                              "line": 43
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MyTestClass",
                          "optional": false,
                          "range": [
                            1136,
                            1147
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 43
                            },
                            "start": {
                              "column": 16,
                              "line": 43
                            }
                          }
                        },
                        "range": [
                          1132,
                          1147
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 43
                          },
                          "start": {
                            "column": 12,
                            "line": 43
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      1128,
                      1148
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 43
                      },
                      "start": {
                        "column": 8,
                        "line": 43
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "range": [
                          1157,
                          1158
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 44
                          },
                          "start": {
                            "column": 8,
                            "line": 44
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "range": [
                          1159,
                          1171
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 44
                          },
                          "start": {
                            "column": 10,
                            "line": 44
                          }
                        }
                      },
                      "range": [
                        1157,
                        1171
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 44
                        },
                        "start": {
                          "column": 8,
                          "line": 44
                        }
                      }
                    },
                    "range": [
                      1157,
                      1172
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 44
                      },
                      "start": {
                        "column": 8,
                        "line": 44
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
                          "name": "p",
                          "optional": false,
                          "range": [
                            1264,
                            1265
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
                        "init": {
                          "type": "ThisExpression",
                          "range": [
                            1268,
                            1272
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 47
                            },
                            "start": {
                              "column": 16,
                              "line": 47
                            }
                          }
                        },
                        "range": [
                          1264,
                          1272
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 47
                          },
                          "start": {
                            "column": 12,
                            "line": 47
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      1260,
                      1273
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
                  {
                    "type": "VariableDeclaration",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 48
                              },
                              "start": {
                                "column": 13,
                                "line": 48
                              }
                            },
                            "range": [
                              1287,
                              1307
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyTestClass",
                                "optional": false,
                                "range": [
                                  1296,
                                  1307
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 48
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 48
                                  }
                                }
                              },
                              "range": [
                                1289,
                                1307
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 48
                                },
                                "start": {
                                  "column": 15,
                                  "line": 48
                                }
                              }
                            }
                          },
                          "range": [
                            1286,
                            1307
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 48
                            },
                            "start": {
                              "column": 12,
                              "line": 48
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          1286,
                          1307
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 48
                          },
                          "start": {
                            "column": 12,
                            "line": 48
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      1282,
                      1308
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 48
                      },
                      "start": {
                        "column": 8,
                        "line": 48
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
                          "name": "p",
                          "optional": false,
                          "range": [
                            1321,
                            1322
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 49
                            },
                            "start": {
                              "column": 12,
                              "line": 49
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MyTestClass",
                          "optional": false,
                          "range": [
                            1325,
                            1336
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 49
                            },
                            "start": {
                              "column": 16,
                              "line": 49
                            }
                          }
                        },
                        "range": [
                          1321,
                          1336
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 49
                          },
                          "start": {
                            "column": 12,
                            "line": 49
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      1317,
                      1337
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 49
                      },
                      "start": {
                        "column": 8,
                        "line": 49
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "range": [
                          1346,
                          1347
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 50
                          },
                          "start": {
                            "column": 8,
                            "line": 50
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "range": [
                          1348,
                          1360
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 50
                          },
                          "start": {
                            "column": 10,
                            "line": 50
                          }
                        }
                      },
                      "range": [
                        1346,
                        1360
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 50
                        },
                        "start": {
                          "column": 8,
                          "line": 50
                        }
                      }
                    },
                    "range": [
                      1346,
                      1361
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 50
                      },
                      "start": {
                        "column": 8,
                        "line": 50
                      }
                    }
                  }
                ],
                "range": [
                  1083,
                  1367
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 51
                  },
                  "start": {
                    "column": 30,
                    "line": 41
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "range": [
                      1073,
                      1074
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 41
                      },
                      "start": {
                        "column": 20,
                        "line": 41
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "ThisExpression",
                    "range": [
                      1077,
                      1081
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 41
                      },
                      "start": {
                        "column": 24,
                        "line": 41
                      }
                    }
                  },
                  "range": [
                    1073,
                    1081
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 41
                    },
                    "start": {
                      "column": 20,
                      "line": 41
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 51
                },
                "start": {
                  "column": 19,
                  "line": 41
                }
              }
            },
            "range": [
              1057,
              1367
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 51
              },
              "start": {
                "column": 4,
                "line": 41
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
              "name": "staticProp",
              "optional": false,
              "range": [
                1384,
                1394
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 53
                },
                "start": {
                  "column": 15,
                  "line": 53
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                1394,
                1613
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
                          "name": "p",
                          "optional": false,
                          "range": [
                            1489,
                            1490
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 55
                            },
                            "start": {
                              "column": 12,
                              "line": 55
                            }
                          }
                        },
                        "init": {
                          "type": "ThisExpression",
                          "range": [
                            1493,
                            1497
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 55
                            },
                            "start": {
                              "column": 16,
                              "line": 55
                            }
                          }
                        },
                        "range": [
                          1489,
                          1497
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 55
                          },
                          "start": {
                            "column": 12,
                            "line": 55
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      1485,
                      1498
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 55
                      },
                      "start": {
                        "column": 8,
                        "line": 55
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 56
                              },
                              "start": {
                                "column": 13,
                                "line": 56
                              }
                            },
                            "range": [
                              1512,
                              1532
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyTestClass",
                                "optional": false,
                                "range": [
                                  1521,
                                  1532
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 56
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 56
                                  }
                                }
                              },
                              "range": [
                                1514,
                                1532
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 56
                                },
                                "start": {
                                  "column": 15,
                                  "line": 56
                                }
                              }
                            }
                          },
                          "range": [
                            1511,
                            1532
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 56
                            },
                            "start": {
                              "column": 12,
                              "line": 56
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          1511,
                          1532
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 56
                          },
                          "start": {
                            "column": 12,
                            "line": 56
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      1507,
                      1533
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 56
                      },
                      "start": {
                        "column": 8,
                        "line": 56
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
                          "name": "p",
                          "optional": false,
                          "range": [
                            1546,
                            1547
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 57
                            },
                            "start": {
                              "column": 12,
                              "line": 57
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MyTestClass",
                          "optional": false,
                          "range": [
                            1550,
                            1561
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 57
                            },
                            "start": {
                              "column": 16,
                              "line": 57
                            }
                          }
                        },
                        "range": [
                          1546,
                          1561
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 57
                          },
                          "start": {
                            "column": 12,
                            "line": 57
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      1542,
                      1562
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 57
                      },
                      "start": {
                        "column": 8,
                        "line": 57
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "range": [
                          1571,
                          1572
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 58
                          },
                          "start": {
                            "column": 8,
                            "line": 58
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "range": [
                          1573,
                          1585
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 58
                          },
                          "start": {
                            "column": 10,
                            "line": 58
                          }
                        }
                      },
                      "range": [
                        1571,
                        1585
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 58
                        },
                        "start": {
                          "column": 8,
                          "line": 58
                        }
                      }
                    },
                    "range": [
                      1571,
                      1586
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 58
                      },
                      "start": {
                        "column": 8,
                        "line": 58
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ThisExpression",
                      "range": [
                        1602,
                        1606
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 59
                        },
                        "start": {
                          "column": 15,
                          "line": 59
                        }
                      }
                    },
                    "range": [
                      1595,
                      1607
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 59
                      },
                      "start": {
                        "column": 8,
                        "line": 59
                      }
                    }
                  }
                ],
                "range": [
                  1397,
                  1613
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 60
                  },
                  "start": {
                    "column": 28,
                    "line": 53
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
                  "line": 60
                },
                "start": {
                  "column": 25,
                  "line": 53
                }
              }
            },
            "range": [
              1373,
              1613
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 60
              },
              "start": {
                "column": 4,
                "line": 53
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
              "name": "staticProp",
              "optional": false,
              "range": [
                1629,
                1639
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 61
                },
                "start": {
                  "column": 15,
                  "line": 61
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                1639,
                1858
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
                          "name": "p",
                          "optional": false,
                          "range": [
                            1755,
                            1756
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 63
                            },
                            "start": {
                              "column": 12,
                              "line": 63
                            }
                          }
                        },
                        "init": {
                          "type": "ThisExpression",
                          "range": [
                            1759,
                            1763
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 63
                            },
                            "start": {
                              "column": 16,
                              "line": 63
                            }
                          }
                        },
                        "range": [
                          1755,
                          1763
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 63
                          },
                          "start": {
                            "column": 12,
                            "line": 63
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      1751,
                      1764
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 63
                      },
                      "start": {
                        "column": 8,
                        "line": 63
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 64
                              },
                              "start": {
                                "column": 13,
                                "line": 64
                              }
                            },
                            "range": [
                              1778,
                              1798
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyTestClass",
                                "optional": false,
                                "range": [
                                  1787,
                                  1798
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 64
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 64
                                  }
                                }
                              },
                              "range": [
                                1780,
                                1798
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 64
                                },
                                "start": {
                                  "column": 15,
                                  "line": 64
                                }
                              }
                            }
                          },
                          "range": [
                            1777,
                            1798
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 64
                            },
                            "start": {
                              "column": 12,
                              "line": 64
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          1777,
                          1798
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 64
                          },
                          "start": {
                            "column": 12,
                            "line": 64
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      1773,
                      1799
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 64
                      },
                      "start": {
                        "column": 8,
                        "line": 64
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
                          "name": "p",
                          "optional": false,
                          "range": [
                            1812,
                            1813
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 65
                            },
                            "start": {
                              "column": 12,
                              "line": 65
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MyTestClass",
                          "optional": false,
                          "range": [
                            1816,
                            1827
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 65
                            },
                            "start": {
                              "column": 16,
                              "line": 65
                            }
                          }
                        },
                        "range": [
                          1812,
                          1827
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 65
                          },
                          "start": {
                            "column": 12,
                            "line": 65
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      1808,
                      1828
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
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
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "range": [
                          1837,
                          1838
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
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "range": [
                          1839,
                          1851
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 66
                          },
                          "start": {
                            "column": 10,
                            "line": 66
                          }
                        }
                      },
                      "range": [
                        1837,
                        1851
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 66
                        },
                        "start": {
                          "column": 8,
                          "line": 66
                        }
                      }
                    },
                    "range": [
                      1837,
                      1852
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
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
                  1663,
                  1858
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 67
                  },
                  "start": {
                    "column": 49,
                    "line": 61
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 61
                      },
                      "start": {
                        "column": 27,
                        "line": 61
                      }
                    },
                    "range": [
                      1641,
                      1661
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MyTestClass",
                        "optional": false,
                        "range": [
                          1650,
                          1661
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 61
                          },
                          "start": {
                            "column": 36,
                            "line": 61
                          }
                        }
                      },
                      "range": [
                        1643,
                        1661
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 61
                        },
                        "start": {
                          "column": 29,
                          "line": 61
                        }
                      }
                    }
                  },
                  "range": [
                    1640,
                    1661
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 61
                    },
                    "start": {
                      "column": 26,
                      "line": 61
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 67
                },
                "start": {
                  "column": 25,
                  "line": 61
                }
              }
            },
            "range": [
              1618,
              1858
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 67
              },
              "start": {
                "column": 4,
                "line": 61
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 68
          },
          "start": {
            "column": 18,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyTestClass",
        "optional": false,
        "range": [
          6,
          17
        ],
        "loc": {
          "end": {
            "column": 17,
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
        1860
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 68
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
          1893,
          3863
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
              "name": "canary",
              "optional": false,
              "range": [
                1907,
                1913
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 71
                },
                "start": {
                  "column": 12,
                  "line": 71
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
                  "line": 71
                },
                "start": {
                  "column": 18,
                  "line": 71
                }
              },
              "range": [
                1913,
                1921
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1915,
                  1921
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 71
                  },
                  "start": {
                    "column": 20,
                    "line": 71
                  }
                }
              }
            },
            "value": null,
            "range": [
              1899,
              1922
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 71
              },
              "start": {
                "column": 4,
                "line": 71
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
              "name": "staticCanary",
              "optional": false,
              "range": [
                1934,
                1946
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 72
                },
                "start": {
                  "column": 11,
                  "line": 72
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 31,
                  "line": 72
                },
                "start": {
                  "column": 23,
                  "line": 72
                }
              },
              "range": [
                1946,
                1954
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1948,
                  1954
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 72
                  },
                  "start": {
                    "column": 25,
                    "line": 72
                  }
                }
              }
            },
            "value": null,
            "range": [
              1927,
              1955
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 72
              },
              "start": {
                "column": 4,
                "line": 72
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                1961,
                1972
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 74
                },
                "start": {
                  "column": 4,
                  "line": 74
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
                1972,
                2131
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
                          "name": "p",
                          "optional": false,
                          "range": [
                            2061,
                            2062
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 76
                            },
                            "start": {
                              "column": 12,
                              "line": 76
                            }
                          }
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              2065,
                              2069
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 76
                              },
                              "start": {
                                "column": 16,
                                "line": 76
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "canary",
                            "optional": false,
                            "range": [
                              2070,
                              2076
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 76
                              },
                              "start": {
                                "column": 21,
                                "line": 76
                              }
                            }
                          },
                          "range": [
                            2065,
                            2076
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 76
                            },
                            "start": {
                              "column": 16,
                              "line": 76
                            }
                          }
                        },
                        "range": [
                          2061,
                          2076
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 76
                          },
                          "start": {
                            "column": 12,
                            "line": 76
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      2057,
                      2077
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 76
                      },
                      "start": {
                        "column": 8,
                        "line": 76
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 77
                              },
                              "start": {
                                "column": 13,
                                "line": 77
                              }
                            },
                            "range": [
                              2091,
                              2099
                            ],
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "range": [
                                2093,
                                2099
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 77
                                },
                                "start": {
                                  "column": 15,
                                  "line": 77
                                }
                              }
                            }
                          },
                          "range": [
                            2090,
                            2099
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 77
                            },
                            "start": {
                              "column": 12,
                              "line": 77
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          2090,
                          2099
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 77
                          },
                          "start": {
                            "column": 12,
                            "line": 77
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      2086,
                      2100
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 77
                      },
                      "start": {
                        "column": 8,
                        "line": 77
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
                          "type": "ThisExpression",
                          "range": [
                            2109,
                            2113
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 78
                            },
                            "start": {
                              "column": 8,
                              "line": 78
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "canary",
                          "optional": false,
                          "range": [
                            2114,
                            2120
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 78
                            },
                            "start": {
                              "column": 13,
                              "line": 78
                            }
                          }
                        },
                        "range": [
                          2109,
                          2120
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 78
                          },
                          "start": {
                            "column": 8,
                            "line": 78
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "3",
                        "value": 3,
                        "range": [
                          2123,
                          2124
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 78
                          },
                          "start": {
                            "column": 22,
                            "line": 78
                          }
                        }
                      },
                      "range": [
                        2109,
                        2124
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 78
                        },
                        "start": {
                          "column": 8,
                          "line": 78
                        }
                      }
                    },
                    "range": [
                      2109,
                      2125
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 78
                      },
                      "start": {
                        "column": 8,
                        "line": 78
                      }
                    }
                  }
                ],
                "range": [
                  1975,
                  2131
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 79
                  },
                  "start": {
                    "column": 18,
                    "line": 74
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
                  "line": 79
                },
                "start": {
                  "column": 15,
                  "line": 74
                }
              }
            },
            "range": [
              1961,
              2131
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 79
              },
              "start": {
                "column": 4,
                "line": 74
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
              "name": "memberFunc",
              "optional": false,
              "range": [
                2215,
                2225
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 82
                },
                "start": {
                  "column": 4,
                  "line": 82
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
                2225,
                2424
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
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 83
                              },
                              "start": {
                                "column": 13,
                                "line": 83
                              }
                            },
                            "range": [
                              2251,
                              2277
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  2271,
                                  2277
                                ],
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "range": [
                                        2272,
                                        2273
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 35,
                                          "line": 83
                                        },
                                        "start": {
                                          "column": 34,
                                          "line": 83
                                        }
                                      }
                                    },
                                    "range": [
                                      2272,
                                      2273
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 35,
                                        "line": 83
                                      },
                                      "start": {
                                        "column": 34,
                                        "line": 83
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "range": [
                                        2275,
                                        2276
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 38,
                                          "line": 83
                                        },
                                        "start": {
                                          "column": 37,
                                          "line": 83
                                        }
                                      }
                                    },
                                    "range": [
                                      2275,
                                      2276
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 38,
                                        "line": 83
                                      },
                                      "start": {
                                        "column": 37,
                                        "line": 83
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 83
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 83
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyGenericTestClass",
                                "optional": false,
                                "range": [
                                  2253,
                                  2271
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 83
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 83
                                  }
                                }
                              },
                              "range": [
                                2253,
                                2277
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 83
                                },
                                "start": {
                                  "column": 15,
                                  "line": 83
                                }
                              }
                            }
                          },
                          "range": [
                            2250,
                            2277
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 83
                            },
                            "start": {
                              "column": 12,
                              "line": 83
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          2250,
                          2277
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 83
                          },
                          "start": {
                            "column": 12,
                            "line": 83
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      2246,
                      2278
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 83
                      },
                      "start": {
                        "column": 8,
                        "line": 83
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
                          "name": "p",
                          "optional": false,
                          "range": [
                            2368,
                            2369
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
                        "init": {
                          "type": "ThisExpression",
                          "range": [
                            2372,
                            2376
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 86
                            },
                            "start": {
                              "column": 16,
                              "line": 86
                            }
                          }
                        },
                        "range": [
                          2368,
                          2376
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 86
                          },
                          "start": {
                            "column": 12,
                            "line": 86
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      2364,
                      2377
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 86
                      },
                      "start": {
                        "column": 8,
                        "line": 86
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 87
                              },
                              "start": {
                                "column": 13,
                                "line": 87
                              }
                            },
                            "range": [
                              2391,
                              2417
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  2411,
                                  2417
                                ],
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "range": [
                                        2412,
                                        2413
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 35,
                                          "line": 87
                                        },
                                        "start": {
                                          "column": 34,
                                          "line": 87
                                        }
                                      }
                                    },
                                    "range": [
                                      2412,
                                      2413
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 35,
                                        "line": 87
                                      },
                                      "start": {
                                        "column": 34,
                                        "line": 87
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "range": [
                                        2415,
                                        2416
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 38,
                                          "line": 87
                                        },
                                        "start": {
                                          "column": 37,
                                          "line": 87
                                        }
                                      }
                                    },
                                    "range": [
                                      2415,
                                      2416
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 38,
                                        "line": 87
                                      },
                                      "start": {
                                        "column": 37,
                                        "line": 87
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 87
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 87
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyGenericTestClass",
                                "optional": false,
                                "range": [
                                  2393,
                                  2411
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 87
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 87
                                  }
                                }
                              },
                              "range": [
                                2393,
                                2417
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 87
                                },
                                "start": {
                                  "column": 15,
                                  "line": 87
                                }
                              }
                            }
                          },
                          "range": [
                            2390,
                            2417
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 87
                            },
                            "start": {
                              "column": 12,
                              "line": 87
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          2390,
                          2417
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 87
                          },
                          "start": {
                            "column": 12,
                            "line": 87
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      2386,
                      2418
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 87
                      },
                      "start": {
                        "column": 8,
                        "line": 87
                      }
                    }
                  }
                ],
                "range": [
                  2236,
                  2424
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 88
                  },
                  "start": {
                    "column": 25,
                    "line": 82
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "range": [
                      2226,
                      2227
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 82
                      },
                      "start": {
                        "column": 15,
                        "line": 82
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "ThisExpression",
                    "range": [
                      2230,
                      2234
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 82
                      },
                      "start": {
                        "column": 19,
                        "line": 82
                      }
                    }
                  },
                  "range": [
                    2226,
                    2234
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 82
                    },
                    "start": {
                      "column": 15,
                      "line": 82
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 88
                },
                "start": {
                  "column": 14,
                  "line": 82
                }
              }
            },
            "range": [
              2215,
              2424
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 88
              },
              "start": {
                "column": 4,
                "line": 82
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
              "name": "prop",
              "optional": false,
              "range": [
                2519,
                2523
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 91
                },
                "start": {
                  "column": 8,
                  "line": 91
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
                2523,
                2617
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
                          "name": "p",
                          "optional": false,
                          "range": [
                            2540,
                            2541
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
                        "init": {
                          "type": "ThisExpression",
                          "range": [
                            2544,
                            2548
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 92
                            },
                            "start": {
                              "column": 16,
                              "line": 92
                            }
                          }
                        },
                        "range": [
                          2540,
                          2548
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 92
                          },
                          "start": {
                            "column": 12,
                            "line": 92
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      2536,
                      2549
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 92
                      },
                      "start": {
                        "column": 8,
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 93
                              },
                              "start": {
                                "column": 13,
                                "line": 93
                              }
                            },
                            "range": [
                              2563,
                              2589
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  2583,
                                  2589
                                ],
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "range": [
                                        2584,
                                        2585
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 35,
                                          "line": 93
                                        },
                                        "start": {
                                          "column": 34,
                                          "line": 93
                                        }
                                      }
                                    },
                                    "range": [
                                      2584,
                                      2585
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 35,
                                        "line": 93
                                      },
                                      "start": {
                                        "column": 34,
                                        "line": 93
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "range": [
                                        2587,
                                        2588
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 38,
                                          "line": 93
                                        },
                                        "start": {
                                          "column": 37,
                                          "line": 93
                                        }
                                      }
                                    },
                                    "range": [
                                      2587,
                                      2588
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 38,
                                        "line": 93
                                      },
                                      "start": {
                                        "column": 37,
                                        "line": 93
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 93
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 93
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyGenericTestClass",
                                "optional": false,
                                "range": [
                                  2565,
                                  2583
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 93
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 93
                                  }
                                }
                              },
                              "range": [
                                2565,
                                2589
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 93
                                },
                                "start": {
                                  "column": 15,
                                  "line": 93
                                }
                              }
                            }
                          },
                          "range": [
                            2562,
                            2589
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 93
                            },
                            "start": {
                              "column": 12,
                              "line": 93
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          2562,
                          2589
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 93
                          },
                          "start": {
                            "column": 12,
                            "line": 93
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      2558,
                      2590
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 93
                      },
                      "start": {
                        "column": 8,
                        "line": 93
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ThisExpression",
                      "range": [
                        2606,
                        2610
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 94
                        },
                        "start": {
                          "column": 15,
                          "line": 94
                        }
                      }
                    },
                    "range": [
                      2599,
                      2611
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 94
                      },
                      "start": {
                        "column": 8,
                        "line": 94
                      }
                    }
                  }
                ],
                "range": [
                  2526,
                  2617
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 95
                  },
                  "start": {
                    "column": 15,
                    "line": 91
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
                  "line": 95
                },
                "start": {
                  "column": 12,
                  "line": 91
                }
              }
            },
            "range": [
              2515,
              2617
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 95
              },
              "start": {
                "column": 4,
                "line": 91
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
              "name": "prop",
              "optional": false,
              "range": [
                2626,
                2630
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 96
                },
                "start": {
                  "column": 8,
                  "line": 96
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
                2630,
                2734
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
                          "name": "p",
                          "optional": false,
                          "range": [
                            2648,
                            2649
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 97
                            },
                            "start": {
                              "column": 12,
                              "line": 97
                            }
                          }
                        },
                        "init": {
                          "type": "ThisExpression",
                          "range": [
                            2652,
                            2656
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 97
                            },
                            "start": {
                              "column": 16,
                              "line": 97
                            }
                          }
                        },
                        "range": [
                          2648,
                          2656
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 97
                          },
                          "start": {
                            "column": 12,
                            "line": 97
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      2644,
                      2657
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 97
                      },
                      "start": {
                        "column": 8,
                        "line": 97
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 98
                              },
                              "start": {
                                "column": 13,
                                "line": 98
                              }
                            },
                            "range": [
                              2671,
                              2697
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  2691,
                                  2697
                                ],
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "range": [
                                        2692,
                                        2693
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 35,
                                          "line": 98
                                        },
                                        "start": {
                                          "column": 34,
                                          "line": 98
                                        }
                                      }
                                    },
                                    "range": [
                                      2692,
                                      2693
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 35,
                                        "line": 98
                                      },
                                      "start": {
                                        "column": 34,
                                        "line": 98
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "range": [
                                        2695,
                                        2696
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 38,
                                          "line": 98
                                        },
                                        "start": {
                                          "column": 37,
                                          "line": 98
                                        }
                                      }
                                    },
                                    "range": [
                                      2695,
                                      2696
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 38,
                                        "line": 98
                                      },
                                      "start": {
                                        "column": 37,
                                        "line": 98
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 98
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 98
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyGenericTestClass",
                                "optional": false,
                                "range": [
                                  2673,
                                  2691
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 98
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 98
                                  }
                                }
                              },
                              "range": [
                                2673,
                                2697
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 98
                                },
                                "start": {
                                  "column": 15,
                                  "line": 98
                                }
                              }
                            }
                          },
                          "range": [
                            2670,
                            2697
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 98
                            },
                            "start": {
                              "column": 12,
                              "line": 98
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          2670,
                          2697
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 98
                          },
                          "start": {
                            "column": 12,
                            "line": 98
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      2666,
                      2698
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 98
                      },
                      "start": {
                        "column": 8,
                        "line": 98
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
                        "name": "p",
                        "optional": false,
                        "range": [
                          2707,
                          2708
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 99
                          },
                          "start": {
                            "column": 8,
                            "line": 99
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          2711,
                          2712
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 99
                          },
                          "start": {
                            "column": 12,
                            "line": 99
                          }
                        }
                      },
                      "range": [
                        2707,
                        2712
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 99
                        },
                        "start": {
                          "column": 8,
                          "line": 99
                        }
                      }
                    },
                    "range": [
                      2707,
                      2713
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 99
                      },
                      "start": {
                        "column": 8,
                        "line": 99
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
                        "name": "v",
                        "optional": false,
                        "range": [
                          2722,
                          2723
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 100
                          },
                          "start": {
                            "column": 8,
                            "line": 100
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "range": [
                          2726,
                          2727
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 100
                          },
                          "start": {
                            "column": 12,
                            "line": 100
                          }
                        }
                      },
                      "range": [
                        2722,
                        2727
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 100
                        },
                        "start": {
                          "column": 8,
                          "line": 100
                        }
                      }
                    },
                    "range": [
                      2722,
                      2728
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 100
                      },
                      "start": {
                        "column": 8,
                        "line": 100
                      }
                    }
                  }
                ],
                "range": [
                  2634,
                  2734
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 101
                  },
                  "start": {
                    "column": 16,
                    "line": 96
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
                  "name": "v",
                  "optional": false,
                  "range": [
                    2631,
                    2632
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 96
                    },
                    "start": {
                      "column": 13,
                      "line": 96
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 101
                },
                "start": {
                  "column": 12,
                  "line": 96
                }
              }
            },
            "range": [
              2622,
              2734
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 101
              },
              "start": {
                "column": 4,
                "line": 96
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
              "name": "someFunc",
              "optional": false,
              "range": [
                2740,
                2748
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 103
                },
                "start": {
                  "column": 4,
                  "line": 103
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
                          "name": "t",
                          "optional": false,
                          "range": [
                            2854,
                            2855
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 105
                            },
                            "start": {
                              "column": 12,
                              "line": 105
                            }
                          }
                        },
                        "init": {
                          "type": "ThisExpression",
                          "range": [
                            2858,
                            2862
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 105
                            },
                            "start": {
                              "column": 16,
                              "line": 105
                            }
                          }
                        },
                        "range": [
                          2854,
                          2862
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 105
                          },
                          "start": {
                            "column": 12,
                            "line": 105
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      2850,
                      2863
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 105
                      },
                      "start": {
                        "column": 8,
                        "line": 105
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
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 106
                              },
                              "start": {
                                "column": 13,
                                "line": 106
                              }
                            },
                            "range": [
                              2877,
                              2903
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  2897,
                                  2903
                                ],
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "range": [
                                        2898,
                                        2899
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 35,
                                          "line": 106
                                        },
                                        "start": {
                                          "column": 34,
                                          "line": 106
                                        }
                                      }
                                    },
                                    "range": [
                                      2898,
                                      2899
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 35,
                                        "line": 106
                                      },
                                      "start": {
                                        "column": 34,
                                        "line": 106
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "range": [
                                        2901,
                                        2902
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 38,
                                          "line": 106
                                        },
                                        "start": {
                                          "column": 37,
                                          "line": 106
                                        }
                                      }
                                    },
                                    "range": [
                                      2901,
                                      2902
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 38,
                                        "line": 106
                                      },
                                      "start": {
                                        "column": 37,
                                        "line": 106
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 106
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 106
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyGenericTestClass",
                                "optional": false,
                                "range": [
                                  2879,
                                  2897
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 106
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 106
                                  }
                                }
                              },
                              "range": [
                                2879,
                                2903
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 106
                                },
                                "start": {
                                  "column": 15,
                                  "line": 106
                                }
                              }
                            }
                          },
                          "range": [
                            2876,
                            2903
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 106
                            },
                            "start": {
                              "column": 12,
                              "line": 106
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          2876,
                          2903
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 106
                          },
                          "start": {
                            "column": 12,
                            "line": 106
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      2872,
                      2904
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 106
                      },
                      "start": {
                        "column": 8,
                        "line": 106
                      }
                    }
                  }
                ],
                "range": [
                  2757,
                  2910
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 107
                  },
                  "start": {
                    "column": 21,
                    "line": 103
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                2751,
                2910
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 107
                },
                "start": {
                  "column": 15,
                  "line": 103
                }
              }
            },
            "range": [
              2740,
              2911
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 107
              },
              "start": {
                "column": 4,
                "line": 103
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
              "name": "staticFn",
              "optional": false,
              "range": [
                3004,
                3012
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 110
                },
                "start": {
                  "column": 11,
                  "line": 110
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                3012,
                3335
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
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 111
                              },
                              "start": {
                                "column": 13,
                                "line": 111
                              }
                            },
                            "range": [
                              3038,
                              3065
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyGenericTestClass",
                                "optional": false,
                                "range": [
                                  3047,
                                  3065
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 111
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 111
                                  }
                                }
                              },
                              "range": [
                                3040,
                                3065
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 111
                                },
                                "start": {
                                  "column": 15,
                                  "line": 111
                                }
                              }
                            }
                          },
                          "range": [
                            3037,
                            3065
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 111
                            },
                            "start": {
                              "column": 12,
                              "line": 111
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          3037,
                          3065
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 111
                          },
                          "start": {
                            "column": 12,
                            "line": 111
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      3033,
                      3066
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 111
                      },
                      "start": {
                        "column": 8,
                        "line": 111
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
                          "name": "t",
                          "optional": false,
                          "range": [
                            3079,
                            3080
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 112
                            },
                            "start": {
                              "column": 12,
                              "line": 112
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MyGenericTestClass",
                          "optional": false,
                          "range": [
                            3083,
                            3101
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 112
                            },
                            "start": {
                              "column": 16,
                              "line": 112
                            }
                          }
                        },
                        "range": [
                          3079,
                          3101
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 112
                          },
                          "start": {
                            "column": 12,
                            "line": 112
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      3075,
                      3102
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 112
                      },
                      "start": {
                        "column": 8,
                        "line": 112
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "range": [
                          3111,
                          3112
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 113
                          },
                          "start": {
                            "column": 8,
                            "line": 113
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "range": [
                          3113,
                          3125
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 113
                          },
                          "start": {
                            "column": 10,
                            "line": 113
                          }
                        }
                      },
                      "range": [
                        3111,
                        3125
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 113
                        },
                        "start": {
                          "column": 8,
                          "line": 113
                        }
                      }
                    },
                    "range": [
                      3111,
                      3126
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 113
                      },
                      "start": {
                        "column": 8,
                        "line": 113
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
                          "name": "p",
                          "optional": false,
                          "range": [
                            3218,
                            3219
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 116
                            },
                            "start": {
                              "column": 12,
                              "line": 116
                            }
                          }
                        },
                        "init": {
                          "type": "ThisExpression",
                          "range": [
                            3222,
                            3226
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 116
                            },
                            "start": {
                              "column": 16,
                              "line": 116
                            }
                          }
                        },
                        "range": [
                          3218,
                          3226
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 116
                          },
                          "start": {
                            "column": 12,
                            "line": 116
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      3214,
                      3227
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 116
                      },
                      "start": {
                        "column": 8,
                        "line": 116
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 117
                              },
                              "start": {
                                "column": 13,
                                "line": 117
                              }
                            },
                            "range": [
                              3241,
                              3268
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyGenericTestClass",
                                "optional": false,
                                "range": [
                                  3250,
                                  3268
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 117
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 117
                                  }
                                }
                              },
                              "range": [
                                3243,
                                3268
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 117
                                },
                                "start": {
                                  "column": 15,
                                  "line": 117
                                }
                              }
                            }
                          },
                          "range": [
                            3240,
                            3268
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 117
                            },
                            "start": {
                              "column": 12,
                              "line": 117
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          3240,
                          3268
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 117
                          },
                          "start": {
                            "column": 12,
                            "line": 117
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      3236,
                      3269
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 117
                      },
                      "start": {
                        "column": 8,
                        "line": 117
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
                          "name": "p",
                          "optional": false,
                          "range": [
                            3282,
                            3283
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 118
                            },
                            "start": {
                              "column": 12,
                              "line": 118
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MyGenericTestClass",
                          "optional": false,
                          "range": [
                            3286,
                            3304
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 118
                            },
                            "start": {
                              "column": 16,
                              "line": 118
                            }
                          }
                        },
                        "range": [
                          3282,
                          3304
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 118
                          },
                          "start": {
                            "column": 12,
                            "line": 118
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      3278,
                      3305
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 118
                      },
                      "start": {
                        "column": 8,
                        "line": 118
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "range": [
                          3314,
                          3315
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 119
                          },
                          "start": {
                            "column": 8,
                            "line": 119
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "range": [
                          3316,
                          3328
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 119
                          },
                          "start": {
                            "column": 10,
                            "line": 119
                          }
                        }
                      },
                      "range": [
                        3314,
                        3328
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 119
                        },
                        "start": {
                          "column": 8,
                          "line": 119
                        }
                      }
                    },
                    "range": [
                      3314,
                      3329
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 119
                      },
                      "start": {
                        "column": 8,
                        "line": 119
                      }
                    }
                  }
                ],
                "range": [
                  3023,
                  3335
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 120
                  },
                  "start": {
                    "column": 30,
                    "line": 110
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "range": [
                      3013,
                      3014
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 110
                      },
                      "start": {
                        "column": 20,
                        "line": 110
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "ThisExpression",
                    "range": [
                      3017,
                      3021
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 110
                      },
                      "start": {
                        "column": 24,
                        "line": 110
                      }
                    }
                  },
                  "range": [
                    3013,
                    3021
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 110
                    },
                    "start": {
                      "column": 20,
                      "line": 110
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 120
                },
                "start": {
                  "column": 19,
                  "line": 110
                }
              }
            },
            "range": [
              2997,
              3335
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 120
              },
              "start": {
                "column": 4,
                "line": 110
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
              "name": "staticProp",
              "optional": false,
              "range": [
                3352,
                3362
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 122
                },
                "start": {
                  "column": 15,
                  "line": 122
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                3362,
                3595
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
                          "name": "p",
                          "optional": false,
                          "range": [
                            3457,
                            3458
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 124
                            },
                            "start": {
                              "column": 12,
                              "line": 124
                            }
                          }
                        },
                        "init": {
                          "type": "ThisExpression",
                          "range": [
                            3461,
                            3465
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 124
                            },
                            "start": {
                              "column": 16,
                              "line": 124
                            }
                          }
                        },
                        "range": [
                          3457,
                          3465
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 124
                          },
                          "start": {
                            "column": 12,
                            "line": 124
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      3453,
                      3466
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 124
                      },
                      "start": {
                        "column": 8,
                        "line": 124
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 125
                              },
                              "start": {
                                "column": 13,
                                "line": 125
                              }
                            },
                            "range": [
                              3480,
                              3507
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyGenericTestClass",
                                "optional": false,
                                "range": [
                                  3489,
                                  3507
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 125
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 125
                                  }
                                }
                              },
                              "range": [
                                3482,
                                3507
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 125
                                },
                                "start": {
                                  "column": 15,
                                  "line": 125
                                }
                              }
                            }
                          },
                          "range": [
                            3479,
                            3507
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 125
                            },
                            "start": {
                              "column": 12,
                              "line": 125
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          3479,
                          3507
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 125
                          },
                          "start": {
                            "column": 12,
                            "line": 125
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      3475,
                      3508
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 125
                      },
                      "start": {
                        "column": 8,
                        "line": 125
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
                          "name": "p",
                          "optional": false,
                          "range": [
                            3521,
                            3522
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 126
                            },
                            "start": {
                              "column": 12,
                              "line": 126
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MyGenericTestClass",
                          "optional": false,
                          "range": [
                            3525,
                            3543
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 126
                            },
                            "start": {
                              "column": 16,
                              "line": 126
                            }
                          }
                        },
                        "range": [
                          3521,
                          3543
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 126
                          },
                          "start": {
                            "column": 12,
                            "line": 126
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      3517,
                      3544
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 126
                      },
                      "start": {
                        "column": 8,
                        "line": 126
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "range": [
                          3553,
                          3554
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 127
                          },
                          "start": {
                            "column": 8,
                            "line": 127
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "range": [
                          3555,
                          3567
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
                      "range": [
                        3553,
                        3567
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 127
                        },
                        "start": {
                          "column": 8,
                          "line": 127
                        }
                      }
                    },
                    "range": [
                      3553,
                      3568
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 127
                      },
                      "start": {
                        "column": 8,
                        "line": 127
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ThisExpression",
                      "range": [
                        3584,
                        3588
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 128
                        },
                        "start": {
                          "column": 15,
                          "line": 128
                        }
                      }
                    },
                    "range": [
                      3577,
                      3589
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 128
                      },
                      "start": {
                        "column": 8,
                        "line": 128
                      }
                    }
                  }
                ],
                "range": [
                  3365,
                  3595
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 129
                  },
                  "start": {
                    "column": 28,
                    "line": 122
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
                  "line": 129
                },
                "start": {
                  "column": 25,
                  "line": 122
                }
              }
            },
            "range": [
              3341,
              3595
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 129
              },
              "start": {
                "column": 4,
                "line": 122
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
              "name": "staticProp",
              "optional": false,
              "range": [
                3611,
                3621
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 130
                },
                "start": {
                  "column": 15,
                  "line": 130
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                3621,
                3861
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
                          "name": "p",
                          "optional": false,
                          "range": [
                            3744,
                            3745
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 132
                            },
                            "start": {
                              "column": 12,
                              "line": 132
                            }
                          }
                        },
                        "init": {
                          "type": "ThisExpression",
                          "range": [
                            3748,
                            3752
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 132
                            },
                            "start": {
                              "column": 16,
                              "line": 132
                            }
                          }
                        },
                        "range": [
                          3744,
                          3752
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 132
                          },
                          "start": {
                            "column": 12,
                            "line": 132
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      3740,
                      3753
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 132
                      },
                      "start": {
                        "column": 8,
                        "line": 132
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 133
                              },
                              "start": {
                                "column": 13,
                                "line": 133
                              }
                            },
                            "range": [
                              3767,
                              3794
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "MyGenericTestClass",
                                "optional": false,
                                "range": [
                                  3776,
                                  3794
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 133
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 133
                                  }
                                }
                              },
                              "range": [
                                3769,
                                3794
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 133
                                },
                                "start": {
                                  "column": 15,
                                  "line": 133
                                }
                              }
                            }
                          },
                          "range": [
                            3766,
                            3794
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 133
                            },
                            "start": {
                              "column": 12,
                              "line": 133
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          3766,
                          3794
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 133
                          },
                          "start": {
                            "column": 12,
                            "line": 133
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      3762,
                      3795
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 133
                      },
                      "start": {
                        "column": 8,
                        "line": 133
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
                          "name": "p",
                          "optional": false,
                          "range": [
                            3808,
                            3809
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 134
                            },
                            "start": {
                              "column": 12,
                              "line": 134
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MyGenericTestClass",
                          "optional": false,
                          "range": [
                            3812,
                            3830
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 134
                            },
                            "start": {
                              "column": 16,
                              "line": 134
                            }
                          }
                        },
                        "range": [
                          3808,
                          3830
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 134
                          },
                          "start": {
                            "column": 12,
                            "line": 134
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      3804,
                      3831
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 134
                      },
                      "start": {
                        "column": 8,
                        "line": 134
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "range": [
                          3840,
                          3841
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 135
                          },
                          "start": {
                            "column": 8,
                            "line": 135
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "staticCanary",
                        "optional": false,
                        "range": [
                          3842,
                          3854
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 135
                          },
                          "start": {
                            "column": 10,
                            "line": 135
                          }
                        }
                      },
                      "range": [
                        3840,
                        3854
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 135
                        },
                        "start": {
                          "column": 8,
                          "line": 135
                        }
                      }
                    },
                    "range": [
                      3840,
                      3855
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 135
                      },
                      "start": {
                        "column": 8,
                        "line": 135
                      }
                    }
                  }
                ],
                "range": [
                  3652,
                  3861
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 136
                  },
                  "start": {
                    "column": 56,
                    "line": 130
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 130
                      },
                      "start": {
                        "column": 27,
                        "line": 130
                      }
                    },
                    "range": [
                      3623,
                      3650
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "MyGenericTestClass",
                        "optional": false,
                        "range": [
                          3632,
                          3650
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 130
                          },
                          "start": {
                            "column": 36,
                            "line": 130
                          }
                        }
                      },
                      "range": [
                        3625,
                        3650
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 130
                        },
                        "start": {
                          "column": 29,
                          "line": 130
                        }
                      }
                    }
                  },
                  "range": [
                    3622,
                    3650
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 130
                    },
                    "start": {
                      "column": 26,
                      "line": 130
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 136
                },
                "start": {
                  "column": 25,
                  "line": 130
                }
              }
            },
            "range": [
              3600,
              3861
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 136
              },
              "start": {
                "column": 4,
                "line": 130
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 137
          },
          "start": {
            "column": 31,
            "line": 70
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyGenericTestClass",
        "optional": false,
        "range": [
          1868,
          1886
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 70
          },
          "start": {
            "column": 6,
            "line": 70
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 30,
            "line": 70
          },
          "start": {
            "column": 24,
            "line": 70
          }
        },
        "range": [
          1886,
          1892
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
                1887,
                1888
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 70
                },
                "start": {
                  "column": 25,
                  "line": 70
                }
              }
            },
            "out": false,
            "range": [
              1887,
              1888
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 70
              },
              "start": {
                "column": 25,
                "line": 70
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
              "name": "U",
              "optional": false,
              "range": [
                1890,
                1891
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 70
                },
                "start": {
                  "column": 28,
                  "line": 70
                }
              }
            },
            "out": false,
            "range": [
              1890,
              1891
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 70
              },
              "start": {
                "column": 28,
                "line": 70
              }
            }
          }
        ]
      },
      "range": [
        1862,
        3863
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 137
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 141
                      },
                      "start": {
                        "column": 9,
                        "line": 141
                      }
                    },
                    "range": [
                      3959,
                      3964
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        3961,
                        3964
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 141
                        },
                        "start": {
                          "column": 11,
                          "line": 141
                        }
                      }
                    }
                  },
                  "range": [
                    3958,
                    3964
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 141
                    },
                    "start": {
                      "column": 8,
                      "line": 141
                    }
                  }
                },
                "init": null,
                "range": [
                  3958,
                  3964
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 141
                  },
                  "start": {
                    "column": 8,
                    "line": 141
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              3954,
              3965
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 141
              },
              "start": {
                "column": 4,
                "line": 141
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
                  "name": "s",
                  "optional": false,
                  "range": [
                    3970,
                    3971
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 142
                    },
                    "start": {
                      "column": 4,
                      "line": 142
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "spaaaaaaace",
                  "optional": false,
                  "range": [
                    3972,
                    3983
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 142
                    },
                    "start": {
                      "column": 6,
                      "line": 142
                    }
                  }
                },
                "range": [
                  3970,
                  3983
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 142
                  },
                  "start": {
                    "column": 4,
                    "line": 142
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "4",
                "value": 4,
                "range": [
                  3986,
                  3987
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 142
                  },
                  "start": {
                    "column": 20,
                    "line": 142
                  }
                }
              },
              "range": [
                3970,
                3987
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 142
                },
                "start": {
                  "column": 4,
                  "line": 142
                }
              }
            },
            "range": [
              3970,
              3988
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 142
              },
              "start": {
                "column": 4,
                "line": 142
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 145
                      },
                      "start": {
                        "column": 9,
                        "line": 145
                      }
                    },
                    "range": [
                      4058,
                      4063
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        4060,
                        4063
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 145
                        },
                        "start": {
                          "column": 11,
                          "line": 145
                        }
                      }
                    }
                  },
                  "range": [
                    4057,
                    4063
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 145
                    },
                    "start": {
                      "column": 8,
                      "line": 145
                    }
                  }
                },
                "init": null,
                "range": [
                  4057,
                  4063
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 145
                  },
                  "start": {
                    "column": 8,
                    "line": 145
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              4053,
              4064
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 145
              },
              "start": {
                "column": 4,
                "line": 145
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
                  "name": "t",
                  "optional": false,
                  "range": [
                    4073,
                    4074
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 146
                    },
                    "start": {
                      "column": 8,
                      "line": 146
                    }
                  }
                },
                "init": {
                  "type": "ThisExpression",
                  "range": [
                    4077,
                    4081
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 146
                    },
                    "start": {
                      "column": 12,
                      "line": 146
                    }
                  }
                },
                "range": [
                  4073,
                  4081
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 146
                  },
                  "start": {
                    "column": 8,
                    "line": 146
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              4069,
              4082
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 146
              },
              "start": {
                "column": 4,
                "line": 146
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
                  "type": "ThisExpression",
                  "range": [
                    4087,
                    4091
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 147
                    },
                    "start": {
                      "column": 4,
                      "line": 147
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "spaaaaace",
                  "optional": false,
                  "range": [
                    4092,
                    4101
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 147
                    },
                    "start": {
                      "column": 9,
                      "line": 147
                    }
                  }
                },
                "range": [
                  4087,
                  4101
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 147
                  },
                  "start": {
                    "column": 4,
                    "line": 147
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "4",
                "value": 4,
                "range": [
                  4104,
                  4105
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 147
                  },
                  "start": {
                    "column": 21,
                    "line": 147
                  }
                }
              },
              "range": [
                4087,
                4105
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 147
                },
                "start": {
                  "column": 4,
                  "line": 147
                }
              }
            },
            "range": [
              4087,
              4106
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 147
              },
              "start": {
                "column": 4,
                "line": 147
              }
            }
          }
        ],
        "range": [
          3948,
          4108
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 148
          },
          "start": {
            "column": 22,
            "line": 140
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "range": [
          3935,
          3937
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 140
          },
          "start": {
            "column": 9,
            "line": 140
          }
        }
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "range": [
              3938,
              3939
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 140
              },
              "start": {
                "column": 12,
                "line": 140
              }
            }
          },
          "optional": false,
          "right": {
            "type": "ThisExpression",
            "range": [
              3942,
              3946
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 140
              },
              "start": {
                "column": 16,
                "line": 140
              }
            }
          },
          "range": [
            3938,
            3946
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 140
            },
            "start": {
              "column": 12,
              "line": 140
            }
          }
        }
      ],
      "range": [
        3926,
        4108
      ],
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
            "name": "q1",
            "optional": false,
            "range": [
              4179,
              4181
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 151
              },
              "start": {
                "column": 4,
                "line": 151
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
                  "type": "VariableDeclaration",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 152
                            },
                            "start": {
                              "column": 9,
                              "line": 152
                            }
                          },
                          "range": [
                            4215,
                            4220
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              4217,
                              4220
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 152
                              },
                              "start": {
                                "column": 11,
                                "line": 152
                              }
                            }
                          }
                        },
                        "range": [
                          4214,
                          4220
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 152
                          },
                          "start": {
                            "column": 8,
                            "line": 152
                          }
                        }
                      },
                      "init": null,
                      "range": [
                        4214,
                        4220
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 152
                        },
                        "start": {
                          "column": 8,
                          "line": 152
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    4210,
                    4221
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 152
                    },
                    "start": {
                      "column": 4,
                      "line": 152
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
                        "name": "s",
                        "optional": false,
                        "range": [
                          4226,
                          4227
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 153
                          },
                          "start": {
                            "column": 4,
                            "line": 153
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "spaaaaaaace",
                        "optional": false,
                        "range": [
                          4228,
                          4239
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 153
                          },
                          "start": {
                            "column": 6,
                            "line": 153
                          }
                        }
                      },
                      "range": [
                        4226,
                        4239
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 153
                        },
                        "start": {
                          "column": 4,
                          "line": 153
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "4",
                      "value": 4,
                      "range": [
                        4242,
                        4243
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 153
                        },
                        "start": {
                          "column": 20,
                          "line": 153
                        }
                      }
                    },
                    "range": [
                      4226,
                      4243
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 153
                      },
                      "start": {
                        "column": 4,
                        "line": 153
                      }
                    }
                  },
                  "range": [
                    4226,
                    4244
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 153
                    },
                    "start": {
                      "column": 4,
                      "line": 153
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
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 156
                            },
                            "start": {
                              "column": 9,
                              "line": 156
                            }
                          },
                          "range": [
                            4313,
                            4318
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              4315,
                              4318
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 156
                              },
                              "start": {
                                "column": 11,
                                "line": 156
                              }
                            }
                          }
                        },
                        "range": [
                          4312,
                          4318
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 156
                          },
                          "start": {
                            "column": 8,
                            "line": 156
                          }
                        }
                      },
                      "init": null,
                      "range": [
                        4312,
                        4318
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 156
                        },
                        "start": {
                          "column": 8,
                          "line": 156
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    4308,
                    4319
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 156
                    },
                    "start": {
                      "column": 4,
                      "line": 156
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
                        "name": "t",
                        "optional": false,
                        "range": [
                          4328,
                          4329
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 157
                          },
                          "start": {
                            "column": 8,
                            "line": 157
                          }
                        }
                      },
                      "init": {
                        "type": "ThisExpression",
                        "range": [
                          4332,
                          4336
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 157
                          },
                          "start": {
                            "column": 12,
                            "line": 157
                          }
                        }
                      },
                      "range": [
                        4328,
                        4336
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 157
                        },
                        "start": {
                          "column": 8,
                          "line": 157
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    4324,
                    4337
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 157
                    },
                    "start": {
                      "column": 4,
                      "line": 157
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
                        "type": "ThisExpression",
                        "range": [
                          4342,
                          4346
                        ],
                        "loc": {
                          "end": {
                            "column": 8,
                            "line": 158
                          },
                          "start": {
                            "column": 4,
                            "line": 158
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "spaaaaace",
                        "optional": false,
                        "range": [
                          4347,
                          4356
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 158
                          },
                          "start": {
                            "column": 9,
                            "line": 158
                          }
                        }
                      },
                      "range": [
                        4342,
                        4356
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 158
                        },
                        "start": {
                          "column": 4,
                          "line": 158
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "4",
                      "value": 4,
                      "range": [
                        4359,
                        4360
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 158
                        },
                        "start": {
                          "column": 21,
                          "line": 158
                        }
                      }
                    },
                    "range": [
                      4342,
                      4360
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 158
                      },
                      "start": {
                        "column": 4,
                        "line": 158
                      }
                    }
                  },
                  "range": [
                    4342,
                    4361
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 158
                    },
                    "start": {
                      "column": 4,
                      "line": 158
                    }
                  }
                }
              ],
              "range": [
                4204,
                4363
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 159
                },
                "start": {
                  "column": 29,
                  "line": 151
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "range": [
                    4194,
                    4195
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 151
                    },
                    "start": {
                      "column": 19,
                      "line": 151
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "ThisExpression",
                  "range": [
                    4198,
                    4202
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 151
                    },
                    "start": {
                      "column": 23,
                      "line": 151
                    }
                  }
                },
                "range": [
                  4194,
                  4202
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 151
                  },
                  "start": {
                    "column": 19,
                    "line": 151
                  }
                }
              }
            ],
            "range": [
              4184,
              4363
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 159
              },
              "start": {
                "column": 9,
                "line": 151
              }
            }
          },
          "range": [
            4179,
            4363
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 159
            },
            "start": {
              "column": 4,
              "line": 151
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        4175,
        4363
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 159
        },
        "start": {
          "column": 0,
          "line": 151
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
            "name": "q2",
            "optional": false,
            "range": [
              4444,
              4446
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 162
              },
              "start": {
                "column": 4,
                "line": 162
              }
            }
          },
          "init": {
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
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 163
                            },
                            "start": {
                              "column": 9,
                              "line": 163
                            }
                          },
                          "range": [
                            4474,
                            4493
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "globalThis",
                              "optional": false,
                              "range": [
                                4483,
                                4493
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 163
                                },
                                "start": {
                                  "column": 18,
                                  "line": 163
                                }
                              }
                            },
                            "range": [
                              4476,
                              4493
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 163
                              },
                              "start": {
                                "column": 11,
                                "line": 163
                              }
                            }
                          }
                        },
                        "range": [
                          4473,
                          4493
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 163
                          },
                          "start": {
                            "column": 8,
                            "line": 163
                          }
                        }
                      },
                      "init": null,
                      "range": [
                        4473,
                        4493
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 163
                        },
                        "start": {
                          "column": 8,
                          "line": 163
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    4469,
                    4494
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 163
                    },
                    "start": {
                      "column": 4,
                      "line": 163
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
                        "name": "s",
                        "optional": false,
                        "range": [
                          4499,
                          4500
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 164
                          },
                          "start": {
                            "column": 4,
                            "line": 164
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "spaaaaaaace",
                        "optional": false,
                        "range": [
                          4501,
                          4512
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 164
                          },
                          "start": {
                            "column": 6,
                            "line": 164
                          }
                        }
                      },
                      "range": [
                        4499,
                        4512
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 164
                        },
                        "start": {
                          "column": 4,
                          "line": 164
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "4",
                      "value": 4,
                      "range": [
                        4515,
                        4516
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 164
                        },
                        "start": {
                          "column": 20,
                          "line": 164
                        }
                      }
                    },
                    "range": [
                      4499,
                      4516
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 164
                      },
                      "start": {
                        "column": 4,
                        "line": 164
                      }
                    }
                  },
                  "range": [
                    4499,
                    4517
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 164
                    },
                    "start": {
                      "column": 4,
                      "line": 164
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
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 167
                            },
                            "start": {
                              "column": 9,
                              "line": 167
                            }
                          },
                          "range": [
                            4601,
                            4620
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "globalThis",
                              "optional": false,
                              "range": [
                                4610,
                                4620
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 167
                                },
                                "start": {
                                  "column": 18,
                                  "line": 167
                                }
                              }
                            },
                            "range": [
                              4603,
                              4620
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 167
                              },
                              "start": {
                                "column": 11,
                                "line": 167
                              }
                            }
                          }
                        },
                        "range": [
                          4600,
                          4620
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 167
                          },
                          "start": {
                            "column": 8,
                            "line": 167
                          }
                        }
                      },
                      "init": null,
                      "range": [
                        4600,
                        4620
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 167
                        },
                        "start": {
                          "column": 8,
                          "line": 167
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    4596,
                    4621
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 167
                    },
                    "start": {
                      "column": 4,
                      "line": 167
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
                        "name": "t",
                        "optional": false,
                        "range": [
                          4630,
                          4631
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 168
                          },
                          "start": {
                            "column": 8,
                            "line": 168
                          }
                        }
                      },
                      "init": {
                        "type": "ThisExpression",
                        "range": [
                          4634,
                          4638
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 168
                          },
                          "start": {
                            "column": 12,
                            "line": 168
                          }
                        }
                      },
                      "range": [
                        4630,
                        4638
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 168
                        },
                        "start": {
                          "column": 8,
                          "line": 168
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    4626,
                    4639
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 168
                    },
                    "start": {
                      "column": 4,
                      "line": 168
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
                        "type": "ThisExpression",
                        "range": [
                          4644,
                          4648
                        ],
                        "loc": {
                          "end": {
                            "column": 8,
                            "line": 169
                          },
                          "start": {
                            "column": 4,
                            "line": 169
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "spaaaaace",
                        "optional": false,
                        "range": [
                          4649,
                          4658
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 169
                          },
                          "start": {
                            "column": 9,
                            "line": 169
                          }
                        }
                      },
                      "range": [
                        4644,
                        4658
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 169
                        },
                        "start": {
                          "column": 4,
                          "line": 169
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "4",
                      "value": 4,
                      "range": [
                        4661,
                        4662
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 169
                        },
                        "start": {
                          "column": 21,
                          "line": 169
                        }
                      }
                    },
                    "range": [
                      4644,
                      4662
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 169
                      },
                      "start": {
                        "column": 4,
                        "line": 169
                      }
                    }
                  },
                  "range": [
                    4644,
                    4663
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 169
                    },
                    "start": {
                      "column": 4,
                      "line": 169
                    }
                  }
                }
              ],
              "range": [
                4463,
                4665
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 170
                },
                "start": {
                  "column": 23,
                  "line": 162
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "range": [
                    4450,
                    4451
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 162
                    },
                    "start": {
                      "column": 10,
                      "line": 162
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "ThisExpression",
                  "range": [
                    4454,
                    4458
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 162
                    },
                    "start": {
                      "column": 14,
                      "line": 162
                    }
                  }
                },
                "range": [
                  4450,
                  4458
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 162
                  },
                  "start": {
                    "column": 10,
                    "line": 162
                  }
                }
              }
            ],
            "range": [
              4449,
              4665
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 170
              },
              "start": {
                "column": 9,
                "line": 162
              }
            }
          },
          "range": [
            4444,
            4665
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 170
            },
            "start": {
              "column": 4,
              "line": 162
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        4440,
        4665
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 170
        },
        "start": {
          "column": 0,
          "line": 162
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
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 173
                },
                "start": {
                  "column": 5,
                  "line": 173
                }
              },
              "range": [
                4720,
                4739
              ],
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "globalThis",
                  "optional": false,
                  "range": [
                    4729,
                    4739
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 173
                    },
                    "start": {
                      "column": 14,
                      "line": 173
                    }
                  }
                },
                "range": [
                  4722,
                  4739
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 173
                  },
                  "start": {
                    "column": 7,
                    "line": 173
                  }
                }
              }
            },
            "range": [
              4719,
              4739
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 173
              },
              "start": {
                "column": 4,
                "line": 173
              }
            }
          },
          "init": null,
          "range": [
            4719,
            4739
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 173
            },
            "start": {
              "column": 4,
              "line": 173
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        4715,
        4740
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 173
        },
        "start": {
          "column": 0,
          "line": 173
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
            "name": "t",
            "optional": false,
            "range": [
              4745,
              4746
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 174
              },
              "start": {
                "column": 4,
                "line": 174
              }
            }
          },
          "init": {
            "type": "ThisExpression",
            "range": [
              4749,
              4753
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 174
              },
              "start": {
                "column": 8,
                "line": 174
              }
            }
          },
          "range": [
            4745,
            4753
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 174
            },
            "start": {
              "column": 4,
              "line": 174
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        4741,
        4754
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 174
        },
        "start": {
          "column": 0,
          "line": 174
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
            "type": "ThisExpression",
            "range": [
              4755,
              4759
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 175
              },
              "start": {
                "column": 0,
                "line": 175
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "spaaaaace",
            "optional": false,
            "range": [
              4760,
              4769
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 175
              },
              "start": {
                "column": 5,
                "line": 175
              }
            }
          },
          "range": [
            4755,
            4769
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 175
            },
            "start": {
              "column": 0,
              "line": 175
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "4",
          "value": 4,
          "range": [
            4772,
            4773
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 175
            },
            "start": {
              "column": 17,
              "line": 175
            }
          }
        },
        "range": [
          4755,
          4773
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 175
          },
          "start": {
            "column": 0,
            "line": 175
          }
        }
      },
      "range": [
        4755,
        4774
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 175
        },
        "start": {
          "column": 0,
          "line": 175
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 177
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
