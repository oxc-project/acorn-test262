__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    379
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HowlErrorCallback",
        "optional": false,
        "range": [
          5,
          22
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "soundId",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 41,
                  "line": 1
                },
                "start": {
                  "column": 33,
                  "line": 1
                }
              },
              "range": [
                33,
                41
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  35,
                  41
                ],
                "loc": {
                  "end": {
                    "column": 41,
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
              41
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 1
              },
              "start": {
                "column": 26,
                "line": 1
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "error",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 57,
                  "line": 1
                },
                "start": {
                  "column": 48,
                  "line": 1
                }
              },
              "range": [
                48,
                57
              ],
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "range": [
                  50,
                  57
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 1
                  },
                  "start": {
                    "column": 50,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              43,
              57
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 1
              },
              "start": {
                "column": 43,
                "line": 1
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 66,
              "line": 1
            },
            "start": {
              "column": 59,
              "line": 1
            }
          },
          "range": [
            59,
            66
          ],
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "range": [
              62,
              66
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 1
              },
              "start": {
                "column": 62,
                "line": 1
              }
            }
          }
        },
        "range": [
          25,
          66
        ],
        "loc": {
          "end": {
            "column": 66,
            "line": 1
          },
          "start": {
            "column": 25,
            "line": 1
          }
        }
      },
      "range": [
        0,
        67
      ],
      "loc": {
        "end": {
          "column": 67,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          91,
          141
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onplayerror",
              "optional": false,
              "range": [
                95,
                106
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 4
                },
                "start": {
                  "column": 2,
                  "line": 4
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
                  "column": 45,
                  "line": 4
                },
                "start": {
                  "column": 14,
                  "line": 4
                }
              },
              "range": [
                107,
                138
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "HowlErrorCallback",
                      "optional": false,
                      "range": [
                        109,
                        126
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 4
                        },
                        "start": {
                          "column": 16,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      109,
                      126
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 4
                      },
                      "start": {
                        "column": 16,
                        "line": 4
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      129,
                      138
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 4
                      },
                      "start": {
                        "column": 36,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  109,
                  138
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 4
                  },
                  "start": {
                    "column": 16,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              95,
              139
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 4
              },
              "start": {
                "column": 2,
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
            "column": 22,
            "line": 3
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "HowlOptions",
        "optional": false,
        "range": [
          79,
          90
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 3
          }
        }
      },
      "range": [
        69,
        141
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          154,
          284
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                158,
                169
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 13,
                  "line": 8
                },
                "start": {
                  "column": 2,
                  "line": 8
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
                169,
                210
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  208,
                  210
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 8
                  },
                  "start": {
                    "column": 52,
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
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 8
                        },
                        "start": {
                          "column": 37,
                          "line": 8
                        }
                      },
                      "range": [
                        193,
                        206
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "HowlOptions",
                          "optional": false,
                          "range": [
                            195,
                            206
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 8
                            },
                            "start": {
                              "column": 39,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          195,
                          206
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 8
                          },
                          "start": {
                            "column": 39,
                            "line": 8
                          }
                        }
                      }
                    },
                    "range": [
                      186,
                      206
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 8
                      },
                      "start": {
                        "column": 30,
                        "line": 8
                      }
                    }
                  },
                  "readonly": true,
                  "static": false,
                  "range": [
                    170,
                    206
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
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
                  "column": 54,
                  "line": 8
                },
                "start": {
                  "column": 13,
                  "line": 8
                }
              }
            },
            "range": [
              158,
              210
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 8
              },
              "start": {
                "column": 2,
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
              "name": "once",
              "optional": false,
              "range": [
                213,
                217
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 9
                },
                "start": {
                  "column": 2,
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
                217,
                282
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "range": [
                            268,
                            272
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 10
                            },
                            "start": {
                              "column": 16,
                              "line": 10
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fn",
                          "optional": false,
                          "range": [
                            274,
                            276
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 10
                            },
                            "start": {
                              "column": 22,
                              "line": 10
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
                          "name": "console",
                          "optional": false,
                          "range": [
                            256,
                            263
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 10
                            },
                            "start": {
                              "column": 4,
                              "line": 10
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "range": [
                            264,
                            267
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
                        "range": [
                          256,
                          267
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 10
                          },
                          "start": {
                            "column": 4,
                            "line": 10
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        256,
                        277
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 10
                        },
                        "start": {
                          "column": 4,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      256,
                      278
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 10
                      },
                      "start": {
                        "column": 4,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  250,
                  282
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 11
                  },
                  "start": {
                    "column": 39,
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 9
                      },
                      "start": {
                        "column": 11,
                        "line": 9
                      }
                    },
                    "range": [
                      222,
                      232
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "\"unlock\"",
                        "value": "unlock",
                        "range": [
                          224,
                          232
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
                        224,
                        232
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
                    }
                  },
                  "range": [
                    218,
                    232
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 9
                    },
                    "start": {
                      "column": 7,
                      "line": 9
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 9
                      },
                      "start": {
                        "column": 25,
                        "line": 9
                      }
                    },
                    "range": [
                      236,
                      248
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 9
                          },
                          "start": {
                            "column": 30,
                            "line": 9
                          }
                        },
                        "range": [
                          241,
                          248
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            244,
                            248
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 9
                            },
                            "start": {
                              "column": 33,
                              "line": 9
                            }
                          }
                        }
                      },
                      "range": [
                        238,
                        248
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 9
                        },
                        "start": {
                          "column": 27,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    234,
                    248
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 9
                    },
                    "start": {
                      "column": 23,
                      "line": 9
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 11
                },
                "start": {
                  "column": 6,
                  "line": 9
                }
              }
            },
            "range": [
              213,
              282
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 11
              },
              "start": {
                "column": 2,
                "line": 9
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 11,
            "line": 7
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Howl",
        "optional": false,
        "range": [
          149,
          153
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
      "implements": [],
      "superClass": null,
      "range": [
        143,
        284
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
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
            "name": "instance",
            "optional": false,
            "range": [
              292,
              300
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 14
              },
              "start": {
                "column": 6,
                "line": 14
              }
            }
          },
          "init": {
            "type": "NewExpression",
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
                      "name": "onplayerror",
                      "optional": false,
                      "range": [
                        316,
                        327
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 15
                        },
                        "start": {
                          "column": 2,
                          "line": 15
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
                        "type": "UnaryExpression",
                        "argument": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Literal",
                              "raw": "\"unlock\"",
                              "value": "unlock",
                              "range": [
                                354,
                                362
                              ],
                              "loc": {
                                "end": {
                                  "column": 48,
                                  "line": 15
                                },
                                "start": {
                                  "column": 40,
                                  "line": 15
                                }
                              }
                            },
                            {
                              "type": "ArrowFunctionExpression",
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "range": [
                                  370,
                                  372
                                ],
                                "loc": {
                                  "end": {
                                    "column": 58,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 56,
                                    "line": 15
                                  }
                                }
                              },
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": [],
                              "range": [
                                364,
                                372
                              ],
                              "loc": {
                                "end": {
                                  "column": 58,
                                  "line": 15
                                },
                                "start": {
                                  "column": 50,
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
                              "name": "instance",
                              "optional": false,
                              "range": [
                                340,
                                348
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 15
                                },
                                "start": {
                                  "column": 26,
                                  "line": 15
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "once",
                              "optional": false,
                              "range": [
                                349,
                                353
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 15
                                },
                                "start": {
                                  "column": 35,
                                  "line": 15
                                }
                              }
                            },
                            "range": [
                              340,
                              353
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 15
                              },
                              "start": {
                                "column": 26,
                                "line": 15
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            340,
                            373
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 15
                            },
                            "start": {
                              "column": 26,
                              "line": 15
                            }
                          }
                        },
                        "operator": "void",
                        "prefix": true,
                        "range": [
                          335,
                          373
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 15
                          },
                          "start": {
                            "column": 21,
                            "line": 15
                          }
                        }
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "range": [
                        329,
                        373
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 15
                        },
                        "start": {
                          "column": 15,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      316,
                      373
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 15
                      },
                      "start": {
                        "column": 2,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  312,
                  376
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 16
                  },
                  "start": {
                    "column": 26,
                    "line": 14
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Howl",
              "optional": false,
              "range": [
                307,
                311
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 14
                },
                "start": {
                  "column": 21,
                  "line": 14
                }
              }
            },
            "range": [
              303,
              377
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 16
              },
              "start": {
                "column": 17,
                "line": 14
              }
            }
          },
          "range": [
            292,
            377
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 16
            },
            "start": {
              "column": 6,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        286,
        378
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 17
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
