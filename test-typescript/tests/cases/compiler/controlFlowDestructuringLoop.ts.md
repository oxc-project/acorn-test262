__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    22,
    466
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          39,
          55
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "val",
              "optional": false,
              "range": [
                41,
                44
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 3
                },
                "start": {
                  "column": 19,
                  "line": 3
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
                  "column": 30,
                  "line": 3
                },
                "start": {
                  "column": 22,
                  "line": 3
                }
              },
              "range": [
                44,
                52
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  46,
                  52
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 3
                  },
                  "start": {
                    "column": 24,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              41,
              53
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 3
              },
              "start": {
                "column": 19,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 3
          },
          "start": {
            "column": 17,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumVal",
        "optional": false,
        "range": [
          32,
          38
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "range": [
        22,
        55
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 3
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
          73,
          89
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "val",
              "optional": false,
              "range": [
                75,
                78
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 4
                },
                "start": {
                  "column": 19,
                  "line": 4
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
                  "column": 30,
                  "line": 4
                },
                "start": {
                  "column": 22,
                  "line": 4
                }
              },
              "range": [
                78,
                86
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  80,
                  86
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 4
                  },
                  "start": {
                    "column": 24,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              75,
              87
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 4
              },
              "start": {
                "column": 19,
                "line": 4
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 4
          },
          "start": {
            "column": 17,
            "line": 4
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StrVal",
        "optional": false,
        "range": [
          66,
          72
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
      },
      "range": [
        56,
        89
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Val",
        "optional": false,
        "range": [
          95,
          98
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "NumVal",
              "optional": false,
              "range": [
                101,
                107
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              }
            },
            "range": [
              101,
              107
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 5
              },
              "start": {
                "column": 11,
                "line": 5
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "StrVal",
              "optional": false,
              "range": [
                110,
                116
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 5
                },
                "start": {
                  "column": 20,
                  "line": 5
                }
              }
            },
            "range": [
              110,
              116
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 5
              },
              "start": {
                "column": 20,
                "line": 5
              }
            }
          }
        ],
        "range": [
          101,
          116
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 5
          },
          "start": {
            "column": 11,
            "line": 5
          }
        }
      },
      "range": [
        90,
        117
      ],
      "loc": {
        "end": {
          "column": 27,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      178,
                      179
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 8
                      },
                      "start": {
                        "column": 18,
                        "line": 8
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "val",
                    "optional": false,
                    "range": [
                      180,
                      183
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 8
                      },
                      "start": {
                        "column": 20,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    178,
                    183
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 8
                    },
                    "start": {
                      "column": 18,
                      "line": 8
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  171,
                  183
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 8
                  },
                  "start": {
                    "column": 11,
                    "line": 8
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "'number'",
                "value": "number",
                "range": [
                  188,
                  196
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 8
                  },
                  "start": {
                    "column": 28,
                    "line": 8
                  }
                }
              },
              "range": [
                171,
                196
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 8
                }
              }
            },
            "range": [
              164,
              197
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "range": [
          158,
          199
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 39,
            "line": 7
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNumVal",
        "optional": false,
        "range": [
          128,
          136
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 7
          },
          "start": {
            "column": 9,
            "line": 7
          }
        }
      },
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
                "column": 24,
                "line": 7
              },
              "start": {
                "column": 19,
                "line": 7
              }
            },
            "range": [
              138,
              143
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Val",
                "optional": false,
                "range": [
                  140,
                  143
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 7
                  },
                  "start": {
                    "column": 21,
                    "line": 7
                  }
                }
              },
              "range": [
                140,
                143
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 7
                },
                "start": {
                  "column": 21,
                  "line": 7
                }
              }
            }
          },
          "range": [
            137,
            143
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 7
            },
            "start": {
              "column": 18,
              "line": 7
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 38,
            "line": 7
          },
          "start": {
            "column": 25,
            "line": 7
          }
        },
        "range": [
          144,
          157
        ],
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              146,
              147
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 7
              },
              "start": {
                "column": 27,
                "line": 7
              }
            }
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 38,
                "line": 7
              },
              "start": {
                "column": 32,
                "line": 7
              }
            },
            "range": [
              151,
              157
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumVal",
                "optional": false,
                "range": [
                  151,
                  157
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 7
                  },
                  "start": {
                    "column": 32,
                    "line": 7
                  }
                }
              },
              "range": [
                151,
                157
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 7
                },
                "start": {
                  "column": 32,
                  "line": 7
                }
              }
            }
          },
          "range": [
            146,
            157
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 7
            },
            "start": {
              "column": 27,
              "line": 7
            }
          }
        }
      },
      "range": [
        119,
        199
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 7
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
            "type": "ForOfStatement",
            "await": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "definite": false,
                            "id": {
                              "type": "ObjectPattern",
                              "decorators": [],
                              "optional": false,
                              "properties": [
                                {
                                  "type": "Property",
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "val",
                                    "optional": false,
                                    "range": [
                                      410,
                                      413
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 23,
                                        "line": 18
                                      },
                                      "start": {
                                        "column": 20,
                                        "line": 18
                                      }
                                    }
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": true,
                                  "value": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "val",
                                    "optional": false,
                                    "range": [
                                      410,
                                      413
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 23,
                                        "line": 18
                                      },
                                      "start": {
                                        "column": 20,
                                        "line": 18
                                      }
                                    }
                                  },
                                  "range": [
                                    410,
                                    413
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 18
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 18
                                    }
                                  }
                                }
                              ],
                              "range": [
                                408,
                                415
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 18
                                },
                                "start": {
                                  "column": 18,
                                  "line": 18
                                }
                              }
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "thing",
                              "optional": false,
                              "range": [
                                418,
                                423
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 18
                                },
                                "start": {
                                  "column": 28,
                                  "line": 18
                                }
                              }
                            },
                            "range": [
                              408,
                              423
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 18
                              },
                              "start": {
                                "column": 18,
                                "line": 18
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "const",
                        "range": [
                          402,
                          424
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 18
                          },
                          "start": {
                            "column": 12,
                            "line": 18
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
                            "name": "val",
                            "optional": false,
                            "range": [
                              437,
                              440
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
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "range": [
                              441,
                              447
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 19
                              },
                              "start": {
                                "column": 16,
                                "line": 19
                              }
                            }
                          },
                          "range": [
                            437,
                            447
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 19
                            },
                            "start": {
                              "column": 12,
                              "line": 19
                            }
                          }
                        },
                        "range": [
                          437,
                          448
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 19
                          },
                          "start": {
                            "column": 12,
                            "line": 19
                          }
                        }
                      }
                    ],
                    "range": [
                      388,
                      458
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 20
                      },
                      "start": {
                        "column": 13,
                        "line": 17
                      }
                    }
                  },
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
                              "type": "ObjectPattern",
                              "decorators": [],
                              "optional": false,
                              "properties": [
                                {
                                  "type": "Property",
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "val",
                                    "optional": false,
                                    "range": [
                                      322,
                                      325
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 23,
                                        "line": 14
                                      },
                                      "start": {
                                        "column": 20,
                                        "line": 14
                                      }
                                    }
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": true,
                                  "value": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "val",
                                    "optional": false,
                                    "range": [
                                      322,
                                      325
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 23,
                                        "line": 14
                                      },
                                      "start": {
                                        "column": 20,
                                        "line": 14
                                      }
                                    }
                                  },
                                  "range": [
                                    322,
                                    325
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 14
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 14
                                    }
                                  }
                                }
                              ],
                              "range": [
                                320,
                                327
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 14
                                },
                                "start": {
                                  "column": 18,
                                  "line": 14
                                }
                              }
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "thing",
                              "optional": false,
                              "range": [
                                330,
                                335
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 14
                                },
                                "start": {
                                  "column": 28,
                                  "line": 14
                                }
                              }
                            },
                            "range": [
                              320,
                              335
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 14
                              },
                              "start": {
                                "column": 18,
                                "line": 14
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "const",
                        "range": [
                          314,
                          336
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 14
                          },
                          "start": {
                            "column": 12,
                            "line": 14
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Literal",
                              "raw": "2",
                              "value": 2,
                              "range": [
                                361,
                                362
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 15
                                },
                                "start": {
                                  "column": 24,
                                  "line": 15
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
                              "name": "val",
                              "optional": false,
                              "range": [
                                349,
                                352
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 15
                                },
                                "start": {
                                  "column": 12,
                                  "line": 15
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toFixed",
                              "optional": false,
                              "range": [
                                353,
                                360
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 15
                                },
                                "start": {
                                  "column": 16,
                                  "line": 15
                                }
                              }
                            },
                            "range": [
                              349,
                              360
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 15
                              },
                              "start": {
                                "column": 12,
                                "line": 15
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            349,
                            363
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 15
                            },
                            "start": {
                              "column": 12,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          349,
                          364
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 15
                          },
                          "start": {
                            "column": 12,
                            "line": 15
                          }
                        }
                      }
                    ],
                    "range": [
                      300,
                      374
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 16
                      },
                      "start": {
                        "column": 29,
                        "line": 13
                      }
                    }
                  },
                  "test": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "range": [
                          292,
                          297
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 13
                          },
                          "start": {
                            "column": 21,
                            "line": 13
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isNumVal",
                      "optional": false,
                      "range": [
                        283,
                        291
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 13
                        },
                        "start": {
                          "column": 12,
                          "line": 13
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      283,
                      298
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 13
                      },
                      "start": {
                        "column": 12,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    279,
                    458
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 20
                    },
                    "start": {
                      "column": 8,
                      "line": 13
                    }
                  }
                }
              ],
              "range": [
                269,
                464
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 21
                },
                "start": {
                  "column": 32,
                  "line": 12
                }
              }
            },
            "left": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "thing",
                    "optional": false,
                    "range": [
                      252,
                      257
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 12
                      },
                      "start": {
                        "column": 15,
                        "line": 12
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    252,
                    257
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 12
                    },
                    "start": {
                      "column": 15,
                      "line": 12
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                246,
                257
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 12
                },
                "start": {
                  "column": 9,
                  "line": 12
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "things",
              "optional": false,
              "range": [
                261,
                267
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
            },
            "range": [
              241,
              464
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "range": [
          235,
          466
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 34,
            "line": 11
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          210,
          213
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 11
          },
          "start": {
            "column": 9,
            "line": 11
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "things",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 26,
                "line": 11
              },
              "start": {
                "column": 19,
                "line": 11
              }
            },
            "range": [
              220,
              227
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Val",
                  "optional": false,
                  "range": [
                    222,
                    225
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 11
                    },
                    "start": {
                      "column": 21,
                      "line": 11
                    }
                  }
                },
                "range": [
                  222,
                  225
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 11
                  },
                  "start": {
                    "column": 21,
                    "line": 11
                  }
                }
              },
              "range": [
                222,
                227
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 11
                },
                "start": {
                  "column": 21,
                  "line": 11
                }
              }
            }
          },
          "range": [
            214,
            227
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 11
            },
            "start": {
              "column": 13,
              "line": 11
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 33,
            "line": 11
          },
          "start": {
            "column": 27,
            "line": 11
          }
        },
        "range": [
          228,
          234
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            230,
            234
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 11
            },
            "start": {
              "column": 29,
              "line": 11
            }
          }
        }
      },
      "range": [
        201,
        466
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 22
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
