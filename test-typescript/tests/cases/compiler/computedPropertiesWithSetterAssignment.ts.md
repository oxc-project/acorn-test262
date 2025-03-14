__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    300
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
            "name": "k",
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
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "range": [
                10,
                16
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 1
                },
                "start": {
                  "column": 10,
                  "line": 1
                }
              }
            },
            "optional": false,
            "range": [
              10,
              18
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 1
              },
              "start": {
                "column": 10,
                "line": 1
              }
            }
          },
          "range": [
            6,
            18
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 1
            },
            "start": {
              "column": 6,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        0,
        19
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          38,
          54
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "range": [
                44,
                45
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "initializer": {
              "type": "Literal",
              "raw": "'k'",
              "value": "k",
              "range": [
                48,
                51
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 4
                },
                "start": {
                  "column": 8,
                  "line": 4
                }
              }
            },
            "range": [
              44,
              51
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 17,
            "line": 3
          }
        }
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "range": [
          32,
          37
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 3
          },
          "start": {
            "column": 11,
            "line": 3
          }
        }
      },
      "range": [
        21,
        54
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          70,
          194
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "range": [
                80,
                81
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 8
                },
                "start": {
                  "column": 8,
                  "line": 8
                }
              }
            },
            "kind": "get",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 8
                }
              },
              "range": [
                83,
                96
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    88,
                    96
                  ],
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        89,
                        95
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 8
                        },
                        "start": {
                          "column": 17,
                          "line": 8
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 8
                    },
                    "start": {
                      "column": 16,
                      "line": 8
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "range": [
                    85,
                    88
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
                "range": [
                  85,
                  96
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 8
                  },
                  "start": {
                    "column": 13,
                    "line": 8
                  }
                }
              }
            },
            "static": false,
            "range": [
              76,
              97
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "range": [
                106,
                107
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 9
                },
                "start": {
                  "column": 8,
                  "line": 9
                }
              }
            },
            "kind": "set",
            "optional": false,
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
                      "column": 29,
                      "line": 9
                    },
                    "start": {
                      "column": 11,
                      "line": 9
                    }
                  },
                  "range": [
                    109,
                    127
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        119,
                        127
                      ],
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            120,
                            126
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 9
                            },
                            "start": {
                              "column": 22,
                              "line": 9
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 9
                        },
                        "start": {
                          "column": 21,
                          "line": 9
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Iterable",
                      "optional": false,
                      "range": [
                        111,
                        119
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 9
                        },
                        "start": {
                          "column": 13,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      111,
                      127
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 9
                      },
                      "start": {
                        "column": 13,
                        "line": 9
                      }
                    }
                  }
                },
                "range": [
                  108,
                  127
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 9
                  },
                  "start": {
                    "column": 10,
                    "line": 9
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "range": [
              102,
              129
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "range": [
                140,
                141
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 11
                },
                "start": {
                  "column": 9,
                  "line": 11
                }
              }
            },
            "kind": "get",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 11
                },
                "start": {
                  "column": 13,
                  "line": 11
                }
              },
              "range": [
                144,
                157
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    149,
                    157
                  ],
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        150,
                        156
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
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
                      "column": 26,
                      "line": 11
                    },
                    "start": {
                      "column": 18,
                      "line": 11
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "range": [
                    146,
                    149
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
                "range": [
                  146,
                  157
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 11
                  },
                  "start": {
                    "column": 15,
                    "line": 11
                  }
                }
              }
            },
            "static": false,
            "range": [
              135,
              158
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "range": [
                168,
                169
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
            "kind": "set",
            "optional": false,
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
                      "column": 31,
                      "line": 12
                    },
                    "start": {
                      "column": 13,
                      "line": 12
                    }
                  },
                  "range": [
                    172,
                    190
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        182,
                        190
                      ],
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            183,
                            189
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 12
                            },
                            "start": {
                              "column": 24,
                              "line": 12
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 12
                        },
                        "start": {
                          "column": 23,
                          "line": 12
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Iterable",
                      "optional": false,
                      "range": [
                        174,
                        182
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 12
                        },
                        "start": {
                          "column": 15,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      174,
                      190
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 12
                      },
                      "start": {
                        "column": 15,
                        "line": 12
                      }
                    }
                  }
                },
                "range": [
                  171,
                  190
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 12
                  },
                  "start": {
                    "column": 12,
                    "line": 12
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "range": [
              163,
              192
            ],
            "loc": {
              "end": {
                "column": 33,
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
            "column": 14,
            "line": 7
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          66,
          69
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 7
          },
          "start": {
            "column": 10,
            "line": 7
          }
        }
      },
      "range": [
        56,
        194
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 15
                },
                "start": {
                  "column": 17,
                  "line": 15
                }
              },
              "range": [
                213,
                218
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "range": [
                    215,
                    218
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 15
                    },
                    "start": {
                      "column": 19,
                      "line": 15
                    }
                  }
                },
                "range": [
                  215,
                  218
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 15
                  },
                  "start": {
                    "column": 19,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              210,
              218
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 15
              },
              "start": {
                "column": 14,
                "line": 15
              }
            }
          },
          "init": null,
          "range": [
            210,
            218
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 15
            },
            "start": {
              "column": 14,
              "line": 15
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        196,
        219
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
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
            "name": "foo",
            "optional": false,
            "range": [
              221,
              224
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 17
              },
              "start": {
                "column": 0,
                "line": 17
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "range": [
              225,
              226
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
          "range": [
            221,
            226
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 17
            },
            "start": {
              "column": 0,
              "line": 17
            }
          }
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "raw": "'foo'",
              "value": "foo",
              "range": [
                230,
                235
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 17
                },
                "start": {
                  "column": 9,
                  "line": 17
                }
              }
            }
          ],
          "range": [
            229,
            236
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
          221,
          236
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 17
          },
          "start": {
            "column": 0,
            "line": 17
          }
        }
      },
      "range": [
        221,
        237
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
            "name": "foo",
            "optional": false,
            "range": [
              238,
              241
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 18
              },
              "start": {
                "column": 0,
                "line": 18
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "'k'",
            "value": "k",
            "range": [
              242,
              245
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "range": [
            238,
            246
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 18
            },
            "start": {
              "column": 0,
              "line": 18
            }
          }
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "raw": "'foo'",
              "value": "foo",
              "range": [
                250,
                255
              ],
              "loc": {
                "end": {
                  "column": 17,
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
            249,
            256
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 18
            },
            "start": {
              "column": 11,
              "line": 18
            }
          }
        },
        "range": [
          238,
          256
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 18
          },
          "start": {
            "column": 0,
            "line": 18
          }
        }
      },
      "range": [
        238,
        257
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
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
            "name": "foo",
            "optional": false,
            "range": [
              258,
              261
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 19
              },
              "start": {
                "column": 0,
                "line": 19
              }
            }
          },
          "optional": false,
          "property": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Props",
              "optional": false,
              "range": [
                262,
                267
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 19
                },
                "start": {
                  "column": 4,
                  "line": 19
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "range": [
                268,
                269
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
            "range": [
              262,
              269
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          "range": [
            258,
            270
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 19
            },
            "start": {
              "column": 0,
              "line": 19
            }
          }
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "raw": "'foo'",
              "value": "foo",
              "range": [
                274,
                279
              ],
              "loc": {
                "end": {
                  "column": 21,
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
            273,
            280
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 19
            },
            "start": {
              "column": 15,
              "line": 19
            }
          }
        },
        "range": [
          258,
          280
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 19
          },
          "start": {
            "column": 0,
            "line": 19
          }
        }
      },
      "range": [
        258,
        281
      ],
      "loc": {
        "end": {
          "column": 23,
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
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              282,
              285
            ],
            "loc": {
              "end": {
                "column": 3,
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
            "name": "k",
            "optional": false,
            "range": [
              286,
              287
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          "range": [
            282,
            288
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 20
            },
            "start": {
              "column": 0,
              "line": 20
            }
          }
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "raw": "'foo'",
              "value": "foo",
              "range": [
                292,
                297
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 20
                },
                "start": {
                  "column": 10,
                  "line": 20
                }
              }
            }
          ],
          "range": [
            291,
            298
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 20
            },
            "start": {
              "column": 9,
              "line": 20
            }
          }
        },
        "range": [
          282,
          298
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        282,
        299
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 21
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
