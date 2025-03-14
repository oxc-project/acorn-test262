__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    45,
    592
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          57,
          59
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 14,
            "line": 5
          },
          "start": {
            "column": 12,
            "line": 5
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          55,
          56
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 5
          },
          "start": {
            "column": 10,
            "line": 5
          }
        }
      },
      "range": [
        45,
        59
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          72,
          74
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 14,
            "line": 6
          },
          "start": {
            "column": 12,
            "line": 6
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          70,
          71
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 6
          },
          "start": {
            "column": 10,
            "line": 6
          }
        }
      },
      "range": [
        60,
        74
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
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
            "name": "opts",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 51,
                  "line": 10
                },
                "start": {
                  "column": 16,
                  "line": 8
                }
              },
              "range": [
                92,
                201
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "objectRef",
                          "optional": false,
                          "range": [
                            101,
                            110
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 9
                            },
                            "start": {
                              "column": 7,
                              "line": 9
                            }
                          }
                        },
                        "optional": true,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 9
                            },
                            "start": {
                              "column": 17,
                              "line": 9
                            }
                          },
                          "range": [
                            111,
                            122
                          ],
                          "typeAnnotation": {
                            "type": "TSUndefinedKeyword",
                            "range": [
                              113,
                              122
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 9
                              },
                              "start": {
                                "column": 19,
                                "line": 9
                              }
                            }
                          }
                        },
                        "range": [
                          101,
                          123
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 9
                          },
                          "start": {
                            "column": 7,
                            "line": 9
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getObjectRef",
                          "optional": false,
                          "range": [
                            124,
                            136
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 9
                            },
                            "start": {
                              "column": 30,
                              "line": 9
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
                              "column": 53,
                              "line": 9
                            },
                            "start": {
                              "column": 42,
                              "line": 9
                            }
                          },
                          "range": [
                            136,
                            147
                          ],
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 53,
                                  "line": 9
                                },
                                "start": {
                                  "column": 47,
                                  "line": 9
                                }
                              },
                              "range": [
                                141,
                                147
                              ],
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "range": [
                                  144,
                                  147
                                ],
                                "loc": {
                                  "end": {
                                    "column": 53,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 50,
                                    "line": 9
                                  }
                                }
                              }
                            },
                            "range": [
                              138,
                              147
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 9
                              },
                              "start": {
                                "column": 44,
                                "line": 9
                              }
                            }
                          }
                        },
                        "range": [
                          124,
                          147
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 9
                          },
                          "start": {
                            "column": 30,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "range": [
                      99,
                      149
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 9
                      },
                      "start": {
                        "column": 5,
                        "line": 9
                      }
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "objectRef",
                          "optional": false,
                          "range": [
                            157,
                            166
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 10
                            },
                            "start": {
                              "column": 7,
                              "line": 10
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
                              "column": 23,
                              "line": 10
                            },
                            "start": {
                              "column": 16,
                              "line": 10
                            }
                          },
                          "range": [
                            166,
                            173
                          ],
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "range": [
                                    168,
                                    169
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 10
                                    }
                                  }
                                },
                                "range": [
                                  168,
                                  169
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 10
                                  }
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "range": [
                                    172,
                                    173
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 10
                                    }
                                  }
                                },
                                "range": [
                                  172,
                                  173
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
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
                              168,
                              173
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 10
                              },
                              "start": {
                                "column": 18,
                                "line": 10
                              }
                            }
                          }
                        },
                        "range": [
                          157,
                          174
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 10
                          },
                          "start": {
                            "column": 7,
                            "line": 10
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getObjectRef",
                          "optional": false,
                          "range": [
                            175,
                            187
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 10
                            },
                            "start": {
                              "column": 25,
                              "line": 10
                            }
                          }
                        },
                        "optional": true,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 10
                            },
                            "start": {
                              "column": 38,
                              "line": 10
                            }
                          },
                          "range": [
                            188,
                            199
                          ],
                          "typeAnnotation": {
                            "type": "TSUndefinedKeyword",
                            "range": [
                              190,
                              199
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 10
                              },
                              "start": {
                                "column": 40,
                                "line": 10
                              }
                            }
                          }
                        },
                        "range": [
                          175,
                          199
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 10
                          },
                          "start": {
                            "column": 25,
                            "line": 10
                          }
                        }
                      }
                    ],
                    "range": [
                      155,
                      201
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 10
                      },
                      "start": {
                        "column": 5,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  97,
                  201
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 10
                  },
                  "start": {
                    "column": 3,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              88,
              201
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 10
              },
              "start": {
                "column": 12,
                "line": 8
              }
            }
          },
          "init": null,
          "range": [
            88,
            201
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 10
            },
            "start": {
              "column": 12,
              "line": 8
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        76,
        202
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "operator": "||",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "opts",
            "optional": false,
            "range": [
              204,
              208
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 12
              },
              "start": {
                "column": 0,
                "line": 12
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "objectRef",
            "optional": false,
            "range": [
              209,
              218
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 12
              },
              "start": {
                "column": 5,
                "line": 12
              }
            }
          },
          "range": [
            204,
            218
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 12
            },
            "start": {
              "column": 0,
              "line": 12
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
              "name": "opts",
              "optional": false,
              "range": [
                222,
                226
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 12
                },
                "start": {
                  "column": 18,
                  "line": 12
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "getObjectRef",
              "optional": false,
              "range": [
                227,
                239
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 12
                },
                "start": {
                  "column": 23,
                  "line": 12
                }
              }
            },
            "range": [
              222,
              239
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 12
              },
              "start": {
                "column": 18,
                "line": 12
              }
            }
          },
          "optional": false,
          "range": [
            222,
            241
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 12
            },
            "start": {
              "column": 18,
              "line": 12
            }
          }
        },
        "range": [
          204,
          241
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        204,
        242
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          297,
          317
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
                303,
                306
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 17
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
                  "column": 15,
                  "line": 17
                },
                "start": {
                  "column": 7,
                  "line": 17
                }
              },
              "range": [
                306,
                314
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  308,
                  314
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 17
                  },
                  "start": {
                    "column": 9,
                    "line": 17
                  }
                }
              }
            },
            "range": [
              303,
              315
            ],
            "loc": {
              "end": {
                "column": 16,
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
            "column": 12,
            "line": 16
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "range": [
          295,
          296
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
      "range": [
        285,
        317
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          331,
          351
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "range": [
                337,
                340
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 21
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
                  "column": 15,
                  "line": 21
                },
                "start": {
                  "column": 7,
                  "line": 21
                }
              },
              "range": [
                340,
                348
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  342,
                  348
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 21
                  },
                  "start": {
                    "column": 9,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              337,
              349
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
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
            "column": 12,
            "line": 20
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y",
        "optional": false,
        "range": [
          329,
          330
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 20
          },
          "start": {
            "column": 10,
            "line": 20
          }
        }
      },
      "range": [
        319,
        351
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          366,
          412
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "range": [
                372,
                378
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 25
                },
                "start": {
                  "column": 4,
                  "line": 25
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
                  "line": 25
                },
                "start": {
                  "column": 10,
                  "line": 25
                }
              },
              "range": [
                378,
                387
              ],
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "range": [
                  380,
                  387
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 25
                  },
                  "start": {
                    "column": 12,
                    "line": 25
                  }
                }
              }
            },
            "range": [
              372,
              388
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "error",
              "optional": false,
              "range": [
                393,
                398
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 26
                },
                "start": {
                  "column": 4,
                  "line": 26
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
                  "line": 26
                },
                "start": {
                  "column": 9,
                  "line": 26
                }
              },
              "range": [
                398,
                409
              ],
              "typeAnnotation": {
                "type": "TSUndefinedKeyword",
                "range": [
                  400,
                  409
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
              }
            },
            "range": [
              393,
              410
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
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 13,
            "line": 24
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A2",
        "optional": false,
        "range": [
          363,
          365
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 24
          },
          "start": {
            "column": 10,
            "line": 24
          }
        }
      },
      "range": [
        353,
        412
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          427,
          448
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "error",
              "optional": false,
              "range": [
                433,
                438
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 30
                },
                "start": {
                  "column": 4,
                  "line": 30
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
                  "column": 16,
                  "line": 30
                },
                "start": {
                  "column": 9,
                  "line": 30
                }
              },
              "range": [
                438,
                445
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "range": [
                        440,
                        441
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 30
                        },
                        "start": {
                          "column": 11,
                          "line": 30
                        }
                      }
                    },
                    "range": [
                      440,
                      441
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 30
                      },
                      "start": {
                        "column": 11,
                        "line": 30
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Y",
                      "optional": false,
                      "range": [
                        444,
                        445
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 30
                        },
                        "start": {
                          "column": 15,
                          "line": 30
                        }
                      }
                    },
                    "range": [
                      444,
                      445
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 30
                      },
                      "start": {
                        "column": 15,
                        "line": 30
                      }
                    }
                  }
                ],
                "range": [
                  440,
                  445
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 30
                  },
                  "start": {
                    "column": 11,
                    "line": 30
                  }
                }
              }
            },
            "range": [
              433,
              446
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
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
            "column": 13,
            "line": 29
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B2",
        "optional": false,
        "range": [
          424,
          426
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 29
          },
          "start": {
            "column": 10,
            "line": 29
          }
        }
      },
      "range": [
        414,
        448
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 31
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
            "name": "testMethod",
            "optional": false,
            "range": [
              456,
              466
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 33
              },
              "start": {
                "column": 6,
                "line": 33
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "range": [
                            559,
                            560
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 37
                            },
                            "start": {
                              "column": 8,
                              "line": 37
                            }
                          }
                        },
                        "range": [
                          559,
                          561
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 37
                          },
                          "start": {
                            "column": 8,
                            "line": 37
                          }
                        }
                      }
                    ],
                    "range": [
                      549,
                      588
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 38
                      },
                      "start": {
                        "column": 11,
                        "line": 36
                      }
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "range": [
                            514,
                            515
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
                        "range": [
                          514,
                          516
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
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
                      504,
                      543
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 36
                      },
                      "start": {
                        "column": 17,
                        "line": 34
                      }
                    }
                  },
                  "test": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m",
                      "optional": false,
                      "range": [
                        495,
                        496
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 34
                        },
                        "start": {
                          "column": 8,
                          "line": 34
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "error",
                      "optional": false,
                      "range": [
                        497,
                        502
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 34
                        },
                        "start": {
                          "column": 10,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      495,
                      502
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 34
                      },
                      "start": {
                        "column": 8,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    491,
                    588
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 38
                    },
                    "start": {
                      "column": 4,
                      "line": 34
                    }
                  }
                }
              ],
              "range": [
                485,
                590
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 39
                },
                "start": {
                  "column": 35,
                  "line": 33
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
                "name": "m",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 33
                    },
                    "start": {
                      "column": 21,
                      "line": 33
                    }
                  },
                  "range": [
                    471,
                    480
                  ],
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A2",
                          "optional": false,
                          "range": [
                            473,
                            475
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 33
                            },
                            "start": {
                              "column": 23,
                              "line": 33
                            }
                          }
                        },
                        "range": [
                          473,
                          475
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 33
                          },
                          "start": {
                            "column": 23,
                            "line": 33
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B2",
                          "optional": false,
                          "range": [
                            478,
                            480
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 33
                            },
                            "start": {
                              "column": 28,
                              "line": 33
                            }
                          }
                        },
                        "range": [
                          478,
                          480
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 33
                          },
                          "start": {
                            "column": 28,
                            "line": 33
                          }
                        }
                      }
                    ],
                    "range": [
                      473,
                      480
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 33
                      },
                      "start": {
                        "column": 23,
                        "line": 33
                      }
                    }
                  }
                },
                "range": [
                  470,
                  480
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 33
                  },
                  "start": {
                    "column": 20,
                    "line": 33
                  }
                }
              }
            ],
            "range": [
              469,
              590
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 39
              },
              "start": {
                "column": 19,
                "line": 33
              }
            }
          },
          "range": [
            456,
            590
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 39
            },
            "start": {
              "column": 6,
              "line": 33
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        450,
        590
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 41
    },
    "start": {
      "column": 0,
      "line": 5
    }
  },
  "hashbang": null
}
```
