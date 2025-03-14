__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    599
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          24,
          145
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "range": [
                30,
                31
              ],
              "loc": {
                "end": {
                  "column": 5,
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
                143
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 3
                              },
                              "start": {
                                "column": 13,
                                "line": 3
                              }
                            },
                            "range": [
                              49,
                              52
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  51,
                                  52
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 3
                                  }
                                }
                              },
                              "range": [
                                51,
                                52
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 3
                                },
                                "start": {
                                  "column": 15,
                                  "line": 3
                                }
                              }
                            }
                          },
                          "range": [
                            48,
                            52
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
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
                          48,
                          52
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 3
                          },
                          "start": {
                            "column": 12,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      44,
                      53
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 3
                      },
                      "start": {
                        "column": 8,
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            66,
                            67
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 4
                            },
                            "start": {
                              "column": 12,
                              "line": 4
                            }
                          }
                        },
                        "init": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                70,
                                71
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 4
                                },
                                "start": {
                                  "column": 16,
                                  "line": 4
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Literal",
                              "raw": "'notHere'",
                              "value": "notHere",
                              "range": [
                                72,
                                81
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 4
                                },
                                "start": {
                                  "column": 18,
                                  "line": 4
                                }
                              }
                            },
                            "range": [
                              70,
                              82
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 4
                              },
                              "start": {
                                "column": 16,
                                "line": 4
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            70,
                            84
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 4
                            },
                            "start": {
                              "column": 16,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          66,
                          84
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 4
                          },
                          "start": {
                            "column": 12,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      62,
                      85
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          121,
                          122
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 5
                          },
                          "start": {
                            "column": 15,
                            "line": 5
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
                            "name": "x",
                            "optional": false,
                            "range": [
                              125,
                              126
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 5
                              },
                              "start": {
                                "column": 19,
                                "line": 5
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "notHere",
                            "optional": false,
                            "range": [
                              127,
                              134
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 5
                              },
                              "start": {
                                "column": 21,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            125,
                            134
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 5
                            },
                            "start": {
                              "column": 19,
                              "line": 5
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          125,
                          136
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 5
                          },
                          "start": {
                            "column": 19,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        121,
                        136
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 5
                        },
                        "start": {
                          "column": 15,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      114,
                      137
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  34,
                  143
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 2
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
                  "line": 6
                },
                "start": {
                  "column": 5,
                  "line": 2
                }
              }
            },
            "range": [
              30,
              143
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 24,
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        },
        "range": [
          7,
          23
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "range": [
                  18,
                  22
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 1
                  },
                  "start": {
                    "column": 18,
                    "line": 1
                  }
                }
              },
              "range": [
                18,
                22
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 1
                },
                "start": {
                  "column": 18,
                  "line": 1
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                8,
                9
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 1
                },
                "start": {
                  "column": 8,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              8,
              22
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 1
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        145
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 1
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
            "name": "r",
            "optional": false,
            "range": [
              151,
              152
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "NewExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "range": [
                    160,
                    161
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 9
                    },
                    "start": {
                      "column": 13,
                      "line": 9
                    }
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    161,
                    167
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "range": [
                          162,
                          166
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 9
                          },
                          "start": {
                            "column": 15,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        162,
                        166
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 9
                        },
                        "start": {
                          "column": 15,
                          "line": 9
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 9
                    },
                    "start": {
                      "column": 14,
                      "line": 9
                    }
                  }
                },
                "range": [
                  156,
                  169
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 9
                  },
                  "start": {
                    "column": 9,
                    "line": 9
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "range": [
                  171,
                  172
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 9
                  },
                  "start": {
                    "column": 24,
                    "line": 9
                  }
                }
              },
              "range": [
                155,
                172
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 9
                },
                "start": {
                  "column": 8,
                  "line": 9
                }
              }
            },
            "optional": false,
            "range": [
              155,
              174
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 9
              },
              "start": {
                "column": 8,
                "line": 9
              }
            }
          },
          "range": [
            151,
            174
          ],
          "loc": {
            "end": {
              "column": 27,
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
        147,
        175
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          205,
          220
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                211,
                214
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
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 10,
                  "line": 12
                },
                "start": {
                  "column": 7,
                  "line": 12
                }
              },
              "range": [
                214,
                217
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    216,
                    217
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 12
                    },
                    "start": {
                      "column": 9,
                      "line": 12
                    }
                  }
                },
                "range": [
                  216,
                  217
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 12
                  },
                  "start": {
                    "column": 9,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              211,
              218
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
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
            "column": 28,
            "line": 11
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "range": [
          187,
          188
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 11
          },
          "start": {
            "column": 10,
            "line": 11
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 27,
            "line": 11
          },
          "start": {
            "column": 11,
            "line": 11
          }
        },
        "range": [
          188,
          204
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "range": [
                  199,
                  203
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 11
                  },
                  "start": {
                    "column": 22,
                    "line": 11
                  }
                }
              },
              "range": [
                199,
                203
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 11
                },
                "start": {
                  "column": 22,
                  "line": 11
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                189,
                190
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 11
                },
                "start": {
                  "column": 12,
                  "line": 11
                }
              }
            },
            "out": false,
            "range": [
              189,
              203
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 11
              },
              "start": {
                "column": 12,
                "line": 11
              }
            }
          }
        ]
      },
      "range": [
        177,
        220
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 11
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
                  "column": 14,
                  "line": 14
                },
                "start": {
                  "column": 5,
                  "line": 14
                }
              },
              "range": [
                226,
                235
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    229,
                    235
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "range": [
                          230,
                          234
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 14
                          },
                          "start": {
                            "column": 9,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        230,
                        234
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 14
                        },
                        "start": {
                          "column": 9,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 14
                    },
                    "start": {
                      "column": 8,
                      "line": 14
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "range": [
                    228,
                    229
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 14
                    },
                    "start": {
                      "column": 7,
                      "line": 14
                    }
                  }
                },
                "range": [
                  228,
                  235
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 14
                  },
                  "start": {
                    "column": 7,
                    "line": 14
                  }
                }
              }
            },
            "range": [
              225,
              235
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          "init": null,
          "range": [
            225,
            235
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 14
            },
            "start": {
              "column": 4,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        221,
        236
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 14
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
            "name": "r2",
            "optional": false,
            "range": [
              241,
              243
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          "init": {
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
                  "name": "i",
                  "optional": false,
                  "range": [
                    246,
                    247
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 15
                    },
                    "start": {
                      "column": 9,
                      "line": 15
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
                    248,
                    251
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 15
                    },
                    "start": {
                      "column": 11,
                      "line": 15
                    }
                  }
                },
                "range": [
                  246,
                  251
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 15
                  },
                  "start": {
                    "column": 9,
                    "line": 15
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "notHere",
                "optional": false,
                "range": [
                  252,
                  259
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 15
                  },
                  "start": {
                    "column": 15,
                    "line": 15
                  }
                }
              },
              "range": [
                246,
                259
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 15
                },
                "start": {
                  "column": 9,
                  "line": 15
                }
              }
            },
            "optional": false,
            "range": [
              246,
              261
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 15
              },
              "start": {
                "column": 9,
                "line": 15
              }
            }
          },
          "range": [
            241,
            261
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 15
            },
            "start": {
              "column": 4,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        237,
        262
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
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
            "name": "r2b",
            "optional": false,
            "range": [
              267,
              270
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
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
                      "column": 11,
                      "line": 16
                    },
                    "start": {
                      "column": 10,
                      "line": 16
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
                    275,
                    278
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
                "range": [
                  273,
                  278
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 16
                  },
                  "start": {
                    "column": 10,
                    "line": 16
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "raw": "'notHere'",
                "value": "notHere",
                "range": [
                  279,
                  288
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 16
                  },
                  "start": {
                    "column": 16,
                    "line": 16
                  }
                }
              },
              "range": [
                273,
                289
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 16
                },
                "start": {
                  "column": 10,
                  "line": 16
                }
              }
            },
            "optional": false,
            "range": [
              273,
              291
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 16
              },
              "start": {
                "column": 10,
                "line": 16
              }
            }
          },
          "range": [
            267,
            291
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 16
            },
            "start": {
              "column": 4,
              "line": 16
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        263,
        292
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
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
                  "column": 1,
                  "line": 20
                },
                "start": {
                  "column": 5,
                  "line": 18
                }
              },
              "range": [
                299,
                331
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 19
                        },
                        "start": {
                          "column": 22,
                          "line": 19
                        }
                      },
                      "range": [
                        325,
                        328
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            327,
                            328
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 19
                            },
                            "start": {
                              "column": 24,
                              "line": 19
                            }
                          }
                        },
                        "range": [
                          327,
                          328
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 19
                          },
                          "start": {
                            "column": 24,
                            "line": 19
                          }
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 19
                        },
                        "start": {
                          "column": 4,
                          "line": 19
                        }
                      },
                      "range": [
                        307,
                        323
                      ],
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "const": false,
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "range": [
                                318,
                                322
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 19
                                },
                                "start": {
                                  "column": 15,
                                  "line": 19
                                }
                              }
                            },
                            "range": [
                              318,
                              322
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 19
                              },
                              "start": {
                                "column": 15,
                                "line": 19
                              }
                            }
                          },
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              308,
                              309
                            ],
                            "loc": {
                              "end": {
                                "column": 6,
                                "line": 19
                              },
                              "start": {
                                "column": 5,
                                "line": 19
                              }
                            }
                          },
                          "out": false,
                          "range": [
                            308,
                            322
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 19
                            },
                            "start": {
                              "column": 5,
                              "line": 19
                            }
                          }
                        }
                      ]
                    },
                    "range": [
                      307,
                      329
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 19
                      },
                      "start": {
                        "column": 4,
                        "line": 19
                      }
                    }
                  }
                ],
                "range": [
                  301,
                  331
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 20
                  },
                  "start": {
                    "column": 7,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              298,
              331
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "init": null,
          "range": [
            298,
            331
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 20
            },
            "start": {
              "column": 4,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        294,
        331
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 14,
                  "line": 21
                },
                "start": {
                  "column": 6,
                  "line": 21
                }
              },
              "range": [
                338,
                346
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  340,
                  346
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 21
                  },
                  "start": {
                    "column": 8,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              336,
              346
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    349,
                    350
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 21
                    },
                    "start": {
                      "column": 17,
                      "line": 21
                    }
                  }
                },
                "optional": false,
                "range": [
                  349,
                  352
                ],
                "loc": {
                  "end": {
                    "column": 20,
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
                "type": "Identifier",
                "decorators": [],
                "name": "notHere",
                "optional": false,
                "range": [
                  353,
                  360
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 21
                  },
                  "start": {
                    "column": 21,
                    "line": 21
                  }
                }
              },
              "range": [
                349,
                360
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
            "range": [
              349,
              362
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 21
              },
              "start": {
                "column": 17,
                "line": 21
              }
            }
          },
          "range": [
            336,
            362
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 21
            },
            "start": {
              "column": 4,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        332,
        363
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
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
            "name": "r3b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 22
                },
                "start": {
                  "column": 7,
                  "line": 22
                }
              },
              "range": [
                371,
                379
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  373,
                  379
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 22
                  },
                  "start": {
                    "column": 9,
                    "line": 22
                  }
                }
              }
            },
            "range": [
              368,
              379
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
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    382,
                    383
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 22
                    },
                    "start": {
                      "column": 18,
                      "line": 22
                    }
                  }
                },
                "optional": false,
                "range": [
                  382,
                  385
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 22
                  },
                  "start": {
                    "column": 18,
                    "line": 22
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "raw": "'notHere'",
                "value": "notHere",
                "range": [
                  386,
                  395
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 22
                  },
                  "start": {
                    "column": 22,
                    "line": 22
                  }
                }
              },
              "range": [
                382,
                396
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 22
                },
                "start": {
                  "column": 18,
                  "line": 22
                }
              }
            },
            "optional": false,
            "range": [
              382,
              398
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 22
              },
              "start": {
                "column": 18,
                "line": 22
              }
            }
          },
          "range": [
            368,
            398
          ],
          "loc": {
            "end": {
              "column": 34,
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
        364,
        399
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
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
            "range": [
              405,
              406
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
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
                  "name": "foo",
                  "optional": false,
                  "range": [
                    415,
                    418
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
                                463,
                                464
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 26
                                },
                                "start": {
                                  "column": 12,
                                  "line": 26
                                }
                              }
                            },
                            "init": {
                              "type": "CallExpression",
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "range": [
                                    467,
                                    468
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 17,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 26
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Literal",
                                  "raw": "'notHere'",
                                  "value": "notHere",
                                  "range": [
                                    469,
                                    478
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 27,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 26
                                    }
                                  }
                                },
                                "range": [
                                  467,
                                  479
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 26
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 26
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                467,
                                481
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 26
                                },
                                "start": {
                                  "column": 16,
                                  "line": 26
                                }
                              }
                            },
                            "range": [
                              463,
                              481
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 26
                              },
                              "start": {
                                "column": 12,
                                "line": 26
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "var",
                        "range": [
                          459,
                          482
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 26
                          },
                          "start": {
                            "column": 8,
                            "line": 26
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "range": [
                              518,
                              519
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 27
                              },
                              "start": {
                                "column": 15,
                                "line": 27
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
                                "name": "x",
                                "optional": false,
                                "range": [
                                  522,
                                  523
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
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
                                "name": "notHere",
                                "optional": false,
                                "range": [
                                  524,
                                  531
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 27
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 27
                                  }
                                }
                              },
                              "range": [
                                522,
                                531
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
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
                              522,
                              533
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 27
                              },
                              "start": {
                                "column": 19,
                                "line": 27
                              }
                            }
                          },
                          "range": [
                            518,
                            533
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 27
                            },
                            "start": {
                              "column": 15,
                              "line": 27
                            }
                          }
                        },
                        "range": [
                          511,
                          534
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 27
                          },
                          "start": {
                            "column": 8,
                            "line": 27
                          }
                        }
                      }
                    ],
                    "range": [
                      449,
                      540
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 28
                      },
                      "start": {
                        "column": 38,
                        "line": 25
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 25
                          },
                          "start": {
                            "column": 27,
                            "line": 25
                          }
                        },
                        "range": [
                          438,
                          441
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              440,
                              441
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 25
                              },
                              "start": {
                                "column": 29,
                                "line": 25
                              }
                            }
                          },
                          "range": [
                            440,
                            441
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 25
                            },
                            "start": {
                              "column": 29,
                              "line": 25
                            }
                          }
                        }
                      },
                      "range": [
                        437,
                        441
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 25
                        },
                        "start": {
                          "column": 26,
                          "line": 25
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 25
                      },
                      "start": {
                        "column": 31,
                        "line": 25
                      }
                    },
                    "range": [
                      442,
                      445
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          444,
                          445
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 25
                          },
                          "start": {
                            "column": 33,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        444,
                        445
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 25
                        },
                        "start": {
                          "column": 33,
                          "line": 25
                        }
                      }
                    }
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 25
                      },
                      "start": {
                        "column": 9,
                        "line": 25
                      }
                    },
                    "range": [
                      420,
                      436
                    ],
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "const": false,
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Date",
                            "optional": false,
                            "range": [
                              431,
                              435
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 25
                              },
                              "start": {
                                "column": 20,
                                "line": 25
                              }
                            }
                          },
                          "range": [
                            431,
                            435
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 25
                            },
                            "start": {
                              "column": 20,
                              "line": 25
                            }
                          }
                        },
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            421,
                            422
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
                        "out": false,
                        "range": [
                          421,
                          435
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 25
                          },
                          "start": {
                            "column": 10,
                            "line": 25
                          }
                        }
                      }
                    ]
                  },
                  "range": [
                    420,
                    540
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 28
                    },
                    "start": {
                      "column": 9,
                      "line": 25
                    }
                  }
                },
                "range": [
                  415,
                  540
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 28
                  },
                  "start": {
                    "column": 4,
                    "line": 25
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "range": [
                    546,
                    549
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 29
                    },
                    "start": {
                      "column": 4,
                      "line": 29
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
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
                            551,
                            552
                          ],
                          "loc": {
                            "end": {
                              "column": 10,
                              "line": 29
                            },
                            "start": {
                              "column": 9,
                              "line": 29
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
                            553,
                            556
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 29
                            },
                            "start": {
                              "column": 11,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          551,
                          556
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 29
                          },
                          "start": {
                            "column": 9,
                            "line": 29
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        551,
                        558
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 29
                        },
                        "start": {
                          "column": 9,
                          "line": 29
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "notHere",
                      "optional": false,
                      "range": [
                        559,
                        566
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 29
                        },
                        "start": {
                          "column": 17,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      551,
                      566
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 29
                      },
                      "start": {
                        "column": 9,
                        "line": 29
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    551,
                    568
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 29
                    },
                    "start": {
                      "column": 9,
                      "line": 29
                    }
                  }
                },
                "range": [
                  546,
                  568
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 29
                  },
                  "start": {
                    "column": 4,
                    "line": 29
                  }
                }
              }
            ],
            "range": [
              409,
              570
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 30
              },
              "start": {
                "column": 8,
                "line": 24
              }
            }
          },
          "range": [
            405,
            570
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 30
            },
            "start": {
              "column": 4,
              "line": 24
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        401,
        570
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 24
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
            "name": "r4",
            "optional": false,
            "range": [
              576,
              578
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "NewExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "range": [
                    591,
                    595
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 32
                    },
                    "start": {
                      "column": 19,
                      "line": 32
                    }
                  }
                },
                "range": [
                  587,
                  597
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 32
                  },
                  "start": {
                    "column": 15,
                    "line": 32
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
                "name": "b",
                "optional": false,
                "range": [
                  581,
                  582
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
                "name": "foo",
                "optional": false,
                "range": [
                  583,
                  586
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 32
                  },
                  "start": {
                    "column": 11,
                    "line": 32
                  }
                }
              },
              "range": [
                581,
                586
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
            "optional": false,
            "range": [
              581,
              598
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 32
              },
              "start": {
                "column": 9,
                "line": 32
              }
            }
          },
          "range": [
            576,
            598
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 32
            },
            "start": {
              "column": 4,
              "line": 32
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        572,
        599
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 27,
      "line": 32
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
