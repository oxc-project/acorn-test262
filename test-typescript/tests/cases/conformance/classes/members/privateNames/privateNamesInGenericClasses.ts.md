__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    930
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          11,
          621
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "name": "foo",
              "range": [
                17,
                21
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 2
                },
                "start": {
                  "column": 4,
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
                  "column": 11,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              },
              "range": [
                21,
                24
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    23,
                    24
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 2
                    },
                    "start": {
                      "column": 10,
                      "line": 2
                    }
                  }
                },
                "range": [
                  23,
                  24
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 2
                  },
                  "start": {
                    "column": 10,
                    "line": 2
                  }
                }
              }
            },
            "value": null,
            "range": [
              17,
              25
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
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "method",
              "range": [
                30,
                37
              ],
              "loc": {
                "end": {
                  "column": 11,
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
                37,
                64
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
                          52,
                          56
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 3
                          },
                          "start": {
                            "column": 26,
                            "line": 3
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "foo",
                        "range": [
                          57,
                          61
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 3
                          },
                          "start": {
                            "column": 31,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        52,
                        61
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 3
                        },
                        "start": {
                          "column": 26,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      45,
                      62
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 3
                      },
                      "start": {
                        "column": 19,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  43,
                  64
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 3
                  },
                  "start": {
                    "column": 17,
                    "line": 3
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
                    "line": 3
                  },
                  "start": {
                    "column": 13,
                    "line": 3
                  }
                },
                "range": [
                  39,
                  42
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      41,
                      42
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
                    41,
                    42
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
              "loc": {
                "end": {
                  "column": 38,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "range": [
              30,
              64
            ],
            "loc": {
              "end": {
                "column": 38,
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
              "type": "PrivateIdentifier",
              "name": "prop",
              "range": [
                73,
                78
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 4
                },
                "start": {
                  "column": 8,
                  "line": 4
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
                78,
                105
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
                          93,
                          97
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 4
                          },
                          "start": {
                            "column": 28,
                            "line": 4
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "foo",
                        "range": [
                          98,
                          102
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 4
                          },
                          "start": {
                            "column": 33,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        93,
                        102
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 4
                        },
                        "start": {
                          "column": 28,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      86,
                      103
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 4
                      },
                      "start": {
                        "column": 21,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  84,
                  105
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 4
                  },
                  "start": {
                    "column": 19,
                    "line": 4
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
                    "line": 4
                  },
                  "start": {
                    "column": 15,
                    "line": 4
                  }
                },
                "range": [
                  80,
                  83
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      82,
                      83
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 4
                      },
                      "start": {
                        "column": 17,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    82,
                    83
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 4
                    },
                    "start": {
                      "column": 17,
                      "line": 4
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 40,
                  "line": 4
                },
                "start": {
                  "column": 13,
                  "line": 4
                }
              }
            },
            "range": [
              69,
              105
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "prop",
              "range": [
                114,
                119
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 5
                },
                "start": {
                  "column": 8,
                  "line": 5
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
                119,
                153
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
                            133,
                            137
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 5
                            },
                            "start": {
                              "column": 27,
                              "line": 5
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "foo",
                          "range": [
                            138,
                            142
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 5
                            },
                            "start": {
                              "column": 32,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          133,
                          142
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 5
                          },
                          "start": {
                            "column": 27,
                            "line": 5
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "range": [
                          145,
                          150
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 5
                          },
                          "start": {
                            "column": 39,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        133,
                        150
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 5
                        },
                        "start": {
                          "column": 27,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      133,
                      151
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 5
                      },
                      "start": {
                        "column": 27,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  131,
                  153
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 5
                  },
                  "start": {
                    "column": 25,
                    "line": 5
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 5
                      },
                      "start": {
                        "column": 20,
                        "line": 5
                      }
                    },
                    "range": [
                      126,
                      129
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          128,
                          129
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 5
                          },
                          "start": {
                            "column": 22,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        128,
                        129
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 5
                        },
                        "start": {
                          "column": 22,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    120,
                    129
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 5
                    },
                    "start": {
                      "column": 14,
                      "line": 5
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 5
                },
                "start": {
                  "column": 13,
                  "line": 5
                }
              }
            },
            "range": [
              110,
              153
            ],
            "loc": {
              "end": {
                "column": 47,
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
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                163,
                166
              ],
              "loc": {
                "end": {
                  "column": 7,
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
                166,
                194
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          185,
                          186
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 7
                          },
                          "start": {
                            "column": 26,
                            "line": 7
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "foo",
                        "range": [
                          187,
                          191
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 7
                          },
                          "start": {
                            "column": 28,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        185,
                        191
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 7
                        },
                        "start": {
                          "column": 26,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      178,
                      192
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 7
                      },
                      "start": {
                        "column": 19,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  176,
                  194
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 7
                  },
                  "start": {
                    "column": 17,
                    "line": 7
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 7
                      },
                      "start": {
                        "column": 9,
                        "line": 7
                      }
                    },
                    "range": [
                      168,
                      174
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          171,
                          174
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
                                172,
                                173
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 7
                                },
                                "start": {
                                  "column": 13,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              172,
                              173
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 7
                              },
                              "start": {
                                "column": 13,
                                "line": 7
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 7
                          },
                          "start": {
                            "column": 12,
                            "line": 7
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "range": [
                          170,
                          171
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 7
                          },
                          "start": {
                            "column": 11,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        170,
                        174
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 7
                        },
                        "start": {
                          "column": 11,
                          "line": 7
                        }
                      }
                    }
                  },
                  "range": [
                    167,
                    174
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 7
                    },
                    "start": {
                      "column": 8,
                      "line": 7
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 7
                },
                "start": {
                  "column": 7,
                  "line": 7
                }
              }
            },
            "range": [
              163,
              194
            ],
            "loc": {
              "end": {
                "column": 35,
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
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar2",
              "optional": false,
              "range": [
                214,
                218
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
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
                218,
                251
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
                            237,
                            238
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 8
                            },
                            "start": {
                              "column": 27,
                              "line": 8
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "method",
                          "range": [
                            239,
                            246
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 8
                            },
                            "start": {
                              "column": 29,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          237,
                          246
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 8
                          },
                          "start": {
                            "column": 27,
                            "line": 8
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        237,
                        248
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 8
                        },
                        "start": {
                          "column": 27,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      230,
                      249
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 8
                      },
                      "start": {
                        "column": 20,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  228,
                  251
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 8
                  },
                  "start": {
                    "column": 18,
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 8
                      },
                      "start": {
                        "column": 10,
                        "line": 8
                      }
                    },
                    "range": [
                      220,
                      226
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          223,
                          226
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
                                224,
                                225
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 8
                                },
                                "start": {
                                  "column": 14,
                                  "line": 8
                                }
                              }
                            },
                            "range": [
                              224,
                              225
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 8
                              },
                              "start": {
                                "column": 14,
                                "line": 8
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 8
                          },
                          "start": {
                            "column": 13,
                            "line": 8
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "range": [
                          222,
                          223
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 8
                          },
                          "start": {
                            "column": 12,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        222,
                        226
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 8
                        },
                        "start": {
                          "column": 12,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    219,
                    226
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 8
                    },
                    "start": {
                      "column": 9,
                      "line": 8
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 8
                },
                "start": {
                  "column": 8,
                  "line": 8
                }
              }
            },
            "range": [
              214,
              251
            ],
            "loc": {
              "end": {
                "column": 41,
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
              "name": "bar3",
              "optional": false,
              "range": [
                265,
                269
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
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
                269,
                298
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          288,
                          289
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 9
                          },
                          "start": {
                            "column": 27,
                            "line": 9
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "prop",
                        "range": [
                          290,
                          295
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 9
                          },
                          "start": {
                            "column": 29,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        288,
                        295
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 9
                        },
                        "start": {
                          "column": 27,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      281,
                      296
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 9
                      },
                      "start": {
                        "column": 20,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  279,
                  298
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 9
                  },
                  "start": {
                    "column": 18,
                    "line": 9
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 9
                      },
                      "start": {
                        "column": 10,
                        "line": 9
                      }
                    },
                    "range": [
                      271,
                      277
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          274,
                          277
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
                                275,
                                276
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 9
                                },
                                "start": {
                                  "column": 14,
                                  "line": 9
                                }
                              }
                            },
                            "range": [
                              275,
                              276
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 9
                              },
                              "start": {
                                "column": 14,
                                "line": 9
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 9
                          },
                          "start": {
                            "column": 13,
                            "line": 9
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "range": [
                          273,
                          274
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 9
                          },
                          "start": {
                            "column": 12,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        273,
                        277
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
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
                    270,
                    277
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 9
                    },
                    "start": {
                      "column": 9,
                      "line": 9
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 9
                },
                "start": {
                  "column": 8,
                  "line": 9
                }
              }
            },
            "range": [
              265,
              298
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
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
              "name": "baz",
              "optional": false,
              "range": [
                317,
                320
              ],
              "loc": {
                "end": {
                  "column": 7,
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
                320,
                353
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          344,
                          345
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 11
                          },
                          "start": {
                            "column": 31,
                            "line": 11
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "foo",
                        "range": [
                          346,
                          350
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 11
                          },
                          "start": {
                            "column": 33,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        344,
                        350
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 11
                        },
                        "start": {
                          "column": 31,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      337,
                      351
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 11
                      },
                      "start": {
                        "column": 24,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  335,
                  353
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 11
                  },
                  "start": {
                    "column": 22,
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 11
                      },
                      "start": {
                        "column": 9,
                        "line": 11
                      }
                    },
                    "range": [
                      322,
                      333
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          325,
                          333
                        ],
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "range": [
                              326,
                              332
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 11
                              },
                              "start": {
                                "column": 13,
                                "line": 11
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 11
                          },
                          "start": {
                            "column": 12,
                            "line": 11
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "range": [
                          324,
                          325
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 11
                          },
                          "start": {
                            "column": 11,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        324,
                        333
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 11
                        },
                        "start": {
                          "column": 11,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    321,
                    333
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 11
                    },
                    "start": {
                      "column": 8,
                      "line": 11
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 11
                },
                "start": {
                  "column": 7,
                  "line": 11
                }
              }
            },
            "range": [
              317,
              353
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
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
              "name": "baz2",
              "optional": false,
              "range": [
                368,
                372
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
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
                372,
                408
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          396,
                          397
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 12
                          },
                          "start": {
                            "column": 32,
                            "line": 12
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "method",
                        "range": [
                          398,
                          405
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 12
                          },
                          "start": {
                            "column": 34,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        396,
                        405
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 12
                        },
                        "start": {
                          "column": 32,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      389,
                      406
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 12
                      },
                      "start": {
                        "column": 25,
                        "line": 12
                      }
                    }
                  }
                ],
                "range": [
                  387,
                  408
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 12
                  },
                  "start": {
                    "column": 23,
                    "line": 12
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 12
                      },
                      "start": {
                        "column": 10,
                        "line": 12
                      }
                    },
                    "range": [
                      374,
                      385
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          377,
                          385
                        ],
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "range": [
                              378,
                              384
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 12
                              },
                              "start": {
                                "column": 14,
                                "line": 12
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 12
                          },
                          "start": {
                            "column": 13,
                            "line": 12
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "range": [
                          376,
                          377
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 12
                          },
                          "start": {
                            "column": 12,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        376,
                        385
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 12
                        },
                        "start": {
                          "column": 12,
                          "line": 12
                        }
                      }
                    }
                  },
                  "range": [
                    373,
                    385
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 12
                    },
                    "start": {
                      "column": 9,
                      "line": 12
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 12
                },
                "start": {
                  "column": 8,
                  "line": 12
                }
              }
            },
            "range": [
              368,
              408
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
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
              "name": "baz3",
              "optional": false,
              "range": [
                419,
                423
              ],
              "loc": {
                "end": {
                  "column": 8,
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
                423,
                457
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          447,
                          448
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 13
                          },
                          "start": {
                            "column": 32,
                            "line": 13
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "prop",
                        "range": [
                          449,
                          454
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 13
                          },
                          "start": {
                            "column": 34,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        447,
                        454
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 13
                        },
                        "start": {
                          "column": 32,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      440,
                      455
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 13
                      },
                      "start": {
                        "column": 25,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  438,
                  457
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 13
                  },
                  "start": {
                    "column": 23,
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 13
                      },
                      "start": {
                        "column": 10,
                        "line": 13
                      }
                    },
                    "range": [
                      425,
                      436
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          428,
                          436
                        ],
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "range": [
                              429,
                              435
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 13
                              },
                              "start": {
                                "column": 14,
                                "line": 13
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 13
                          },
                          "start": {
                            "column": 13,
                            "line": 13
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "range": [
                          427,
                          428
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 13
                          },
                          "start": {
                            "column": 12,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        427,
                        436
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 13
                        },
                        "start": {
                          "column": 12,
                          "line": 13
                        }
                      }
                    }
                  },
                  "range": [
                    424,
                    436
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 13
                    },
                    "start": {
                      "column": 9,
                      "line": 13
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 13
                },
                "start": {
                  "column": 8,
                  "line": 13
                }
              }
            },
            "range": [
              419,
              457
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 13
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
              "name": "quux",
              "optional": false,
              "range": [
                471,
                475
              ],
              "loc": {
                "end": {
                  "column": 8,
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
                475,
                508
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          499,
                          500
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 15
                          },
                          "start": {
                            "column": 32,
                            "line": 15
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "foo",
                        "range": [
                          501,
                          505
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 15
                          },
                          "start": {
                            "column": 34,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        499,
                        505
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 15
                        },
                        "start": {
                          "column": 32,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      492,
                      506
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 15
                      },
                      "start": {
                        "column": 25,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  490,
                  508
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 15
                  },
                  "start": {
                    "column": 23,
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 15
                      },
                      "start": {
                        "column": 10,
                        "line": 15
                      }
                    },
                    "range": [
                      477,
                      488
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          480,
                          488
                        ],
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "range": [
                              481,
                              487
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 15
                              },
                              "start": {
                                "column": 14,
                                "line": 15
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 15
                          },
                          "start": {
                            "column": 13,
                            "line": 15
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "range": [
                          479,
                          480
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 15
                          },
                          "start": {
                            "column": 12,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        479,
                        488
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 15
                        },
                        "start": {
                          "column": 12,
                          "line": 15
                        }
                      }
                    }
                  },
                  "range": [
                    476,
                    488
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 15
                    },
                    "start": {
                      "column": 9,
                      "line": 15
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 15
                },
                "start": {
                  "column": 8,
                  "line": 15
                }
              }
            },
            "range": [
              471,
              508
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
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
              "name": "quux2",
              "optional": false,
              "range": [
                522,
                527
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
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
                527,
                563
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          551,
                          552
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 16
                          },
                          "start": {
                            "column": 33,
                            "line": 16
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "method",
                        "range": [
                          553,
                          560
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 16
                          },
                          "start": {
                            "column": 35,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        551,
                        560
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 16
                        },
                        "start": {
                          "column": 33,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      544,
                      561
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 16
                      },
                      "start": {
                        "column": 26,
                        "line": 16
                      }
                    }
                  }
                ],
                "range": [
                  542,
                  563
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 16
                  },
                  "start": {
                    "column": 24,
                    "line": 16
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 16
                      },
                      "start": {
                        "column": 11,
                        "line": 16
                      }
                    },
                    "range": [
                      529,
                      540
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          532,
                          540
                        ],
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "range": [
                              533,
                              539
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 16
                              },
                              "start": {
                                "column": 15,
                                "line": 16
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 16
                          },
                          "start": {
                            "column": 14,
                            "line": 16
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "range": [
                          531,
                          532
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 16
                          },
                          "start": {
                            "column": 13,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        531,
                        540
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 16
                        },
                        "start": {
                          "column": 13,
                          "line": 16
                        }
                      }
                    }
                  },
                  "range": [
                    528,
                    540
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 16
                    },
                    "start": {
                      "column": 10,
                      "line": 16
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 16
                },
                "start": {
                  "column": 9,
                  "line": 16
                }
              }
            },
            "range": [
              522,
              563
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
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
              "name": "quux3",
              "optional": false,
              "range": [
                573,
                578
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                578,
                612
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          602,
                          603
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 17
                          },
                          "start": {
                            "column": 33,
                            "line": 17
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "prop",
                        "range": [
                          604,
                          609
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 17
                          },
                          "start": {
                            "column": 35,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        602,
                        609
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 17
                        },
                        "start": {
                          "column": 33,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      595,
                      610
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 17
                      },
                      "start": {
                        "column": 26,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  593,
                  612
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 17
                  },
                  "start": {
                    "column": 24,
                    "line": 17
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 17
                      },
                      "start": {
                        "column": 11,
                        "line": 17
                      }
                    },
                    "range": [
                      580,
                      591
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          583,
                          591
                        ],
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "range": [
                              584,
                              590
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 17
                              },
                              "start": {
                                "column": 15,
                                "line": 17
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 17
                          },
                          "start": {
                            "column": 14,
                            "line": 17
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "range": [
                          582,
                          583
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 17
                          },
                          "start": {
                            "column": 13,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        582,
                        591
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
                    }
                  },
                  "range": [
                    579,
                    591
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 17
                    },
                    "start": {
                      "column": 10,
                      "line": 17
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 17
                },
                "start": {
                  "column": 9,
                  "line": 17
                }
              }
            },
            "range": [
              573,
              612
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 18
          },
          "start": {
            "column": 11,
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
            "column": 10,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        },
        "range": [
          7,
          10
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
          }
        ]
      },
      "range": [
        0,
        621
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 20
                },
                "start": {
                  "column": 13,
                  "line": 20
                }
              },
              "range": [
                636,
                647
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    639,
                    647
                  ],
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        640,
                        646
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 20
                        },
                        "start": {
                          "column": 17,
                          "line": 20
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 20
                    },
                    "start": {
                      "column": 16,
                      "line": 20
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "range": [
                    638,
                    639
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 20
                    },
                    "start": {
                      "column": 15,
                      "line": 20
                    }
                  }
                },
                "range": [
                  638,
                  647
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 20
                  },
                  "start": {
                    "column": 15,
                    "line": 20
                  }
                }
              }
            },
            "range": [
              635,
              647
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 20
              },
              "start": {
                "column": 12,
                "line": 20
              }
            }
          },
          "init": null,
          "range": [
            635,
            647
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 20
            },
            "start": {
              "column": 12,
              "line": 20
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        623,
        648
      ],
      "loc": {
        "end": {
          "column": 25,
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 21
                },
                "start": {
                  "column": 13,
                  "line": 21
                }
              },
              "range": [
                662,
                673
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    665,
                    673
                  ],
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        666,
                        672
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 21
                        },
                        "start": {
                          "column": 17,
                          "line": 21
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 21
                    },
                    "start": {
                      "column": 16,
                      "line": 21
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "range": [
                    664,
                    665
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 21
                    },
                    "start": {
                      "column": 15,
                      "line": 21
                    }
                  }
                },
                "range": [
                  664,
                  673
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 21
                  },
                  "start": {
                    "column": 15,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              661,
              673
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 21
              },
              "start": {
                "column": 12,
                "line": 21
              }
            }
          },
          "init": null,
          "range": [
            661,
            673
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 21
            },
            "start": {
              "column": 12,
              "line": 21
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        649,
        674
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
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
          "name": "a",
          "optional": false,
          "range": [
            675,
            676
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 22
            },
            "start": {
              "column": 0,
              "line": 22
            }
          }
        },
        "optional": false,
        "property": {
          "type": "PrivateIdentifier",
          "name": "foo",
          "range": [
            677,
            681
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 22
            },
            "start": {
              "column": 2,
              "line": 22
            }
          }
        },
        "range": [
          675,
          681
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 22
          },
          "start": {
            "column": 0,
            "line": 22
          }
        }
      },
      "range": [
        675,
        682
      ],
      "loc": {
        "end": {
          "column": 7,
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
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "range": [
            726,
            727
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
          "type": "PrivateIdentifier",
          "name": "method",
          "range": [
            728,
            735
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 23
            },
            "start": {
              "column": 2,
              "line": 23
            }
          }
        },
        "range": [
          726,
          735
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        726,
        736
      ],
      "loc": {
        "end": {
          "column": 10,
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
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "range": [
            777,
            778
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
          "type": "PrivateIdentifier",
          "name": "prop",
          "range": [
            779,
            784
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 24
            },
            "start": {
              "column": 2,
              "line": 24
            }
          }
        },
        "range": [
          777,
          784
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 24
          },
          "start": {
            "column": 0,
            "line": 24
          }
        }
      },
      "range": [
        777,
        785
      ],
      "loc": {
        "end": {
          "column": 8,
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
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "range": [
            828,
            829
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 25
            },
            "start": {
              "column": 0,
              "line": 25
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "range": [
            832,
            833
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 25
            },
            "start": {
              "column": 4,
              "line": 25
            }
          }
        },
        "range": [
          828,
          833
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 25
          },
          "start": {
            "column": 0,
            "line": 25
          }
        }
      },
      "range": [
        828,
        834
      ],
      "loc": {
        "end": {
          "column": 6,
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
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "range": [
            879,
            880
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
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "range": [
            883,
            884
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 26
            },
            "start": {
              "column": 4,
              "line": 26
            }
          }
        },
        "range": [
          879,
          884
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
      "range": [
        879,
        885
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 27
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
