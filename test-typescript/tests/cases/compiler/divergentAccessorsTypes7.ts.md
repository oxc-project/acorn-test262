__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    619
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          14,
          497
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                20,
                31
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
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
                31,
                36
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  34,
                  36
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 2
                  },
                  "start": {
                    "column": 18,
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
                  "column": 20,
                  "line": 2
                },
                "start": {
                  "column": 15,
                  "line": 2
                }
              }
            },
            "range": [
              20,
              36
            ],
            "loc": {
              "end": {
                "column": 20,
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
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "range": [
                46,
                51
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
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                51,
                93
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  91,
                  93
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 4
                  },
                  "start": {
                    "column": 53,
                    "line": 4
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
                        "column": 51,
                        "line": 4
                      },
                      "start": {
                        "column": 19,
                        "line": 4
                      }
                    },
                    "range": [
                      57,
                      89
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            59,
                            65
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 4
                            },
                            "start": {
                              "column": 21,
                              "line": 4
                            }
                          }
                        },
                        {
                          "type": "TSFunctionType",
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "item",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 36,
                                    "line": 4
                                  }
                                },
                                "range": [
                                  74,
                                  77
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "S",
                                    "optional": false,
                                    "range": [
                                      76,
                                      77
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 39,
                                        "line": 4
                                      },
                                      "start": {
                                        "column": 38,
                                        "line": 4
                                      }
                                    }
                                  },
                                  "range": [
                                    76,
                                    77
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 39,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 38,
                                      "line": 4
                                    }
                                  }
                                }
                              },
                              "range": [
                                70,
                                77
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 4
                                },
                                "start": {
                                  "column": 32,
                                  "line": 4
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 4
                              },
                              "start": {
                                "column": 41,
                                "line": 4
                              }
                            },
                            "range": [
                              79,
                              88
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                82,
                                88
                              ],
                              "loc": {
                                "end": {
                                  "column": 50,
                                  "line": 4
                                },
                                "start": {
                                  "column": 44,
                                  "line": 4
                                }
                              }
                            }
                          },
                          "range": [
                            69,
                            88
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 4
                            },
                            "start": {
                              "column": 31,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "range": [
                        59,
                        89
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 4
                        },
                        "start": {
                          "column": 21,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    52,
                    89
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 4
                    },
                    "start": {
                      "column": 14,
                      "line": 4
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 4
                },
                "start": {
                  "column": 13,
                  "line": 4
                }
              }
            },
            "range": [
              42,
              93
            ],
            "loc": {
              "end": {
                "column": 55,
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
              "decorators": [],
              "name": "value",
              "optional": false,
              "range": [
                103,
                108
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 6
                },
                "start": {
                  "column": 8,
                  "line": 6
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
                108,
                148
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "TSNonNullExpression",
                      "expression": {
                        "type": "Literal",
                        "raw": "null",
                        "value": null,
                        "range": [
                          136,
                          140
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 7
                          },
                          "start": {
                            "column": 15,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        136,
                        141
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 7
                        },
                        "start": {
                          "column": 15,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      129,
                      142
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  119,
                  148
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 8
                  },
                  "start": {
                    "column": 24,
                    "line": 6
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
                    "column": 23,
                    "line": 6
                  },
                  "start": {
                    "column": 15,
                    "line": 6
                  }
                },
                "range": [
                  110,
                  118
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    112,
                    118
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 6
                    },
                    "start": {
                      "column": 17,
                      "line": 6
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 13,
                  "line": 6
                }
              }
            },
            "range": [
              99,
              148
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 14,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "range": [
          6,
          10
        ],
        "loc": {
          "end": {
            "column": 10,
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
            "column": 13,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        },
        "range": [
          10,
          13
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
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
            },
            "out": false,
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
        ]
      },
      "range": [
        0,
        497
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
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
            "range": [
              505,
              506
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 19
              },
              "start": {
                "column": 6,
                "line": 19
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Test",
              "optional": false,
              "range": [
                513,
                517
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 19
                },
                "start": {
                  "column": 14,
                  "line": 19
                }
              }
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                517,
                543
              ],
              "params": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "property",
                        "optional": false,
                        "range": [
                          524,
                          532
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 20
                          },
                          "start": {
                            "column": 4,
                            "line": 20
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
                            "column": 20,
                            "line": 20
                          },
                          "start": {
                            "column": 12,
                            "line": 20
                          }
                        },
                        "range": [
                          532,
                          540
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            534,
                            540
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 20
                            },
                            "start": {
                              "column": 14,
                              "line": 20
                            }
                          }
                        }
                      },
                      "range": [
                        524,
                        540
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
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
                    518,
                    542
                  ],
                  "loc": {
                    "end": {
                      "column": 1,
                      "line": 21
                    },
                    "start": {
                      "column": 19,
                      "line": 19
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 21
                },
                "start": {
                  "column": 18,
                  "line": 19
                }
              }
            },
            "range": [
              509,
              545
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 21
              },
              "start": {
                "column": 10,
                "line": 19
              }
            }
          },
          "range": [
            505,
            545
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 21
            },
            "start": {
              "column": 6,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        499,
        546
      ],
      "loc": {
        "end": {
          "column": 5,
          "line": 21
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
            "name": "a",
            "optional": false,
            "range": [
              548,
              549
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
            "name": "value",
            "optional": false,
            "range": [
              550,
              555
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 23
              },
              "start": {
                "column": 2,
                "line": 23
              }
            }
          },
          "range": [
            548,
            555
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 23
            },
            "start": {
              "column": 0,
              "line": 23
            }
          }
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "async": false,
          "body": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "item",
              "optional": false,
              "range": [
                568,
                572
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 23
                },
                "start": {
                  "column": 20,
                  "line": 23
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "property",
              "optional": false,
              "range": [
                573,
                581
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 23
                },
                "start": {
                  "column": 25,
                  "line": 23
                }
              }
            },
            "range": [
              568,
              581
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 23
              },
              "start": {
                "column": 20,
                "line": 23
              }
            }
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "item",
              "optional": false,
              "range": [
                559,
                563
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 23
                },
                "start": {
                  "column": 11,
                  "line": 23
                }
              }
            }
          ],
          "range": [
            558,
            581
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 23
            },
            "start": {
              "column": 10,
              "line": 23
            }
          }
        },
        "range": [
          548,
          581
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        548,
        581
      ],
      "loc": {
        "end": {
          "column": 33,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              582,
              583
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
            "type": "Literal",
            "raw": "'value'",
            "value": "value",
            "range": [
              584,
              591
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 24
              },
              "start": {
                "column": 2,
                "line": 24
              }
            }
          },
          "range": [
            582,
            592
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 24
            },
            "start": {
              "column": 0,
              "line": 24
            }
          }
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "async": false,
          "body": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "item",
              "optional": false,
              "range": [
                605,
                609
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 24
                },
                "start": {
                  "column": 23,
                  "line": 24
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "property",
              "optional": false,
              "range": [
                610,
                618
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 24
                },
                "start": {
                  "column": 28,
                  "line": 24
                }
              }
            },
            "range": [
              605,
              618
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 24
              },
              "start": {
                "column": 23,
                "line": 24
              }
            }
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "item",
              "optional": false,
              "range": [
                596,
                600
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 24
                },
                "start": {
                  "column": 14,
                  "line": 24
                }
              }
            }
          ],
          "range": [
            595,
            618
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 24
            },
            "start": {
              "column": 13,
              "line": 24
            }
          }
        },
        "range": [
          582,
          618
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 24
          },
          "start": {
            "column": 0,
            "line": 24
          }
        }
      },
      "range": [
        582,
        618
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 24
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
      "column": 0,
      "line": 25
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
