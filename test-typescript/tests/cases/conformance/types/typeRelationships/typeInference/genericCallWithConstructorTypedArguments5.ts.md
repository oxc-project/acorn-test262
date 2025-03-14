__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    156,
    771
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "NewExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    228,
                    232
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 4
                    },
                    "start": {
                      "column": 22,
                      "line": 4
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
                  "name": "arg",
                  "optional": false,
                  "range": [
                    221,
                    224
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 4
                    },
                    "start": {
                      "column": 15,
                      "line": 4
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "range": [
                    225,
                    227
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 4
                    },
                    "start": {
                      "column": 19,
                      "line": 4
                    }
                  }
                },
                "range": [
                  221,
                  227
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 4
                  },
                  "start": {
                    "column": 15,
                    "line": 4
                  }
                }
              },
              "range": [
                217,
                233
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "range": [
              210,
              234
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          204,
          236
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 48,
            "line": 3
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
          165,
          168
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 46,
                "line": 3
              },
              "start": {
                "column": 22,
                "line": 3
              }
            },
            "range": [
              178,
              202
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "range": [
                      182,
                      184
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 3
                      },
                      "start": {
                        "column": 26,
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
                        "column": 44,
                        "line": 3
                      },
                      "start": {
                        "column": 28,
                        "line": 3
                      }
                    },
                    "range": [
                      184,
                      200
                    ],
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 3
                              },
                              "start": {
                                "column": 35,
                                "line": 3
                              }
                            },
                            "range": [
                              191,
                              194
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  193,
                                  194
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 3
                                  },
                                  "start": {
                                    "column": 37,
                                    "line": 3
                                  }
                                }
                              },
                              "range": [
                                193,
                                194
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 3
                                },
                                "start": {
                                  "column": 37,
                                  "line": 3
                                }
                              }
                            }
                          },
                          "range": [
                            190,
                            194
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 3
                            },
                            "start": {
                              "column": 34,
                              "line": 3
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 3
                          },
                          "start": {
                            "column": 40,
                            "line": 3
                          }
                        },
                        "range": [
                          196,
                          200
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              199,
                              200
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 3
                              },
                              "start": {
                                "column": 43,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            199,
                            200
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 3
                            },
                            "start": {
                              "column": 43,
                              "line": 3
                            }
                          }
                        }
                      },
                      "range": [
                        186,
                        200
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 3
                        },
                        "start": {
                          "column": 30,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    182,
                    200
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 3
                    },
                    "start": {
                      "column": 26,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                180,
                202
              ],
              "loc": {
                "end": {
                  "column": 46,
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
            175,
            202
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 3
            },
            "start": {
              "column": 19,
              "line": 3
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 3
          },
          "start": {
            "column": 12,
            "line": 3
          }
        },
        "range": [
          168,
          174
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
                169,
                170
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 3
                },
                "start": {
                  "column": 13,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              169,
              170
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 3
              },
              "start": {
                "column": 13,
                "line": 3
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                172,
                173
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 3
                },
                "start": {
                  "column": 16,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              172,
              173
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 3
              },
              "start": {
                "column": 16,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        156,
        236
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "arg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 39,
                  "line": 7
                },
                "start": {
                  "column": 7,
                  "line": 7
                }
              },
              "range": [
                245,
                277
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "range": [
                        249,
                        251
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 7
                        },
                        "start": {
                          "column": 11,
                          "line": 7
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
                          "column": 37,
                          "line": 7
                        },
                        "start": {
                          "column": 13,
                          "line": 7
                        }
                      },
                      "range": [
                        251,
                        275
                      ],
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "abstract": false,
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
                                  "column": 26,
                                  "line": 7
                                },
                                "start": {
                                  "column": 23,
                                  "line": 7
                                }
                              },
                              "range": [
                                261,
                                264
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "range": [
                                    263,
                                    264
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 7
                                    }
                                  }
                                },
                                "range": [
                                  263,
                                  264
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 7
                                  }
                                }
                              }
                            },
                            "range": [
                              260,
                              264
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 7
                              },
                              "start": {
                                "column": 22,
                                "line": 7
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 7
                            },
                            "start": {
                              "column": 28,
                              "line": 7
                            }
                          },
                          "range": [
                            266,
                            275
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              269,
                              275
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 7
                              },
                              "start": {
                                "column": 31,
                                "line": 7
                              }
                            }
                          }
                        },
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 7
                            },
                            "start": {
                              "column": 18,
                              "line": 7
                            }
                          },
                          "range": [
                            256,
                            259
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
                                  257,
                                  258
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 7
                                  }
                                }
                              },
                              "out": false,
                              "range": [
                                257,
                                258
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 7
                                },
                                "start": {
                                  "column": 19,
                                  "line": 7
                                }
                              }
                            }
                          ]
                        },
                        "range": [
                          253,
                          275
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
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
                      249,
                      275
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 7
                      },
                      "start": {
                        "column": 11,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  247,
                  277
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 7
                  },
                  "start": {
                    "column": 9,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              242,
              277
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": null,
          "range": [
            242,
            277
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        238,
        278
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 7
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
            "name": "r",
            "optional": false,
            "range": [
              283,
              284
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "range": [
                  291,
                  294
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 8
                  },
                  "start": {
                    "column": 12,
                    "line": 8
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                287,
                290
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 8
                },
                "start": {
                  "column": 8,
                  "line": 8
                }
              }
            },
            "optional": false,
            "range": [
              287,
              295
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 8
              },
              "start": {
                "column": 8,
                "line": 8
              }
            }
          },
          "range": [
            283,
            295
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 8
            },
            "start": {
              "column": 4,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        279,
        296
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
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
            "name": "arg2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 47,
                  "line": 10
                },
                "start": {
                  "column": 8,
                  "line": 10
                }
              },
              "range": [
                336,
                375
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "range": [
                        340,
                        342
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 10
                        },
                        "start": {
                          "column": 12,
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
                          "column": 45,
                          "line": 10
                        },
                        "start": {
                          "column": 14,
                          "line": 10
                        }
                      },
                      "range": [
                        342,
                        373
                      ],
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "abstract": false,
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
                                  "column": 28,
                                  "line": 10
                                },
                                "start": {
                                  "column": 25,
                                  "line": 10
                                }
                              },
                              "range": [
                                353,
                                356
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "range": [
                                    355,
                                    356
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 27,
                                      "line": 10
                                    }
                                  }
                                },
                                "range": [
                                  355,
                                  356
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 10
                                  }
                                }
                              }
                            },
                            "range": [
                              352,
                              356
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 10
                              },
                              "start": {
                                "column": 24,
                                "line": 10
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 10
                                },
                                "start": {
                                  "column": 31,
                                  "line": 10
                                }
                              },
                              "range": [
                                359,
                                362
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "range": [
                                    361,
                                    362
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 34,
                                      "line": 10
                                    },
                                    "start": {
                                      "column": 33,
                                      "line": 10
                                    }
                                  }
                                },
                                "range": [
                                  361,
                                  362
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 10
                                  }
                                }
                              }
                            },
                            "range": [
                              358,
                              362
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 10
                              },
                              "start": {
                                "column": 30,
                                "line": 10
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 10
                            },
                            "start": {
                              "column": 36,
                              "line": 10
                            }
                          },
                          "range": [
                            364,
                            373
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              367,
                              373
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 10
                              },
                              "start": {
                                "column": 39,
                                "line": 10
                              }
                            }
                          }
                        },
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 10
                            },
                            "start": {
                              "column": 20,
                              "line": 10
                            }
                          },
                          "range": [
                            348,
                            351
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
                                  349,
                                  350
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 10
                                  }
                                }
                              },
                              "out": false,
                              "range": [
                                349,
                                350
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 10
                                },
                                "start": {
                                  "column": 21,
                                  "line": 10
                                }
                              }
                            }
                          ]
                        },
                        "range": [
                          344,
                          373
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 10
                          },
                          "start": {
                            "column": 16,
                            "line": 10
                          }
                        }
                      }
                    },
                    "range": [
                      340,
                      373
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 10
                      },
                      "start": {
                        "column": 12,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  338,
                  375
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 10
                  },
                  "start": {
                    "column": 10,
                    "line": 10
                  }
                }
              }
            },
            "range": [
              332,
              375
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          "init": null,
          "range": [
            332,
            375
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 10
            },
            "start": {
              "column": 4,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        328,
        376
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
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
              381,
              383
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg2",
                "optional": false,
                "range": [
                  390,
                  394
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 11
                  },
                  "start": {
                    "column": 13,
                    "line": 11
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                386,
                389
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
            "optional": false,
            "range": [
              386,
              395
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 11
              },
              "start": {
                "column": 9,
                "line": 11
              }
            }
          },
          "range": [
            381,
            395
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 11
            },
            "start": {
              "column": 4,
              "line": 11
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        377,
        396
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 11
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
            "name": "arg3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 54,
                  "line": 12
                },
                "start": {
                  "column": 8,
                  "line": 12
                }
              },
              "range": [
                414,
                460
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "range": [
                        418,
                        420
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 12
                        },
                        "start": {
                          "column": 12,
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
                          "column": 52,
                          "line": 12
                        },
                        "start": {
                          "column": 14,
                          "line": 12
                        }
                      },
                      "range": [
                        420,
                        458
                      ],
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "abstract": false,
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
                                  "line": 12
                                },
                                "start": {
                                  "column": 22,
                                  "line": 12
                                }
                              },
                              "range": [
                                428,
                                436
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  430,
                                  436
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
                            },
                            "range": [
                              427,
                              436
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 12
                              },
                              "start": {
                                "column": 21,
                                "line": 12
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 12
                                },
                                "start": {
                                  "column": 33,
                                  "line": 12
                                }
                              },
                              "range": [
                                439,
                                447
                              ],
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "range": [
                                  441,
                                  447
                                ],
                                "loc": {
                                  "end": {
                                    "column": 41,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 12
                                  }
                                }
                              }
                            },
                            "range": [
                              438,
                              447
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
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 12
                            },
                            "start": {
                              "column": 43,
                              "line": 12
                            }
                          },
                          "range": [
                            449,
                            458
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              452,
                              458
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 12
                              },
                              "start": {
                                "column": 46,
                                "line": 12
                              }
                            }
                          }
                        },
                        "range": [
                          422,
                          458
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 12
                          },
                          "start": {
                            "column": 16,
                            "line": 12
                          }
                        }
                      }
                    },
                    "range": [
                      418,
                      458
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 12
                      },
                      "start": {
                        "column": 12,
                        "line": 12
                      }
                    }
                  }
                ],
                "range": [
                  416,
                  460
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 12
                  },
                  "start": {
                    "column": 10,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              410,
              460
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          "init": null,
          "range": [
            410,
            460
          ],
          "loc": {
            "end": {
              "column": 54,
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
        406,
        461
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
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
            "range": [
              466,
              468
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg3",
                "optional": false,
                "range": [
                  475,
                  479
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 13
                  },
                  "start": {
                    "column": 13,
                    "line": 13
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                471,
                474
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 13
                },
                "start": {
                  "column": 9,
                  "line": 13
                }
              }
            },
            "optional": false,
            "range": [
              471,
              480
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 13
              },
              "start": {
                "column": 9,
                "line": 13
              }
            }
          },
          "range": [
            466,
            480
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 13
            },
            "start": {
              "column": 4,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        462,
        481
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
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
              "type": "NewExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    572,
                    576
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 16
                    },
                    "start": {
                      "column": 22,
                      "line": 16
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    578,
                    582
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 16
                    },
                    "start": {
                      "column": 28,
                      "line": 16
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
                  "name": "arg",
                  "optional": false,
                  "range": [
                    565,
                    568
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 16
                    },
                    "start": {
                      "column": 15,
                      "line": 16
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "range": [
                    569,
                    571
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 16
                    },
                    "start": {
                      "column": 19,
                      "line": 16
                    }
                  }
                },
                "range": [
                  565,
                  571
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
              },
              "range": [
                561,
                583
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 16
                },
                "start": {
                  "column": 11,
                  "line": 16
                }
              }
            },
            "range": [
              554,
              584
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          }
        ],
        "range": [
          548,
          586
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 56,
            "line": 15
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "range": [
          501,
          505
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 15
          },
          "start": {
            "column": 9,
            "line": 15
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 54,
                "line": 15
              },
              "start": {
                "column": 23,
                "line": 15
              }
            },
            "range": [
              515,
              546
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "range": [
                      519,
                      521
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 15
                      },
                      "start": {
                        "column": 27,
                        "line": 15
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
                        "column": 52,
                        "line": 15
                      },
                      "start": {
                        "column": 29,
                        "line": 15
                      }
                    },
                    "range": [
                      521,
                      544
                    ],
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 15
                              },
                              "start": {
                                "column": 36,
                                "line": 15
                              }
                            },
                            "range": [
                              528,
                              531
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  530,
                                  531
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 38,
                                    "line": 15
                                  }
                                }
                              },
                              "range": [
                                530,
                                531
                              ],
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 15
                                },
                                "start": {
                                  "column": 38,
                                  "line": 15
                                }
                              }
                            }
                          },
                          "range": [
                            527,
                            531
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
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "t2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 15
                              },
                              "start": {
                                "column": 43,
                                "line": 15
                              }
                            },
                            "range": [
                              535,
                              538
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  537,
                                  538
                                ],
                                "loc": {
                                  "end": {
                                    "column": 46,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 45,
                                    "line": 15
                                  }
                                }
                              },
                              "range": [
                                537,
                                538
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 15
                                },
                                "start": {
                                  "column": 45,
                                  "line": 15
                                }
                              }
                            }
                          },
                          "range": [
                            533,
                            538
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 15
                            },
                            "start": {
                              "column": 41,
                              "line": 15
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 15
                          },
                          "start": {
                            "column": 48,
                            "line": 15
                          }
                        },
                        "range": [
                          540,
                          544
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              543,
                              544
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 15
                              },
                              "start": {
                                "column": 51,
                                "line": 15
                              }
                            }
                          },
                          "range": [
                            543,
                            544
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 15
                            },
                            "start": {
                              "column": 51,
                              "line": 15
                            }
                          }
                        }
                      },
                      "range": [
                        523,
                        544
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 15
                        },
                        "start": {
                          "column": 31,
                          "line": 15
                        }
                      }
                    }
                  },
                  "range": [
                    519,
                    544
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 15
                    },
                    "start": {
                      "column": 27,
                      "line": 15
                    }
                  }
                }
              ],
              "range": [
                517,
                546
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 15
                },
                "start": {
                  "column": 25,
                  "line": 15
                }
              }
            }
          },
          "range": [
            512,
            546
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 15
            },
            "start": {
              "column": 20,
              "line": 15
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 19,
            "line": 15
          },
          "start": {
            "column": 13,
            "line": 15
          }
        },
        "range": [
          505,
          511
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
                506,
                507
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 15
                },
                "start": {
                  "column": 14,
                  "line": 15
                }
              }
            },
            "out": false,
            "range": [
              506,
              507
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 15
              },
              "start": {
                "column": 14,
                "line": 15
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                509,
                510
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
            "out": false,
            "range": [
              509,
              510
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
          }
        ]
      },
      "range": [
        492,
        586
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
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
            "name": "r4",
            "optional": false,
            "range": [
              609,
              611
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "range": [
                  618,
                  621
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 20
                  },
                  "start": {
                    "column": 13,
                    "line": 20
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                614,
                617
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 20
                },
                "start": {
                  "column": 9,
                  "line": 20
                }
              }
            },
            "optional": false,
            "range": [
              614,
              622
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 20
              },
              "start": {
                "column": 9,
                "line": 20
              }
            }
          },
          "range": [
            609,
            622
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 20
            },
            "start": {
              "column": 4,
              "line": 20
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        605,
        623
      ],
      "loc": {
        "end": {
          "column": 18,
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
            "name": "arg4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 43,
                  "line": 21
                },
                "start": {
                  "column": 8,
                  "line": 21
                }
              },
              "range": [
                638,
                673
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "range": [
                        642,
                        644
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 21
                        },
                        "start": {
                          "column": 12,
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
                          "column": 41,
                          "line": 21
                        },
                        "start": {
                          "column": 14,
                          "line": 21
                        }
                      },
                      "range": [
                        644,
                        671
                      ],
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "abstract": false,
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
                                  "line": 21
                                },
                                "start": {
                                  "column": 22,
                                  "line": 21
                                }
                              },
                              "range": [
                                652,
                                660
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  654,
                                  660
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 21
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 21
                                  }
                                }
                              }
                            },
                            "range": [
                              651,
                              660
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 21
                              },
                              "start": {
                                "column": 21,
                                "line": 21
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 21
                            },
                            "start": {
                              "column": 32,
                              "line": 21
                            }
                          },
                          "range": [
                            662,
                            671
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              665,
                              671
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 21
                              },
                              "start": {
                                "column": 35,
                                "line": 21
                              }
                            }
                          }
                        },
                        "range": [
                          646,
                          671
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 21
                          },
                          "start": {
                            "column": 16,
                            "line": 21
                          }
                        }
                      }
                    },
                    "range": [
                      642,
                      671
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 21
                      },
                      "start": {
                        "column": 12,
                        "line": 21
                      }
                    }
                  }
                ],
                "range": [
                  640,
                  673
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 21
                  },
                  "start": {
                    "column": 10,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              634,
              673
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          "init": null,
          "range": [
            634,
            673
          ],
          "loc": {
            "end": {
              "column": 43,
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
        630,
        674
      ],
      "loc": {
        "end": {
          "column": 44,
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
            "name": "r6",
            "optional": false,
            "range": [
              679,
              681
            ],
            "loc": {
              "end": {
                "column": 6,
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
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg4",
                "optional": false,
                "range": [
                  688,
                  692
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 22
                  },
                  "start": {
                    "column": 13,
                    "line": 22
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                684,
                687
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 22
                },
                "start": {
                  "column": 9,
                  "line": 22
                }
              }
            },
            "optional": false,
            "range": [
              684,
              693
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 22
              },
              "start": {
                "column": 9,
                "line": 22
              }
            }
          },
          "range": [
            679,
            693
          ],
          "loc": {
            "end": {
              "column": 18,
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
        675,
        694
      ],
      "loc": {
        "end": {
          "column": 19,
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
            "name": "arg5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 23
                },
                "start": {
                  "column": 8,
                  "line": 23
                }
              },
              "range": [
                713,
                739
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "range": [
                        717,
                        719
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 23
                        },
                        "start": {
                          "column": 12,
                          "line": 23
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
                          "column": 32,
                          "line": 23
                        },
                        "start": {
                          "column": 14,
                          "line": 23
                        }
                      },
                      "range": [
                        719,
                        737
                      ],
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "abstract": false,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 23
                            },
                            "start": {
                              "column": 23,
                              "line": 23
                            }
                          },
                          "range": [
                            728,
                            737
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              731,
                              737
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 23
                              },
                              "start": {
                                "column": 26,
                                "line": 23
                              }
                            }
                          }
                        },
                        "range": [
                          721,
                          737
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 23
                          },
                          "start": {
                            "column": 16,
                            "line": 23
                          }
                        }
                      }
                    },
                    "range": [
                      717,
                      737
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 23
                      },
                      "start": {
                        "column": 12,
                        "line": 23
                      }
                    }
                  }
                ],
                "range": [
                  715,
                  739
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 23
                  },
                  "start": {
                    "column": 10,
                    "line": 23
                  }
                }
              }
            },
            "range": [
              709,
              739
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          "init": null,
          "range": [
            709,
            739
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 23
            },
            "start": {
              "column": 4,
              "line": 23
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        705,
        740
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
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
            "name": "r7",
            "optional": false,
            "range": [
              745,
              747
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg5",
                "optional": false,
                "range": [
                  754,
                  758
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 24
                  },
                  "start": {
                    "column": 13,
                    "line": 24
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                750,
                753
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 24
                },
                "start": {
                  "column": 9,
                  "line": 24
                }
              }
            },
            "optional": false,
            "range": [
              750,
              759
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 24
              },
              "start": {
                "column": 9,
                "line": 24
              }
            }
          },
          "range": [
            745,
            759
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 24
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
        741,
        760
      ],
      "loc": {
        "end": {
          "column": 19,
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
      "line": 3
    }
  },
  "hashbang": null
}
```
