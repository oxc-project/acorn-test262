__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    485
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Constructor",
        "optional": false,
        "range": [
          5,
          16
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "abstract": false,
        "params": [
          {
            "type": "RestElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "range": [
                29,
                33
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 1
                },
                "start": {
                  "column": 29,
                  "line": 1
                }
              }
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 40,
                  "line": 1
                },
                "start": {
                  "column": 33,
                  "line": 1
                }
              },
              "range": [
                33,
                40
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "range": [
                    35,
                    38
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 1
                    },
                    "start": {
                      "column": 35,
                      "line": 1
                    }
                  }
                },
                "range": [
                  35,
                  40
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 1
                  },
                  "start": {
                    "column": 35,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              26,
              40
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 1
              },
              "start": {
                "column": 26,
                "line": 1
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 46,
              "line": 1
            },
            "start": {
              "column": 42,
              "line": 1
            }
          },
          "range": [
            42,
            46
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                45,
                46
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 1
                },
                "start": {
                  "column": 45,
                  "line": 1
                }
              }
            },
            "range": [
              45,
              46
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 1
              },
              "start": {
                "column": 45,
                "line": 1
              }
            }
          }
        },
        "range": [
          22,
          46
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 1
          },
          "start": {
            "column": 22,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 19,
            "line": 1
          },
          "start": {
            "column": 16,
            "line": 1
          }
        },
        "range": [
          16,
          19
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
                17,
                18
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 1
                },
                "start": {
                  "column": 17,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              17,
              18
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 1
              },
              "start": {
                "column": 17,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        47
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
              "type": "ClassExpression",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  130,
                  237
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
                      "name": "_tag",
                      "optional": false,
                      "range": [
                        136,
                        140
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 4
                        },
                        "start": {
                          "column": 4,
                          "line": 4
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
                          "column": 16,
                          "line": 4
                        },
                        "start": {
                          "column": 8,
                          "line": 4
                        }
                      },
                      "range": [
                        140,
                        148
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          142,
                          148
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 4
                          },
                          "start": {
                            "column": 10,
                            "line": 4
                          }
                        }
                      }
                    },
                    "value": null,
                    "range": [
                      136,
                      149
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
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
                      "type": "Identifier",
                      "range": [
                        154,
                        165
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
                        165,
                        233
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
                                  "type": "SpreadElement",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "args",
                                    "optional": false,
                                    "range": [
                                      199,
                                      203
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
                                  "range": [
                                    196,
                                    203
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 6
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 6
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "Super",
                                "range": [
                                  190,
                                  195
                                ],
                                "loc": {
                                  "end": {
                                    "column": 11,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 6,
                                    "line": 6
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                190,
                                204
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 6
                                },
                                "start": {
                                  "column": 6,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              190,
                              205
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 6
                              },
                              "start": {
                                "column": 6,
                                "line": 6
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
                                    212,
                                    216
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 10,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 6,
                                      "line": 7
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_tag",
                                  "optional": false,
                                  "range": [
                                    217,
                                    221
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
                                },
                                "range": [
                                  212,
                                  221
                                ],
                                "loc": {
                                  "end": {
                                    "column": 15,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 6,
                                    "line": 7
                                  }
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "raw": "\"\"",
                                "value": "",
                                "range": [
                                  224,
                                  226
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 7
                                  }
                                }
                              },
                              "range": [
                                212,
                                226
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 7
                                },
                                "start": {
                                  "column": 6,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              212,
                              227
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 7
                              },
                              "start": {
                                "column": 6,
                                "line": 7
                              }
                            }
                          }
                        ],
                        "range": [
                          182,
                          233
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 8
                          },
                          "start": {
                            "column": 32,
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
                          "type": "RestElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "range": [
                              169,
                              173
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 5
                              },
                              "start": {
                                "column": 19,
                                "line": 5
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 5
                              },
                              "start": {
                                "column": 23,
                                "line": 5
                              }
                            },
                            "range": [
                              173,
                              180
                            ],
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSAnyKeyword",
                                "range": [
                                  175,
                                  178
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 5
                                  }
                                }
                              },
                              "range": [
                                175,
                                180
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 5
                                },
                                "start": {
                                  "column": 25,
                                  "line": 5
                                }
                              }
                            }
                          },
                          "range": [
                            166,
                            180
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 5
                            },
                            "start": {
                              "column": 16,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 8
                        },
                        "start": {
                          "column": 15,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      154,
                      233
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 8
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
                    "column": 3,
                    "line": 9
                  },
                  "start": {
                    "column": 28,
                    "line": 3
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "range": [
                  125,
                  129
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 3
                  },
                  "start": {
                    "column": 23,
                    "line": 3
                  }
                }
              },
              "range": [
                111,
                237
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 9
                },
                "start": {
                  "column": 9,
                  "line": 3
                }
              }
            },
            "range": [
              104,
              238
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 9
              },
              "start": {
                "column": 2,
                "line": 3
              }
            }
          }
        ],
        "range": [
          100,
          240
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 52,
            "line": 2
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tagged",
        "optional": false,
        "range": [
          57,
          63
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 2
          },
          "start": {
            "column": 9,
            "line": 2
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 50,
                "line": 2
              },
              "start": {
                "column": 47,
                "line": 2
              }
            },
            "range": [
              95,
              98
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  97,
                  98
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 2
                  },
                  "start": {
                    "column": 49,
                    "line": 2
                  }
                }
              },
              "range": [
                97,
                98
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 2
                },
                "start": {
                  "column": 49,
                  "line": 2
                }
              }
            }
          },
          "range": [
            91,
            98
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 2
            },
            "start": {
              "column": 43,
              "line": 2
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 42,
            "line": 2
          },
          "start": {
            "column": 15,
            "line": 2
          }
        },
        "range": [
          63,
          90
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  85,
                  89
                ],
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "range": [
                      86,
                      88
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 2
                      },
                      "start": {
                        "column": 38,
                        "line": 2
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 2
                  },
                  "start": {
                    "column": 37,
                    "line": 2
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Constructor",
                "optional": false,
                "range": [
                  74,
                  85
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 2
                  },
                  "start": {
                    "column": 26,
                    "line": 2
                  }
                }
              },
              "range": [
                74,
                89
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 2
                },
                "start": {
                  "column": 26,
                  "line": 2
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
                64,
                65
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 2
                },
                "start": {
                  "column": 16,
                  "line": 2
                }
              }
            },
            "out": false,
            "range": [
              64,
              89
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 2
              },
              "start": {
                "column": 16,
                "line": 2
              }
            }
          }
        ]
      },
      "range": [
        48,
        240
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
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
          250,
          295
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toString",
              "optional": false,
              "range": [
                254,
                262
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 13
                },
                "start": {
                  "column": 2,
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
                263,
                293
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"class A\"",
                      "value": "class A",
                      "range": [
                        279,
                        288
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 14
                        },
                        "start": {
                          "column": 11,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      272,
                      289
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 14
                      },
                      "start": {
                        "column": 4,
                        "line": 14
                      }
                    }
                  }
                ],
                "range": [
                  266,
                  293
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 15
                  },
                  "start": {
                    "column": 14,
                    "line": 13
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
                  "column": 3,
                  "line": 15
                },
                "start": {
                  "column": 11,
                  "line": 13
                }
              }
            },
            "range": [
              254,
              293
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 15
              },
              "start": {
                "column": 2,
                "line": 13
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
            "column": 8,
            "line": 12
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
          248,
          249
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 12
          },
          "start": {
            "column": 6,
            "line": 12
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        242,
        295
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          323,
          394
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toString",
              "optional": false,
              "range": [
                327,
                335
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 19
                },
                "start": {
                  "column": 2,
                  "line": 19
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
                336,
                392
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"class B\"",
                      "value": "class B",
                      "range": [
                        378,
                        387
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 20
                        },
                        "start": {
                          "column": 11,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      371,
                      388
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
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
                  339,
                  392
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 21
                  },
                  "start": {
                    "column": 14,
                    "line": 19
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
                  "column": 3,
                  "line": 21
                },
                "start": {
                  "column": 11,
                  "line": 19
                }
              }
            },
            "range": [
              327,
              392
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 21
              },
              "start": {
                "column": 2,
                "line": 19
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 26,
            "line": 18
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
          303,
          304
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 18
          },
          "start": {
            "column": 6,
            "line": 18
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "range": [
              320,
              321
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 18
              },
              "start": {
                "column": 23,
                "line": 18
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Tagged",
          "optional": false,
          "range": [
            313,
            319
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 18
            },
            "start": {
              "column": 16,
              "line": 18
            }
          }
        },
        "optional": false,
        "range": [
          313,
          322
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 18
          },
          "start": {
            "column": 16,
            "line": 18
          }
        }
      },
      "range": [
        297,
        394
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          414,
          485
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toString",
              "optional": false,
              "range": [
                418,
                426
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 25
                },
                "start": {
                  "column": 2,
                  "line": 25
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
                427,
                483
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "\"class C\"",
                      "value": "class C",
                      "range": [
                        469,
                        478
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 26
                        },
                        "start": {
                          "column": 11,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      462,
                      479
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 26
                      },
                      "start": {
                        "column": 4,
                        "line": 26
                      }
                    }
                  }
                ],
                "range": [
                  430,
                  483
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 27
                  },
                  "start": {
                    "column": 14,
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
                  "column": 3,
                  "line": 27
                },
                "start": {
                  "column": 11,
                  "line": 25
                }
              }
            },
            "range": [
              418,
              483
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 27
              },
              "start": {
                "column": 2,
                "line": 25
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 28
          },
          "start": {
            "column": 18,
            "line": 24
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
          402,
          403
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 24
          },
          "start": {
            "column": 6,
            "line": 24
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          412,
          413
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 24
          },
          "start": {
            "column": 16,
            "line": 24
          }
        }
      },
      "range": [
        396,
        485
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 28
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
