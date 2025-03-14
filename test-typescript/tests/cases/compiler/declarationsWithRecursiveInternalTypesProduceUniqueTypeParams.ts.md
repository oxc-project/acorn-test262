__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    295,
    1449
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        295,
        324
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Key",
          "optional": false,
          "range": [
            307,
            310
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 5
            },
            "start": {
              "column": 12,
              "line": 5
            }
          }
        },
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                322,
                323
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 5
                },
                "start": {
                  "column": 27,
                  "line": 5
                }
              }
            },
            "range": [
              322,
              323
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 5
              },
              "start": {
                "column": 27,
                "line": 5
              }
            }
          },
          "range": [
            316,
            323
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 5
            },
            "start": {
              "column": 21,
              "line": 5
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
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
            310,
            313
          ],
          "params": [
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
                  311,
                  312
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 5
                  },
                  "start": {
                    "column": 16,
                    "line": 5
                  }
                }
              },
              "out": false,
              "range": [
                311,
                312
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 5
                },
                "start": {
                  "column": 16,
                  "line": 5
                }
              }
            }
          ]
        },
        "range": [
          302,
          324
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 5
          },
          "start": {
            "column": 7,
            "line": 5
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 29,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        325,
        371
      ],
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "declare": false,
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Value",
          "optional": false,
          "range": [
            337,
            342
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 6
            },
            "start": {
              "column": 12,
              "line": 6
            }
          }
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                368,
                369
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 6
                },
                "start": {
                  "column": 43,
                  "line": 6
                }
              }
            },
            "range": [
              368,
              369
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 6
              },
              "start": {
                "column": 43,
                "line": 6
              }
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                366,
                367
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 6
                },
                "start": {
                  "column": 41,
                  "line": 6
                }
              }
            },
            "range": [
              366,
              367
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 6
              },
              "start": {
                "column": 41,
                "line": 6
              }
            }
          },
          "range": [
            366,
            370
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 6
            },
            "start": {
              "column": 41,
              "line": 6
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "loc": {
            "end": {
              "column": 38,
              "line": 6
            },
            "start": {
              "column": 17,
              "line": 6
            }
          },
          "range": [
            342,
            363
          ],
          "params": [
            {
              "type": "TSTypeParameter",
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    356,
                    359
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          357,
                          358
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 6
                          },
                          "start": {
                            "column": 32,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        357,
                        358
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 6
                        },
                        "start": {
                          "column": 32,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 6
                    },
                    "start": {
                      "column": 31,
                      "line": 6
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Key",
                  "optional": false,
                  "range": [
                    353,
                    356
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 6
                    },
                    "start": {
                      "column": 28,
                      "line": 6
                    }
                  }
                },
                "range": [
                  353,
                  359
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 6
                  },
                  "start": {
                    "column": 28,
                    "line": 6
                  }
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "range": [
                  343,
                  344
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 6
                  },
                  "start": {
                    "column": 18,
                    "line": 6
                  }
                }
              },
              "out": false,
              "range": [
                343,
                359
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 6
                },
                "start": {
                  "column": 18,
                  "line": 6
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
                  361,
                  362
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 6
                  },
                  "start": {
                    "column": 36,
                    "line": 6
                  }
                }
              },
              "out": false,
              "range": [
                361,
                362
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 6
                },
                "start": {
                  "column": 36,
                  "line": 6
                }
              }
            }
          ]
        },
        "range": [
          332,
          371
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 6
          },
          "start": {
            "column": 7,
            "line": 6
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 46,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        372,
        941
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "updateIfChanged",
              "optional": false,
              "range": [
                385,
                400
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 7
                },
                "start": {
                  "column": 13,
                  "line": 7
                }
              }
            },
            "init": {
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
                          "name": "reduce",
                          "optional": false,
                          "range": [
                            428,
                            434
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 8
                            },
                            "start": {
                              "column": 10,
                              "line": 8
                            }
                          }
                        },
                        "init": {
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
                                      "name": "set",
                                      "optional": false,
                                      "range": [
                                        487,
                                        490
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 17,
                                          "line": 9
                                        },
                                        "start": {
                                          "column": 14,
                                          "line": 9
                                        }
                                      }
                                    },
                                    "init": {
                                      "type": "ArrowFunctionExpression",
                                      "async": false,
                                      "body": {
                                        "type": "ConditionalExpression",
                                        "alternate": {
                                          "type": "CallExpression",
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "newU",
                                              "optional": false,
                                              "range": [
                                                538,
                                                542
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 69,
                                                  "line": 9
                                                },
                                                "start": {
                                                  "column": 65,
                                                  "line": 9
                                                }
                                              }
                                            }
                                          ],
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "update",
                                            "optional": false,
                                            "range": [
                                              531,
                                              537
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 64,
                                                "line": 9
                                              },
                                              "start": {
                                                "column": 58,
                                                "line": 9
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "range": [
                                            531,
                                            543
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 70,
                                              "line": 9
                                            },
                                            "start": {
                                              "column": 58,
                                              "line": 9
                                            }
                                          }
                                        },
                                        "consequent": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "t",
                                          "optional": false,
                                          "range": [
                                            527,
                                            528
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 55,
                                              "line": 9
                                            },
                                            "start": {
                                              "column": 54,
                                              "line": 9
                                            }
                                          }
                                        },
                                        "test": {
                                          "type": "CallExpression",
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "u",
                                              "optional": false,
                                              "range": [
                                                516,
                                                517
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 44,
                                                  "line": 9
                                                },
                                                "start": {
                                                  "column": 43,
                                                  "line": 9
                                                }
                                              }
                                            },
                                            {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "newU",
                                              "optional": false,
                                              "range": [
                                                519,
                                                523
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 50,
                                                  "line": 9
                                                },
                                                "start": {
                                                  "column": 46,
                                                  "line": 9
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
                                              "name": "Object",
                                              "optional": false,
                                              "range": [
                                                506,
                                                512
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 39,
                                                  "line": 9
                                                },
                                                "start": {
                                                  "column": 33,
                                                  "line": 9
                                                }
                                              }
                                            },
                                            "optional": false,
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "is",
                                              "optional": false,
                                              "range": [
                                                513,
                                                515
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 42,
                                                  "line": 9
                                                },
                                                "start": {
                                                  "column": 40,
                                                  "line": 9
                                                }
                                              }
                                            },
                                            "range": [
                                              506,
                                              515
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 42,
                                                "line": 9
                                              },
                                              "start": {
                                                "column": 33,
                                                "line": 9
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "range": [
                                            506,
                                            524
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 51,
                                              "line": 9
                                            },
                                            "start": {
                                              "column": 33,
                                              "line": 9
                                            }
                                          }
                                        },
                                        "range": [
                                          506,
                                          543
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 70,
                                            "line": 9
                                          },
                                          "start": {
                                            "column": 33,
                                            "line": 9
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
                                          "name": "newU",
                                          "optional": false,
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "loc": {
                                              "end": {
                                                "column": 28,
                                                "line": 9
                                              },
                                              "start": {
                                                "column": 25,
                                                "line": 9
                                              }
                                            },
                                            "range": [
                                              498,
                                              501
                                            ],
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "U",
                                                "optional": false,
                                                "range": [
                                                  500,
                                                  501
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 28,
                                                    "line": 9
                                                  },
                                                  "start": {
                                                    "column": 27,
                                                    "line": 9
                                                  }
                                                }
                                              },
                                              "range": [
                                                500,
                                                501
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 28,
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
                                            494,
                                            501
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 28,
                                              "line": 9
                                            },
                                            "start": {
                                              "column": 21,
                                              "line": 9
                                            }
                                          }
                                        }
                                      ],
                                      "range": [
                                        493,
                                        543
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 70,
                                          "line": 9
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 9
                                        }
                                      }
                                    },
                                    "range": [
                                      487,
                                      543
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 70,
                                        "line": 9
                                      },
                                      "start": {
                                        "column": 14,
                                        "line": 9
                                      }
                                    }
                                  }
                                ],
                                "declare": false,
                                "kind": "const",
                                "range": [
                                  481,
                                  544
                                ],
                                "loc": {
                                  "end": {
                                    "column": 71,
                                    "line": 9
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 9
                                  }
                                }
                              },
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "CallExpression",
                                  "arguments": [
                                    {
                                      "type": "ArrowFunctionExpression",
                                      "async": false,
                                      "body": {
                                        "type": "CallExpression",
                                        "arguments": [
                                          {
                                            "type": "TSAsExpression",
                                            "expression": {
                                              "type": "MemberExpression",
                                              "computed": true,
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "u",
                                                "optional": false,
                                                "range": [
                                                  653,
                                                  654
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 37,
                                                    "line": 12
                                                  },
                                                  "start": {
                                                    "column": 36,
                                                    "line": 12
                                                  }
                                                }
                                              },
                                              "optional": false,
                                              "property": {
                                                "type": "TSAsExpression",
                                                "expression": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "key",
                                                  "optional": false,
                                                  "range": [
                                                    655,
                                                    658
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 41,
                                                      "line": 12
                                                    },
                                                    "start": {
                                                      "column": 38,
                                                      "line": 12
                                                    }
                                                  }
                                                },
                                                "typeAnnotation": {
                                                  "type": "TSTypeOperator",
                                                  "operator": "keyof",
                                                  "typeAnnotation": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "U",
                                                      "optional": false,
                                                      "range": [
                                                        668,
                                                        669
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 52,
                                                          "line": 12
                                                        },
                                                        "start": {
                                                          "column": 51,
                                                          "line": 12
                                                        }
                                                      }
                                                    },
                                                    "range": [
                                                      668,
                                                      669
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 52,
                                                        "line": 12
                                                      },
                                                      "start": {
                                                        "column": 51,
                                                        "line": 12
                                                      }
                                                    }
                                                  },
                                                  "range": [
                                                    662,
                                                    669
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 52,
                                                      "line": 12
                                                    },
                                                    "start": {
                                                      "column": 45,
                                                      "line": 12
                                                    }
                                                  }
                                                },
                                                "range": [
                                                  655,
                                                  669
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 52,
                                                    "line": 12
                                                  },
                                                  "start": {
                                                    "column": 38,
                                                    "line": 12
                                                  }
                                                }
                                              },
                                              "range": [
                                                653,
                                                670
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 53,
                                                  "line": 12
                                                },
                                                "start": {
                                                  "column": 36,
                                                  "line": 12
                                                }
                                              }
                                            },
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "typeArguments": {
                                                "type": "TSTypeParameterInstantiation",
                                                "range": [
                                                  679,
                                                  685
                                                ],
                                                "params": [
                                                  {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "K",
                                                      "optional": false,
                                                      "range": [
                                                        680,
                                                        681
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 64,
                                                          "line": 12
                                                        },
                                                        "start": {
                                                          "column": 63,
                                                          "line": 12
                                                        }
                                                      }
                                                    },
                                                    "range": [
                                                      680,
                                                      681
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 64,
                                                        "line": 12
                                                      },
                                                      "start": {
                                                        "column": 63,
                                                        "line": 12
                                                      }
                                                    }
                                                  },
                                                  {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "U",
                                                      "optional": false,
                                                      "range": [
                                                        683,
                                                        684
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 67,
                                                          "line": 12
                                                        },
                                                        "start": {
                                                          "column": 66,
                                                          "line": 12
                                                        }
                                                      }
                                                    },
                                                    "range": [
                                                      683,
                                                      684
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 67,
                                                        "line": 12
                                                      },
                                                      "start": {
                                                        "column": 66,
                                                        "line": 12
                                                      }
                                                    }
                                                  }
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 68,
                                                    "line": 12
                                                  },
                                                  "start": {
                                                    "column": 62,
                                                    "line": 12
                                                  }
                                                }
                                              },
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Value",
                                                "optional": false,
                                                "range": [
                                                  674,
                                                  679
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 62,
                                                    "line": 12
                                                  },
                                                  "start": {
                                                    "column": 57,
                                                    "line": 12
                                                  }
                                                }
                                              },
                                              "range": [
                                                674,
                                                685
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 68,
                                                  "line": 12
                                                },
                                                "start": {
                                                  "column": 57,
                                                  "line": 12
                                                }
                                              }
                                            },
                                            "range": [
                                              653,
                                              685
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 68,
                                                "line": 12
                                              },
                                              "start": {
                                                "column": 36,
                                                "line": 12
                                              }
                                            }
                                          },
                                          {
                                            "type": "ArrowFunctionExpression",
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
                                                        "type": "CallExpression",
                                                        "arguments": [
                                                          {
                                                            "type": "ConditionalExpression",
                                                            "alternate": {
                                                              "type": "ObjectExpression",
                                                              "properties": [],
                                                              "range": [
                                                                781,
                                                                783
                                                              ],
                                                              "loc": {
                                                                "end": {
                                                                  "column": 74,
                                                                  "line": 13
                                                                },
                                                                "start": {
                                                                  "column": 72,
                                                                  "line": 13
                                                                }
                                                              }
                                                            },
                                                            "consequent": {
                                                              "type": "ArrayExpression",
                                                              "elements": [],
                                                              "range": [
                                                                776,
                                                                778
                                                              ],
                                                              "loc": {
                                                                "end": {
                                                                  "column": 69,
                                                                  "line": 13
                                                                },
                                                                "start": {
                                                                  "column": 67,
                                                                  "line": 13
                                                                }
                                                              }
                                                            },
                                                            "test": {
                                                              "type": "CallExpression",
                                                              "arguments": [
                                                                {
                                                                  "type": "Identifier",
                                                                  "decorators": [],
                                                                  "name": "u",
                                                                  "optional": false,
                                                                  "range": [
                                                                    771,
                                                                    772
                                                                  ],
                                                                  "loc": {
                                                                    "end": {
                                                                      "column": 63,
                                                                      "line": 13
                                                                    },
                                                                    "start": {
                                                                      "column": 62,
                                                                      "line": 13
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
                                                                  "name": "Array",
                                                                  "optional": false,
                                                                  "range": [
                                                                    757,
                                                                    762
                                                                  ],
                                                                  "loc": {
                                                                    "end": {
                                                                      "column": 53,
                                                                      "line": 13
                                                                    },
                                                                    "start": {
                                                                      "column": 48,
                                                                      "line": 13
                                                                    }
                                                                  }
                                                                },
                                                                "optional": false,
                                                                "property": {
                                                                  "type": "Identifier",
                                                                  "decorators": [],
                                                                  "name": "isArray",
                                                                  "optional": false,
                                                                  "range": [
                                                                    763,
                                                                    770
                                                                  ],
                                                                  "loc": {
                                                                    "end": {
                                                                      "column": 61,
                                                                      "line": 13
                                                                    },
                                                                    "start": {
                                                                      "column": 54,
                                                                      "line": 13
                                                                    }
                                                                  }
                                                                },
                                                                "range": [
                                                                  757,
                                                                  770
                                                                ],
                                                                "loc": {
                                                                  "end": {
                                                                    "column": 61,
                                                                    "line": 13
                                                                  },
                                                                  "start": {
                                                                    "column": 48,
                                                                    "line": 13
                                                                  }
                                                                }
                                                              },
                                                              "optional": false,
                                                              "range": [
                                                                757,
                                                                773
                                                              ],
                                                              "loc": {
                                                                "end": {
                                                                  "column": 64,
                                                                  "line": 13
                                                                },
                                                                "start": {
                                                                  "column": 48,
                                                                  "line": 13
                                                                }
                                                              }
                                                            },
                                                            "range": [
                                                              757,
                                                              783
                                                            ],
                                                            "loc": {
                                                              "end": {
                                                                "column": 74,
                                                                "line": 13
                                                              },
                                                              "start": {
                                                                "column": 48,
                                                                "line": 13
                                                              }
                                                            }
                                                          },
                                                          {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "u",
                                                            "optional": false,
                                                            "range": [
                                                              785,
                                                              786
                                                            ],
                                                            "loc": {
                                                              "end": {
                                                                "column": 77,
                                                                "line": 13
                                                              },
                                                              "start": {
                                                                "column": 76,
                                                                "line": 13
                                                              }
                                                            }
                                                          },
                                                          {
                                                            "type": "ObjectExpression",
                                                            "properties": [
                                                              {
                                                                "type": "Property",
                                                                "computed": true,
                                                                "key": {
                                                                  "type": "Identifier",
                                                                  "decorators": [],
                                                                  "name": "key",
                                                                  "optional": false,
                                                                  "range": [
                                                                    791,
                                                                    794
                                                                  ],
                                                                  "loc": {
                                                                    "end": {
                                                                      "column": 85,
                                                                      "line": 13
                                                                    },
                                                                    "start": {
                                                                      "column": 82,
                                                                      "line": 13
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
                                                                  "name": "v",
                                                                  "optional": false,
                                                                  "range": [
                                                                    797,
                                                                    798
                                                                  ],
                                                                  "loc": {
                                                                    "end": {
                                                                      "column": 89,
                                                                      "line": 13
                                                                    },
                                                                    "start": {
                                                                      "column": 88,
                                                                      "line": 13
                                                                    }
                                                                  }
                                                                },
                                                                "range": [
                                                                  790,
                                                                  798
                                                                ],
                                                                "loc": {
                                                                  "end": {
                                                                    "column": 89,
                                                                    "line": 13
                                                                  },
                                                                  "start": {
                                                                    "column": 81,
                                                                    "line": 13
                                                                  }
                                                                }
                                                              }
                                                            ],
                                                            "range": [
                                                              788,
                                                              800
                                                            ],
                                                            "loc": {
                                                              "end": {
                                                                "column": 91,
                                                                "line": 13
                                                              },
                                                              "start": {
                                                                "column": 79,
                                                                "line": 13
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
                                                            "name": "Object",
                                                            "optional": false,
                                                            "range": [
                                                              743,
                                                              749
                                                            ],
                                                            "loc": {
                                                              "end": {
                                                                "column": 40,
                                                                "line": 13
                                                              },
                                                              "start": {
                                                                "column": 34,
                                                                "line": 13
                                                              }
                                                            }
                                                          },
                                                          "optional": false,
                                                          "property": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "assign",
                                                            "optional": false,
                                                            "range": [
                                                              750,
                                                              756
                                                            ],
                                                            "loc": {
                                                              "end": {
                                                                "column": 47,
                                                                "line": 13
                                                              },
                                                              "start": {
                                                                "column": 41,
                                                                "line": 13
                                                              }
                                                            }
                                                          },
                                                          "range": [
                                                            743,
                                                            756
                                                          ],
                                                          "loc": {
                                                            "end": {
                                                              "column": 47,
                                                              "line": 13
                                                            },
                                                            "start": {
                                                              "column": 34,
                                                              "line": 13
                                                            }
                                                          }
                                                        },
                                                        "optional": false,
                                                        "range": [
                                                          743,
                                                          801
                                                        ],
                                                        "loc": {
                                                          "end": {
                                                            "column": 92,
                                                            "line": 13
                                                          },
                                                          "start": {
                                                            "column": 34,
                                                            "line": 13
                                                          }
                                                        }
                                                      }
                                                    ],
                                                    "callee": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "update",
                                                      "optional": false,
                                                      "range": [
                                                        736,
                                                        742
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 33,
                                                          "line": 13
                                                        },
                                                        "start": {
                                                          "column": 27,
                                                          "line": 13
                                                        }
                                                      }
                                                    },
                                                    "optional": false,
                                                    "range": [
                                                      736,
                                                      802
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 93,
                                                        "line": 13
                                                      },
                                                      "start": {
                                                        "column": 27,
                                                        "line": 13
                                                      }
                                                    }
                                                  },
                                                  "range": [
                                                    729,
                                                    803
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 94,
                                                      "line": 13
                                                    },
                                                    "start": {
                                                      "column": 20,
                                                      "line": 13
                                                    }
                                                  }
                                                }
                                              ],
                                              "range": [
                                                707,
                                                821
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 17,
                                                  "line": 14
                                                },
                                                "start": {
                                                  "column": 90,
                                                  "line": 12
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
                                                "name": "v",
                                                "optional": false,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "loc": {
                                                    "end": {
                                                      "column": 85,
                                                      "line": 12
                                                    },
                                                    "start": {
                                                      "column": 72,
                                                      "line": 12
                                                    }
                                                  },
                                                  "range": [
                                                    689,
                                                    702
                                                  ],
                                                  "typeAnnotation": {
                                                    "type": "TSTypeReference",
                                                    "typeArguments": {
                                                      "type": "TSTypeParameterInstantiation",
                                                      "range": [
                                                        696,
                                                        702
                                                      ],
                                                      "params": [
                                                        {
                                                          "type": "TSTypeReference",
                                                          "typeName": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "K",
                                                            "optional": false,
                                                            "range": [
                                                              697,
                                                              698
                                                            ],
                                                            "loc": {
                                                              "end": {
                                                                "column": 81,
                                                                "line": 12
                                                              },
                                                              "start": {
                                                                "column": 80,
                                                                "line": 12
                                                              }
                                                            }
                                                          },
                                                          "range": [
                                                            697,
                                                            698
                                                          ],
                                                          "loc": {
                                                            "end": {
                                                              "column": 81,
                                                              "line": 12
                                                            },
                                                            "start": {
                                                              "column": 80,
                                                              "line": 12
                                                            }
                                                          }
                                                        },
                                                        {
                                                          "type": "TSTypeReference",
                                                          "typeName": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "U",
                                                            "optional": false,
                                                            "range": [
                                                              700,
                                                              701
                                                            ],
                                                            "loc": {
                                                              "end": {
                                                                "column": 84,
                                                                "line": 12
                                                              },
                                                              "start": {
                                                                "column": 83,
                                                                "line": 12
                                                              }
                                                            }
                                                          },
                                                          "range": [
                                                            700,
                                                            701
                                                          ],
                                                          "loc": {
                                                            "end": {
                                                              "column": 84,
                                                              "line": 12
                                                            },
                                                            "start": {
                                                              "column": 83,
                                                              "line": 12
                                                            }
                                                          }
                                                        }
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 85,
                                                          "line": 12
                                                        },
                                                        "start": {
                                                          "column": 79,
                                                          "line": 12
                                                        }
                                                      }
                                                    },
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Value",
                                                      "optional": false,
                                                      "range": [
                                                        691,
                                                        696
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 79,
                                                          "line": 12
                                                        },
                                                        "start": {
                                                          "column": 74,
                                                          "line": 12
                                                        }
                                                      }
                                                    },
                                                    "range": [
                                                      691,
                                                      702
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 85,
                                                        "line": 12
                                                      },
                                                      "start": {
                                                        "column": 74,
                                                        "line": 12
                                                      }
                                                    }
                                                  }
                                                },
                                                "range": [
                                                  688,
                                                  702
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 85,
                                                    "line": 12
                                                  },
                                                  "start": {
                                                    "column": 71,
                                                    "line": 12
                                                  }
                                                }
                                              }
                                            ],
                                            "range": [
                                              687,
                                              821
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 17,
                                                "line": 14
                                              },
                                              "start": {
                                                "column": 70,
                                                "line": 12
                                              }
                                            }
                                          }
                                        ],
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "reduce",
                                          "optional": false,
                                          "range": [
                                            633,
                                            639
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 22,
                                              "line": 12
                                            },
                                            "start": {
                                              "column": 16,
                                              "line": 12
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "range": [
                                            639,
                                            652
                                          ],
                                          "params": [
                                            {
                                              "type": "TSTypeReference",
                                              "typeArguments": {
                                                "type": "TSTypeParameterInstantiation",
                                                "range": [
                                                  645,
                                                  651
                                                ],
                                                "params": [
                                                  {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "K",
                                                      "optional": false,
                                                      "range": [
                                                        646,
                                                        647
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 30,
                                                          "line": 12
                                                        },
                                                        "start": {
                                                          "column": 29,
                                                          "line": 12
                                                        }
                                                      }
                                                    },
                                                    "range": [
                                                      646,
                                                      647
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 30,
                                                        "line": 12
                                                      },
                                                      "start": {
                                                        "column": 29,
                                                        "line": 12
                                                      }
                                                    }
                                                  },
                                                  {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "U",
                                                      "optional": false,
                                                      "range": [
                                                        649,
                                                        650
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 33,
                                                          "line": 12
                                                        },
                                                        "start": {
                                                          "column": 32,
                                                          "line": 12
                                                        }
                                                      }
                                                    },
                                                    "range": [
                                                      649,
                                                      650
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 33,
                                                        "line": 12
                                                      },
                                                      "start": {
                                                        "column": 32,
                                                        "line": 12
                                                      }
                                                    }
                                                  }
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 34,
                                                    "line": 12
                                                  },
                                                  "start": {
                                                    "column": 28,
                                                    "line": 12
                                                  }
                                                }
                                              },
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Value",
                                                "optional": false,
                                                "range": [
                                                  640,
                                                  645
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 28,
                                                    "line": 12
                                                  },
                                                  "start": {
                                                    "column": 23,
                                                    "line": 12
                                                  }
                                                }
                                              },
                                              "range": [
                                                640,
                                                651
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 34,
                                                  "line": 12
                                                },
                                                "start": {
                                                  "column": 23,
                                                  "line": 12
                                                }
                                              }
                                            }
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 35,
                                              "line": 12
                                            },
                                            "start": {
                                              "column": 22,
                                              "line": 12
                                            }
                                          }
                                        },
                                        "range": [
                                          633,
                                          822
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 18,
                                            "line": 14
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 12
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
                                          "name": "key",
                                          "optional": false,
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "loc": {
                                              "end": {
                                                "column": 37,
                                                "line": 11
                                              },
                                              "start": {
                                                "column": 34,
                                                "line": 11
                                              }
                                            },
                                            "range": [
                                              609,
                                              612
                                            ],
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "K",
                                                "optional": false,
                                                "range": [
                                                  611,
                                                  612
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 37,
                                                    "line": 11
                                                  },
                                                  "start": {
                                                    "column": 36,
                                                    "line": 11
                                                  }
                                                }
                                              },
                                              "range": [
                                                611,
                                                612
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 37,
                                                  "line": 11
                                                },
                                                "start": {
                                                  "column": 36,
                                                  "line": 11
                                                }
                                              }
                                            }
                                          },
                                          "range": [
                                            606,
                                            612
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 37,
                                              "line": 11
                                            },
                                            "start": {
                                              "column": 31,
                                              "line": 11
                                            }
                                          }
                                        }
                                      ],
                                      "typeParameters": {
                                        "type": "TSTypeParameterDeclaration",
                                        "loc": {
                                          "end": {
                                            "column": 30,
                                            "line": 11
                                          },
                                          "start": {
                                            "column": 12,
                                            "line": 11
                                          }
                                        },
                                        "range": [
                                          587,
                                          605
                                        ],
                                        "params": [
                                          {
                                            "type": "TSTypeParameter",
                                            "const": false,
                                            "constraint": {
                                              "type": "TSTypeReference",
                                              "typeArguments": {
                                                "type": "TSTypeParameterInstantiation",
                                                "range": [
                                                  601,
                                                  604
                                                ],
                                                "params": [
                                                  {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "U",
                                                      "optional": false,
                                                      "range": [
                                                        602,
                                                        603
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 28,
                                                          "line": 11
                                                        },
                                                        "start": {
                                                          "column": 27,
                                                          "line": 11
                                                        }
                                                      }
                                                    },
                                                    "range": [
                                                      602,
                                                      603
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 28,
                                                        "line": 11
                                                      },
                                                      "start": {
                                                        "column": 27,
                                                        "line": 11
                                                      }
                                                    }
                                                  }
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 29,
                                                    "line": 11
                                                  },
                                                  "start": {
                                                    "column": 26,
                                                    "line": 11
                                                  }
                                                }
                                              },
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Key",
                                                "optional": false,
                                                "range": [
                                                  598,
                                                  601
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 26,
                                                    "line": 11
                                                  },
                                                  "start": {
                                                    "column": 23,
                                                    "line": 11
                                                  }
                                                }
                                              },
                                              "range": [
                                                598,
                                                604
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 29,
                                                  "line": 11
                                                },
                                                "start": {
                                                  "column": 23,
                                                  "line": 11
                                                }
                                              }
                                            },
                                            "in": false,
                                            "name": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "K",
                                              "optional": false,
                                              "range": [
                                                588,
                                                589
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 14,
                                                  "line": 11
                                                },
                                                "start": {
                                                  "column": 13,
                                                  "line": 11
                                                }
                                              }
                                            },
                                            "out": false,
                                            "range": [
                                              588,
                                              604
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 29,
                                                "line": 11
                                              },
                                              "start": {
                                                "column": 13,
                                                "line": 11
                                              }
                                            }
                                          }
                                        ]
                                      },
                                      "range": [
                                        587,
                                        822
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 18,
                                          "line": 14
                                        },
                                        "start": {
                                          "column": 12,
                                          "line": 11
                                        }
                                      }
                                    },
                                    {
                                      "type": "ObjectExpression",
                                      "properties": [
                                        {
                                          "type": "Property",
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "map",
                                            "optional": false,
                                            "range": [
                                              838,
                                              841
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 17,
                                                "line": 15
                                              },
                                              "start": {
                                                "column": 14,
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
                                              "arguments": [
                                                {
                                                  "type": "CallExpression",
                                                  "arguments": [
                                                    {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "u",
                                                      "optional": false,
                                                      "range": [
                                                        881,
                                                        882
                                                      ],
                                                      "loc": {
                                                        "end": {
                                                          "column": 58,
                                                          "line": 15
                                                        },
                                                        "start": {
                                                          "column": 57,
                                                          "line": 15
                                                        }
                                                      }
                                                    }
                                                  ],
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "updater",
                                                    "optional": false,
                                                    "range": [
                                                      873,
                                                      880
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 56,
                                                        "line": 15
                                                      },
                                                      "start": {
                                                        "column": 49,
                                                        "line": 15
                                                      }
                                                    }
                                                  },
                                                  "optional": false,
                                                  "range": [
                                                    873,
                                                    883
                                                  ],
                                                  "loc": {
                                                    "end": {
                                                      "column": 59,
                                                      "line": 15
                                                    },
                                                    "start": {
                                                      "column": 49,
                                                      "line": 15
                                                    }
                                                  }
                                                }
                                              ],
                                              "callee": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "set",
                                                "optional": false,
                                                "range": [
                                                  869,
                                                  872
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 48,
                                                    "line": 15
                                                  },
                                                  "start": {
                                                    "column": 45,
                                                    "line": 15
                                                  }
                                                }
                                              },
                                              "optional": false,
                                              "range": [
                                                869,
                                                884
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 60,
                                                  "line": 15
                                                },
                                                "start": {
                                                  "column": 45,
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
                                                "name": "updater",
                                                "optional": false,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "loc": {
                                                    "end": {
                                                      "column": 40,
                                                      "line": 15
                                                    },
                                                    "start": {
                                                      "column": 27,
                                                      "line": 15
                                                    }
                                                  },
                                                  "range": [
                                                    851,
                                                    864
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
                                                              "column": 34,
                                                              "line": 15
                                                            },
                                                            "start": {
                                                              "column": 31,
                                                              "line": 15
                                                            }
                                                          },
                                                          "range": [
                                                            855,
                                                            858
                                                          ],
                                                          "typeAnnotation": {
                                                            "type": "TSTypeReference",
                                                            "typeName": {
                                                              "type": "Identifier",
                                                              "decorators": [],
                                                              "name": "U",
                                                              "optional": false,
                                                              "range": [
                                                                857,
                                                                858
                                                              ],
                                                              "loc": {
                                                                "end": {
                                                                  "column": 34,
                                                                  "line": 15
                                                                },
                                                                "start": {
                                                                  "column": 33,
                                                                  "line": 15
                                                                }
                                                              }
                                                            },
                                                            "range": [
                                                              857,
                                                              858
                                                            ],
                                                            "loc": {
                                                              "end": {
                                                                "column": 34,
                                                                "line": 15
                                                              },
                                                              "start": {
                                                                "column": 33,
                                                                "line": 15
                                                              }
                                                            }
                                                          }
                                                        },
                                                        "range": [
                                                          854,
                                                          858
                                                        ],
                                                        "loc": {
                                                          "end": {
                                                            "column": 34,
                                                            "line": 15
                                                          },
                                                          "start": {
                                                            "column": 30,
                                                            "line": 15
                                                          }
                                                        }
                                                      }
                                                    ],
                                                    "returnType": {
                                                      "type": "TSTypeAnnotation",
                                                      "loc": {
                                                        "end": {
                                                          "column": 40,
                                                          "line": 15
                                                        },
                                                        "start": {
                                                          "column": 36,
                                                          "line": 15
                                                        }
                                                      },
                                                      "range": [
                                                        860,
                                                        864
                                                      ],
                                                      "typeAnnotation": {
                                                        "type": "TSTypeReference",
                                                        "typeName": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "U",
                                                          "optional": false,
                                                          "range": [
                                                            863,
                                                            864
                                                          ],
                                                          "loc": {
                                                            "end": {
                                                              "column": 40,
                                                              "line": 15
                                                            },
                                                            "start": {
                                                              "column": 39,
                                                              "line": 15
                                                            }
                                                          }
                                                        },
                                                        "range": [
                                                          863,
                                                          864
                                                        ],
                                                        "loc": {
                                                          "end": {
                                                            "column": 40,
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
                                                      853,
                                                      864
                                                    ],
                                                    "loc": {
                                                      "end": {
                                                        "column": 40,
                                                        "line": 15
                                                      },
                                                      "start": {
                                                        "column": 29,
                                                        "line": 15
                                                      }
                                                    }
                                                  }
                                                },
                                                "range": [
                                                  844,
                                                  864
                                                ],
                                                "loc": {
                                                  "end": {
                                                    "column": 40,
                                                    "line": 15
                                                  },
                                                  "start": {
                                                    "column": 20,
                                                    "line": 15
                                                  }
                                                }
                                              }
                                            ],
                                            "range": [
                                              843,
                                              884
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 60,
                                                "line": 15
                                              },
                                              "start": {
                                                "column": 19,
                                                "line": 15
                                              }
                                            }
                                          },
                                          "range": [
                                            838,
                                            884
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 60,
                                              "line": 15
                                            },
                                            "start": {
                                              "column": 14,
                                              "line": 15
                                            }
                                          }
                                        },
                                        {
                                          "type": "Property",
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "set",
                                            "optional": false,
                                            "range": [
                                              886,
                                              889
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 65,
                                                "line": 15
                                              },
                                              "start": {
                                                "column": 62,
                                                "line": 15
                                              }
                                            }
                                          },
                                          "kind": "init",
                                          "method": false,
                                          "optional": false,
                                          "shorthand": true,
                                          "value": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "set",
                                            "optional": false,
                                            "range": [
                                              886,
                                              889
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 65,
                                                "line": 15
                                              },
                                              "start": {
                                                "column": 62,
                                                "line": 15
                                              }
                                            }
                                          },
                                          "range": [
                                            886,
                                            889
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 65,
                                              "line": 15
                                            },
                                            "start": {
                                              "column": 62,
                                              "line": 15
                                            }
                                          }
                                        }
                                      ],
                                      "range": [
                                        836,
                                        891
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 67,
                                          "line": 15
                                        },
                                        "start": {
                                          "column": 12,
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
                                      "name": "Object",
                                      "optional": false,
                                      "range": [
                                        560,
                                        566
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 21,
                                          "line": 10
                                        },
                                        "start": {
                                          "column": 15,
                                          "line": 10
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "assign",
                                      "optional": false,
                                      "range": [
                                        567,
                                        573
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 28,
                                          "line": 10
                                        },
                                        "start": {
                                          "column": 22,
                                          "line": 10
                                        }
                                      }
                                    },
                                    "range": [
                                      560,
                                      573
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 10
                                      },
                                      "start": {
                                        "column": 15,
                                        "line": 10
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "range": [
                                    560,
                                    892
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 68,
                                      "line": 15
                                    },
                                    "start": {
                                      "column": 15,
                                      "line": 10
                                    }
                                  }
                                },
                                "range": [
                                  553,
                                  893
                                ],
                                "loc": {
                                  "end": {
                                    "column": 69,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 10
                                  }
                                }
                              }
                            ],
                            "range": [
                              471,
                              899
                            ],
                            "loc": {
                              "end": {
                                "column": 5,
                                "line": 16
                              },
                              "start": {
                                "column": 53,
                                "line": 8
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
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 27,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 8
                                  }
                                },
                                "range": [
                                  442,
                                  445
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "range": [
                                      444,
                                      445
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 27,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 8
                                      }
                                    }
                                  },
                                  "range": [
                                    444,
                                    445
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 27,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 8
                                    }
                                  }
                                }
                              },
                              "range": [
                                441,
                                445
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 8
                                },
                                "start": {
                                  "column": 23,
                                  "line": 8
                                }
                              }
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "update",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 48,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 8
                                  }
                                },
                                "range": [
                                  453,
                                  466
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
                                            "column": 42,
                                            "line": 8
                                          },
                                          "start": {
                                            "column": 39,
                                            "line": 8
                                          }
                                        },
                                        "range": [
                                          457,
                                          460
                                        ],
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "U",
                                            "optional": false,
                                            "range": [
                                              459,
                                              460
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 42,
                                                "line": 8
                                              },
                                              "start": {
                                                "column": 41,
                                                "line": 8
                                              }
                                            }
                                          },
                                          "range": [
                                            459,
                                            460
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 42,
                                              "line": 8
                                            },
                                            "start": {
                                              "column": 41,
                                              "line": 8
                                            }
                                          }
                                        }
                                      },
                                      "range": [
                                        456,
                                        460
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 42,
                                          "line": 8
                                        },
                                        "start": {
                                          "column": 38,
                                          "line": 8
                                        }
                                      }
                                    }
                                  ],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "loc": {
                                      "end": {
                                        "column": 48,
                                        "line": 8
                                      },
                                      "start": {
                                        "column": 44,
                                        "line": 8
                                      }
                                    },
                                    "range": [
                                      462,
                                      466
                                    ],
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "range": [
                                          465,
                                          466
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 48,
                                            "line": 8
                                          },
                                          "start": {
                                            "column": 47,
                                            "line": 8
                                          }
                                        }
                                      },
                                      "range": [
                                        465,
                                        466
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 48,
                                          "line": 8
                                        },
                                        "start": {
                                          "column": 47,
                                          "line": 8
                                        }
                                      }
                                    }
                                  },
                                  "range": [
                                    455,
                                    466
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 48,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 37,
                                      "line": 8
                                    }
                                  }
                                }
                              },
                              "range": [
                                447,
                                466
                              ],
                              "loc": {
                                "end": {
                                  "column": 48,
                                  "line": 8
                                },
                                "start": {
                                  "column": 29,
                                  "line": 8
                                }
                              }
                            }
                          ],
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 8
                              },
                              "start": {
                                "column": 19,
                                "line": 8
                              }
                            },
                            "range": [
                              437,
                              440
                            ],
                            "params": [
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
                                    438,
                                    439
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 21,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 8
                                    }
                                  }
                                },
                                "out": false,
                                "range": [
                                  438,
                                  439
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 8
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 8
                                  }
                                }
                              }
                            ]
                          },
                          "range": [
                            437,
                            899
                          ],
                          "loc": {
                            "end": {
                              "column": 5,
                              "line": 16
                            },
                            "start": {
                              "column": 19,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          428,
                          899
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 16
                          },
                          "start": {
                            "column": 10,
                            "line": 8
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      422,
                      900
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 16
                      },
                      "start": {
                        "column": 4,
                        "line": 8
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
                          "name": "t",
                          "optional": false,
                          "range": [
                            922,
                            923
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 17
                            },
                            "start": {
                              "column": 21,
                              "line": 17
                            }
                          }
                        },
                        {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "t",
                            "optional": false,
                            "range": [
                              935,
                              936
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 17
                              },
                              "start": {
                                "column": 34,
                                "line": 17
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
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 26,
                                    "line": 17
                                  }
                                },
                                "range": [
                                  927,
                                  930
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "range": [
                                      929,
                                      930
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 17
                                      },
                                      "start": {
                                        "column": 28,
                                        "line": 17
                                      }
                                    }
                                  },
                                  "range": [
                                    929,
                                    930
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 17
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 17
                                    }
                                  }
                                }
                              },
                              "range": [
                                926,
                                930
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 17
                                },
                                "start": {
                                  "column": 25,
                                  "line": 17
                                }
                              }
                            }
                          ],
                          "range": [
                            925,
                            936
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 17
                            },
                            "start": {
                              "column": 24,
                              "line": 17
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "reduce",
                        "optional": false,
                        "range": [
                          912,
                          918
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 17
                          },
                          "start": {
                            "column": 11,
                            "line": 17
                          }
                        }
                      },
                      "optional": false,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          918,
                          921
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
                                919,
                                920
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 17
                                },
                                "start": {
                                  "column": 18,
                                  "line": 17
                                }
                              }
                            },
                            "range": [
                              919,
                              920
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 17
                              },
                              "start": {
                                "column": 18,
                                "line": 17
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 17
                          },
                          "start": {
                            "column": 17,
                            "line": 17
                          }
                        }
                      },
                      "range": [
                        912,
                        937
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 17
                        },
                        "start": {
                          "column": 11,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      905,
                      938
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 17
                      },
                      "start": {
                        "column": 4,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  416,
                  940
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 18
                  },
                  "start": {
                    "column": 44,
                    "line": 7
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 7
                      },
                      "start": {
                        "column": 36,
                        "line": 7
                      }
                    },
                    "range": [
                      408,
                      411
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          410,
                          411
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 7
                          },
                          "start": {
                            "column": 38,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        410,
                        411
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 7
                        },
                        "start": {
                          "column": 38,
                          "line": 7
                        }
                      }
                    }
                  },
                  "range": [
                    407,
                    411
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 7
                    },
                    "start": {
                      "column": 35,
                      "line": 7
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 7
                  },
                  "start": {
                    "column": 31,
                    "line": 7
                  }
                },
                "range": [
                  403,
                  406
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
                        404,
                        405
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 7
                        },
                        "start": {
                          "column": 32,
                          "line": 7
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      404,
                      405
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 7
                      },
                      "start": {
                        "column": 32,
                        "line": 7
                      }
                    }
                  }
                ]
              },
              "range": [
                403,
                940
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 18
                },
                "start": {
                  "column": 31,
                  "line": 7
                }
              }
            },
            "range": [
              385,
              940
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 18
              },
              "start": {
                "column": 13,
                "line": 7
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          379,
          941
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 18
          },
          "start": {
            "column": 7,
            "line": 7
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 2,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        1013,
        1222
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "testRecFun",
              "optional": false,
              "range": [
                1026,
                1036
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 22
                },
                "start": {
                  "column": 13,
                  "line": 22
                }
              }
            },
            "init": {
              "type": "ArrowFunctionExpression",
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
                            "name": "result",
                            "optional": false,
                            "range": [
                              1095,
                              1101
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 24
                              },
                              "start": {
                                "column": 8,
                                "line": 24
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
                            "name": "parent",
                            "optional": false,
                            "range": [
                              1103,
                              1109
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 24
                              },
                              "start": {
                                "column": 16,
                                "line": 24
                              }
                            }
                          },
                          "range": [
                            1095,
                            1109
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 24
                            },
                            "start": {
                              "column": 8,
                              "line": 24
                            }
                          }
                        },
                        {
                          "type": "Property",
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "deeper",
                            "optional": false,
                            "range": [
                              1119,
                              1125
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 25
                              },
                              "start": {
                                "column": 8,
                                "line": 25
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
                                  "type": "ObjectExpression",
                                  "properties": [
                                    {
                                      "type": "SpreadElement",
                                      "argument": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "parent",
                                        "optional": false,
                                        "range": [
                                          1194,
                                          1200
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 41,
                                            "line": 26
                                          },
                                          "start": {
                                            "column": 35,
                                            "line": 26
                                          }
                                        }
                                      },
                                      "range": [
                                        1191,
                                        1200
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 41,
                                          "line": 26
                                        },
                                        "start": {
                                          "column": 32,
                                          "line": 26
                                        }
                                      }
                                    },
                                    {
                                      "type": "SpreadElement",
                                      "argument": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "child",
                                        "optional": false,
                                        "range": [
                                          1205,
                                          1210
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 51,
                                            "line": 26
                                          },
                                          "start": {
                                            "column": 46,
                                            "line": 26
                                          }
                                        }
                                      },
                                      "range": [
                                        1202,
                                        1210
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 51,
                                          "line": 26
                                        },
                                        "start": {
                                          "column": 43,
                                          "line": 26
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    1189,
                                    1212
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 53,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 26
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "testRecFun",
                                "optional": false,
                                "range": [
                                  1171,
                                  1181
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 26
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 26
                                  }
                                }
                              },
                              "optional": false,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  1181,
                                  1188
                                ],
                                "params": [
                                  {
                                    "type": "TSIntersectionType",
                                    "types": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false,
                                          "range": [
                                            1182,
                                            1183
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 24,
                                              "line": 26
                                            },
                                            "start": {
                                              "column": 23,
                                              "line": 26
                                            }
                                          }
                                        },
                                        "range": [
                                          1182,
                                          1183
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 24,
                                            "line": 26
                                          },
                                          "start": {
                                            "column": 23,
                                            "line": 26
                                          }
                                        }
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "U",
                                          "optional": false,
                                          "range": [
                                            1186,
                                            1187
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 28,
                                              "line": 26
                                            },
                                            "start": {
                                              "column": 27,
                                              "line": 26
                                            }
                                          }
                                        },
                                        "range": [
                                          1186,
                                          1187
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 28,
                                            "line": 26
                                          },
                                          "start": {
                                            "column": 27,
                                            "line": 26
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      1182,
                                      1187
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 26
                                      },
                                      "start": {
                                        "column": 23,
                                        "line": 26
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 29,
                                    "line": 26
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 26
                                  }
                                }
                              },
                              "range": [
                                1171,
                                1213
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 26
                                },
                                "start": {
                                  "column": 12,
                                  "line": 26
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
                                "name": "child",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "loc": {
                                    "end": {
                                      "column": 43,
                                      "line": 25
                                    },
                                    "start": {
                                      "column": 40,
                                      "line": 25
                                    }
                                  },
                                  "range": [
                                    1151,
                                    1154
                                  ],
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "range": [
                                        1153,
                                        1154
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 43,
                                          "line": 25
                                        },
                                        "start": {
                                          "column": 42,
                                          "line": 25
                                        }
                                      }
                                    },
                                    "range": [
                                      1153,
                                      1154
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 43,
                                        "line": 25
                                      },
                                      "start": {
                                        "column": 42,
                                        "line": 25
                                      }
                                    }
                                  }
                                },
                                "range": [
                                  1146,
                                  1154
                                ],
                                "loc": {
                                  "end": {
                                    "column": 43,
                                    "line": 25
                                  },
                                  "start": {
                                    "column": 35,
                                    "line": 25
                                  }
                                }
                              }
                            ],
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 25
                                },
                                "start": {
                                  "column": 16,
                                  "line": 25
                                }
                              },
                              "range": [
                                1127,
                                1145
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
                                      "name": "Object",
                                      "optional": false,
                                      "range": [
                                        1138,
                                        1144
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 33,
                                          "line": 25
                                        },
                                        "start": {
                                          "column": 27,
                                          "line": 25
                                        }
                                      }
                                    },
                                    "range": [
                                      1138,
                                      1144
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 33,
                                        "line": 25
                                      },
                                      "start": {
                                        "column": 27,
                                        "line": 25
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
                                      1128,
                                      1129
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 18,
                                        "line": 25
                                      },
                                      "start": {
                                        "column": 17,
                                        "line": 25
                                      }
                                    }
                                  },
                                  "out": false,
                                  "range": [
                                    1128,
                                    1144
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 25
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 25
                                    }
                                  }
                                }
                              ]
                            },
                            "range": [
                              1127,
                              1213
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 26
                              },
                              "start": {
                                "column": 16,
                                "line": 25
                              }
                            }
                          },
                          "range": [
                            1119,
                            1213
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 26
                            },
                            "start": {
                              "column": 8,
                              "line": 25
                            }
                          }
                        }
                      ],
                      "range": [
                        1085,
                        1219
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 27
                        },
                        "start": {
                          "column": 11,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      1078,
                      1220
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 27
                      },
                      "start": {
                        "column": 4,
                        "line": 23
                      }
                    }
                  }
                ],
                "range": [
                  1072,
                  1222
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 28
                  },
                  "start": {
                    "column": 59,
                    "line": 22
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
                  "name": "parent",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 22
                      },
                      "start": {
                        "column": 51,
                        "line": 22
                      }
                    },
                    "range": [
                      1064,
                      1067
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          1066,
                          1067
                        ],
                        "loc": {
                          "end": {
                            "column": 54,
                            "line": 22
                          },
                          "start": {
                            "column": 53,
                            "line": 22
                          }
                        }
                      },
                      "range": [
                        1066,
                        1067
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 22
                        },
                        "start": {
                          "column": 53,
                          "line": 22
                        }
                      }
                    }
                  },
                  "range": [
                    1058,
                    1067
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 22
                    },
                    "start": {
                      "column": 45,
                      "line": 22
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 22
                  },
                  "start": {
                    "column": 26,
                    "line": 22
                  }
                },
                "range": [
                  1039,
                  1057
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
                        "name": "Object",
                        "optional": false,
                        "range": [
                          1050,
                          1056
                        ],
                        "loc": {
                          "end": {
                            "column": 43,
                            "line": 22
                          },
                          "start": {
                            "column": 37,
                            "line": 22
                          }
                        }
                      },
                      "range": [
                        1050,
                        1056
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 22
                        },
                        "start": {
                          "column": 37,
                          "line": 22
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
                        1040,
                        1041
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 22
                        },
                        "start": {
                          "column": 27,
                          "line": 22
                        }
                      }
                    },
                    "out": false,
                    "range": [
                      1040,
                      1056
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 22
                      },
                      "start": {
                        "column": 27,
                        "line": 22
                      }
                    }
                  }
                ]
              },
              "range": [
                1039,
                1222
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 28
                },
                "start": {
                  "column": 26,
                  "line": 22
                }
              }
            },
            "range": [
              1026,
              1222
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 28
              },
              "start": {
                "column": 13,
                "line": 22
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          1020,
          1222
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 28
          },
          "start": {
            "column": 7,
            "line": 22
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 28
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
            "name": "p1",
            "optional": false,
            "range": [
              1229,
              1231
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
                      "name": "one",
                      "optional": false,
                      "range": [
                        1247,
                        1250
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 31
                        },
                        "start": {
                          "column": 22,
                          "line": 31
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "'1'",
                      "value": "1",
                      "range": [
                        1252,
                        1255
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 31
                        },
                        "start": {
                          "column": 27,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      1247,
                      1255
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 31
                      },
                      "start": {
                        "column": 22,
                        "line": 31
                      }
                    }
                  }
                ],
                "range": [
                  1245,
                  1257
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 31
                  },
                  "start": {
                    "column": 20,
                    "line": 31
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "testRecFun",
              "optional": false,
              "range": [
                1234,
                1244
              ],
              "loc": {
                "end": {
                  "column": 19,
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
              1234,
              1258
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 31
              },
              "start": {
                "column": 9,
                "line": 31
              }
            }
          },
          "range": [
            1229,
            1258
          ],
          "loc": {
            "end": {
              "column": 33,
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
      "kind": "let",
      "range": [
        1225,
        1258
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "range": [
                1264,
                1266
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 32
                },
                "start": {
                  "column": 5,
                  "line": 32
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "range": [
                1267,
                1273
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 32
                },
                "start": {
                  "column": 8,
                  "line": 32
                }
              }
            },
            "range": [
              1264,
              1273
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 32
              },
              "start": {
                "column": 5,
                "line": 32
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "one",
            "optional": false,
            "range": [
              1274,
              1277
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 32
              },
              "start": {
                "column": 15,
                "line": 32
              }
            }
          },
          "range": [
            1264,
            1277
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 32
            },
            "start": {
              "column": 5,
              "line": 32
            }
          }
        },
        "operator": "void",
        "prefix": true,
        "range": [
          1259,
          1277
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 32
          },
          "start": {
            "column": 0,
            "line": 32
          }
        }
      },
      "range": [
        1259,
        1278
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 32
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
            "name": "p2",
            "optional": false,
            "range": [
              1283,
              1285
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
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
                      "name": "two",
                      "optional": false,
                      "range": [
                        1300,
                        1303
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 33
                        },
                        "start": {
                          "column": 21,
                          "line": 33
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "'2'",
                      "value": "2",
                      "range": [
                        1305,
                        1308
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 33
                        },
                        "start": {
                          "column": 26,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      1300,
                      1308
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 33
                      },
                      "start": {
                        "column": 21,
                        "line": 33
                      }
                    }
                  }
                ],
                "range": [
                  1298,
                  1310
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 33
                  },
                  "start": {
                    "column": 19,
                    "line": 33
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
                  1288,
                  1290
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 33
                  },
                  "start": {
                    "column": 9,
                    "line": 33
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "deeper",
                "optional": false,
                "range": [
                  1291,
                  1297
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 33
                  },
                  "start": {
                    "column": 12,
                    "line": 33
                  }
                }
              },
              "range": [
                1288,
                1297
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 33
                },
                "start": {
                  "column": 9,
                  "line": 33
                }
              }
            },
            "optional": false,
            "range": [
              1288,
              1311
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 33
              },
              "start": {
                "column": 9,
                "line": 33
              }
            }
          },
          "range": [
            1283,
            1311
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 33
            },
            "start": {
              "column": 4,
              "line": 33
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        1279,
        1311
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "range": [
                1317,
                1319
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 34
                },
                "start": {
                  "column": 5,
                  "line": 34
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "range": [
                1320,
                1326
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 34
                },
                "start": {
                  "column": 8,
                  "line": 34
                }
              }
            },
            "range": [
              1317,
              1326
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 34
              },
              "start": {
                "column": 5,
                "line": 34
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "one",
            "optional": false,
            "range": [
              1327,
              1330
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 34
              },
              "start": {
                "column": 15,
                "line": 34
              }
            }
          },
          "range": [
            1317,
            1330
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 34
            },
            "start": {
              "column": 5,
              "line": 34
            }
          }
        },
        "operator": "void",
        "prefix": true,
        "range": [
          1312,
          1330
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 34
          },
          "start": {
            "column": 0,
            "line": 34
          }
        }
      },
      "range": [
        1312,
        1331
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "range": [
                1337,
                1339
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 35
                },
                "start": {
                  "column": 5,
                  "line": 35
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "range": [
                1340,
                1346
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 35
                },
                "start": {
                  "column": 8,
                  "line": 35
                }
              }
            },
            "range": [
              1337,
              1346
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 35
              },
              "start": {
                "column": 5,
                "line": 35
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "two",
            "optional": false,
            "range": [
              1347,
              1350
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 35
              },
              "start": {
                "column": 15,
                "line": 35
              }
            }
          },
          "range": [
            1337,
            1350
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 35
            },
            "start": {
              "column": 5,
              "line": 35
            }
          }
        },
        "operator": "void",
        "prefix": true,
        "range": [
          1332,
          1350
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 35
          },
          "start": {
            "column": 0,
            "line": 35
          }
        }
      },
      "range": [
        1332,
        1351
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
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
            "name": "p3",
            "optional": false,
            "range": [
              1356,
              1358
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
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
                      "name": "three",
                      "optional": false,
                      "range": [
                        1373,
                        1378
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 36
                        },
                        "start": {
                          "column": 21,
                          "line": 36
                        }
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "raw": "'3'",
                      "value": "3",
                      "range": [
                        1380,
                        1383
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 36
                        },
                        "start": {
                          "column": 28,
                          "line": 36
                        }
                      }
                    },
                    "range": [
                      1373,
                      1383
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 36
                      },
                      "start": {
                        "column": 21,
                        "line": 36
                      }
                    }
                  }
                ],
                "range": [
                  1371,
                  1385
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 36
                  },
                  "start": {
                    "column": 19,
                    "line": 36
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
                "name": "p2",
                "optional": false,
                "range": [
                  1361,
                  1363
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 36
                  },
                  "start": {
                    "column": 9,
                    "line": 36
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "deeper",
                "optional": false,
                "range": [
                  1364,
                  1370
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 36
                  },
                  "start": {
                    "column": 12,
                    "line": 36
                  }
                }
              },
              "range": [
                1361,
                1370
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 36
                },
                "start": {
                  "column": 9,
                  "line": 36
                }
              }
            },
            "optional": false,
            "range": [
              1361,
              1386
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 36
              },
              "start": {
                "column": 9,
                "line": 36
              }
            }
          },
          "range": [
            1356,
            1386
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 36
            },
            "start": {
              "column": 4,
              "line": 36
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        1352,
        1386
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 36
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "p3",
              "optional": false,
              "range": [
                1392,
                1394
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 37
                },
                "start": {
                  "column": 5,
                  "line": 37
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "range": [
                1395,
                1401
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 37
                },
                "start": {
                  "column": 8,
                  "line": 37
                }
              }
            },
            "range": [
              1392,
              1401
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 37
              },
              "start": {
                "column": 5,
                "line": 37
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "one",
            "optional": false,
            "range": [
              1402,
              1405
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 37
              },
              "start": {
                "column": 15,
                "line": 37
              }
            }
          },
          "range": [
            1392,
            1405
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 37
            },
            "start": {
              "column": 5,
              "line": 37
            }
          }
        },
        "operator": "void",
        "prefix": true,
        "range": [
          1387,
          1405
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 37
          },
          "start": {
            "column": 0,
            "line": 37
          }
        }
      },
      "range": [
        1387,
        1406
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "p3",
              "optional": false,
              "range": [
                1412,
                1414
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 38
                },
                "start": {
                  "column": 5,
                  "line": 38
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "range": [
                1415,
                1421
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 38
                },
                "start": {
                  "column": 8,
                  "line": 38
                }
              }
            },
            "range": [
              1412,
              1421
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 38
              },
              "start": {
                "column": 5,
                "line": 38
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "two",
            "optional": false,
            "range": [
              1422,
              1425
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 38
              },
              "start": {
                "column": 15,
                "line": 38
              }
            }
          },
          "range": [
            1412,
            1425
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 38
            },
            "start": {
              "column": 5,
              "line": 38
            }
          }
        },
        "operator": "void",
        "prefix": true,
        "range": [
          1407,
          1425
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 38
          },
          "start": {
            "column": 0,
            "line": 38
          }
        }
      },
      "range": [
        1407,
        1426
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "p3",
              "optional": false,
              "range": [
                1432,
                1434
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 39
                },
                "start": {
                  "column": 5,
                  "line": 39
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "range": [
                1435,
                1441
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 39
                },
                "start": {
                  "column": 8,
                  "line": 39
                }
              }
            },
            "range": [
              1432,
              1441
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 39
              },
              "start": {
                "column": 5,
                "line": 39
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "three",
            "optional": false,
            "range": [
              1442,
              1447
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 39
              },
              "start": {
                "column": 15,
                "line": 39
              }
            }
          },
          "range": [
            1432,
            1447
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 39
            },
            "start": {
              "column": 5,
              "line": 39
            }
          }
        },
        "operator": "void",
        "prefix": true,
        "range": [
          1427,
          1447
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 39
          },
          "start": {
            "column": 0,
            "line": 39
          }
        }
      },
      "range": [
        1427,
        1448
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 40
    },
    "start": {
      "column": 0,
      "line": 5
    }
  },
  "hashbang": null
}
```
