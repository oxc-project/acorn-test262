__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    501
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          158
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
                21,
                25
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
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
                  "line": 2
                },
                "start": {
                  "column": 15,
                  "line": 2
                }
              },
              "range": [
                25,
                33
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  27,
                  33
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 2
                  },
                  "start": {
                    "column": 17,
                    "line": 2
                  }
                }
              }
            },
            "value": null,
            "range": [
              14,
              34
            ],
            "loc": {
              "end": {
                "column": 24,
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
              "type": "PrivateIdentifier",
              "name": "bar",
              "range": [
                46,
                50
              ],
              "loc": {
                "end": {
                  "column": 15,
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
                  "column": 23,
                  "line": 3
                },
                "start": {
                  "column": 15,
                  "line": 3
                }
              },
              "range": [
                50,
                58
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  52,
                  58
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
              }
            },
            "value": null,
            "range": [
              39,
              59
            ],
            "loc": {
              "end": {
                "column": 24,
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
              "range": [
                64,
                75
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
                76,
                156
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "range": [
                            89,
                            90
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 5
                            },
                            "start": {
                              "column": 8,
                              "line": 5
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "foo",
                          "range": [
                            91,
                            95
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 5
                            },
                            "start": {
                              "column": 10,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          89,
                          95
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 5
                          },
                          "start": {
                            "column": 8,
                            "line": 5
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "3",
                        "value": 3,
                        "range": [
                          98,
                          99
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
                        89,
                        99
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 5
                        },
                        "start": {
                          "column": 8,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      89,
                      100
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 5
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
                        "name": "B",
                        "optional": false,
                        "range": [
                          109,
                          110
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 6
                          },
                          "start": {
                            "column": 8,
                            "line": 6
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "foo",
                        "range": [
                          111,
                          115
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 6
                          },
                          "start": {
                            "column": 10,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        109,
                        115
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 6
                        },
                        "start": {
                          "column": 8,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      109,
                      116
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 6
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
                        "name": "B",
                        "optional": false,
                        "range": [
                          134,
                          135
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 7
                          },
                          "start": {
                            "column": 8,
                            "line": 7
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "bar",
                        "range": [
                          136,
                          140
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 7
                          },
                          "start": {
                            "column": 10,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        134,
                        140
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 7
                        },
                        "start": {
                          "column": 8,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      134,
                      141
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
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
                  79,
                  156
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 8
                  },
                  "start": {
                    "column": 19,
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
                  "column": 16,
                  "line": 4
                }
              }
            },
            "range": [
              64,
              156
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
        "name": "A",
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
        158
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          178,
          282
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
                191,
                195
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 12
                },
                "start": {
                  "column": 11,
                  "line": 12
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
                  "line": 12
                },
                "start": {
                  "column": 15,
                  "line": 12
                }
              },
              "range": [
                195,
                203
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  197,
                  203
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 12
                  },
                  "start": {
                    "column": 17,
                    "line": 12
                  }
                }
              }
            },
            "value": null,
            "range": [
              184,
              204
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
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
                209,
                220
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 13
                },
                "start": {
                  "column": 4,
                  "line": 13
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
                221,
                280
              ],
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
                        "type": "Super",
                        "range": [
                          234,
                          239
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 14
                          },
                          "start": {
                            "column": 8,
                            "line": 14
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        234,
                        241
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 14
                        },
                        "start": {
                          "column": 8,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      234,
                      242
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 14
                      },
                      "start": {
                        "column": 8,
                        "line": 14
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
                          "name": "B",
                          "optional": false,
                          "range": [
                            251,
                            252
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 15
                            },
                            "start": {
                              "column": 8,
                              "line": 15
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "foo",
                          "range": [
                            253,
                            257
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 15
                            },
                            "start": {
                              "column": 10,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          251,
                          257
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 15
                          },
                          "start": {
                            "column": 8,
                            "line": 15
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "\"some string\"",
                        "value": "some string",
                        "range": [
                          260,
                          273
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 15
                          },
                          "start": {
                            "column": 17,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        251,
                        273
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 15
                        },
                        "start": {
                          "column": 8,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      251,
                      274
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 15
                      },
                      "start": {
                        "column": 8,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  224,
                  280
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 16
                  },
                  "start": {
                    "column": 19,
                    "line": 13
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
                  "line": 16
                },
                "start": {
                  "column": 16,
                  "line": 13
                }
              }
            },
            "range": [
              209,
              280
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 13
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
            "column": 18,
            "line": 11
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          166,
          167
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 11
          },
          "start": {
            "column": 6,
            "line": 11
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          176,
          177
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 11
          },
          "start": {
            "column": 16,
            "line": 11
          }
        }
      },
      "range": [
        160,
        282
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
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
            "name": "willErrorSomeDay",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 32,
                  "line": 21
                },
                "start": {
                  "column": 22,
                  "line": 21
                }
              },
              "range": [
                464,
                474
              ],
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    473,
                    474
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 21
                    },
                    "start": {
                      "column": 31,
                      "line": 21
                    }
                  }
                },
                "range": [
                  466,
                  474
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
              448,
              474
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 21
              },
              "start": {
                "column": 6,
                "line": 21
              }
            }
          },
          "init": {
            "type": "ClassExpression",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                483,
                485
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 21
                },
                "start": {
                  "column": 41,
                  "line": 21
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": null,
            "implements": [],
            "superClass": null,
            "range": [
              477,
              485
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 21
              },
              "start": {
                "column": 35,
                "line": 21
              }
            }
          },
          "range": [
            448,
            485
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 21
            },
            "start": {
              "column": 6,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        442,
        486
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 22
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
