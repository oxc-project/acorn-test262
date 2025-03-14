__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    23,
    6439
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "callIt",
        "optional": false,
        "range": [
          40,
          46
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 3
          },
          "start": {
            "column": 17,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 1,
                "line": 6
              },
              "start": {
                "column": 30,
                "line": 3
              }
            },
            "range": [
              53,
              117
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
                    "name": "produce",
                    "optional": false,
                    "range": [
                      61,
                      68
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
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 4
                      },
                      "start": {
                        "column": 11,
                        "line": 4
                      }
                    },
                    "range": [
                      68,
                      86
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 4
                              },
                              "start": {
                                "column": 15,
                                "line": 4
                              }
                            },
                            "range": [
                              72,
                              80
                            ],
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "range": [
                                74,
                                80
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 4
                                },
                                "start": {
                                  "column": 17,
                                  "line": 4
                                }
                              }
                            }
                          },
                          "range": [
                            71,
                            80
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 4
                            },
                            "start": {
                              "column": 14,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 4
                          },
                          "start": {
                            "column": 25,
                            "line": 4
                          }
                        },
                        "range": [
                          82,
                          86
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              85,
                              86
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 4
                              },
                              "start": {
                                "column": 28,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            85,
                            86
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 4
                            },
                            "start": {
                              "column": 28,
                              "line": 4
                            }
                          }
                        }
                      },
                      "range": [
                        70,
                        86
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 4
                        },
                        "start": {
                          "column": 13,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    61,
                    87
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 4
                    },
                    "start": {
                      "column": 4,
                      "line": 4
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "consume",
                    "optional": false,
                    "range": [
                      92,
                      99
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 5
                      },
                      "start": {
                        "column": 4,
                        "line": 5
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
                        "column": 27,
                        "line": 5
                      },
                      "start": {
                        "column": 11,
                        "line": 5
                      }
                    },
                    "range": [
                      99,
                      115
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                                "column": 18,
                                "line": 5
                              },
                              "start": {
                                "column": 15,
                                "line": 5
                              }
                            },
                            "range": [
                              103,
                              106
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  105,
                                  106
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 5
                                  }
                                }
                              },
                              "range": [
                                105,
                                106
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 5
                                },
                                "start": {
                                  "column": 17,
                                  "line": 5
                                }
                              }
                            }
                          },
                          "range": [
                            102,
                            106
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 5
                            },
                            "start": {
                              "column": 14,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 5
                          },
                          "start": {
                            "column": 20,
                            "line": 5
                          }
                        },
                        "range": [
                          108,
                          115
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            111,
                            115
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 5
                            },
                            "start": {
                              "column": 23,
                              "line": 5
                            }
                          }
                        }
                      },
                      "range": [
                        101,
                        115
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 5
                        },
                        "start": {
                          "column": 13,
                          "line": 5
                        }
                      }
                    }
                  },
                  "range": [
                    92,
                    115
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 5
                    },
                    "start": {
                      "column": 4,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                55,
                117
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 6
                },
                "start": {
                  "column": 32,
                  "line": 3
                }
              }
            }
          },
          "range": [
            50,
            117
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 6
            },
            "start": {
              "column": 27,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 8,
            "line": 6
          },
          "start": {
            "column": 2,
            "line": 6
          }
        },
        "range": [
          118,
          124
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            120,
            124
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 6
            },
            "start": {
              "column": 4,
              "line": 6
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 3
          },
          "start": {
            "column": 23,
            "line": 3
          }
        },
        "range": [
          46,
          49
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
                47,
                48
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 3
                },
                "start": {
                  "column": 24,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              47,
              48
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 3
              },
              "start": {
                "column": 24,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        23,
        125
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 3
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
                  "name": "produce",
                  "optional": false,
                  "range": [
                    140,
                    147
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 9
                    },
                    "start": {
                      "column": 4,
                      "line": 9
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
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      155,
                      156
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 9
                      },
                      "start": {
                        "column": 19,
                        "line": 9
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    149,
                    156
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 9
                    },
                    "start": {
                      "column": 13,
                      "line": 9
                    }
                  }
                },
                "range": [
                  140,
                  156
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 9
                  },
                  "start": {
                    "column": 4,
                    "line": 9
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "consume",
                  "optional": false,
                  "range": [
                    162,
                    169
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
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "range": [
                          176,
                          177
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
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false,
                        "range": [
                          178,
                          185
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 10
                          },
                          "start": {
                            "column": 20,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        176,
                        185
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 10
                        },
                        "start": {
                          "column": 18,
                          "line": 10
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      176,
                      187
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 10
                      },
                      "start": {
                        "column": 18,
                        "line": 10
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
                      "name": "n",
                      "optional": false,
                      "range": [
                        171,
                        172
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 10
                        },
                        "start": {
                          "column": 13,
                          "line": 10
                        }
                      }
                    }
                  ],
                  "range": [
                    171,
                    187
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 10
                    },
                    "start": {
                      "column": 13,
                      "line": 10
                    }
                  }
                },
                "range": [
                  162,
                  187
                ],
                "loc": {
                  "end": {
                    "column": 29,
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
              134,
              189
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 11
              },
              "start": {
                "column": 7,
                "line": 8
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "callIt",
          "optional": false,
          "range": [
            127,
            133
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 8
            },
            "start": {
              "column": 0,
              "line": 8
            }
          }
        },
        "optional": false,
        "range": [
          127,
          190
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 8
          }
        }
      },
      "range": [
        127,
        191
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 11
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
                  "name": "produce",
                  "optional": false,
                  "range": [
                    206,
                    213
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 14
                    },
                    "start": {
                      "column": 4,
                      "line": 14
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
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      221,
                      222
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 14
                      },
                      "start": {
                        "column": 19,
                        "line": 14
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
                      "name": "_a",
                      "optional": false,
                      "range": [
                        215,
                        217
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 14
                        },
                        "start": {
                          "column": 13,
                          "line": 14
                        }
                      }
                    }
                  ],
                  "range": [
                    215,
                    222
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 14
                    },
                    "start": {
                      "column": 13,
                      "line": 14
                    }
                  }
                },
                "range": [
                  206,
                  222
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
                    "line": 14
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "consume",
                  "optional": false,
                  "range": [
                    228,
                    235
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 15
                    },
                    "start": {
                      "column": 4,
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
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "range": [
                          242,
                          243
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 15
                          },
                          "start": {
                            "column": 18,
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
                          244,
                          251
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 15
                          },
                          "start": {
                            "column": 20,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        242,
                        251
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 15
                        },
                        "start": {
                          "column": 18,
                          "line": 15
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      242,
                      253
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 15
                      },
                      "start": {
                        "column": 18,
                        "line": 15
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
                      "name": "n",
                      "optional": false,
                      "range": [
                        237,
                        238
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 15
                        },
                        "start": {
                          "column": 13,
                          "line": 15
                        }
                      }
                    }
                  ],
                  "range": [
                    237,
                    253
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 15
                    },
                    "start": {
                      "column": 13,
                      "line": 15
                    }
                  }
                },
                "range": [
                  228,
                  253
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 15
                  },
                  "start": {
                    "column": 4,
                    "line": 15
                  }
                }
              }
            ],
            "range": [
              200,
              256
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 16
              },
              "start": {
                "column": 7,
                "line": 13
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "callIt",
          "optional": false,
          "range": [
            193,
            199
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 13
            },
            "start": {
              "column": 0,
              "line": 13
            }
          }
        },
        "optional": false,
        "range": [
          193,
          257
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 16
          },
          "start": {
            "column": 0,
            "line": 13
          }
        }
      },
      "range": [
        193,
        258
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 13
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
                  "name": "produce",
                  "optional": false,
                  "range": [
                    273,
                    280
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
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    280,
                    308
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            300,
                            301
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
                          293,
                          302
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 20
                          },
                          "start": {
                            "column": 8,
                            "line": 20
                          }
                        }
                      }
                    ],
                    "range": [
                      283,
                      308
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
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
                      "column": 5,
                      "line": 21
                    },
                    "start": {
                      "column": 11,
                      "line": 19
                    }
                  }
                },
                "range": [
                  273,
                  308
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 21
                  },
                  "start": {
                    "column": 4,
                    "line": 19
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "consume",
                  "optional": false,
                  "range": [
                    314,
                    321
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 22
                    },
                    "start": {
                      "column": 4,
                      "line": 22
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
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "range": [
                          328,
                          329
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
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false,
                        "range": [
                          330,
                          337
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 22
                          },
                          "start": {
                            "column": 20,
                            "line": 22
                          }
                        }
                      },
                      "range": [
                        328,
                        337
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
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
                      328,
                      339
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 22
                      },
                      "start": {
                        "column": 18,
                        "line": 22
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
                      "name": "n",
                      "optional": false,
                      "range": [
                        323,
                        324
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 22
                        },
                        "start": {
                          "column": 13,
                          "line": 22
                        }
                      }
                    }
                  ],
                  "range": [
                    323,
                    339
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 22
                    },
                    "start": {
                      "column": 13,
                      "line": 22
                    }
                  }
                },
                "range": [
                  314,
                  339
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 22
                  },
                  "start": {
                    "column": 4,
                    "line": 22
                  }
                }
              }
            ],
            "range": [
              267,
              341
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 23
              },
              "start": {
                "column": 7,
                "line": 18
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "callIt",
          "optional": false,
          "range": [
            260,
            266
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 18
            },
            "start": {
              "column": 0,
              "line": 18
            }
          }
        },
        "optional": false,
        "range": [
          260,
          342
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 18
          }
        }
      },
      "range": [
        260,
        343
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "callItT",
        "optional": false,
        "range": [
          362,
          369
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 25
          },
          "start": {
            "column": 17,
            "line": 25
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 67,
                "line": 25
              },
              "start": {
                "column": 31,
                "line": 25
              }
            },
            "range": [
              376,
              412
            ],
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSFunctionType",
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 25
                          },
                          "start": {
                            "column": 36,
                            "line": 25
                          }
                        },
                        "range": [
                          381,
                          389
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            383,
                            389
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 25
                            },
                            "start": {
                              "column": 38,
                              "line": 25
                            }
                          }
                        }
                      },
                      "range": [
                        380,
                        389
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 25
                        },
                        "start": {
                          "column": 35,
                          "line": 25
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 25
                      },
                      "start": {
                        "column": 46,
                        "line": 25
                      }
                    },
                    "range": [
                      391,
                      395
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          394,
                          395
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 25
                          },
                          "start": {
                            "column": 49,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        394,
                        395
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 25
                        },
                        "start": {
                          "column": 49,
                          "line": 25
                        }
                      }
                    }
                  },
                  "range": [
                    379,
                    395
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 25
                    },
                    "start": {
                      "column": 34,
                      "line": 25
                    }
                  }
                },
                {
                  "type": "TSFunctionType",
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
                            "column": 57,
                            "line": 25
                          },
                          "start": {
                            "column": 54,
                            "line": 25
                          }
                        },
                        "range": [
                          399,
                          402
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              401,
                              402
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 25
                              },
                              "start": {
                                "column": 56,
                                "line": 25
                              }
                            }
                          },
                          "range": [
                            401,
                            402
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 25
                            },
                            "start": {
                              "column": 56,
                              "line": 25
                            }
                          }
                        }
                      },
                      "range": [
                        398,
                        402
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 25
                        },
                        "start": {
                          "column": 53,
                          "line": 25
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 25
                      },
                      "start": {
                        "column": 59,
                        "line": 25
                      }
                    },
                    "range": [
                      404,
                      411
                    ],
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "range": [
                        407,
                        411
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 25
                        },
                        "start": {
                          "column": 62,
                          "line": 25
                        }
                      }
                    }
                  },
                  "range": [
                    397,
                    411
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 25
                    },
                    "start": {
                      "column": 52,
                      "line": 25
                    }
                  }
                }
              ],
              "range": [
                378,
                412
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 25
                },
                "start": {
                  "column": 33,
                  "line": 25
                }
              }
            }
          },
          "range": [
            373,
            412
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 25
            },
            "start": {
              "column": 28,
              "line": 25
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 74,
            "line": 25
          },
          "start": {
            "column": 68,
            "line": 25
          }
        },
        "range": [
          413,
          419
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            415,
            419
          ],
          "loc": {
            "end": {
              "column": 74,
              "line": 25
            },
            "start": {
              "column": 70,
              "line": 25
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 27,
            "line": 25
          },
          "start": {
            "column": 24,
            "line": 25
          }
        },
        "range": [
          369,
          372
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
                370,
                371
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 25
                },
                "start": {
                  "column": 25,
                  "line": 25
                }
              }
            },
            "out": false,
            "range": [
              370,
              371
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 25
              },
              "start": {
                "column": 25,
                "line": 25
              }
            }
          }
        ]
      },
      "range": [
        345,
        420
      ],
      "loc": {
        "end": {
          "column": 75,
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    437,
                    438
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
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "range": [
                  431,
                  438
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 27
                  },
                  "start": {
                    "column": 9,
                    "line": 27
                  }
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "range": [
                        445,
                        446
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 27
                        },
                        "start": {
                          "column": 23,
                          "line": 27
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
                        447,
                        454
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 27
                        },
                        "start": {
                          "column": 25,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      445,
                      454
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 27
                      },
                      "start": {
                        "column": 23,
                        "line": 27
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    445,
                    456
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 27
                    },
                    "start": {
                      "column": 23,
                      "line": 27
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
                    "name": "n",
                    "optional": false,
                    "range": [
                      440,
                      441
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 27
                      },
                      "start": {
                        "column": 18,
                        "line": 27
                      }
                    }
                  }
                ],
                "range": [
                  440,
                  456
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 27
                  },
                  "start": {
                    "column": 18,
                    "line": 27
                  }
                }
              }
            ],
            "range": [
              430,
              457
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 27
              },
              "start": {
                "column": 8,
                "line": 27
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "callItT",
          "optional": false,
          "range": [
            422,
            429
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 27
            },
            "start": {
              "column": 0,
              "line": 27
            }
          }
        },
        "optional": false,
        "range": [
          422,
          458
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 27
          },
          "start": {
            "column": 0,
            "line": 27
          }
        }
      },
      "range": [
        422,
        459
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    475,
                    476
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 28
                    },
                    "start": {
                      "column": 15,
                      "line": 28
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
                    "name": "_a",
                    "optional": false,
                    "range": [
                      469,
                      471
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 28
                      },
                      "start": {
                        "column": 9,
                        "line": 28
                      }
                    }
                  }
                ],
                "range": [
                  469,
                  476
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 28
                  },
                  "start": {
                    "column": 9,
                    "line": 28
                  }
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "range": [
                        483,
                        484
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 28
                        },
                        "start": {
                          "column": 23,
                          "line": 28
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
                        485,
                        492
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 28
                        },
                        "start": {
                          "column": 25,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      483,
                      492
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 28
                      },
                      "start": {
                        "column": 23,
                        "line": 28
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    483,
                    494
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 28
                    },
                    "start": {
                      "column": 23,
                      "line": 28
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
                    "name": "n",
                    "optional": false,
                    "range": [
                      478,
                      479
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 28
                      },
                      "start": {
                        "column": 18,
                        "line": 28
                      }
                    }
                  }
                ],
                "range": [
                  478,
                  494
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 28
                  },
                  "start": {
                    "column": 18,
                    "line": 28
                  }
                }
              }
            ],
            "range": [
              468,
              495
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 28
              },
              "start": {
                "column": 8,
                "line": 28
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "callItT",
          "optional": false,
          "range": [
            460,
            467
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 28
            },
            "start": {
              "column": 0,
              "line": 28
            }
          }
        },
        "optional": false,
        "range": [
          460,
          496
        ],
        "loc": {
          "end": {
            "column": 36,
            "line": 28
          },
          "start": {
            "column": 0,
            "line": 28
          }
        }
      },
      "range": [
        460,
        497
      ],
      "loc": {
        "end": {
          "column": 37,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          546,
          643
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "retrieveGeneric",
              "optional": false,
              "range": [
                552,
                567
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 33
                },
                "start": {
                  "column": 4,
                  "line": 33
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
                  "line": 33
                },
                "start": {
                  "column": 19,
                  "line": 33
                }
              },
              "range": [
                567,
                593
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                          "column": 39,
                          "line": 33
                        },
                        "start": {
                          "column": 31,
                          "line": 33
                        }
                      },
                      "range": [
                        579,
                        587
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          581,
                          587
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 33
                          },
                          "start": {
                            "column": 33,
                            "line": 33
                          }
                        }
                      }
                    },
                    "range": [
                      570,
                      587
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 33
                      },
                      "start": {
                        "column": 22,
                        "line": 33
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 33
                    },
                    "start": {
                      "column": 41,
                      "line": 33
                    }
                  },
                  "range": [
                    589,
                    593
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        592,
                        593
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 33
                        },
                        "start": {
                          "column": 44,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      592,
                      593
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 33
                      },
                      "start": {
                        "column": 44,
                        "line": 33
                      }
                    }
                  }
                },
                "range": [
                  569,
                  593
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 33
                  },
                  "start": {
                    "column": 21,
                    "line": 33
                  }
                }
              }
            },
            "range": [
              552,
              594
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "operateWithGeneric",
              "optional": false,
              "range": [
                599,
                617
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 34
                },
                "start": {
                  "column": 4,
                  "line": 34
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
                  "column": 46,
                  "line": 34
                },
                "start": {
                  "column": 22,
                  "line": 34
                }
              },
              "range": [
                617,
                641
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "generic",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 34
                        },
                        "start": {
                          "column": 32,
                          "line": 34
                        }
                      },
                      "range": [
                        627,
                        630
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            629,
                            630
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 34
                            },
                            "start": {
                              "column": 34,
                              "line": 34
                            }
                          }
                        },
                        "range": [
                          629,
                          630
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 34
                          },
                          "start": {
                            "column": 34,
                            "line": 34
                          }
                        }
                      }
                    },
                    "range": [
                      620,
                      630
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 34
                      },
                      "start": {
                        "column": 25,
                        "line": 34
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 34
                    },
                    "start": {
                      "column": 37,
                      "line": 34
                    }
                  },
                  "range": [
                    632,
                    641
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      635,
                      641
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 34
                      },
                      "start": {
                        "column": 40,
                        "line": 34
                      }
                    }
                  }
                },
                "range": [
                  619,
                  641
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 34
                  },
                  "start": {
                    "column": 24,
                    "line": 34
                  }
                }
              }
            },
            "range": [
              599,
              641
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 25,
            "line": 32
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyInterface",
        "optional": false,
        "range": [
          531,
          542
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 32
          },
          "start": {
            "column": 10,
            "line": 32
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 24,
            "line": 32
          },
          "start": {
            "column": 21,
            "line": 32
          }
        },
        "range": [
          542,
          545
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
                543,
                544
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 32
                },
                "start": {
                  "column": 22,
                  "line": 32
                }
              }
            },
            "out": false,
            "range": [
              543,
              544
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 32
              },
              "start": {
                "column": 22,
                "line": 32
              }
            }
          }
        ]
      },
      "range": [
        521,
        643
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 32
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
            "name": "inferTypeFn",
            "optional": false,
            "range": [
              651,
              662
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 37
              },
              "start": {
                "column": 6,
                "line": 37
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "generic",
              "optional": false,
              "range": [
                697,
                704
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 37
                },
                "start": {
                  "column": 52,
                  "line": 37
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
                "name": "generic",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 37
                    },
                    "start": {
                      "column": 31,
                      "line": 37
                    }
                  },
                  "range": [
                    676,
                    692
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        689,
                        692
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
                              690,
                              691
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 37
                              },
                              "start": {
                                "column": 45,
                                "line": 37
                              }
                            }
                          },
                          "range": [
                            690,
                            691
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 37
                            },
                            "start": {
                              "column": 45,
                              "line": 37
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 37
                        },
                        "start": {
                          "column": 44,
                          "line": 37
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyInterface",
                      "optional": false,
                      "range": [
                        678,
                        689
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 37
                        },
                        "start": {
                          "column": 33,
                          "line": 37
                        }
                      }
                    },
                    "range": [
                      678,
                      692
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 37
                      },
                      "start": {
                        "column": 33,
                        "line": 37
                      }
                    }
                  }
                },
                "range": [
                  669,
                  692
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 37
                  },
                  "start": {
                    "column": 24,
                    "line": 37
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 37
                },
                "start": {
                  "column": 20,
                  "line": 37
                }
              },
              "range": [
                665,
                668
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
                      666,
                      667
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 37
                      },
                      "start": {
                        "column": 21,
                        "line": 37
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    666,
                    667
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 37
                    },
                    "start": {
                      "column": 21,
                      "line": 37
                    }
                  }
                }
              ]
            },
            "range": [
              665,
              704
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 37
              },
              "start": {
                "column": 20,
                "line": 37
              }
            }
          },
          "range": [
            651,
            704
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 37
            },
            "start": {
              "column": 6,
              "line": 37
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        645,
        705
      ],
      "loc": {
        "end": {
          "column": 60,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 37
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
            "name": "myGeneric",
            "optional": false,
            "range": [
              713,
              722
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 39
              },
              "start": {
                "column": 6,
                "line": 39
              }
            }
          },
          "init": {
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
                      "name": "retrieveGeneric",
                      "optional": false,
                      "range": [
                        743,
                        758
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 40
                        },
                        "start": {
                          "column": 4,
                          "line": 40
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
                        "type": "Literal",
                        "raw": "5",
                        "value": 5,
                        "range": [
                          773,
                          774
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 40
                          },
                          "start": {
                            "column": 34,
                            "line": 40
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
                          "name": "parameter",
                          "optional": false,
                          "range": [
                            760,
                            769
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 40
                            },
                            "start": {
                              "column": 21,
                              "line": 40
                            }
                          }
                        }
                      ],
                      "range": [
                        760,
                        774
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 40
                        },
                        "start": {
                          "column": 21,
                          "line": 40
                        }
                      }
                    },
                    "range": [
                      743,
                      774
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 40
                      },
                      "start": {
                        "column": 4,
                        "line": 40
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "operateWithGeneric",
                      "optional": false,
                      "range": [
                        780,
                        798
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 41
                        },
                        "start": {
                          "column": 4,
                          "line": 41
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
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "generic",
                            "optional": false,
                            "range": [
                              811,
                              818
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 41
                              },
                              "start": {
                                "column": 35,
                                "line": 41
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
                              819,
                              826
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 41
                              },
                              "start": {
                                "column": 43,
                                "line": 41
                              }
                            }
                          },
                          "range": [
                            811,
                            826
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 41
                            },
                            "start": {
                              "column": 35,
                              "line": 41
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          811,
                          828
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 41
                          },
                          "start": {
                            "column": 35,
                            "line": 41
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
                          "name": "generic",
                          "optional": false,
                          "range": [
                            800,
                            807
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 41
                            },
                            "start": {
                              "column": 24,
                              "line": 41
                            }
                          }
                        }
                      ],
                      "range": [
                        800,
                        828
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 41
                        },
                        "start": {
                          "column": 24,
                          "line": 41
                        }
                      }
                    },
                    "range": [
                      780,
                      828
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 41
                      },
                      "start": {
                        "column": 4,
                        "line": 41
                      }
                    }
                  }
                ],
                "range": [
                  737,
                  830
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 42
                  },
                  "start": {
                    "column": 30,
                    "line": 39
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "inferTypeFn",
              "optional": false,
              "range": [
                725,
                736
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 39
                },
                "start": {
                  "column": 18,
                  "line": 39
                }
              }
            },
            "optional": false,
            "range": [
              725,
              831
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 42
              },
              "start": {
                "column": 18,
                "line": 39
              }
            }
          },
          "range": [
            713,
            831
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 42
            },
            "start": {
              "column": 6,
              "line": 39
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        707,
        832
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 39
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          914,
          917
        ],
        "loc": {
          "end": {
            "column": 66,
            "line": 46
          },
          "start": {
            "column": 63,
            "line": 46
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "make",
        "optional": false,
        "range": [
          860,
          864
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 46
          },
          "start": {
            "column": 9,
            "line": 46
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 61,
                "line": 46
              },
              "start": {
                "column": 18,
                "line": 46
              }
            },
            "range": [
              869,
              912
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
                    "name": "mutations",
                    "optional": false,
                    "range": [
                      873,
                      882
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 46
                      },
                      "start": {
                        "column": 22,
                        "line": 46
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
                        "column": 34,
                        "line": 46
                      },
                      "start": {
                        "column": 31,
                        "line": 46
                      }
                    },
                    "range": [
                      882,
                      885
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "M",
                        "optional": false,
                        "range": [
                          884,
                          885
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 46
                          },
                          "start": {
                            "column": 33,
                            "line": 46
                          }
                        }
                      },
                      "range": [
                        884,
                        885
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 46
                        },
                        "start": {
                          "column": 33,
                          "line": 46
                        }
                      }
                    }
                  },
                  "range": [
                    873,
                    886
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 46
                    },
                    "start": {
                      "column": 22,
                      "line": 46
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "action",
                    "optional": false,
                    "range": [
                      888,
                      894
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 46
                      },
                      "start": {
                        "column": 37,
                        "line": 46
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
                        "column": 59,
                        "line": 46
                      },
                      "start": {
                        "column": 43,
                        "line": 46
                      }
                    },
                    "range": [
                      894,
                      910
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                                "column": 50,
                                "line": 46
                              },
                              "start": {
                                "column": 47,
                                "line": 46
                              }
                            },
                            "range": [
                              898,
                              901
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "M",
                                "optional": false,
                                "range": [
                                  900,
                                  901
                                ],
                                "loc": {
                                  "end": {
                                    "column": 50,
                                    "line": 46
                                  },
                                  "start": {
                                    "column": 49,
                                    "line": 46
                                  }
                                }
                              },
                              "range": [
                                900,
                                901
                              ],
                              "loc": {
                                "end": {
                                  "column": 50,
                                  "line": 46
                                },
                                "start": {
                                  "column": 49,
                                  "line": 46
                                }
                              }
                            }
                          },
                          "range": [
                            897,
                            901
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 46
                            },
                            "start": {
                              "column": 46,
                              "line": 46
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 46
                          },
                          "start": {
                            "column": 52,
                            "line": 46
                          }
                        },
                        "range": [
                          903,
                          910
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            906,
                            910
                          ],
                          "loc": {
                            "end": {
                              "column": 59,
                              "line": 46
                            },
                            "start": {
                              "column": 55,
                              "line": 46
                            }
                          }
                        }
                      },
                      "range": [
                        896,
                        910
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 46
                        },
                        "start": {
                          "column": 45,
                          "line": 46
                        }
                      }
                    }
                  },
                  "range": [
                    888,
                    910
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 46
                    },
                    "start": {
                      "column": 37,
                      "line": 46
                    }
                  }
                }
              ],
              "range": [
                871,
                912
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 46
                },
                "start": {
                  "column": 20,
                  "line": 46
                }
              }
            }
          },
          "range": [
            868,
            912
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 46
            },
            "start": {
              "column": 17,
              "line": 46
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 16,
            "line": 46
          },
          "start": {
            "column": 13,
            "line": 46
          }
        },
        "range": [
          864,
          867
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "range": [
                865,
                866
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 46
                },
                "start": {
                  "column": 14,
                  "line": 46
                }
              }
            },
            "out": false,
            "range": [
              865,
              866
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 46
              },
              "start": {
                "column": 14,
                "line": 46
              }
            }
          }
        ]
      },
      "range": [
        851,
        917
      ],
      "loc": {
        "end": {
          "column": 66,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 46
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
                  "name": "mutations",
                  "optional": false,
                  "range": [
                    929,
                    938
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 49
                    },
                    "start": {
                      "column": 3,
                      "line": 49
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
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
                          949,
                          952
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 50
                          },
                          "start": {
                            "column": 7,
                            "line": 50
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
                          952,
                          958
                        ],
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "range": [
                            955,
                            958
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 50
                            },
                            "start": {
                              "column": 13,
                              "line": 50
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
                            "column": 16,
                            "line": 50
                          },
                          "start": {
                            "column": 10,
                            "line": 50
                          }
                        }
                      },
                      "range": [
                        949,
                        958
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 50
                        },
                        "start": {
                          "column": 7,
                          "line": 50
                        }
                      }
                    }
                  ],
                  "range": [
                    940,
                    963
                  ],
                  "loc": {
                    "end": {
                      "column": 4,
                      "line": 51
                    },
                    "start": {
                      "column": 14,
                      "line": 49
                    }
                  }
                },
                "range": [
                  929,
                  963
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 51
                  },
                  "start": {
                    "column": 3,
                    "line": 49
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "action",
                  "optional": false,
                  "range": [
                    968,
                    974
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 52
                    },
                    "start": {
                      "column": 3,
                      "line": 52
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "range": [
                                985,
                                986
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 52
                                },
                                "start": {
                                  "column": 20,
                                  "line": 52
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
                                987,
                                990
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 52
                                },
                                "start": {
                                  "column": 22,
                                  "line": 52
                                }
                              }
                            },
                            "range": [
                              985,
                              990
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 52
                              },
                              "start": {
                                "column": 20,
                                "line": 52
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            985,
                            992
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 52
                            },
                            "start": {
                              "column": 20,
                              "line": 52
                            }
                          }
                        },
                        "range": [
                          985,
                          992
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 52
                          },
                          "start": {
                            "column": 20,
                            "line": 52
                          }
                        }
                      }
                    ],
                    "range": [
                      983,
                      994
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 52
                      },
                      "start": {
                        "column": 18,
                        "line": 52
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
                      "name": "a",
                      "optional": false,
                      "range": [
                        977,
                        978
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 52
                        },
                        "start": {
                          "column": 12,
                          "line": 52
                        }
                      }
                    }
                  ],
                  "range": [
                    976,
                    994
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 52
                    },
                    "start": {
                      "column": 11,
                      "line": 52
                    }
                  }
                },
                "range": [
                  968,
                  994
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 52
                  },
                  "start": {
                    "column": 3,
                    "line": 52
                  }
                }
              }
            ],
            "range": [
              924,
              996
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 53
              },
              "start": {
                "column": 5,
                "line": 48
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "make",
          "optional": false,
          "range": [
            919,
            923
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 48
            },
            "start": {
              "column": 0,
              "line": 48
            }
          }
        },
        "optional": false,
        "range": [
          919,
          997
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 53
          },
          "start": {
            "column": 0,
            "line": 48
          }
        }
      },
      "range": [
        919,
        998
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 48
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          1039,
          1042
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 57
          },
          "start": {
            "column": 17,
            "line": 57
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 60,
                "line": 57
              },
              "start": {
                "column": 31,
                "line": 57
              }
            },
            "range": [
              1053,
              1082
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      1057,
                      1058
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 57
                      },
                      "start": {
                        "column": 35,
                        "line": 57
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
                        "column": 39,
                        "line": 57
                      },
                      "start": {
                        "column": 36,
                        "line": 57
                      }
                    },
                    "range": [
                      1058,
                      1061
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          1060,
                          1061
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 57
                          },
                          "start": {
                            "column": 38,
                            "line": 57
                          }
                        }
                      },
                      "range": [
                        1060,
                        1061
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 57
                        },
                        "start": {
                          "column": 38,
                          "line": 57
                        }
                      }
                    }
                  },
                  "range": [
                    1057,
                    1062
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 57
                    },
                    "start": {
                      "column": 35,
                      "line": 57
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      1063,
                      1064
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 57
                      },
                      "start": {
                        "column": 41,
                        "line": 57
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
                        "column": 58,
                        "line": 57
                      },
                      "start": {
                        "column": 42,
                        "line": 57
                      }
                    },
                    "range": [
                      1064,
                      1080
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 57
                              },
                              "start": {
                                "column": 46,
                                "line": 57
                              }
                            },
                            "range": [
                              1068,
                              1071
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "range": [
                                  1070,
                                  1071
                                ],
                                "loc": {
                                  "end": {
                                    "column": 49,
                                    "line": 57
                                  },
                                  "start": {
                                    "column": 48,
                                    "line": 57
                                  }
                                }
                              },
                              "range": [
                                1070,
                                1071
                              ],
                              "loc": {
                                "end": {
                                  "column": 49,
                                  "line": 57
                                },
                                "start": {
                                  "column": 48,
                                  "line": 57
                                }
                              }
                            }
                          },
                          "range": [
                            1067,
                            1071
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 57
                            },
                            "start": {
                              "column": 45,
                              "line": 57
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 57
                          },
                          "start": {
                            "column": 51,
                            "line": 57
                          }
                        },
                        "range": [
                          1073,
                          1080
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            1076,
                            1080
                          ],
                          "loc": {
                            "end": {
                              "column": 58,
                              "line": 57
                            },
                            "start": {
                              "column": 54,
                              "line": 57
                            }
                          }
                        }
                      },
                      "range": [
                        1066,
                        1080
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 57
                        },
                        "start": {
                          "column": 44,
                          "line": 57
                        }
                      }
                    }
                  },
                  "range": [
                    1063,
                    1080
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 57
                    },
                    "start": {
                      "column": 41,
                      "line": 57
                    }
                  }
                }
              ],
              "range": [
                1055,
                1082
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 57
                },
                "start": {
                  "column": 33,
                  "line": 57
                }
              }
            }
          },
          "range": [
            1046,
            1082
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 57
            },
            "start": {
              "column": 24,
              "line": 57
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 67,
            "line": 57
          },
          "start": {
            "column": 61,
            "line": 57
          }
        },
        "range": [
          1083,
          1089
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            1085,
            1089
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 57
            },
            "start": {
              "column": 63,
              "line": 57
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 57
          },
          "start": {
            "column": 20,
            "line": 57
          }
        },
        "range": [
          1042,
          1045
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                1043,
                1044
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 57
                },
                "start": {
                  "column": 21,
                  "line": 57
                }
              }
            },
            "out": false,
            "range": [
              1043,
              1044
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 57
              },
              "start": {
                "column": 21,
                "line": 57
              }
            }
          }
        ]
      },
      "range": [
        1022,
        1090
      ],
      "loc": {
        "end": {
          "column": 68,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 57
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
                  "name": "a",
                  "optional": false,
                  "range": [
                    1102,
                    1103
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 60
                    },
                    "start": {
                      "column": 4,
                      "line": 60
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "raw": "42",
                          "value": 42,
                          "range": [
                            1120,
                            1122
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 60
                            },
                            "start": {
                              "column": 22,
                              "line": 60
                            }
                          }
                        },
                        "range": [
                          1113,
                          1122
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 60
                          },
                          "start": {
                            "column": 15,
                            "line": 60
                          }
                        }
                      }
                    ],
                    "range": [
                      1111,
                      1124
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 60
                      },
                      "start": {
                        "column": 13,
                        "line": 60
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    1105,
                    1124
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 60
                    },
                    "start": {
                      "column": 7,
                      "line": 60
                    }
                  }
                },
                "range": [
                  1102,
                  1124
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 60
                  },
                  "start": {
                    "column": 4,
                    "line": 60
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    1130,
                    1131
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 61
                    },
                    "start": {
                      "column": 4,
                      "line": 61
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
                    1131,
                    1137
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      1135,
                      1137
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 61
                      },
                      "start": {
                        "column": 9,
                        "line": 61
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
                      "name": "a",
                      "optional": false,
                      "range": [
                        1132,
                        1133
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 61
                        },
                        "start": {
                          "column": 6,
                          "line": 61
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 61
                    },
                    "start": {
                      "column": 5,
                      "line": 61
                    }
                  }
                },
                "range": [
                  1130,
                  1137
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 61
                  },
                  "start": {
                    "column": 4,
                    "line": 61
                  }
                }
              }
            ],
            "range": [
              1096,
              1140
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 62
              },
              "start": {
                "column": 4,
                "line": 59
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
            1092,
            1095
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 59
            },
            "start": {
              "column": 0,
              "line": 59
            }
          }
        },
        "optional": false,
        "range": [
          1092,
          1141
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 62
          },
          "start": {
            "column": 0,
            "line": 59
          }
        }
      },
      "range": [
        1092,
        1142
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 62
        },
        "start": {
          "column": 0,
          "line": 59
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
                  "name": "a",
                  "optional": false,
                  "range": [
                    1154,
                    1155
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 65
                    },
                    "start": {
                      "column": 4,
                      "line": 65
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "raw": "42",
                          "value": 42,
                          "range": [
                            1178,
                            1180
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 65
                            },
                            "start": {
                              "column": 28,
                              "line": 65
                            }
                          }
                        },
                        "range": [
                          1171,
                          1180
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 65
                          },
                          "start": {
                            "column": 21,
                            "line": 65
                          }
                        }
                      }
                    ],
                    "range": [
                      1169,
                      1182
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 65
                      },
                      "start": {
                        "column": 19,
                        "line": 65
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    1157,
                    1182
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 65
                    },
                    "start": {
                      "column": 7,
                      "line": 65
                    }
                  }
                },
                "range": [
                  1154,
                  1182
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 65
                  },
                  "start": {
                    "column": 4,
                    "line": 65
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    1188,
                    1189
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 66
                    },
                    "start": {
                      "column": 4,
                      "line": 66
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
                    1189,
                    1195
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      1193,
                      1195
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 66
                      },
                      "start": {
                        "column": 9,
                        "line": 66
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
                      "name": "a",
                      "optional": false,
                      "range": [
                        1190,
                        1191
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 66
                        },
                        "start": {
                          "column": 6,
                          "line": 66
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 66
                    },
                    "start": {
                      "column": 5,
                      "line": 66
                    }
                  }
                },
                "range": [
                  1188,
                  1195
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 66
                  },
                  "start": {
                    "column": 4,
                    "line": 66
                  }
                }
              }
            ],
            "range": [
              1148,
              1198
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 67
              },
              "start": {
                "column": 4,
                "line": 64
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
            1144,
            1147
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 64
            },
            "start": {
              "column": 0,
              "line": 64
            }
          }
        },
        "optional": false,
        "range": [
          1144,
          1199
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 67
          },
          "start": {
            "column": 0,
            "line": 64
          }
        }
      },
      "range": [
        1144,
        1200
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 67
        },
        "start": {
          "column": 0,
          "line": 64
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
                  "name": "a",
                  "optional": false,
                  "range": [
                    1212,
                    1213
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 70
                    },
                    "start": {
                      "column": 4,
                      "line": 70
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
                    1213,
                    1229
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "raw": "42",
                          "value": 42,
                          "range": [
                            1225,
                            1227
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 70
                            },
                            "start": {
                              "column": 17,
                              "line": 70
                            }
                          }
                        },
                        "range": [
                          1218,
                          1227
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 70
                          },
                          "start": {
                            "column": 10,
                            "line": 70
                          }
                        }
                      }
                    ],
                    "range": [
                      1216,
                      1229
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 70
                      },
                      "start": {
                        "column": 8,
                        "line": 70
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
                      "column": 21,
                      "line": 70
                    },
                    "start": {
                      "column": 5,
                      "line": 70
                    }
                  }
                },
                "range": [
                  1212,
                  1229
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 70
                  },
                  "start": {
                    "column": 4,
                    "line": 70
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    1235,
                    1236
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 71
                    },
                    "start": {
                      "column": 4,
                      "line": 71
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
                    1236,
                    1242
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      1240,
                      1242
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 71
                      },
                      "start": {
                        "column": 9,
                        "line": 71
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
                      "name": "a",
                      "optional": false,
                      "range": [
                        1237,
                        1238
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 71
                        },
                        "start": {
                          "column": 6,
                          "line": 71
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 71
                    },
                    "start": {
                      "column": 5,
                      "line": 71
                    }
                  }
                },
                "range": [
                  1235,
                  1242
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 71
                  },
                  "start": {
                    "column": 4,
                    "line": 71
                  }
                }
              }
            ],
            "range": [
              1206,
              1245
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 72
              },
              "start": {
                "column": 4,
                "line": 69
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
            1202,
            1205
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 69
            },
            "start": {
              "column": 0,
              "line": 69
            }
          }
        },
        "optional": false,
        "range": [
          1202,
          1246
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 72
          },
          "start": {
            "column": 0,
            "line": 69
          }
        }
      },
      "range": [
        1202,
        1247
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 72
        },
        "start": {
          "column": 0,
          "line": 69
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Chain",
        "optional": false,
        "range": [
          1276,
          1281
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 76
          },
          "start": {
            "column": 5,
            "line": 76
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                1298,
                1299
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 77
                },
                "start": {
                  "column": 4,
                  "line": 77
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 11,
                  "line": 77
                },
                "start": {
                  "column": 7,
                  "line": 77
                }
              },
              "range": [
                1301,
                1305
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R1",
                  "optional": false,
                  "range": [
                    1303,
                    1305
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 77
                    },
                    "start": {
                      "column": 9,
                      "line": 77
                    }
                  }
                },
                "range": [
                  1303,
                  1305
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 77
                  },
                  "start": {
                    "column": 9,
                    "line": 77
                  }
                }
              }
            },
            "static": false,
            "range": [
              1298,
              1306
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 77
              },
              "start": {
                "column": 4,
                "line": 77
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                1311,
                1312
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 78
                },
                "start": {
                  "column": 4,
                  "line": 78
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 78
                    },
                    "start": {
                      "column": 7,
                      "line": 78
                    }
                  },
                  "range": [
                    1314,
                    1318
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R1",
                      "optional": false,
                      "range": [
                        1316,
                        1318
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 78
                        },
                        "start": {
                          "column": 9,
                          "line": 78
                        }
                      }
                    },
                    "range": [
                      1316,
                      1318
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 78
                      },
                      "start": {
                        "column": 9,
                        "line": 78
                      }
                    }
                  }
                },
                "range": [
                  1313,
                  1318
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 78
                  },
                  "start": {
                    "column": 6,
                    "line": 78
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 16,
                  "line": 78
                },
                "start": {
                  "column": 12,
                  "line": 78
                }
              },
              "range": [
                1319,
                1323
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R2",
                  "optional": false,
                  "range": [
                    1321,
                    1323
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 78
                    },
                    "start": {
                      "column": 14,
                      "line": 78
                    }
                  }
                },
                "range": [
                  1321,
                  1323
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 78
                  },
                  "start": {
                    "column": 14,
                    "line": 78
                  }
                }
              }
            },
            "static": false,
            "range": [
              1311,
              1324
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 78
              },
              "start": {
                "column": 4,
                "line": 78
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "range": [
                1329,
                1330
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 79
                },
                "start": {
                  "column": 4,
                  "line": 79
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 79
                    },
                    "start": {
                      "column": 7,
                      "line": 79
                    }
                  },
                  "range": [
                    1332,
                    1336
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R2",
                      "optional": false,
                      "range": [
                        1334,
                        1336
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 79
                        },
                        "start": {
                          "column": 9,
                          "line": 79
                        }
                      }
                    },
                    "range": [
                      1334,
                      1336
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 79
                      },
                      "start": {
                        "column": 9,
                        "line": 79
                      }
                    }
                  }
                },
                "range": [
                  1331,
                  1336
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 79
                  },
                  "start": {
                    "column": 6,
                    "line": 79
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 79
                },
                "start": {
                  "column": 12,
                  "line": 79
                }
              },
              "range": [
                1337,
                1343
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  1339,
                  1343
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 79
                  },
                  "start": {
                    "column": 14,
                    "line": 79
                  }
                }
              }
            },
            "static": false,
            "range": [
              1329,
              1344
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 79
              },
              "start": {
                "column": 4,
                "line": 79
              }
            }
          }
        ],
        "range": [
          1292,
          1346
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 80
          },
          "start": {
            "column": 21,
            "line": 76
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 76
          },
          "start": {
            "column": 10,
            "line": 76
          }
        },
        "range": [
          1281,
          1289
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R1",
              "optional": false,
              "range": [
                1282,
                1284
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 76
                },
                "start": {
                  "column": 11,
                  "line": 76
                }
              }
            },
            "out": false,
            "range": [
              1282,
              1284
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 76
              },
              "start": {
                "column": 11,
                "line": 76
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
              "name": "R2",
              "optional": false,
              "range": [
                1286,
                1288
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 76
                },
                "start": {
                  "column": 15,
                  "line": 76
                }
              }
            },
            "out": false,
            "range": [
              1286,
              1288
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 76
              },
              "start": {
                "column": 15,
                "line": 76
              }
            }
          }
        ]
      },
      "range": [
        1271,
        1347
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 80
        },
        "start": {
          "column": 0,
          "line": 76
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          1391,
          1393
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 82
          },
          "start": {
            "column": 42,
            "line": 82
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "range": [
          1358,
          1362
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 82
          },
          "start": {
            "column": 9,
            "line": 82
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 40,
                "line": 82
              },
              "start": {
                "column": 25,
                "line": 82
              }
            },
            "range": [
              1374,
              1389
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1381,
                  1389
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R1",
                      "optional": false,
                      "range": [
                        1382,
                        1384
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 82
                        },
                        "start": {
                          "column": 33,
                          "line": 82
                        }
                      }
                    },
                    "range": [
                      1382,
                      1384
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 82
                      },
                      "start": {
                        "column": 33,
                        "line": 82
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R2",
                      "optional": false,
                      "range": [
                        1386,
                        1388
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 82
                        },
                        "start": {
                          "column": 37,
                          "line": 82
                        }
                      }
                    },
                    "range": [
                      1386,
                      1388
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 82
                      },
                      "start": {
                        "column": 37,
                        "line": 82
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 82
                  },
                  "start": {
                    "column": 32,
                    "line": 82
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Chain",
                "optional": false,
                "range": [
                  1376,
                  1381
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 82
                  },
                  "start": {
                    "column": 27,
                    "line": 82
                  }
                }
              },
              "range": [
                1376,
                1389
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 82
                },
                "start": {
                  "column": 27,
                  "line": 82
                }
              }
            }
          },
          "range": [
            1371,
            1389
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 82
            },
            "start": {
              "column": 22,
              "line": 82
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 21,
            "line": 82
          },
          "start": {
            "column": 13,
            "line": 82
          }
        },
        "range": [
          1362,
          1370
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R1",
              "optional": false,
              "range": [
                1363,
                1365
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 82
                },
                "start": {
                  "column": 14,
                  "line": 82
                }
              }
            },
            "out": false,
            "range": [
              1363,
              1365
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 82
              },
              "start": {
                "column": 14,
                "line": 82
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
              "name": "R2",
              "optional": false,
              "range": [
                1367,
                1369
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 82
                },
                "start": {
                  "column": 18,
                  "line": 82
                }
              }
            },
            "out": false,
            "range": [
              1367,
              1369
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 82
              },
              "start": {
                "column": 18,
                "line": 82
              }
            }
          }
        ]
      },
      "range": [
        1349,
        1393
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 82
        },
        "start": {
          "column": 0,
          "line": 82
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
                  "name": "a",
                  "optional": false,
                  "range": [
                    1406,
                    1407
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 85
                    },
                    "start": {
                      "column": 4,
                      "line": 85
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
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      1415,
                      1416
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 85
                      },
                      "start": {
                        "column": 13,
                        "line": 85
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    1409,
                    1416
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 85
                    },
                    "start": {
                      "column": 7,
                      "line": 85
                    }
                  }
                },
                "range": [
                  1406,
                  1416
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 85
                  },
                  "start": {
                    "column": 4,
                    "line": 85
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    1422,
                    1423
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 86
                    },
                    "start": {
                      "column": 4,
                      "line": 86
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
                    "type": "Literal",
                    "raw": "'a'",
                    "value": "a",
                    "range": [
                      1432,
                      1435
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 86
                      },
                      "start": {
                        "column": 14,
                        "line": 86
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
                      "name": "a",
                      "optional": false,
                      "range": [
                        1426,
                        1427
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 86
                        },
                        "start": {
                          "column": 8,
                          "line": 86
                        }
                      }
                    }
                  ],
                  "range": [
                    1425,
                    1435
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 86
                    },
                    "start": {
                      "column": 7,
                      "line": 86
                    }
                  }
                },
                "range": [
                  1422,
                  1435
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 86
                  },
                  "start": {
                    "column": 4,
                    "line": 86
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "range": [
                    1441,
                    1442
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 87
                    },
                    "start": {
                      "column": 4,
                      "line": 87
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 88
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 88
                                  }
                                },
                                "range": [
                                  1468,
                                  1476
                                ],
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "range": [
                                    1470,
                                    1476
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 88
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 88
                                    }
                                  }
                                }
                              },
                              "range": [
                                1467,
                                1476
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 88
                                },
                                "start": {
                                  "column": 14,
                                  "line": 88
                                }
                              }
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "range": [
                                1479,
                                1480
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 88
                                },
                                "start": {
                                  "column": 26,
                                  "line": 88
                                }
                              }
                            },
                            "range": [
                              1467,
                              1480
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 88
                              },
                              "start": {
                                "column": 14,
                                "line": 88
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "const",
                        "range": [
                          1461,
                          1481
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 88
                          },
                          "start": {
                            "column": 8,
                            "line": 88
                          }
                        }
                      }
                    ],
                    "range": [
                      1451,
                      1487
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 89
                      },
                      "start": {
                        "column": 14,
                        "line": 87
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
                      "name": "b",
                      "optional": false,
                      "range": [
                        1445,
                        1446
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 87
                        },
                        "start": {
                          "column": 8,
                          "line": 87
                        }
                      }
                    }
                  ],
                  "range": [
                    1444,
                    1487
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 89
                    },
                    "start": {
                      "column": 7,
                      "line": 87
                    }
                  }
                },
                "range": [
                  1441,
                  1487
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 89
                  },
                  "start": {
                    "column": 4,
                    "line": 87
                  }
                }
              }
            ],
            "range": [
              1400,
              1489
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 90
              },
              "start": {
                "column": 5,
                "line": 84
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "range": [
            1395,
            1399
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 84
            },
            "start": {
              "column": 0,
              "line": 84
            }
          }
        },
        "optional": false,
        "range": [
          1395,
          1490
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 90
          },
          "start": {
            "column": 0,
            "line": 84
          }
        }
      },
      "range": [
        1395,
        1491
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 90
        },
        "start": {
          "column": 0,
          "line": 84
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
                  "name": "a",
                  "optional": false,
                  "range": [
                    1504,
                    1505
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 93
                    },
                    "start": {
                      "column": 4,
                      "line": 93
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
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      1513,
                      1514
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 93
                      },
                      "start": {
                        "column": 13,
                        "line": 93
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    1507,
                    1514
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 93
                    },
                    "start": {
                      "column": 7,
                      "line": 93
                    }
                  }
                },
                "range": [
                  1504,
                  1514
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 93
                  },
                  "start": {
                    "column": 4,
                    "line": 93
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    1520,
                    1521
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 94
                    },
                    "start": {
                      "column": 4,
                      "line": 94
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      1530,
                      1531
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 94
                      },
                      "start": {
                        "column": 14,
                        "line": 94
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
                      "name": "a",
                      "optional": false,
                      "range": [
                        1524,
                        1525
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 94
                        },
                        "start": {
                          "column": 8,
                          "line": 94
                        }
                      }
                    }
                  ],
                  "range": [
                    1523,
                    1531
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 94
                    },
                    "start": {
                      "column": 7,
                      "line": 94
                    }
                  }
                },
                "range": [
                  1520,
                  1531
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 94
                  },
                  "start": {
                    "column": 4,
                    "line": 94
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "range": [
                    1537,
                    1538
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 95
                    },
                    "start": {
                      "column": 4,
                      "line": 95
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 96
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 96
                                  }
                                },
                                "range": [
                                  1564,
                                  1572
                                ],
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "range": [
                                    1566,
                                    1572
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 96
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 96
                                    }
                                  }
                                }
                              },
                              "range": [
                                1563,
                                1572
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 96
                                },
                                "start": {
                                  "column": 14,
                                  "line": 96
                                }
                              }
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "range": [
                                1575,
                                1576
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 96
                                },
                                "start": {
                                  "column": 26,
                                  "line": 96
                                }
                              }
                            },
                            "range": [
                              1563,
                              1576
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 96
                              },
                              "start": {
                                "column": 14,
                                "line": 96
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "const",
                        "range": [
                          1557,
                          1577
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 96
                          },
                          "start": {
                            "column": 8,
                            "line": 96
                          }
                        }
                      }
                    ],
                    "range": [
                      1547,
                      1583
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 97
                      },
                      "start": {
                        "column": 14,
                        "line": 95
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
                      "name": "b",
                      "optional": false,
                      "range": [
                        1541,
                        1542
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 95
                        },
                        "start": {
                          "column": 8,
                          "line": 95
                        }
                      }
                    }
                  ],
                  "range": [
                    1540,
                    1583
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 97
                    },
                    "start": {
                      "column": 7,
                      "line": 95
                    }
                  }
                },
                "range": [
                  1537,
                  1583
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 97
                  },
                  "start": {
                    "column": 4,
                    "line": 95
                  }
                }
              }
            ],
            "range": [
              1498,
              1585
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 98
              },
              "start": {
                "column": 5,
                "line": 92
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "range": [
            1493,
            1497
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 92
            },
            "start": {
              "column": 0,
              "line": 92
            }
          }
        },
        "optional": false,
        "range": [
          1493,
          1586
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 98
          },
          "start": {
            "column": 0,
            "line": 92
          }
        }
      },
      "range": [
        1493,
        1587
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 98
        },
        "start": {
          "column": 0,
          "line": 92
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1634,
          1659
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "range": [
                1647,
                1652
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 103
                },
                "start": {
                  "column": 11,
                  "line": 103
                }
              }
            },
            "optional": true,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 103
                },
                "start": {
                  "column": 17,
                  "line": 103
                }
              },
              "range": [
                1653,
                1656
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    1655,
                    1656
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 103
                    },
                    "start": {
                      "column": 19,
                      "line": 103
                    }
                  }
                },
                "range": [
                  1655,
                  1656
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 103
                  },
                  "start": {
                    "column": 19,
                    "line": 103
                  }
                }
              }
            },
            "value": null,
            "range": [
              1640,
              1657
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 103
              },
              "start": {
                "column": 4,
                "line": 103
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 104
          },
          "start": {
            "column": 23,
            "line": 102
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Wrapper",
        "optional": false,
        "range": [
          1617,
          1624
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 102
          },
          "start": {
            "column": 6,
            "line": 102
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 22,
            "line": 102
          },
          "start": {
            "column": 13,
            "line": 102
          }
        },
        "range": [
          1624,
          1633
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSAnyKeyword",
              "range": [
                1629,
                1632
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 102
                },
                "start": {
                  "column": 18,
                  "line": 102
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
                1625,
                1626
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 102
                },
                "start": {
                  "column": 14,
                  "line": 102
                }
              }
            },
            "out": false,
            "range": [
              1625,
              1632
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 102
              },
              "start": {
                "column": 14,
                "line": 102
              }
            }
          }
        ]
      },
      "range": [
        1611,
        1659
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 104
        },
        "start": {
          "column": 0,
          "line": 102
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WrappedMap",
        "optional": false,
        "range": [
          1666,
          1676
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 106
          },
          "start": {
            "column": 5,
            "line": 106
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1685,
            1702
          ],
          "params": [
            {
              "type": "TSStringKeyword",
              "range": [
                1686,
                1692
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 106
                },
                "start": {
                  "column": 25,
                  "line": 106
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Wrapper",
                "optional": false,
                "range": [
                  1694,
                  1701
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 106
                  },
                  "start": {
                    "column": 33,
                    "line": 106
                  }
                }
              },
              "range": [
                1694,
                1701
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 106
                },
                "start": {
                  "column": 33,
                  "line": 106
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 106
            },
            "start": {
              "column": 24,
              "line": 106
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "range": [
            1679,
            1685
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 106
            },
            "start": {
              "column": 18,
              "line": 106
            }
          }
        },
        "range": [
          1679,
          1702
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 106
          },
          "start": {
            "column": 18,
            "line": 106
          }
        }
      },
      "range": [
        1661,
        1703
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 106
        },
        "start": {
          "column": 0,
          "line": 106
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Unwrap",
        "optional": false,
        "range": [
          1709,
          1715
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 107
          },
          "start": {
            "column": 5,
            "line": 107
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "range": [
                1758,
                1759
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 108
                },
                "start": {
                  "column": 16,
                  "line": 108
                }
              }
            },
            "range": [
              1758,
              1759
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 108
              },
              "start": {
                "column": 16,
                "line": 108
              }
            }
          },
          "range": [
            1752,
            1759
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 108
            },
            "start": {
              "column": 10,
              "line": 108
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            1747,
            1748
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 108
            },
            "start": {
              "column": 5,
              "line": 108
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  1764,
                  1765
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 108
                  },
                  "start": {
                    "column": 22,
                    "line": 108
                  }
                }
              },
              "range": [
                1764,
                1765
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 108
                },
                "start": {
                  "column": 22,
                  "line": 108
                }
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "range": [
                  1762,
                  1763
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 108
                  },
                  "start": {
                    "column": 20,
                    "line": 108
                  }
                }
              },
              "range": [
                1762,
                1763
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 108
                },
                "start": {
                  "column": 20,
                  "line": 108
                }
              }
            },
            "range": [
              1762,
              1766
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 108
              },
              "start": {
                "column": 20,
                "line": 108
              }
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                1782,
                1791
              ],
              "params": [
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        1789,
                        1790
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 108
                        },
                        "start": {
                          "column": 47,
                          "line": 108
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      1789,
                      1790
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 108
                      },
                      "start": {
                        "column": 47,
                        "line": 108
                      }
                    }
                  },
                  "range": [
                    1783,
                    1790
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 108
                    },
                    "start": {
                      "column": 41,
                      "line": 108
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 108
                },
                "start": {
                  "column": 40,
                  "line": 108
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Wrapper",
              "optional": false,
              "range": [
                1775,
                1782
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 108
                },
                "start": {
                  "column": 33,
                  "line": 108
                }
              }
            },
            "range": [
              1775,
              1791
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 108
              },
              "start": {
                "column": 33,
                "line": 108
              }
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "range": [
              1798,
              1803
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 108
              },
              "start": {
                "column": 56,
                "line": 108
              }
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                1794,
                1795
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 108
                },
                "start": {
                  "column": 52,
                  "line": 108
                }
              }
            },
            "range": [
              1794,
              1795
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 108
              },
              "start": {
                "column": 52,
                "line": 108
              }
            }
          },
          "range": [
            1762,
            1803
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 108
            },
            "start": {
              "column": 20,
              "line": 108
            }
          }
        },
        "range": [
          1740,
          1806
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 109
          },
          "start": {
            "column": 36,
            "line": 107
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 33,
            "line": 107
          },
          "start": {
            "column": 11,
            "line": 107
          }
        },
        "range": [
          1715,
          1737
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
                "name": "WrappedMap",
                "optional": false,
                "range": [
                  1726,
                  1736
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 107
                  },
                  "start": {
                    "column": 22,
                    "line": 107
                  }
                }
              },
              "range": [
                1726,
                1736
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 107
                },
                "start": {
                  "column": 22,
                  "line": 107
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "range": [
                1716,
                1717
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 107
                },
                "start": {
                  "column": 12,
                  "line": 107
                }
              }
            },
            "out": false,
            "range": [
              1716,
              1736
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 107
              },
              "start": {
                "column": 12,
                "line": 107
              }
            }
          }
        ]
      },
      "range": [
        1704,
        1807
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 109
        },
        "start": {
          "column": 0,
          "line": 107
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MappingComponent",
        "optional": false,
        "range": [
          1814,
          1830
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 111
          },
          "start": {
            "column": 5,
            "line": 111
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "setup",
              "optional": false,
              "range": [
                1883,
                1888
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 112
                },
                "start": {
                  "column": 4,
                  "line": 112
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 112
                },
                "start": {
                  "column": 11,
                  "line": 112
                }
              },
              "range": [
                1890,
                1917
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
                      "name": "inputs",
                      "optional": false,
                      "range": [
                        1894,
                        1900
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 112
                        },
                        "start": {
                          "column": 15,
                          "line": 112
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
                          "column": 24,
                          "line": 112
                        },
                        "start": {
                          "column": 21,
                          "line": 112
                        }
                      },
                      "range": [
                        1900,
                        1903
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "range": [
                            1902,
                            1903
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 112
                            },
                            "start": {
                              "column": 23,
                              "line": 112
                            }
                          }
                        },
                        "range": [
                          1902,
                          1903
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 112
                          },
                          "start": {
                            "column": 23,
                            "line": 112
                          }
                        }
                      }
                    },
                    "range": [
                      1894,
                      1904
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 112
                      },
                      "start": {
                        "column": 15,
                        "line": 112
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "outputs",
                      "optional": false,
                      "range": [
                        1905,
                        1912
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 112
                        },
                        "start": {
                          "column": 26,
                          "line": 112
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
                          "column": 36,
                          "line": 112
                        },
                        "start": {
                          "column": 33,
                          "line": 112
                        }
                      },
                      "range": [
                        1912,
                        1915
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "O",
                          "optional": false,
                          "range": [
                            1914,
                            1915
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 112
                            },
                            "start": {
                              "column": 35,
                              "line": 112
                            }
                          }
                        },
                        "range": [
                          1914,
                          1915
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 112
                          },
                          "start": {
                            "column": 35,
                            "line": 112
                          }
                        }
                      }
                    },
                    "range": [
                      1905,
                      1915
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 112
                      },
                      "start": {
                        "column": 26,
                        "line": 112
                      }
                    }
                  }
                ],
                "range": [
                  1892,
                  1917
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 112
                  },
                  "start": {
                    "column": 13,
                    "line": 112
                  }
                }
              }
            },
            "static": false,
            "range": [
              1883,
              1918
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 112
              },
              "start": {
                "column": 4,
                "line": 112
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
              "optional": false,
              "range": [
                1923,
                1926
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 113
                },
                "start": {
                  "column": 4,
                  "line": 113
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
                  "column": 42,
                  "line": 113
                },
                "start": {
                  "column": 8,
                  "line": 113
                }
              },
              "range": [
                1927,
                1961
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "inputs",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 113
                        },
                        "start": {
                          "column": 17,
                          "line": 113
                        }
                      },
                      "range": [
                        1936,
                        1947
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            1944,
                            1947
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "I",
                                "optional": false,
                                "range": [
                                  1945,
                                  1946
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 113
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 113
                                  }
                                }
                              },
                              "range": [
                                1945,
                                1946
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 113
                                },
                                "start": {
                                  "column": 26,
                                  "line": 113
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 113
                            },
                            "start": {
                              "column": 25,
                              "line": 113
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Unwrap",
                          "optional": false,
                          "range": [
                            1938,
                            1944
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 113
                            },
                            "start": {
                              "column": 19,
                              "line": 113
                            }
                          }
                        },
                        "range": [
                          1938,
                          1947
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 113
                          },
                          "start": {
                            "column": 19,
                            "line": 113
                          }
                        }
                      }
                    },
                    "range": [
                      1930,
                      1947
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 113
                      },
                      "start": {
                        "column": 11,
                        "line": 113
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 113
                    },
                    "start": {
                      "column": 30,
                      "line": 113
                    }
                  },
                  "range": [
                    1949,
                    1961
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1958,
                        1961
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "O",
                            "optional": false,
                            "range": [
                              1959,
                              1960
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 113
                              },
                              "start": {
                                "column": 40,
                                "line": 113
                              }
                            }
                          },
                          "range": [
                            1959,
                            1960
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 113
                            },
                            "start": {
                              "column": 40,
                              "line": 113
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 113
                        },
                        "start": {
                          "column": 39,
                          "line": 113
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Unwrap",
                      "optional": false,
                      "range": [
                        1952,
                        1958
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 113
                        },
                        "start": {
                          "column": 33,
                          "line": 113
                        }
                      }
                    },
                    "range": [
                      1952,
                      1961
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 113
                      },
                      "start": {
                        "column": 33,
                        "line": 113
                      }
                    }
                  }
                },
                "range": [
                  1929,
                  1961
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 113
                  },
                  "start": {
                    "column": 10,
                    "line": 113
                  }
                }
              }
            },
            "range": [
              1923,
              1962
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 113
              },
              "start": {
                "column": 4,
                "line": 113
              }
            }
          }
        ],
        "range": [
          1877,
          1964
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 114
          },
          "start": {
            "column": 68,
            "line": 111
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 65,
            "line": 111
          },
          "start": {
            "column": 21,
            "line": 111
          }
        },
        "range": [
          1830,
          1874
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
                "name": "WrappedMap",
                "optional": false,
                "range": [
                  1841,
                  1851
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 111
                  },
                  "start": {
                    "column": 32,
                    "line": 111
                  }
                }
              },
              "range": [
                1841,
                1851
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 111
                },
                "start": {
                  "column": 32,
                  "line": 111
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "range": [
                1831,
                1832
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 111
                },
                "start": {
                  "column": 22,
                  "line": 111
                }
              }
            },
            "out": false,
            "range": [
              1831,
              1851
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 111
              },
              "start": {
                "column": 22,
                "line": 111
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "WrappedMap",
                "optional": false,
                "range": [
                  1863,
                  1873
                ],
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 111
                  },
                  "start": {
                    "column": 54,
                    "line": 111
                  }
                }
              },
              "range": [
                1863,
                1873
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 111
                },
                "start": {
                  "column": 54,
                  "line": 111
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "range": [
                1853,
                1854
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 111
                },
                "start": {
                  "column": 44,
                  "line": 111
                }
              }
            },
            "out": false,
            "range": [
              1853,
              1873
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 111
              },
              "start": {
                "column": 44,
                "line": 111
              }
            }
          }
        ]
      },
      "range": [
        1809,
        1965
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 114
        },
        "start": {
          "column": 0,
          "line": 111
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createMappingComponent",
        "optional": false,
        "range": [
          1984,
          2006
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 116
          },
          "start": {
            "column": 17,
            "line": 116
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "def",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 111,
                "line": 116
              },
              "start": {
                "column": 87,
                "line": 116
              }
            },
            "range": [
              2054,
              2078
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  2072,
                  2078
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "range": [
                        2073,
                        2074
                      ],
                      "loc": {
                        "end": {
                          "column": 107,
                          "line": 116
                        },
                        "start": {
                          "column": 106,
                          "line": 116
                        }
                      }
                    },
                    "range": [
                      2073,
                      2074
                    ],
                    "loc": {
                      "end": {
                        "column": 107,
                        "line": 116
                      },
                      "start": {
                        "column": 106,
                        "line": 116
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "range": [
                        2076,
                        2077
                      ],
                      "loc": {
                        "end": {
                          "column": 110,
                          "line": 116
                        },
                        "start": {
                          "column": 109,
                          "line": 116
                        }
                      }
                    },
                    "range": [
                      2076,
                      2077
                    ],
                    "loc": {
                      "end": {
                        "column": 110,
                        "line": 116
                      },
                      "start": {
                        "column": 109,
                        "line": 116
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 111,
                    "line": 116
                  },
                  "start": {
                    "column": 105,
                    "line": 116
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MappingComponent",
                "optional": false,
                "range": [
                  2056,
                  2072
                ],
                "loc": {
                  "end": {
                    "column": 105,
                    "line": 116
                  },
                  "start": {
                    "column": 89,
                    "line": 116
                  }
                }
              },
              "range": [
                2056,
                2078
              ],
              "loc": {
                "end": {
                  "column": 111,
                  "line": 116
                },
                "start": {
                  "column": 89,
                  "line": 116
                }
              }
            }
          },
          "range": [
            2051,
            2078
          ],
          "loc": {
            "end": {
              "column": 111,
              "line": 116
            },
            "start": {
              "column": 84,
              "line": 116
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 118,
            "line": 116
          },
          "start": {
            "column": 112,
            "line": 116
          }
        },
        "range": [
          2079,
          2085
        ],
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "range": [
            2081,
            2085
          ],
          "loc": {
            "end": {
              "column": 118,
              "line": 116
            },
            "start": {
              "column": 114,
              "line": 116
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 83,
            "line": 116
          },
          "start": {
            "column": 39,
            "line": 116
          }
        },
        "range": [
          2006,
          2050
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
                "name": "WrappedMap",
                "optional": false,
                "range": [
                  2017,
                  2027
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 116
                  },
                  "start": {
                    "column": 50,
                    "line": 116
                  }
                }
              },
              "range": [
                2017,
                2027
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 116
                },
                "start": {
                  "column": 50,
                  "line": 116
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "range": [
                2007,
                2008
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 116
                },
                "start": {
                  "column": 40,
                  "line": 116
                }
              }
            },
            "out": false,
            "range": [
              2007,
              2027
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 116
              },
              "start": {
                "column": 40,
                "line": 116
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "WrappedMap",
                "optional": false,
                "range": [
                  2039,
                  2049
                ],
                "loc": {
                  "end": {
                    "column": 82,
                    "line": 116
                  },
                  "start": {
                    "column": 72,
                    "line": 116
                  }
                }
              },
              "range": [
                2039,
                2049
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 116
                },
                "start": {
                  "column": 72,
                  "line": 116
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "range": [
                2029,
                2030
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 116
                },
                "start": {
                  "column": 62,
                  "line": 116
                }
              }
            },
            "out": false,
            "range": [
              2029,
              2049
            ],
            "loc": {
              "end": {
                "column": 82,
                "line": 116
              },
              "start": {
                "column": 62,
                "line": 116
              }
            }
          }
        ]
      },
      "range": [
        1967,
        2086
      ],
      "loc": {
        "end": {
          "column": 119,
          "line": 116
        },
        "start": {
          "column": 0,
          "line": 116
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
                  "name": "setup",
                  "optional": false,
                  "range": [
                    2117,
                    2122
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 119
                    },
                    "start": {
                      "column": 4,
                      "line": 119
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
                    2122,
                    2410
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "inputs",
                                "optional": false,
                                "range": [
                                  2156,
                                  2162
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 121
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 121
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "num",
                                      "optional": false,
                                      "range": [
                                        2182,
                                        2185
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 19,
                                          "line": 122
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 122
                                        }
                                      }
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "optional": false,
                                    "shorthand": false,
                                    "value": {
                                      "type": "NewExpression",
                                      "arguments": [],
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Wrapper",
                                        "optional": false,
                                        "range": [
                                          2191,
                                          2198
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 32,
                                            "line": 122
                                          },
                                          "start": {
                                            "column": 25,
                                            "line": 122
                                          }
                                        }
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "range": [
                                          2198,
                                          2206
                                        ],
                                        "params": [
                                          {
                                            "type": "TSNumberKeyword",
                                            "range": [
                                              2199,
                                              2205
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 39,
                                                "line": 122
                                              },
                                              "start": {
                                                "column": 33,
                                                "line": 122
                                              }
                                            }
                                          }
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 40,
                                            "line": 122
                                          },
                                          "start": {
                                            "column": 32,
                                            "line": 122
                                          }
                                        }
                                      },
                                      "range": [
                                        2187,
                                        2208
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 42,
                                          "line": 122
                                        },
                                        "start": {
                                          "column": 21,
                                          "line": 122
                                        }
                                      }
                                    },
                                    "range": [
                                      2182,
                                      2208
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 42,
                                        "line": 122
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 122
                                      }
                                    }
                                  },
                                  {
                                    "type": "Property",
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "str",
                                      "optional": false,
                                      "range": [
                                        2226,
                                        2229
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 19,
                                          "line": 123
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 123
                                        }
                                      }
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "optional": false,
                                    "shorthand": false,
                                    "value": {
                                      "type": "NewExpression",
                                      "arguments": [],
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Wrapper",
                                        "optional": false,
                                        "range": [
                                          2235,
                                          2242
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 32,
                                            "line": 123
                                          },
                                          "start": {
                                            "column": 25,
                                            "line": 123
                                          }
                                        }
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "range": [
                                          2242,
                                          2250
                                        ],
                                        "params": [
                                          {
                                            "type": "TSStringKeyword",
                                            "range": [
                                              2243,
                                              2249
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 39,
                                                "line": 123
                                              },
                                              "start": {
                                                "column": 33,
                                                "line": 123
                                              }
                                            }
                                          }
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 40,
                                            "line": 123
                                          },
                                          "start": {
                                            "column": 32,
                                            "line": 123
                                          }
                                        }
                                      },
                                      "range": [
                                        2231,
                                        2252
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 42,
                                          "line": 123
                                        },
                                        "start": {
                                          "column": 21,
                                          "line": 123
                                        }
                                      }
                                    },
                                    "range": [
                                      2226,
                                      2252
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 42,
                                        "line": 123
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 123
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  2164,
                                  2266
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 124
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 121
                                  }
                                }
                              },
                              "range": [
                                2156,
                                2266
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 124
                                },
                                "start": {
                                  "column": 12,
                                  "line": 121
                                }
                              }
                            },
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "outputs",
                                "optional": false,
                                "range": [
                                  2280,
                                  2287
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 125
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 125
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "bool",
                                      "optional": false,
                                      "range": [
                                        2307,
                                        2311
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 20,
                                          "line": 126
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 126
                                        }
                                      }
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "optional": false,
                                    "shorthand": false,
                                    "value": {
                                      "type": "NewExpression",
                                      "arguments": [],
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Wrapper",
                                        "optional": false,
                                        "range": [
                                          2317,
                                          2324
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 33,
                                            "line": 126
                                          },
                                          "start": {
                                            "column": 26,
                                            "line": 126
                                          }
                                        }
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "range": [
                                          2324,
                                          2333
                                        ],
                                        "params": [
                                          {
                                            "type": "TSBooleanKeyword",
                                            "range": [
                                              2325,
                                              2332
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 41,
                                                "line": 126
                                              },
                                              "start": {
                                                "column": 34,
                                                "line": 126
                                              }
                                            }
                                          }
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 42,
                                            "line": 126
                                          },
                                          "start": {
                                            "column": 33,
                                            "line": 126
                                          }
                                        }
                                      },
                                      "range": [
                                        2313,
                                        2335
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 44,
                                          "line": 126
                                        },
                                        "start": {
                                          "column": 22,
                                          "line": 126
                                        }
                                      }
                                    },
                                    "range": [
                                      2307,
                                      2335
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 44,
                                        "line": 126
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 126
                                      }
                                    }
                                  },
                                  {
                                    "type": "Property",
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "str",
                                      "optional": false,
                                      "range": [
                                        2353,
                                        2356
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 19,
                                          "line": 127
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 127
                                        }
                                      }
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "optional": false,
                                    "shorthand": false,
                                    "value": {
                                      "type": "NewExpression",
                                      "arguments": [],
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Wrapper",
                                        "optional": false,
                                        "range": [
                                          2362,
                                          2369
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 32,
                                            "line": 127
                                          },
                                          "start": {
                                            "column": 25,
                                            "line": 127
                                          }
                                        }
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "range": [
                                          2369,
                                          2377
                                        ],
                                        "params": [
                                          {
                                            "type": "TSStringKeyword",
                                            "range": [
                                              2370,
                                              2376
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 39,
                                                "line": 127
                                              },
                                              "start": {
                                                "column": 33,
                                                "line": 127
                                              }
                                            }
                                          }
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 40,
                                            "line": 127
                                          },
                                          "start": {
                                            "column": 32,
                                            "line": 127
                                          }
                                        }
                                      },
                                      "range": [
                                        2358,
                                        2379
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 42,
                                          "line": 127
                                        },
                                        "start": {
                                          "column": 21,
                                          "line": 127
                                        }
                                      }
                                    },
                                    "range": [
                                      2353,
                                      2379
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 42,
                                        "line": 127
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 127
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  2289,
                                  2393
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 128
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 125
                                  }
                                }
                              },
                              "range": [
                                2280,
                                2393
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 128
                                },
                                "start": {
                                  "column": 12,
                                  "line": 125
                                }
                              }
                            }
                          ],
                          "range": [
                            2142,
                            2403
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 129
                            },
                            "start": {
                              "column": 15,
                              "line": 120
                            }
                          }
                        },
                        "range": [
                          2135,
                          2404
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 129
                          },
                          "start": {
                            "column": 8,
                            "line": 120
                          }
                        }
                      }
                    ],
                    "range": [
                      2125,
                      2410
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 130
                      },
                      "start": {
                        "column": 12,
                        "line": 119
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
                      "line": 130
                    },
                    "start": {
                      "column": 9,
                      "line": 119
                    }
                  }
                },
                "range": [
                  2117,
                  2410
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 130
                  },
                  "start": {
                    "column": 4,
                    "line": 119
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "range": [
                    2416,
                    2419
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 131
                    },
                    "start": {
                      "column": 4,
                      "line": 131
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
                    2419,
                    2546
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bool",
                                "optional": false,
                                "range": [
                                  2459,
                                  2463
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 133
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 133
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "inputs",
                                  "optional": false,
                                  "range": [
                                    2465,
                                    2471
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 133
                                    },
                                    "start": {
                                      "column": 18,
                                      "line": 133
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "nonexistent",
                                  "optional": false,
                                  "range": [
                                    2472,
                                    2483
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 36,
                                      "line": 133
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 133
                                    }
                                  }
                                },
                                "range": [
                                  2465,
                                  2483
                                ],
                                "loc": {
                                  "end": {
                                    "column": 36,
                                    "line": 133
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 133
                                  }
                                }
                              },
                              "range": [
                                2459,
                                2483
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 133
                                },
                                "start": {
                                  "column": 12,
                                  "line": 133
                                }
                              }
                            },
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "str",
                                "optional": false,
                                "range": [
                                  2497,
                                  2500
                                ],
                                "loc": {
                                  "end": {
                                    "column": 15,
                                    "line": 134
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 134
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "inputs",
                                  "optional": false,
                                  "range": [
                                    2502,
                                    2508
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 134
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 134
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "num",
                                  "optional": false,
                                  "range": [
                                    2509,
                                    2512
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 27,
                                      "line": 134
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 134
                                    }
                                  }
                                },
                                "range": [
                                  2502,
                                  2512
                                ],
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 134
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 134
                                  }
                                }
                              },
                              "range": [
                                2497,
                                2512
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 134
                                },
                                "start": {
                                  "column": 12,
                                  "line": 134
                                }
                              }
                            }
                          ],
                          "range": [
                            2445,
                            2540
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 135
                            },
                            "start": {
                              "column": 15,
                              "line": 132
                            }
                          }
                        },
                        "range": [
                          2438,
                          2540
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 135
                          },
                          "start": {
                            "column": 8,
                            "line": 132
                          }
                        }
                      }
                    ],
                    "range": [
                      2428,
                      2546
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 136
                      },
                      "start": {
                        "column": 16,
                        "line": 131
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
                      "name": "inputs",
                      "optional": false,
                      "range": [
                        2420,
                        2426
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 131
                        },
                        "start": {
                          "column": 8,
                          "line": 131
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 136
                    },
                    "start": {
                      "column": 7,
                      "line": 131
                    }
                  }
                },
                "range": [
                  2416,
                  2546
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 136
                  },
                  "start": {
                    "column": 4,
                    "line": 131
                  }
                }
              }
            ],
            "range": [
              2111,
              2548
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 137
              },
              "start": {
                "column": 23,
                "line": 118
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "createMappingComponent",
          "optional": false,
          "range": [
            2088,
            2110
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 118
            },
            "start": {
              "column": 0,
              "line": 118
            }
          }
        },
        "optional": false,
        "range": [
          2088,
          2549
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 137
          },
          "start": {
            "column": 0,
            "line": 118
          }
        }
      },
      "range": [
        2088,
        2550
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 137
        },
        "start": {
          "column": 0,
          "line": 118
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          2653,
          2655
        ],
        "loc": {
          "end": {
            "column": 81,
            "line": 141
          },
          "start": {
            "column": 79,
            "line": 141
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "simplified",
        "optional": false,
        "range": [
          2583,
          2593
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 141
          },
          "start": {
            "column": 9,
            "line": 141
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 77,
                "line": 141
              },
              "start": {
                "column": 28,
                "line": 141
              }
            },
            "range": [
              2602,
              2651
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
                    "name": "generator",
                    "optional": false,
                    "range": [
                      2606,
                      2615
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 141
                      },
                      "start": {
                        "column": 32,
                        "line": 141
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
                        "column": 50,
                        "line": 141
                      },
                      "start": {
                        "column": 41,
                        "line": 141
                      }
                    },
                    "range": [
                      2615,
                      2624
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 141
                          },
                          "start": {
                            "column": 46,
                            "line": 141
                          }
                        },
                        "range": [
                          2620,
                          2624
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              2623,
                              2624
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 141
                              },
                              "start": {
                                "column": 49,
                                "line": 141
                              }
                            }
                          },
                          "range": [
                            2623,
                            2624
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 141
                            },
                            "start": {
                              "column": 49,
                              "line": 141
                            }
                          }
                        }
                      },
                      "range": [
                        2617,
                        2624
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 141
                        },
                        "start": {
                          "column": 43,
                          "line": 141
                        }
                      }
                    }
                  },
                  "range": [
                    2606,
                    2625
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 141
                    },
                    "start": {
                      "column": 32,
                      "line": 141
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "receiver",
                    "optional": false,
                    "range": [
                      2626,
                      2634
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 141
                      },
                      "start": {
                        "column": 52,
                        "line": 141
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
                        "column": 75,
                        "line": 141
                      },
                      "start": {
                        "column": 60,
                        "line": 141
                      }
                    },
                    "range": [
                      2634,
                      2649
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                                "column": 67,
                                "line": 141
                              },
                              "start": {
                                "column": 64,
                                "line": 141
                              }
                            },
                            "range": [
                              2638,
                              2641
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  2640,
                                  2641
                                ],
                                "loc": {
                                  "end": {
                                    "column": 67,
                                    "line": 141
                                  },
                                  "start": {
                                    "column": 66,
                                    "line": 141
                                  }
                                }
                              },
                              "range": [
                                2640,
                                2641
                              ],
                              "loc": {
                                "end": {
                                  "column": 67,
                                  "line": 141
                                },
                                "start": {
                                  "column": 66,
                                  "line": 141
                                }
                              }
                            }
                          },
                          "range": [
                            2637,
                            2641
                          ],
                          "loc": {
                            "end": {
                              "column": 67,
                              "line": 141
                            },
                            "start": {
                              "column": 63,
                              "line": 141
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 75,
                            "line": 141
                          },
                          "start": {
                            "column": 69,
                            "line": 141
                          }
                        },
                        "range": [
                          2643,
                          2649
                        ],
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "range": [
                            2646,
                            2649
                          ],
                          "loc": {
                            "end": {
                              "column": 75,
                              "line": 141
                            },
                            "start": {
                              "column": 72,
                              "line": 141
                            }
                          }
                        }
                      },
                      "range": [
                        2636,
                        2649
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 141
                        },
                        "start": {
                          "column": 62,
                          "line": 141
                        }
                      }
                    }
                  },
                  "range": [
                    2626,
                    2649
                  ],
                  "loc": {
                    "end": {
                      "column": 75,
                      "line": 141
                    },
                    "start": {
                      "column": 52,
                      "line": 141
                    }
                  }
                }
              ],
              "range": [
                2604,
                2651
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 141
                },
                "start": {
                  "column": 30,
                  "line": 141
                }
              }
            }
          },
          "range": [
            2597,
            2651
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 141
            },
            "start": {
              "column": 23,
              "line": 141
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 22,
            "line": 141
          },
          "start": {
            "column": 19,
            "line": 141
          }
        },
        "range": [
          2593,
          2596
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
                2594,
                2595
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 141
                },
                "start": {
                  "column": 20,
                  "line": 141
                }
              }
            },
            "out": false,
            "range": [
              2594,
              2595
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 141
              },
              "start": {
                "column": 20,
                "line": 141
              }
            }
          }
        ]
      },
      "range": [
        2574,
        2655
      ],
      "loc": {
        "end": {
          "column": 81,
          "line": 141
        },
        "start": {
          "column": 0,
          "line": 141
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          2743,
          2745
        ],
        "loc": {
          "end": {
            "column": 88,
            "line": 143
          },
          "start": {
            "column": 86,
            "line": 143
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whatIWant",
        "optional": false,
        "range": [
          2666,
          2675
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 143
          },
          "start": {
            "column": 9,
            "line": 143
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 84,
                "line": 143
              },
              "start": {
                "column": 27,
                "line": 143
              }
            },
            "range": [
              2684,
              2741
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
                    "name": "generator",
                    "optional": false,
                    "range": [
                      2688,
                      2697
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 143
                      },
                      "start": {
                        "column": 31,
                        "line": 143
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
                        "column": 57,
                        "line": 143
                      },
                      "start": {
                        "column": 40,
                        "line": 143
                      }
                    },
                    "range": [
                      2697,
                      2714
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bob",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 143
                              },
                              "start": {
                                "column": 46,
                                "line": 143
                              }
                            },
                            "range": [
                              2703,
                              2708
                            ],
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "range": [
                                2705,
                                2708
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 143
                                },
                                "start": {
                                  "column": 48,
                                  "line": 143
                                }
                              }
                            }
                          },
                          "range": [
                            2700,
                            2708
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 143
                            },
                            "start": {
                              "column": 43,
                              "line": 143
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 143
                          },
                          "start": {
                            "column": 53,
                            "line": 143
                          }
                        },
                        "range": [
                          2710,
                          2714
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              2713,
                              2714
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 143
                              },
                              "start": {
                                "column": 56,
                                "line": 143
                              }
                            }
                          },
                          "range": [
                            2713,
                            2714
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 143
                            },
                            "start": {
                              "column": 56,
                              "line": 143
                            }
                          }
                        }
                      },
                      "range": [
                        2699,
                        2714
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 143
                        },
                        "start": {
                          "column": 42,
                          "line": 143
                        }
                      }
                    }
                  },
                  "range": [
                    2688,
                    2715
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 143
                    },
                    "start": {
                      "column": 31,
                      "line": 143
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "receiver",
                    "optional": false,
                    "range": [
                      2716,
                      2724
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 143
                      },
                      "start": {
                        "column": 59,
                        "line": 143
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
                        "column": 82,
                        "line": 143
                      },
                      "start": {
                        "column": 67,
                        "line": 143
                      }
                    },
                    "range": [
                      2724,
                      2739
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                                "column": 74,
                                "line": 143
                              },
                              "start": {
                                "column": 71,
                                "line": 143
                              }
                            },
                            "range": [
                              2728,
                              2731
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  2730,
                                  2731
                                ],
                                "loc": {
                                  "end": {
                                    "column": 74,
                                    "line": 143
                                  },
                                  "start": {
                                    "column": 73,
                                    "line": 143
                                  }
                                }
                              },
                              "range": [
                                2730,
                                2731
                              ],
                              "loc": {
                                "end": {
                                  "column": 74,
                                  "line": 143
                                },
                                "start": {
                                  "column": 73,
                                  "line": 143
                                }
                              }
                            }
                          },
                          "range": [
                            2727,
                            2731
                          ],
                          "loc": {
                            "end": {
                              "column": 74,
                              "line": 143
                            },
                            "start": {
                              "column": 70,
                              "line": 143
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 82,
                            "line": 143
                          },
                          "start": {
                            "column": 76,
                            "line": 143
                          }
                        },
                        "range": [
                          2733,
                          2739
                        ],
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "range": [
                            2736,
                            2739
                          ],
                          "loc": {
                            "end": {
                              "column": 82,
                              "line": 143
                            },
                            "start": {
                              "column": 79,
                              "line": 143
                            }
                          }
                        }
                      },
                      "range": [
                        2726,
                        2739
                      ],
                      "loc": {
                        "end": {
                          "column": 82,
                          "line": 143
                        },
                        "start": {
                          "column": 69,
                          "line": 143
                        }
                      }
                    }
                  },
                  "range": [
                    2716,
                    2739
                  ],
                  "loc": {
                    "end": {
                      "column": 82,
                      "line": 143
                    },
                    "start": {
                      "column": 59,
                      "line": 143
                    }
                  }
                }
              ],
              "range": [
                2686,
                2741
              ],
              "loc": {
                "end": {
                  "column": 84,
                  "line": 143
                },
                "start": {
                  "column": 29,
                  "line": 143
                }
              }
            }
          },
          "range": [
            2679,
            2741
          ],
          "loc": {
            "end": {
              "column": 84,
              "line": 143
            },
            "start": {
              "column": 22,
              "line": 143
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 21,
            "line": 143
          },
          "start": {
            "column": 18,
            "line": 143
          }
        },
        "range": [
          2675,
          2678
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
                2676,
                2677
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 143
                },
                "start": {
                  "column": 19,
                  "line": 143
                }
              }
            },
            "out": false,
            "range": [
              2676,
              2677
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 143
              },
              "start": {
                "column": 19,
                "line": 143
              }
            }
          }
        ]
      },
      "range": [
        2657,
        2745
      ],
      "loc": {
        "end": {
          "column": 88,
          "line": 143
        },
        "start": {
          "column": 0,
          "line": 143
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          2822,
          2824
        ],
        "loc": {
          "end": {
            "column": 77,
            "line": 145
          },
          "start": {
            "column": 75,
            "line": 145
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nonObject",
        "optional": false,
        "range": [
          2756,
          2765
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 145
          },
          "start": {
            "column": 9,
            "line": 145
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "generator",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 48,
                "line": 145
              },
              "start": {
                "column": 31,
                "line": 145
              }
            },
            "range": [
              2778,
              2795
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bob",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 145
                      },
                      "start": {
                        "column": 37,
                        "line": 145
                      }
                    },
                    "range": [
                      2784,
                      2789
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        2786,
                        2789
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 145
                        },
                        "start": {
                          "column": 39,
                          "line": 145
                        }
                      }
                    }
                  },
                  "range": [
                    2781,
                    2789
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 145
                    },
                    "start": {
                      "column": 34,
                      "line": 145
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 145
                  },
                  "start": {
                    "column": 44,
                    "line": 145
                  }
                },
                "range": [
                  2791,
                  2795
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      2794,
                      2795
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 145
                      },
                      "start": {
                        "column": 47,
                        "line": 145
                      }
                    }
                  },
                  "range": [
                    2794,
                    2795
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 145
                    },
                    "start": {
                      "column": 47,
                      "line": 145
                    }
                  }
                }
              },
              "range": [
                2780,
                2795
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 145
                },
                "start": {
                  "column": 33,
                  "line": 145
                }
              }
            }
          },
          "range": [
            2769,
            2795
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 145
            },
            "start": {
              "column": 22,
              "line": 145
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "receiver",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 73,
                "line": 145
              },
              "start": {
                "column": 58,
                "line": 145
              }
            },
            "range": [
              2805,
              2820
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                        "column": 65,
                        "line": 145
                      },
                      "start": {
                        "column": 62,
                        "line": 145
                      }
                    },
                    "range": [
                      2809,
                      2812
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          2811,
                          2812
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 145
                          },
                          "start": {
                            "column": 64,
                            "line": 145
                          }
                        }
                      },
                      "range": [
                        2811,
                        2812
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 145
                        },
                        "start": {
                          "column": 64,
                          "line": 145
                        }
                      }
                    }
                  },
                  "range": [
                    2808,
                    2812
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 145
                    },
                    "start": {
                      "column": 61,
                      "line": 145
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 145
                  },
                  "start": {
                    "column": 67,
                    "line": 145
                  }
                },
                "range": [
                  2814,
                  2820
                ],
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "range": [
                    2817,
                    2820
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 145
                    },
                    "start": {
                      "column": 70,
                      "line": 145
                    }
                  }
                }
              },
              "range": [
                2807,
                2820
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 145
                },
                "start": {
                  "column": 60,
                  "line": 145
                }
              }
            }
          },
          "range": [
            2797,
            2820
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 145
            },
            "start": {
              "column": 50,
              "line": 145
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 21,
            "line": 145
          },
          "start": {
            "column": 18,
            "line": 145
          }
        },
        "range": [
          2765,
          2768
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
                2766,
                2767
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 145
                },
                "start": {
                  "column": 19,
                  "line": 145
                }
              }
            },
            "out": false,
            "range": [
              2766,
              2767
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 145
              },
              "start": {
                "column": 19,
                "line": 145
              }
            }
          }
        ]
      },
      "range": [
        2747,
        2824
      ],
      "loc": {
        "end": {
          "column": 77,
          "line": 145
        },
        "start": {
          "column": 0,
          "line": 145
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
                  "name": "generator",
                  "optional": false,
                  "range": [
                    2839,
                    2848
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 147
                    },
                    "start": {
                      "column": 13,
                      "line": 147
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
                    "type": "Literal",
                    "raw": "123",
                    "value": 123,
                    "range": [
                      2856,
                      2859
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 147
                      },
                      "start": {
                        "column": 30,
                        "line": 147
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    2850,
                    2859
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 147
                    },
                    "start": {
                      "column": 24,
                      "line": 147
                    }
                  }
                },
                "range": [
                  2839,
                  2859
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 147
                  },
                  "start": {
                    "column": 13,
                    "line": 147
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "receiver",
                  "optional": false,
                  "range": [
                    2861,
                    2869
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 147
                    },
                    "start": {
                      "column": 35,
                      "line": 147
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
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "range": [
                            2890,
                            2891
                          ],
                          "loc": {
                            "end": {
                              "column": 65,
                              "line": 147
                            },
                            "start": {
                              "column": 64,
                              "line": 147
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            2894,
                            2895
                          ],
                          "loc": {
                            "end": {
                              "column": 69,
                              "line": 147
                            },
                            "start": {
                              "column": 68,
                              "line": 147
                            }
                          }
                        },
                        "range": [
                          2890,
                          2895
                        ],
                        "loc": {
                          "end": {
                            "column": 69,
                            "line": 147
                          },
                          "start": {
                            "column": 64,
                            "line": 147
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
                          2878,
                          2885
                        ],
                        "loc": {
                          "end": {
                            "column": 59,
                            "line": 147
                          },
                          "start": {
                            "column": 52,
                            "line": 147
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
                          2886,
                          2889
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 147
                          },
                          "start": {
                            "column": 60,
                            "line": 147
                          }
                        }
                      },
                      "range": [
                        2878,
                        2889
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 147
                        },
                        "start": {
                          "column": 52,
                          "line": 147
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      2878,
                      2896
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 147
                      },
                      "start": {
                        "column": 52,
                        "line": 147
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
                      "name": "t",
                      "optional": false,
                      "range": [
                        2872,
                        2873
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 147
                        },
                        "start": {
                          "column": 46,
                          "line": 147
                        }
                      }
                    }
                  ],
                  "range": [
                    2871,
                    2896
                  ],
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 147
                    },
                    "start": {
                      "column": 45,
                      "line": 147
                    }
                  }
                },
                "range": [
                  2861,
                  2896
                ],
                "loc": {
                  "end": {
                    "column": 70,
                    "line": 147
                  },
                  "start": {
                    "column": 35,
                    "line": 147
                  }
                }
              }
            ],
            "range": [
              2837,
              2898
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 147
              },
              "start": {
                "column": 11,
                "line": 147
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "simplified",
          "optional": false,
          "range": [
            2826,
            2836
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 147
            },
            "start": {
              "column": 0,
              "line": 147
            }
          }
        },
        "optional": false,
        "range": [
          2826,
          2899
        ],
        "loc": {
          "end": {
            "column": 73,
            "line": 147
          },
          "start": {
            "column": 0,
            "line": 147
          }
        }
      },
      "range": [
        2826,
        2899
      ],
      "loc": {
        "end": {
          "column": 73,
          "line": 147
        },
        "start": {
          "column": 0,
          "line": 147
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
                  "name": "generator",
                  "optional": false,
                  "range": [
                    2912,
                    2921
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 148
                    },
                    "start": {
                      "column": 12,
                      "line": 148
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
                    "type": "ConditionalExpression",
                    "alternate": {
                      "type": "Literal",
                      "raw": "2",
                      "value": 2,
                      "range": [
                        2942,
                        2943
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 148
                        },
                        "start": {
                          "column": 42,
                          "line": 148
                        }
                      }
                    },
                    "consequent": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        2938,
                        2939
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 148
                        },
                        "start": {
                          "column": 38,
                          "line": 148
                        }
                      }
                    },
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bob",
                      "optional": false,
                      "range": [
                        2932,
                        2935
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 148
                        },
                        "start": {
                          "column": 32,
                          "line": 148
                        }
                      }
                    },
                    "range": [
                      2932,
                      2943
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 148
                      },
                      "start": {
                        "column": 32,
                        "line": 148
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
                      "name": "bob",
                      "optional": false,
                      "range": [
                        2924,
                        2927
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 148
                        },
                        "start": {
                          "column": 24,
                          "line": 148
                        }
                      }
                    }
                  ],
                  "range": [
                    2923,
                    2943
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 148
                    },
                    "start": {
                      "column": 23,
                      "line": 148
                    }
                  }
                },
                "range": [
                  2912,
                  2943
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 148
                  },
                  "start": {
                    "column": 12,
                    "line": 148
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "receiver",
                  "optional": false,
                  "range": [
                    2945,
                    2953
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 148
                    },
                    "start": {
                      "column": 45,
                      "line": 148
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
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "range": [
                            2974,
                            2975
                          ],
                          "loc": {
                            "end": {
                              "column": 75,
                              "line": 148
                            },
                            "start": {
                              "column": 74,
                              "line": 148
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            2978,
                            2979
                          ],
                          "loc": {
                            "end": {
                              "column": 79,
                              "line": 148
                            },
                            "start": {
                              "column": 78,
                              "line": 148
                            }
                          }
                        },
                        "range": [
                          2974,
                          2979
                        ],
                        "loc": {
                          "end": {
                            "column": 79,
                            "line": 148
                          },
                          "start": {
                            "column": 74,
                            "line": 148
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
                          2962,
                          2969
                        ],
                        "loc": {
                          "end": {
                            "column": 69,
                            "line": 148
                          },
                          "start": {
                            "column": 62,
                            "line": 148
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
                          2970,
                          2973
                        ],
                        "loc": {
                          "end": {
                            "column": 73,
                            "line": 148
                          },
                          "start": {
                            "column": 70,
                            "line": 148
                          }
                        }
                      },
                      "range": [
                        2962,
                        2973
                      ],
                      "loc": {
                        "end": {
                          "column": 73,
                          "line": 148
                        },
                        "start": {
                          "column": 62,
                          "line": 148
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      2962,
                      2980
                    ],
                    "loc": {
                      "end": {
                        "column": 80,
                        "line": 148
                      },
                      "start": {
                        "column": 62,
                        "line": 148
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
                      "name": "t",
                      "optional": false,
                      "range": [
                        2956,
                        2957
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 148
                        },
                        "start": {
                          "column": 56,
                          "line": 148
                        }
                      }
                    }
                  ],
                  "range": [
                    2955,
                    2980
                  ],
                  "loc": {
                    "end": {
                      "column": 80,
                      "line": 148
                    },
                    "start": {
                      "column": 55,
                      "line": 148
                    }
                  }
                },
                "range": [
                  2945,
                  2980
                ],
                "loc": {
                  "end": {
                    "column": 80,
                    "line": 148
                  },
                  "start": {
                    "column": 45,
                    "line": 148
                  }
                }
              }
            ],
            "range": [
              2910,
              2982
            ],
            "loc": {
              "end": {
                "column": 82,
                "line": 148
              },
              "start": {
                "column": 10,
                "line": 148
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "whatIWant",
          "optional": false,
          "range": [
            2900,
            2909
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 148
            },
            "start": {
              "column": 0,
              "line": 148
            }
          }
        },
        "optional": false,
        "range": [
          2900,
          2983
        ],
        "loc": {
          "end": {
            "column": 83,
            "line": 148
          },
          "start": {
            "column": 0,
            "line": 148
          }
        }
      },
      "range": [
        2900,
        2983
      ],
      "loc": {
        "end": {
          "column": 83,
          "line": 148
        },
        "start": {
          "column": 0,
          "line": 148
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "ConditionalExpression",
              "alternate": {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  3013,
                  3014
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 149
                  },
                  "start": {
                    "column": 29,
                    "line": 149
                  }
                }
              },
              "consequent": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  3009,
                  3010
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 149
                  },
                  "start": {
                    "column": 25,
                    "line": 149
                  }
                }
              },
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "bob",
                "optional": false,
                "range": [
                  3003,
                  3006
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 149
                  },
                  "start": {
                    "column": 19,
                    "line": 149
                  }
                }
              },
              "range": [
                3003,
                3014
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 149
                },
                "start": {
                  "column": 19,
                  "line": 149
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
                "name": "bob",
                "optional": false,
                "range": [
                  2995,
                  2998
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 149
                  },
                  "start": {
                    "column": 11,
                    "line": 149
                  }
                }
              }
            ],
            "range": [
              2994,
              3014
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 149
              },
              "start": {
                "column": 10,
                "line": 149
              }
            }
          },
          {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "range": [
                      3035,
                      3036
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 149
                      },
                      "start": {
                        "column": 51,
                        "line": 149
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      3039,
                      3040
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 149
                      },
                      "start": {
                        "column": 55,
                        "line": 149
                      }
                    }
                  },
                  "range": [
                    3035,
                    3040
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 149
                    },
                    "start": {
                      "column": 51,
                      "line": 149
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
                    3023,
                    3030
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 149
                    },
                    "start": {
                      "column": 39,
                      "line": 149
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
                    3031,
                    3034
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 149
                    },
                    "start": {
                      "column": 47,
                      "line": 149
                    }
                  }
                },
                "range": [
                  3023,
                  3034
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 149
                  },
                  "start": {
                    "column": 39,
                    "line": 149
                  }
                }
              },
              "optional": false,
              "range": [
                3023,
                3041
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 149
                },
                "start": {
                  "column": 39,
                  "line": 149
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
                "name": "t",
                "optional": false,
                "range": [
                  3017,
                  3018
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 149
                  },
                  "start": {
                    "column": 33,
                    "line": 149
                  }
                }
              }
            ],
            "range": [
              3016,
              3041
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 149
              },
              "start": {
                "column": 32,
                "line": 149
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "nonObject",
          "optional": false,
          "range": [
            2984,
            2993
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 149
            },
            "start": {
              "column": 0,
              "line": 149
            }
          }
        },
        "optional": false,
        "range": [
          2984,
          3042
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 149
          },
          "start": {
            "column": 0,
            "line": 149
          }
        }
      },
      "range": [
        2984,
        3042
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 149
        },
        "start": {
          "column": 0,
          "line": 149
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          3106,
          3195
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fetch",
              "optional": false,
              "range": [
                3112,
                3117
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 154
                },
                "start": {
                  "column": 4,
                  "line": 154
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
                  "column": 50,
                  "line": 154
                },
                "start": {
                  "column": 9,
                  "line": 154
                }
              },
              "range": [
                3117,
                3158
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "params",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 154
                        },
                        "start": {
                          "column": 18,
                          "line": 154
                        }
                      },
                      "range": [
                        3126,
                        3135
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TParams",
                          "optional": false,
                          "range": [
                            3128,
                            3135
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 154
                            },
                            "start": {
                              "column": 20,
                              "line": 154
                            }
                          }
                        },
                        "range": [
                          3128,
                          3135
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 154
                          },
                          "start": {
                            "column": 20,
                            "line": 154
                          }
                        }
                      }
                    },
                    "range": [
                      3120,
                      3135
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 154
                      },
                      "start": {
                        "column": 12,
                        "line": 154
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 154
                        },
                        "start": {
                          "column": 32,
                          "line": 154
                        }
                      },
                      "range": [
                        3140,
                        3148
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          3142,
                          3148
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 154
                          },
                          "start": {
                            "column": 34,
                            "line": 154
                          }
                        }
                      }
                    },
                    "range": [
                      3137,
                      3148
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 154
                      },
                      "start": {
                        "column": 29,
                        "line": 154
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 154
                    },
                    "start": {
                      "column": 42,
                      "line": 154
                    }
                  },
                  "range": [
                    3150,
                    3158
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TDone",
                      "optional": false,
                      "range": [
                        3153,
                        3158
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 154
                        },
                        "start": {
                          "column": 45,
                          "line": 154
                        }
                      }
                    },
                    "range": [
                      3153,
                      3158
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 154
                      },
                      "start": {
                        "column": 45,
                        "line": 154
                      }
                    }
                  }
                },
                "range": [
                  3119,
                  3158
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 154
                  },
                  "start": {
                    "column": 11,
                    "line": 154
                  }
                }
              }
            },
            "range": [
              3112,
              3159
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 154
              },
              "start": {
                "column": 4,
                "line": 154
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
              "optional": false,
              "range": [
                3164,
                3167
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 155
                },
                "start": {
                  "column": 4,
                  "line": 155
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
                  "column": 33,
                  "line": 155
                },
                "start": {
                  "column": 7,
                  "line": 155
                }
              },
              "range": [
                3167,
                3193
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 155
                        },
                        "start": {
                          "column": 14,
                          "line": 155
                        }
                      },
                      "range": [
                        3174,
                        3181
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TDone",
                          "optional": false,
                          "range": [
                            3176,
                            3181
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 155
                            },
                            "start": {
                              "column": 16,
                              "line": 155
                            }
                          }
                        },
                        "range": [
                          3176,
                          3181
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 155
                          },
                          "start": {
                            "column": 16,
                            "line": 155
                          }
                        }
                      }
                    },
                    "range": [
                      3170,
                      3181
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 155
                      },
                      "start": {
                        "column": 10,
                        "line": 155
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 155
                    },
                    "start": {
                      "column": 23,
                      "line": 155
                    }
                  },
                  "range": [
                    3183,
                    3193
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TMapped",
                      "optional": false,
                      "range": [
                        3186,
                        3193
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 155
                        },
                        "start": {
                          "column": 26,
                          "line": 155
                        }
                      }
                    },
                    "range": [
                      3186,
                      3193
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 155
                      },
                      "start": {
                        "column": 26,
                        "line": 155
                      }
                    }
                  }
                },
                "range": [
                  3169,
                  3193
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 155
                  },
                  "start": {
                    "column": 9,
                    "line": 155
                  }
                }
              }
            },
            "range": [
              3164,
              3193
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 155
              },
              "start": {
                "column": 4,
                "line": 155
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 156
          },
          "start": {
            "column": 40,
            "line": 153
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Opts",
        "optional": false,
        "range": [
          3076,
          3080
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 153
          },
          "start": {
            "column": 10,
            "line": 153
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 39,
            "line": 153
          },
          "start": {
            "column": 14,
            "line": 153
          }
        },
        "range": [
          3080,
          3105
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TParams",
              "optional": false,
              "range": [
                3081,
                3088
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 153
                },
                "start": {
                  "column": 15,
                  "line": 153
                }
              }
            },
            "out": false,
            "range": [
              3081,
              3088
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 153
              },
              "start": {
                "column": 15,
                "line": 153
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
              "name": "TDone",
              "optional": false,
              "range": [
                3090,
                3095
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 153
                },
                "start": {
                  "column": 24,
                  "line": 153
                }
              }
            },
            "out": false,
            "range": [
              3090,
              3095
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 153
              },
              "start": {
                "column": 24,
                "line": 153
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
              "name": "TMapped",
              "optional": false,
              "range": [
                3097,
                3104
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 153
                },
                "start": {
                  "column": 31,
                  "line": 153
                }
              }
            },
            "out": false,
            "range": [
              3097,
              3104
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 153
              },
              "start": {
                "column": 31,
                "line": 153
              }
            }
          }
        ]
      },
      "range": [
        3066,
        3195
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 156
        },
        "start": {
          "column": 0,
          "line": 153
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
                          "name": "data",
                          "optional": false,
                          "range": [
                            3329,
                            3333
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 160
                            },
                            "start": {
                              "column": 14,
                              "line": 160
                            }
                          }
                        },
                        "init": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "params",
                              "optional": false,
                              "range": [
                                3350,
                                3356
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 160
                                },
                                "start": {
                                  "column": 35,
                                  "line": 160
                                }
                              }
                            },
                            {
                              "type": "Literal",
                              "raw": "123",
                              "value": 123,
                              "range": [
                                3358,
                                3361
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 160
                                },
                                "start": {
                                  "column": 43,
                                  "line": 160
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
                              "name": "options",
                              "optional": false,
                              "range": [
                                3336,
                                3343
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 160
                                },
                                "start": {
                                  "column": 21,
                                  "line": 160
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fetch",
                              "optional": false,
                              "range": [
                                3344,
                                3349
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 160
                                },
                                "start": {
                                  "column": 29,
                                  "line": 160
                                }
                              }
                            },
                            "range": [
                              3336,
                              3349
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 160
                              },
                              "start": {
                                "column": 21,
                                "line": 160
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            3336,
                            3362
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 160
                            },
                            "start": {
                              "column": 21,
                              "line": 160
                            }
                          }
                        },
                        "range": [
                          3329,
                          3362
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 160
                          },
                          "start": {
                            "column": 14,
                            "line": 160
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      3323,
                      3362
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 160
                      },
                      "start": {
                        "column": 8,
                        "line": 160
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "range": [
                            3390,
                            3394
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 161
                            },
                            "start": {
                              "column": 27,
                              "line": 161
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
                          "name": "options",
                          "optional": false,
                          "range": [
                            3378,
                            3385
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 161
                            },
                            "start": {
                              "column": 15,
                              "line": 161
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "map",
                          "optional": false,
                          "range": [
                            3386,
                            3389
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 161
                            },
                            "start": {
                              "column": 23,
                              "line": 161
                            }
                          }
                        },
                        "range": [
                          3378,
                          3389
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 161
                          },
                          "start": {
                            "column": 15,
                            "line": 161
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        3378,
                        3395
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 161
                        },
                        "start": {
                          "column": 15,
                          "line": 161
                        }
                      }
                    },
                    "range": [
                      3371,
                      3395
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 161
                      },
                      "start": {
                        "column": 8,
                        "line": 161
                      }
                    }
                  }
                ],
                "range": [
                  3313,
                  3401
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 162
                  },
                  "start": {
                    "column": 32,
                    "line": 159
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
                  "name": "params",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 159
                      },
                      "start": {
                        "column": 18,
                        "line": 159
                      }
                    },
                    "range": [
                      3299,
                      3308
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TParams",
                        "optional": false,
                        "range": [
                          3301,
                          3308
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 159
                          },
                          "start": {
                            "column": 20,
                            "line": 159
                          }
                        }
                      },
                      "range": [
                        3301,
                        3308
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 159
                        },
                        "start": {
                          "column": 20,
                          "line": 159
                        }
                      }
                    }
                  },
                  "range": [
                    3293,
                    3308
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 159
                    },
                    "start": {
                      "column": 12,
                      "line": 159
                    }
                  }
                }
              ],
              "range": [
                3292,
                3401
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 162
                },
                "start": {
                  "column": 11,
                  "line": 159
                }
              }
            },
            "range": [
              3285,
              3401
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 162
              },
              "start": {
                "column": 4,
                "line": 159
              }
            }
          }
        ],
        "range": [
          3279,
          3403
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 163
          },
          "start": {
            "column": 82,
            "line": 158
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "example",
        "optional": false,
        "range": [
          3206,
          3213
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 158
          },
          "start": {
            "column": 9,
            "line": 158
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 80,
                "line": 158
              },
              "start": {
                "column": 49,
                "line": 158
              }
            },
            "range": [
              3246,
              3277
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  3252,
                  3277
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TParams",
                      "optional": false,
                      "range": [
                        3253,
                        3260
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 158
                        },
                        "start": {
                          "column": 56,
                          "line": 158
                        }
                      }
                    },
                    "range": [
                      3253,
                      3260
                    ],
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 158
                      },
                      "start": {
                        "column": 56,
                        "line": 158
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TDone",
                      "optional": false,
                      "range": [
                        3262,
                        3267
                      ],
                      "loc": {
                        "end": {
                          "column": 70,
                          "line": 158
                        },
                        "start": {
                          "column": 65,
                          "line": 158
                        }
                      }
                    },
                    "range": [
                      3262,
                      3267
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 158
                      },
                      "start": {
                        "column": 65,
                        "line": 158
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TMapped",
                      "optional": false,
                      "range": [
                        3269,
                        3276
                      ],
                      "loc": {
                        "end": {
                          "column": 79,
                          "line": 158
                        },
                        "start": {
                          "column": 72,
                          "line": 158
                        }
                      }
                    },
                    "range": [
                      3269,
                      3276
                    ],
                    "loc": {
                      "end": {
                        "column": 79,
                        "line": 158
                      },
                      "start": {
                        "column": 72,
                        "line": 158
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 80,
                    "line": 158
                  },
                  "start": {
                    "column": 55,
                    "line": 158
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Opts",
                "optional": false,
                "range": [
                  3248,
                  3252
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 158
                  },
                  "start": {
                    "column": 51,
                    "line": 158
                  }
                }
              },
              "range": [
                3248,
                3277
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 158
                },
                "start": {
                  "column": 51,
                  "line": 158
                }
              }
            }
          },
          "range": [
            3239,
            3277
          ],
          "loc": {
            "end": {
              "column": 80,
              "line": 158
            },
            "start": {
              "column": 42,
              "line": 158
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 41,
            "line": 158
          },
          "start": {
            "column": 16,
            "line": 158
          }
        },
        "range": [
          3213,
          3238
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TParams",
              "optional": false,
              "range": [
                3214,
                3221
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 158
                },
                "start": {
                  "column": 17,
                  "line": 158
                }
              }
            },
            "out": false,
            "range": [
              3214,
              3221
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 158
              },
              "start": {
                "column": 17,
                "line": 158
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
              "name": "TDone",
              "optional": false,
              "range": [
                3223,
                3228
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 158
                },
                "start": {
                  "column": 26,
                  "line": 158
                }
              }
            },
            "out": false,
            "range": [
              3223,
              3228
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 158
              },
              "start": {
                "column": 26,
                "line": 158
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
              "name": "TMapped",
              "optional": false,
              "range": [
                3230,
                3237
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 158
                },
                "start": {
                  "column": 33,
                  "line": 158
                }
              }
            },
            "out": false,
            "range": [
              3230,
              3237
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 158
              },
              "start": {
                "column": 33,
                "line": 158
              }
            }
          }
        ]
      },
      "range": [
        3197,
        3403
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 163
        },
        "start": {
          "column": 0,
          "line": 158
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          3422,
          3457
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "one",
              "optional": false,
              "range": [
                3428,
                3431
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 166
                },
                "start": {
                  "column": 4,
                  "line": 166
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
                  "line": 166
                },
                "start": {
                  "column": 7,
                  "line": 166
                }
              },
              "range": [
                3431,
                3439
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  3433,
                  3439
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 166
                  },
                  "start": {
                    "column": 9,
                    "line": 166
                  }
                }
              }
            },
            "range": [
              3428,
              3439
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 166
              },
              "start": {
                "column": 4,
                "line": 166
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "two",
              "optional": false,
              "range": [
                3444,
                3447
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 167
                },
                "start": {
                  "column": 4,
                  "line": 167
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
                  "line": 167
                },
                "start": {
                  "column": 7,
                  "line": 167
                }
              },
              "range": [
                3447,
                3455
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  3449,
                  3455
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 167
                  },
                  "start": {
                    "column": 9,
                    "line": 167
                  }
                }
              }
            },
            "range": [
              3444,
              3455
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 167
              },
              "start": {
                "column": 4,
                "line": 167
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 168
          },
          "start": {
            "column": 17,
            "line": 165
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Params",
        "optional": false,
        "range": [
          3415,
          3421
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 165
          },
          "start": {
            "column": 10,
            "line": 165
          }
        }
      },
      "range": [
        3405,
        3457
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 168
        },
        "start": {
          "column": 0,
          "line": 165
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
                  "name": "fetch",
                  "optional": false,
                  "range": [
                    3473,
                    3478
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 171
                    },
                    "start": {
                      "column": 4,
                      "line": 171
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
                    "type": "Literal",
                    "raw": "123",
                    "value": 123,
                    "range": [
                      3500,
                      3503
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 171
                      },
                      "start": {
                        "column": 31,
                        "line": 171
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
                      "name": "params",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 171
                          },
                          "start": {
                            "column": 18,
                            "line": 171
                          }
                        },
                        "range": [
                          3487,
                          3495
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Params",
                            "optional": false,
                            "range": [
                              3489,
                              3495
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 171
                              },
                              "start": {
                                "column": 20,
                                "line": 171
                              }
                            }
                          },
                          "range": [
                            3489,
                            3495
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 171
                            },
                            "start": {
                              "column": 20,
                              "line": 171
                            }
                          }
                        }
                      },
                      "range": [
                        3481,
                        3495
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 171
                        },
                        "start": {
                          "column": 12,
                          "line": 171
                        }
                      }
                    }
                  ],
                  "range": [
                    3480,
                    3503
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 171
                    },
                    "start": {
                      "column": 11,
                      "line": 171
                    }
                  }
                },
                "range": [
                  3473,
                  3503
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 171
                  },
                  "start": {
                    "column": 4,
                    "line": 171
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "range": [
                    3509,
                    3512
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 172
                    },
                    "start": {
                      "column": 4,
                      "line": 172
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
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "number",
                        "optional": false,
                        "range": [
                          3533,
                          3539
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 172
                          },
                          "start": {
                            "column": 28,
                            "line": 172
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "range": [
                        3526,
                        3532
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 172
                        },
                        "start": {
                          "column": 21,
                          "line": 172
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      3526,
                      3540
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 172
                      },
                      "start": {
                        "column": 21,
                        "line": 172
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
                      "name": "number",
                      "optional": false,
                      "range": [
                        3515,
                        3521
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 172
                        },
                        "start": {
                          "column": 10,
                          "line": 172
                        }
                      }
                    }
                  ],
                  "range": [
                    3514,
                    3540
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 172
                    },
                    "start": {
                      "column": 9,
                      "line": 172
                    }
                  }
                },
                "range": [
                  3509,
                  3540
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 172
                  },
                  "start": {
                    "column": 4,
                    "line": 172
                  }
                }
              }
            ],
            "range": [
              3467,
              3542
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 173
              },
              "start": {
                "column": 8,
                "line": 170
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "example",
          "optional": false,
          "range": [
            3459,
            3466
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 170
            },
            "start": {
              "column": 0,
              "line": 170
            }
          }
        },
        "optional": false,
        "range": [
          3459,
          3543
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 173
          },
          "start": {
            "column": 0,
            "line": 170
          }
        }
      },
      "range": [
        3459,
        3544
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 173
        },
        "start": {
          "column": 0,
          "line": 170
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
                  "name": "fetch",
                  "optional": false,
                  "range": [
                    3560,
                    3565
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 176
                    },
                    "start": {
                      "column": 4,
                      "line": 176
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
                    "type": "Literal",
                    "raw": "123",
                    "value": 123,
                    "range": [
                      3600,
                      3603
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 176
                      },
                      "start": {
                        "column": 44,
                        "line": 176
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
                      "name": "params",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 176
                          },
                          "start": {
                            "column": 18,
                            "line": 176
                          }
                        },
                        "range": [
                          3574,
                          3582
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Params",
                            "optional": false,
                            "range": [
                              3576,
                              3582
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 176
                              },
                              "start": {
                                "column": 20,
                                "line": 176
                              }
                            }
                          },
                          "range": [
                            3576,
                            3582
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 176
                            },
                            "start": {
                              "column": 20,
                              "line": 176
                            }
                          }
                        }
                      },
                      "range": [
                        3568,
                        3582
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 176
                        },
                        "start": {
                          "column": 12,
                          "line": 176
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 176
                          },
                          "start": {
                            "column": 31,
                            "line": 176
                          }
                        },
                        "range": [
                          3587,
                          3595
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            3589,
                            3595
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 176
                            },
                            "start": {
                              "column": 33,
                              "line": 176
                            }
                          }
                        }
                      },
                      "range": [
                        3584,
                        3595
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 176
                        },
                        "start": {
                          "column": 28,
                          "line": 176
                        }
                      }
                    }
                  ],
                  "range": [
                    3567,
                    3603
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 176
                    },
                    "start": {
                      "column": 11,
                      "line": 176
                    }
                  }
                },
                "range": [
                  3560,
                  3603
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 176
                  },
                  "start": {
                    "column": 4,
                    "line": 176
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "range": [
                    3609,
                    3612
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 177
                    },
                    "start": {
                      "column": 4,
                      "line": 177
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
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "number",
                        "optional": false,
                        "range": [
                          3633,
                          3639
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 177
                          },
                          "start": {
                            "column": 28,
                            "line": 177
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "range": [
                        3626,
                        3632
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 177
                        },
                        "start": {
                          "column": 21,
                          "line": 177
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      3626,
                      3640
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 177
                      },
                      "start": {
                        "column": 21,
                        "line": 177
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
                      "name": "number",
                      "optional": false,
                      "range": [
                        3615,
                        3621
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 177
                        },
                        "start": {
                          "column": 10,
                          "line": 177
                        }
                      }
                    }
                  ],
                  "range": [
                    3614,
                    3640
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 177
                    },
                    "start": {
                      "column": 9,
                      "line": 177
                    }
                  }
                },
                "range": [
                  3609,
                  3640
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 177
                  },
                  "start": {
                    "column": 4,
                    "line": 177
                  }
                }
              }
            ],
            "range": [
              3554,
              3642
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 178
              },
              "start": {
                "column": 8,
                "line": 175
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "example",
          "optional": false,
          "range": [
            3546,
            3553
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 175
            },
            "start": {
              "column": 0,
              "line": 175
            }
          }
        },
        "optional": false,
        "range": [
          3546,
          3643
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 178
          },
          "start": {
            "column": 0,
            "line": 175
          }
        }
      },
      "range": [
        3546,
        3644
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 178
        },
        "start": {
          "column": 0,
          "line": 175
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
                  "name": "fetch",
                  "optional": false,
                  "range": [
                    3660,
                    3665
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 181
                    },
                    "start": {
                      "column": 4,
                      "line": 181
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
                    "type": "Literal",
                    "raw": "123",
                    "value": 123,
                    "range": [
                      3692,
                      3695
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 181
                      },
                      "start": {
                        "column": 36,
                        "line": 181
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
                      "name": "params",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 181
                          },
                          "start": {
                            "column": 18,
                            "line": 181
                          }
                        },
                        "range": [
                          3674,
                          3682
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Params",
                            "optional": false,
                            "range": [
                              3676,
                              3682
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 181
                              },
                              "start": {
                                "column": 20,
                                "line": 181
                              }
                            }
                          },
                          "range": [
                            3676,
                            3682
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 181
                            },
                            "start": {
                              "column": 20,
                              "line": 181
                            }
                          }
                        }
                      },
                      "range": [
                        3668,
                        3682
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 181
                        },
                        "start": {
                          "column": 12,
                          "line": 181
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        3684,
                        3687
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 181
                        },
                        "start": {
                          "column": 28,
                          "line": 181
                        }
                      }
                    }
                  ],
                  "range": [
                    3667,
                    3695
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 181
                    },
                    "start": {
                      "column": 11,
                      "line": 181
                    }
                  }
                },
                "range": [
                  3660,
                  3695
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 181
                  },
                  "start": {
                    "column": 4,
                    "line": 181
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "range": [
                    3701,
                    3704
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 182
                    },
                    "start": {
                      "column": 4,
                      "line": 182
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
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "number",
                        "optional": false,
                        "range": [
                          3725,
                          3731
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 182
                          },
                          "start": {
                            "column": 28,
                            "line": 182
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "range": [
                        3718,
                        3724
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 182
                        },
                        "start": {
                          "column": 21,
                          "line": 182
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      3718,
                      3732
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 182
                      },
                      "start": {
                        "column": 21,
                        "line": 182
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
                      "name": "number",
                      "optional": false,
                      "range": [
                        3707,
                        3713
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 182
                        },
                        "start": {
                          "column": 10,
                          "line": 182
                        }
                      }
                    }
                  ],
                  "range": [
                    3706,
                    3732
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 182
                    },
                    "start": {
                      "column": 9,
                      "line": 182
                    }
                  }
                },
                "range": [
                  3701,
                  3732
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 182
                  },
                  "start": {
                    "column": 4,
                    "line": 182
                  }
                }
              }
            ],
            "range": [
              3654,
              3734
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 183
              },
              "start": {
                "column": 8,
                "line": 180
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "example",
          "optional": false,
          "range": [
            3646,
            3653
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 180
            },
            "start": {
              "column": 0,
              "line": 180
            }
          }
        },
        "optional": false,
        "range": [
          3646,
          3735
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 183
          },
          "start": {
            "column": 0,
            "line": 180
          }
        }
      },
      "range": [
        3646,
        3736
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 183
        },
        "start": {
          "column": 0,
          "line": 180
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
            "name": "branch",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 86,
                  "line": 188
                },
                "start": {
                  "column": 20,
                  "line": 187
                }
              },
              "range": [
                3780,
                3868
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 77,
                          "line": 188
                        },
                        "start": {
                          "column": 20,
                          "line": 188
                        }
                      },
                      "range": [
                        3802,
                        3859
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
                              "name": "test",
                              "optional": false,
                              "range": [
                                3806,
                                3810
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 188
                                },
                                "start": {
                                  "column": 24,
                                  "line": 188
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
                                  "column": 31,
                                  "line": 188
                                },
                                "start": {
                                  "column": 28,
                                  "line": 188
                                }
                              },
                              "range": [
                                3810,
                                3813
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "range": [
                                    3812,
                                    3813
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 188
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 188
                                    }
                                  }
                                },
                                "range": [
                                  3812,
                                  3813
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 188
                                  },
                                  "start": {
                                    "column": 30,
                                    "line": 188
                                  }
                                }
                              }
                            },
                            "range": [
                              3806,
                              3814
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 188
                              },
                              "start": {
                                "column": 24,
                                "line": 188
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "if",
                              "optional": false,
                              "range": [
                                3815,
                                3817
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 188
                                },
                                "start": {
                                  "column": 33,
                                  "line": 188
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
                                  "line": 188
                                },
                                "start": {
                                  "column": 35,
                                  "line": 188
                                }
                              },
                              "range": [
                                3817,
                                3835
                              ],
                              "typeAnnotation": {
                                "type": "TSFunctionType",
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
                                          "column": 42,
                                          "line": 188
                                        },
                                        "start": {
                                          "column": 39,
                                          "line": 188
                                        }
                                      },
                                      "range": [
                                        3821,
                                        3824
                                      ],
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false,
                                          "range": [
                                            3823,
                                            3824
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 42,
                                              "line": 188
                                            },
                                            "start": {
                                              "column": 41,
                                              "line": 188
                                            }
                                          }
                                        },
                                        "range": [
                                          3823,
                                          3824
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 42,
                                            "line": 188
                                          },
                                          "start": {
                                            "column": 41,
                                            "line": 188
                                          }
                                        }
                                      }
                                    },
                                    "range": [
                                      3820,
                                      3824
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 42,
                                        "line": 188
                                      },
                                      "start": {
                                        "column": 38,
                                        "line": 188
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 53,
                                      "line": 188
                                    },
                                    "start": {
                                      "column": 44,
                                      "line": 188
                                    }
                                  },
                                  "range": [
                                    3826,
                                    3835
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypePredicate",
                                    "asserts": false,
                                    "parameterName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "t",
                                      "optional": false,
                                      "range": [
                                        3829,
                                        3830
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 48,
                                          "line": 188
                                        },
                                        "start": {
                                          "column": 47,
                                          "line": 188
                                        }
                                      }
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "loc": {
                                        "end": {
                                          "column": 53,
                                          "line": 188
                                        },
                                        "start": {
                                          "column": 52,
                                          "line": 188
                                        }
                                      },
                                      "range": [
                                        3834,
                                        3835
                                      ],
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "U",
                                          "optional": false,
                                          "range": [
                                            3834,
                                            3835
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 53,
                                              "line": 188
                                            },
                                            "start": {
                                              "column": 52,
                                              "line": 188
                                            }
                                          }
                                        },
                                        "range": [
                                          3834,
                                          3835
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 53,
                                            "line": 188
                                          },
                                          "start": {
                                            "column": 52,
                                            "line": 188
                                          }
                                        }
                                      }
                                    },
                                    "range": [
                                      3829,
                                      3835
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 53,
                                        "line": 188
                                      },
                                      "start": {
                                        "column": 47,
                                        "line": 188
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  3819,
                                  3835
                                ],
                                "loc": {
                                  "end": {
                                    "column": 53,
                                    "line": 188
                                  },
                                  "start": {
                                    "column": 37,
                                    "line": 188
                                  }
                                }
                              }
                            },
                            "range": [
                              3815,
                              3836
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 188
                              },
                              "start": {
                                "column": 33,
                                "line": 188
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "then",
                              "optional": false,
                              "range": [
                                3837,
                                3841
                              ],
                              "loc": {
                                "end": {
                                  "column": 59,
                                  "line": 188
                                },
                                "start": {
                                  "column": 55,
                                  "line": 188
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
                                  "column": 75,
                                  "line": 188
                                },
                                "start": {
                                  "column": 59,
                                  "line": 188
                                }
                              },
                              "range": [
                                3841,
                                3857
                              ],
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "u",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "loc": {
                                        "end": {
                                          "column": 66,
                                          "line": 188
                                        },
                                        "start": {
                                          "column": 63,
                                          "line": 188
                                        }
                                      },
                                      "range": [
                                        3845,
                                        3848
                                      ],
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "U",
                                          "optional": false,
                                          "range": [
                                            3847,
                                            3848
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 66,
                                              "line": 188
                                            },
                                            "start": {
                                              "column": 65,
                                              "line": 188
                                            }
                                          }
                                        },
                                        "range": [
                                          3847,
                                          3848
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 66,
                                            "line": 188
                                          },
                                          "start": {
                                            "column": 65,
                                            "line": 188
                                          }
                                        }
                                      }
                                    },
                                    "range": [
                                      3844,
                                      3848
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 66,
                                        "line": 188
                                      },
                                      "start": {
                                        "column": 62,
                                        "line": 188
                                      }
                                    }
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 75,
                                      "line": 188
                                    },
                                    "start": {
                                      "column": 68,
                                      "line": 188
                                    }
                                  },
                                  "range": [
                                    3850,
                                    3857
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSVoidKeyword",
                                    "range": [
                                      3853,
                                      3857
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 75,
                                        "line": 188
                                      },
                                      "start": {
                                        "column": 71,
                                        "line": 188
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  3843,
                                  3857
                                ],
                                "loc": {
                                  "end": {
                                    "column": 75,
                                    "line": 188
                                  },
                                  "start": {
                                    "column": 61,
                                    "line": 188
                                  }
                                }
                              }
                            },
                            "range": [
                              3837,
                              3857
                            ],
                            "loc": {
                              "end": {
                                "column": 75,
                                "line": 188
                              },
                              "start": {
                                "column": 55,
                                "line": 188
                              }
                            }
                          }
                        ],
                        "range": [
                          3804,
                          3859
                        ],
                        "loc": {
                          "end": {
                            "column": 77,
                            "line": 188
                          },
                          "start": {
                            "column": 22,
                            "line": 188
                          }
                        }
                      }
                    },
                    "range": [
                      3801,
                      3859
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 188
                      },
                      "start": {
                        "column": 19,
                        "line": 188
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 86,
                      "line": 188
                    },
                    "start": {
                      "column": 79,
                      "line": 188
                    }
                  },
                  "range": [
                    3861,
                    3868
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      3864,
                      3868
                    ],
                    "loc": {
                      "end": {
                        "column": 86,
                        "line": 188
                      },
                      "start": {
                        "column": 82,
                        "line": 188
                      }
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 188
                    },
                    "start": {
                      "column": 2,
                      "line": 188
                    }
                  },
                  "range": [
                    3784,
                    3800
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
                          3785,
                          3786
                        ],
                        "loc": {
                          "end": {
                            "column": 4,
                            "line": 188
                          },
                          "start": {
                            "column": 3,
                            "line": 188
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        3785,
                        3786
                      ],
                      "loc": {
                        "end": {
                          "column": 4,
                          "line": 188
                        },
                        "start": {
                          "column": 3,
                          "line": 188
                        }
                      }
                    },
                    {
                      "type": "TSTypeParameter",
                      "const": false,
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            3798,
                            3799
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 188
                            },
                            "start": {
                              "column": 16,
                              "line": 188
                            }
                          }
                        },
                        "range": [
                          3798,
                          3799
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 188
                          },
                          "start": {
                            "column": 16,
                            "line": 188
                          }
                        }
                      },
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          3788,
                          3789
                        ],
                        "loc": {
                          "end": {
                            "column": 7,
                            "line": 188
                          },
                          "start": {
                            "column": 6,
                            "line": 188
                          }
                        }
                      },
                      "out": false,
                      "range": [
                        3788,
                        3799
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 188
                        },
                        "start": {
                          "column": 6,
                          "line": 188
                        }
                      }
                    }
                  ]
                },
                "range": [
                  3784,
                  3868
                ],
                "loc": {
                  "end": {
                    "column": 86,
                    "line": 188
                  },
                  "start": {
                    "column": 2,
                    "line": 188
                  }
                }
              }
            },
            "range": [
              3774,
              3868
            ],
            "loc": {
              "end": {
                "column": 86,
                "line": 188
              },
              "start": {
                "column": 14,
                "line": 187
              }
            }
          },
          "init": null,
          "range": [
            3774,
            3868
          ],
          "loc": {
            "end": {
              "column": 86,
              "line": 188
            },
            "start": {
              "column": 14,
              "line": 187
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        3760,
        3868
      ],
      "loc": {
        "end": {
          "column": 86,
          "line": 188
        },
        "start": {
          "column": 0,
          "line": 187
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 190
                },
                "start": {
                  "column": 15,
                  "line": 190
                }
              },
              "range": [
                3885,
                3896
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"a\"",
                      "value": "a",
                      "range": [
                        3887,
                        3890
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 190
                        },
                        "start": {
                          "column": 17,
                          "line": 190
                        }
                      }
                    },
                    "range": [
                      3887,
                      3890
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 190
                      },
                      "start": {
                        "column": 17,
                        "line": 190
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"b\"",
                      "value": "b",
                      "range": [
                        3893,
                        3896
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 190
                        },
                        "start": {
                          "column": 23,
                          "line": 190
                        }
                      }
                    },
                    "range": [
                      3893,
                      3896
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 190
                      },
                      "start": {
                        "column": 23,
                        "line": 190
                      }
                    }
                  }
                ],
                "range": [
                  3887,
                  3896
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 190
                  },
                  "start": {
                    "column": 17,
                    "line": 190
                  }
                }
              }
            },
            "range": [
              3884,
              3896
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 190
              },
              "start": {
                "column": 14,
                "line": 190
              }
            }
          },
          "init": null,
          "range": [
            3884,
            3896
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 190
            },
            "start": {
              "column": 14,
              "line": 190
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        3870,
        3896
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 190
        },
        "start": {
          "column": 0,
          "line": 190
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
                  "name": "test",
                  "optional": false,
                  "range": [
                    3909,
                    3913
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 193
                    },
                    "start": {
                      "column": 2,
                      "line": 193
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    3915,
                    3916
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 193
                    },
                    "start": {
                      "column": 8,
                      "line": 193
                    }
                  }
                },
                "range": [
                  3909,
                  3916
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 193
                  },
                  "start": {
                    "column": 2,
                    "line": 193
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "if",
                  "optional": false,
                  "range": [
                    3920,
                    3922
                  ],
                  "loc": {
                    "end": {
                      "column": 4,
                      "line": 194
                    },
                    "start": {
                      "column": 2,
                      "line": 194
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
                    "type": "BinaryExpression",
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "range": [
                        3941,
                        3942
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 194
                        },
                        "start": {
                          "column": 23,
                          "line": 194
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"a\"",
                      "value": "a",
                      "range": [
                        3947,
                        3950
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 194
                        },
                        "start": {
                          "column": 29,
                          "line": 194
                        }
                      }
                    },
                    "range": [
                      3941,
                      3950
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 194
                      },
                      "start": {
                        "column": 23,
                        "line": 194
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
                      "name": "t",
                      "optional": false,
                      "range": [
                        3925,
                        3926
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 194
                        },
                        "start": {
                          "column": 7,
                          "line": 194
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 194
                      },
                      "start": {
                        "column": 9,
                        "line": 194
                      }
                    },
                    "range": [
                      3927,
                      3937
                    ],
                    "typeAnnotation": {
                      "type": "TSTypePredicate",
                      "asserts": false,
                      "parameterName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "range": [
                          3929,
                          3930
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 194
                          },
                          "start": {
                            "column": 11,
                            "line": 194
                          }
                        }
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 194
                          },
                          "start": {
                            "column": 16,
                            "line": 194
                          }
                        },
                        "range": [
                          3934,
                          3937
                        ],
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "\"a\"",
                            "value": "a",
                            "range": [
                              3934,
                              3937
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 194
                              },
                              "start": {
                                "column": 16,
                                "line": 194
                              }
                            }
                          },
                          "range": [
                            3934,
                            3937
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 194
                            },
                            "start": {
                              "column": 16,
                              "line": 194
                            }
                          }
                        }
                      },
                      "range": [
                        3929,
                        3937
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 194
                        },
                        "start": {
                          "column": 11,
                          "line": 194
                        }
                      }
                    }
                  },
                  "range": [
                    3924,
                    3950
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 194
                    },
                    "start": {
                      "column": 6,
                      "line": 194
                    }
                  }
                },
                "range": [
                  3920,
                  3950
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 194
                  },
                  "start": {
                    "column": 2,
                    "line": 194
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "then",
                  "optional": false,
                  "range": [
                    3954,
                    3958
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 195
                    },
                    "start": {
                      "column": 2,
                      "line": 195
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
                              "name": "test1",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 196
                                  },
                                  "start": {
                                    "column": 13,
                                    "line": 196
                                  }
                                },
                                "range": [
                                  3980,
                                  3985
                                ],
                                "typeAnnotation": {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "raw": "\"a\"",
                                    "value": "a",
                                    "range": [
                                      3982,
                                      3985
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 18,
                                        "line": 196
                                      },
                                      "start": {
                                        "column": 15,
                                        "line": 196
                                      }
                                    }
                                  },
                                  "range": [
                                    3982,
                                    3985
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
                                      "line": 196
                                    },
                                    "start": {
                                      "column": 15,
                                      "line": 196
                                    }
                                  }
                                }
                              },
                              "range": [
                                3975,
                                3985
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 196
                                },
                                "start": {
                                  "column": 8,
                                  "line": 196
                                }
                              }
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "u",
                              "optional": false,
                              "range": [
                                3988,
                                3989
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 196
                                },
                                "start": {
                                  "column": 21,
                                  "line": 196
                                }
                              }
                            },
                            "range": [
                              3975,
                              3989
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 196
                              },
                              "start": {
                                "column": 8,
                                "line": 196
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "let",
                        "range": [
                          3971,
                          3989
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 196
                          },
                          "start": {
                            "column": 4,
                            "line": 196
                          }
                        }
                      }
                    ],
                    "range": [
                      3965,
                      3993
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 197
                      },
                      "start": {
                        "column": 13,
                        "line": 195
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
                      "name": "u",
                      "optional": false,
                      "range": [
                        3960,
                        3961
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 195
                        },
                        "start": {
                          "column": 8,
                          "line": 195
                        }
                      }
                    }
                  ],
                  "range": [
                    3960,
                    3993
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 197
                    },
                    "start": {
                      "column": 8,
                      "line": 195
                    }
                  }
                },
                "range": [
                  3954,
                  3993
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 197
                  },
                  "start": {
                    "column": 2,
                    "line": 195
                  }
                }
              }
            ],
            "range": [
              3905,
              3995
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 198
              },
              "start": {
                "column": 7,
                "line": 192
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "branch",
          "optional": false,
          "range": [
            3898,
            3904
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 192
            },
            "start": {
              "column": 0,
              "line": 192
            }
          }
        },
        "optional": false,
        "range": [
          3898,
          3996
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 198
          },
          "start": {
            "column": 0,
            "line": 192
          }
        }
      },
      "range": [
        3898,
        3996
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 198
        },
        "start": {
          "column": 0,
          "line": 192
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          4017,
          4066
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                4021,
                4022
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 201
                },
                "start": {
                  "column": 2,
                  "line": 201
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
                  "column": 21,
                  "line": 201
                },
                "start": {
                  "column": 3,
                  "line": 201
                }
              },
              "range": [
                4022,
                4040
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                          "line": 201
                        },
                        "start": {
                          "column": 7,
                          "line": 201
                        }
                      },
                      "range": [
                        4026,
                        4034
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          4028,
                          4034
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 201
                          },
                          "start": {
                            "column": 9,
                            "line": 201
                          }
                        }
                      }
                    },
                    "range": [
                      4025,
                      4034
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 201
                      },
                      "start": {
                        "column": 6,
                        "line": 201
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 201
                    },
                    "start": {
                      "column": 17,
                      "line": 201
                    }
                  },
                  "range": [
                    4036,
                    4040
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        4039,
                        4040
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 201
                        },
                        "start": {
                          "column": 20,
                          "line": 201
                        }
                      }
                    },
                    "range": [
                      4039,
                      4040
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 201
                      },
                      "start": {
                        "column": 20,
                        "line": 201
                      }
                    }
                  }
                },
                "range": [
                  4024,
                  4040
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 201
                  },
                  "start": {
                    "column": 5,
                    "line": 201
                  }
                }
              }
            },
            "range": [
              4021,
              4041
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 201
              },
              "start": {
                "column": 2,
                "line": 201
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                4044,
                4045
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 202
                },
                "start": {
                  "column": 2,
                  "line": 202
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
                  "column": 21,
                  "line": 202
                },
                "start": {
                  "column": 3,
                  "line": 202
                }
              },
              "range": [
                4045,
                4063
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                          "column": 12,
                          "line": 202
                        },
                        "start": {
                          "column": 9,
                          "line": 202
                        }
                      },
                      "range": [
                        4051,
                        4054
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            4053,
                            4054
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 202
                            },
                            "start": {
                              "column": 11,
                              "line": 202
                            }
                          }
                        },
                        "range": [
                          4053,
                          4054
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 202
                          },
                          "start": {
                            "column": 11,
                            "line": 202
                          }
                        }
                      }
                    },
                    "range": [
                      4048,
                      4054
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 202
                      },
                      "start": {
                        "column": 6,
                        "line": 202
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 202
                    },
                    "start": {
                      "column": 14,
                      "line": 202
                    }
                  },
                  "range": [
                    4056,
                    4063
                  ],
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "range": [
                      4059,
                      4063
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 202
                      },
                      "start": {
                        "column": 17,
                        "line": 202
                      }
                    }
                  }
                },
                "range": [
                  4047,
                  4063
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 202
                  },
                  "start": {
                    "column": 5,
                    "line": 202
                  }
                }
              }
            },
            "range": [
              4044,
              4064
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 202
              },
              "start": {
                "column": 2,
                "line": 202
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 203
          },
          "start": {
            "column": 19,
            "line": 200
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "range": [
          4008,
          4013
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 200
          },
          "start": {
            "column": 10,
            "line": 200
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 200
          },
          "start": {
            "column": 15,
            "line": 200
          }
        },
        "range": [
          4013,
          4016
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
                4014,
                4015
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 200
                },
                "start": {
                  "column": 16,
                  "line": 200
                }
              }
            },
            "out": false,
            "range": [
              4014,
              4015
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 200
              },
              "start": {
                "column": 16,
                "line": 200
              }
            }
          }
        ]
      },
      "range": [
        3998,
        4066
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 203
        },
        "start": {
          "column": 0,
          "line": 200
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          4085,
          4088
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 205
          },
          "start": {
            "column": 17,
            "line": 205
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 39,
                "line": 205
              },
              "start": {
                "column": 29,
                "line": 205
              }
            },
            "range": [
              4097,
              4107
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  4104,
                  4107
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
                        4105,
                        4106
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 205
                        },
                        "start": {
                          "column": 37,
                          "line": 205
                        }
                      }
                    },
                    "range": [
                      4105,
                      4106
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 205
                      },
                      "start": {
                        "column": 37,
                        "line": 205
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 205
                  },
                  "start": {
                    "column": 36,
                    "line": 205
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Props",
                "optional": false,
                "range": [
                  4099,
                  4104
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 205
                  },
                  "start": {
                    "column": 31,
                    "line": 205
                  }
                }
              },
              "range": [
                4099,
                4107
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 205
                },
                "start": {
                  "column": 31,
                  "line": 205
                }
              }
            }
          },
          "range": [
            4092,
            4107
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 205
            },
            "start": {
              "column": 24,
              "line": 205
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 46,
            "line": 205
          },
          "start": {
            "column": 40,
            "line": 205
          }
        },
        "range": [
          4108,
          4114
        ],
        "typeAnnotation": {
          "type": "TSNullKeyword",
          "range": [
            4110,
            4114
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 205
            },
            "start": {
              "column": 42,
              "line": 205
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 23,
            "line": 205
          },
          "start": {
            "column": 20,
            "line": 205
          }
        },
        "range": [
          4088,
          4091
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
                4089,
                4090
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 205
                },
                "start": {
                  "column": 21,
                  "line": 205
                }
              }
            },
            "out": false,
            "range": [
              4089,
              4090
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 205
              },
              "start": {
                "column": 21,
                "line": 205
              }
            }
          }
        ]
      },
      "range": [
        4068,
        4115
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 205
        },
        "start": {
          "column": 0,
          "line": 205
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
                "type": "SpreadElement",
                "argument": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          4134,
                          4135
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 209
                          },
                          "start": {
                            "column": 4,
                            "line": 209
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
                          "type": "Literal",
                          "raw": "10",
                          "value": 10,
                          "range": [
                            4144,
                            4146
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 209
                            },
                            "start": {
                              "column": 14,
                              "line": 209
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
                            "name": "x",
                            "optional": false,
                            "range": [
                              4138,
                              4139
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 209
                              },
                              "start": {
                                "column": 8,
                                "line": 209
                              }
                            }
                          }
                        ],
                        "range": [
                          4137,
                          4146
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 209
                          },
                          "start": {
                            "column": 7,
                            "line": 209
                          }
                        }
                      },
                      "range": [
                        4134,
                        4146
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 209
                        },
                        "start": {
                          "column": 4,
                          "line": 209
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "range": [
                          4152,
                          4153
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 210
                          },
                          "start": {
                            "column": 4,
                            "line": 210
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
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "arguments": [],
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "arg",
                                    "optional": false,
                                    "range": [
                                      4172,
                                      4175
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 9,
                                        "line": 211
                                      },
                                      "start": {
                                        "column": 6,
                                        "line": 211
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "toString",
                                    "optional": false,
                                    "range": [
                                      4176,
                                      4184
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 18,
                                        "line": 211
                                      },
                                      "start": {
                                        "column": 10,
                                        "line": 211
                                      }
                                    }
                                  },
                                  "range": [
                                    4172,
                                    4184
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
                                      "line": 211
                                    },
                                    "start": {
                                      "column": 6,
                                      "line": 211
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  4172,
                                  4186
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 211
                                  },
                                  "start": {
                                    "column": 6,
                                    "line": 211
                                  }
                                }
                              },
                              "range": [
                                4172,
                                4187
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 211
                                },
                                "start": {
                                  "column": 6,
                                  "line": 211
                                }
                              }
                            }
                          ],
                          "range": [
                            4164,
                            4193
                          ],
                          "loc": {
                            "end": {
                              "column": 5,
                              "line": 212
                            },
                            "start": {
                              "column": 16,
                              "line": 210
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
                            "name": "arg",
                            "optional": false,
                            "range": [
                              4156,
                              4159
                            ],
                            "loc": {
                              "end": {
                                "column": 11,
                                "line": 210
                              },
                              "start": {
                                "column": 8,
                                "line": 210
                              }
                            }
                          }
                        ],
                        "range": [
                          4155,
                          4193
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 212
                          },
                          "start": {
                            "column": 7,
                            "line": 210
                          }
                        }
                      },
                      "range": [
                        4152,
                        4193
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 212
                        },
                        "start": {
                          "column": 4,
                          "line": 210
                        }
                      }
                    }
                  ],
                  "range": [
                    4128,
                    4198
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 213
                    },
                    "start": {
                      "column": 5,
                      "line": 208
                    }
                  }
                },
                "range": [
                  4125,
                  4198
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 213
                  },
                  "start": {
                    "column": 2,
                    "line": 208
                  }
                }
              }
            ],
            "range": [
              4121,
              4201
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 214
              },
              "start": {
                "column": 4,
                "line": 207
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "range": [
            4117,
            4120
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 207
            },
            "start": {
              "column": 0,
              "line": 207
            }
          }
        },
        "optional": false,
        "range": [
          4117,
          4202
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 214
          },
          "start": {
            "column": 0,
            "line": 207
          }
        }
      },
      "range": [
        4117,
        4203
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 214
        },
        "start": {
          "column": 0,
          "line": 207
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nested",
        "optional": false,
        "range": [
          4222,
          4228
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 216
          },
          "start": {
            "column": 17,
            "line": 216
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
                "column": 1,
                "line": 221
              },
              "start": {
                "column": 30,
                "line": 216
              }
            },
            "range": [
              4235,
              4321
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
                    "name": "prop",
                    "optional": false,
                    "range": [
                      4241,
                      4245
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 217
                      },
                      "start": {
                        "column": 2,
                        "line": 217
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
                        "column": 3,
                        "line": 220
                      },
                      "start": {
                        "column": 6,
                        "line": 217
                      }
                    },
                    "range": [
                      4245,
                      4318
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
                            "name": "produce",
                            "optional": false,
                            "range": [
                              4253,
                              4260
                            ],
                            "loc": {
                              "end": {
                                "column": 11,
                                "line": 218
                              },
                              "start": {
                                "column": 4,
                                "line": 218
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
                                "line": 218
                              },
                              "start": {
                                "column": 11,
                                "line": 218
                              }
                            },
                            "range": [
                              4260,
                              4281
                            ],
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arg1",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 26,
                                        "line": 218
                                      },
                                      "start": {
                                        "column": 18,
                                        "line": 218
                                      }
                                    },
                                    "range": [
                                      4267,
                                      4275
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "range": [
                                        4269,
                                        4275
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 26,
                                          "line": 218
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 218
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    4263,
                                    4275
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 218
                                    },
                                    "start": {
                                      "column": 14,
                                      "line": 218
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 218
                                  },
                                  "start": {
                                    "column": 28,
                                    "line": 218
                                  }
                                },
                                "range": [
                                  4277,
                                  4281
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "range": [
                                      4280,
                                      4281
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 32,
                                        "line": 218
                                      },
                                      "start": {
                                        "column": 31,
                                        "line": 218
                                      }
                                    }
                                  },
                                  "range": [
                                    4280,
                                    4281
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 32,
                                      "line": 218
                                    },
                                    "start": {
                                      "column": 31,
                                      "line": 218
                                    }
                                  }
                                }
                              },
                              "range": [
                                4262,
                                4281
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 218
                                },
                                "start": {
                                  "column": 13,
                                  "line": 218
                                }
                              }
                            }
                          },
                          "range": [
                            4253,
                            4282
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 218
                            },
                            "start": {
                              "column": 4,
                              "line": 218
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "consume",
                            "optional": false,
                            "range": [
                              4287,
                              4294
                            ],
                            "loc": {
                              "end": {
                                "column": 11,
                                "line": 219
                              },
                              "start": {
                                "column": 4,
                                "line": 219
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
                                "line": 219
                              },
                              "start": {
                                "column": 11,
                                "line": 219
                              }
                            },
                            "range": [
                              4294,
                              4313
                            ],
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arg2",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 21,
                                        "line": 219
                                      },
                                      "start": {
                                        "column": 18,
                                        "line": 219
                                      }
                                    },
                                    "range": [
                                      4301,
                                      4304
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "range": [
                                          4303,
                                          4304
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 21,
                                            "line": 219
                                          },
                                          "start": {
                                            "column": 20,
                                            "line": 219
                                          }
                                        }
                                      },
                                      "range": [
                                        4303,
                                        4304
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 21,
                                          "line": 219
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 219
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    4297,
                                    4304
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 21,
                                      "line": 219
                                    },
                                    "start": {
                                      "column": 14,
                                      "line": 219
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 219
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 219
                                  }
                                },
                                "range": [
                                  4306,
                                  4313
                                ],
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "range": [
                                    4309,
                                    4313
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 30,
                                      "line": 219
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 219
                                    }
                                  }
                                }
                              },
                              "range": [
                                4296,
                                4313
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 219
                                },
                                "start": {
                                  "column": 13,
                                  "line": 219
                                }
                              }
                            }
                          },
                          "range": [
                            4287,
                            4314
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 219
                            },
                            "start": {
                              "column": 4,
                              "line": 219
                            }
                          }
                        }
                      ],
                      "range": [
                        4247,
                        4318
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 220
                        },
                        "start": {
                          "column": 8,
                          "line": 217
                        }
                      }
                    }
                  },
                  "range": [
                    4241,
                    4319
                  ],
                  "loc": {
                    "end": {
                      "column": 4,
                      "line": 220
                    },
                    "start": {
                      "column": 2,
                      "line": 217
                    }
                  }
                }
              ],
              "range": [
                4237,
                4321
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 221
                },
                "start": {
                  "column": 32,
                  "line": 216
                }
              }
            }
          },
          "range": [
            4232,
            4321
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 221
            },
            "start": {
              "column": 27,
              "line": 216
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 5,
            "line": 221
          },
          "start": {
            "column": 2,
            "line": 221
          }
        },
        "range": [
          4322,
          4325
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              4324,
              4325
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 221
              },
              "start": {
                "column": 4,
                "line": 221
              }
            }
          },
          "range": [
            4324,
            4325
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 221
            },
            "start": {
              "column": 4,
              "line": 221
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 26,
            "line": 216
          },
          "start": {
            "column": 23,
            "line": 216
          }
        },
        "range": [
          4228,
          4231
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
                4229,
                4230
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 216
                },
                "start": {
                  "column": 24,
                  "line": 216
                }
              }
            },
            "out": false,
            "range": [
              4229,
              4230
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 216
              },
              "start": {
                "column": 24,
                "line": 216
              }
            }
          }
        ]
      },
      "range": [
        4205,
        4326
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 221
        },
        "start": {
          "column": 0,
          "line": 216
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
            "name": "resNested",
            "optional": false,
            "range": [
              4334,
              4343
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 223
              },
              "start": {
                "column": 6,
                "line": 223
              }
            }
          },
          "init": {
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
                      "name": "prop",
                      "optional": false,
                      "range": [
                        4357,
                        4361
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 224
                        },
                        "start": {
                          "column": 2,
                          "line": 224
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "produce",
                            "optional": false,
                            "range": [
                              4369,
                              4376
                            ],
                            "loc": {
                              "end": {
                                "column": 11,
                                "line": 225
                              },
                              "start": {
                                "column": 4,
                                "line": 225
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
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "range": [
                                    4386,
                                    4387
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 225
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 225
                                    }
                                  }
                                }
                              ],
                              "range": [
                                4385,
                                4388
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 225
                                },
                                "start": {
                                  "column": 20,
                                  "line": 225
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
                                "name": "a",
                                "optional": false,
                                "range": [
                                  4379,
                                  4380
                                ],
                                "loc": {
                                  "end": {
                                    "column": 15,
                                    "line": 225
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 225
                                  }
                                }
                              }
                            ],
                            "range": [
                              4378,
                              4388
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 225
                              },
                              "start": {
                                "column": 13,
                                "line": 225
                              }
                            }
                          },
                          "range": [
                            4369,
                            4388
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 225
                            },
                            "start": {
                              "column": 4,
                              "line": 225
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "consume",
                            "optional": false,
                            "range": [
                              4394,
                              4401
                            ],
                            "loc": {
                              "end": {
                                "column": 11,
                                "line": 226
                              },
                              "start": {
                                "column": 4,
                                "line": 226
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
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "raw": "\",\"",
                                  "value": ",",
                                  "range": [
                                    4421,
                                    4424
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 34,
                                      "line": 226
                                    },
                                    "start": {
                                      "column": 31,
                                      "line": 226
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
                                    4412,
                                    4415
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 226
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 226
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "join",
                                  "optional": false,
                                  "range": [
                                    4416,
                                    4420
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 30,
                                      "line": 226
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 226
                                    }
                                  }
                                },
                                "range": [
                                  4412,
                                  4420
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 226
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 226
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                4412,
                                4425
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 226
                                },
                                "start": {
                                  "column": 22,
                                  "line": 226
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
                                "name": "arg",
                                "optional": false,
                                "range": [
                                  4404,
                                  4407
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 226
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 226
                                  }
                                }
                              }
                            ],
                            "range": [
                              4403,
                              4425
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 226
                              },
                              "start": {
                                "column": 13,
                                "line": 226
                              }
                            }
                          },
                          "range": [
                            4394,
                            4425
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 226
                            },
                            "start": {
                              "column": 4,
                              "line": 226
                            }
                          }
                        }
                      ],
                      "range": [
                        4363,
                        4430
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 227
                        },
                        "start": {
                          "column": 8,
                          "line": 224
                        }
                      }
                    },
                    "range": [
                      4357,
                      4430
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 227
                      },
                      "start": {
                        "column": 2,
                        "line": 224
                      }
                    }
                  }
                ],
                "range": [
                  4353,
                  4433
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 228
                  },
                  "start": {
                    "column": 25,
                    "line": 223
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "nested",
              "optional": false,
              "range": [
                4346,
                4352
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 223
                },
                "start": {
                  "column": 18,
                  "line": 223
                }
              }
            },
            "optional": false,
            "range": [
              4346,
              4434
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 228
              },
              "start": {
                "column": 18,
                "line": 223
              }
            }
          },
          "range": [
            4334,
            4434
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 228
            },
            "start": {
              "column": 6,
              "line": 223
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        4328,
        4435
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 228
        },
        "start": {
          "column": 0,
          "line": 223
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "twoConsumers",
        "optional": false,
        "range": [
          4454,
          4466
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 230
          },
          "start": {
            "column": 17,
            "line": 230
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
                "column": 1,
                "line": 234
              },
              "start": {
                "column": 36,
                "line": 230
              }
            },
            "range": [
              4473,
              4565
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      4479,
                      4480
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 231
                      },
                      "start": {
                        "column": 2,
                        "line": 231
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
                        "line": 231
                      },
                      "start": {
                        "column": 3,
                        "line": 231
                      }
                    },
                    "range": [
                      4480,
                      4500
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                                "column": 17,
                                "line": 231
                              },
                              "start": {
                                "column": 9,
                                "line": 231
                              }
                            },
                            "range": [
                              4486,
                              4494
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                4488,
                                4494
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 231
                                },
                                "start": {
                                  "column": 11,
                                  "line": 231
                                }
                              }
                            }
                          },
                          "range": [
                            4483,
                            4494
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 231
                            },
                            "start": {
                              "column": 6,
                              "line": 231
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 231
                          },
                          "start": {
                            "column": 19,
                            "line": 231
                          }
                        },
                        "range": [
                          4496,
                          4500
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              4499,
                              4500
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 231
                              },
                              "start": {
                                "column": 22,
                                "line": 231
                              }
                            }
                          },
                          "range": [
                            4499,
                            4500
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 231
                            },
                            "start": {
                              "column": 22,
                              "line": 231
                            }
                          }
                        }
                      },
                      "range": [
                        4482,
                        4500
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 231
                        },
                        "start": {
                          "column": 5,
                          "line": 231
                        }
                      }
                    }
                  },
                  "range": [
                    4479,
                    4501
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 231
                    },
                    "start": {
                      "column": 2,
                      "line": 231
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "consume1",
                    "optional": false,
                    "range": [
                      4504,
                      4512
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 232
                      },
                      "start": {
                        "column": 2,
                        "line": 232
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
                        "column": 29,
                        "line": 232
                      },
                      "start": {
                        "column": 10,
                        "line": 232
                      }
                    },
                    "range": [
                      4512,
                      4531
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 232
                              },
                              "start": {
                                "column": 17,
                                "line": 232
                              }
                            },
                            "range": [
                              4519,
                              4522
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  4521,
                                  4522
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 232
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 232
                                  }
                                }
                              },
                              "range": [
                                4521,
                                4522
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 232
                                },
                                "start": {
                                  "column": 19,
                                  "line": 232
                                }
                              }
                            }
                          },
                          "range": [
                            4515,
                            4522
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 232
                            },
                            "start": {
                              "column": 13,
                              "line": 232
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 232
                          },
                          "start": {
                            "column": 22,
                            "line": 232
                          }
                        },
                        "range": [
                          4524,
                          4531
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            4527,
                            4531
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 232
                            },
                            "start": {
                              "column": 25,
                              "line": 232
                            }
                          }
                        }
                      },
                      "range": [
                        4514,
                        4531
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 232
                        },
                        "start": {
                          "column": 12,
                          "line": 232
                        }
                      }
                    }
                  },
                  "range": [
                    4504,
                    4532
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 232
                    },
                    "start": {
                      "column": 2,
                      "line": 232
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "consume2",
                    "optional": false,
                    "range": [
                      4535,
                      4543
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 233
                      },
                      "start": {
                        "column": 2,
                        "line": 233
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
                        "column": 29,
                        "line": 233
                      },
                      "start": {
                        "column": 10,
                        "line": 233
                      }
                    },
                    "range": [
                      4543,
                      4562
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 233
                              },
                              "start": {
                                "column": 17,
                                "line": 233
                              }
                            },
                            "range": [
                              4550,
                              4553
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  4552,
                                  4553
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 233
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 233
                                  }
                                }
                              },
                              "range": [
                                4552,
                                4553
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 233
                                },
                                "start": {
                                  "column": 19,
                                  "line": 233
                                }
                              }
                            }
                          },
                          "range": [
                            4546,
                            4553
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 233
                            },
                            "start": {
                              "column": 13,
                              "line": 233
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 233
                          },
                          "start": {
                            "column": 22,
                            "line": 233
                          }
                        },
                        "range": [
                          4555,
                          4562
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            4558,
                            4562
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 233
                            },
                            "start": {
                              "column": 25,
                              "line": 233
                            }
                          }
                        }
                      },
                      "range": [
                        4545,
                        4562
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 233
                        },
                        "start": {
                          "column": 12,
                          "line": 233
                        }
                      }
                    }
                  },
                  "range": [
                    4535,
                    4563
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 233
                    },
                    "start": {
                      "column": 2,
                      "line": 233
                    }
                  }
                }
              ],
              "range": [
                4475,
                4565
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 234
                },
                "start": {
                  "column": 38,
                  "line": 230
                }
              }
            }
          },
          "range": [
            4470,
            4565
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 234
            },
            "start": {
              "column": 33,
              "line": 230
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 5,
            "line": 234
          },
          "start": {
            "column": 2,
            "line": 234
          }
        },
        "range": [
          4566,
          4569
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              4568,
              4569
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 234
              },
              "start": {
                "column": 4,
                "line": 234
              }
            }
          },
          "range": [
            4568,
            4569
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 234
            },
            "start": {
              "column": 4,
              "line": 234
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 32,
            "line": 230
          },
          "start": {
            "column": 29,
            "line": 230
          }
        },
        "range": [
          4466,
          4469
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
                4467,
                4468
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 230
                },
                "start": {
                  "column": 30,
                  "line": 230
                }
              }
            },
            "out": false,
            "range": [
              4467,
              4468
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 230
              },
              "start": {
                "column": 30,
                "line": 230
              }
            }
          }
        ]
      },
      "range": [
        4437,
        4570
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 234
        },
        "start": {
          "column": 0,
          "line": 230
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
            "name": "resTwoConsumers",
            "optional": false,
            "range": [
              4578,
              4593
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 236
              },
              "start": {
                "column": 6,
                "line": 236
              }
            }
          },
          "init": {
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
                      "name": "a",
                      "optional": false,
                      "range": [
                        4613,
                        4614
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 237
                        },
                        "start": {
                          "column": 2,
                          "line": 237
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
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "range": [
                              4626,
                              4629
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 237
                              },
                              "start": {
                                "column": 15,
                                "line": 237
                              }
                            }
                          }
                        ],
                        "range": [
                          4625,
                          4630
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 237
                          },
                          "start": {
                            "column": 14,
                            "line": 237
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
                          "name": "arg",
                          "optional": false,
                          "range": [
                            4617,
                            4620
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 237
                            },
                            "start": {
                              "column": 6,
                              "line": 237
                            }
                          }
                        }
                      ],
                      "range": [
                        4616,
                        4630
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 237
                        },
                        "start": {
                          "column": 5,
                          "line": 237
                        }
                      }
                    },
                    "range": [
                      4613,
                      4630
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 237
                      },
                      "start": {
                        "column": 2,
                        "line": 237
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "consume1",
                      "optional": false,
                      "range": [
                        4634,
                        4642
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 238
                        },
                        "start": {
                          "column": 2,
                          "line": 238
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
                        "body": [],
                        "range": [
                          4654,
                          4656
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 238
                          },
                          "start": {
                            "column": 22,
                            "line": 238
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
                          "name": "arg1",
                          "optional": false,
                          "range": [
                            4645,
                            4649
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 238
                            },
                            "start": {
                              "column": 13,
                              "line": 238
                            }
                          }
                        }
                      ],
                      "range": [
                        4644,
                        4656
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 238
                        },
                        "start": {
                          "column": 12,
                          "line": 238
                        }
                      }
                    },
                    "range": [
                      4634,
                      4656
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 238
                      },
                      "start": {
                        "column": 2,
                        "line": 238
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "consume2",
                      "optional": false,
                      "range": [
                        4660,
                        4668
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 239
                        },
                        "start": {
                          "column": 2,
                          "line": 239
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
                        "body": [],
                        "range": [
                          4680,
                          4682
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 239
                          },
                          "start": {
                            "column": 22,
                            "line": 239
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
                          "name": "arg2",
                          "optional": false,
                          "range": [
                            4671,
                            4675
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 239
                            },
                            "start": {
                              "column": 13,
                              "line": 239
                            }
                          }
                        }
                      ],
                      "range": [
                        4670,
                        4682
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 239
                        },
                        "start": {
                          "column": 12,
                          "line": 239
                        }
                      }
                    },
                    "range": [
                      4660,
                      4682
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 239
                      },
                      "start": {
                        "column": 2,
                        "line": 239
                      }
                    }
                  }
                ],
                "range": [
                  4609,
                  4685
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 240
                  },
                  "start": {
                    "column": 37,
                    "line": 236
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "twoConsumers",
              "optional": false,
              "range": [
                4596,
                4608
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 236
                },
                "start": {
                  "column": 24,
                  "line": 236
                }
              }
            },
            "optional": false,
            "range": [
              4596,
              4686
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 240
              },
              "start": {
                "column": 24,
                "line": 236
              }
            }
          },
          "range": [
            4578,
            4686
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 240
            },
            "start": {
              "column": 6,
              "line": 236
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        4572,
        4687
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 240
        },
        "start": {
          "column": 0,
          "line": 236
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "multipleProducersBeforeConsumers",
        "optional": false,
        "range": [
          4706,
          4738
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 242
          },
          "start": {
            "column": 17,
            "line": 242
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
                "column": 1,
                "line": 247
              },
              "start": {
                "column": 60,
                "line": 242
              }
            },
            "range": [
              4749,
              4868
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      4755,
                      4756
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 243
                      },
                      "start": {
                        "column": 2,
                        "line": 243
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
                        "line": 243
                      },
                      "start": {
                        "column": 3,
                        "line": 243
                      }
                    },
                    "range": [
                      4756,
                      4776
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                                "column": 17,
                                "line": 243
                              },
                              "start": {
                                "column": 9,
                                "line": 243
                              }
                            },
                            "range": [
                              4762,
                              4770
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                4764,
                                4770
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 243
                                },
                                "start": {
                                  "column": 11,
                                  "line": 243
                                }
                              }
                            }
                          },
                          "range": [
                            4759,
                            4770
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 243
                            },
                            "start": {
                              "column": 6,
                              "line": 243
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 243
                          },
                          "start": {
                            "column": 19,
                            "line": 243
                          }
                        },
                        "range": [
                          4772,
                          4776
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              4775,
                              4776
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 243
                              },
                              "start": {
                                "column": 22,
                                "line": 243
                              }
                            }
                          },
                          "range": [
                            4775,
                            4776
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 243
                            },
                            "start": {
                              "column": 22,
                              "line": 243
                            }
                          }
                        }
                      },
                      "range": [
                        4758,
                        4776
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 243
                        },
                        "start": {
                          "column": 5,
                          "line": 243
                        }
                      }
                    }
                  },
                  "range": [
                    4755,
                    4777
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 243
                    },
                    "start": {
                      "column": 2,
                      "line": 243
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      4780,
                      4781
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 244
                      },
                      "start": {
                        "column": 2,
                        "line": 244
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
                        "column": 24,
                        "line": 244
                      },
                      "start": {
                        "column": 3,
                        "line": 244
                      }
                    },
                    "range": [
                      4781,
                      4802
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                                "column": 17,
                                "line": 244
                              },
                              "start": {
                                "column": 9,
                                "line": 244
                              }
                            },
                            "range": [
                              4787,
                              4795
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                4789,
                                4795
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 244
                                },
                                "start": {
                                  "column": 11,
                                  "line": 244
                                }
                              }
                            }
                          },
                          "range": [
                            4784,
                            4795
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 244
                            },
                            "start": {
                              "column": 6,
                              "line": 244
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 244
                          },
                          "start": {
                            "column": 19,
                            "line": 244
                          }
                        },
                        "range": [
                          4797,
                          4802
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T2",
                            "optional": false,
                            "range": [
                              4800,
                              4802
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 244
                              },
                              "start": {
                                "column": 22,
                                "line": 244
                              }
                            }
                          },
                          "range": [
                            4800,
                            4802
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 244
                            },
                            "start": {
                              "column": 22,
                              "line": 244
                            }
                          }
                        }
                      },
                      "range": [
                        4783,
                        4802
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 244
                        },
                        "start": {
                          "column": 5,
                          "line": 244
                        }
                      }
                    }
                  },
                  "range": [
                    4780,
                    4803
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 244
                    },
                    "start": {
                      "column": 2,
                      "line": 244
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "consume1",
                    "optional": false,
                    "range": [
                      4806,
                      4814
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 245
                      },
                      "start": {
                        "column": 2,
                        "line": 245
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
                        "column": 29,
                        "line": 245
                      },
                      "start": {
                        "column": 10,
                        "line": 245
                      }
                    },
                    "range": [
                      4814,
                      4833
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 245
                              },
                              "start": {
                                "column": 17,
                                "line": 245
                              }
                            },
                            "range": [
                              4821,
                              4824
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  4823,
                                  4824
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 245
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 245
                                  }
                                }
                              },
                              "range": [
                                4823,
                                4824
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 245
                                },
                                "start": {
                                  "column": 19,
                                  "line": 245
                                }
                              }
                            }
                          },
                          "range": [
                            4817,
                            4824
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 245
                            },
                            "start": {
                              "column": 13,
                              "line": 245
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 245
                          },
                          "start": {
                            "column": 22,
                            "line": 245
                          }
                        },
                        "range": [
                          4826,
                          4833
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            4829,
                            4833
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 245
                            },
                            "start": {
                              "column": 25,
                              "line": 245
                            }
                          }
                        }
                      },
                      "range": [
                        4816,
                        4833
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 245
                        },
                        "start": {
                          "column": 12,
                          "line": 245
                        }
                      }
                    }
                  },
                  "range": [
                    4806,
                    4834
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 245
                    },
                    "start": {
                      "column": 2,
                      "line": 245
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "consume2",
                    "optional": false,
                    "range": [
                      4837,
                      4845
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 246
                      },
                      "start": {
                        "column": 2,
                        "line": 246
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
                        "line": 246
                      },
                      "start": {
                        "column": 10,
                        "line": 246
                      }
                    },
                    "range": [
                      4845,
                      4865
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 246
                              },
                              "start": {
                                "column": 17,
                                "line": 246
                              }
                            },
                            "range": [
                              4852,
                              4856
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T2",
                                "optional": false,
                                "range": [
                                  4854,
                                  4856
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 246
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 246
                                  }
                                }
                              },
                              "range": [
                                4854,
                                4856
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 246
                                },
                                "start": {
                                  "column": 19,
                                  "line": 246
                                }
                              }
                            }
                          },
                          "range": [
                            4848,
                            4856
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 246
                            },
                            "start": {
                              "column": 13,
                              "line": 246
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 246
                          },
                          "start": {
                            "column": 23,
                            "line": 246
                          }
                        },
                        "range": [
                          4858,
                          4865
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            4861,
                            4865
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 246
                            },
                            "start": {
                              "column": 26,
                              "line": 246
                            }
                          }
                        }
                      },
                      "range": [
                        4847,
                        4865
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 246
                        },
                        "start": {
                          "column": 12,
                          "line": 246
                        }
                      }
                    }
                  },
                  "range": [
                    4837,
                    4866
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 246
                    },
                    "start": {
                      "column": 2,
                      "line": 246
                    }
                  }
                }
              ],
              "range": [
                4751,
                4868
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 247
                },
                "start": {
                  "column": 62,
                  "line": 242
                }
              }
            }
          },
          "range": [
            4746,
            4868
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 247
            },
            "start": {
              "column": 57,
              "line": 242
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 11,
            "line": 247
          },
          "start": {
            "column": 2,
            "line": 247
          }
        },
        "range": [
          4869,
          4878
        ],
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  4872,
                  4873
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 247
                  },
                  "start": {
                    "column": 5,
                    "line": 247
                  }
                }
              },
              "range": [
                4872,
                4873
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 247
                },
                "start": {
                  "column": 5,
                  "line": 247
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T2",
                "optional": false,
                "range": [
                  4875,
                  4877
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 247
                  },
                  "start": {
                    "column": 8,
                    "line": 247
                  }
                }
              },
              "range": [
                4875,
                4877
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 247
                },
                "start": {
                  "column": 8,
                  "line": 247
                }
              }
            }
          ],
          "range": [
            4871,
            4878
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 247
            },
            "start": {
              "column": 4,
              "line": 247
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 56,
            "line": 242
          },
          "start": {
            "column": 49,
            "line": 242
          }
        },
        "range": [
          4738,
          4745
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
                4739,
                4740
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 242
                },
                "start": {
                  "column": 50,
                  "line": 242
                }
              }
            },
            "out": false,
            "range": [
              4739,
              4740
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 242
              },
              "start": {
                "column": 50,
                "line": 242
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
              "name": "T2",
              "optional": false,
              "range": [
                4742,
                4744
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 242
                },
                "start": {
                  "column": 53,
                  "line": 242
                }
              }
            },
            "out": false,
            "range": [
              4742,
              4744
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 242
              },
              "start": {
                "column": 53,
                "line": 242
              }
            }
          }
        ]
      },
      "range": [
        4689,
        4879
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 247
        },
        "start": {
          "column": 0,
          "line": 242
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
            "name": "resMultipleProducersBeforeConsumers",
            "optional": false,
            "range": [
              4887,
              4922
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 249
              },
              "start": {
                "column": 6,
                "line": 249
              }
            }
          },
          "init": {
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
                      "name": "a",
                      "optional": false,
                      "range": [
                        4962,
                        4963
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 250
                        },
                        "start": {
                          "column": 2,
                          "line": 250
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
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "range": [
                              4975,
                              4978
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 250
                              },
                              "start": {
                                "column": 15,
                                "line": 250
                              }
                            }
                          }
                        ],
                        "range": [
                          4974,
                          4979
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 250
                          },
                          "start": {
                            "column": 14,
                            "line": 250
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
                          "name": "arg",
                          "optional": false,
                          "range": [
                            4966,
                            4969
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 250
                            },
                            "start": {
                              "column": 6,
                              "line": 250
                            }
                          }
                        }
                      ],
                      "range": [
                        4965,
                        4979
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 250
                        },
                        "start": {
                          "column": 5,
                          "line": 250
                        }
                      }
                    },
                    "range": [
                      4962,
                      4979
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 250
                      },
                      "start": {
                        "column": 2,
                        "line": 250
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        4983,
                        4984
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 251
                        },
                        "start": {
                          "column": 2,
                          "line": 251
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
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "range": [
                              5002,
                              5005
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 251
                              },
                              "start": {
                                "column": 21,
                                "line": 251
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Number",
                          "optional": false,
                          "range": [
                            4995,
                            5001
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 251
                            },
                            "start": {
                              "column": 14,
                              "line": 251
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          4995,
                          5006
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 251
                          },
                          "start": {
                            "column": 14,
                            "line": 251
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
                          "name": "arg",
                          "optional": false,
                          "range": [
                            4987,
                            4990
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 251
                            },
                            "start": {
                              "column": 6,
                              "line": 251
                            }
                          }
                        }
                      ],
                      "range": [
                        4986,
                        5006
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 251
                        },
                        "start": {
                          "column": 5,
                          "line": 251
                        }
                      }
                    },
                    "range": [
                      4983,
                      5006
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 251
                      },
                      "start": {
                        "column": 2,
                        "line": 251
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "consume1",
                      "optional": false,
                      "range": [
                        5010,
                        5018
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 252
                        },
                        "start": {
                          "column": 2,
                          "line": 252
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
                        "body": [],
                        "range": [
                          5030,
                          5032
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 252
                          },
                          "start": {
                            "column": 22,
                            "line": 252
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
                          "name": "arg1",
                          "optional": false,
                          "range": [
                            5021,
                            5025
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 252
                            },
                            "start": {
                              "column": 13,
                              "line": 252
                            }
                          }
                        }
                      ],
                      "range": [
                        5020,
                        5032
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 252
                        },
                        "start": {
                          "column": 12,
                          "line": 252
                        }
                      }
                    },
                    "range": [
                      5010,
                      5032
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 252
                      },
                      "start": {
                        "column": 2,
                        "line": 252
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "consume2",
                      "optional": false,
                      "range": [
                        5036,
                        5044
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 253
                        },
                        "start": {
                          "column": 2,
                          "line": 253
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
                        "body": [],
                        "range": [
                          5056,
                          5058
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 253
                          },
                          "start": {
                            "column": 22,
                            "line": 253
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
                          "name": "arg2",
                          "optional": false,
                          "range": [
                            5047,
                            5051
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 253
                            },
                            "start": {
                              "column": 13,
                              "line": 253
                            }
                          }
                        }
                      ],
                      "range": [
                        5046,
                        5058
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 253
                        },
                        "start": {
                          "column": 12,
                          "line": 253
                        }
                      }
                    },
                    "range": [
                      5036,
                      5058
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 253
                      },
                      "start": {
                        "column": 2,
                        "line": 253
                      }
                    }
                  }
                ],
                "range": [
                  4958,
                  5061
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 254
                  },
                  "start": {
                    "column": 77,
                    "line": 249
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "multipleProducersBeforeConsumers",
              "optional": false,
              "range": [
                4925,
                4957
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 249
                },
                "start": {
                  "column": 44,
                  "line": 249
                }
              }
            },
            "optional": false,
            "range": [
              4925,
              5062
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 254
              },
              "start": {
                "column": 44,
                "line": 249
              }
            }
          },
          "range": [
            4887,
            5062
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 254
            },
            "start": {
              "column": 6,
              "line": 249
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        4881,
        5063
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 254
        },
        "start": {
          "column": 0,
          "line": 249
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withConditionalExpression",
        "optional": false,
        "range": [
          5082,
          5107
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 256
          },
          "start": {
            "column": 17,
            "line": 256
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
                "column": 1,
                "line": 260
              },
              "start": {
                "column": 57,
                "line": 256
              }
            },
            "range": [
              5122,
              5198
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      5128,
                      5129
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 257
                      },
                      "start": {
                        "column": 2,
                        "line": 257
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
                        "column": 24,
                        "line": 257
                      },
                      "start": {
                        "column": 3,
                        "line": 257
                      }
                    },
                    "range": [
                      5129,
                      5150
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 257
                              },
                              "start": {
                                "column": 10,
                                "line": 257
                              }
                            },
                            "range": [
                              5136,
                              5144
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                5138,
                                5144
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 257
                                },
                                "start": {
                                  "column": 12,
                                  "line": 257
                                }
                              }
                            }
                          },
                          "range": [
                            5132,
                            5144
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 257
                            },
                            "start": {
                              "column": 6,
                              "line": 257
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 257
                          },
                          "start": {
                            "column": 20,
                            "line": 257
                          }
                        },
                        "range": [
                          5146,
                          5150
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              5149,
                              5150
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 257
                              },
                              "start": {
                                "column": 23,
                                "line": 257
                              }
                            }
                          },
                          "range": [
                            5149,
                            5150
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 257
                            },
                            "start": {
                              "column": 23,
                              "line": 257
                            }
                          }
                        }
                      },
                      "range": [
                        5131,
                        5150
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 257
                        },
                        "start": {
                          "column": 5,
                          "line": 257
                        }
                      }
                    }
                  },
                  "range": [
                    5128,
                    5151
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 257
                    },
                    "start": {
                      "column": 2,
                      "line": 257
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      5154,
                      5155
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 258
                      },
                      "start": {
                        "column": 2,
                        "line": 258
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
                        "line": 258
                      },
                      "start": {
                        "column": 3,
                        "line": 258
                      }
                    },
                    "range": [
                      5155,
                      5172
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 258
                              },
                              "start": {
                                "column": 10,
                                "line": 258
                              }
                            },
                            "range": [
                              5162,
                              5165
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  5164,
                                  5165
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 258
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 258
                                  }
                                }
                              },
                              "range": [
                                5164,
                                5165
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 258
                                },
                                "start": {
                                  "column": 12,
                                  "line": 258
                                }
                              }
                            }
                          },
                          "range": [
                            5158,
                            5165
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 258
                            },
                            "start": {
                              "column": 6,
                              "line": 258
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 258
                          },
                          "start": {
                            "column": 15,
                            "line": 258
                          }
                        },
                        "range": [
                          5167,
                          5172
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T2",
                            "optional": false,
                            "range": [
                              5170,
                              5172
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 258
                              },
                              "start": {
                                "column": 18,
                                "line": 258
                              }
                            }
                          },
                          "range": [
                            5170,
                            5172
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 258
                            },
                            "start": {
                              "column": 18,
                              "line": 258
                            }
                          }
                        }
                      },
                      "range": [
                        5157,
                        5172
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 258
                        },
                        "start": {
                          "column": 5,
                          "line": 258
                        }
                      }
                    }
                  },
                  "range": [
                    5154,
                    5173
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 258
                    },
                    "start": {
                      "column": 2,
                      "line": 258
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "range": [
                      5176,
                      5177
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 259
                      },
                      "start": {
                        "column": 2,
                        "line": 259
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
                        "column": 21,
                        "line": 259
                      },
                      "start": {
                        "column": 3,
                        "line": 259
                      }
                    },
                    "range": [
                      5177,
                      5195
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 259
                              },
                              "start": {
                                "column": 10,
                                "line": 259
                              }
                            },
                            "range": [
                              5184,
                              5188
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T2",
                                "optional": false,
                                "range": [
                                  5186,
                                  5188
                                ],
                                "loc": {
                                  "end": {
                                    "column": 14,
                                    "line": 259
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 259
                                  }
                                }
                              },
                              "range": [
                                5186,
                                5188
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 259
                                },
                                "start": {
                                  "column": 12,
                                  "line": 259
                                }
                              }
                            }
                          },
                          "range": [
                            5180,
                            5188
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 259
                            },
                            "start": {
                              "column": 6,
                              "line": 259
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 259
                          },
                          "start": {
                            "column": 16,
                            "line": 259
                          }
                        },
                        "range": [
                          5190,
                          5195
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T3",
                            "optional": false,
                            "range": [
                              5193,
                              5195
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 259
                              },
                              "start": {
                                "column": 19,
                                "line": 259
                              }
                            }
                          },
                          "range": [
                            5193,
                            5195
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 259
                            },
                            "start": {
                              "column": 19,
                              "line": 259
                            }
                          }
                        }
                      },
                      "range": [
                        5179,
                        5195
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 259
                        },
                        "start": {
                          "column": 5,
                          "line": 259
                        }
                      }
                    }
                  },
                  "range": [
                    5176,
                    5196
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 259
                    },
                    "start": {
                      "column": 2,
                      "line": 259
                    }
                  }
                }
              ],
              "range": [
                5124,
                5198
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 260
                },
                "start": {
                  "column": 59,
                  "line": 256
                }
              }
            }
          },
          "range": [
            5119,
            5198
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 260
            },
            "start": {
              "column": 54,
              "line": 256
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 15,
            "line": 260
          },
          "start": {
            "column": 2,
            "line": 260
          }
        },
        "range": [
          5199,
          5212
        ],
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  5202,
                  5203
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 260
                  },
                  "start": {
                    "column": 5,
                    "line": 260
                  }
                }
              },
              "range": [
                5202,
                5203
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 260
                },
                "start": {
                  "column": 5,
                  "line": 260
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T2",
                "optional": false,
                "range": [
                  5205,
                  5207
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 260
                  },
                  "start": {
                    "column": 8,
                    "line": 260
                  }
                }
              },
              "range": [
                5205,
                5207
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 260
                },
                "start": {
                  "column": 8,
                  "line": 260
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T3",
                "optional": false,
                "range": [
                  5209,
                  5211
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 260
                  },
                  "start": {
                    "column": 12,
                    "line": 260
                  }
                }
              },
              "range": [
                5209,
                5211
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 260
                },
                "start": {
                  "column": 12,
                  "line": 260
                }
              }
            }
          ],
          "range": [
            5201,
            5212
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 260
            },
            "start": {
              "column": 4,
              "line": 260
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 53,
            "line": 256
          },
          "start": {
            "column": 42,
            "line": 256
          }
        },
        "range": [
          5107,
          5118
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
                5108,
                5109
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 256
                },
                "start": {
                  "column": 43,
                  "line": 256
                }
              }
            },
            "out": false,
            "range": [
              5108,
              5109
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 256
              },
              "start": {
                "column": 43,
                "line": 256
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
              "name": "T2",
              "optional": false,
              "range": [
                5111,
                5113
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 256
                },
                "start": {
                  "column": 46,
                  "line": 256
                }
              }
            },
            "out": false,
            "range": [
              5111,
              5113
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 256
              },
              "start": {
                "column": 46,
                "line": 256
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
              "name": "T3",
              "optional": false,
              "range": [
                5115,
                5117
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 256
                },
                "start": {
                  "column": 50,
                  "line": 256
                }
              }
            },
            "out": false,
            "range": [
              5115,
              5117
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 256
              },
              "start": {
                "column": 50,
                "line": 256
              }
            }
          }
        ]
      },
      "range": [
        5065,
        5213
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 260
        },
        "start": {
          "column": 0,
          "line": 256
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
            "name": "resWithConditionalExpression",
            "optional": false,
            "range": [
              5221,
              5249
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 262
              },
              "start": {
                "column": 6,
                "line": 262
              }
            }
          },
          "init": {
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
                      "name": "a",
                      "optional": false,
                      "range": [
                        5282,
                        5283
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 263
                        },
                        "start": {
                          "column": 2,
                          "line": 263
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
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "range": [
                              5295,
                              5298
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 263
                              },
                              "start": {
                                "column": 15,
                                "line": 263
                              }
                            }
                          }
                        ],
                        "range": [
                          5294,
                          5299
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 263
                          },
                          "start": {
                            "column": 14,
                            "line": 263
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
                          "name": "arg",
                          "optional": false,
                          "range": [
                            5286,
                            5289
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 263
                            },
                            "start": {
                              "column": 6,
                              "line": 263
                            }
                          }
                        }
                      ],
                      "range": [
                        5285,
                        5299
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 263
                        },
                        "start": {
                          "column": 5,
                          "line": 263
                        }
                      }
                    },
                    "range": [
                      5282,
                      5299
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 263
                      },
                      "start": {
                        "column": 2,
                        "line": 263
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        5303,
                        5304
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 264
                        },
                        "start": {
                          "column": 2,
                          "line": 264
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ConditionalExpression",
                      "alternate": {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Literal",
                            "raw": "\"two\"",
                            "value": "two",
                            "range": [
                              5359,
                              5364
                            ],
                            "loc": {
                              "end": {
                                "column": 63,
                                "line": 264
                              },
                              "start": {
                                "column": 58,
                                "line": 264
                              }
                            }
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "const",
                              "optional": false,
                              "range": [
                                5368,
                                5373
                              ],
                              "loc": {
                                "end": {
                                  "column": 72,
                                  "line": 264
                                },
                                "start": {
                                  "column": 67,
                                  "line": 264
                                }
                              }
                            },
                            "range": [
                              5368,
                              5373
                            ],
                            "loc": {
                              "end": {
                                "column": 72,
                                "line": 264
                              },
                              "start": {
                                "column": 67,
                                "line": 264
                              }
                            }
                          },
                          "range": [
                            5359,
                            5373
                          ],
                          "loc": {
                            "end": {
                              "column": 72,
                              "line": 264
                            },
                            "start": {
                              "column": 58,
                              "line": 264
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
                            "name": "arg",
                            "optional": false,
                            "range": [
                              5351,
                              5354
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 264
                              },
                              "start": {
                                "column": 50,
                                "line": 264
                              }
                            }
                          }
                        ],
                        "range": [
                          5350,
                          5373
                        ],
                        "loc": {
                          "end": {
                            "column": 72,
                            "line": 264
                          },
                          "start": {
                            "column": 49,
                            "line": 264
                          }
                        }
                      },
                      "consequent": {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Literal",
                            "raw": "\"first\"",
                            "value": "first",
                            "range": [
                              5331,
                              5338
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 264
                              },
                              "start": {
                                "column": 30,
                                "line": 264
                              }
                            }
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "const",
                              "optional": false,
                              "range": [
                                5342,
                                5347
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 264
                                },
                                "start": {
                                  "column": 41,
                                  "line": 264
                                }
                              }
                            },
                            "range": [
                              5342,
                              5347
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 264
                              },
                              "start": {
                                "column": 41,
                                "line": 264
                              }
                            }
                          },
                          "range": [
                            5331,
                            5347
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 264
                            },
                            "start": {
                              "column": 30,
                              "line": 264
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
                            "name": "arg",
                            "optional": false,
                            "range": [
                              5323,
                              5326
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 264
                              },
                              "start": {
                                "column": 22,
                                "line": 264
                              }
                            }
                          }
                        ],
                        "range": [
                          5322,
                          5347
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 264
                          },
                          "start": {
                            "column": 21,
                            "line": 264
                          }
                        }
                      },
                      "test": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "range": [
                              5306,
                              5310
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 264
                              },
                              "start": {
                                "column": 5,
                                "line": 264
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "range": [
                              5311,
                              5317
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 264
                              },
                              "start": {
                                "column": 10,
                                "line": 264
                              }
                            }
                          },
                          "range": [
                            5306,
                            5317
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 264
                            },
                            "start": {
                              "column": 5,
                              "line": 264
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          5306,
                          5319
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 264
                          },
                          "start": {
                            "column": 5,
                            "line": 264
                          }
                        }
                      },
                      "range": [
                        5306,
                        5373
                      ],
                      "loc": {
                        "end": {
                          "column": 72,
                          "line": 264
                        },
                        "start": {
                          "column": 5,
                          "line": 264
                        }
                      }
                    },
                    "range": [
                      5303,
                      5373
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 264
                      },
                      "start": {
                        "column": 2,
                        "line": 264
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "range": [
                        5377,
                        5378
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 265
                        },
                        "start": {
                          "column": 2,
                          "line": 265
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
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "range": [
                              5397,
                              5400
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 265
                              },
                              "start": {
                                "column": 22,
                                "line": 265
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Boolean",
                          "optional": false,
                          "range": [
                            5389,
                            5396
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 265
                            },
                            "start": {
                              "column": 14,
                              "line": 265
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          5389,
                          5401
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 265
                          },
                          "start": {
                            "column": 14,
                            "line": 265
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
                          "name": "arg",
                          "optional": false,
                          "range": [
                            5381,
                            5384
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 265
                            },
                            "start": {
                              "column": 6,
                              "line": 265
                            }
                          }
                        }
                      ],
                      "range": [
                        5380,
                        5401
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 265
                        },
                        "start": {
                          "column": 5,
                          "line": 265
                        }
                      }
                    },
                    "range": [
                      5377,
                      5401
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 265
                      },
                      "start": {
                        "column": 2,
                        "line": 265
                      }
                    }
                  }
                ],
                "range": [
                  5278,
                  5404
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 266
                  },
                  "start": {
                    "column": 63,
                    "line": 262
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "withConditionalExpression",
              "optional": false,
              "range": [
                5252,
                5277
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 262
                },
                "start": {
                  "column": 37,
                  "line": 262
                }
              }
            },
            "optional": false,
            "range": [
              5252,
              5405
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 266
              },
              "start": {
                "column": 37,
                "line": 262
              }
            }
          },
          "range": [
            5221,
            5405
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 266
            },
            "start": {
              "column": 6,
              "line": 262
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        5215,
        5406
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 266
        },
        "start": {
          "column": 0,
          "line": 262
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "onion",
        "optional": false,
        "range": [
          5425,
          5430
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 268
          },
          "start": {
            "column": 17,
            "line": 268
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
                "column": 1,
                "line": 276
              },
              "start": {
                "column": 37,
                "line": 268
              }
            },
            "range": [
              5445,
              5566
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      5451,
                      5452
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 269
                      },
                      "start": {
                        "column": 2,
                        "line": 269
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
                        "column": 24,
                        "line": 269
                      },
                      "start": {
                        "column": 3,
                        "line": 269
                      }
                    },
                    "range": [
                      5452,
                      5473
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 269
                              },
                              "start": {
                                "column": 10,
                                "line": 269
                              }
                            },
                            "range": [
                              5459,
                              5467
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                5461,
                                5467
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 269
                                },
                                "start": {
                                  "column": 12,
                                  "line": 269
                                }
                              }
                            }
                          },
                          "range": [
                            5455,
                            5467
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 269
                            },
                            "start": {
                              "column": 6,
                              "line": 269
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 269
                          },
                          "start": {
                            "column": 20,
                            "line": 269
                          }
                        },
                        "range": [
                          5469,
                          5473
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              5472,
                              5473
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 269
                              },
                              "start": {
                                "column": 23,
                                "line": 269
                              }
                            }
                          },
                          "range": [
                            5472,
                            5473
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 269
                            },
                            "start": {
                              "column": 23,
                              "line": 269
                            }
                          }
                        }
                      },
                      "range": [
                        5454,
                        5473
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 269
                        },
                        "start": {
                          "column": 5,
                          "line": 269
                        }
                      }
                    }
                  },
                  "range": [
                    5451,
                    5474
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 269
                    },
                    "start": {
                      "column": 2,
                      "line": 269
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nested",
                    "optional": false,
                    "range": [
                      5477,
                      5483
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 270
                      },
                      "start": {
                        "column": 2,
                        "line": 270
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
                        "column": 3,
                        "line": 275
                      },
                      "start": {
                        "column": 8,
                        "line": 270
                      }
                    },
                    "range": [
                      5483,
                      5563
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
                            "name": "b",
                            "optional": false,
                            "range": [
                              5491,
                              5492
                            ],
                            "loc": {
                              "end": {
                                "column": 5,
                                "line": 271
                              },
                              "start": {
                                "column": 4,
                                "line": 271
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
                                "column": 22,
                                "line": 271
                              },
                              "start": {
                                "column": 5,
                                "line": 271
                              }
                            },
                            "range": [
                              5492,
                              5509
                            ],
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arg2",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 15,
                                        "line": 271
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 271
                                      }
                                    },
                                    "range": [
                                      5499,
                                      5502
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "range": [
                                          5501,
                                          5502
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 15,
                                            "line": 271
                                          },
                                          "start": {
                                            "column": 14,
                                            "line": 271
                                          }
                                        }
                                      },
                                      "range": [
                                        5501,
                                        5502
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 15,
                                          "line": 271
                                        },
                                        "start": {
                                          "column": 14,
                                          "line": 271
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    5495,
                                    5502
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 15,
                                      "line": 271
                                    },
                                    "start": {
                                      "column": 8,
                                      "line": 271
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 271
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 271
                                  }
                                },
                                "range": [
                                  5504,
                                  5509
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T2",
                                    "optional": false,
                                    "range": [
                                      5507,
                                      5509
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 22,
                                        "line": 271
                                      },
                                      "start": {
                                        "column": 20,
                                        "line": 271
                                      }
                                    }
                                  },
                                  "range": [
                                    5507,
                                    5509
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 271
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 271
                                    }
                                  }
                                }
                              },
                              "range": [
                                5494,
                                5509
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 271
                                },
                                "start": {
                                  "column": 7,
                                  "line": 271
                                }
                              }
                            }
                          },
                          "range": [
                            5491,
                            5510
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 271
                            },
                            "start": {
                              "column": 4,
                              "line": 271
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nested2",
                            "optional": false,
                            "range": [
                              5515,
                              5522
                            ],
                            "loc": {
                              "end": {
                                "column": 11,
                                "line": 272
                              },
                              "start": {
                                "column": 4,
                                "line": 272
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
                                "column": 5,
                                "line": 274
                              },
                              "start": {
                                "column": 11,
                                "line": 272
                              }
                            },
                            "range": [
                              5522,
                              5558
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
                                    "name": "c",
                                    "optional": false,
                                    "range": [
                                      5532,
                                      5533
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 7,
                                        "line": 273
                                      },
                                      "start": {
                                        "column": 6,
                                        "line": 273
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
                                        "column": 25,
                                        "line": 273
                                      },
                                      "start": {
                                        "column": 7,
                                        "line": 273
                                      }
                                    },
                                    "range": [
                                      5533,
                                      5551
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSFunctionType",
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "arg2",
                                          "optional": false,
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "loc": {
                                              "end": {
                                                "column": 18,
                                                "line": 273
                                              },
                                              "start": {
                                                "column": 14,
                                                "line": 273
                                              }
                                            },
                                            "range": [
                                              5540,
                                              5544
                                            ],
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "T2",
                                                "optional": false,
                                                "range": [
                                                  5542,
                                                  5544
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 18,
                                                    "line": 273
                                                  },
                                                  "start": {
                                                    "column": 16,
                                                    "line": 273
                                                  }
                                                }
                                              },
                                              "range": [
                                                5542,
                                                5544
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 18,
                                                  "line": 273
                                                },
                                                "start": {
                                                  "column": 16,
                                                  "line": 273
                                                }
                                              }
                                            }
                                          },
                                          "range": [
                                            5536,
                                            5544
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 18,
                                              "line": 273
                                            },
                                            "start": {
                                              "column": 10,
                                              "line": 273
                                            }
                                          }
                                        }
                                      ],
                                      "returnType": {
                                        "type": "TSTypeAnnotation",
                                        "loc": {
                                          "end": {
                                            "column": 25,
                                            "line": 273
                                          },
                                          "start": {
                                            "column": 20,
                                            "line": 273
                                          }
                                        },
                                        "range": [
                                          5546,
                                          5551
                                        ],
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "T3",
                                            "optional": false,
                                            "range": [
                                              5549,
                                              5551
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 25,
                                                "line": 273
                                              },
                                              "start": {
                                                "column": 23,
                                                "line": 273
                                              }
                                            }
                                          },
                                          "range": [
                                            5549,
                                            5551
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 25,
                                              "line": 273
                                            },
                                            "start": {
                                              "column": 23,
                                              "line": 273
                                            }
                                          }
                                        }
                                      },
                                      "range": [
                                        5535,
                                        5551
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 25,
                                          "line": 273
                                        },
                                        "start": {
                                          "column": 9,
                                          "line": 273
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    5532,
                                    5552
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 273
                                    },
                                    "start": {
                                      "column": 6,
                                      "line": 273
                                    }
                                  }
                                }
                              ],
                              "range": [
                                5524,
                                5558
                              ],
                              "loc": {
                                "end": {
                                  "column": 5,
                                  "line": 274
                                },
                                "start": {
                                  "column": 13,
                                  "line": 272
                                }
                              }
                            }
                          },
                          "range": [
                            5515,
                            5559
                          ],
                          "loc": {
                            "end": {
                              "column": 6,
                              "line": 274
                            },
                            "start": {
                              "column": 4,
                              "line": 272
                            }
                          }
                        }
                      ],
                      "range": [
                        5485,
                        5563
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 275
                        },
                        "start": {
                          "column": 10,
                          "line": 270
                        }
                      }
                    }
                  },
                  "range": [
                    5477,
                    5564
                  ],
                  "loc": {
                    "end": {
                      "column": 4,
                      "line": 275
                    },
                    "start": {
                      "column": 2,
                      "line": 270
                    }
                  }
                }
              ],
              "range": [
                5447,
                5566
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 276
                },
                "start": {
                  "column": 39,
                  "line": 268
                }
              }
            }
          },
          "range": [
            5442,
            5566
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 276
            },
            "start": {
              "column": 34,
              "line": 268
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 15,
            "line": 276
          },
          "start": {
            "column": 2,
            "line": 276
          }
        },
        "range": [
          5567,
          5580
        ],
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  5570,
                  5571
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 276
                  },
                  "start": {
                    "column": 5,
                    "line": 276
                  }
                }
              },
              "range": [
                5570,
                5571
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 276
                },
                "start": {
                  "column": 5,
                  "line": 276
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T2",
                "optional": false,
                "range": [
                  5573,
                  5575
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 276
                  },
                  "start": {
                    "column": 8,
                    "line": 276
                  }
                }
              },
              "range": [
                5573,
                5575
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 276
                },
                "start": {
                  "column": 8,
                  "line": 276
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T3",
                "optional": false,
                "range": [
                  5577,
                  5579
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 276
                  },
                  "start": {
                    "column": 12,
                    "line": 276
                  }
                }
              },
              "range": [
                5577,
                5579
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 276
                },
                "start": {
                  "column": 12,
                  "line": 276
                }
              }
            }
          ],
          "range": [
            5569,
            5580
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 276
            },
            "start": {
              "column": 4,
              "line": 276
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 33,
            "line": 268
          },
          "start": {
            "column": 22,
            "line": 268
          }
        },
        "range": [
          5430,
          5441
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
                5431,
                5432
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 268
                },
                "start": {
                  "column": 23,
                  "line": 268
                }
              }
            },
            "out": false,
            "range": [
              5431,
              5432
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 268
              },
              "start": {
                "column": 23,
                "line": 268
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
              "name": "T2",
              "optional": false,
              "range": [
                5434,
                5436
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 268
                },
                "start": {
                  "column": 26,
                  "line": 268
                }
              }
            },
            "out": false,
            "range": [
              5434,
              5436
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 268
              },
              "start": {
                "column": 26,
                "line": 268
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
              "name": "T3",
              "optional": false,
              "range": [
                5438,
                5440
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 268
                },
                "start": {
                  "column": 30,
                  "line": 268
                }
              }
            },
            "out": false,
            "range": [
              5438,
              5440
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 268
              },
              "start": {
                "column": 30,
                "line": 268
              }
            }
          }
        ]
      },
      "range": [
        5408,
        5581
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 276
        },
        "start": {
          "column": 0,
          "line": 268
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
            "name": "resOnion",
            "optional": false,
            "range": [
              5589,
              5597
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 278
              },
              "start": {
                "column": 6,
                "line": 278
              }
            }
          },
          "init": {
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
                      "name": "a",
                      "optional": false,
                      "range": [
                        5610,
                        5611
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 279
                        },
                        "start": {
                          "column": 2,
                          "line": 279
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
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "range": [
                              5623,
                              5626
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 279
                              },
                              "start": {
                                "column": 15,
                                "line": 279
                              }
                            }
                          }
                        ],
                        "range": [
                          5622,
                          5627
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 279
                          },
                          "start": {
                            "column": 14,
                            "line": 279
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
                          "name": "arg",
                          "optional": false,
                          "range": [
                            5614,
                            5617
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 279
                            },
                            "start": {
                              "column": 6,
                              "line": 279
                            }
                          }
                        }
                      ],
                      "range": [
                        5613,
                        5627
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 279
                        },
                        "start": {
                          "column": 5,
                          "line": 279
                        }
                      }
                    },
                    "range": [
                      5610,
                      5627
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 279
                      },
                      "start": {
                        "column": 2,
                        "line": 279
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nested",
                      "optional": false,
                      "range": [
                        5631,
                        5637
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 280
                        },
                        "start": {
                          "column": 2,
                          "line": 280
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "range": [
                              5645,
                              5646
                            ],
                            "loc": {
                              "end": {
                                "column": 5,
                                "line": 281
                              },
                              "start": {
                                "column": 4,
                                "line": 281
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
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "raw": "\",\"",
                                  "value": ",",
                                  "range": [
                                    5666,
                                    5669
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 281
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 281
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
                                    5657,
                                    5660
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 281
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 281
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "join",
                                  "optional": false,
                                  "range": [
                                    5661,
                                    5665
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 281
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 281
                                    }
                                  }
                                },
                                "range": [
                                  5657,
                                  5665
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 281
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 281
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                5657,
                                5670
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 281
                                },
                                "start": {
                                  "column": 16,
                                  "line": 281
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
                                "name": "arg",
                                "optional": false,
                                "range": [
                                  5649,
                                  5652
                                ],
                                "loc": {
                                  "end": {
                                    "column": 11,
                                    "line": 281
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 281
                                  }
                                }
                              }
                            ],
                            "range": [
                              5648,
                              5670
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 281
                              },
                              "start": {
                                "column": 7,
                                "line": 281
                              }
                            }
                          },
                          "range": [
                            5645,
                            5670
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 281
                            },
                            "start": {
                              "column": 4,
                              "line": 281
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nested2",
                            "optional": false,
                            "range": [
                              5676,
                              5683
                            ],
                            "loc": {
                              "end": {
                                "column": 11,
                                "line": 282
                              },
                              "start": {
                                "column": 4,
                                "line": 282
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c",
                                  "optional": false,
                                  "range": [
                                    5693,
                                    5694
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 7,
                                      "line": 283
                                    },
                                    "start": {
                                      "column": 6,
                                      "line": 283
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
                                    "type": "CallExpression",
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "arg",
                                        "optional": false,
                                        "range": [
                                          5713,
                                          5716
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 29,
                                            "line": 283
                                          },
                                          "start": {
                                            "column": 26,
                                            "line": 283
                                          }
                                        }
                                      }
                                    ],
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Boolean",
                                      "optional": false,
                                      "range": [
                                        5705,
                                        5712
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 25,
                                          "line": 283
                                        },
                                        "start": {
                                          "column": 18,
                                          "line": 283
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "range": [
                                      5705,
                                      5717
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 30,
                                        "line": 283
                                      },
                                      "start": {
                                        "column": 18,
                                        "line": 283
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
                                      "name": "arg",
                                      "optional": false,
                                      "range": [
                                        5697,
                                        5700
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 13,
                                          "line": 283
                                        },
                                        "start": {
                                          "column": 10,
                                          "line": 283
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    5696,
                                    5717
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 30,
                                      "line": 283
                                    },
                                    "start": {
                                      "column": 9,
                                      "line": 283
                                    }
                                  }
                                },
                                "range": [
                                  5693,
                                  5717
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 283
                                  },
                                  "start": {
                                    "column": 6,
                                    "line": 283
                                  }
                                }
                              }
                            ],
                            "range": [
                              5685,
                              5724
                            ],
                            "loc": {
                              "end": {
                                "column": 5,
                                "line": 284
                              },
                              "start": {
                                "column": 13,
                                "line": 282
                              }
                            }
                          },
                          "range": [
                            5676,
                            5724
                          ],
                          "loc": {
                            "end": {
                              "column": 5,
                              "line": 284
                            },
                            "start": {
                              "column": 4,
                              "line": 282
                            }
                          }
                        }
                      ],
                      "range": [
                        5639,
                        5729
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 285
                        },
                        "start": {
                          "column": 10,
                          "line": 280
                        }
                      }
                    },
                    "range": [
                      5631,
                      5729
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 285
                      },
                      "start": {
                        "column": 2,
                        "line": 280
                      }
                    }
                  }
                ],
                "range": [
                  5606,
                  5732
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 286
                  },
                  "start": {
                    "column": 23,
                    "line": 278
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "onion",
              "optional": false,
              "range": [
                5600,
                5605
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 278
                },
                "start": {
                  "column": 17,
                  "line": 278
                }
              }
            },
            "optional": false,
            "range": [
              5600,
              5733
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 286
              },
              "start": {
                "column": 17,
                "line": 278
              }
            }
          },
          "range": [
            5589,
            5733
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 286
            },
            "start": {
              "column": 6,
              "line": 278
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        5583,
        5734
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 286
        },
        "start": {
          "column": 0,
          "line": 278
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "onion2",
        "optional": false,
        "range": [
          5753,
          5759
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 288
          },
          "start": {
            "column": 17,
            "line": 288
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
                "column": 1,
                "line": 297
              },
              "start": {
                "column": 42,
                "line": 288
              }
            },
            "range": [
              5778,
              5923
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
                    "name": "a",
                    "optional": false,
                    "range": [
                      5784,
                      5785
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 289
                      },
                      "start": {
                        "column": 2,
                        "line": 289
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
                        "column": 24,
                        "line": 289
                      },
                      "start": {
                        "column": 3,
                        "line": 289
                      }
                    },
                    "range": [
                      5785,
                      5806
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 289
                              },
                              "start": {
                                "column": 10,
                                "line": 289
                              }
                            },
                            "range": [
                              5792,
                              5800
                            ],
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "range": [
                                5794,
                                5800
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 289
                                },
                                "start": {
                                  "column": 12,
                                  "line": 289
                                }
                              }
                            }
                          },
                          "range": [
                            5788,
                            5800
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 289
                            },
                            "start": {
                              "column": 6,
                              "line": 289
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 289
                          },
                          "start": {
                            "column": 20,
                            "line": 289
                          }
                        },
                        "range": [
                          5802,
                          5806
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              5805,
                              5806
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
                                "line": 289
                              },
                              "start": {
                                "column": 23,
                                "line": 289
                              }
                            }
                          },
                          "range": [
                            5805,
                            5806
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 289
                            },
                            "start": {
                              "column": 23,
                              "line": 289
                            }
                          }
                        }
                      },
                      "range": [
                        5787,
                        5806
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 289
                        },
                        "start": {
                          "column": 5,
                          "line": 289
                        }
                      }
                    }
                  },
                  "range": [
                    5784,
                    5807
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 289
                    },
                    "start": {
                      "column": 2,
                      "line": 289
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nested",
                    "optional": false,
                    "range": [
                      5810,
                      5816
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 290
                      },
                      "start": {
                        "column": 2,
                        "line": 290
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
                        "column": 3,
                        "line": 296
                      },
                      "start": {
                        "column": 8,
                        "line": 290
                      }
                    },
                    "range": [
                      5816,
                      5920
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
                            "name": "b",
                            "optional": false,
                            "range": [
                              5824,
                              5825
                            ],
                            "loc": {
                              "end": {
                                "column": 5,
                                "line": 291
                              },
                              "start": {
                                "column": 4,
                                "line": 291
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
                                "column": 22,
                                "line": 291
                              },
                              "start": {
                                "column": 5,
                                "line": 291
                              }
                            },
                            "range": [
                              5825,
                              5842
                            ],
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arg2",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 15,
                                        "line": 291
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 291
                                      }
                                    },
                                    "range": [
                                      5832,
                                      5835
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "range": [
                                          5834,
                                          5835
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 15,
                                            "line": 291
                                          },
                                          "start": {
                                            "column": 14,
                                            "line": 291
                                          }
                                        }
                                      },
                                      "range": [
                                        5834,
                                        5835
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 15,
                                          "line": 291
                                        },
                                        "start": {
                                          "column": 14,
                                          "line": 291
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    5828,
                                    5835
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 15,
                                      "line": 291
                                    },
                                    "start": {
                                      "column": 8,
                                      "line": 291
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 291
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 291
                                  }
                                },
                                "range": [
                                  5837,
                                  5842
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T2",
                                    "optional": false,
                                    "range": [
                                      5840,
                                      5842
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 22,
                                        "line": 291
                                      },
                                      "start": {
                                        "column": 20,
                                        "line": 291
                                      }
                                    }
                                  },
                                  "range": [
                                    5840,
                                    5842
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 291
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 291
                                    }
                                  }
                                }
                              },
                              "range": [
                                5827,
                                5842
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 291
                                },
                                "start": {
                                  "column": 7,
                                  "line": 291
                                }
                              }
                            }
                          },
                          "range": [
                            5824,
                            5843
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 291
                            },
                            "start": {
                              "column": 4,
                              "line": 291
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "range": [
                              5848,
                              5849
                            ],
                            "loc": {
                              "end": {
                                "column": 5,
                                "line": 292
                              },
                              "start": {
                                "column": 4,
                                "line": 292
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
                                "column": 22,
                                "line": 292
                              },
                              "start": {
                                "column": 5,
                                "line": 292
                              }
                            },
                            "range": [
                              5849,
                              5866
                            ],
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arg3",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 15,
                                        "line": 292
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 292
                                      }
                                    },
                                    "range": [
                                      5856,
                                      5859
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "range": [
                                          5858,
                                          5859
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 15,
                                            "line": 292
                                          },
                                          "start": {
                                            "column": 14,
                                            "line": 292
                                          }
                                        }
                                      },
                                      "range": [
                                        5858,
                                        5859
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 15,
                                          "line": 292
                                        },
                                        "start": {
                                          "column": 14,
                                          "line": 292
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    5852,
                                    5859
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 15,
                                      "line": 292
                                    },
                                    "start": {
                                      "column": 8,
                                      "line": 292
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 292
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 292
                                  }
                                },
                                "range": [
                                  5861,
                                  5866
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T3",
                                    "optional": false,
                                    "range": [
                                      5864,
                                      5866
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 22,
                                        "line": 292
                                      },
                                      "start": {
                                        "column": 20,
                                        "line": 292
                                      }
                                    }
                                  },
                                  "range": [
                                    5864,
                                    5866
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 292
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 292
                                    }
                                  }
                                }
                              },
                              "range": [
                                5851,
                                5866
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 292
                                },
                                "start": {
                                  "column": 7,
                                  "line": 292
                                }
                              }
                            }
                          },
                          "range": [
                            5848,
                            5867
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 292
                            },
                            "start": {
                              "column": 4,
                              "line": 292
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nested2",
                            "optional": false,
                            "range": [
                              5872,
                              5879
                            ],
                            "loc": {
                              "end": {
                                "column": 11,
                                "line": 293
                              },
                              "start": {
                                "column": 4,
                                "line": 293
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
                                "column": 5,
                                "line": 295
                              },
                              "start": {
                                "column": 11,
                                "line": 293
                              }
                            },
                            "range": [
                              5879,
                              5915
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
                                    "name": "d",
                                    "optional": false,
                                    "range": [
                                      5889,
                                      5890
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 7,
                                        "line": 294
                                      },
                                      "start": {
                                        "column": 6,
                                        "line": 294
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
                                        "column": 25,
                                        "line": 294
                                      },
                                      "start": {
                                        "column": 7,
                                        "line": 294
                                      }
                                    },
                                    "range": [
                                      5890,
                                      5908
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSFunctionType",
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "arg4",
                                          "optional": false,
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "loc": {
                                              "end": {
                                                "column": 18,
                                                "line": 294
                                              },
                                              "start": {
                                                "column": 14,
                                                "line": 294
                                              }
                                            },
                                            "range": [
                                              5897,
                                              5901
                                            ],
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "T3",
                                                "optional": false,
                                                "range": [
                                                  5899,
                                                  5901
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 18,
                                                    "line": 294
                                                  },
                                                  "start": {
                                                    "column": 16,
                                                    "line": 294
                                                  }
                                                }
                                              },
                                              "range": [
                                                5899,
                                                5901
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 18,
                                                  "line": 294
                                                },
                                                "start": {
                                                  "column": 16,
                                                  "line": 294
                                                }
                                              }
                                            }
                                          },
                                          "range": [
                                            5893,
                                            5901
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 18,
                                              "line": 294
                                            },
                                            "start": {
                                              "column": 10,
                                              "line": 294
                                            }
                                          }
                                        }
                                      ],
                                      "returnType": {
                                        "type": "TSTypeAnnotation",
                                        "loc": {
                                          "end": {
                                            "column": 25,
                                            "line": 294
                                          },
                                          "start": {
                                            "column": 20,
                                            "line": 294
                                          }
                                        },
                                        "range": [
                                          5903,
                                          5908
                                        ],
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "T4",
                                            "optional": false,
                                            "range": [
                                              5906,
                                              5908
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 25,
                                                "line": 294
                                              },
                                              "start": {
                                                "column": 23,
                                                "line": 294
                                              }
                                            }
                                          },
                                          "range": [
                                            5906,
                                            5908
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 25,
                                              "line": 294
                                            },
                                            "start": {
                                              "column": 23,
                                              "line": 294
                                            }
                                          }
                                        }
                                      },
                                      "range": [
                                        5892,
                                        5908
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 25,
                                          "line": 294
                                        },
                                        "start": {
                                          "column": 9,
                                          "line": 294
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    5889,
                                    5909
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 294
                                    },
                                    "start": {
                                      "column": 6,
                                      "line": 294
                                    }
                                  }
                                }
                              ],
                              "range": [
                                5881,
                                5915
                              ],
                              "loc": {
                                "end": {
                                  "column": 5,
                                  "line": 295
                                },
                                "start": {
                                  "column": 13,
                                  "line": 293
                                }
                              }
                            }
                          },
                          "range": [
                            5872,
                            5916
                          ],
                          "loc": {
                            "end": {
                              "column": 6,
                              "line": 295
                            },
                            "start": {
                              "column": 4,
                              "line": 293
                            }
                          }
                        }
                      ],
                      "range": [
                        5818,
                        5920
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 296
                        },
                        "start": {
                          "column": 10,
                          "line": 290
                        }
                      }
                    }
                  },
                  "range": [
                    5810,
                    5921
                  ],
                  "loc": {
                    "end": {
                      "column": 4,
                      "line": 296
                    },
                    "start": {
                      "column": 2,
                      "line": 290
                    }
                  }
                }
              ],
              "range": [
                5780,
                5923
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 297
                },
                "start": {
                  "column": 44,
                  "line": 288
                }
              }
            }
          },
          "range": [
            5775,
            5923
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 297
            },
            "start": {
              "column": 39,
              "line": 288
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 19,
            "line": 297
          },
          "start": {
            "column": 2,
            "line": 297
          }
        },
        "range": [
          5924,
          5941
        ],
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  5927,
                  5928
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 297
                  },
                  "start": {
                    "column": 5,
                    "line": 297
                  }
                }
              },
              "range": [
                5927,
                5928
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 297
                },
                "start": {
                  "column": 5,
                  "line": 297
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T2",
                "optional": false,
                "range": [
                  5930,
                  5932
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 297
                  },
                  "start": {
                    "column": 8,
                    "line": 297
                  }
                }
              },
              "range": [
                5930,
                5932
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 297
                },
                "start": {
                  "column": 8,
                  "line": 297
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T3",
                "optional": false,
                "range": [
                  5934,
                  5936
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 297
                  },
                  "start": {
                    "column": 12,
                    "line": 297
                  }
                }
              },
              "range": [
                5934,
                5936
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 297
                },
                "start": {
                  "column": 12,
                  "line": 297
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T4",
                "optional": false,
                "range": [
                  5938,
                  5940
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 297
                  },
                  "start": {
                    "column": 16,
                    "line": 297
                  }
                }
              },
              "range": [
                5938,
                5940
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 297
                },
                "start": {
                  "column": 16,
                  "line": 297
                }
              }
            }
          ],
          "range": [
            5926,
            5941
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 297
            },
            "start": {
              "column": 4,
              "line": 297
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 38,
            "line": 288
          },
          "start": {
            "column": 23,
            "line": 288
          }
        },
        "range": [
          5759,
          5774
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
                5760,
                5761
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 288
                },
                "start": {
                  "column": 24,
                  "line": 288
                }
              }
            },
            "out": false,
            "range": [
              5760,
              5761
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 288
              },
              "start": {
                "column": 24,
                "line": 288
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
              "name": "T2",
              "optional": false,
              "range": [
                5763,
                5765
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 288
                },
                "start": {
                  "column": 27,
                  "line": 288
                }
              }
            },
            "out": false,
            "range": [
              5763,
              5765
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 288
              },
              "start": {
                "column": 27,
                "line": 288
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
              "name": "T3",
              "optional": false,
              "range": [
                5767,
                5769
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 288
                },
                "start": {
                  "column": 31,
                  "line": 288
                }
              }
            },
            "out": false,
            "range": [
              5767,
              5769
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 288
              },
              "start": {
                "column": 31,
                "line": 288
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
              "name": "T4",
              "optional": false,
              "range": [
                5771,
                5773
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 288
                },
                "start": {
                  "column": 35,
                  "line": 288
                }
              }
            },
            "out": false,
            "range": [
              5771,
              5773
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 288
              },
              "start": {
                "column": 35,
                "line": 288
              }
            }
          }
        ]
      },
      "range": [
        5736,
        5942
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 297
        },
        "start": {
          "column": 0,
          "line": 288
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
            "name": "resOnion2",
            "optional": false,
            "range": [
              5950,
              5959
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 299
              },
              "start": {
                "column": 6,
                "line": 299
              }
            }
          },
          "init": {
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
                      "name": "a",
                      "optional": false,
                      "range": [
                        5973,
                        5974
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 300
                        },
                        "start": {
                          "column": 2,
                          "line": 300
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
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "range": [
                              5986,
                              5989
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 300
                              },
                              "start": {
                                "column": 15,
                                "line": 300
                              }
                            }
                          }
                        ],
                        "range": [
                          5985,
                          5990
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 300
                          },
                          "start": {
                            "column": 14,
                            "line": 300
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
                          "name": "arg",
                          "optional": false,
                          "range": [
                            5977,
                            5980
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 300
                            },
                            "start": {
                              "column": 6,
                              "line": 300
                            }
                          }
                        }
                      ],
                      "range": [
                        5976,
                        5990
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 300
                        },
                        "start": {
                          "column": 5,
                          "line": 300
                        }
                      }
                    },
                    "range": [
                      5973,
                      5990
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 300
                      },
                      "start": {
                        "column": 2,
                        "line": 300
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nested",
                      "optional": false,
                      "range": [
                        5994,
                        6000
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 301
                        },
                        "start": {
                          "column": 2,
                          "line": 301
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "range": [
                              6008,
                              6009
                            ],
                            "loc": {
                              "end": {
                                "column": 5,
                                "line": 302
                              },
                              "start": {
                                "column": 4,
                                "line": 302
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
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "raw": "\",\"",
                                  "value": ",",
                                  "range": [
                                    6029,
                                    6032
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 302
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 302
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
                                    6020,
                                    6023
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 19,
                                      "line": 302
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 302
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "join",
                                  "optional": false,
                                  "range": [
                                    6024,
                                    6028
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 24,
                                      "line": 302
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 302
                                    }
                                  }
                                },
                                "range": [
                                  6020,
                                  6028
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 302
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 302
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                6020,
                                6033
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 302
                                },
                                "start": {
                                  "column": 16,
                                  "line": 302
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
                                "name": "arg",
                                "optional": false,
                                "range": [
                                  6012,
                                  6015
                                ],
                                "loc": {
                                  "end": {
                                    "column": 11,
                                    "line": 302
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 302
                                  }
                                }
                              }
                            ],
                            "range": [
                              6011,
                              6033
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 302
                              },
                              "start": {
                                "column": 7,
                                "line": 302
                              }
                            }
                          },
                          "range": [
                            6008,
                            6033
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 302
                            },
                            "start": {
                              "column": 4,
                              "line": 302
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "range": [
                              6039,
                              6040
                            ],
                            "loc": {
                              "end": {
                                "column": 5,
                                "line": 303
                              },
                              "start": {
                                "column": 4,
                                "line": 303
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
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false,
                                  "range": [
                                    6058,
                                    6061
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 303
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 303
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Number",
                                "optional": false,
                                "range": [
                                  6051,
                                  6057
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 303
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 303
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                6051,
                                6062
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 303
                                },
                                "start": {
                                  "column": 16,
                                  "line": 303
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
                                "name": "arg",
                                "optional": false,
                                "range": [
                                  6043,
                                  6046
                                ],
                                "loc": {
                                  "end": {
                                    "column": 11,
                                    "line": 303
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 303
                                  }
                                }
                              }
                            ],
                            "range": [
                              6042,
                              6062
                            ],
                            "loc": {
                              "end": {
                                "column": 27,
                                "line": 303
                              },
                              "start": {
                                "column": 7,
                                "line": 303
                              }
                            }
                          },
                          "range": [
                            6039,
                            6062
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 303
                            },
                            "start": {
                              "column": 4,
                              "line": 303
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nested2",
                            "optional": false,
                            "range": [
                              6068,
                              6075
                            ],
                            "loc": {
                              "end": {
                                "column": 11,
                                "line": 304
                              },
                              "start": {
                                "column": 4,
                                "line": 304
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "d",
                                  "optional": false,
                                  "range": [
                                    6085,
                                    6086
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 7,
                                      "line": 305
                                    },
                                    "start": {
                                      "column": 6,
                                      "line": 305
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
                                    "type": "CallExpression",
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "arg",
                                        "optional": false,
                                        "range": [
                                          6105,
                                          6108
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 29,
                                            "line": 305
                                          },
                                          "start": {
                                            "column": 26,
                                            "line": 305
                                          }
                                        }
                                      }
                                    ],
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Boolean",
                                      "optional": false,
                                      "range": [
                                        6097,
                                        6104
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 25,
                                          "line": 305
                                        },
                                        "start": {
                                          "column": 18,
                                          "line": 305
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "range": [
                                      6097,
                                      6109
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 30,
                                        "line": 305
                                      },
                                      "start": {
                                        "column": 18,
                                        "line": 305
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
                                      "name": "arg",
                                      "optional": false,
                                      "range": [
                                        6089,
                                        6092
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 13,
                                          "line": 305
                                        },
                                        "start": {
                                          "column": 10,
                                          "line": 305
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    6088,
                                    6109
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 30,
                                      "line": 305
                                    },
                                    "start": {
                                      "column": 9,
                                      "line": 305
                                    }
                                  }
                                },
                                "range": [
                                  6085,
                                  6109
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 305
                                  },
                                  "start": {
                                    "column": 6,
                                    "line": 305
                                  }
                                }
                              }
                            ],
                            "range": [
                              6077,
                              6116
                            ],
                            "loc": {
                              "end": {
                                "column": 5,
                                "line": 306
                              },
                              "start": {
                                "column": 13,
                                "line": 304
                              }
                            }
                          },
                          "range": [
                            6068,
                            6116
                          ],
                          "loc": {
                            "end": {
                              "column": 5,
                              "line": 306
                            },
                            "start": {
                              "column": 4,
                              "line": 304
                            }
                          }
                        }
                      ],
                      "range": [
                        6002,
                        6121
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 307
                        },
                        "start": {
                          "column": 10,
                          "line": 301
                        }
                      }
                    },
                    "range": [
                      5994,
                      6121
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 307
                      },
                      "start": {
                        "column": 2,
                        "line": 301
                      }
                    }
                  }
                ],
                "range": [
                  5969,
                  6124
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 308
                  },
                  "start": {
                    "column": 25,
                    "line": 299
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "onion2",
              "optional": false,
              "range": [
                5962,
                5968
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 299
                },
                "start": {
                  "column": 18,
                  "line": 299
                }
              }
            },
            "optional": false,
            "range": [
              5962,
              6125
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 308
              },
              "start": {
                "column": 18,
                "line": 299
              }
            }
          },
          "range": [
            5950,
            6125
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 308
            },
            "start": {
              "column": 6,
              "line": 299
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        5944,
        6126
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 308
        },
        "start": {
          "column": 0,
          "line": 299
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "distant",
        "optional": false,
        "range": [
          6145,
          6152
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 310
          },
          "start": {
            "column": 17,
            "line": 310
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 1,
                "line": 319
              },
              "start": {
                "column": 32,
                "line": 310
              }
            },
            "range": [
              6160,
              6290
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
                    "name": "foo",
                    "optional": false,
                    "range": [
                      6166,
                      6169
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 311
                      },
                      "start": {
                        "column": 2,
                        "line": 311
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
                        "column": 3,
                        "line": 317
                      },
                      "start": {
                        "column": 5,
                        "line": 311
                      }
                    },
                    "range": [
                      6169,
                      6254
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
                            "name": "bar",
                            "optional": false,
                            "range": [
                              6177,
                              6180
                            ],
                            "loc": {
                              "end": {
                                "column": 7,
                                "line": 312
                              },
                              "start": {
                                "column": 4,
                                "line": 312
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
                                "column": 5,
                                "line": 316
                              },
                              "start": {
                                "column": 7,
                                "line": 312
                              }
                            },
                            "range": [
                              6180,
                              6249
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
                                    "name": "baz",
                                    "optional": false,
                                    "range": [
                                      6190,
                                      6193
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 9,
                                        "line": 313
                                      },
                                      "start": {
                                        "column": 6,
                                        "line": 313
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
                                        "column": 7,
                                        "line": 315
                                      },
                                      "start": {
                                        "column": 9,
                                        "line": 313
                                      }
                                    },
                                    "range": [
                                      6193,
                                      6242
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
                                            "name": "producer",
                                            "optional": false,
                                            "range": [
                                              6205,
                                              6213
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 16,
                                                "line": 314
                                              },
                                              "start": {
                                                "column": 8,
                                                "line": 314
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
                                                "column": 36,
                                                "line": 314
                                              },
                                              "start": {
                                                "column": 16,
                                                "line": 314
                                              }
                                            },
                                            "range": [
                                              6213,
                                              6233
                                            ],
                                            "typeAnnotation": {
                                              "type": "TSFunctionType",
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
                                                        "column": 30,
                                                        "line": 314
                                                      },
                                                      "start": {
                                                        "column": 22,
                                                        "line": 314
                                                      }
                                                    },
                                                    "range": [
                                                      6219,
                                                      6227
                                                    ],
                                                    "typeAnnotation": {
                                                      "type": "TSStringKeyword",
                                                      "range": [
                                                        6221,
                                                        6227
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 30,
                                                          "line": 314
                                                        },
                                                        "start": {
                                                          "column": 24,
                                                          "line": 314
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "range": [
                                                    6216,
                                                    6227
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 30,
                                                      "line": 314
                                                    },
                                                    "start": {
                                                      "column": 19,
                                                      "line": 314
                                                    }
                                                  }
                                                }
                                              ],
                                              "returnType": {
                                                "type": "TSTypeAnnotation",
                                                "loc": {
                                                  "end": {
                                                    "column": 36,
                                                    "line": 314
                                                  },
                                                  "start": {
                                                    "column": 32,
                                                    "line": 314
                                                  }
                                                },
                                                "range": [
                                                  6229,
                                                  6233
                                                ],
                                                "typeAnnotation": {
                                                  "type": "TSTypeReference",
                                                  "typeName": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "T",
                                                    "optional": false,
                                                    "range": [
                                                      6232,
                                                      6233
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 36,
                                                        "line": 314
                                                      },
                                                      "start": {
                                                        "column": 35,
                                                        "line": 314
                                                      }
                                                    }
                                                  },
                                                  "range": [
                                                    6232,
                                                    6233
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 36,
                                                      "line": 314
                                                    },
                                                    "start": {
                                                      "column": 35,
                                                      "line": 314
                                                    }
                                                  }
                                                }
                                              },
                                              "range": [
                                                6215,
                                                6233
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 36,
                                                  "line": 314
                                                },
                                                "start": {
                                                  "column": 18,
                                                  "line": 314
                                                }
                                              }
                                            }
                                          },
                                          "range": [
                                            6205,
                                            6234
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 37,
                                              "line": 314
                                            },
                                            "start": {
                                              "column": 8,
                                              "line": 314
                                            }
                                          }
                                        }
                                      ],
                                      "range": [
                                        6195,
                                        6242
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 7,
                                          "line": 315
                                        },
                                        "start": {
                                          "column": 11,
                                          "line": 313
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    6190,
                                    6243
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 8,
                                      "line": 315
                                    },
                                    "start": {
                                      "column": 6,
                                      "line": 313
                                    }
                                  }
                                }
                              ],
                              "range": [
                                6182,
                                6249
                              ],
                              "loc": {
                                "end": {
                                  "column": 5,
                                  "line": 316
                                },
                                "start": {
                                  "column": 9,
                                  "line": 312
                                }
                              }
                            }
                          },
                          "range": [
                            6177,
                            6250
                          ],
                          "loc": {
                            "end": {
                              "column": 6,
                              "line": 316
                            },
                            "start": {
                              "column": 4,
                              "line": 312
                            }
                          }
                        }
                      ],
                      "range": [
                        6171,
                        6254
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 317
                        },
                        "start": {
                          "column": 7,
                          "line": 311
                        }
                      }
                    }
                  },
                  "range": [
                    6166,
                    6255
                  ],
                  "loc": {
                    "end": {
                      "column": 4,
                      "line": 317
                    },
                    "start": {
                      "column": 2,
                      "line": 311
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "consumer",
                    "optional": false,
                    "range": [
                      6258,
                      6266
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 318
                      },
                      "start": {
                        "column": 2,
                        "line": 318
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
                        "column": 31,
                        "line": 318
                      },
                      "start": {
                        "column": 10,
                        "line": 318
                      }
                    },
                    "range": [
                      6266,
                      6287
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 318
                              },
                              "start": {
                                "column": 16,
                                "line": 318
                              }
                            },
                            "range": [
                              6272,
                              6275
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "range": [
                                  6274,
                                  6275
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 318
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 318
                                  }
                                }
                              },
                              "range": [
                                6274,
                                6275
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 318
                                },
                                "start": {
                                  "column": 18,
                                  "line": 318
                                }
                              }
                            }
                          },
                          "range": [
                            6269,
                            6275
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 318
                            },
                            "start": {
                              "column": 13,
                              "line": 318
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 318
                          },
                          "start": {
                            "column": 21,
                            "line": 318
                          }
                        },
                        "range": [
                          6277,
                          6287
                        ],
                        "typeAnnotation": {
                          "type": "TSUnknownKeyword",
                          "range": [
                            6280,
                            6287
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 318
                            },
                            "start": {
                              "column": 24,
                              "line": 318
                            }
                          }
                        }
                      },
                      "range": [
                        6268,
                        6287
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 318
                        },
                        "start": {
                          "column": 12,
                          "line": 318
                        }
                      }
                    }
                  },
                  "range": [
                    6258,
                    6288
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 318
                    },
                    "start": {
                      "column": 2,
                      "line": 318
                    }
                  }
                }
              ],
              "range": [
                6162,
                6290
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 319
                },
                "start": {
                  "column": 34,
                  "line": 310
                }
              }
            }
          },
          "range": [
            6156,
            6290
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 319
            },
            "start": {
              "column": 28,
              "line": 310
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 5,
            "line": 319
          },
          "start": {
            "column": 2,
            "line": 319
          }
        },
        "range": [
          6291,
          6294
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              6293,
              6294
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 319
              },
              "start": {
                "column": 4,
                "line": 319
              }
            }
          },
          "range": [
            6293,
            6294
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 319
            },
            "start": {
              "column": 4,
              "line": 319
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 27,
            "line": 310
          },
          "start": {
            "column": 24,
            "line": 310
          }
        },
        "range": [
          6152,
          6155
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
                6153,
                6154
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 310
                },
                "start": {
                  "column": 25,
                  "line": 310
                }
              }
            },
            "out": false,
            "range": [
              6153,
              6154
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 310
              },
              "start": {
                "column": 25,
                "line": 310
              }
            }
          }
        ]
      },
      "range": [
        6128,
        6295
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 319
        },
        "start": {
          "column": 0,
          "line": 310
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
            "name": "distantRes",
            "optional": false,
            "range": [
              6303,
              6313
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 321
              },
              "start": {
                "column": 6,
                "line": 321
              }
            }
          },
          "init": {
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
                      "name": "foo",
                      "optional": false,
                      "range": [
                        6328,
                        6331
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 322
                        },
                        "start": {
                          "column": 2,
                          "line": 322
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "range": [
                              6339,
                              6342
                            ],
                            "loc": {
                              "end": {
                                "column": 7,
                                "line": 323
                              },
                              "start": {
                                "column": 4,
                                "line": 323
                              }
                            }
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "baz",
                                  "optional": false,
                                  "range": [
                                    6352,
                                    6355
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 9,
                                      "line": 324
                                    },
                                    "start": {
                                      "column": 6,
                                      "line": 324
                                    }
                                  }
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "ObjectExpression",
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "computed": false,
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "producer",
                                        "optional": false,
                                        "range": [
                                          6367,
                                          6375
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 16,
                                            "line": 325
                                          },
                                          "start": {
                                            "column": 8,
                                            "line": 325
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
                                          "type": "Literal",
                                          "raw": "1",
                                          "value": 1,
                                          "range": [
                                            6386,
                                            6387
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 28,
                                              "line": 325
                                            },
                                            "start": {
                                              "column": 27,
                                              "line": 325
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
                                            "name": "arg",
                                            "optional": false,
                                            "range": [
                                              6378,
                                              6381
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 22,
                                                "line": 325
                                              },
                                              "start": {
                                                "column": 19,
                                                "line": 325
                                              }
                                            }
                                          }
                                        ],
                                        "range": [
                                          6377,
                                          6387
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 28,
                                            "line": 325
                                          },
                                          "start": {
                                            "column": 18,
                                            "line": 325
                                          }
                                        }
                                      },
                                      "range": [
                                        6367,
                                        6387
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 28,
                                          "line": 325
                                        },
                                        "start": {
                                          "column": 8,
                                          "line": 325
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    6357,
                                    6396
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 7,
                                      "line": 326
                                    },
                                    "start": {
                                      "column": 11,
                                      "line": 324
                                    }
                                  }
                                },
                                "range": [
                                  6352,
                                  6396
                                ],
                                "loc": {
                                  "end": {
                                    "column": 7,
                                    "line": 326
                                  },
                                  "start": {
                                    "column": 6,
                                    "line": 324
                                  }
                                }
                              }
                            ],
                            "range": [
                              6344,
                              6403
                            ],
                            "loc": {
                              "end": {
                                "column": 5,
                                "line": 327
                              },
                              "start": {
                                "column": 9,
                                "line": 323
                              }
                            }
                          },
                          "range": [
                            6339,
                            6403
                          ],
                          "loc": {
                            "end": {
                              "column": 5,
                              "line": 327
                            },
                            "start": {
                              "column": 4,
                              "line": 323
                            }
                          }
                        }
                      ],
                      "range": [
                        6333,
                        6408
                      ],
                      "loc": {
                        "end": {
                          "column": 3,
                          "line": 328
                        },
                        "start": {
                          "column": 7,
                          "line": 322
                        }
                      }
                    },
                    "range": [
                      6328,
                      6408
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 328
                      },
                      "start": {
                        "column": 2,
                        "line": 322
                      }
                    }
                  },
                  {
                    "type": "Property",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "consumer",
                      "optional": false,
                      "range": [
                        6412,
                        6420
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 329
                        },
                        "start": {
                          "column": 2,
                          "line": 329
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
                        "body": [],
                        "range": [
                          6431,
                          6433
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 329
                          },
                          "start": {
                            "column": 21,
                            "line": 329
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
                          "name": "val",
                          "optional": false,
                          "range": [
                            6423,
                            6426
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 329
                            },
                            "start": {
                              "column": 13,
                              "line": 329
                            }
                          }
                        }
                      ],
                      "range": [
                        6422,
                        6433
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 329
                        },
                        "start": {
                          "column": 12,
                          "line": 329
                        }
                      }
                    },
                    "range": [
                      6412,
                      6433
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 329
                      },
                      "start": {
                        "column": 2,
                        "line": 329
                      }
                    }
                  }
                ],
                "range": [
                  6324,
                  6436
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 330
                  },
                  "start": {
                    "column": 27,
                    "line": 321
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "distant",
              "optional": false,
              "range": [
                6316,
                6323
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 321
                },
                "start": {
                  "column": 19,
                  "line": 321
                }
              }
            },
            "optional": false,
            "range": [
              6316,
              6437
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 330
              },
              "start": {
                "column": 19,
                "line": 321
              }
            }
          },
          "range": [
            6303,
            6437
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 330
            },
            "start": {
              "column": 6,
              "line": 321
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        6297,
        6438
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 330
        },
        "start": {
          "column": 0,
          "line": 321
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 331
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
