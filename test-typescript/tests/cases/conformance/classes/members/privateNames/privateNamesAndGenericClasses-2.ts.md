__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    538
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          11,
          244
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "name": "foo",
              "range": [
                17,
                21
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 11,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              },
              "range": [
                21,
                24
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    23,
                    24
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 2
                    },
                    "start": {
                      "column": 10,
                      "line": 2
                    }
                  }
                },
                "range": [
                  23,
                  24
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 2
                  },
                  "start": {
                    "column": 10,
                    "line": 2
                  }
                }
              }
            },
            "value": null,
            "range": [
              17,
              25
            ],
            "loc": {
              "end": {
                "column": 12,
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
              "type": "PrivateIdentifier",
              "name": "bar",
              "range": [
                30,
                34
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
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
                34,
                71
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "range": [
                          55,
                          59
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 4
                          },
                          "start": {
                            "column": 13,
                            "line": 4
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "foo",
                        "range": [
                          60,
                          64
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 4
                          },
                          "start": {
                            "column": 18,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        55,
                        64
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 4
                        },
                        "start": {
                          "column": 13,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      48,
                      65
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 4
                      },
                      "start": {
                        "column": 6,
                        "line": 4
                      }
                    }
                  }
                ],
                "range": [
                  40,
                  71
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 5
                  },
                  "start": {
                    "column": 14,
                    "line": 3
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
                    "column": 13,
                    "line": 3
                  },
                  "start": {
                    "column": 10,
                    "line": 3
                  }
                },
                "range": [
                  36,
                  39
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      38,
                      39
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 3
                      },
                      "start": {
                        "column": 12,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    38,
                    39
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 3
                    },
                    "start": {
                      "column": 12,
                      "line": 3
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 5
                },
                "start": {
                  "column": 8,
                  "line": 3
                }
              }
            },
            "range": [
              30,
              71
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 5
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
              "range": [
                76,
                87
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
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
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                87,
                145
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            102,
                            106
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
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "foo",
                          "range": [
                            107,
                            111
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 7
                            },
                            "start": {
                              "column": 11,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          102,
                          111
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 7
                          },
                          "start": {
                            "column": 6,
                            "line": 7
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "range": [
                          114,
                          115
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 7
                          },
                          "start": {
                            "column": 18,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        102,
                        115
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 7
                        },
                        "start": {
                          "column": 6,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      102,
                      116
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 7
                      },
                      "start": {
                        "column": 6,
                        "line": 7
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "range": [
                          123,
                          124
                        ],
                        "loc": {
                          "end": {
                            "column": 7,
                            "line": 8
                          },
                          "start": {
                            "column": 6,
                            "line": 8
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
                            "type": "ThisExpression",
                            "range": [
                              127,
                              131
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 8
                              },
                              "start": {
                                "column": 10,
                                "line": 8
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "bar",
                            "range": [
                              132,
                              136
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
                          "range": [
                            127,
                            136
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 8
                            },
                            "start": {
                              "column": 10,
                              "line": 8
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          127,
                          138
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 8
                          },
                          "start": {
                            "column": 10,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        123,
                        138
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 8
                        },
                        "start": {
                          "column": 6,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      123,
                      139
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 8
                      },
                      "start": {
                        "column": 6,
                        "line": 8
                      }
                    }
                  }
                ],
                "range": [
                  94,
                  145
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 9
                  },
                  "start": {
                    "column": 22,
                    "line": 6
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 6
                      },
                      "start": {
                        "column": 17,
                        "line": 6
                      }
                    },
                    "range": [
                      89,
                      92
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          91,
                          92
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 6
                          },
                          "start": {
                            "column": 19,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        91,
                        92
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 6
                        },
                        "start": {
                          "column": 19,
                          "line": 6
                        }
                      }
                    }
                  },
                  "range": [
                    88,
                    92
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
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 9
                },
                "start": {
                  "column": 15,
                  "line": 6
                }
              }
            },
            "range": [
              76,
              145
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 6
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
              "name": "baz",
              "optional": false,
              "range": [
                154,
                157
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 10
                },
                "start": {
                  "column": 8,
                  "line": 10
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
                157,
                193
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            172,
                            176
                          ],
                          "loc": {
                            "end": {
                              "column": 10,
                              "line": 11
                            },
                            "start": {
                              "column": 6,
                              "line": 11
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "foo",
                          "range": [
                            177,
                            181
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 11
                            },
                            "start": {
                              "column": 11,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          172,
                          181
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 11
                          },
                          "start": {
                            "column": 6,
                            "line": 11
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "range": [
                          184,
                          185
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 11
                          },
                          "start": {
                            "column": 18,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        172,
                        185
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 11
                        },
                        "start": {
                          "column": 6,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      172,
                      186
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 11
                      },
                      "start": {
                        "column": 6,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  164,
                  193
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 13
                  },
                  "start": {
                    "column": 18,
                    "line": 10
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 10
                      },
                      "start": {
                        "column": 13,
                        "line": 10
                      }
                    },
                    "range": [
                      159,
                      162
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          161,
                          162
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 10
                          },
                          "start": {
                            "column": 15,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        161,
                        162
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 10
                        },
                        "start": {
                          "column": 15,
                          "line": 10
                        }
                      }
                    }
                  },
                  "range": [
                    158,
                    162
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 10
                    },
                    "start": {
                      "column": 12,
                      "line": 10
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 13
                },
                "start": {
                  "column": 11,
                  "line": 10
                }
              }
            },
            "range": [
              150,
              193
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 13
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
              "name": "baz",
              "optional": false,
              "range": [
                202,
                205
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 14
                },
                "start": {
                  "column": 8,
                  "line": 14
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
                205,
                242
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "range": [
                          226,
                          230
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 15
                          },
                          "start": {
                            "column": 13,
                            "line": 15
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "foo",
                        "range": [
                          231,
                          235
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 15
                          },
                          "start": {
                            "column": 18,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        226,
                        235
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 15
                        },
                        "start": {
                          "column": 13,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      219,
                      236
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 15
                      },
                      "start": {
                        "column": 6,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  211,
                  242
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 16
                  },
                  "start": {
                    "column": 17,
                    "line": 14
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
                    "column": 16,
                    "line": 14
                  },
                  "start": {
                    "column": 13,
                    "line": 14
                  }
                },
                "range": [
                  207,
                  210
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      209,
                      210
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 14
                      },
                      "start": {
                        "column": 15,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    209,
                    210
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 14
                    },
                    "start": {
                      "column": 15,
                      "line": 14
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 16
                },
                "start": {
                  "column": 11,
                  "line": 14
                }
              }
            },
            "range": [
              198,
              242
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 14
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
            "column": 11,
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 10,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        },
        "range": [
          7,
          10
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
                8,
                9
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 1
                },
                "start": {
                  "column": 8,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              8,
              9
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 1
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        244
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
              250,
              251
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "3",
                "value": 3,
                "range": [
                  260,
                  261
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 19
                  },
                  "start": {
                    "column": 14,
                    "line": 19
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                258,
                259
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 19
                },
                "start": {
                  "column": 12,
                  "line": 19
                }
              }
            },
            "range": [
              254,
              262
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 19
              },
              "start": {
                "column": 8,
                "line": 19
              }
            }
          },
          "range": [
            250,
            262
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 19
            },
            "start": {
              "column": 4,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        246,
        263
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
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
            "name": "b",
            "optional": false,
            "range": [
              268,
              269
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
          "init": {
            "type": "NewExpression",
            "arguments": [
              {
                "type": "Literal",
                "raw": "\"hello\"",
                "value": "hello",
                "range": [
                  278,
                  285
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 20
                  },
                  "start": {
                    "column": 14,
                    "line": 20
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                276,
                277
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 20
                },
                "start": {
                  "column": 12,
                  "line": 20
                }
              }
            },
            "range": [
              272,
              286
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 20
              },
              "start": {
                "column": 8,
                "line": 20
              }
            }
          },
          "range": [
            268,
            286
          ],
          "loc": {
            "end": {
              "column": 22,
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
      "kind": "let",
      "range": [
        264,
        287
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
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
              289,
              290
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 22
              },
              "start": {
                "column": 0,
                "line": 22
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "range": [
              291,
              294
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 22
              },
              "start": {
                "column": 2,
                "line": 22
              }
            }
          },
          "range": [
            289,
            294
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 22
            },
            "start": {
              "column": 0,
              "line": 22
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "5",
          "value": 5,
          "range": [
            297,
            298
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 22
            },
            "start": {
              "column": 8,
              "line": 22
            }
          }
        },
        "range": [
          289,
          298
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 22
          },
          "start": {
            "column": 0,
            "line": 22
          }
        }
      },
      "range": [
        289,
        298
      ],
      "loc": {
        "end": {
          "column": 9,
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 23
                },
                "start": {
                  "column": 7,
                  "line": 23
                }
              },
              "range": [
                344,
                352
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  346,
                  352
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 23
                  },
                  "start": {
                    "column": 9,
                    "line": 23
                  }
                }
              }
            },
            "range": [
              343,
              352
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 23
              },
              "start": {
                "column": 6,
                "line": 23
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                355,
                356
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 23
                },
                "start": {
                  "column": 18,
                  "line": 23
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "range": [
                357,
                360
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 23
                },
                "start": {
                  "column": 20,
                  "line": 23
                }
              }
            },
            "range": [
              355,
              360
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 23
              },
              "start": {
                "column": 18,
                "line": 23
              }
            }
          },
          "range": [
            343,
            360
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 23
            },
            "start": {
              "column": 6,
              "line": 23
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        337,
        360
      ],
      "loc": {
        "end": {
          "column": 23,
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
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "range": [
            385,
            386
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
          "type": "PrivateIdentifier",
          "name": "foo",
          "range": [
            387,
            391
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 24
            },
            "start": {
              "column": 2,
              "line": 24
            }
          }
        },
        "range": [
          385,
          391
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 24
          },
          "start": {
            "column": 0,
            "line": 24
          }
        }
      },
      "range": [
        385,
        392
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "range": [
            436,
            437
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 25
            },
            "start": {
              "column": 0,
              "line": 25
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "range": [
            440,
            441
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 25
            },
            "start": {
              "column": 4,
              "line": 25
            }
          }
        },
        "range": [
          436,
          441
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 25
          },
          "start": {
            "column": 0,
            "line": 25
          }
        }
      },
      "range": [
        436,
        442
      ],
      "loc": {
        "end": {
          "column": 6,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "range": [
            487,
            488
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 26
            },
            "start": {
              "column": 0,
              "line": 26
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "range": [
            491,
            492
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 26
            },
            "start": {
              "column": 4,
              "line": 26
            }
          }
        },
        "range": [
          487,
          492
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 26
          },
          "start": {
            "column": 0,
            "line": 26
          }
        }
      },
      "range": [
        487,
        493
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 27
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
