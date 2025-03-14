__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    4135
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        1440
      ],
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "range": [
                23,
                86
              ],
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "range": [
                    46,
                    86
                  ],
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "accessibility": "private",
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "range": [
                          64,
                          66
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 3
                          },
                          "start": {
                            "column": 16,
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
                          66,
                          80
                        ],
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "range": [
                            69,
                            80
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 4
                            },
                            "start": {
                              "column": 21,
                              "line": 3
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
                            "column": 9,
                            "line": 4
                          },
                          "start": {
                            "column": 18,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        56,
                        80
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 4
                        },
                        "start": {
                          "column": 8,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 5
                    },
                    "start": {
                      "column": 27,
                      "line": 2
                    }
                  }
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1_public",
                  "optional": false,
                  "range": [
                    36,
                    45
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 2
                    },
                    "start": {
                      "column": 17,
                      "line": 2
                    }
                  }
                },
                "implements": [],
                "superClass": null,
                "range": [
                  30,
                  86
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 5
                  },
                  "start": {
                    "column": 11,
                    "line": 2
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  109,
                  116
                ],
                "body": [],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 8
                  },
                  "start": {
                    "column": 21,
                    "line": 7
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C2_private",
                "optional": false,
                "range": [
                  98,
                  108
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 7
                  },
                  "start": {
                    "column": 10,
                    "line": 7
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                92,
                116
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 7
                }
              }
            },
            {
              "type": "ExportNamedDeclaration",
              "range": [
                122,
                793
              ],
              "attributes": [],
              "declaration": {
                "type": "ClassDeclaration",
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "range": [
                    145,
                    793
                  ],
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "accessibility": "private",
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p1_private",
                        "optional": false,
                        "range": [
                          167,
                          177
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 11
                          },
                          "start": {
                            "column": 20,
                            "line": 11
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
                          177,
                          227
                        ],
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "NewExpression",
                                "arguments": [],
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "C1_public",
                                  "optional": false,
                                  "range": [
                                    205,
                                    214
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 32,
                                      "line": 12
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 12
                                    }
                                  }
                                },
                                "range": [
                                  201,
                                  216
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 12
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 12
                                  }
                                }
                              },
                              "range": [
                                194,
                                217
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
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
                            180,
                            227
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 13
                            },
                            "start": {
                              "column": 33,
                              "line": 11
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
                            "column": 9,
                            "line": 13
                          },
                          "start": {
                            "column": 30,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        155,
                        227
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 13
                        },
                        "start": {
                          "column": 8,
                          "line": 11
                        }
                      }
                    },
                    {
                      "type": "MethodDefinition",
                      "accessibility": "private",
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p1_private",
                        "optional": false,
                        "range": [
                          249,
                          259
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 15
                          },
                          "start": {
                            "column": 20,
                            "line": 15
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
                          259,
                          296
                        ],
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "range": [
                            285,
                            296
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 16
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
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "m1_c3_p1_arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 15
                                },
                                "start": {
                                  "column": 43,
                                  "line": 15
                                }
                              },
                              "range": [
                                272,
                                283
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "C1_public",
                                  "optional": false,
                                  "range": [
                                    274,
                                    283
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 54,
                                      "line": 15
                                    },
                                    "start": {
                                      "column": 45,
                                      "line": 15
                                    }
                                  }
                                },
                                "range": [
                                  274,
                                  283
                                ],
                                "loc": {
                                  "end": {
                                    "column": 54,
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
                              260,
                              283
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 15
                              },
                              "start": {
                                "column": 31,
                                "line": 15
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 16
                          },
                          "start": {
                            "column": 30,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        237,
                        296
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 16
                        },
                        "start": {
                          "column": 8,
                          "line": 15
                        }
                      }
                    },
                    {
                      "type": "MethodDefinition",
                      "accessibility": "private",
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p2_private",
                        "optional": false,
                        "range": [
                          318,
                          328
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 18
                          },
                          "start": {
                            "column": 20,
                            "line": 18
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
                          328,
                          378
                        ],
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "NewExpression",
                                "arguments": [],
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "C1_public",
                                  "optional": false,
                                  "range": [
                                    356,
                                    365
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 32,
                                      "line": 19
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 19
                                    }
                                  }
                                },
                                "range": [
                                  352,
                                  367
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 19
                                  }
                                }
                              },
                              "range": [
                                345,
                                368
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 19
                                },
                                "start": {
                                  "column": 12,
                                  "line": 19
                                }
                              }
                            }
                          ],
                          "range": [
                            331,
                            378
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 20
                            },
                            "start": {
                              "column": 33,
                              "line": 18
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
                            "column": 9,
                            "line": 20
                          },
                          "start": {
                            "column": 30,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        306,
                        378
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 20
                        },
                        "start": {
                          "column": 8,
                          "line": 18
                        }
                      }
                    },
                    {
                      "type": "MethodDefinition",
                      "accessibility": "private",
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p2_private",
                        "optional": false,
                        "range": [
                          400,
                          410
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 22
                          },
                          "start": {
                            "column": 20,
                            "line": 22
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
                          410,
                          447
                        ],
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "range": [
                            436,
                            447
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 23
                            },
                            "start": {
                              "column": 56,
                              "line": 22
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
                            "name": "m1_c3_p2_arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 22
                                },
                                "start": {
                                  "column": 43,
                                  "line": 22
                                }
                              },
                              "range": [
                                423,
                                434
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "C1_public",
                                  "optional": false,
                                  "range": [
                                    425,
                                    434
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
                                },
                                "range": [
                                  425,
                                  434
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
                            },
                            "range": [
                              411,
                              434
                            ],
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 22
                              },
                              "start": {
                                "column": 31,
                                "line": 22
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 23
                          },
                          "start": {
                            "column": 30,
                            "line": 22
                          }
                        }
                      },
                      "range": [
                        388,
                        447
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 23
                        },
                        "start": {
                          "column": 8,
                          "line": 22
                        }
                      }
                    },
                    {
                      "type": "MethodDefinition",
                      "accessibility": "private",
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p3_private",
                        "optional": false,
                        "range": [
                          469,
                          479
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 25
                          },
                          "start": {
                            "column": 20,
                            "line": 25
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
                          479,
                          530
                        ],
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "NewExpression",
                                "arguments": [],
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "C2_private",
                                  "optional": false,
                                  "range": [
                                    507,
                                    517
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 26
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 26
                                    }
                                  }
                                },
                                "range": [
                                  503,
                                  519
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 26
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 26
                                  }
                                }
                              },
                              "range": [
                                496,
                                520
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 26
                                },
                                "start": {
                                  "column": 12,
                                  "line": 26
                                }
                              }
                            }
                          ],
                          "range": [
                            482,
                            530
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 27
                            },
                            "start": {
                              "column": 33,
                              "line": 25
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
                            "column": 9,
                            "line": 27
                          },
                          "start": {
                            "column": 30,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        457,
                        530
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 27
                        },
                        "start": {
                          "column": 8,
                          "line": 25
                        }
                      }
                    },
                    {
                      "type": "MethodDefinition",
                      "accessibility": "private",
                      "computed": false,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p3_private",
                        "optional": false,
                        "range": [
                          552,
                          562
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 29
                          },
                          "start": {
                            "column": 20,
                            "line": 29
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
                          562,
                          600
                        ],
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "range": [
                            589,
                            600
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 30
                            },
                            "start": {
                              "column": 57,
                              "line": 29
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
                            "name": "m1_c3_p3_arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 55,
                                  "line": 29
                                },
                                "start": {
                                  "column": 43,
                                  "line": 29
                                }
                              },
                              "range": [
                                575,
                                587
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "C2_private",
                                  "optional": false,
                                  "range": [
                                    577,
                                    587
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 55,
                                      "line": 29
                                    },
                                    "start": {
                                      "column": 45,
                                      "line": 29
                                    }
                                  }
                                },
                                "range": [
                                  577,
                                  587
                                ],
                                "loc": {
                                  "end": {
                                    "column": 55,
                                    "line": 29
                                  },
                                  "start": {
                                    "column": 45,
                                    "line": 29
                                  }
                                }
                              }
                            },
                            "range": [
                              563,
                              587
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 29
                              },
                              "start": {
                                "column": 31,
                                "line": 29
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 30
                          },
                          "start": {
                            "column": 30,
                            "line": 29
                          }
                        }
                      },
                      "range": [
                        540,
                        600
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 30
                        },
                        "start": {
                          "column": 8,
                          "line": 29
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
                        "name": "p4_public",
                        "optional": false,
                        "range": [
                          621,
                          630
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 32
                          },
                          "start": {
                            "column": 19,
                            "line": 32
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
                          630,
                          710
                        ],
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "NewExpression",
                                "arguments": [],
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "C2_private",
                                  "optional": false,
                                  "range": [
                                    679,
                                    689
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 33
                                    },
                                    "start": {
                                      "column": 23,
                                      "line": 33
                                    }
                                  }
                                },
                                "range": [
                                  675,
                                  691
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 33
                                  }
                                }
                              },
                              "range": [
                                668,
                                692
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 33
                                },
                                "start": {
                                  "column": 12,
                                  "line": 33
                                }
                              }
                            }
                          ],
                          "range": [
                            645,
                            710
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 34
                            },
                            "start": {
                              "column": 43,
                              "line": 32
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
                              "column": 42,
                              "line": 32
                            },
                            "start": {
                              "column": 30,
                              "line": 32
                            }
                          },
                          "range": [
                            632,
                            644
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C2_private",
                              "optional": false,
                              "range": [
                                634,
                                644
                              ],
                              "loc": {
                                "end": {
                                  "column": 42,
                                  "line": 32
                                },
                                "start": {
                                  "column": 32,
                                  "line": 32
                                }
                              }
                            },
                            "range": [
                              634,
                              644
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 32
                              },
                              "start": {
                                "column": 32,
                                "line": 32
                              }
                            }
                          }
                        },
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 34
                          },
                          "start": {
                            "column": 28,
                            "line": 32
                          }
                        }
                      },
                      "range": [
                        610,
                        710
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 34
                        },
                        "start": {
                          "column": 8,
                          "line": 32
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
                        "name": "p4_public",
                        "optional": false,
                        "range": [
                          731,
                          740
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 36
                          },
                          "start": {
                            "column": 19,
                            "line": 36
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
                          740,
                          787
                        ],
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "range": [
                            767,
                            787
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 37
                            },
                            "start": {
                              "column": 55,
                              "line": 36
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
                            "name": "m1_c3_p4_arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 53,
                                  "line": 36
                                },
                                "start": {
                                  "column": 41,
                                  "line": 36
                                }
                              },
                              "range": [
                                753,
                                765
                              ],
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "C2_private",
                                  "optional": false,
                                  "range": [
                                    755,
                                    765
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 53,
                                      "line": 36
                                    },
                                    "start": {
                                      "column": 43,
                                      "line": 36
                                    }
                                  }
                                },
                                "range": [
                                  755,
                                  765
                                ],
                                "loc": {
                                  "end": {
                                    "column": 53,
                                    "line": 36
                                  },
                                  "start": {
                                    "column": 43,
                                    "line": 36
                                  }
                                }
                              }
                            },
                            "range": [
                              741,
                              765
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 36
                              },
                              "start": {
                                "column": 29,
                                "line": 36
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 37
                          },
                          "start": {
                            "column": 28,
                            "line": 36
                          }
                        }
                      },
                      "range": [
                        720,
                        787
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 37
                        },
                        "start": {
                          "column": 8,
                          "line": 36
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 38
                    },
                    "start": {
                      "column": 27,
                      "line": 10
                    }
                  }
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C3_public",
                  "optional": false,
                  "range": [
                    135,
                    144
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
                "implements": [],
                "superClass": null,
                "range": [
                  129,
                  793
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 38
                  },
                  "start": {
                    "column": 11,
                    "line": 10
                  }
                }
              },
              "exportKind": "value",
              "source": null,
              "specifiers": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 38
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  816,
                  1438
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p1_private",
                      "optional": false,
                      "range": [
                        838,
                        848
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 41
                        },
                        "start": {
                          "column": 20,
                          "line": 41
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
                        848,
                        898
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C1_public",
                                "optional": false,
                                "range": [
                                  876,
                                  885
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 42
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 42
                                  }
                                }
                              },
                              "range": [
                                872,
                                887
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 42
                                },
                                "start": {
                                  "column": 19,
                                  "line": 42
                                }
                              }
                            },
                            "range": [
                              865,
                              888
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 42
                              },
                              "start": {
                                "column": 12,
                                "line": 42
                              }
                            }
                          }
                        ],
                        "range": [
                          851,
                          898
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 43
                          },
                          "start": {
                            "column": 33,
                            "line": 41
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
                          "column": 9,
                          "line": 43
                        },
                        "start": {
                          "column": 30,
                          "line": 41
                        }
                      }
                    },
                    "range": [
                      826,
                      898
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 43
                      },
                      "start": {
                        "column": 8,
                        "line": 41
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p1_private",
                      "optional": false,
                      "range": [
                        920,
                        930
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 45
                        },
                        "start": {
                          "column": 20,
                          "line": 45
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
                        930,
                        967
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          956,
                          967
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 46
                          },
                          "start": {
                            "column": 56,
                            "line": 45
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
                          "name": "m1_c3_p1_arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 45
                              },
                              "start": {
                                "column": 43,
                                "line": 45
                              }
                            },
                            "range": [
                              943,
                              954
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C1_public",
                                "optional": false,
                                "range": [
                                  945,
                                  954
                                ],
                                "loc": {
                                  "end": {
                                    "column": 54,
                                    "line": 45
                                  },
                                  "start": {
                                    "column": 45,
                                    "line": 45
                                  }
                                }
                              },
                              "range": [
                                945,
                                954
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 45
                                },
                                "start": {
                                  "column": 45,
                                  "line": 45
                                }
                              }
                            }
                          },
                          "range": [
                            931,
                            954
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 45
                            },
                            "start": {
                              "column": 31,
                              "line": 45
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 46
                        },
                        "start": {
                          "column": 30,
                          "line": 45
                        }
                      }
                    },
                    "range": [
                      908,
                      967
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 46
                      },
                      "start": {
                        "column": 8,
                        "line": 45
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p2_private",
                      "optional": false,
                      "range": [
                        989,
                        999
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 48
                        },
                        "start": {
                          "column": 20,
                          "line": 48
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
                        999,
                        1049
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C1_public",
                                "optional": false,
                                "range": [
                                  1027,
                                  1036
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 49
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 49
                                  }
                                }
                              },
                              "range": [
                                1023,
                                1038
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 49
                                },
                                "start": {
                                  "column": 19,
                                  "line": 49
                                }
                              }
                            },
                            "range": [
                              1016,
                              1039
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 49
                              },
                              "start": {
                                "column": 12,
                                "line": 49
                              }
                            }
                          }
                        ],
                        "range": [
                          1002,
                          1049
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 50
                          },
                          "start": {
                            "column": 33,
                            "line": 48
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
                          "column": 9,
                          "line": 50
                        },
                        "start": {
                          "column": 30,
                          "line": 48
                        }
                      }
                    },
                    "range": [
                      977,
                      1049
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 50
                      },
                      "start": {
                        "column": 8,
                        "line": 48
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p2_private",
                      "optional": false,
                      "range": [
                        1071,
                        1081
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 52
                        },
                        "start": {
                          "column": 20,
                          "line": 52
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
                        1081,
                        1118
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          1107,
                          1118
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 53
                          },
                          "start": {
                            "column": 56,
                            "line": 52
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
                          "name": "m1_c3_p2_arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 54,
                                "line": 52
                              },
                              "start": {
                                "column": 43,
                                "line": 52
                              }
                            },
                            "range": [
                              1094,
                              1105
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C1_public",
                                "optional": false,
                                "range": [
                                  1096,
                                  1105
                                ],
                                "loc": {
                                  "end": {
                                    "column": 54,
                                    "line": 52
                                  },
                                  "start": {
                                    "column": 45,
                                    "line": 52
                                  }
                                }
                              },
                              "range": [
                                1096,
                                1105
                              ],
                              "loc": {
                                "end": {
                                  "column": 54,
                                  "line": 52
                                },
                                "start": {
                                  "column": 45,
                                  "line": 52
                                }
                              }
                            }
                          },
                          "range": [
                            1082,
                            1105
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 52
                            },
                            "start": {
                              "column": 31,
                              "line": 52
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 53
                        },
                        "start": {
                          "column": 30,
                          "line": 52
                        }
                      }
                    },
                    "range": [
                      1059,
                      1118
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 53
                      },
                      "start": {
                        "column": 8,
                        "line": 52
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p3_private",
                      "optional": false,
                      "range": [
                        1140,
                        1150
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 55
                        },
                        "start": {
                          "column": 20,
                          "line": 55
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
                        1150,
                        1201
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C2_private",
                                "optional": false,
                                "range": [
                                  1178,
                                  1188
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 56
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 56
                                  }
                                }
                              },
                              "range": [
                                1174,
                                1190
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 56
                                },
                                "start": {
                                  "column": 19,
                                  "line": 56
                                }
                              }
                            },
                            "range": [
                              1167,
                              1191
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 56
                              },
                              "start": {
                                "column": 12,
                                "line": 56
                              }
                            }
                          }
                        ],
                        "range": [
                          1153,
                          1201
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 57
                          },
                          "start": {
                            "column": 33,
                            "line": 55
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
                          "column": 9,
                          "line": 57
                        },
                        "start": {
                          "column": 30,
                          "line": 55
                        }
                      }
                    },
                    "range": [
                      1128,
                      1201
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 57
                      },
                      "start": {
                        "column": 8,
                        "line": 55
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p3_private",
                      "optional": false,
                      "range": [
                        1223,
                        1233
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 59
                        },
                        "start": {
                          "column": 20,
                          "line": 59
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
                        1233,
                        1271
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          1260,
                          1271
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 60
                          },
                          "start": {
                            "column": 57,
                            "line": 59
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
                          "name": "m1_c3_p3_arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 59
                              },
                              "start": {
                                "column": 43,
                                "line": 59
                              }
                            },
                            "range": [
                              1246,
                              1258
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C2_private",
                                "optional": false,
                                "range": [
                                  1248,
                                  1258
                                ],
                                "loc": {
                                  "end": {
                                    "column": 55,
                                    "line": 59
                                  },
                                  "start": {
                                    "column": 45,
                                    "line": 59
                                  }
                                }
                              },
                              "range": [
                                1248,
                                1258
                              ],
                              "loc": {
                                "end": {
                                  "column": 55,
                                  "line": 59
                                },
                                "start": {
                                  "column": 45,
                                  "line": 59
                                }
                              }
                            }
                          },
                          "range": [
                            1234,
                            1258
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 59
                            },
                            "start": {
                              "column": 31,
                              "line": 59
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 60
                        },
                        "start": {
                          "column": 30,
                          "line": 59
                        }
                      }
                    },
                    "range": [
                      1211,
                      1271
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 60
                      },
                      "start": {
                        "column": 8,
                        "line": 59
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
                      "name": "p4_public",
                      "optional": false,
                      "range": [
                        1292,
                        1301
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 62
                        },
                        "start": {
                          "column": 19,
                          "line": 62
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
                        1301,
                        1364
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C2_private",
                                "optional": false,
                                "range": [
                                  1341,
                                  1351
                                ],
                                "loc": {
                                  "end": {
                                    "column": 33,
                                    "line": 63
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 63
                                  }
                                }
                              },
                              "range": [
                                1337,
                                1353
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 63
                                },
                                "start": {
                                  "column": 19,
                                  "line": 63
                                }
                              }
                            },
                            "range": [
                              1330,
                              1354
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 63
                              },
                              "start": {
                                "column": 12,
                                "line": 63
                              }
                            }
                          }
                        ],
                        "range": [
                          1316,
                          1364
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 64
                          },
                          "start": {
                            "column": 43,
                            "line": 62
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
                            "column": 42,
                            "line": 62
                          },
                          "start": {
                            "column": 30,
                            "line": 62
                          }
                        },
                        "range": [
                          1303,
                          1315
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C2_private",
                            "optional": false,
                            "range": [
                              1305,
                              1315
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 62
                              },
                              "start": {
                                "column": 32,
                                "line": 62
                              }
                            }
                          },
                          "range": [
                            1305,
                            1315
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 62
                            },
                            "start": {
                              "column": 32,
                              "line": 62
                            }
                          }
                        }
                      },
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 64
                        },
                        "start": {
                          "column": 28,
                          "line": 62
                        }
                      }
                    },
                    "range": [
                      1281,
                      1364
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 64
                      },
                      "start": {
                        "column": 8,
                        "line": 62
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
                      "name": "p4_public",
                      "optional": false,
                      "range": [
                        1385,
                        1394
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 66
                        },
                        "start": {
                          "column": 19,
                          "line": 66
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
                        1394,
                        1432
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          1421,
                          1432
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 67
                          },
                          "start": {
                            "column": 55,
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
                          "name": "m1_c3_p4_arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 66
                              },
                              "start": {
                                "column": 41,
                                "line": 66
                              }
                            },
                            "range": [
                              1407,
                              1419
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C2_private",
                                "optional": false,
                                "range": [
                                  1409,
                                  1419
                                ],
                                "loc": {
                                  "end": {
                                    "column": 53,
                                    "line": 66
                                  },
                                  "start": {
                                    "column": 43,
                                    "line": 66
                                  }
                                }
                              },
                              "range": [
                                1409,
                                1419
                              ],
                              "loc": {
                                "end": {
                                  "column": 53,
                                  "line": 66
                                },
                                "start": {
                                  "column": 43,
                                  "line": 66
                                }
                              }
                            }
                          },
                          "range": [
                            1395,
                            1419
                          ],
                          "loc": {
                            "end": {
                              "column": 53,
                              "line": 66
                            },
                            "start": {
                              "column": 29,
                              "line": 66
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 67
                        },
                        "start": {
                          "column": 28,
                          "line": 66
                        }
                      }
                    },
                    "range": [
                      1374,
                      1432
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 67
                      },
                      "start": {
                        "column": 8,
                        "line": 66
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 68
                  },
                  "start": {
                    "column": 21,
                    "line": 40
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C4_private",
                "optional": false,
                "range": [
                  805,
                  815
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 40
                  },
                  "start": {
                    "column": 10,
                    "line": 40
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                799,
                1438
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 68
                },
                "start": {
                  "column": 4,
                  "line": 40
                }
              }
            }
          ],
          "range": [
            17,
            1440
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 69
            },
            "start": {
              "column": 17,
              "line": 1
            }
          }
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "range": [
            14,
            16
          ],
          "decorators": [],
          "name": "m1",
          "optional": false,
          "loc": {
            "end": {
              "column": 16,
              "line": 1
            },
            "start": {
              "column": 14,
              "line": 1
            }
          }
        },
        "kind": "module",
        "range": [
          7,
          1440
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 69
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 69
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              1458,
              1524
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  1484,
                  1524
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "range": [
                        1502,
                        1504
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 73
                        },
                        "start": {
                          "column": 16,
                          "line": 73
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
                        1504,
                        1518
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          1507,
                          1518
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 74
                          },
                          "start": {
                            "column": 21,
                            "line": 73
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
                          "column": 9,
                          "line": 74
                        },
                        "start": {
                          "column": 18,
                          "line": 73
                        }
                      }
                    },
                    "range": [
                      1494,
                      1518
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 74
                      },
                      "start": {
                        "column": 8,
                        "line": 73
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 75
                  },
                  "start": {
                    "column": 30,
                    "line": 72
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_C1_public",
                "optional": false,
                "range": [
                  1471,
                  1483
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 72
                  },
                  "start": {
                    "column": 17,
                    "line": 72
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                1465,
                1524
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 75
                },
                "start": {
                  "column": 11,
                  "line": 72
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 75
              },
              "start": {
                "column": 4,
                "line": 72
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                1550,
                1557
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 78
                },
                "start": {
                  "column": 24,
                  "line": 77
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_C2_private",
              "optional": false,
              "range": [
                1536,
                1549
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 77
                },
                "start": {
                  "column": 10,
                  "line": 77
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              1530,
              1557
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 78
              },
              "start": {
                "column": 4,
                "line": 77
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              1563,
              2238
            ],
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "range": [
                  1589,
                  2238
                ],
                "body": [
                  {
                    "type": "MethodDefinition",
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p1_private",
                      "optional": false,
                      "range": [
                        1611,
                        1621
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 81
                        },
                        "start": {
                          "column": 20,
                          "line": 81
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
                        1621,
                        1674
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "m2_C1_public",
                                "optional": false,
                                "range": [
                                  1649,
                                  1661
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 82
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 82
                                  }
                                }
                              },
                              "range": [
                                1645,
                                1663
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 82
                                },
                                "start": {
                                  "column": 19,
                                  "line": 82
                                }
                              }
                            },
                            "range": [
                              1638,
                              1664
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 82
                              },
                              "start": {
                                "column": 12,
                                "line": 82
                              }
                            }
                          }
                        ],
                        "range": [
                          1624,
                          1674
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 83
                          },
                          "start": {
                            "column": 33,
                            "line": 81
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
                          "column": 9,
                          "line": 83
                        },
                        "start": {
                          "column": 30,
                          "line": 81
                        }
                      }
                    },
                    "range": [
                      1599,
                      1674
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 83
                      },
                      "start": {
                        "column": 8,
                        "line": 81
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p1_private",
                      "optional": false,
                      "range": [
                        1696,
                        1706
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 85
                        },
                        "start": {
                          "column": 20,
                          "line": 85
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
                        1706,
                        1746
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          1735,
                          1746
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 86
                          },
                          "start": {
                            "column": 59,
                            "line": 85
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
                          "name": "m2_c3_p1_arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 85
                              },
                              "start": {
                                "column": 43,
                                "line": 85
                              }
                            },
                            "range": [
                              1719,
                              1733
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "m2_C1_public",
                                "optional": false,
                                "range": [
                                  1721,
                                  1733
                                ],
                                "loc": {
                                  "end": {
                                    "column": 57,
                                    "line": 85
                                  },
                                  "start": {
                                    "column": 45,
                                    "line": 85
                                  }
                                }
                              },
                              "range": [
                                1721,
                                1733
                              ],
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 85
                                },
                                "start": {
                                  "column": 45,
                                  "line": 85
                                }
                              }
                            }
                          },
                          "range": [
                            1707,
                            1733
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 85
                            },
                            "start": {
                              "column": 31,
                              "line": 85
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 86
                        },
                        "start": {
                          "column": 30,
                          "line": 85
                        }
                      }
                    },
                    "range": [
                      1684,
                      1746
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 86
                      },
                      "start": {
                        "column": 8,
                        "line": 85
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p2_private",
                      "optional": false,
                      "range": [
                        1768,
                        1778
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 88
                        },
                        "start": {
                          "column": 20,
                          "line": 88
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
                        1778,
                        1831
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "m2_C1_public",
                                "optional": false,
                                "range": [
                                  1806,
                                  1818
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 89
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 89
                                  }
                                }
                              },
                              "range": [
                                1802,
                                1820
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 89
                                },
                                "start": {
                                  "column": 19,
                                  "line": 89
                                }
                              }
                            },
                            "range": [
                              1795,
                              1821
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 89
                              },
                              "start": {
                                "column": 12,
                                "line": 89
                              }
                            }
                          }
                        ],
                        "range": [
                          1781,
                          1831
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 90
                          },
                          "start": {
                            "column": 33,
                            "line": 88
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
                          "column": 9,
                          "line": 90
                        },
                        "start": {
                          "column": 30,
                          "line": 88
                        }
                      }
                    },
                    "range": [
                      1756,
                      1831
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 90
                      },
                      "start": {
                        "column": 8,
                        "line": 88
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p2_private",
                      "optional": false,
                      "range": [
                        1853,
                        1863
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 92
                        },
                        "start": {
                          "column": 20,
                          "line": 92
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
                        1863,
                        1903
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          1892,
                          1903
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 93
                          },
                          "start": {
                            "column": 59,
                            "line": 92
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
                          "name": "m2_c3_p2_arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 92
                              },
                              "start": {
                                "column": 43,
                                "line": 92
                              }
                            },
                            "range": [
                              1876,
                              1890
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "m2_C1_public",
                                "optional": false,
                                "range": [
                                  1878,
                                  1890
                                ],
                                "loc": {
                                  "end": {
                                    "column": 57,
                                    "line": 92
                                  },
                                  "start": {
                                    "column": 45,
                                    "line": 92
                                  }
                                }
                              },
                              "range": [
                                1878,
                                1890
                              ],
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 92
                                },
                                "start": {
                                  "column": 45,
                                  "line": 92
                                }
                              }
                            }
                          },
                          "range": [
                            1864,
                            1890
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 92
                            },
                            "start": {
                              "column": 31,
                              "line": 92
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 93
                        },
                        "start": {
                          "column": 30,
                          "line": 92
                        }
                      }
                    },
                    "range": [
                      1841,
                      1903
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 93
                      },
                      "start": {
                        "column": 8,
                        "line": 92
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p3_private",
                      "optional": false,
                      "range": [
                        1925,
                        1935
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 95
                        },
                        "start": {
                          "column": 20,
                          "line": 95
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
                        1935,
                        1989
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "m2_C2_private",
                                "optional": false,
                                "range": [
                                  1963,
                                  1976
                                ],
                                "loc": {
                                  "end": {
                                    "column": 36,
                                    "line": 96
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 96
                                  }
                                }
                              },
                              "range": [
                                1959,
                                1978
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 96
                                },
                                "start": {
                                  "column": 19,
                                  "line": 96
                                }
                              }
                            },
                            "range": [
                              1952,
                              1979
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 96
                              },
                              "start": {
                                "column": 12,
                                "line": 96
                              }
                            }
                          }
                        ],
                        "range": [
                          1938,
                          1989
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 97
                          },
                          "start": {
                            "column": 33,
                            "line": 95
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
                          "column": 9,
                          "line": 97
                        },
                        "start": {
                          "column": 30,
                          "line": 95
                        }
                      }
                    },
                    "range": [
                      1913,
                      1989
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 97
                      },
                      "start": {
                        "column": 8,
                        "line": 95
                      }
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "accessibility": "private",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p3_private",
                      "optional": false,
                      "range": [
                        2011,
                        2021
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 99
                        },
                        "start": {
                          "column": 20,
                          "line": 99
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
                        2021,
                        2062
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          2051,
                          2062
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 100
                          },
                          "start": {
                            "column": 60,
                            "line": 99
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
                          "name": "m2_c3_p3_arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 58,
                                "line": 99
                              },
                              "start": {
                                "column": 43,
                                "line": 99
                              }
                            },
                            "range": [
                              2034,
                              2049
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "m2_C2_private",
                                "optional": false,
                                "range": [
                                  2036,
                                  2049
                                ],
                                "loc": {
                                  "end": {
                                    "column": 58,
                                    "line": 99
                                  },
                                  "start": {
                                    "column": 45,
                                    "line": 99
                                  }
                                }
                              },
                              "range": [
                                2036,
                                2049
                              ],
                              "loc": {
                                "end": {
                                  "column": 58,
                                  "line": 99
                                },
                                "start": {
                                  "column": 45,
                                  "line": 99
                                }
                              }
                            }
                          },
                          "range": [
                            2022,
                            2049
                          ],
                          "loc": {
                            "end": {
                              "column": 58,
                              "line": 99
                            },
                            "start": {
                              "column": 31,
                              "line": 99
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 100
                        },
                        "start": {
                          "column": 30,
                          "line": 99
                        }
                      }
                    },
                    "range": [
                      1999,
                      2062
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 100
                      },
                      "start": {
                        "column": 8,
                        "line": 99
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
                      "name": "p4_public",
                      "optional": false,
                      "range": [
                        2083,
                        2092
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 102
                        },
                        "start": {
                          "column": 19,
                          "line": 102
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
                        2092,
                        2161
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "arguments": [],
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "m2_C2_private",
                                "optional": false,
                                "range": [
                                  2135,
                                  2148
                                ],
                                "loc": {
                                  "end": {
                                    "column": 36,
                                    "line": 103
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 103
                                  }
                                }
                              },
                              "range": [
                                2131,
                                2150
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 103
                                },
                                "start": {
                                  "column": 19,
                                  "line": 103
                                }
                              }
                            },
                            "range": [
                              2124,
                              2151
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 103
                              },
                              "start": {
                                "column": 12,
                                "line": 103
                              }
                            }
                          }
                        ],
                        "range": [
                          2110,
                          2161
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 104
                          },
                          "start": {
                            "column": 46,
                            "line": 102
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
                            "column": 45,
                            "line": 102
                          },
                          "start": {
                            "column": 30,
                            "line": 102
                          }
                        },
                        "range": [
                          2094,
                          2109
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "m2_C2_private",
                            "optional": false,
                            "range": [
                              2096,
                              2109
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 102
                              },
                              "start": {
                                "column": 32,
                                "line": 102
                              }
                            }
                          },
                          "range": [
                            2096,
                            2109
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 102
                            },
                            "start": {
                              "column": 32,
                              "line": 102
                            }
                          }
                        }
                      },
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 104
                        },
                        "start": {
                          "column": 28,
                          "line": 102
                        }
                      }
                    },
                    "range": [
                      2072,
                      2161
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 104
                      },
                      "start": {
                        "column": 8,
                        "line": 102
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
                      "name": "p4_public",
                      "optional": false,
                      "range": [
                        2182,
                        2191
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 106
                        },
                        "start": {
                          "column": 19,
                          "line": 106
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
                        2191,
                        2232
                      ],
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "range": [
                          2221,
                          2232
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 107
                          },
                          "start": {
                            "column": 58,
                            "line": 106
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
                          "name": "m2_c3_p4_arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 56,
                                "line": 106
                              },
                              "start": {
                                "column": 41,
                                "line": 106
                              }
                            },
                            "range": [
                              2204,
                              2219
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "m2_C2_private",
                                "optional": false,
                                "range": [
                                  2206,
                                  2219
                                ],
                                "loc": {
                                  "end": {
                                    "column": 56,
                                    "line": 106
                                  },
                                  "start": {
                                    "column": 43,
                                    "line": 106
                                  }
                                }
                              },
                              "range": [
                                2206,
                                2219
                              ],
                              "loc": {
                                "end": {
                                  "column": 56,
                                  "line": 106
                                },
                                "start": {
                                  "column": 43,
                                  "line": 106
                                }
                              }
                            }
                          },
                          "range": [
                            2192,
                            2219
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 106
                            },
                            "start": {
                              "column": 29,
                              "line": 106
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 107
                        },
                        "start": {
                          "column": 28,
                          "line": 106
                        }
                      }
                    },
                    "range": [
                      2171,
                      2232
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 107
                      },
                      "start": {
                        "column": 8,
                        "line": 106
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 108
                  },
                  "start": {
                    "column": 30,
                    "line": 80
                  }
                }
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_C3_public",
                "optional": false,
                "range": [
                  1576,
                  1588
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 80
                  },
                  "start": {
                    "column": 17,
                    "line": 80
                  }
                }
              },
              "implements": [],
              "superClass": null,
              "range": [
                1570,
                2238
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 108
                },
                "start": {
                  "column": 11,
                  "line": 80
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 108
              },
              "start": {
                "column": 4,
                "line": 80
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                2264,
                2913
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p1_private",
                    "optional": false,
                    "range": [
                      2286,
                      2296
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 111
                      },
                      "start": {
                        "column": 20,
                        "line": 111
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
                      2296,
                      2349
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "NewExpression",
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m2_C1_public",
                              "optional": false,
                              "range": [
                                2324,
                                2336
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 112
                                },
                                "start": {
                                  "column": 23,
                                  "line": 112
                                }
                              }
                            },
                            "range": [
                              2320,
                              2338
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 112
                              },
                              "start": {
                                "column": 19,
                                "line": 112
                              }
                            }
                          },
                          "range": [
                            2313,
                            2339
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 112
                            },
                            "start": {
                              "column": 12,
                              "line": 112
                            }
                          }
                        }
                      ],
                      "range": [
                        2299,
                        2349
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 113
                        },
                        "start": {
                          "column": 33,
                          "line": 111
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
                        "column": 9,
                        "line": 113
                      },
                      "start": {
                        "column": 30,
                        "line": 111
                      }
                    }
                  },
                  "range": [
                    2274,
                    2349
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 113
                    },
                    "start": {
                      "column": 8,
                      "line": 111
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p1_private",
                    "optional": false,
                    "range": [
                      2371,
                      2381
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 115
                      },
                      "start": {
                        "column": 20,
                        "line": 115
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
                      2381,
                      2421
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        2410,
                        2421
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 116
                        },
                        "start": {
                          "column": 59,
                          "line": 115
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
                        "name": "m2_c3_p1_arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 115
                            },
                            "start": {
                              "column": 43,
                              "line": 115
                            }
                          },
                          "range": [
                            2394,
                            2408
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m2_C1_public",
                              "optional": false,
                              "range": [
                                2396,
                                2408
                              ],
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 115
                                },
                                "start": {
                                  "column": 45,
                                  "line": 115
                                }
                              }
                            },
                            "range": [
                              2396,
                              2408
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 115
                              },
                              "start": {
                                "column": 45,
                                "line": 115
                              }
                            }
                          }
                        },
                        "range": [
                          2382,
                          2408
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 115
                          },
                          "start": {
                            "column": 31,
                            "line": 115
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 116
                      },
                      "start": {
                        "column": 30,
                        "line": 115
                      }
                    }
                  },
                  "range": [
                    2359,
                    2421
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 116
                    },
                    "start": {
                      "column": 8,
                      "line": 115
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p2_private",
                    "optional": false,
                    "range": [
                      2443,
                      2453
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 118
                      },
                      "start": {
                        "column": 20,
                        "line": 118
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
                      2453,
                      2506
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "NewExpression",
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m2_C1_public",
                              "optional": false,
                              "range": [
                                2481,
                                2493
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 119
                                },
                                "start": {
                                  "column": 23,
                                  "line": 119
                                }
                              }
                            },
                            "range": [
                              2477,
                              2495
                            ],
                            "loc": {
                              "end": {
                                "column": 37,
                                "line": 119
                              },
                              "start": {
                                "column": 19,
                                "line": 119
                              }
                            }
                          },
                          "range": [
                            2470,
                            2496
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 119
                            },
                            "start": {
                              "column": 12,
                              "line": 119
                            }
                          }
                        }
                      ],
                      "range": [
                        2456,
                        2506
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 120
                        },
                        "start": {
                          "column": 33,
                          "line": 118
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
                        "column": 9,
                        "line": 120
                      },
                      "start": {
                        "column": 30,
                        "line": 118
                      }
                    }
                  },
                  "range": [
                    2431,
                    2506
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 120
                    },
                    "start": {
                      "column": 8,
                      "line": 118
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p2_private",
                    "optional": false,
                    "range": [
                      2528,
                      2538
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 122
                      },
                      "start": {
                        "column": 20,
                        "line": 122
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
                      2538,
                      2578
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        2567,
                        2578
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 123
                        },
                        "start": {
                          "column": 59,
                          "line": 122
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
                        "name": "m2_c3_p2_arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 122
                            },
                            "start": {
                              "column": 43,
                              "line": 122
                            }
                          },
                          "range": [
                            2551,
                            2565
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m2_C1_public",
                              "optional": false,
                              "range": [
                                2553,
                                2565
                              ],
                              "loc": {
                                "end": {
                                  "column": 57,
                                  "line": 122
                                },
                                "start": {
                                  "column": 45,
                                  "line": 122
                                }
                              }
                            },
                            "range": [
                              2553,
                              2565
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 122
                              },
                              "start": {
                                "column": 45,
                                "line": 122
                              }
                            }
                          }
                        },
                        "range": [
                          2539,
                          2565
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 122
                          },
                          "start": {
                            "column": 31,
                            "line": 122
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 123
                      },
                      "start": {
                        "column": 30,
                        "line": 122
                      }
                    }
                  },
                  "range": [
                    2516,
                    2578
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 123
                    },
                    "start": {
                      "column": 8,
                      "line": 122
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p3_private",
                    "optional": false,
                    "range": [
                      2600,
                      2610
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 125
                      },
                      "start": {
                        "column": 20,
                        "line": 125
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
                      2610,
                      2664
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "NewExpression",
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m2_C2_private",
                              "optional": false,
                              "range": [
                                2638,
                                2651
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 126
                                },
                                "start": {
                                  "column": 23,
                                  "line": 126
                                }
                              }
                            },
                            "range": [
                              2634,
                              2653
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 126
                              },
                              "start": {
                                "column": 19,
                                "line": 126
                              }
                            }
                          },
                          "range": [
                            2627,
                            2654
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 126
                            },
                            "start": {
                              "column": 12,
                              "line": 126
                            }
                          }
                        }
                      ],
                      "range": [
                        2613,
                        2664
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 127
                        },
                        "start": {
                          "column": 33,
                          "line": 125
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
                        "column": 9,
                        "line": 127
                      },
                      "start": {
                        "column": 30,
                        "line": 125
                      }
                    }
                  },
                  "range": [
                    2588,
                    2664
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 127
                    },
                    "start": {
                      "column": 8,
                      "line": 125
                    }
                  }
                },
                {
                  "type": "MethodDefinition",
                  "accessibility": "private",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p3_private",
                    "optional": false,
                    "range": [
                      2686,
                      2696
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 129
                      },
                      "start": {
                        "column": 20,
                        "line": 129
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
                      2696,
                      2737
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        2726,
                        2737
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 130
                        },
                        "start": {
                          "column": 60,
                          "line": 129
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
                        "name": "m2_c3_p3_arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 58,
                              "line": 129
                            },
                            "start": {
                              "column": 43,
                              "line": 129
                            }
                          },
                          "range": [
                            2709,
                            2724
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m2_C2_private",
                              "optional": false,
                              "range": [
                                2711,
                                2724
                              ],
                              "loc": {
                                "end": {
                                  "column": 58,
                                  "line": 129
                                },
                                "start": {
                                  "column": 45,
                                  "line": 129
                                }
                              }
                            },
                            "range": [
                              2711,
                              2724
                            ],
                            "loc": {
                              "end": {
                                "column": 58,
                                "line": 129
                              },
                              "start": {
                                "column": 45,
                                "line": 129
                              }
                            }
                          }
                        },
                        "range": [
                          2697,
                          2724
                        ],
                        "loc": {
                          "end": {
                            "column": 58,
                            "line": 129
                          },
                          "start": {
                            "column": 31,
                            "line": 129
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 130
                      },
                      "start": {
                        "column": 30,
                        "line": 129
                      }
                    }
                  },
                  "range": [
                    2674,
                    2737
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 130
                    },
                    "start": {
                      "column": 8,
                      "line": 129
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
                    "name": "p4_public",
                    "optional": false,
                    "range": [
                      2758,
                      2767
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 132
                      },
                      "start": {
                        "column": 19,
                        "line": 132
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
                      2767,
                      2836
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "NewExpression",
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m2_C2_private",
                              "optional": false,
                              "range": [
                                2810,
                                2823
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 133
                                },
                                "start": {
                                  "column": 23,
                                  "line": 133
                                }
                              }
                            },
                            "range": [
                              2806,
                              2825
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 133
                              },
                              "start": {
                                "column": 19,
                                "line": 133
                              }
                            }
                          },
                          "range": [
                            2799,
                            2826
                          ],
                          "loc": {
                            "end": {
                              "column": 39,
                              "line": 133
                            },
                            "start": {
                              "column": 12,
                              "line": 133
                            }
                          }
                        }
                      ],
                      "range": [
                        2785,
                        2836
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 134
                        },
                        "start": {
                          "column": 46,
                          "line": 132
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
                          "column": 45,
                          "line": 132
                        },
                        "start": {
                          "column": 30,
                          "line": 132
                        }
                      },
                      "range": [
                        2769,
                        2784
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m2_C2_private",
                          "optional": false,
                          "range": [
                            2771,
                            2784
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 132
                            },
                            "start": {
                              "column": 32,
                              "line": 132
                            }
                          }
                        },
                        "range": [
                          2771,
                          2784
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 132
                          },
                          "start": {
                            "column": 32,
                            "line": 132
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 134
                      },
                      "start": {
                        "column": 28,
                        "line": 132
                      }
                    }
                  },
                  "range": [
                    2747,
                    2836
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 134
                    },
                    "start": {
                      "column": 8,
                      "line": 132
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
                    "name": "p4_public",
                    "optional": false,
                    "range": [
                      2857,
                      2866
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 136
                      },
                      "start": {
                        "column": 19,
                        "line": 136
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
                      2866,
                      2907
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "range": [
                        2896,
                        2907
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 137
                        },
                        "start": {
                          "column": 58,
                          "line": 136
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
                        "name": "m2_c3_p4_arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 136
                            },
                            "start": {
                              "column": 41,
                              "line": 136
                            }
                          },
                          "range": [
                            2879,
                            2894
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m2_C2_private",
                              "optional": false,
                              "range": [
                                2881,
                                2894
                              ],
                              "loc": {
                                "end": {
                                  "column": 56,
                                  "line": 136
                                },
                                "start": {
                                  "column": 43,
                                  "line": 136
                                }
                              }
                            },
                            "range": [
                              2881,
                              2894
                            ],
                            "loc": {
                              "end": {
                                "column": 56,
                                "line": 136
                              },
                              "start": {
                                "column": 43,
                                "line": 136
                              }
                            }
                          }
                        },
                        "range": [
                          2867,
                          2894
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 136
                          },
                          "start": {
                            "column": 29,
                            "line": 136
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 137
                      },
                      "start": {
                        "column": 28,
                        "line": 136
                      }
                    }
                  },
                  "range": [
                    2846,
                    2907
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 137
                    },
                    "start": {
                      "column": 8,
                      "line": 136
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 138
                },
                "start": {
                  "column": 24,
                  "line": 110
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_C4_private",
              "optional": false,
              "range": [
                2250,
                2263
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 110
                },
                "start": {
                  "column": 10,
                  "line": 110
                }
              }
            },
            "implements": [],
            "superClass": null,
            "range": [
              2244,
              2913
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 138
              },
              "start": {
                "column": 4,
                "line": 110
              }
            }
          }
        ],
        "range": [
          1452,
          2915
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 139
          },
          "start": {
            "column": 10,
            "line": 71
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          1449,
          1451
        ],
        "decorators": [],
        "name": "m2",
        "optional": false,
        "loc": {
          "end": {
            "column": 9,
            "line": 71
          },
          "start": {
            "column": 7,
            "line": 71
          }
        }
      },
      "kind": "module",
      "range": [
        1442,
        2915
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 139
        },
        "start": {
          "column": 0,
          "line": 71
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          2934,
          2961
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "range": [
                2948,
                2949
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 142
                },
                "start": {
                  "column": 12,
                  "line": 142
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
                2949,
                2959
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  2952,
                  2959
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 143
                  },
                  "start": {
                    "column": 16,
                    "line": 142
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
                  "line": 143
                },
                "start": {
                  "column": 13,
                  "line": 142
                }
              }
            },
            "range": [
              2940,
              2959
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 143
              },
              "start": {
                "column": 4,
                "line": 142
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 144
          },
          "start": {
            "column": 17,
            "line": 141
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C5_private",
        "optional": false,
        "range": [
          2923,
          2933
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 141
          },
          "start": {
            "column": 6,
            "line": 141
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        2917,
        2961
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 144
        },
        "start": {
          "column": 0,
          "line": 141
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2963,
        2989
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            2986,
            2989
          ],
          "body": [],
          "loc": {
            "end": {
              "column": 1,
              "line": 147
            },
            "start": {
              "column": 23,
              "line": 146
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C6_public",
          "optional": false,
          "range": [
            2976,
            2985
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 146
            },
            "start": {
              "column": 13,
              "line": 146
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          2970,
          2989
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 147
          },
          "start": {
            "column": 7,
            "line": 146
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 147
        },
        "start": {
          "column": 0,
          "line": 146
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        2991,
        3578
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            3014,
            3578
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "p1_private",
                "optional": false,
                "range": [
                  3032,
                  3042
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 150
                  },
                  "start": {
                    "column": 16,
                    "line": 150
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
                  3042,
                  3084
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "NewExpression",
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C6_public",
                          "optional": false,
                          "range": [
                            3066,
                            3075
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 151
                            },
                            "start": {
                              "column": 19,
                              "line": 151
                            }
                          }
                        },
                        "range": [
                          3062,
                          3077
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 151
                          },
                          "start": {
                            "column": 15,
                            "line": 151
                          }
                        }
                      },
                      "range": [
                        3055,
                        3078
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 151
                        },
                        "start": {
                          "column": 8,
                          "line": 151
                        }
                      }
                    }
                  ],
                  "range": [
                    3045,
                    3084
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 152
                    },
                    "start": {
                      "column": 29,
                      "line": 150
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
                    "line": 152
                  },
                  "start": {
                    "column": 26,
                    "line": 150
                  }
                }
              },
              "range": [
                3020,
                3084
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 152
                },
                "start": {
                  "column": 4,
                  "line": 150
                }
              }
            },
            {
              "type": "MethodDefinition",
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "p1_private",
                "optional": false,
                "range": [
                  3102,
                  3112
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 154
                  },
                  "start": {
                    "column": 16,
                    "line": 154
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
                  3112,
                  3145
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    3138,
                    3145
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 155
                    },
                    "start": {
                      "column": 52,
                      "line": 154
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
                    "name": "m1_c3_p1_arg",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 154
                        },
                        "start": {
                          "column": 39,
                          "line": 154
                        }
                      },
                      "range": [
                        3125,
                        3136
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C6_public",
                          "optional": false,
                          "range": [
                            3127,
                            3136
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 154
                            },
                            "start": {
                              "column": 41,
                              "line": 154
                            }
                          }
                        },
                        "range": [
                          3127,
                          3136
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 154
                          },
                          "start": {
                            "column": 41,
                            "line": 154
                          }
                        }
                      }
                    },
                    "range": [
                      3113,
                      3136
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 154
                      },
                      "start": {
                        "column": 27,
                        "line": 154
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 155
                  },
                  "start": {
                    "column": 26,
                    "line": 154
                  }
                }
              },
              "range": [
                3090,
                3145
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 155
                },
                "start": {
                  "column": 4,
                  "line": 154
                }
              }
            },
            {
              "type": "MethodDefinition",
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "p2_private",
                "optional": false,
                "range": [
                  3163,
                  3173
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 157
                  },
                  "start": {
                    "column": 16,
                    "line": 157
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
                  3173,
                  3215
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "NewExpression",
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C6_public",
                          "optional": false,
                          "range": [
                            3197,
                            3206
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 158
                            },
                            "start": {
                              "column": 19,
                              "line": 158
                            }
                          }
                        },
                        "range": [
                          3193,
                          3208
                        ],
                        "loc": {
                          "end": {
                            "column": 30,
                            "line": 158
                          },
                          "start": {
                            "column": 15,
                            "line": 158
                          }
                        }
                      },
                      "range": [
                        3186,
                        3209
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 158
                        },
                        "start": {
                          "column": 8,
                          "line": 158
                        }
                      }
                    }
                  ],
                  "range": [
                    3176,
                    3215
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 159
                    },
                    "start": {
                      "column": 29,
                      "line": 157
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
                    "line": 159
                  },
                  "start": {
                    "column": 26,
                    "line": 157
                  }
                }
              },
              "range": [
                3151,
                3215
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 159
                },
                "start": {
                  "column": 4,
                  "line": 157
                }
              }
            },
            {
              "type": "MethodDefinition",
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "p2_private",
                "optional": false,
                "range": [
                  3233,
                  3243
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 161
                  },
                  "start": {
                    "column": 16,
                    "line": 161
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
                  3243,
                  3276
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    3269,
                    3276
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 162
                    },
                    "start": {
                      "column": 52,
                      "line": 161
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
                    "name": "m1_c3_p2_arg",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 161
                        },
                        "start": {
                          "column": 39,
                          "line": 161
                        }
                      },
                      "range": [
                        3256,
                        3267
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C6_public",
                          "optional": false,
                          "range": [
                            3258,
                            3267
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 161
                            },
                            "start": {
                              "column": 41,
                              "line": 161
                            }
                          }
                        },
                        "range": [
                          3258,
                          3267
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 161
                          },
                          "start": {
                            "column": 41,
                            "line": 161
                          }
                        }
                      }
                    },
                    "range": [
                      3244,
                      3267
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 161
                      },
                      "start": {
                        "column": 27,
                        "line": 161
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 162
                  },
                  "start": {
                    "column": 26,
                    "line": 161
                  }
                }
              },
              "range": [
                3221,
                3276
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 162
                },
                "start": {
                  "column": 4,
                  "line": 161
                }
              }
            },
            {
              "type": "MethodDefinition",
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "p3_private",
                "optional": false,
                "range": [
                  3294,
                  3304
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 164
                  },
                  "start": {
                    "column": 16,
                    "line": 164
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
                  3304,
                  3347
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "NewExpression",
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C5_private",
                          "optional": false,
                          "range": [
                            3328,
                            3338
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 165
                            },
                            "start": {
                              "column": 19,
                              "line": 165
                            }
                          }
                        },
                        "range": [
                          3324,
                          3340
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 165
                          },
                          "start": {
                            "column": 15,
                            "line": 165
                          }
                        }
                      },
                      "range": [
                        3317,
                        3341
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 165
                        },
                        "start": {
                          "column": 8,
                          "line": 165
                        }
                      }
                    }
                  ],
                  "range": [
                    3307,
                    3347
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 166
                    },
                    "start": {
                      "column": 29,
                      "line": 164
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
                    "line": 166
                  },
                  "start": {
                    "column": 26,
                    "line": 164
                  }
                }
              },
              "range": [
                3282,
                3347
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 166
                },
                "start": {
                  "column": 4,
                  "line": 164
                }
              }
            },
            {
              "type": "MethodDefinition",
              "accessibility": "private",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "p3_private",
                "optional": false,
                "range": [
                  3365,
                  3375
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 168
                  },
                  "start": {
                    "column": 16,
                    "line": 168
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
                  3375,
                  3409
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    3402,
                    3409
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 169
                    },
                    "start": {
                      "column": 53,
                      "line": 168
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
                    "name": "m1_c3_p3_arg",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 168
                        },
                        "start": {
                          "column": 39,
                          "line": 168
                        }
                      },
                      "range": [
                        3388,
                        3400
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C5_private",
                          "optional": false,
                          "range": [
                            3390,
                            3400
                          ],
                          "loc": {
                            "end": {
                              "column": 51,
                              "line": 168
                            },
                            "start": {
                              "column": 41,
                              "line": 168
                            }
                          }
                        },
                        "range": [
                          3390,
                          3400
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 168
                          },
                          "start": {
                            "column": 41,
                            "line": 168
                          }
                        }
                      }
                    },
                    "range": [
                      3376,
                      3400
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 168
                      },
                      "start": {
                        "column": 27,
                        "line": 168
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 169
                  },
                  "start": {
                    "column": 26,
                    "line": 168
                  }
                }
              },
              "range": [
                3353,
                3409
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 169
                },
                "start": {
                  "column": 4,
                  "line": 168
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
                "name": "p4_public",
                "optional": false,
                "range": [
                  3426,
                  3435
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 171
                  },
                  "start": {
                    "column": 15,
                    "line": 171
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
                  3435,
                  3507
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "NewExpression",
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C5_private",
                          "optional": false,
                          "range": [
                            3480,
                            3490
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 172
                            },
                            "start": {
                              "column": 19,
                              "line": 172
                            }
                          }
                        },
                        "range": [
                          3476,
                          3492
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 172
                          },
                          "start": {
                            "column": 15,
                            "line": 172
                          }
                        }
                      },
                      "range": [
                        3469,
                        3493
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 172
                        },
                        "start": {
                          "column": 8,
                          "line": 172
                        }
                      }
                    }
                  ],
                  "range": [
                    3450,
                    3507
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 173
                    },
                    "start": {
                      "column": 39,
                      "line": 171
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
                      "column": 38,
                      "line": 171
                    },
                    "start": {
                      "column": 26,
                      "line": 171
                    }
                  },
                  "range": [
                    3437,
                    3449
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C5_private",
                      "optional": false,
                      "range": [
                        3439,
                        3449
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 171
                        },
                        "start": {
                          "column": 28,
                          "line": 171
                        }
                      }
                    },
                    "range": [
                      3439,
                      3449
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 171
                      },
                      "start": {
                        "column": 28,
                        "line": 171
                      }
                    }
                  }
                },
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 173
                  },
                  "start": {
                    "column": 24,
                    "line": 171
                  }
                }
              },
              "range": [
                3415,
                3507
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 173
                },
                "start": {
                  "column": 4,
                  "line": 171
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
                "name": "p4_public",
                "optional": false,
                "range": [
                  3524,
                  3533
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 175
                  },
                  "start": {
                    "column": 15,
                    "line": 175
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
                  3533,
                  3576
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "range": [
                    3560,
                    3576
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 176
                    },
                    "start": {
                      "column": 51,
                      "line": 175
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
                    "name": "m1_c3_p4_arg",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 175
                        },
                        "start": {
                          "column": 37,
                          "line": 175
                        }
                      },
                      "range": [
                        3546,
                        3558
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C5_private",
                          "optional": false,
                          "range": [
                            3548,
                            3558
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 175
                            },
                            "start": {
                              "column": 39,
                              "line": 175
                            }
                          }
                        },
                        "range": [
                          3548,
                          3558
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 175
                          },
                          "start": {
                            "column": 39,
                            "line": 175
                          }
                        }
                      }
                    },
                    "range": [
                      3534,
                      3558
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 175
                      },
                      "start": {
                        "column": 25,
                        "line": 175
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 176
                  },
                  "start": {
                    "column": 24,
                    "line": 175
                  }
                }
              },
              "range": [
                3513,
                3576
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 176
                },
                "start": {
                  "column": 4,
                  "line": 175
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 177
            },
            "start": {
              "column": 23,
              "line": 149
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C7_public",
          "optional": false,
          "range": [
            3004,
            3013
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 149
            },
            "start": {
              "column": 13,
              "line": 149
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          2998,
          3578
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 177
          },
          "start": {
            "column": 7,
            "line": 149
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 177
        },
        "start": {
          "column": 0,
          "line": 149
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          3597,
          4135
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1_private",
              "optional": false,
              "range": [
                3615,
                3625
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 180
                },
                "start": {
                  "column": 16,
                  "line": 180
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
                3625,
                3667
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C6_public",
                        "optional": false,
                        "range": [
                          3649,
                          3658
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 181
                          },
                          "start": {
                            "column": 19,
                            "line": 181
                          }
                        }
                      },
                      "range": [
                        3645,
                        3660
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 181
                        },
                        "start": {
                          "column": 15,
                          "line": 181
                        }
                      }
                    },
                    "range": [
                      3638,
                      3661
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 181
                      },
                      "start": {
                        "column": 8,
                        "line": 181
                      }
                    }
                  }
                ],
                "range": [
                  3628,
                  3667
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 182
                  },
                  "start": {
                    "column": 29,
                    "line": 180
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
                  "line": 182
                },
                "start": {
                  "column": 26,
                  "line": 180
                }
              }
            },
            "range": [
              3603,
              3667
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 182
              },
              "start": {
                "column": 4,
                "line": 180
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1_private",
              "optional": false,
              "range": [
                3685,
                3695
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 184
                },
                "start": {
                  "column": 16,
                  "line": 184
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
                3695,
                3728
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  3721,
                  3728
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 185
                  },
                  "start": {
                    "column": 52,
                    "line": 184
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
                  "name": "m1_c3_p1_arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 184
                      },
                      "start": {
                        "column": 39,
                        "line": 184
                      }
                    },
                    "range": [
                      3708,
                      3719
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C6_public",
                        "optional": false,
                        "range": [
                          3710,
                          3719
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 184
                          },
                          "start": {
                            "column": 41,
                            "line": 184
                          }
                        }
                      },
                      "range": [
                        3710,
                        3719
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 184
                        },
                        "start": {
                          "column": 41,
                          "line": 184
                        }
                      }
                    }
                  },
                  "range": [
                    3696,
                    3719
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 184
                    },
                    "start": {
                      "column": 27,
                      "line": 184
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 185
                },
                "start": {
                  "column": 26,
                  "line": 184
                }
              }
            },
            "range": [
              3673,
              3728
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 185
              },
              "start": {
                "column": 4,
                "line": 184
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2_private",
              "optional": false,
              "range": [
                3746,
                3756
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 187
                },
                "start": {
                  "column": 16,
                  "line": 187
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
                3756,
                3798
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C6_public",
                        "optional": false,
                        "range": [
                          3780,
                          3789
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 188
                          },
                          "start": {
                            "column": 19,
                            "line": 188
                          }
                        }
                      },
                      "range": [
                        3776,
                        3791
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 188
                        },
                        "start": {
                          "column": 15,
                          "line": 188
                        }
                      }
                    },
                    "range": [
                      3769,
                      3792
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 188
                      },
                      "start": {
                        "column": 8,
                        "line": 188
                      }
                    }
                  }
                ],
                "range": [
                  3759,
                  3798
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 189
                  },
                  "start": {
                    "column": 29,
                    "line": 187
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
                  "line": 189
                },
                "start": {
                  "column": 26,
                  "line": 187
                }
              }
            },
            "range": [
              3734,
              3798
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 189
              },
              "start": {
                "column": 4,
                "line": 187
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2_private",
              "optional": false,
              "range": [
                3816,
                3826
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 191
                },
                "start": {
                  "column": 16,
                  "line": 191
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
                3826,
                3859
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  3852,
                  3859
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 192
                  },
                  "start": {
                    "column": 52,
                    "line": 191
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
                  "name": "m1_c3_p2_arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 191
                      },
                      "start": {
                        "column": 39,
                        "line": 191
                      }
                    },
                    "range": [
                      3839,
                      3850
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C6_public",
                        "optional": false,
                        "range": [
                          3841,
                          3850
                        ],
                        "loc": {
                          "end": {
                            "column": 50,
                            "line": 191
                          },
                          "start": {
                            "column": 41,
                            "line": 191
                          }
                        }
                      },
                      "range": [
                        3841,
                        3850
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 191
                        },
                        "start": {
                          "column": 41,
                          "line": 191
                        }
                      }
                    }
                  },
                  "range": [
                    3827,
                    3850
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 191
                    },
                    "start": {
                      "column": 27,
                      "line": 191
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 192
                },
                "start": {
                  "column": 26,
                  "line": 191
                }
              }
            },
            "range": [
              3804,
              3859
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 192
              },
              "start": {
                "column": 4,
                "line": 191
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p3_private",
              "optional": false,
              "range": [
                3877,
                3887
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 194
                },
                "start": {
                  "column": 16,
                  "line": 194
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
                3887,
                3930
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C5_private",
                        "optional": false,
                        "range": [
                          3911,
                          3921
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 195
                          },
                          "start": {
                            "column": 19,
                            "line": 195
                          }
                        }
                      },
                      "range": [
                        3907,
                        3923
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 195
                        },
                        "start": {
                          "column": 15,
                          "line": 195
                        }
                      }
                    },
                    "range": [
                      3900,
                      3924
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
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
                  3890,
                  3930
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 196
                  },
                  "start": {
                    "column": 29,
                    "line": 194
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
                  "line": 196
                },
                "start": {
                  "column": 26,
                  "line": 194
                }
              }
            },
            "range": [
              3865,
              3930
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 196
              },
              "start": {
                "column": 4,
                "line": 194
              }
            }
          },
          {
            "type": "MethodDefinition",
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p3_private",
              "optional": false,
              "range": [
                3948,
                3958
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 198
                },
                "start": {
                  "column": 16,
                  "line": 198
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
                3958,
                3992
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  3985,
                  3992
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 199
                  },
                  "start": {
                    "column": 53,
                    "line": 198
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
                  "name": "m1_c3_p3_arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 198
                      },
                      "start": {
                        "column": 39,
                        "line": 198
                      }
                    },
                    "range": [
                      3971,
                      3983
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C5_private",
                        "optional": false,
                        "range": [
                          3973,
                          3983
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 198
                          },
                          "start": {
                            "column": 41,
                            "line": 198
                          }
                        }
                      },
                      "range": [
                        3973,
                        3983
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 198
                        },
                        "start": {
                          "column": 41,
                          "line": 198
                        }
                      }
                    }
                  },
                  "range": [
                    3959,
                    3983
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 198
                    },
                    "start": {
                      "column": 27,
                      "line": 198
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 199
                },
                "start": {
                  "column": 26,
                  "line": 198
                }
              }
            },
            "range": [
              3936,
              3992
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 199
              },
              "start": {
                "column": 4,
                "line": 198
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
              "name": "p4_public",
              "optional": false,
              "range": [
                4009,
                4018
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 201
                },
                "start": {
                  "column": 15,
                  "line": 201
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
                4018,
                4073
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C5_private",
                        "optional": false,
                        "range": [
                          4054,
                          4064
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 202
                          },
                          "start": {
                            "column": 19,
                            "line": 202
                          }
                        }
                      },
                      "range": [
                        4050,
                        4066
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 202
                        },
                        "start": {
                          "column": 15,
                          "line": 202
                        }
                      }
                    },
                    "range": [
                      4043,
                      4067
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 202
                      },
                      "start": {
                        "column": 8,
                        "line": 202
                      }
                    }
                  }
                ],
                "range": [
                  4033,
                  4073
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 203
                  },
                  "start": {
                    "column": 39,
                    "line": 201
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
                    "column": 38,
                    "line": 201
                  },
                  "start": {
                    "column": 26,
                    "line": 201
                  }
                },
                "range": [
                  4020,
                  4032
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C5_private",
                    "optional": false,
                    "range": [
                      4022,
                      4032
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 201
                      },
                      "start": {
                        "column": 28,
                        "line": 201
                      }
                    }
                  },
                  "range": [
                    4022,
                    4032
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 201
                    },
                    "start": {
                      "column": 28,
                      "line": 201
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 203
                },
                "start": {
                  "column": 24,
                  "line": 201
                }
              }
            },
            "range": [
              3998,
              4073
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 203
              },
              "start": {
                "column": 4,
                "line": 201
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
              "name": "p4_public",
              "optional": false,
              "range": [
                4090,
                4099
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 205
                },
                "start": {
                  "column": 15,
                  "line": 205
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
                4099,
                4133
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  4126,
                  4133
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 206
                  },
                  "start": {
                    "column": 51,
                    "line": 205
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
                  "name": "m1_c3_p4_arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 205
                      },
                      "start": {
                        "column": 37,
                        "line": 205
                      }
                    },
                    "range": [
                      4112,
                      4124
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C5_private",
                        "optional": false,
                        "range": [
                          4114,
                          4124
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 205
                          },
                          "start": {
                            "column": 39,
                            "line": 205
                          }
                        }
                      },
                      "range": [
                        4114,
                        4124
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 205
                        },
                        "start": {
                          "column": 39,
                          "line": 205
                        }
                      }
                    }
                  },
                  "range": [
                    4100,
                    4124
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 205
                    },
                    "start": {
                      "column": 25,
                      "line": 205
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 206
                },
                "start": {
                  "column": 24,
                  "line": 205
                }
              }
            },
            "range": [
              4079,
              4133
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 206
              },
              "start": {
                "column": 4,
                "line": 205
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 207
          },
          "start": {
            "column": 17,
            "line": 179
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C8_private",
        "optional": false,
        "range": [
          3586,
          3596
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 179
          },
          "start": {
            "column": 6,
            "line": 179
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        3580,
        4135
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 207
        },
        "start": {
          "column": 0,
          "line": 179
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 207
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
