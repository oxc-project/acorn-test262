__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    85,
    430
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
            "name": "obj",
            "optional": false,
            "range": [
              91,
              94
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
              }
            }
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "expression": {
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
                      102,
                      105
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 4
                      },
                      "start": {
                        "column": 3,
                        "line": 4
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
                      "name": "param",
                      "optional": false,
                      "range": [
                        130,
                        135
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 4
                        },
                        "start": {
                          "column": 31,
                          "line": 4
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "range": [
                            108,
                            113
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 4
                            },
                            "start": {
                              "column": 9,
                              "line": 4
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "\"default\"",
                          "value": "default",
                          "range": [
                            116,
                            125
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 4
                            },
                            "start": {
                              "column": 17,
                              "line": 4
                            }
                          }
                        },
                        "range": [
                          108,
                          125
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 4
                          },
                          "start": {
                            "column": 9,
                            "line": 4
                          }
                        }
                      }
                    ],
                    "range": [
                      107,
                      135
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 4
                      },
                      "start": {
                        "column": 8,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    102,
                    135
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 4
                    },
                    "start": {
                      "column": 3,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                97,
                138
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 5
                },
                "start": {
                  "column": 12,
                  "line": 3
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 6
                          },
                          "start": {
                            "column": 7,
                            "line": 6
                          }
                        },
                        "range": [
                          158,
                          166
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            160,
                            166
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 6
                            },
                            "start": {
                              "column": 9,
                              "line": 6
                            }
                          }
                        }
                      },
                      "range": [
                        155,
                        166
                      ],
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
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 6
                      },
                      "start": {
                        "column": 16,
                        "line": 6
                      }
                    },
                    "range": [
                      167,
                      192
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [
                        {
                          "type": "RestElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "params",
                            "optional": false,
                            "range": [
                              173,
                              179
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 6
                              },
                              "start": {
                                "column": 22,
                                "line": 6
                              }
                            }
                          },
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 6
                              },
                              "start": {
                                "column": 28,
                                "line": 6
                              }
                            },
                            "range": [
                              179,
                              184
                            ],
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "range": [
                                181,
                                184
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 6
                                },
                                "start": {
                                  "column": 30,
                                  "line": 6
                                }
                              }
                            }
                          },
                          "range": [
                            170,
                            184
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 6
                            },
                            "start": {
                              "column": 19,
                              "line": 6
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 6
                          },
                          "start": {
                            "column": 35,
                            "line": 6
                          }
                        },
                        "range": [
                          186,
                          192
                        ],
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "range": [
                            189,
                            192
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 6
                            },
                            "start": {
                              "column": 38,
                              "line": 6
                            }
                          }
                        }
                      },
                      "range": [
                        169,
                        192
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 6
                        },
                        "start": {
                          "column": 18,
                          "line": 6
                        }
                      }
                    }
                  },
                  "range": [
                    154,
                    193
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 6
                    },
                    "start": {
                      "column": 3,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                149,
                195
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 7
                },
                "start": {
                  "column": 12,
                  "line": 5
                }
              }
            },
            "range": [
              97,
              195
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 7
              },
              "start": {
                "column": 12,
                "line": 3
              }
            }
          },
          "range": [
            91,
            195
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 7
            },
            "start": {
              "column": 6,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        85,
        196
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 7
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
            "name": "obj2",
            "optional": false,
            "range": [
              204,
              208
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 9
              },
              "start": {
                "column": 6,
                "line": 9
              }
            }
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "expression": {
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
                      216,
                      219
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 10
                      },
                      "start": {
                        "column": 3,
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
                      "range": [
                        244,
                        249
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 10
                        },
                        "start": {
                          "column": 31,
                          "line": 10
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param",
                          "optional": false,
                          "range": [
                            222,
                            227
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 10
                            },
                            "start": {
                              "column": 9,
                              "line": 10
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "\"default\"",
                          "value": "default",
                          "range": [
                            230,
                            239
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 10
                            },
                            "start": {
                              "column": 17,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          222,
                          239
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 10
                          },
                          "start": {
                            "column": 9,
                            "line": 10
                          }
                        }
                      }
                    ],
                    "range": [
                      221,
                      249
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 10
                      },
                      "start": {
                        "column": 8,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    216,
                    249
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 10
                    },
                    "start": {
                      "column": 3,
                      "line": 10
                    }
                  }
                }
              ],
              "range": [
                211,
                252
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 11
                },
                "start": {
                  "column": 13,
                  "line": 9
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 12
                          },
                          "start": {
                            "column": 7,
                            "line": 12
                          }
                        },
                        "range": [
                          272,
                          280
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            274,
                            280
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 12
                            },
                            "start": {
                              "column": 9,
                              "line": 12
                            }
                          }
                        }
                      },
                      "range": [
                        269,
                        280
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 12
                        },
                        "start": {
                          "column": 4,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 12
                      },
                      "start": {
                        "column": 16,
                        "line": 12
                      }
                    },
                    "range": [
                      281,
                      291
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Function",
                        "optional": false,
                        "range": [
                          283,
                          291
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 12
                          },
                          "start": {
                            "column": 18,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        283,
                        291
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 12
                        },
                        "start": {
                          "column": 18,
                          "line": 12
                        }
                      }
                    }
                  },
                  "range": [
                    268,
                    292
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 12
                    },
                    "start": {
                      "column": 3,
                      "line": 12
                    }
                  }
                }
              ],
              "range": [
                263,
                294
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 13
                },
                "start": {
                  "column": 12,
                  "line": 11
                }
              }
            },
            "range": [
              211,
              294
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 13
              },
              "start": {
                "column": 13,
                "line": 9
              }
            }
          },
          "range": [
            204,
            294
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 13
            },
            "start": {
              "column": 6,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        198,
        295
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringOrNumberFunc",
        "optional": false,
        "range": [
          302,
          320
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 15
          },
          "start": {
            "column": 5,
            "line": 15
          }
        }
      },
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
                  "column": 45,
                  "line": 15
                },
                "start": {
                  "column": 28,
                  "line": 15
                }
              },
              "range": [
                325,
                342
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      327,
                      333
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 15
                      },
                      "start": {
                        "column": 30,
                        "line": 15
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      336,
                      342
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 15
                      },
                      "start": {
                        "column": 39,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  327,
                  342
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 15
                  },
                  "start": {
                    "column": 30,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              324,
              342
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 15
              },
              "start": {
                "column": 27,
                "line": 15
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 53,
              "line": 15
            },
            "start": {
              "column": 47,
              "line": 15
            }
          },
          "range": [
            344,
            350
          ],
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "range": [
              347,
              350
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 15
              },
              "start": {
                "column": 50,
                "line": 15
              }
            }
          }
        },
        "range": [
          323,
          350
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 15
          },
          "start": {
            "column": 26,
            "line": 15
          }
        }
      },
      "range": [
        297,
        351
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 15
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
            "name": "fn",
            "optional": false,
            "range": [
              359,
              361
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 17
              },
              "start": {
                "column": 6,
                "line": 17
              }
            }
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "ArrowFunctionExpression",
              "async": false,
              "body": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  379,
                  383
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 17
                  },
                  "start": {
                    "column": 26,
                    "line": 17
                  }
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      366,
                      367
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
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"ok\"",
                    "value": "ok",
                    "range": [
                      370,
                      374
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 17
                      },
                      "start": {
                        "column": 17,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    366,
                    374
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 17
                    },
                    "start": {
                      "column": 13,
                      "line": 17
                    }
                  }
                }
              ],
              "range": [
                365,
                383
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 17
                },
                "start": {
                  "column": 12,
                  "line": 17
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StringOrNumberFunc",
                "optional": false,
                "range": [
                  395,
                  413
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 17
                  },
                  "start": {
                    "column": 42,
                    "line": 17
                  }
                }
              },
              "range": [
                395,
                413
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 17
                },
                "start": {
                  "column": 42,
                  "line": 17
                }
              }
            },
            "range": [
              364,
              413
            ],
            "loc": {
              "end": {
                "column": 60,
                "line": 17
              },
              "start": {
                "column": 11,
                "line": 17
              }
            }
          },
          "range": [
            359,
            413
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 17
            },
            "start": {
              "column": 6,
              "line": 17
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        353,
        414
      ],
      "loc": {
        "end": {
          "column": 61,
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
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "range": [
            415,
            417
          ],
          "loc": {
            "end": {
              "column": 2,
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
          415,
          419
        ],
        "loc": {
          "end": {
            "column": 4,
            "line": 18
          },
          "start": {
            "column": 0,
            "line": 18
          }
        }
      },
      "range": [
        415,
        420
      ],
      "loc": {
        "end": {
          "column": 5,
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "32",
            "value": 32,
            "range": [
              424,
              426
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 19
              },
              "start": {
                "column": 3,
                "line": 19
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "range": [
            421,
            423
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 19
            },
            "start": {
              "column": 0,
              "line": 19
            }
          }
        },
        "optional": false,
        "range": [
          421,
          427
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 19
          },
          "start": {
            "column": 0,
            "line": 19
          }
        }
      },
      "range": [
        421,
        428
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
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
      "line": 3
    }
  },
  "hashbang": null
}
```
