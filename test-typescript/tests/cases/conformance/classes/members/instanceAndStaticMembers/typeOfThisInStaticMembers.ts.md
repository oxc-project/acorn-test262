__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    591
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          191
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                14,
                25
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
                25,
                40
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  37,
                  40
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 2
                  },
                  "start": {
                    "column": 27,
                    "line": 2
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 2
                      },
                      "start": {
                        "column": 17,
                        "line": 2
                      }
                    },
                    "range": [
                      27,
                      35
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        29,
                        35
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 2
                        },
                        "start": {
                          "column": 19,
                          "line": 2
                        }
                      }
                    }
                  },
                  "range": [
                    26,
                    35
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 2
                    },
                    "start": {
                      "column": 16,
                      "line": 2
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 2
                },
                "start": {
                  "column": 15,
                  "line": 2
                }
              }
            },
            "range": [
              14,
              40
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                52,
                55
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 3
                },
                "start": {
                  "column": 14,
                  "line": 3
                }
              },
              "range": [
                55,
                63
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  57,
                  63
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 3
                  },
                  "start": {
                    "column": 16,
                    "line": 3
                  }
                }
              }
            },
            "value": null,
            "range": [
              45,
              64
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
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
              "name": "bar",
              "optional": false,
              "range": [
                76,
                79
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                79,
                189
              ],
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
                          "name": "t",
                          "optional": false,
                          "range": [
                            153,
                            154
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 6
                            },
                            "start": {
                              "column": 12,
                              "line": 6
                            }
                          }
                        },
                        "init": {
                          "type": "ThisExpression",
                          "range": [
                            157,
                            161
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 6
                            },
                            "start": {
                              "column": 16,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          153,
                          161
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 6
                          },
                          "start": {
                            "column": 12,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      149,
                      162
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ThisExpression",
                      "range": [
                        178,
                        182
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
                      171,
                      183
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
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
                  82,
                  189
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 8
                  },
                  "start": {
                    "column": 17,
                    "line": 4
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
                  "line": 8
                },
                "start": {
                  "column": 14,
                  "line": 4
                }
              }
            },
            "range": [
              69,
              189
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
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
            "line": 9
          },
          "start": {
            "column": 8,
            "line": 1
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
      "implements": [],
      "superClass": null,
      "range": [
        0,
        191
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
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
            "name": "t",
            "optional": false,
            "range": [
              197,
              198
            ],
            "loc": {
              "end": {
                "column": 5,
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
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "range": [
                  201,
                  202
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 11
                  },
                  "start": {
                    "column": 8,
                    "line": 11
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "range": [
                  203,
                  206
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 11
                  },
                  "start": {
                    "column": 10,
                    "line": 11
                  }
                }
              },
              "range": [
                201,
                206
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 11
                },
                "start": {
                  "column": 8,
                  "line": 11
                }
              }
            },
            "optional": false,
            "range": [
              201,
              208
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 11
              },
              "start": {
                "column": 8,
                "line": 11
              }
            }
          },
          "range": [
            197,
            208
          ],
          "loc": {
            "end": {
              "column": 15,
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
        193,
        209
      ],
      "loc": {
        "end": {
          "column": 16,
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
            "name": "r2",
            "optional": false,
            "range": [
              224,
              226
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
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "range": [
                  229,
                  230
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 13
                  },
                  "start": {
                    "column": 9,
                    "line": 13
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
                  231,
                  234
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 13
                  },
                  "start": {
                    "column": 11,
                    "line": 13
                  }
                }
              },
              "range": [
                229,
                234
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 13
                },
                "start": {
                  "column": 9,
                  "line": 13
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                237,
                238
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 13
                },
                "start": {
                  "column": 17,
                  "line": 13
                }
              }
            },
            "range": [
              229,
              238
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
            224,
            238
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
        220,
        239
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
              244,
              246
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "range": [
                  249,
                  250
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 14
                  },
                  "start": {
                    "column": 9,
                    "line": 14
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "range": [
                  251,
                  254
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 14
                  },
                  "start": {
                    "column": 11,
                    "line": 14
                  }
                }
              },
              "range": [
                249,
                254
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 14
                },
                "start": {
                  "column": 9,
                  "line": 14
                }
              }
            },
            "optional": false,
            "range": [
              249,
              256
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 14
              },
              "start": {
                "column": 9,
                "line": 14
              }
            }
          },
          "range": [
            244,
            256
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 14
            },
            "start": {
              "column": 4,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        240,
        257
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
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
              262,
              264
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  273,
                  274
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 15
                  },
                  "start": {
                    "column": 15,
                    "line": 15
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "range": [
                271,
                272
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
            },
            "range": [
              267,
              275
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 15
              },
              "start": {
                "column": 9,
                "line": 15
              }
            }
          },
          "range": [
            262,
            275
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 15
            },
            "start": {
              "column": 4,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        258,
        276
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          290,
          498
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
              "name": "test",
              "optional": false,
              "range": [
                303,
                307
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 18
                },
                "start": {
                  "column": 11,
                  "line": 18
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 18
                },
                "start": {
                  "column": 15,
                  "line": 18
                }
              },
              "range": [
                307,
                315
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  309,
                  315
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 18
                  },
                  "start": {
                    "column": 17,
                    "line": 18
                  }
                }
              }
            },
            "value": null,
            "range": [
              296,
              316
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
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
                321,
                332
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 19
                },
                "start": {
                  "column": 4,
                  "line": 19
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
                332,
                347
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  344,
                  347
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 19
                  },
                  "start": {
                    "column": 27,
                    "line": 19
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 19
                      },
                      "start": {
                        "column": 17,
                        "line": 19
                      }
                    },
                    "range": [
                      334,
                      342
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        336,
                        342
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 19
                        },
                        "start": {
                          "column": 19,
                          "line": 19
                        }
                      }
                    }
                  },
                  "range": [
                    333,
                    342
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
              "loc": {
                "end": {
                  "column": 30,
                  "line": 19
                },
                "start": {
                  "column": 15,
                  "line": 19
                }
              }
            },
            "range": [
              321,
              347
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                359,
                362
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 20
                },
                "start": {
                  "column": 11,
                  "line": 20
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 20
                },
                "start": {
                  "column": 14,
                  "line": 20
                }
              },
              "range": [
                362,
                370
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  364,
                  370
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 20
                  },
                  "start": {
                    "column": 16,
                    "line": 20
                  }
                }
              }
            },
            "value": null,
            "range": [
              352,
              371
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
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
              "name": "bar",
              "optional": false,
              "range": [
                383,
                386
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 21
                },
                "start": {
                  "column": 11,
                  "line": 21
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                386,
                496
              ],
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
                          "name": "t",
                          "optional": false,
                          "range": [
                            460,
                            461
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 23
                            },
                            "start": {
                              "column": 12,
                              "line": 23
                            }
                          }
                        },
                        "init": {
                          "type": "ThisExpression",
                          "range": [
                            464,
                            468
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 23
                            },
                            "start": {
                              "column": 16,
                              "line": 23
                            }
                          }
                        },
                        "range": [
                          460,
                          468
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 23
                          },
                          "start": {
                            "column": 12,
                            "line": 23
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      456,
                      469
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 23
                      },
                      "start": {
                        "column": 8,
                        "line": 23
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ThisExpression",
                      "range": [
                        485,
                        489
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 24
                        },
                        "start": {
                          "column": 15,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      478,
                      490
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 24
                      },
                      "start": {
                        "column": 8,
                        "line": 24
                      }
                    }
                  }
                ],
                "range": [
                  389,
                  496
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 25
                  },
                  "start": {
                    "column": 17,
                    "line": 21
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
                  "line": 25
                },
                "start": {
                  "column": 14,
                  "line": 21
                }
              }
            },
            "range": [
              376,
              496
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 25
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
            "line": 26
          },
          "start": {
            "column": 12,
            "line": 17
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "range": [
          284,
          286
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
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 17
          },
          "start": {
            "column": 8,
            "line": 17
          }
        },
        "range": [
          286,
          289
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
                287,
                288
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 17
                },
                "start": {
                  "column": 9,
                  "line": 17
                }
              }
            },
            "out": false,
            "range": [
              287,
              288
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 17
              },
              "start": {
                "column": 9,
                "line": 17
              }
            }
          }
        ]
      },
      "range": [
        278,
        498
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 17
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
            "name": "t2",
            "optional": false,
            "range": [
              504,
              506
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "C2",
                "optional": false,
                "range": [
                  509,
                  511
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
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "range": [
                  512,
                  515
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 28
                  },
                  "start": {
                    "column": 12,
                    "line": 28
                  }
                }
              },
              "range": [
                509,
                515
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 28
                },
                "start": {
                  "column": 9,
                  "line": 28
                }
              }
            },
            "optional": false,
            "range": [
              509,
              517
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 28
              },
              "start": {
                "column": 9,
                "line": 28
              }
            }
          },
          "range": [
            504,
            517
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 28
            },
            "start": {
              "column": 4,
              "line": 28
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        500,
        518
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
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
            "name": "r5",
            "optional": false,
            "range": [
              533,
              535
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          },
          "init": {
            "type": "BinaryExpression",
            "operator": "+",
            "left": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "range": [
                  538,
                  540
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 30
                  },
                  "start": {
                    "column": 9,
                    "line": 30
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
                  541,
                  544
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 30
                  },
                  "start": {
                    "column": 12,
                    "line": 30
                  }
                }
              },
              "range": [
                538,
                544
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 30
                },
                "start": {
                  "column": 9,
                  "line": 30
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                547,
                548
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 30
                },
                "start": {
                  "column": 18,
                  "line": 30
                }
              }
            },
            "range": [
              538,
              548
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 30
              },
              "start": {
                "column": 9,
                "line": 30
              }
            }
          },
          "range": [
            533,
            548
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 30
            },
            "start": {
              "column": 4,
              "line": 30
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        529,
        549
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
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
              554,
              556
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "range": [
                  559,
                  561
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 31
                  },
                  "start": {
                    "column": 9,
                    "line": 31
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "range": [
                  562,
                  565
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 31
                  },
                  "start": {
                    "column": 12,
                    "line": 31
                  }
                }
              },
              "range": [
                559,
                565
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 31
                },
                "start": {
                  "column": 9,
                  "line": 31
                }
              }
            },
            "optional": false,
            "range": [
              559,
              567
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 31
              },
              "start": {
                "column": 9,
                "line": 31
              }
            }
          },
          "range": [
            554,
            567
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 31
            },
            "start": {
              "column": 4,
              "line": 31
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        550,
        568
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
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
              573,
              575
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "''",
                "value": "",
                "range": [
                  585,
                  587
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 32
                  },
                  "start": {
                    "column": 16,
                    "line": 32
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "range": [
                582,
                584
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 32
                },
                "start": {
                  "column": 13,
                  "line": 32
                }
              }
            },
            "range": [
              578,
              588
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 32
              },
              "start": {
                "column": 9,
                "line": 32
              }
            }
          },
          "range": [
            573,
            588
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 32
            },
            "start": {
              "column": 4,
              "line": 32
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        569,
        589
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 34
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
