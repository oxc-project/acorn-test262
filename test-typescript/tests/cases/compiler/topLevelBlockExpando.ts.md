__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    115,
    312
  ],
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          132,
          168
        ],
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "first",
              "optional": false,
              "range": [
                136,
                141
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 7
                },
                "start": {
                  "column": 2,
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
                  "column": 15,
                  "line": 7
                },
                "start": {
                  "column": 7,
                  "line": 7
                }
              },
              "range": [
                141,
                149
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  143,
                  149
                ],
                "loc": {
                  "end": {
                    "column": 15,
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
              136,
              150
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 7
              },
              "start": {
                "column": 2,
                "line": 7
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "last",
              "optional": false,
              "range": [
                153,
                157
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 8
                },
                "start": {
                  "column": 2,
                  "line": 8
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
                  "column": 14,
                  "line": 8
                },
                "start": {
                  "column": 6,
                  "line": 8
                }
              },
              "range": [
                157,
                165
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  159,
                  165
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 8
                  },
                  "start": {
                    "column": 8,
                    "line": 8
                  }
                }
              }
            },
            "range": [
              153,
              166
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 8
              },
              "start": {
                "column": 2,
                "line": 8
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
            "column": 17,
            "line": 6
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Person",
        "optional": false,
        "range": [
          125,
          131
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 6
          },
          "start": {
            "column": 10,
            "line": 6
          }
        }
      },
      "range": [
        115,
        168
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
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
                "name": "dice",
                "optional": false,
                "range": [
                  180,
                  184
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 12
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                }
              },
              "init": {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
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
                              204,
                              208
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 12
                              },
                              "start": {
                                "column": 32,
                                "line": 12
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
                              209,
                              215
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 12
                              },
                              "start": {
                                "column": 37,
                                "line": 12
                              }
                            }
                          },
                          "range": [
                            204,
                            215
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 12
                            },
                            "start": {
                              "column": 32,
                              "line": 12
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          204,
                          217
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 12
                          },
                          "start": {
                            "column": 32,
                            "line": 12
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "6",
                        "value": 6,
                        "range": [
                          220,
                          221
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 12
                          },
                          "start": {
                            "column": 48,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        204,
                        221
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 12
                        },
                        "start": {
                          "column": 32,
                          "line": 12
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
                          "column": 25,
                          "line": 12
                        },
                        "start": {
                          "column": 21,
                          "line": 12
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "floor",
                      "optional": false,
                      "range": [
                        198,
                        203
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 12
                        },
                        "start": {
                          "column": 26,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      193,
                      203
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 12
                      },
                      "start": {
                        "column": 21,
                        "line": 12
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    193,
                    222
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 12
                    },
                    "start": {
                      "column": 21,
                      "line": 12
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [],
                "range": [
                  187,
                  222
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 12
                  },
                  "start": {
                    "column": 15,
                    "line": 12
                  }
                }
              },
              "range": [
                180,
                222
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 12
                },
                "start": {
                  "column": 8,
                  "line": 12
                }
              }
            }
          ],
          "declare": false,
          "kind": "const",
          "range": [
            174,
            223
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 12
            },
            "start": {
              "column": 2,
              "line": 12
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
                "name": "dice",
                "optional": false,
                "range": [
                  226,
                  230
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 13
                  },
                  "start": {
                    "column": 2,
                    "line": 13
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "first",
                "optional": false,
                "range": [
                  231,
                  236
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 13
                  },
                  "start": {
                    "column": 7,
                    "line": 13
                  }
                }
              },
              "range": [
                226,
                236
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 13
                },
                "start": {
                  "column": 2,
                  "line": 13
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "'Rando'",
              "value": "Rando",
              "range": [
                239,
                246
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 13
                },
                "start": {
                  "column": 15,
                  "line": 13
                }
              }
            },
            "range": [
              226,
              246
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 13
              },
              "start": {
                "column": 2,
                "line": 13
              }
            }
          },
          "range": [
            226,
            247
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 13
            },
            "start": {
              "column": 2,
              "line": 13
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
                "name": "dice",
                "optional": false,
                "range": [
                  252,
                  256
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 14
                  },
                  "start": {
                    "column": 2,
                    "line": 14
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "last",
                "optional": false,
                "range": [
                  257,
                  261
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 14
                  },
                  "start": {
                    "column": 7,
                    "line": 14
                  }
                }
              },
              "range": [
                252,
                261
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 14
                },
                "start": {
                  "column": 2,
                  "line": 14
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "'Calrissian'",
              "value": "Calrissian",
              "range": [
                264,
                276
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 14
                },
                "start": {
                  "column": 14,
                  "line": 14
                }
              }
            },
            "range": [
              252,
              276
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 14
              },
              "start": {
                "column": 2,
                "line": 14
              }
            }
          },
          "range": [
            252,
            277
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 14
            },
            "start": {
              "column": 2,
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
                "name": "diceP",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 15
                    },
                    "start": {
                      "column": 13,
                      "line": 15
                    }
                  },
                  "range": [
                    291,
                    299
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Person",
                      "optional": false,
                      "range": [
                        293,
                        299
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 15
                        },
                        "start": {
                          "column": 15,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      293,
                      299
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 15
                      },
                      "start": {
                        "column": 15,
                        "line": 15
                      }
                    }
                  }
                },
                "range": [
                  286,
                  299
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 15
                  },
                  "start": {
                    "column": 8,
                    "line": 15
                  }
                }
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "dice",
                "optional": false,
                "range": [
                  302,
                  306
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 15
                  },
                  "start": {
                    "column": 24,
                    "line": 15
                  }
                }
              },
              "range": [
                286,
                306
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 15
                },
                "start": {
                  "column": 8,
                  "line": 15
                }
              }
            }
          ],
          "declare": false,
          "kind": "const",
          "range": [
            280,
            307
          ],
          "loc": {
            "end": {
              "column": 29,
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
        170,
        311
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 17
    },
    "start": {
      "column": 0,
      "line": 6
    }
  },
  "hashbang": null
}
```
