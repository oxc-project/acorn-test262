__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1012
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          10,
          220
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
              "name": "name",
              "optional": false,
              "range": [
                24,
                28
              ],
              "loc": {
                "end": {
                  "column": 16,
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
                  "column": 24,
                  "line": 2
                },
                "start": {
                  "column": 16,
                  "line": 2
                }
              },
              "range": [
                28,
                36
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  30,
                  36
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 2
                  },
                  "start": {
                    "column": 18,
                    "line": 2
                  }
                }
              }
            },
            "value": null,
            "range": [
              16,
              37
            ],
            "loc": {
              "end": {
                "column": 25,
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
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "func",
              "optional": false,
              "range": [
                58,
                62
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 4
                },
                "start": {
                  "column": 19,
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
                  "column": 35,
                  "line": 4
                },
                "start": {
                  "column": 23,
                  "line": 4
                }
              },
              "range": [
                62,
                74
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Function",
                    "optional": false,
                    "range": [
                      64,
                      72
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 4
                      },
                      "start": {
                        "column": 25,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    64,
                    72
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 4
                    },
                    "start": {
                      "column": 25,
                      "line": 4
                    }
                  }
                },
                "range": [
                  64,
                  74
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 4
                  },
                  "start": {
                    "column": 25,
                    "line": 4
                  }
                }
              }
            },
            "value": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrowFunctionExpression",
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "range": [
                                133,
                                137
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 6
                                },
                                "start": {
                                  "column": 18,
                                  "line": 6
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
                              "name": "that",
                              "optional": false,
                              "range": [
                                124,
                                128
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 6
                                },
                                "start": {
                                  "column": 9,
                                  "line": 6
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "range": [
                                129,
                                132
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 6
                                },
                                "start": {
                                  "column": 14,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              124,
                              132
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 6
                              },
                              "start": {
                                "column": 9,
                                "line": 6
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            124,
                            138
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 6
                            },
                            "start": {
                              "column": 9,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          124,
                          139
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 6
                          },
                          "start": {
                            "column": 9,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "range": [
                      113,
                      146
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 7
                      },
                      "start": {
                        "column": 34,
                        "line": 5
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
                      "name": "that",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 5
                          },
                          "start": {
                            "column": 10,
                            "line": 5
                          }
                        },
                        "range": [
                          89,
                          94
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Bug",
                            "optional": false,
                            "range": [
                              91,
                              94
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 5
                              },
                              "start": {
                                "column": 12,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            91,
                            94
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 5
                            },
                            "start": {
                              "column": 12,
                              "line": 5
                            }
                          }
                        }
                      },
                      "range": [
                        85,
                        94
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 5
                        },
                        "start": {
                          "column": 6,
                          "line": 5
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 5
                          },
                          "start": {
                            "column": 21,
                            "line": 5
                          }
                        },
                        "range": [
                          100,
                          108
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            102,
                            108
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 5
                            },
                            "start": {
                              "column": 23,
                              "line": 5
                            }
                          }
                        }
                      },
                      "range": [
                        96,
                        108
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 5
                        },
                        "start": {
                          "column": 17,
                          "line": 5
                        }
                      }
                    }
                  ],
                  "range": [
                    84,
                    146
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 7
                    },
                    "start": {
                      "column": 5,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                77,
                152
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 38,
                  "line": 4
                }
              }
            },
            "range": [
              43,
              153
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 4
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
              "name": "foo",
              "optional": false,
              "range": [
                167,
                170
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 10
                },
                "start": {
                  "column": 12,
                  "line": 10
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
                170,
                218
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
                            195,
                            199
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 11
                            },
                            "start": {
                              "column": 8,
                              "line": 11
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
                            200,
                            204
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 11
                            },
                            "start": {
                              "column": 13,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          195,
                          204
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 11
                          },
                          "start": {
                            "column": 8,
                            "line": 11
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "range": [
                          207,
                          211
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 11
                          },
                          "start": {
                            "column": 20,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        195,
                        211
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 11
                        },
                        "start": {
                          "column": 8,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      195,
                      212
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  185,
                  218
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 12
                  },
                  "start": {
                    "column": 30,
                    "line": 10
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 10
                      },
                      "start": {
                        "column": 20,
                        "line": 10
                      }
                    },
                    "range": [
                      175,
                      183
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        177,
                        183
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 10
                        },
                        "start": {
                          "column": 22,
                          "line": 10
                        }
                      }
                    }
                  },
                  "range": [
                    171,
                    183
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 10
                    },
                    "start": {
                      "column": 16,
                      "line": 10
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 12
                },
                "start": {
                  "column": 15,
                  "line": 10
                }
              }
            },
            "range": [
              159,
              218
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bug",
        "optional": false,
        "range": [
          6,
          9
        ],
        "loc": {
          "end": {
            "column": 9,
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
        220
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
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
          276,
          678
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
              "name": "prop1",
              "optional": false,
              "range": [
                282,
                287
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
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
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ThisExpression",
                      "range": [
                        311,
                        315
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 18
                        },
                        "start": {
                          "column": 8,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      311,
                      316
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
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
                  301,
                  322
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 19
                  },
                  "start": {
                    "column": 23,
                    "line": 17
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                290,
                322
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 19
                },
                "start": {
                  "column": 12,
                  "line": 17
                }
              }
            },
            "range": [
              282,
              323
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 17
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
              "name": "prop2",
              "optional": false,
              "range": [
                329,
                334
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 21
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
                "body": [
                  {
                    "type": "FunctionDeclaration",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "ThisExpression",
                            "range": [
                              389,
                              393
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 23
                              },
                              "start": {
                                "column": 12,
                                "line": 23
                              }
                            }
                          },
                          "range": [
                            389,
                            394
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 23
                            },
                            "start": {
                              "column": 12,
                              "line": 23
                            }
                          }
                        }
                      ],
                      "range": [
                        375,
                        404
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 24
                        },
                        "start": {
                          "column": 25,
                          "line": 22
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "inner",
                      "optional": false,
                      "range": [
                        367,
                        372
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 22
                        },
                        "start": {
                          "column": 17,
                          "line": 22
                        }
                      }
                    },
                    "params": [],
                    "range": [
                      358,
                      404
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 24
                      },
                      "start": {
                        "column": 8,
                        "line": 22
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "ThisExpression",
                        "range": [
                          419,
                          423
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 25
                          },
                          "start": {
                            "column": 14,
                            "line": 25
                          }
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "range": [
                        413,
                        423
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 25
                        },
                        "start": {
                          "column": 8,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      413,
                      424
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
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
                  348,
                  430
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 26
                  },
                  "start": {
                    "column": 23,
                    "line": 21
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                337,
                430
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 26
                },
                "start": {
                  "column": 12,
                  "line": 21
                }
              }
            },
            "range": [
              329,
              431
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 21
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
              "name": "prop3",
              "optional": false,
              "range": [
                437,
                442
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 28
                },
                "start": {
                  "column": 4,
                  "line": 28
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
                    "type": "FunctionDeclaration",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "ThisExpression",
                            "range": [
                              492,
                              496
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 30
                              },
                              "start": {
                                "column": 12,
                                "line": 30
                              }
                            }
                          },
                          "range": [
                            492,
                            497
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 30
                            },
                            "start": {
                              "column": 12,
                              "line": 30
                            }
                          }
                        }
                      ],
                      "range": [
                        478,
                        507
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 31
                        },
                        "start": {
                          "column": 25,
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
                      "name": "inner",
                      "optional": false,
                      "range": [
                        470,
                        475
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 29
                        },
                        "start": {
                          "column": 17,
                          "line": 29
                        }
                      }
                    },
                    "params": [],
                    "range": [
                      461,
                      507
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 31
                      },
                      "start": {
                        "column": 8,
                        "line": 29
                      }
                    }
                  }
                ],
                "range": [
                  451,
                  513
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 32
                  },
                  "start": {
                    "column": 18,
                    "line": 28
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                445,
                513
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 32
                },
                "start": {
                  "column": 12,
                  "line": 28
                }
              }
            },
            "range": [
              437,
              514
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 28
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
              "name": "prop4",
              "optional": false,
              "range": [
                520,
                525
              ],
              "loc": {
                "end": {
                  "column": 9,
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
                      538,
                      539
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 35
                      },
                      "start": {
                        "column": 8,
                        "line": 35
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "ThisExpression",
                            "range": [
                              561,
                              565
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 35
                              },
                              "start": {
                                "column": 31,
                                "line": 35
                              }
                            }
                          },
                          "range": [
                            554,
                            566
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 35
                            },
                            "start": {
                              "column": 24,
                              "line": 35
                            }
                          }
                        }
                      ],
                      "range": [
                        552,
                        568
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 35
                        },
                        "start": {
                          "column": 22,
                          "line": 35
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      541,
                      568
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 35
                      },
                      "start": {
                        "column": 11,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    538,
                    568
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 35
                    },
                    "start": {
                      "column": 8,
                      "line": 35
                    }
                  }
                }
              ],
              "range": [
                528,
                575
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 36
                },
                "start": {
                  "column": 12,
                  "line": 34
                }
              }
            },
            "range": [
              520,
              576
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 34
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
              "name": "prop5",
              "optional": false,
              "range": [
                582,
                587
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 38
                },
                "start": {
                  "column": 4,
                  "line": 38
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
                              627,
                              628
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 40
                              },
                              "start": {
                                "column": 12,
                                "line": 40
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "FunctionExpression",
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "ThisExpression",
                                    "range": [
                                      650,
                                      654
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 39,
                                        "line": 40
                                      },
                                      "start": {
                                        "column": 35,
                                        "line": 40
                                      }
                                    }
                                  },
                                  "range": [
                                    643,
                                    655
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 40,
                                      "line": 40
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 40
                                    }
                                  }
                                }
                              ],
                              "range": [
                                641,
                                657
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 40
                                },
                                "start": {
                                  "column": 26,
                                  "line": 40
                                }
                              }
                            },
                            "declare": false,
                            "expression": false,
                            "generator": false,
                            "id": null,
                            "params": [],
                            "range": [
                              630,
                              657
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 40
                              },
                              "start": {
                                "column": 15,
                                "line": 40
                              }
                            }
                          },
                          "range": [
                            627,
                            657
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 40
                            },
                            "start": {
                              "column": 12,
                              "line": 40
                            }
                          }
                        }
                      ],
                      "range": [
                        613,
                        668
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 41
                        },
                        "start": {
                          "column": 15,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      606,
                      669
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 41
                      },
                      "start": {
                        "column": 8,
                        "line": 39
                      }
                    }
                  }
                ],
                "range": [
                  596,
                  675
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 42
                  },
                  "start": {
                    "column": 18,
                    "line": 38
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                590,
                675
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 42
                },
                "start": {
                  "column": 12,
                  "line": 38
                }
              }
            },
            "range": [
              582,
              676
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 43
          },
          "start": {
            "column": 8,
            "line": 16
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          274,
          275
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 16
          },
          "start": {
            "column": 6,
            "line": 16
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        268,
        678
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          688,
          1012
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
              "name": "prop1",
              "optional": false,
              "range": [
                694,
                699
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 46
                },
                "start": {
                  "column": 4,
                  "line": 46
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ThisExpression",
              "range": [
                702,
                706
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 46
                },
                "start": {
                  "column": 12,
                  "line": 46
                }
              }
            },
            "range": [
              694,
              707
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 46
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
              "name": "prop2",
              "optional": false,
              "range": [
                713,
                718
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 48
                },
                "start": {
                  "column": 4,
                  "line": 48
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
                "type": "ThisExpression",
                "range": [
                  727,
                  731
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 48
                  },
                  "start": {
                    "column": 18,
                    "line": 48
                  }
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                721,
                731
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 48
                },
                "start": {
                  "column": 12,
                  "line": 48
                }
              }
            },
            "range": [
              713,
              732
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 48
              },
              "start": {
                "column": 4,
                "line": 48
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
              "name": "prop3",
              "optional": false,
              "range": [
                738,
                743
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 50
                },
                "start": {
                  "column": 4,
                  "line": 50
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
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "ThisExpression",
                      "range": [
                        770,
                        774
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 50
                        },
                        "start": {
                          "column": 36,
                          "line": 50
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      764,
                      774
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 50
                      },
                      "start": {
                        "column": 30,
                        "line": 50
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    758,
                    774
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 50
                    },
                    "start": {
                      "column": 24,
                      "line": 50
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "range": [
                  752,
                  774
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 50
                  },
                  "start": {
                    "column": 18,
                    "line": 50
                  }
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                746,
                774
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 50
                },
                "start": {
                  "column": 12,
                  "line": 50
                }
              }
            },
            "range": [
              738,
              775
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 50
              },
              "start": {
                "column": 4,
                "line": 50
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
              "name": "prop4",
              "optional": false,
              "range": [
                781,
                786
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 52
                },
                "start": {
                  "column": 4,
                  "line": 52
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "raw": "'  '",
                    "value": "  ",
                    "range": [
                      789,
                      793
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 52
                      },
                      "start": {
                        "column": 12,
                        "line": 52
                      }
                    }
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        811,
                        818
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 54
                        },
                        "start": {
                          "column": 15,
                          "line": 53
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      800,
                      818
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 54
                      },
                      "start": {
                        "column": 4,
                        "line": 53
                      }
                    }
                  },
                  "range": [
                    789,
                    818
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 54
                    },
                    "start": {
                      "column": 12,
                      "line": 52
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "' '",
                  "value": " ",
                  "range": [
                    825,
                    828
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 55
                    },
                    "start": {
                      "column": 4,
                      "line": 55
                    }
                  }
                },
                "range": [
                  789,
                  828
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 55
                  },
                  "start": {
                    "column": 12,
                    "line": 52
                  }
                }
              },
              "right": {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "ThisExpression",
                      "range": [
                        854,
                        858
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 56
                        },
                        "start": {
                          "column": 23,
                          "line": 56
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      848,
                      858
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 56
                      },
                      "start": {
                        "column": 17,
                        "line": 56
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    842,
                    858
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 56
                    },
                    "start": {
                      "column": 11,
                      "line": 56
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "range": [
                  836,
                  858
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 56
                  },
                  "start": {
                    "column": 5,
                    "line": 56
                  }
                }
              },
              "range": [
                789,
                859
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 56
                },
                "start": {
                  "column": 12,
                  "line": 52
                }
              }
            },
            "range": [
              781,
              860
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 56
              },
              "start": {
                "column": 4,
                "line": 52
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
              "name": "prop5",
              "optional": false,
              "range": [
                866,
                871
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 58
                },
                "start": {
                  "column": 4,
                  "line": 58
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
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
                      884,
                      885
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 59
                      },
                      "start": {
                        "column": 8,
                        "line": 59
                      }
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "ThisExpression",
                            "range": [
                              902,
                              906
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 59
                              },
                              "start": {
                                "column": 26,
                                "line": 59
                              }
                            }
                          },
                          "range": [
                            895,
                            907
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 59
                            },
                            "start": {
                              "column": 19,
                              "line": 59
                            }
                          }
                        }
                      ],
                      "range": [
                        893,
                        909
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 59
                        },
                        "start": {
                          "column": 17,
                          "line": 59
                        }
                      }
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      887,
                      909
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 59
                      },
                      "start": {
                        "column": 11,
                        "line": 59
                      }
                    }
                  },
                  "range": [
                    884,
                    909
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
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
                874,
                915
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 60
                },
                "start": {
                  "column": 12,
                  "line": 58
                }
              }
            },
            "range": [
              866,
              916
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 60
              },
              "start": {
                "column": 4,
                "line": 58
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
              "name": "prop6",
              "optional": false,
              "range": [
                922,
                927
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
                              967,
                              968
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 64
                              },
                              "start": {
                                "column": 12,
                                "line": 64
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "ThisExpression",
                                    "range": [
                                      985,
                                      989
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 34,
                                        "line": 64
                                      },
                                      "start": {
                                        "column": 30,
                                        "line": 64
                                      }
                                    }
                                  },
                                  "range": [
                                    978,
                                    990
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 35,
                                      "line": 64
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 64
                                    }
                                  }
                                }
                              ],
                              "range": [
                                976,
                                992
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 64
                                },
                                "start": {
                                  "column": 21,
                                  "line": 64
                                }
                              }
                            },
                            "expression": false,
                            "generator": false,
                            "id": null,
                            "params": [],
                            "range": [
                              970,
                              992
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 64
                              },
                              "start": {
                                "column": 15,
                                "line": 64
                              }
                            }
                          },
                          "range": [
                            967,
                            992
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 64
                            },
                            "start": {
                              "column": 12,
                              "line": 64
                            }
                          }
                        }
                      ],
                      "range": [
                        953,
                        1002
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 65
                        },
                        "start": {
                          "column": 15,
                          "line": 63
                        }
                      }
                    },
                    "range": [
                      946,
                      1003
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 65
                      },
                      "start": {
                        "column": 8,
                        "line": 63
                      }
                    }
                  }
                ],
                "range": [
                  936,
                  1009
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 66
                  },
                  "start": {
                    "column": 18,
                    "line": 62
                  }
                }
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                930,
                1009
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 66
                },
                "start": {
                  "column": 12,
                  "line": 62
                }
              }
            },
            "range": [
              922,
              1010
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 66
              },
              "start": {
                "column": 4,
                "line": 62
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 67
          },
          "start": {
            "column": 8,
            "line": 45
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          686,
          687
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 45
          },
          "start": {
            "column": 6,
            "line": 45
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        680,
        1012
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 67
        },
        "start": {
          "column": 0,
          "line": 45
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 67
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
