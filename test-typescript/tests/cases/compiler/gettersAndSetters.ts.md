__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    11,
    1058
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          19,
          398
        ],
        "body": [
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
              "name": "fooBack",
              "optional": false,
              "range": [
                32,
                39
              ],
              "loc": {
                "end": {
                  "column": 18,
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
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "\"\"",
              "value": "",
              "range": [
                42,
                44
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 3
                },
                "start": {
                  "column": 21,
                  "line": 3
                }
              }
            },
            "range": [
              25,
              45
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
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
              "name": "barBack",
              "optional": false,
              "range": [
                57,
                64
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
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
                  "column": 25,
                  "line": 4
                },
                "start": {
                  "column": 18,
                  "line": 4
                }
              },
              "range": [
                64,
                71
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  65,
                  71
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 4
                  },
                  "start": {
                    "column": 19,
                    "line": 4
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "\"\"",
              "value": "",
              "range": [
                74,
                76
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 4
                },
                "start": {
                  "column": 28,
                  "line": 4
                }
              }
            },
            "range": [
              50,
              77
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
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
              "name": "bazBack",
              "optional": false,
              "range": [
                89,
                96
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
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "\"\"",
              "value": "",
              "range": [
                99,
                101
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 5
                },
                "start": {
                  "column": 21,
                  "line": 5
                }
              }
            },
            "range": [
              82,
              102
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
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
              "name": "Foo",
              "optional": false,
              "range": [
                123,
                126
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 7
                },
                "start": {
                  "column": 15,
                  "line": 7
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
                126,
                152
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
                          138,
                          142
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 7
                          },
                          "start": {
                            "column": 30,
                            "line": 7
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fooBack",
                        "optional": false,
                        "range": [
                          143,
                          150
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 7
                          },
                          "start": {
                            "column": 35,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        138,
                        150
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 7
                        },
                        "start": {
                          "column": 30,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      131,
                      151
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 7
                      },
                      "start": {
                        "column": 23,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  129,
                  152
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 7
                  },
                  "start": {
                    "column": 21,
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
                  "column": 44,
                  "line": 7
                },
                "start": {
                  "column": 18,
                  "line": 7
                }
              }
            },
            "range": [
              112,
              152
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
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
              "name": "Foo",
              "optional": false,
              "range": [
                174,
                177
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 8
                },
                "start": {
                  "column": 15,
                  "line": 8
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
                177,
                211
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
                            191,
                            195
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 8
                            },
                            "start": {
                              "column": 32,
                              "line": 8
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fooBack",
                          "optional": false,
                          "range": [
                            196,
                            203
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 8
                            },
                            "start": {
                              "column": 37,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          191,
                          203
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 8
                          },
                          "start": {
                            "column": 32,
                            "line": 8
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "range": [
                          206,
                          209
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 8
                          },
                          "start": {
                            "column": 47,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        191,
                        209
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 8
                        },
                        "start": {
                          "column": 32,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      191,
                      210
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 8
                      },
                      "start": {
                        "column": 32,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  190,
                  211
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 8
                  },
                  "start": {
                    "column": 31,
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 8
                      },
                      "start": {
                        "column": 22,
                        "line": 8
                      }
                    },
                    "range": [
                      181,
                      188
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        182,
                        188
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 8
                        },
                        "start": {
                          "column": 23,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    178,
                    188
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 8
                    },
                    "start": {
                      "column": 19,
                      "line": 8
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 8
                },
                "start": {
                  "column": 18,
                  "line": 8
                }
              }
            },
            "range": [
              163,
              211
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
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
              "name": "Bar",
              "optional": false,
              "range": [
                234,
                237
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 10
                },
                "start": {
                  "column": 15,
                  "line": 10
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
                237,
                259
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "range": [
                          248,
                          249
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 10
                          },
                          "start": {
                            "column": 29,
                            "line": 10
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "barBack",
                        "optional": false,
                        "range": [
                          250,
                          257
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 10
                          },
                          "start": {
                            "column": 31,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        248,
                        257
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 10
                        },
                        "start": {
                          "column": 29,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      241,
                      258
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 10
                      },
                      "start": {
                        "column": 22,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  240,
                  259
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 10
                  },
                  "start": {
                    "column": 21,
                    "line": 10
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
                  "column": 40,
                  "line": 10
                },
                "start": {
                  "column": 18,
                  "line": 10
                }
              }
            },
            "range": [
              223,
              259
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
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
              "name": "Bar",
              "optional": false,
              "range": [
                281,
                284
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 11
                },
                "start": {
                  "column": 15,
                  "line": 11
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
                284,
                315
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "range": [
                            298,
                            299
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 11
                            },
                            "start": {
                              "column": 32,
                              "line": 11
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "barBack",
                          "optional": false,
                          "range": [
                            300,
                            307
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 11
                            },
                            "start": {
                              "column": 34,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          298,
                          307
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 11
                          },
                          "start": {
                            "column": 32,
                            "line": 11
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "range": [
                          310,
                          313
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 11
                          },
                          "start": {
                            "column": 44,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        298,
                        313
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 11
                        },
                        "start": {
                          "column": 32,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      298,
                      314
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 11
                      },
                      "start": {
                        "column": 32,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  297,
                  315
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 11
                  },
                  "start": {
                    "column": 31,
                    "line": 11
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
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 11
                      },
                      "start": {
                        "column": 22,
                        "line": 11
                      }
                    },
                    "range": [
                      288,
                      295
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        289,
                        295
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 11
                        },
                        "start": {
                          "column": 23,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    285,
                    295
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 11
                    },
                    "start": {
                      "column": 19,
                      "line": 11
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 11
                },
                "start": {
                  "column": 18,
                  "line": 11
                }
              }
            },
            "range": [
              270,
              315
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
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
              "name": "get",
              "optional": false,
              "range": [
                334,
                337
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 13
                },
                "start": {
                  "column": 11,
                  "line": 13
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  351,
                  353
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 13
                  },
                  "start": {
                    "column": 28,
                    "line": 13
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                340,
                353
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 13
                },
                "start": {
                  "column": 17,
                  "line": 13
                }
              }
            },
            "range": [
              327,
              353
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
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
              "name": "set",
              "optional": false,
              "range": [
                371,
                374
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 14
                },
                "start": {
                  "column": 11,
                  "line": 14
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  388,
                  390
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 14
                  },
                  "start": {
                    "column": 28,
                    "line": 14
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                377,
                390
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 14
                },
                "start": {
                  "column": 17,
                  "line": 14
                }
              }
            },
            "range": [
              364,
              390
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
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 8,
            "line": 2
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
          17,
          18
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 2
          },
          "start": {
            "column": 6,
            "line": 2
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        11,
        398
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 2
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
            "range": [
              404,
              405
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                412,
                413
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
            "range": [
              408,
              415
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 17
              },
              "start": {
                "column": 8,
                "line": 17
              }
            }
          },
          "range": [
            404,
            415
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 17
            },
            "start": {
              "column": 4,
              "line": 17
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        400,
        416
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 17
        },
        "start": {
          "column": 0,
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
            "name": "foo",
            "optional": false,
            "range": [
              422,
              425
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "range": [
                428,
                429
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 19
                },
                "start": {
                  "column": 10,
                  "line": 19
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "range": [
                430,
                433
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 19
                },
                "start": {
                  "column": 12,
                  "line": 19
                }
              }
            },
            "range": [
              428,
              433
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 19
              },
              "start": {
                "column": 10,
                "line": 19
              }
            }
          },
          "range": [
            422,
            433
          ],
          "loc": {
            "end": {
              "column": 15,
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
      "kind": "var",
      "range": [
        418,
        434
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
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
            "name": "c",
            "optional": false,
            "range": [
              435,
              436
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 20
              },
              "start": {
                "column": 0,
                "line": 20
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "range": [
              437,
              440
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 20
              },
              "start": {
                "column": 2,
                "line": 20
              }
            }
          },
          "range": [
            435,
            440
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 20
            },
            "start": {
              "column": 0,
              "line": 20
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"foov\"",
          "value": "foov",
          "range": [
            443,
            449
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 20
            },
            "start": {
              "column": 8,
              "line": 20
            }
          }
        },
        "range": [
          435,
          449
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        435,
        450
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
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
            "name": "bar",
            "optional": false,
            "range": [
              456,
              459
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                462,
                463
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 22
                },
                "start": {
                  "column": 10,
                  "line": 22
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "range": [
                464,
                467
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 22
                },
                "start": {
                  "column": 12,
                  "line": 22
                }
              }
            },
            "range": [
              462,
              467
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 22
              },
              "start": {
                "column": 10,
                "line": 22
              }
            }
          },
          "range": [
            456,
            467
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 22
            },
            "start": {
              "column": 4,
              "line": 22
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        452,
        468
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
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
            "name": "C",
            "optional": false,
            "range": [
              469,
              470
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
            "name": "Bar",
            "optional": false,
            "range": [
              471,
              474
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 23
              },
              "start": {
                "column": 2,
                "line": 23
              }
            }
          },
          "range": [
            469,
            474
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 23
            },
            "start": {
              "column": 0,
              "line": 23
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"barv\"",
          "value": "barv",
          "range": [
            477,
            483
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 23
            },
            "start": {
              "column": 8,
              "line": 23
            }
          }
        },
        "range": [
          469,
          483
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        469,
        484
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 23
        },
        "start": {
          "column": 0,
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
            "name": "baz",
            "optional": false,
            "range": [
              490,
              493
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "range": [
                496,
                497
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 25
                },
                "start": {
                  "column": 10,
                  "line": 25
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Baz",
              "optional": false,
              "range": [
                498,
                501
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 25
                },
                "start": {
                  "column": 12,
                  "line": 25
                }
              }
            },
            "range": [
              496,
              501
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 25
              },
              "start": {
                "column": 10,
                "line": 25
              }
            }
          },
          "range": [
            490,
            501
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 25
            },
            "start": {
              "column": 4,
              "line": 25
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        486,
        502
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
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
            "name": "c",
            "optional": false,
            "range": [
              503,
              504
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
            "name": "Baz",
            "optional": false,
            "range": [
              505,
              508
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 26
              },
              "start": {
                "column": 2,
                "line": 26
              }
            }
          },
          "range": [
            503,
            508
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 26
            },
            "start": {
              "column": 0,
              "line": 26
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"bazv\"",
          "value": "bazv",
          "range": [
            511,
            517
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 26
            },
            "start": {
              "column": 8,
              "line": 26
            }
          }
        },
        "range": [
          503,
          517
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 26
          },
          "start": {
            "column": 0,
            "line": 26
          }
        }
      },
      "range": [
        503,
        518
      ],
      "loc": {
        "end": {
          "column": 15,
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
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 29
                },
                "start": {
                  "column": 6,
                  "line": 29
                }
              },
              "range": [
                617,
                632
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
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        620,
                        623
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 29
                        },
                        "start": {
                          "column": 9,
                          "line": 29
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
                          "line": 29
                        },
                        "start": {
                          "column": 12,
                          "line": 29
                        }
                      },
                      "range": [
                        623,
                        630
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          624,
                          630
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 29
                          },
                          "start": {
                            "column": 13,
                            "line": 29
                          }
                        }
                      }
                    },
                    "range": [
                      620,
                      631
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 29
                      },
                      "start": {
                        "column": 9,
                        "line": 29
                      }
                    }
                  }
                ],
                "range": [
                  619,
                  632
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 29
                  },
                  "start": {
                    "column": 8,
                    "line": 29
                  }
                }
              }
            },
            "range": [
              615,
              632
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
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
                  "name": "Foo",
                  "optional": false,
                  "range": [
                    640,
                    643
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 29
                    },
                    "start": {
                      "column": 29,
                      "line": 29
                    }
                  }
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    643,
                    657
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            654,
                            655
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 29
                            },
                            "start": {
                              "column": 43,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          647,
                          656
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 29
                          },
                          "start": {
                            "column": 36,
                            "line": 29
                          }
                        }
                      }
                    ],
                    "range": [
                      646,
                      657
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 29
                      },
                      "start": {
                        "column": 35,
                        "line": 29
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
                      "column": 46,
                      "line": 29
                    },
                    "start": {
                      "column": 32,
                      "line": 29
                    }
                  }
                },
                "range": [
                  636,
                  657
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 29
                  },
                  "start": {
                    "column": 25,
                    "line": 29
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "range": [
                    663,
                    666
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 29
                    },
                    "start": {
                      "column": 52,
                      "line": 29
                    }
                  }
                },
                "kind": "set",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    666,
                    683
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "range": [
                            679,
                            682
                          ],
                          "loc": {
                            "end": {
                              "column": 71,
                              "line": 29
                            },
                            "start": {
                              "column": 68,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          679,
                          682
                        ],
                        "loc": {
                          "end": {
                            "column": 71,
                            "line": 29
                          },
                          "start": {
                            "column": 68,
                            "line": 29
                          }
                        }
                      }
                    ],
                    "range": [
                      678,
                      683
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 29
                      },
                      "start": {
                        "column": 67,
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
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 29
                          },
                          "start": {
                            "column": 59,
                            "line": 29
                          }
                        },
                        "range": [
                          670,
                          677
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            671,
                            677
                          ],
                          "loc": {
                            "end": {
                              "column": 66,
                              "line": 29
                            },
                            "start": {
                              "column": 60,
                              "line": 29
                            }
                          }
                        }
                      },
                      "range": [
                        667,
                        677
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 29
                        },
                        "start": {
                          "column": 56,
                          "line": 29
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 29
                    },
                    "start": {
                      "column": 55,
                      "line": 29
                    }
                  }
                },
                "range": [
                  659,
                  683
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 29
                  },
                  "start": {
                    "column": 48,
                    "line": 29
                  }
                }
              }
            ],
            "range": [
              635,
              684
            ],
            "loc": {
              "end": {
                "column": 73,
                "line": 29
              },
              "start": {
                "column": 24,
                "line": 29
              }
            }
          },
          "range": [
            615,
            684
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 29
            },
            "start": {
              "column": 4,
              "line": 29
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        611,
        685
      ],
      "loc": {
        "end": {
          "column": 74,
          "line": 29
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
            "name": "ofg",
            "optional": false,
            "range": [
              696,
              699
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "range": [
                702,
                703
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 31
                },
                "start": {
                  "column": 10,
                  "line": 31
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "range": [
                704,
                707
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 31
                },
                "start": {
                  "column": 12,
                  "line": 31
                }
              }
            },
            "range": [
              702,
              707
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 31
              },
              "start": {
                "column": 10,
                "line": 31
              }
            }
          },
          "range": [
            696,
            707
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 31
            },
            "start": {
              "column": 4,
              "line": 31
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        692,
        708
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
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
            "name": "o",
            "optional": false,
            "range": [
              709,
              710
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 32
              },
              "start": {
                "column": 0,
                "line": 32
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "range": [
              711,
              714
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 32
              },
              "start": {
                "column": 2,
                "line": 32
              }
            }
          },
          "range": [
            709,
            714
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 32
            },
            "start": {
              "column": 0,
              "line": 32
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "0",
          "value": 0,
          "range": [
            717,
            718
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 32
            },
            "start": {
              "column": 8,
              "line": 32
            }
          }
        },
        "range": [
          709,
          718
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 32
          },
          "start": {
            "column": 0,
            "line": 32
          }
        }
      },
      "range": [
        709,
        719
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          735,
          761
        ],
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 36
                    },
                    "start": {
                      "column": 6,
                      "line": 36
                    }
                  },
                  "range": [
                    743,
                    750
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      744,
                      750
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 36
                      },
                      "start": {
                        "column": 7,
                        "line": 36
                      }
                    }
                  }
                },
                "range": [
                  742,
                  750
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 36
                  },
                  "start": {
                    "column": 5,
                    "line": 36
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 36
                },
                "start": {
                  "column": 14,
                  "line": 36
                }
              },
              "range": [
                751,
                758
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  752,
                  758
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 36
                  },
                  "start": {
                    "column": 15,
                    "line": 36
                  }
                }
              }
            },
            "range": [
              741,
              759
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 37
          },
          "start": {
            "column": 13,
            "line": 35
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I1",
        "optional": false,
        "range": [
          732,
          734
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 35
          },
          "start": {
            "column": 10,
            "line": 35
          }
        }
      },
      "range": [
        722,
        761
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 35
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 8,
                  "line": 39
                },
                "start": {
                  "column": 5,
                  "line": 39
                }
              },
              "range": [
                768,
                771
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I1",
                  "optional": false,
                  "range": [
                    769,
                    771
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 39
                    },
                    "start": {
                      "column": 6,
                      "line": 39
                    }
                  }
                },
                "range": [
                  769,
                  771
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 39
                  },
                  "start": {
                    "column": 6,
                    "line": 39
                  }
                }
              }
            },
            "range": [
              767,
              771
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 39
              },
              "start": {
                "column": 4,
                "line": 39
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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "range": [
                      795,
                      796
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 39
                      },
                      "start": {
                        "column": 32,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    788,
                    797
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 39
                    },
                    "start": {
                      "column": 25,
                      "line": 39
                    }
                  }
                }
              ],
              "range": [
                787,
                798
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 39
                },
                "start": {
                  "column": 24,
                  "line": 39
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
                "name": "n",
                "optional": false,
                "range": [
                  784,
                  785
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 39
                  },
                  "start": {
                    "column": 21,
                    "line": 39
                  }
                }
              }
            ],
            "range": [
              774,
              798
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 39
              },
              "start": {
                "column": 11,
                "line": 39
              }
            }
          },
          "range": [
            767,
            798
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 39
            },
            "start": {
              "column": 4,
              "line": 39
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        763,
        798
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 42
                },
                "start": {
                  "column": 7,
                  "line": 42
                }
              },
              "range": [
                828,
                845
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      830,
                      836
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 42
                      },
                      "start": {
                        "column": 9,
                        "line": 42
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      839,
                      845
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 42
                      },
                      "start": {
                        "column": 18,
                        "line": 42
                      }
                    }
                  }
                ],
                "range": [
                  830,
                  845
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 42
                  },
                  "start": {
                    "column": 9,
                    "line": 42
                  }
                }
              }
            },
            "range": [
              827,
              845
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 42
              },
              "start": {
                "column": 6,
                "line": 42
              }
            }
          },
          "init": {
            "type": "ConditionalExpression",
            "alternate": {
              "type": "Literal",
              "raw": "123",
              "value": 123,
              "range": [
                878,
                881
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 42
                },
                "start": {
                  "column": 57,
                  "line": 42
                }
              }
            },
            "consequent": {
              "type": "Literal",
              "raw": "\"str\"",
              "value": "str",
              "range": [
                870,
                875
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 42
                },
                "start": {
                  "column": 49,
                  "line": 42
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
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
                      848,
                      852
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 42
                      },
                      "start": {
                        "column": 27,
                        "line": 42
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
                      853,
                      859
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 42
                      },
                      "start": {
                        "column": 32,
                        "line": 42
                      }
                    }
                  },
                  "range": [
                    848,
                    859
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 42
                    },
                    "start": {
                      "column": 27,
                      "line": 42
                    }
                  }
                },
                "optional": false,
                "range": [
                  848,
                  861
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 42
                  },
                  "start": {
                    "column": 27,
                    "line": 42
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "0.5",
                "value": 0.5,
                "range": [
                  864,
                  867
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 42
                  },
                  "start": {
                    "column": 43,
                    "line": 42
                  }
                }
              },
              "range": [
                848,
                867
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 42
                },
                "start": {
                  "column": 27,
                  "line": 42
                }
              }
            },
            "range": [
              848,
              881
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 42
              },
              "start": {
                "column": 27,
                "line": 42
              }
            }
          },
          "range": [
            827,
            881
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 42
            },
            "start": {
              "column": 6,
              "line": 42
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        821,
        882
      ],
      "loc": {
        "end": {
          "column": 61,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 42
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
                  "name": "obj",
                  "optional": false,
                  "range": [
                    918,
                    921
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 44
                    },
                    "start": {
                      "column": 6,
                      "line": 44
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
                        "name": "prop",
                        "optional": false,
                        "range": [
                          934,
                          938
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 45
                          },
                          "start": {
                            "column": 8,
                            "line": 45
                          }
                        }
                      },
                      "kind": "set",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "range": [
                          938,
                          967
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
                                    "name": "x",
                                    "optional": false,
                                    "range": [
                                      949,
                                      950
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 45
                                      },
                                      "start": {
                                        "column": 23,
                                        "line": 45
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
                                      951,
                                      962
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 36,
                                        "line": 45
                                      },
                                      "start": {
                                        "column": 25,
                                        "line": 45
                                      }
                                    }
                                  },
                                  "range": [
                                    949,
                                    962
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 36,
                                      "line": 45
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 45
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  949,
                                  964
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 45
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 45
                                  }
                                }
                              },
                              "range": [
                                949,
                                965
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 45
                                },
                                "start": {
                                  "column": 23,
                                  "line": 45
                                }
                              }
                            }
                          ],
                          "range": [
                            947,
                            967
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 45
                            },
                            "start": {
                              "column": 21,
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
                            "name": "_",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 45
                                },
                                "start": {
                                  "column": 14,
                                  "line": 45
                                }
                              },
                              "range": [
                                940,
                                945
                              ],
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "range": [
                                  942,
                                  945
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 45
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 45
                                  }
                                }
                              }
                            },
                            "range": [
                              939,
                              945
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 45
                              },
                              "start": {
                                "column": 13,
                                "line": 45
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 45
                          },
                          "start": {
                            "column": 12,
                            "line": 45
                          }
                        }
                      },
                      "range": [
                        930,
                        967
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 45
                        },
                        "start": {
                          "column": 4,
                          "line": 45
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "range": [
                          977,
                          981
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 46
                          },
                          "start": {
                            "column": 8,
                            "line": 46
                          }
                        }
                      },
                      "kind": "get",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "range": [
                          981,
                          1010
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
                                    "name": "x",
                                    "optional": false,
                                    "range": [
                                      993,
                                      994
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 25,
                                        "line": 46
                                      },
                                      "start": {
                                        "column": 24,
                                        "line": 46
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
                                      995,
                                      1006
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 37,
                                        "line": 46
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 46
                                      }
                                    }
                                  },
                                  "range": [
                                    993,
                                    1006
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 37,
                                      "line": 46
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 46
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  993,
                                  1008
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 46
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 46
                                  }
                                }
                              },
                              "range": [
                                986,
                                1008
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 46
                                },
                                "start": {
                                  "column": 17,
                                  "line": 46
                                }
                              }
                            }
                          ],
                          "range": [
                            984,
                            1010
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 46
                            },
                            "start": {
                              "column": 15,
                              "line": 46
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
                            "column": 41,
                            "line": 46
                          },
                          "start": {
                            "column": 12,
                            "line": 46
                          }
                        }
                      },
                      "range": [
                        973,
                        1010
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 46
                        },
                        "start": {
                          "column": 4,
                          "line": 46
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "method",
                        "optional": false,
                        "range": [
                          1016,
                          1022
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 47
                          },
                          "start": {
                            "column": 4,
                            "line": 47
                          }
                        }
                      },
                      "kind": "init",
                      "method": true,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "FunctionExpression",
                        "range": [
                          1022,
                          1051
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
                                    "name": "x",
                                    "optional": false,
                                    "range": [
                                      1034,
                                      1035
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 23,
                                        "line": 47
                                      },
                                      "start": {
                                        "column": 22,
                                        "line": 47
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
                                      1036,
                                      1047
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 35,
                                        "line": 47
                                      },
                                      "start": {
                                        "column": 24,
                                        "line": 47
                                      }
                                    }
                                  },
                                  "range": [
                                    1034,
                                    1047
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 35,
                                      "line": 47
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 47
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  1034,
                                  1049
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 47
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 47
                                  }
                                }
                              },
                              "range": [
                                1027,
                                1049
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 47
                                },
                                "start": {
                                  "column": 15,
                                  "line": 47
                                }
                              }
                            }
                          ],
                          "range": [
                            1025,
                            1051
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 47
                            },
                            "start": {
                              "column": 13,
                              "line": 47
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
                            "column": 39,
                            "line": 47
                          },
                          "start": {
                            "column": 10,
                            "line": 47
                          }
                        }
                      },
                      "range": [
                        1016,
                        1051
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 47
                        },
                        "start": {
                          "column": 4,
                          "line": 47
                        }
                      }
                    }
                  ],
                  "range": [
                    924,
                    1055
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 48
                    },
                    "start": {
                      "column": 12,
                      "line": 44
                    }
                  }
                },
                "range": [
                  918,
                  1055
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 48
                  },
                  "start": {
                    "column": 6,
                    "line": 44
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              914,
              1055
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 48
              },
              "start": {
                "column": 2,
                "line": 44
              }
            }
          }
        ],
        "range": [
          910,
          1057
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 49
          },
          "start": {
            "column": 27,
            "line": 43
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              894,
              895
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 43
              },
              "start": {
                "column": 11,
                "line": 43
              }
            }
          },
          "operator": "typeof",
          "prefix": true,
          "range": [
            887,
            895
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 43
            },
            "start": {
              "column": 4,
              "line": 43
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"string\"",
          "value": "string",
          "range": [
            900,
            908
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 43
            },
            "start": {
              "column": 17,
              "line": 43
            }
          }
        },
        "range": [
          887,
          908
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 43
          },
          "start": {
            "column": 4,
            "line": 43
          }
        }
      },
      "range": [
        883,
        1057
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 43
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 50
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
