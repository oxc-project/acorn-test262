__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    14,
    337
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          26,
          337
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                32,
                43
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
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
                43,
                83
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  80,
                  83
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 4
                  },
                  "start": {
                    "column": 52,
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
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 4
                        },
                        "start": {
                          "column": 24,
                          "line": 4
                        }
                      },
                      "range": [
                        52,
                        60
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          54,
                          60
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 4
                          },
                          "start": {
                            "column": 26,
                            "line": 4
                          }
                        }
                      }
                    },
                    "range": [
                      51,
                      60
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 4
                      },
                      "start": {
                        "column": 23,
                        "line": 4
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    44,
                    60
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 4
                    },
                    "start": {
                      "column": 16,
                      "line": 4
                    }
                  }
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 4
                        },
                        "start": {
                          "column": 42,
                          "line": 4
                        }
                      },
                      "range": [
                        70,
                        78
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          72,
                          78
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
                      78
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 4
                      },
                      "start": {
                        "column": 41,
                        "line": 4
                      }
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "range": [
                    62,
                    78
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 4
                    },
                    "start": {
                      "column": 34,
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
                  "column": 15,
                  "line": 4
                }
              }
            },
            "range": [
              32,
              83
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
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "distance",
              "optional": false,
              "range": [
                95,
                103
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 5
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
                103,
                228
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
                          "name": "dx",
                          "optional": false,
                          "range": [
                            128,
                            130
                          ],
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
                        "init": {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                133,
                                137
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 6
                                },
                                "start": {
                                  "column": 17,
                                  "line": 6
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                138,
                                139
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 6
                                },
                                "start": {
                                  "column": 22,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              133,
                              139
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
                          },
                          "right": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "range": [
                                142,
                                143
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 6
                                },
                                "start": {
                                  "column": 26,
                                  "line": 6
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                144,
                                145
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 6
                                },
                                "start": {
                                  "column": 28,
                                  "line": 6
                                }
                              }
                            },
                            "range": [
                              142,
                              145
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 6
                              },
                              "start": {
                                "column": 26,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            133,
                            145
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 6
                            },
                            "start": {
                              "column": 17,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          128,
                          145
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
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
                      124,
                      146
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
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
                          "name": "dy",
                          "optional": false,
                          "range": [
                            159,
                            161
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 7
                            },
                            "start": {
                              "column": 12,
                              "line": 7
                            }
                          }
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                164,
                                168
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 7
                                },
                                "start": {
                                  "column": 17,
                                  "line": 7
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "range": [
                                169,
                                170
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 7
                                },
                                "start": {
                                  "column": 22,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              164,
                              170
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 7
                              },
                              "start": {
                                "column": 17,
                                "line": 7
                              }
                            }
                          },
                          "right": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "range": [
                                173,
                                174
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 7
                                },
                                "start": {
                                  "column": 26,
                                  "line": 7
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "range": [
                                175,
                                176
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 7
                                },
                                "start": {
                                  "column": 28,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              173,
                              176
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 7
                              },
                              "start": {
                                "column": 26,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            164,
                            176
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 7
                            },
                            "start": {
                              "column": 17,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          159,
                          176
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 7
                          },
                          "start": {
                            "column": 12,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      155,
                      177
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "dx",
                              "optional": false,
                              "range": [
                                203,
                                205
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 8
                                },
                                "start": {
                                  "column": 25,
                                  "line": 8
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "dx",
                              "optional": false,
                              "range": [
                                208,
                                210
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 8
                                },
                                "start": {
                                  "column": 30,
                                  "line": 8
                                }
                              }
                            },
                            "range": [
                              203,
                              210
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 8
                              },
                              "start": {
                                "column": 25,
                                "line": 8
                              }
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "dy",
                              "optional": false,
                              "range": [
                                213,
                                215
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 8
                                },
                                "start": {
                                  "column": 35,
                                  "line": 8
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "dy",
                              "optional": false,
                              "range": [
                                218,
                                220
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 8
                                },
                                "start": {
                                  "column": 40,
                                  "line": 8
                                }
                              }
                            },
                            "range": [
                              213,
                              220
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 8
                              },
                              "start": {
                                "column": 35,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            203,
                            220
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 8
                            },
                            "start": {
                              "column": 25,
                              "line": 8
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
                          "name": "Math",
                          "optional": false,
                          "range": [
                            193,
                            197
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 8
                            },
                            "start": {
                              "column": 15,
                              "line": 8
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "sqrt",
                          "optional": false,
                          "range": [
                            198,
                            202
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 8
                            },
                            "start": {
                              "column": 20,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          193,
                          202
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 8
                          },
                          "start": {
                            "column": 15,
                            "line": 8
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        193,
                        221
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 8
                        },
                        "start": {
                          "column": 15,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      186,
                      222
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  114,
                  228
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 9
                  },
                  "start": {
                    "column": 30,
                    "line": 5
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 5
                      },
                      "start": {
                        "column": 21,
                        "line": 5
                      }
                    },
                    "range": [
                      105,
                      112
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "range": [
                          107,
                          112
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 5
                          },
                          "start": {
                            "column": 23,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        107,
                        112
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
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
                    104,
                    112
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 5
                    },
                    "start": {
                      "column": 20,
                      "line": 5
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 9
                },
                "start": {
                  "column": 19,
                  "line": 5
                }
              }
            },
            "range": [
              88,
              228
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 5
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
              "name": "origin",
              "optional": false,
              "range": [
                240,
                246
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 10
                },
                "start": {
                  "column": 11,
                  "line": 10
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "NewExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    259,
                    260
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 10
                    },
                    "start": {
                      "column": 30,
                      "line": 10
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    262,
                    263
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
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "range": [
                  253,
                  258
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 10
                  },
                  "start": {
                    "column": 24,
                    "line": 10
                  }
                }
              },
              "range": [
                249,
                264
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 10
                },
                "start": {
                  "column": 20,
                  "line": 10
                }
              }
            },
            "range": [
              233,
              265
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
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
              "name": "distance",
              "optional": false,
              "range": [
                277,
                285
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 11
                },
                "start": {
                  "column": 11,
                  "line": 11
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
                285,
                335
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p2",
                          "optional": false,
                          "range": [
                            329,
                            331
                          ],
                          "loc": {
                            "end": {
                              "column": 65,
                              "line": 11
                            },
                            "start": {
                              "column": 63,
                              "line": 11
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
                          "name": "p1",
                          "optional": false,
                          "range": [
                            317,
                            319
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 11
                            },
                            "start": {
                              "column": 51,
                              "line": 11
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "distance",
                          "optional": false,
                          "range": [
                            320,
                            328
                          ],
                          "loc": {
                            "end": {
                              "column": 62,
                              "line": 11
                            },
                            "start": {
                              "column": 54,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          317,
                          328
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
                            "line": 11
                          },
                          "start": {
                            "column": 51,
                            "line": 11
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        317,
                        332
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 11
                        },
                        "start": {
                          "column": 51,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      310,
                      333
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 11
                      },
                      "start": {
                        "column": 44,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  308,
                  335
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 11
                  },
                  "start": {
                    "column": 42,
                    "line": 11
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
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 11
                      },
                      "start": {
                        "column": 22,
                        "line": 11
                      }
                    },
                    "range": [
                      288,
                      295
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "range": [
                          290,
                          295
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 11
                          },
                          "start": {
                            "column": 24,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        290,
                        295
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 11
                        },
                        "start": {
                          "column": 24,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    286,
                    295
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 11
                    },
                    "start": {
                      "column": 20,
                      "line": 11
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 11
                      },
                      "start": {
                        "column": 33,
                        "line": 11
                      }
                    },
                    "range": [
                      299,
                      306
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "range": [
                          301,
                          306
                        ],
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 11
                          },
                          "start": {
                            "column": 35,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        301,
                        306
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 11
                        },
                        "start": {
                          "column": 35,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    297,
                    306
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 11
                    },
                    "start": {
                      "column": 31,
                      "line": 11
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 11
                },
                "start": {
                  "column": 19,
                  "line": 11
                }
              }
            },
            "range": [
              270,
              335
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
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
            "column": 12,
            "line": 3
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Point",
        "optional": false,
        "range": [
          20,
          25
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 3
          },
          "start": {
            "column": 6,
            "line": 3
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        14,
        337
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 12
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
