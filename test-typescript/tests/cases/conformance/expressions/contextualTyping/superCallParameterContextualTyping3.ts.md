__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    1,
    566
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          29,
          64
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "range": [
                35,
                41
              ],
              "loc": {
                "end": {
                  "column": 10,
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
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "parameter",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 2
                    },
                    "start": {
                      "column": 20,
                      "line": 2
                    }
                  },
                  "range": [
                    51,
                    54
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        53,
                        54
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
                    "range": [
                      53,
                      54
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
                  }
                },
                "range": [
                  42,
                  54
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 2
                  },
                  "start": {
                    "column": 11,
                    "line": 2
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 2
                },
                "start": {
                  "column": 24,
                  "line": 2
                }
              },
              "range": [
                55,
                61
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  57,
                  61
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 2
                  },
                  "start": {
                    "column": 26,
                    "line": 2
                  }
                }
              }
            },
            "static": false,
            "range": [
              35,
              62
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 2
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
            "line": 3
          },
          "start": {
            "column": 29,
            "line": 1
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ContextualType",
        "optional": false,
        "range": [
          11,
          25
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 1
          },
          "start": {
            "column": 11,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 28,
            "line": 1
          },
          "start": {
            "column": 25,
            "line": 1
          }
        },
        "range": [
          25,
          28
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
                26,
                27
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 1
                },
                "start": {
                  "column": 26,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              26,
              27
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 1
              },
              "start": {
                "column": 26,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        1,
        64
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
        },
        "start": {
          "column": 1,
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
          82,
          178
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                88,
                99
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
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
                99,
                133
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  126,
                  133
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 7
                  },
                  "start": {
                    "column": 42,
                    "line": 6
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
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 6
                      },
                      "start": {
                        "column": 21,
                        "line": 6
                      }
                    },
                    "range": [
                      105,
                      124
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          121,
                          124
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
                                122,
                                123
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 6
                                },
                                "start": {
                                  "column": 38,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              122,
                              123
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 6
                              },
                              "start": {
                                "column": 38,
                                "line": 6
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 6
                          },
                          "start": {
                            "column": 37,
                            "line": 6
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ContextualType",
                        "optional": false,
                        "range": [
                          107,
                          121
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 6
                          },
                          "start": {
                            "column": 23,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        107,
                        124
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 6
                        },
                        "start": {
                          "column": 23,
                          "line": 6
                        }
                      }
                    }
                  },
                  "range": [
                    100,
                    124
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 6
                    },
                    "start": {
                      "column": 16,
                      "line": 6
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 7
                },
                "start": {
                  "column": 15,
                  "line": 6
                }
              }
            },
            "range": [
              88,
              133
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 6
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
              "name": "foo",
              "optional": false,
              "range": [
                139,
                142
              ],
              "loc": {
                "end": {
                  "column": 7,
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
                142,
                176
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  169,
                  176
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 10
                  },
                  "start": {
                    "column": 34,
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
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 9
                      },
                      "start": {
                        "column": 13,
                        "line": 9
                      }
                    },
                    "range": [
                      148,
                      167
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          164,
                          167
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
                                165,
                                166
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 9
                                },
                                "start": {
                                  "column": 30,
                                  "line": 9
                                }
                              }
                            },
                            "range": [
                              165,
                              166
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 9
                              },
                              "start": {
                                "column": 30,
                                "line": 9
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 9
                          },
                          "start": {
                            "column": 29,
                            "line": 9
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ContextualType",
                        "optional": false,
                        "range": [
                          150,
                          164
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 9
                          },
                          "start": {
                            "column": 15,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        150,
                        167
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 9
                        },
                        "start": {
                          "column": 15,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    143,
                    167
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 9
                    },
                    "start": {
                      "column": 8,
                      "line": 9
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 10
                },
                "start": {
                  "column": 7,
                  "line": 9
                }
              }
            },
            "range": [
              139,
              176
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 16,
            "line": 5
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CBase",
        "optional": false,
        "range": [
          72,
          77
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 5
          },
          "start": {
            "column": 6,
            "line": 5
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 5
          },
          "start": {
            "column": 11,
            "line": 5
          }
        },
        "range": [
          77,
          80
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
                78,
                79
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 5
                },
                "start": {
                  "column": 12,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              78,
              79
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 5
              },
              "start": {
                "column": 12,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        66,
        178
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          210,
          566
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                216,
                227
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
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
                227,
                564
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
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "method",
                                "optional": false,
                                "range": [
                                  329,
                                  335
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 18
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
                                  335,
                                  380
                                ],
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
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
                                            357,
                                            358
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 17,
                                              "line": 19
                                            },
                                            "start": {
                                              "column": 16,
                                              "line": 19
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
                                            359,
                                            365
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 24,
                                              "line": 19
                                            },
                                            "start": {
                                              "column": 18,
                                              "line": 19
                                            }
                                          }
                                        },
                                        "range": [
                                          357,
                                          365
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 24,
                                            "line": 19
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 19
                                          }
                                        }
                                      },
                                      "range": [
                                        357,
                                        366
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 25,
                                          "line": 19
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 19
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    339,
                                    380
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 20
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 18
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
                                    "name": "p",
                                    "optional": false,
                                    "range": [
                                      336,
                                      337
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 20,
                                        "line": 18
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 18
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 18
                                  }
                                }
                              },
                              "range": [
                                329,
                                380
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 20
                                },
                                "start": {
                                  "column": 12,
                                  "line": 18
                                }
                              }
                            }
                          ],
                          "range": [
                            315,
                            390
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 21
                            },
                            "start": {
                              "column": 14,
                              "line": 17
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "range": [
                          309,
                          314
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 17
                          },
                          "start": {
                            "column": 8,
                            "line": 17
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        309,
                        391
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 21
                        },
                        "start": {
                          "column": 8,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      309,
                      392
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 21
                      },
                      "start": {
                        "column": 8,
                        "line": 17
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "method",
                                "optional": false,
                                "range": [
                                  495,
                                  501
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 26
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 26
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
                                  501,
                                  546
                                ],
                                "async": false,
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
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
                                            523,
                                            524
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 17,
                                              "line": 27
                                            },
                                            "start": {
                                              "column": 16,
                                              "line": 27
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
                                            525,
                                            531
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 24,
                                              "line": 27
                                            },
                                            "start": {
                                              "column": 18,
                                              "line": 27
                                            }
                                          }
                                        },
                                        "range": [
                                          523,
                                          531
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 24,
                                            "line": 27
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 27
                                          }
                                        }
                                      },
                                      "range": [
                                        523,
                                        532
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 25,
                                          "line": 27
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 27
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    505,
                                    546
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 28
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 26
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
                                    "name": "p",
                                    "optional": false,
                                    "range": [
                                      502,
                                      503
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 20,
                                        "line": 26
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 26
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 28
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 26
                                  }
                                }
                              },
                              "range": [
                                495,
                                546
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 28
                                },
                                "start": {
                                  "column": 12,
                                  "line": 26
                                }
                              }
                            }
                          ],
                          "range": [
                            481,
                            556
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 29
                            },
                            "start": {
                              "column": 18,
                              "line": 25
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "range": [
                            471,
                            476
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 25
                            },
                            "start": {
                              "column": 8,
                              "line": 25
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
                            477,
                            480
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 25
                            },
                            "start": {
                              "column": 14,
                              "line": 25
                            }
                          }
                        },
                        "range": [
                          471,
                          480
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 25
                          },
                          "start": {
                            "column": 8,
                            "line": 25
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        471,
                        557
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 29
                        },
                        "start": {
                          "column": 8,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      471,
                      558
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 29
                      },
                      "start": {
                        "column": 8,
                        "line": 25
                      }
                    }
                  }
                ],
                "range": [
                  230,
                  564
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 30
                  },
                  "start": {
                    "column": 18,
                    "line": 14
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
                  "column": 15,
                  "line": 14
                }
              }
            },
            "range": [
              216,
              564
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 30
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
            "line": 31
          },
          "start": {
            "column": 30,
            "line": 13
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
          186,
          187
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 13
          },
          "start": {
            "column": 6,
            "line": 13
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "CBase",
        "optional": false,
        "range": [
          196,
          201
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 13
          },
          "start": {
            "column": 16,
            "line": 13
          }
        }
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "range": [
          201,
          209
        ],
        "params": [
          {
            "type": "TSStringKeyword",
            "range": [
              202,
              208
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 13
              },
              "start": {
                "column": 22,
                "line": 13
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 13
          },
          "start": {
            "column": 21,
            "line": 13
          }
        }
      },
      "range": [
        180,
        566
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 31
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
      "line": 31
    },
    "start": {
      "column": 1,
      "line": 1
    }
  },
  "hashbang": null
}
```
