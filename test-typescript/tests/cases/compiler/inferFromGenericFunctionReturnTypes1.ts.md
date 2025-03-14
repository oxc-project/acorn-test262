__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    102,
    1542
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          117,
          380
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
              "name": "_store",
              "optional": false,
              "range": [
                121,
                127
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 5
                },
                "start": {
                  "column": 2,
                  "line": 5
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
                  "column": 13,
                  "line": 5
                },
                "start": {
                  "column": 8,
                  "line": 5
                }
              },
              "range": [
                127,
                132
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "range": [
                      129,
                      130
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
                    129,
                    130
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
                  129,
                  132
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 5
                  },
                  "start": {
                    "column": 10,
                    "line": 5
                  }
                }
              }
            },
            "value": null,
            "range": [
              121,
              133
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 5
              },
              "start": {
                "column": 2,
                "line": 5
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
              "name": "add",
              "optional": false,
              "range": [
                137,
                140
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 7
                },
                "start": {
                  "column": 2,
                  "line": 7
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
                140,
                177
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            170,
                            171
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 8
                            },
                            "start": {
                              "column": 21,
                              "line": 8
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              153,
                              157
                            ],
                            "loc": {
                              "end": {
                                "column": 8,
                                "line": 8
                              },
                              "start": {
                                "column": 4,
                                "line": 8
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_store",
                            "optional": false,
                            "range": [
                              158,
                              164
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 8
                              },
                              "start": {
                                "column": 9,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            153,
                            164
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 8
                            },
                            "start": {
                              "column": 4,
                              "line": 8
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "push",
                          "optional": false,
                          "range": [
                            165,
                            169
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 8
                            },
                            "start": {
                              "column": 16,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          153,
                          169
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 8
                          },
                          "start": {
                            "column": 4,
                            "line": 8
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        153,
                        172
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 8
                        },
                        "start": {
                          "column": 4,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      153,
                      173
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
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
                  147,
                  177
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 9
                  },
                  "start": {
                    "column": 12,
                    "line": 7
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 7
                      },
                      "start": {
                        "column": 7,
                        "line": 7
                      }
                    },
                    "range": [
                      142,
                      145
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          144,
                          145
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 7
                          },
                          "start": {
                            "column": 9,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        144,
                        145
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
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
                    141,
                    145
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
                }
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 9
                },
                "start": {
                  "column": 5,
                  "line": 7
                }
              }
            },
            "range": [
              137,
              177
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 9
              },
              "start": {
                "column": 2,
                "line": 7
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
              "name": "transform",
              "optional": false,
              "range": [
                181,
                190
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 11
                },
                "start": {
                  "column": 2,
                  "line": 11
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
                190,
                279
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
                          "type": "ThisExpression",
                          "range": [
                            269,
                            273
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 12
                            },
                            "start": {
                              "column": 23,
                              "line": 12
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "transformer",
                        "optional": false,
                        "range": [
                          257,
                          268
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 12
                          },
                          "start": {
                            "column": 11,
                            "line": 12
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        257,
                        274
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 12
                        },
                        "start": {
                          "column": 11,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      250,
                      275
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 12
                      },
                      "start": {
                        "column": 4,
                        "line": 12
                      }
                    }
                  }
                ],
                "range": [
                  244,
                  279
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 13
                  },
                  "start": {
                    "column": 65,
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
                  "name": "transformer",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 11
                      },
                      "start": {
                        "column": 26,
                        "line": 11
                      }
                    },
                    "range": [
                      205,
                      232
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
                                "column": 40,
                                "line": 11
                              },
                              "start": {
                                "column": 30,
                                "line": 11
                              }
                            },
                            "range": [
                              209,
                              219
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  216,
                                  219
                                ],
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "range": [
                                        217,
                                        218
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 39,
                                          "line": 11
                                        },
                                        "start": {
                                          "column": 38,
                                          "line": 11
                                        }
                                      }
                                    },
                                    "range": [
                                      217,
                                      218
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 39,
                                        "line": 11
                                      },
                                      "start": {
                                        "column": 38,
                                        "line": 11
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 37,
                                    "line": 11
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SetOf",
                                "optional": false,
                                "range": [
                                  211,
                                  216
                                ],
                                "loc": {
                                  "end": {
                                    "column": 37,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 32,
                                    "line": 11
                                  }
                                }
                              },
                              "range": [
                                211,
                                219
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 11
                                },
                                "start": {
                                  "column": 32,
                                  "line": 11
                                }
                              }
                            }
                          },
                          "range": [
                            208,
                            219
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 11
                            },
                            "start": {
                              "column": 29,
                              "line": 11
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 11
                          },
                          "start": {
                            "column": 42,
                            "line": 11
                          }
                        },
                        "range": [
                          221,
                          232
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              229,
                              232
                            ],
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "range": [
                                    230,
                                    231
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 52,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 51,
                                      "line": 11
                                    }
                                  }
                                },
                                "range": [
                                  230,
                                  231
                                ],
                                "loc": {
                                  "end": {
                                    "column": 52,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 51,
                                    "line": 11
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 11
                              },
                              "start": {
                                "column": 50,
                                "line": 11
                              }
                            }
                          },
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "SetOf",
                            "optional": false,
                            "range": [
                              224,
                              229
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 11
                              },
                              "start": {
                                "column": 45,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            224,
                            232
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 11
                            },
                            "start": {
                              "column": 45,
                              "line": 11
                            }
                          }
                        }
                      },
                      "range": [
                        207,
                        232
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 11
                        },
                        "start": {
                          "column": 28,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    194,
                    232
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 11
                    },
                    "start": {
                      "column": 15,
                      "line": 11
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 64,
                    "line": 11
                  },
                  "start": {
                    "column": 54,
                    "line": 11
                  }
                },
                "range": [
                  233,
                  243
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      240,
                      243
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "range": [
                            241,
                            242
                          ],
                          "loc": {
                            "end": {
                              "column": 63,
                              "line": 11
                            },
                            "start": {
                              "column": 62,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          241,
                          242
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 11
                          },
                          "start": {
                            "column": 62,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 11
                      },
                      "start": {
                        "column": 61,
                        "line": 11
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "range": [
                      235,
                      240
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 11
                      },
                      "start": {
                        "column": 56,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    235,
                    243
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 11
                    },
                    "start": {
                      "column": 56,
                      "line": 11
                    }
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 11
                  },
                  "start": {
                    "column": 11,
                    "line": 11
                  }
                },
                "range": [
                  190,
                  193
                ],
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "range": [
                        191,
                        192
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 11
                        },
                        "start": {
                          "column": 12,
                          "line": 11
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      191,
                      192
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 11
                      },
                      "start": {
                        "column": 12,
                        "line": 11
                      }
                    }
                  }
                ]
              },
              "loc": {
                "end": {
                  "column": 3,
                  "line": 13
                },
                "start": {
                  "column": 11,
                  "line": 11
                }
              }
            },
            "range": [
              181,
              279
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 13
              },
              "start": {
                "column": 2,
                "line": 11
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
              "name": "forEach",
              "optional": false,
              "range": [
                283,
                290
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 15
                },
                "start": {
                  "column": 2,
                  "line": 15
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
                290,
                378
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
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "range": [
                                  367,
                                  368
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 39,
                                    "line": 16
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "i",
                                "optional": false,
                                "range": [
                                  370,
                                  371
                                ],
                                "loc": {
                                  "end": {
                                    "column": 43,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 42,
                                    "line": 16
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
                                364,
                                366
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 16
                                },
                                "start": {
                                  "column": 36,
                                  "line": 16
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              364,
                              372
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 16
                              },
                              "start": {
                                "column": 36,
                                "line": 16
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
                                355,
                                356
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 16
                                },
                                "start": {
                                  "column": 27,
                                  "line": 16
                                }
                              }
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "range": [
                                358,
                                359
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 16
                                },
                                "start": {
                                  "column": 30,
                                  "line": 16
                                }
                              }
                            }
                          ],
                          "range": [
                            354,
                            372
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 16
                            },
                            "start": {
                              "column": 26,
                              "line": 16
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "range": [
                              334,
                              338
                            ],
                            "loc": {
                              "end": {
                                "column": 10,
                                "line": 16
                              },
                              "start": {
                                "column": 6,
                                "line": 16
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "_store",
                            "optional": false,
                            "range": [
                              339,
                              345
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 16
                              },
                              "start": {
                                "column": 11,
                                "line": 16
                              }
                            }
                          },
                          "range": [
                            334,
                            345
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 16
                            },
                            "start": {
                              "column": 6,
                              "line": 16
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "forEach",
                          "optional": false,
                          "range": [
                            346,
                            353
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 16
                            },
                            "start": {
                              "column": 18,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          334,
                          353
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 16
                          },
                          "start": {
                            "column": 6,
                            "line": 16
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        334,
                        373
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 16
                        },
                        "start": {
                          "column": 6,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      334,
                      374
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 16
                      },
                      "start": {
                        "column": 6,
                        "line": 16
                      }
                    }
                  }
                ],
                "range": [
                  326,
                  378
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 17
                  },
                  "start": {
                    "column": 45,
                    "line": 15
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
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 15
                      },
                      "start": {
                        "column": 12,
                        "line": 15
                      }
                    },
                    "range": [
                      293,
                      324
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
                                "column": 19,
                                "line": 15
                              },
                              "start": {
                                "column": 16,
                                "line": 15
                              }
                            },
                            "range": [
                              297,
                              300
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "range": [
                                  299,
                                  300
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
                              "range": [
                                299,
                                300
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
                            }
                          },
                          "range": [
                            296,
                            300
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 15
                            },
                            "start": {
                              "column": 15,
                              "line": 15
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "index",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 15
                              },
                              "start": {
                                "column": 26,
                                "line": 15
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
                                  "column": 34,
                                  "line": 15
                                },
                                "start": {
                                  "column": 28,
                                  "line": 15
                                }
                              }
                            }
                          },
                          "range": [
                            302,
                            315
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 15
                            },
                            "start": {
                              "column": 21,
                              "line": 15
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 15
                          },
                          "start": {
                            "column": 36,
                            "line": 15
                          }
                        },
                        "range": [
                          317,
                          324
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            320,
                            324
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 15
                            },
                            "start": {
                              "column": 39,
                              "line": 15
                            }
                          }
                        }
                      },
                      "range": [
                        295,
                        324
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 15
                        },
                        "start": {
                          "column": 14,
                          "line": 15
                        }
                      }
                    }
                  },
                  "range": [
                    291,
                    324
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 15
                    },
                    "start": {
                      "column": 10,
                      "line": 15
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 17
                },
                "start": {
                  "column": 9,
                  "line": 15
                }
              }
            },
            "range": [
              283,
              378
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 17
              },
              "start": {
                "column": 2,
                "line": 15
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
            "column": 15,
            "line": 4
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SetOf",
        "optional": false,
        "range": [
          108,
          113
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 4
          },
          "start": {
            "column": 6,
            "line": 4
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 4
          },
          "start": {
            "column": 11,
            "line": 4
          }
        },
        "range": [
          113,
          116
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
                114,
                115
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 4
                },
                "start": {
                  "column": 12,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              114,
              115
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 4
              },
              "start": {
                "column": 12,
                "line": 4
              }
            }
          }
        ]
      },
      "range": [
        102,
        380
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "compose",
        "optional": false,
        "range": [
          391,
          398
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
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fnA",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 32,
                "line": 21
              },
              "start": {
                "column": 5,
                "line": 21
              }
            },
            "range": [
              420,
              447
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
                        "column": 19,
                        "line": 21
                      },
                      "start": {
                        "column": 9,
                        "line": 21
                      }
                    },
                    "range": [
                      424,
                      434
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          431,
                          434
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "range": [
                                432,
                                433
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 21
                                },
                                "start": {
                                  "column": 17,
                                  "line": 21
                                }
                              }
                            },
                            "range": [
                              432,
                              433
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 21
                              },
                              "start": {
                                "column": 17,
                                "line": 21
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 21
                          },
                          "start": {
                            "column": 16,
                            "line": 21
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SetOf",
                        "optional": false,
                        "range": [
                          426,
                          431
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 21
                          },
                          "start": {
                            "column": 11,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        426,
                        434
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 21
                        },
                        "start": {
                          "column": 11,
                          "line": 21
                        }
                      }
                    }
                  },
                  "range": [
                    423,
                    434
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 21
                    },
                    "start": {
                      "column": 8,
                      "line": 21
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 21
                  },
                  "start": {
                    "column": 21,
                    "line": 21
                  }
                },
                "range": [
                  436,
                  447
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      444,
                      447
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "range": [
                            445,
                            446
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 21
                            },
                            "start": {
                              "column": 30,
                              "line": 21
                            }
                          }
                        },
                        "range": [
                          445,
                          446
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 21
                          },
                          "start": {
                            "column": 30,
                            "line": 21
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 21
                      },
                      "start": {
                        "column": 29,
                        "line": 21
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "range": [
                      439,
                      444
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 21
                      },
                      "start": {
                        "column": 24,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    439,
                    447
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
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
                422,
                447
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 21
                },
                "start": {
                  "column": 7,
                  "line": 21
                }
              }
            }
          },
          "range": [
            417,
            447
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 21
            },
            "start": {
              "column": 2,
              "line": 21
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fnB",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 32,
                "line": 22
              },
              "start": {
                "column": 5,
                "line": 22
              }
            },
            "range": [
              455,
              482
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                        "column": 19,
                        "line": 22
                      },
                      "start": {
                        "column": 9,
                        "line": 22
                      }
                    },
                    "range": [
                      459,
                      469
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          466,
                          469
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "range": [
                                467,
                                468
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 22
                                },
                                "start": {
                                  "column": 17,
                                  "line": 22
                                }
                              }
                            },
                            "range": [
                              467,
                              468
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 22
                              },
                              "start": {
                                "column": 17,
                                "line": 22
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 22
                          },
                          "start": {
                            "column": 16,
                            "line": 22
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SetOf",
                        "optional": false,
                        "range": [
                          461,
                          466
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 22
                          },
                          "start": {
                            "column": 11,
                            "line": 22
                          }
                        }
                      },
                      "range": [
                        461,
                        469
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 22
                        },
                        "start": {
                          "column": 11,
                          "line": 22
                        }
                      }
                    }
                  },
                  "range": [
                    458,
                    469
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 22
                    },
                    "start": {
                      "column": 8,
                      "line": 22
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 22
                  },
                  "start": {
                    "column": 21,
                    "line": 22
                  }
                },
                "range": [
                  471,
                  482
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      479,
                      482
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "range": [
                            480,
                            481
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 22
                            },
                            "start": {
                              "column": 30,
                              "line": 22
                            }
                          }
                        },
                        "range": [
                          480,
                          481
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 22
                          },
                          "start": {
                            "column": 30,
                            "line": 22
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 22
                      },
                      "start": {
                        "column": 29,
                        "line": 22
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "range": [
                      474,
                      479
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 22
                      },
                      "start": {
                        "column": 24,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    474,
                    482
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 22
                    },
                    "start": {
                      "column": 24,
                      "line": 22
                    }
                  }
                }
              },
              "range": [
                457,
                482
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 22
                },
                "start": {
                  "column": 7,
                  "line": 22
                }
              }
            }
          },
          "range": [
            452,
            482
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 22
            },
            "start": {
              "column": 2,
              "line": 22
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fnC",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 32,
                "line": 23
              },
              "start": {
                "column": 5,
                "line": 23
              }
            },
            "range": [
              490,
              517
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 23
                      },
                      "start": {
                        "column": 9,
                        "line": 23
                      }
                    },
                    "range": [
                      494,
                      504
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          501,
                          504
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "range": [
                                502,
                                503
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 23
                                },
                                "start": {
                                  "column": 17,
                                  "line": 23
                                }
                              }
                            },
                            "range": [
                              502,
                              503
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 23
                              },
                              "start": {
                                "column": 17,
                                "line": 23
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 23
                          },
                          "start": {
                            "column": 16,
                            "line": 23
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SetOf",
                        "optional": false,
                        "range": [
                          496,
                          501
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 23
                          },
                          "start": {
                            "column": 11,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        496,
                        504
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 23
                        },
                        "start": {
                          "column": 11,
                          "line": 23
                        }
                      }
                    }
                  },
                  "range": [
                    493,
                    504
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 23
                    },
                    "start": {
                      "column": 8,
                      "line": 23
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 23
                  },
                  "start": {
                    "column": 21,
                    "line": 23
                  }
                },
                "range": [
                  506,
                  517
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      514,
                      517
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "range": [
                            515,
                            516
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 23
                            },
                            "start": {
                              "column": 30,
                              "line": 23
                            }
                          }
                        },
                        "range": [
                          515,
                          516
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 23
                          },
                          "start": {
                            "column": 30,
                            "line": 23
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 23
                      },
                      "start": {
                        "column": 29,
                        "line": 23
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "range": [
                      509,
                      514
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 23
                      },
                      "start": {
                        "column": 24,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    509,
                    517
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 23
                    },
                    "start": {
                      "column": 24,
                      "line": 23
                    }
                  }
                }
              },
              "range": [
                492,
                517
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 23
                },
                "start": {
                  "column": 7,
                  "line": 23
                }
              }
            }
          },
          "range": [
            487,
            517
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 23
            },
            "start": {
              "column": 2,
              "line": 23
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fnD",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 32,
                "line": 24
              },
              "start": {
                "column": 5,
                "line": 24
              }
            },
            "range": [
              524,
              551
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 24
                      },
                      "start": {
                        "column": 9,
                        "line": 24
                      }
                    },
                    "range": [
                      528,
                      538
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          535,
                          538
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "D",
                              "optional": false,
                              "range": [
                                536,
                                537
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 24
                                },
                                "start": {
                                  "column": 17,
                                  "line": 24
                                }
                              }
                            },
                            "range": [
                              536,
                              537
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 24
                              },
                              "start": {
                                "column": 17,
                                "line": 24
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 24
                          },
                          "start": {
                            "column": 16,
                            "line": 24
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SetOf",
                        "optional": false,
                        "range": [
                          530,
                          535
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 24
                          },
                          "start": {
                            "column": 11,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        530,
                        538
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 24
                        },
                        "start": {
                          "column": 11,
                          "line": 24
                        }
                      }
                    }
                  },
                  "range": [
                    527,
                    538
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 24
                    },
                    "start": {
                      "column": 8,
                      "line": 24
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 24
                  },
                  "start": {
                    "column": 21,
                    "line": 24
                  }
                },
                "range": [
                  540,
                  551
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      548,
                      551
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "range": [
                            549,
                            550
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 24
                            },
                            "start": {
                              "column": 30,
                              "line": 24
                            }
                          }
                        },
                        "range": [
                          549,
                          550
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 24
                          },
                          "start": {
                            "column": 30,
                            "line": 24
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 24
                      },
                      "start": {
                        "column": 29,
                        "line": 24
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "range": [
                      543,
                      548
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 24
                      },
                      "start": {
                        "column": 24,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    543,
                    551
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 24
                    },
                    "start": {
                      "column": 24,
                      "line": 24
                    }
                  }
                }
              },
              "range": [
                526,
                551
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 24
                },
                "start": {
                  "column": 7,
                  "line": 24
                }
              }
            }
          },
          "range": [
            521,
            551
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 24
            },
            "start": {
              "column": 2,
              "line": 24
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 27,
            "line": 25
          },
          "start": {
            "column": 1,
            "line": 25
          }
        },
        "range": [
          554,
          580
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
                    "column": 14,
                    "line": 25
                  },
                  "start": {
                    "column": 4,
                    "line": 25
                  }
                },
                "range": [
                  557,
                  567
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      564,
                      567
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "range": [
                            565,
                            566
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 25
                            },
                            "start": {
                              "column": 12,
                              "line": 25
                            }
                          }
                        },
                        "range": [
                          565,
                          566
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 25
                          },
                          "start": {
                            "column": 12,
                            "line": 25
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 25
                      },
                      "start": {
                        "column": 11,
                        "line": 25
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "range": [
                      559,
                      564
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 25
                      },
                      "start": {
                        "column": 6,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    559,
                    567
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 25
                    },
                    "start": {
                      "column": 6,
                      "line": 25
                    }
                  }
                }
              },
              "range": [
                556,
                567
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 25
                },
                "start": {
                  "column": 3,
                  "line": 25
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 27,
                "line": 25
              },
              "start": {
                "column": 16,
                "line": 25
              }
            },
            "range": [
              569,
              580
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  577,
                  580
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "range": [
                        578,
                        579
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
                    "range": [
                      578,
                      579
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
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 25
                  },
                  "start": {
                    "column": 24,
                    "line": 25
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SetOf",
                "optional": false,
                "range": [
                  572,
                  577
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 25
                  },
                  "start": {
                    "column": 19,
                    "line": 25
                  }
                }
              },
              "range": [
                572,
                580
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 25
                },
                "start": {
                  "column": 19,
                  "line": 25
                }
              }
            }
          },
          "range": [
            555,
            580
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 25
            },
            "start": {
              "column": 2,
              "line": 25
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 31,
            "line": 20
          },
          "start": {
            "column": 16,
            "line": 20
          }
        },
        "range": [
          398,
          413
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
                399,
                400
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 20
                },
                "start": {
                  "column": 17,
                  "line": 20
                }
              }
            },
            "out": false,
            "range": [
              399,
              400
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 20
              },
              "start": {
                "column": 17,
                "line": 20
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
              "name": "B",
              "optional": false,
              "range": [
                402,
                403
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 20
                },
                "start": {
                  "column": 20,
                  "line": 20
                }
              }
            },
            "out": false,
            "range": [
              402,
              403
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 20
              },
              "start": {
                "column": 20,
                "line": 20
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
              "name": "C",
              "optional": false,
              "range": [
                405,
                406
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 20
                },
                "start": {
                  "column": 23,
                  "line": 20
                }
              }
            },
            "out": false,
            "range": [
              405,
              406
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 20
              },
              "start": {
                "column": 23,
                "line": 20
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
              "name": "D",
              "optional": false,
              "range": [
                408,
                409
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 20
                },
                "start": {
                  "column": 26,
                  "line": 20
                }
              }
            },
            "out": false,
            "range": [
              408,
              409
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 20
              },
              "start": {
                "column": 26,
                "line": 20
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
              "name": "E",
              "optional": false,
              "range": [
                411,
                412
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 20
                },
                "start": {
                  "column": 29,
                  "line": 20
                }
              }
            },
            "out": false,
            "range": [
              411,
              412
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 20
              },
              "start": {
                "column": 29,
                "line": 20
              }
            }
          }
        ]
      },
      "range": [
        382,
        581
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 20
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
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prev",
                          "optional": false,
                          "range": [
                            707,
                            711
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 28
                            },
                            "start": {
                              "column": 47,
                              "line": 28
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
                          704,
                          706
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 28
                          },
                          "start": {
                            "column": 44,
                            "line": 28
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        704,
                        712
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 28
                        },
                        "start": {
                          "column": 44,
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
                        "name": "prev",
                        "optional": false,
                        "range": [
                          691,
                          695
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 28
                          },
                          "start": {
                            "column": 31,
                            "line": 28
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
                        "optional": false,
                        "range": [
                          697,
                          699
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 28
                          },
                          "start": {
                            "column": 37,
                            "line": 28
                          }
                        }
                      }
                    ],
                    "range": [
                      690,
                      712
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 28
                      },
                      "start": {
                        "column": 30,
                        "line": 28
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      714,
                      715
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 28
                      },
                      "start": {
                        "column": 54,
                        "line": 28
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
                    "name": "fns",
                    "optional": false,
                    "range": [
                      679,
                      682
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 28
                      },
                      "start": {
                        "column": 19,
                        "line": 28
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reduce",
                    "optional": false,
                    "range": [
                      683,
                      689
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 28
                      },
                      "start": {
                        "column": 23,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    679,
                    689
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 28
                    },
                    "start": {
                      "column": 19,
                      "line": 28
                    }
                  }
                },
                "optional": false,
                "range": [
                  679,
                  716
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 28
                  },
                  "start": {
                    "column": 19,
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 28
                      },
                      "start": {
                        "column": 11,
                        "line": 28
                      }
                    },
                    "range": [
                      671,
                      674
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          673,
                          674
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 28
                          },
                          "start": {
                            "column": 13,
                            "line": 28
                          }
                        }
                      },
                      "range": [
                        673,
                        674
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 28
                        },
                        "start": {
                          "column": 13,
                          "line": 28
                        }
                      }
                    }
                  },
                  "range": [
                    670,
                    674
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 28
                    },
                    "start": {
                      "column": 10,
                      "line": 28
                    }
                  }
                }
              ],
              "range": [
                669,
                716
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 28
                },
                "start": {
                  "column": 9,
                  "line": 28
                }
              }
            },
            "range": [
              662,
              717
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 28
              },
              "start": {
                "column": 2,
                "line": 28
              }
            }
          }
        ],
        "range": [
          658,
          719
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 58,
            "line": 27
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "compose",
        "optional": false,
        "range": [
          609,
          616
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
      "params": [
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "fns",
            "optional": false,
            "range": [
              623,
              626
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 27
              },
              "start": {
                "column": 23,
                "line": 27
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 43,
                "line": 27
              },
              "start": {
                "column": 26,
                "line": 27
              }
            },
            "range": [
              626,
              643
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
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
                          "column": 34,
                          "line": 27
                        },
                        "start": {
                          "column": 31,
                          "line": 27
                        }
                      },
                      "range": [
                        631,
                        634
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            633,
                            634
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 27
                            },
                            "start": {
                              "column": 33,
                              "line": 27
                            }
                          }
                        },
                        "range": [
                          633,
                          634
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 27
                          },
                          "start": {
                            "column": 33,
                            "line": 27
                          }
                        }
                      }
                    },
                    "range": [
                      630,
                      634
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 27
                      },
                      "start": {
                        "column": 30,
                        "line": 27
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 27
                    },
                    "start": {
                      "column": 36,
                      "line": 27
                    }
                  },
                  "range": [
                    636,
                    640
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        639,
                        640
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 27
                        },
                        "start": {
                          "column": 39,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      639,
                      640
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 27
                      },
                      "start": {
                        "column": 39,
                        "line": 27
                      }
                    }
                  }
                },
                "range": [
                  629,
                  640
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 27
                  },
                  "start": {
                    "column": 29,
                    "line": 27
                  }
                }
              },
              "range": [
                628,
                643
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 27
                },
                "start": {
                  "column": 28,
                  "line": 27
                }
              }
            }
          },
          "range": [
            620,
            643
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 27
            },
            "start": {
              "column": 20,
              "line": 27
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 57,
            "line": 27
          },
          "start": {
            "column": 44,
            "line": 27
          }
        },
        "range": [
          644,
          657
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
                    "column": 51,
                    "line": 27
                  },
                  "start": {
                    "column": 48,
                    "line": 27
                  }
                },
                "range": [
                  648,
                  651
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      650,
                      651
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 27
                      },
                      "start": {
                        "column": 50,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    650,
                    651
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 27
                    },
                    "start": {
                      "column": 50,
                      "line": 27
                    }
                  }
                }
              },
              "range": [
                647,
                651
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 27
                },
                "start": {
                  "column": 47,
                  "line": 27
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 57,
                "line": 27
              },
              "start": {
                "column": 53,
                "line": 27
              }
            },
            "range": [
              653,
              657
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  656,
                  657
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 27
                  },
                  "start": {
                    "column": 56,
                    "line": 27
                  }
                }
              },
              "range": [
                656,
                657
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 27
                },
                "start": {
                  "column": 56,
                  "line": 27
                }
              }
            }
          },
          "range": [
            646,
            657
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 27
            },
            "start": {
              "column": 46,
              "line": 27
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 19,
            "line": 27
          },
          "start": {
            "column": 16,
            "line": 27
          }
        },
        "range": [
          616,
          619
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
                617,
                618
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 27
                },
                "start": {
                  "column": 17,
                  "line": 27
                }
              }
            },
            "out": false,
            "range": [
              617,
              618
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 27
              },
              "start": {
                "column": 17,
                "line": 27
              }
            }
          }
        ]
      },
      "range": [
        600,
        719
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 27
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
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 33
                              },
                              "start": {
                                "column": 11,
                                "line": 33
                              }
                            },
                            "range": [
                              825,
                              835
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  832,
                                  835
                                ],
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "B",
                                      "optional": false,
                                      "range": [
                                        833,
                                        834
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 20,
                                          "line": 33
                                        },
                                        "start": {
                                          "column": 19,
                                          "line": 33
                                        }
                                      }
                                    },
                                    "range": [
                                      833,
                                      834
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 20,
                                        "line": 33
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 33
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 33
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "SetOf",
                                "optional": false,
                                "range": [
                                  827,
                                  832
                                ],
                                "loc": {
                                  "end": {
                                    "column": 18,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 13,
                                    "line": 33
                                  }
                                }
                              },
                              "range": [
                                827,
                                835
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 33
                                },
                                "start": {
                                  "column": 13,
                                  "line": 33
                                }
                              }
                            }
                          },
                          "range": [
                            824,
                            835
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 33
                            },
                            "start": {
                              "column": 10,
                              "line": 33
                            }
                          }
                        },
                        "init": {
                          "type": "NewExpression",
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "SetOf",
                            "optional": false,
                            "range": [
                              842,
                              847
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 33
                              },
                              "start": {
                                "column": 28,
                                "line": 33
                              }
                            }
                          },
                          "range": [
                            838,
                            849
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 33
                            },
                            "start": {
                              "column": 24,
                              "line": 33
                            }
                          }
                        },
                        "range": [
                          824,
                          849
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 33
                          },
                          "start": {
                            "column": 10,
                            "line": 33
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      818,
                      850
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 33
                      },
                      "start": {
                        "column": 4,
                        "line": 33
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
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "range": [
                                      879,
                                      880
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 34
                                      },
                                      "start": {
                                        "column": 28,
                                        "line": 34
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
                                    876,
                                    878
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 27,
                                      "line": 34
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 34
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  876,
                                  881
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 34
                                  },
                                  "start": {
                                    "column": 25,
                                    "line": 34
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
                                "name": "b",
                                "optional": false,
                                "range": [
                                  870,
                                  871
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 34
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 34
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "add",
                                "optional": false,
                                "range": [
                                  872,
                                  875
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 34
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 34
                                  }
                                }
                              },
                              "range": [
                                870,
                                875
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 34
                                },
                                "start": {
                                  "column": 19,
                                  "line": 34
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              870,
                              882
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 34
                              },
                              "start": {
                                "column": 19,
                                "line": 34
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
                                865,
                                866
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 34
                                },
                                "start": {
                                  "column": 14,
                                  "line": 34
                                }
                              }
                            }
                          ],
                          "range": [
                            865,
                            882
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 34
                            },
                            "start": {
                              "column": 14,
                              "line": 34
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            855,
                            856
                          ],
                          "loc": {
                            "end": {
                              "column": 5,
                              "line": 34
                            },
                            "start": {
                              "column": 4,
                              "line": 34
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "forEach",
                          "optional": false,
                          "range": [
                            857,
                            864
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 34
                            },
                            "start": {
                              "column": 6,
                              "line": 34
                            }
                          }
                        },
                        "range": [
                          855,
                          864
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 34
                          },
                          "start": {
                            "column": 4,
                            "line": 34
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        855,
                        883
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 34
                        },
                        "start": {
                          "column": 4,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      855,
                      884
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 34
                      },
                      "start": {
                        "column": 4,
                        "line": 34
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        896,
                        897
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 35
                        },
                        "start": {
                          "column": 11,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      889,
                      898
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 35
                      },
                      "start": {
                        "column": 4,
                        "line": 35
                      }
                    }
                  }
                ],
                "range": [
                  812,
                  902
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 36
                  },
                  "start": {
                    "column": 26,
                    "line": 32
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 32
                      },
                      "start": {
                        "column": 11,
                        "line": 32
                      }
                    },
                    "range": [
                      797,
                      807
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          804,
                          807
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "range": [
                                805,
                                806
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 32
                                },
                                "start": {
                                  "column": 19,
                                  "line": 32
                                }
                              }
                            },
                            "range": [
                              805,
                              806
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 32
                              },
                              "start": {
                                "column": 19,
                                "line": 32
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 32
                          },
                          "start": {
                            "column": 18,
                            "line": 32
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SetOf",
                        "optional": false,
                        "range": [
                          799,
                          804
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 32
                          },
                          "start": {
                            "column": 13,
                            "line": 32
                          }
                        }
                      },
                      "range": [
                        799,
                        807
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 32
                        },
                        "start": {
                          "column": 13,
                          "line": 32
                        }
                      }
                    }
                  },
                  "range": [
                    796,
                    807
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
                }
              ],
              "range": [
                795,
                902
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 36
                },
                "start": {
                  "column": 9,
                  "line": 32
                }
              }
            },
            "range": [
              788,
              902
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 36
              },
              "start": {
                "column": 2,
                "line": 32
              }
            }
          }
        ],
        "range": [
          784,
          904
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 37
          },
          "start": {
            "column": 63,
            "line": 31
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "map",
        "optional": false,
        "range": [
          730,
          733
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 31
          },
          "start": {
            "column": 9,
            "line": 31
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 34,
                "line": 31
              },
              "start": {
                "column": 21,
                "line": 31
              }
            },
            "range": [
              742,
              755
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
                        "column": 28,
                        "line": 31
                      },
                      "start": {
                        "column": 25,
                        "line": 31
                      }
                    },
                    "range": [
                      746,
                      749
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          748,
                          749
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 31
                          },
                          "start": {
                            "column": 27,
                            "line": 31
                          }
                        }
                      },
                      "range": [
                        748,
                        749
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 31
                        },
                        "start": {
                          "column": 27,
                          "line": 31
                        }
                      }
                    }
                  },
                  "range": [
                    745,
                    749
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 31
                    },
                    "start": {
                      "column": 24,
                      "line": 31
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 31
                  },
                  "start": {
                    "column": 30,
                    "line": 31
                  }
                },
                "range": [
                  751,
                  755
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "range": [
                      754,
                      755
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 31
                      },
                      "start": {
                        "column": 33,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    754,
                    755
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 31
                    },
                    "start": {
                      "column": 33,
                      "line": 31
                    }
                  }
                }
              },
              "range": [
                744,
                755
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 31
                },
                "start": {
                  "column": 23,
                  "line": 31
                }
              }
            }
          },
          "range": [
            740,
            755
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 31
            },
            "start": {
              "column": 19,
              "line": 31
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 62,
            "line": 31
          },
          "start": {
            "column": 35,
            "line": 31
          }
        },
        "range": [
          756,
          783
        ],
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 31
                  },
                  "start": {
                    "column": 39,
                    "line": 31
                  }
                },
                "range": [
                  760,
                  770
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      767,
                      770
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "range": [
                            768,
                            769
                          ],
                          "loc": {
                            "end": {
                              "column": 48,
                              "line": 31
                            },
                            "start": {
                              "column": 47,
                              "line": 31
                            }
                          }
                        },
                        "range": [
                          768,
                          769
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 31
                          },
                          "start": {
                            "column": 47,
                            "line": 31
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 31
                      },
                      "start": {
                        "column": 46,
                        "line": 31
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "range": [
                      762,
                      767
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 31
                      },
                      "start": {
                        "column": 41,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    762,
                    770
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 31
                    },
                    "start": {
                      "column": 41,
                      "line": 31
                    }
                  }
                }
              },
              "range": [
                759,
                770
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 31
                },
                "start": {
                  "column": 38,
                  "line": 31
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 62,
                "line": 31
              },
              "start": {
                "column": 51,
                "line": 31
              }
            },
            "range": [
              772,
              783
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  780,
                  783
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "range": [
                        781,
                        782
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 31
                        },
                        "start": {
                          "column": 60,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      781,
                      782
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 31
                      },
                      "start": {
                        "column": 60,
                        "line": 31
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 31
                  },
                  "start": {
                    "column": 59,
                    "line": 31
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SetOf",
                "optional": false,
                "range": [
                  775,
                  780
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 31
                  },
                  "start": {
                    "column": 54,
                    "line": 31
                  }
                }
              },
              "range": [
                775,
                783
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 31
                },
                "start": {
                  "column": 54,
                  "line": 31
                }
              }
            }
          },
          "range": [
            758,
            783
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 31
            },
            "start": {
              "column": 37,
              "line": 31
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 31
          },
          "start": {
            "column": 12,
            "line": 31
          }
        },
        "range": [
          733,
          739
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
                734,
                735
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 31
                },
                "start": {
                  "column": 13,
                  "line": 31
                }
              }
            },
            "out": false,
            "range": [
              734,
              735
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 31
              },
              "start": {
                "column": 13,
                "line": 31
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
              "name": "B",
              "optional": false,
              "range": [
                737,
                738
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 31
                },
                "start": {
                  "column": 16,
                  "line": 31
                }
              }
            },
            "out": false,
            "range": [
              737,
              738
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 31
              },
              "start": {
                "column": 16,
                "line": 31
              }
            }
          }
        ]
      },
      "range": [
        721,
        904
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 31
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
                          "name": "result",
                          "optional": false,
                          "range": [
                            1022,
                            1028
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 41
                            },
                            "start": {
                              "column": 10,
                              "line": 41
                            }
                          }
                        },
                        "init": {
                          "type": "NewExpression",
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "SetOf",
                            "optional": false,
                            "range": [
                              1035,
                              1040
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 41
                              },
                              "start": {
                                "column": 23,
                                "line": 41
                              }
                            }
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "range": [
                              1040,
                              1043
                            ],
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "range": [
                                    1041,
                                    1042
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 30,
                                      "line": 41
                                    },
                                    "start": {
                                      "column": 29,
                                      "line": 41
                                    }
                                  }
                                },
                                "range": [
                                  1041,
                                  1042
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 41
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 41
                                  }
                                }
                              }
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 41
                              },
                              "start": {
                                "column": 28,
                                "line": 41
                              }
                            }
                          },
                          "range": [
                            1031,
                            1045
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 41
                            },
                            "start": {
                              "column": 19,
                              "line": 41
                            }
                          }
                        },
                        "range": [
                          1022,
                          1045
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 41
                          },
                          "start": {
                            "column": 10,
                            "line": 41
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      1016,
                      1046
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 41
                      },
                      "start": {
                        "column": 4,
                        "line": 41
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
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "IfStatement",
                                "alternate": null,
                                "consequent": {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "CallExpression",
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "range": [
                                          1103,
                                          1104
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 36,
                                            "line": 43
                                          },
                                          "start": {
                                            "column": 35,
                                            "line": 43
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
                                        "name": "result",
                                        "optional": false,
                                        "range": [
                                          1092,
                                          1098
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 30,
                                            "line": 43
                                          },
                                          "start": {
                                            "column": 24,
                                            "line": 43
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "add",
                                        "optional": false,
                                        "range": [
                                          1099,
                                          1102
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 34,
                                            "line": 43
                                          },
                                          "start": {
                                            "column": 31,
                                            "line": 43
                                          }
                                        }
                                      },
                                      "range": [
                                        1092,
                                        1102
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 34,
                                          "line": 43
                                        },
                                        "start": {
                                          "column": 24,
                                          "line": 43
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "range": [
                                      1092,
                                      1105
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 37,
                                        "line": 43
                                      },
                                      "start": {
                                        "column": 24,
                                        "line": 43
                                      }
                                    }
                                  },
                                  "range": [
                                    1092,
                                    1106
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 38,
                                      "line": 43
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 43
                                    }
                                  }
                                },
                                "test": {
                                  "type": "CallExpression",
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "range": [
                                        1088,
                                        1089
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 21,
                                          "line": 43
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 43
                                        }
                                      }
                                    }
                                  ],
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "predicate",
                                    "optional": false,
                                    "range": [
                                      1078,
                                      1087
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 43
                                      },
                                      "start": {
                                        "column": 10,
                                        "line": 43
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "range": [
                                    1078,
                                    1090
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 43
                                    },
                                    "start": {
                                      "column": 10,
                                      "line": 43
                                    }
                                  }
                                },
                                "range": [
                                  1074,
                                  1106
                                ],
                                "loc": {
                                  "end": {
                                    "column": 38,
                                    "line": 43
                                  },
                                  "start": {
                                    "column": 6,
                                    "line": 43
                                  }
                                }
                              }
                            ],
                            "range": [
                              1066,
                              1112
                            ],
                            "loc": {
                              "end": {
                                "column": 5,
                                "line": 44
                              },
                              "start": {
                                "column": 19,
                                "line": 42
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
                              "name": "x",
                              "optional": false,
                              "range": [
                                1061,
                                1062
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 42
                                },
                                "start": {
                                  "column": 14,
                                  "line": 42
                                }
                              }
                            }
                          ],
                          "range": [
                            1061,
                            1112
                          ],
                          "loc": {
                            "end": {
                              "column": 5,
                              "line": 44
                            },
                            "start": {
                              "column": 14,
                              "line": 42
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            1051,
                            1052
                          ],
                          "loc": {
                            "end": {
                              "column": 5,
                              "line": 42
                            },
                            "start": {
                              "column": 4,
                              "line": 42
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "forEach",
                          "optional": false,
                          "range": [
                            1053,
                            1060
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 42
                            },
                            "start": {
                              "column": 6,
                              "line": 42
                            }
                          }
                        },
                        "range": [
                          1051,
                          1060
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 42
                          },
                          "start": {
                            "column": 4,
                            "line": 42
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1051,
                        1113
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 44
                        },
                        "start": {
                          "column": 4,
                          "line": 42
                        }
                      }
                    },
                    "range": [
                      1051,
                      1114
                    ],
                    "loc": {
                      "end": {
                        "column": 7,
                        "line": 44
                      },
                      "start": {
                        "column": 4,
                        "line": 42
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "range": [
                        1125,
                        1131
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 45
                        },
                        "start": {
                          "column": 10,
                          "line": 45
                        }
                      }
                    },
                    "range": [
                      1118,
                      1132
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 45
                      },
                      "start": {
                        "column": 3,
                        "line": 45
                      }
                    }
                  }
                ],
                "range": [
                  1010,
                  1136
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 46
                  },
                  "start": {
                    "column": 26,
                    "line": 40
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 40
                      },
                      "start": {
                        "column": 11,
                        "line": 40
                      }
                    },
                    "range": [
                      995,
                      1005
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          1002,
                          1005
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "range": [
                                1003,
                                1004
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 40
                                },
                                "start": {
                                  "column": 19,
                                  "line": 40
                                }
                              }
                            },
                            "range": [
                              1003,
                              1004
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 40
                              },
                              "start": {
                                "column": 19,
                                "line": 40
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 40
                          },
                          "start": {
                            "column": 18,
                            "line": 40
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SetOf",
                        "optional": false,
                        "range": [
                          997,
                          1002
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 40
                          },
                          "start": {
                            "column": 13,
                            "line": 40
                          }
                        }
                      },
                      "range": [
                        997,
                        1005
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 40
                        },
                        "start": {
                          "column": 13,
                          "line": 40
                        }
                      }
                    }
                  },
                  "range": [
                    994,
                    1005
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 40
                    },
                    "start": {
                      "column": 10,
                      "line": 40
                    }
                  }
                }
              ],
              "range": [
                993,
                1136
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 46
                },
                "start": {
                  "column": 9,
                  "line": 40
                }
              }
            },
            "range": [
              986,
              1136
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 46
              },
              "start": {
                "column": 2,
                "line": 40
              }
            }
          }
        ],
        "range": [
          982,
          1138
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 47
          },
          "start": {
            "column": 76,
            "line": 39
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "filter",
        "optional": false,
        "range": [
          915,
          921
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 39
          },
          "start": {
            "column": 9,
            "line": 39
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "predicate",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 47,
                "line": 39
              },
              "start": {
                "column": 28,
                "line": 39
              }
            },
            "range": [
              934,
              953
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
                        "column": 35,
                        "line": 39
                      },
                      "start": {
                        "column": 32,
                        "line": 39
                      }
                    },
                    "range": [
                      938,
                      941
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          940,
                          941
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 39
                          },
                          "start": {
                            "column": 34,
                            "line": 39
                          }
                        }
                      },
                      "range": [
                        940,
                        941
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 39
                        },
                        "start": {
                          "column": 34,
                          "line": 39
                        }
                      }
                    }
                  },
                  "range": [
                    937,
                    941
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 39
                    },
                    "start": {
                      "column": 31,
                      "line": 39
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 39
                  },
                  "start": {
                    "column": 37,
                    "line": 39
                  }
                },
                "range": [
                  943,
                  953
                ],
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "range": [
                    946,
                    953
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 39
                    },
                    "start": {
                      "column": 40,
                      "line": 39
                    }
                  }
                }
              },
              "range": [
                936,
                953
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 39
                },
                "start": {
                  "column": 30,
                  "line": 39
                }
              }
            }
          },
          "range": [
            925,
            953
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 39
            },
            "start": {
              "column": 19,
              "line": 39
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 75,
            "line": 39
          },
          "start": {
            "column": 48,
            "line": 39
          }
        },
        "range": [
          954,
          981
        ],
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 39
                  },
                  "start": {
                    "column": 52,
                    "line": 39
                  }
                },
                "range": [
                  958,
                  968
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      965,
                      968
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "range": [
                            966,
                            967
                          ],
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 39
                            },
                            "start": {
                              "column": 60,
                              "line": 39
                            }
                          }
                        },
                        "range": [
                          966,
                          967
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 39
                          },
                          "start": {
                            "column": 60,
                            "line": 39
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 39
                      },
                      "start": {
                        "column": 59,
                        "line": 39
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SetOf",
                    "optional": false,
                    "range": [
                      960,
                      965
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 39
                      },
                      "start": {
                        "column": 54,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    960,
                    968
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 39
                    },
                    "start": {
                      "column": 54,
                      "line": 39
                    }
                  }
                }
              },
              "range": [
                957,
                968
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 39
                },
                "start": {
                  "column": 51,
                  "line": 39
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 75,
                "line": 39
              },
              "start": {
                "column": 64,
                "line": 39
              }
            },
            "range": [
              970,
              981
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  978,
                  981
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "range": [
                        979,
                        980
                      ],
                      "loc": {
                        "end": {
                          "column": 74,
                          "line": 39
                        },
                        "start": {
                          "column": 73,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      979,
                      980
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 39
                      },
                      "start": {
                        "column": 73,
                        "line": 39
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 39
                  },
                  "start": {
                    "column": 72,
                    "line": 39
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SetOf",
                "optional": false,
                "range": [
                  973,
                  978
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 39
                  },
                  "start": {
                    "column": 67,
                    "line": 39
                  }
                }
              },
              "range": [
                973,
                981
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 39
                },
                "start": {
                  "column": 67,
                  "line": 39
                }
              }
            }
          },
          "range": [
            956,
            981
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 39
            },
            "start": {
              "column": 50,
              "line": 39
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 39
          },
          "start": {
            "column": 15,
            "line": 39
          }
        },
        "range": [
          921,
          924
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
                922,
                923
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 39
                },
                "start": {
                  "column": 16,
                  "line": 39
                }
              }
            },
            "out": false,
            "range": [
              922,
              923
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 39
              },
              "start": {
                "column": 16,
                "line": 39
              }
            }
          }
        ]
      },
      "range": [
        906,
        1138
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 39
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
            "name": "testSet",
            "optional": false,
            "range": [
              1146,
              1153
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 49
              },
              "start": {
                "column": 6,
                "line": 49
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "SetOf",
              "optional": false,
              "range": [
                1160,
                1165
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 49
                },
                "start": {
                  "column": 20,
                  "line": 49
                }
              }
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                1165,
                1173
              ],
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    1166,
                    1172
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 49
                    },
                    "start": {
                      "column": 26,
                      "line": 49
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 49
                },
                "start": {
                  "column": 25,
                  "line": 49
                }
              }
            },
            "range": [
              1156,
              1175
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 49
              },
              "start": {
                "column": 16,
                "line": 49
              }
            }
          },
          "range": [
            1146,
            1175
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 49
            },
            "start": {
              "column": 6,
              "line": 49
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1140,
        1176
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 49
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
            "raw": "1",
            "value": 1,
            "range": [
              1189,
              1190
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 50
              },
              "start": {
                "column": 12,
                "line": 50
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
            "name": "testSet",
            "optional": false,
            "range": [
              1177,
              1184
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 50
              },
              "start": {
                "column": 0,
                "line": 50
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "add",
            "optional": false,
            "range": [
              1185,
              1188
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 50
              },
              "start": {
                "column": 8,
                "line": 50
              }
            }
          },
          "range": [
            1177,
            1188
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 50
            },
            "start": {
              "column": 0,
              "line": 50
            }
          }
        },
        "optional": false,
        "range": [
          1177,
          1191
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 50
          },
          "start": {
            "column": 0,
            "line": 50
          }
        }
      },
      "range": [
        1177,
        1192
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 50
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
              1205,
              1206
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 51
              },
              "start": {
                "column": 12,
                "line": 51
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
            "name": "testSet",
            "optional": false,
            "range": [
              1193,
              1200
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 51
              },
              "start": {
                "column": 0,
                "line": 51
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "add",
            "optional": false,
            "range": [
              1201,
              1204
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 51
              },
              "start": {
                "column": 8,
                "line": 51
              }
            }
          },
          "range": [
            1193,
            1204
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 51
            },
            "start": {
              "column": 0,
              "line": 51
            }
          }
        },
        "optional": false,
        "range": [
          1193,
          1207
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 51
          },
          "start": {
            "column": 0,
            "line": 51
          }
        }
      },
      "range": [
        1193,
        1208
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 51
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
            "raw": "3",
            "value": 3,
            "range": [
              1221,
              1222
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
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "testSet",
            "optional": false,
            "range": [
              1209,
              1216
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 52
              },
              "start": {
                "column": 0,
                "line": 52
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "add",
            "optional": false,
            "range": [
              1217,
              1220
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 52
              },
              "start": {
                "column": 8,
                "line": 52
              }
            }
          },
          "range": [
            1209,
            1220
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 52
            },
            "start": {
              "column": 0,
              "line": 52
            }
          }
        },
        "optional": false,
        "range": [
          1209,
          1223
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 52
          },
          "start": {
            "column": 0,
            "line": 52
          }
        }
      },
      "range": [
        1209,
        1224
      ],
      "loc": {
        "end": {
          "column": 15,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 52
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "===",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "%",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            1272,
                            1273
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 56
                            },
                            "start": {
                              "column": 16,
                              "line": 56
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            1276,
                            1277
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 56
                            },
                            "start": {
                              "column": 20,
                              "line": 56
                            }
                          }
                        },
                        "range": [
                          1272,
                          1277
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 56
                          },
                          "start": {
                            "column": 16,
                            "line": 56
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1282,
                          1283
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 56
                          },
                          "start": {
                            "column": 26,
                            "line": 56
                          }
                        }
                      },
                      "range": [
                        1272,
                        1283
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 56
                        },
                        "start": {
                          "column": 16,
                          "line": 56
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
                          1267,
                          1268
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 56
                          },
                          "start": {
                            "column": 11,
                            "line": 56
                          }
                        }
                      }
                    ],
                    "range": [
                      1267,
                      1283
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 56
                      },
                      "start": {
                        "column": 11,
                        "line": 56
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "filter",
                  "optional": false,
                  "range": [
                    1260,
                    1266
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 56
                    },
                    "start": {
                      "column": 4,
                      "line": 56
                    }
                  }
                },
                "optional": false,
                "range": [
                  1260,
                  1284
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 56
                  },
                  "start": {
                    "column": 4,
                    "line": 56
                  }
                }
              },
              {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1299,
                          1300
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 57
                          },
                          "start": {
                            "column": 13,
                            "line": 57
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1303,
                          1304
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 57
                          },
                          "start": {
                            "column": 17,
                            "line": 57
                          }
                        }
                      },
                      "range": [
                        1299,
                        1304
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 57
                        },
                        "start": {
                          "column": 13,
                          "line": 57
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
                          1294,
                          1295
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 57
                          },
                          "start": {
                            "column": 8,
                            "line": 57
                          }
                        }
                      }
                    ],
                    "range": [
                      1294,
                      1304
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 57
                      },
                      "start": {
                        "column": 8,
                        "line": 57
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "range": [
                    1290,
                    1293
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 57
                    },
                    "start": {
                      "column": 4,
                      "line": 57
                    }
                  }
                },
                "optional": false,
                "range": [
                  1290,
                  1305
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 57
                  },
                  "start": {
                    "column": 4,
                    "line": 57
                  }
                }
              },
              {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1320,
                          1321
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 58
                          },
                          "start": {
                            "column": 13,
                            "line": 58
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "'!!!'",
                        "value": "!!!",
                        "range": [
                          1324,
                          1329
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 58
                          },
                          "start": {
                            "column": 17,
                            "line": 58
                          }
                        }
                      },
                      "range": [
                        1320,
                        1329
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 58
                        },
                        "start": {
                          "column": 13,
                          "line": 58
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
                          1315,
                          1316
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 58
                          },
                          "start": {
                            "column": 8,
                            "line": 58
                          }
                        }
                      }
                    ],
                    "range": [
                      1315,
                      1329
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 58
                      },
                      "start": {
                        "column": 8,
                        "line": 58
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "range": [
                    1311,
                    1314
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 58
                    },
                    "start": {
                      "column": 4,
                      "line": 58
                    }
                  }
                },
                "optional": false,
                "range": [
                  1311,
                  1330
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 58
                  },
                  "start": {
                    "column": 4,
                    "line": 58
                  }
                }
              },
              {
                "type": "CallExpression",
                "arguments": [
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            1345,
                            1346
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 59
                            },
                            "start": {
                              "column": 13,
                              "line": 59
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toUpperCase",
                          "optional": false,
                          "range": [
                            1347,
                            1358
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 59
                            },
                            "start": {
                              "column": 15,
                              "line": 59
                            }
                          }
                        },
                        "range": [
                          1345,
                          1358
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 59
                          },
                          "start": {
                            "column": 13,
                            "line": 59
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1345,
                        1360
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 59
                        },
                        "start": {
                          "column": 13,
                          "line": 59
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
                          1340,
                          1341
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 59
                          },
                          "start": {
                            "column": 8,
                            "line": 59
                          }
                        }
                      }
                    ],
                    "range": [
                      1340,
                      1360
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 59
                      },
                      "start": {
                        "column": 8,
                        "line": 59
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "range": [
                    1336,
                    1339
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 59
                    },
                    "start": {
                      "column": 4,
                      "line": 59
                    }
                  }
                },
                "optional": false,
                "range": [
                  1336,
                  1361
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 59
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
              "name": "compose",
              "optional": false,
              "range": [
                1247,
                1254
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 55
                },
                "start": {
                  "column": 2,
                  "line": 55
                }
              }
            },
            "optional": false,
            "range": [
              1247,
              1365
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 60
              },
              "start": {
                "column": 2,
                "line": 55
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
            "name": "testSet",
            "optional": false,
            "range": [
              1226,
              1233
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 54
              },
              "start": {
                "column": 0,
                "line": 54
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "transform",
            "optional": false,
            "range": [
              1234,
              1243
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 54
              },
              "start": {
                "column": 8,
                "line": 54
              }
            }
          },
          "range": [
            1226,
            1243
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 54
            },
            "start": {
              "column": 0,
              "line": 54
            }
          }
        },
        "optional": false,
        "range": [
          1226,
          1367
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 61
          },
          "start": {
            "column": 0,
            "line": 54
          }
        }
      },
      "range": [
        1226,
        1367
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 54
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "===",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "%",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            1415,
                            1416
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 65
                            },
                            "start": {
                              "column": 16,
                              "line": 65
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            1419,
                            1420
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 65
                            },
                            "start": {
                              "column": 20,
                              "line": 65
                            }
                          }
                        },
                        "range": [
                          1415,
                          1420
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 65
                          },
                          "start": {
                            "column": 16,
                            "line": 65
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          1425,
                          1426
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 65
                          },
                          "start": {
                            "column": 26,
                            "line": 65
                          }
                        }
                      },
                      "range": [
                        1415,
                        1426
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 65
                        },
                        "start": {
                          "column": 16,
                          "line": 65
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
                          1410,
                          1411
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 65
                          },
                          "start": {
                            "column": 11,
                            "line": 65
                          }
                        }
                      }
                    ],
                    "range": [
                      1410,
                      1426
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 65
                      },
                      "start": {
                        "column": 11,
                        "line": 65
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "filter",
                  "optional": false,
                  "range": [
                    1403,
                    1409
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 65
                    },
                    "start": {
                      "column": 4,
                      "line": 65
                    }
                  }
                },
                "optional": false,
                "range": [
                  1403,
                  1427
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 65
                  },
                  "start": {
                    "column": 4,
                    "line": 65
                  }
                }
              },
              {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1442,
                          1443
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 66
                          },
                          "start": {
                            "column": 13,
                            "line": 66
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1446,
                          1447
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 66
                          },
                          "start": {
                            "column": 17,
                            "line": 66
                          }
                        }
                      },
                      "range": [
                        1442,
                        1447
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 66
                        },
                        "start": {
                          "column": 13,
                          "line": 66
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
                          1437,
                          1438
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 66
                          },
                          "start": {
                            "column": 8,
                            "line": 66
                          }
                        }
                      }
                    ],
                    "range": [
                      1437,
                      1447
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 66
                      },
                      "start": {
                        "column": 8,
                        "line": 66
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "range": [
                    1433,
                    1436
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 66
                    },
                    "start": {
                      "column": 4,
                      "line": 66
                    }
                  }
                },
                "optional": false,
                "range": [
                  1433,
                  1448
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 66
                  },
                  "start": {
                    "column": 4,
                    "line": 66
                  }
                }
              },
              {
                "type": "CallExpression",
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "Literal",
                      "raw": "123",
                      "value": 123,
                      "range": [
                        1463,
                        1466
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 67
                        },
                        "start": {
                          "column": 13,
                          "line": 67
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
                          1458,
                          1459
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 67
                          },
                          "start": {
                            "column": 8,
                            "line": 67
                          }
                        }
                      }
                    ],
                    "range": [
                      1458,
                      1466
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 67
                      },
                      "start": {
                        "column": 8,
                        "line": 67
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "range": [
                    1454,
                    1457
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 67
                    },
                    "start": {
                      "column": 4,
                      "line": 67
                    }
                  }
                },
                "optional": false,
                "range": [
                  1454,
                  1467
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 67
                  },
                  "start": {
                    "column": 4,
                    "line": 67
                  }
                }
              },
              {
                "type": "CallExpression",
                "arguments": [
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            1499,
                            1500
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 68
                            },
                            "start": {
                              "column": 13,
                              "line": 68
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toUpperCase",
                          "optional": false,
                          "range": [
                            1501,
                            1512
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 68
                            },
                            "start": {
                              "column": 15,
                              "line": 68
                            }
                          }
                        },
                        "range": [
                          1499,
                          1512
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 68
                          },
                          "start": {
                            "column": 13,
                            "line": 68
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1499,
                        1514
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 68
                        },
                        "start": {
                          "column": 13,
                          "line": 68
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
                          1494,
                          1495
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 68
                          },
                          "start": {
                            "column": 8,
                            "line": 68
                          }
                        }
                      }
                    ],
                    "range": [
                      1494,
                      1514
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 68
                      },
                      "start": {
                        "column": 8,
                        "line": 68
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "range": [
                    1490,
                    1493
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 68
                    },
                    "start": {
                      "column": 4,
                      "line": 68
                    }
                  }
                },
                "optional": false,
                "range": [
                  1490,
                  1515
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 68
                  },
                  "start": {
                    "column": 4,
                    "line": 68
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "compose",
              "optional": false,
              "range": [
                1390,
                1397
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 64
                },
                "start": {
                  "column": 2,
                  "line": 64
                }
              }
            },
            "optional": false,
            "range": [
              1390,
              1539
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 69
              },
              "start": {
                "column": 2,
                "line": 64
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
            "name": "testSet",
            "optional": false,
            "range": [
              1369,
              1376
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 63
              },
              "start": {
                "column": 0,
                "line": 63
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "transform",
            "optional": false,
            "range": [
              1377,
              1386
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 63
              },
              "start": {
                "column": 8,
                "line": 63
              }
            }
          },
          "range": [
            1369,
            1386
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 63
            },
            "start": {
              "column": 0,
              "line": 63
            }
          }
        },
        "optional": false,
        "range": [
          1369,
          1541
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 70
          },
          "start": {
            "column": 0,
            "line": 63
          }
        }
      },
      "range": [
        1369,
        1541
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 70
        },
        "start": {
          "column": 0,
          "line": 63
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 71
    },
    "start": {
      "column": 0,
      "line": 4
    }
  },
  "hashbang": null
}
```
