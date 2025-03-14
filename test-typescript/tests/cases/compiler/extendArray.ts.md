__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    421
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
            "name": "a",
            "optional": false,
            "range": [
              4,
              5
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  9,
                  10
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 1
                  },
                  "start": {
                    "column": 9,
                    "line": 1
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  11,
                  12
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 1
                  },
                  "start": {
                    "column": 11,
                    "line": 1
                  }
                }
              }
            ],
            "range": [
              8,
              13
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 1
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          },
          "range": [
            4,
            13
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 1
            },
            "start": {
              "column": 4,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        0,
        14
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
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
              "body": [],
              "range": [
                42,
                44
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 2
                },
                "start": {
                  "column": 27,
                  "line": 2
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
                  35,
                  36
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 2
                  },
                  "start": {
                    "column": 20,
                    "line": 2
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "range": [
                  37,
                  38
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 2
                  },
                  "start": {
                    "column": 22,
                    "line": 2
                  }
                }
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  39,
                  40
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 2
                  },
                  "start": {
                    "column": 24,
                    "line": 2
                  }
                }
              }
            ],
            "range": [
              25,
              44
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 2
              },
              "start": {
                "column": 10,
                "line": 2
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
            "name": "a",
            "optional": false,
            "range": [
              15,
              16
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 2
              },
              "start": {
                "column": 0,
                "line": 2
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forEach",
            "optional": false,
            "range": [
              17,
              24
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 2
              },
              "start": {
                "column": 2,
                "line": 2
              }
            }
          },
          "range": [
            15,
            24
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 2
            },
            "start": {
              "column": 0,
              "line": 2
            }
          }
        },
        "optional": false,
        "range": [
          15,
          45
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 2
          },
          "start": {
            "column": 0,
            "line": 2
          }
        }
      },
      "range": [
        15,
        46
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                90,
                147
              ],
              "body": [
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "collect",
                    "optional": false,
                    "range": [
                      96,
                      103
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
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
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 7
                          },
                          "start": {
                            "column": 14,
                            "line": 7
                          }
                        },
                        "range": [
                          106,
                          133
                        ],
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 7
                                  }
                                },
                                "range": [
                                  109,
                                  118
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "_element",
                                    "optional": false,
                                    "range": [
                                      110,
                                      118
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 26,
                                        "line": 7
                                      },
                                      "start": {
                                        "column": 18,
                                        "line": 7
                                      }
                                    }
                                  },
                                  "range": [
                                    110,
                                    118
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 7
                                    }
                                  }
                                }
                              },
                              "range": [
                                108,
                                118
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 7
                                },
                                "start": {
                                  "column": 16,
                                  "line": 7
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 7
                              },
                              "start": {
                                "column": 28,
                                "line": 7
                              }
                            },
                            "range": [
                              120,
                              133
                            ],
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_element",
                                  "optional": false,
                                  "range": [
                                    123,
                                    131
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 39,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 31,
                                      "line": 7
                                    }
                                  }
                                },
                                "range": [
                                  123,
                                  131
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 31,
                                    "line": 7
                                  }
                                }
                              },
                              "range": [
                                123,
                                133
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 7
                                },
                                "start": {
                                  "column": 31,
                                  "line": 7
                                }
                              }
                            }
                          },
                          "range": [
                            107,
                            133
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 7
                            },
                            "start": {
                              "column": 15,
                              "line": 7
                            }
                          }
                        }
                      },
                      "range": [
                        104,
                        133
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 7
                        },
                        "start": {
                          "column": 12,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 7
                      },
                      "start": {
                        "column": 43,
                        "line": 7
                      }
                    },
                    "range": [
                      135,
                      142
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "range": [
                          137,
                          140
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 7
                          },
                          "start": {
                            "column": 45,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        137,
                        142
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 7
                        },
                        "start": {
                          "column": 45,
                          "line": 7
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    96,
                    143
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 7
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
                  "column": 3,
                  "line": 8
                },
                "start": {
                  "column": 18,
                  "line": 6
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array",
              "optional": false,
              "range": [
                84,
                89
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 6
                },
                "start": {
                  "column": 12,
                  "line": 6
                }
              }
            },
            "range": [
              74,
              147
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 8
              },
              "start": {
                "column": 2,
                "line": 6
              }
            }
          }
        ],
        "range": [
          70,
          149
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 21,
            "line": 5
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          64,
          69
        ],
        "decorators": [],
        "name": "_Core",
        "optional": false,
        "loc": {
          "end": {
            "column": 20,
            "line": 5
          },
          "start": {
            "column": 15,
            "line": 5
          }
        }
      },
      "kind": "module",
      "range": [
        49,
        149
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
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
            "name": "arr",
            "optional": false,
            "range": [
              156,
              159
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "TSTypeAssertion",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "range": [
                  168,
                  173
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 12
                  },
                  "start": {
                    "column": 16,
                    "line": 12
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  164,
                  167
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 12
                  },
                  "start": {
                    "column": 12,
                    "line": 12
                  }
                }
              },
              "range": [
                163,
                173
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 12
                },
                "start": {
                  "column": 11,
                  "line": 12
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "range": [
                175,
                184
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
              162,
              184
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 12
              },
              "start": {
                "column": 10,
                "line": 12
              }
            }
          },
          "range": [
            156,
            184
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        152,
        185
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
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
            "name": "arr",
            "optional": false,
            "range": [
              186,
              189
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 13
              },
              "start": {
                "column": 0,
                "line": 13
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "collect",
            "optional": false,
            "range": [
              190,
              197
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          "range": [
            186,
            197
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 13
            },
            "start": {
              "column": 0,
              "line": 13
            }
          }
        },
        "right": {
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
                      "name": "res",
                      "optional": false,
                      "range": [
                        224,
                        227
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 14
                        },
                        "start": {
                          "column": 8,
                          "line": 14
                        }
                      }
                    },
                    "init": {
                      "type": "ArrayExpression",
                      "elements": [],
                      "range": [
                        230,
                        232
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 14
                        },
                        "start": {
                          "column": 14,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      224,
                      232
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
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
                "kind": "var",
                "range": [
                  220,
                  233
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
                    "line": 14
                  }
                }
              },
              {
                "type": "ForStatement",
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
                            "name": "tmp",
                            "optional": false,
                            "range": [
                              290,
                              293
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 16
                              },
                              "start": {
                                "column": 12,
                                "line": 16
                              }
                            }
                          },
                          "init": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "ThisExpression",
                                  "range": [
                                    299,
                                    303
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 16
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 16
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "range": [
                                    304,
                                    305
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 27,
                                      "line": 16
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 16
                                    }
                                  }
                                },
                                "range": [
                                  299,
                                  306
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 16
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fn",
                              "optional": false,
                              "range": [
                                296,
                                298
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 16
                                },
                                "start": {
                                  "column": 18,
                                  "line": 16
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              296,
                              307
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 16
                              },
                              "start": {
                                "column": 18,
                                "line": 16
                              }
                            }
                          },
                          "range": [
                            290,
                            307
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 16
                            },
                            "start": {
                              "column": 12,
                              "line": 16
                            }
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var",
                      "range": [
                        286,
                        308
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 16
                        },
                        "start": {
                          "column": 8,
                          "line": 16
                        }
                      }
                    },
                    {
                      "type": "ForStatement",
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "tmp",
                                    "optional": false,
                                    "range": [
                                      377,
                                      380
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 18
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 18
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "j",
                                    "optional": false,
                                    "range": [
                                      381,
                                      382
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 26,
                                        "line": 18
                                      },
                                      "start": {
                                        "column": 25,
                                        "line": 18
                                      }
                                    }
                                  },
                                  "range": [
                                    377,
                                    383
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 27,
                                      "line": 18
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 18
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
                                  "name": "res",
                                  "optional": false,
                                  "range": [
                                    368,
                                    371
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 15,
                                      "line": 18
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 18
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "push",
                                  "optional": false,
                                  "range": [
                                    372,
                                    376
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 20,
                                      "line": 18
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 18
                                    }
                                  }
                                },
                                "range": [
                                  368,
                                  376
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 18
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                368,
                                384
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 18
                                },
                                "start": {
                                  "column": 12,
                                  "line": 18
                                }
                              }
                            },
                            "range": [
                              368,
                              385
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 18
                              },
                              "start": {
                                "column": 12,
                                "line": 18
                              }
                            }
                          }
                        ],
                        "range": [
                          354,
                          395
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 19
                          },
                          "start": {
                            "column": 45,
                            "line": 17
                          }
                        }
                      },
                      "init": {
                        "type": "VariableDeclaration",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "j",
                              "optional": false,
                              "range": [
                                326,
                                327
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 17
                                },
                                "start": {
                                  "column": 17,
                                  "line": 17
                                }
                              }
                            },
                            "init": {
                              "type": "Literal",
                              "raw": "0",
                              "value": 0,
                              "range": [
                                330,
                                331
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 17
                                },
                                "start": {
                                  "column": 21,
                                  "line": 17
                                }
                              }
                            },
                            "range": [
                              326,
                              331
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 17
                              },
                              "start": {
                                "column": 17,
                                "line": 17
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "var",
                        "range": [
                          322,
                          331
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 17
                          },
                          "start": {
                            "column": 13,
                            "line": 17
                          }
                        }
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "operator": "<",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "j",
                          "optional": false,
                          "range": [
                            333,
                            334
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 17
                            },
                            "start": {
                              "column": 24,
                              "line": 17
                            }
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "tmp",
                            "optional": false,
                            "range": [
                              337,
                              340
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 17
                              },
                              "start": {
                                "column": 28,
                                "line": 17
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
                              341,
                              347
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 17
                              },
                              "start": {
                                "column": 32,
                                "line": 17
                              }
                            }
                          },
                          "range": [
                            337,
                            347
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 17
                            },
                            "start": {
                              "column": 28,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          333,
                          347
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 17
                          },
                          "start": {
                            "column": 24,
                            "line": 17
                          }
                        }
                      },
                      "update": {
                        "type": "UpdateExpression",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "j",
                          "optional": false,
                          "range": [
                            351,
                            352
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 17
                            },
                            "start": {
                              "column": 42,
                              "line": 17
                            }
                          }
                        },
                        "operator": "++",
                        "prefix": true,
                        "range": [
                          349,
                          352
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 17
                          },
                          "start": {
                            "column": 40,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        317,
                        395
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 19
                        },
                        "start": {
                          "column": 8,
                          "line": 17
                        }
                      }
                    }
                  ],
                  "range": [
                    276,
                    401
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 20
                    },
                    "start": {
                      "column": 42,
                      "line": 15
                    }
                  }
                },
                "init": {
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
                          247,
                          248
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 15
                          },
                          "start": {
                            "column": 13,
                            "line": 15
                          }
                        }
                      },
                      "init": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          251,
                          252
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 15
                          },
                          "start": {
                            "column": 17,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        247,
                        252
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 15
                        },
                        "start": {
                          "column": 13,
                          "line": 15
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    243,
                    252
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 15
                    },
                    "start": {
                      "column": 9,
                      "line": 15
                    }
                  }
                },
                "test": {
                  "type": "BinaryExpression",
                  "operator": "<",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "range": [
                      254,
                      255
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 15
                      },
                      "start": {
                        "column": 20,
                        "line": 15
                      }
                    }
                  },
                  "right": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "range": [
                        258,
                        262
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 15
                        },
                        "start": {
                          "column": 24,
                          "line": 15
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
                        263,
                        269
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 15
                        },
                        "start": {
                          "column": 29,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      258,
                      269
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 15
                      },
                      "start": {
                        "column": 24,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    254,
                    269
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 15
                    },
                    "start": {
                      "column": 20,
                      "line": 15
                    }
                  }
                },
                "update": {
                  "type": "UpdateExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "range": [
                      273,
                      274
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 15
                      },
                      "start": {
                        "column": 39,
                        "line": 15
                      }
                    }
                  },
                  "operator": "++",
                  "prefix": true,
                  "range": [
                    271,
                    274
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 15
                    },
                    "start": {
                      "column": 37,
                      "line": 15
                    }
                  }
                },
                "range": [
                  238,
                  401
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 20
                  },
                  "start": {
                    "column": 4,
                    "line": 15
                  }
                }
              },
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "res",
                  "optional": false,
                  "range": [
                    413,
                    416
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 21
                    },
                    "start": {
                      "column": 11,
                      "line": 21
                    }
                  }
                },
                "range": [
                  406,
                  417
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 21
                  },
                  "start": {
                    "column": 4,
                    "line": 21
                  }
                }
              }
            ],
            "range": [
              214,
              419
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 22
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
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "range": [
                210,
                212
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 13
                },
                "start": {
                  "column": 24,
                  "line": 13
                }
              }
            }
          ],
          "range": [
            200,
            419
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
        "range": [
          186,
          419
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
      "range": [
        186,
        420
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 22
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
      "column": 0,
      "line": 23
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
