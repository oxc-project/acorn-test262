__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    218
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          11,
          14
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 2
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
        "name": "Cell",
        "optional": false,
        "range": [
          6,
          10
        ],
        "loc": {
          "end": {
            "column": 10,
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
        14
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 2
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
          27,
          51
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
              "name": "isSunk",
              "optional": false,
              "range": [
                33,
                39
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 5
                },
                "start": {
                  "column": 4,
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
                  "column": 19,
                  "line": 5
                },
                "start": {
                  "column": 10,
                  "line": 5
                }
              },
              "range": [
                39,
                48
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  41,
                  48
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 5
                  },
                  "start": {
                    "column": 12,
                    "line": 5
                  }
                }
              }
            },
            "value": null,
            "range": [
              33,
              49
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 11,
            "line": 4
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Ship",
        "optional": false,
        "range": [
          22,
          26
        ],
        "loc": {
          "end": {
            "column": 10,
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
      "range": [
        16,
        51
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          65,
          218
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
              "name": "ships",
              "optional": false,
              "range": [
                71,
                76
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
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
                  "column": 17,
                  "line": 9
                },
                "start": {
                  "column": 9,
                  "line": 9
                }
              },
              "range": [
                76,
                84
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Ship",
                    "optional": false,
                    "range": [
                      78,
                      82
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 9
                      },
                      "start": {
                        "column": 11,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    78,
                    82
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 9
                    },
                    "start": {
                      "column": 11,
                      "line": 9
                    }
                  }
                },
                "range": [
                  78,
                  84
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 9
                  },
                  "start": {
                    "column": 11,
                    "line": 9
                  }
                }
              }
            },
            "value": null,
            "range": [
              71,
              85
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
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
              "name": "cells",
              "optional": false,
              "range": [
                90,
                95
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
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
                  "column": 17,
                  "line": 10
                },
                "start": {
                  "column": 9,
                  "line": 10
                }
              },
              "range": [
                95,
                103
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Cell",
                    "optional": false,
                    "range": [
                      97,
                      101
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 10
                      },
                      "start": {
                        "column": 11,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    97,
                    101
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 10
                    },
                    "start": {
                      "column": 11,
                      "line": 10
                    }
                  }
                },
                "range": [
                  97,
                  103
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
              }
            },
            "value": null,
            "range": [
              90,
              104
            ],
            "loc": {
              "end": {
                "column": 18,
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
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "allShipsSunk",
              "optional": false,
              "range": [
                118,
                130
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 12
                },
                "start": {
                  "column": 12,
                  "line": 12
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
                130,
                212
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
                          "type": "FunctionExpression",
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
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "val",
                                    "optional": false,
                                    "range": [
                                      191,
                                      194
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 59,
                                        "line": 13
                                      },
                                      "start": {
                                        "column": 56,
                                        "line": 13
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "isSunk",
                                    "optional": false,
                                    "range": [
                                      195,
                                      201
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 66,
                                        "line": 13
                                      },
                                      "start": {
                                        "column": 60,
                                        "line": 13
                                      }
                                    }
                                  },
                                  "range": [
                                    191,
                                    201
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 66,
                                      "line": 13
                                    },
                                    "start": {
                                      "column": 56,
                                      "line": 13
                                    }
                                  }
                                },
                                "range": [
                                  184,
                                  202
                                ],
                                "loc": {
                                  "end": {
                                    "column": 67,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 49,
                                    "line": 13
                                  }
                                }
                              }
                            ],
                            "range": [
                              182,
                              204
                            ],
                            "loc": {
                              "end": {
                                "column": 69,
                                "line": 13
                              },
                              "start": {
                                "column": 47,
                                "line": 13
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
                              "name": "val",
                              "optional": false,
                              "range": [
                                177,
                                180
                              ],
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 13
                                },
                                "start": {
                                  "column": 42,
                                  "line": 13
                                }
                              }
                            }
                          ],
                          "range": [
                            167,
                            204
                          ],
                          "loc": {
                            "end": {
                              "column": 69,
                              "line": 13
                            },
                            "start": {
                              "column": 32,
                              "line": 13
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
                              150,
                              154
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 13
                              },
                              "start": {
                                "column": 15,
                                "line": 13
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ships",
                            "optional": false,
                            "range": [
                              155,
                              160
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 13
                              },
                              "start": {
                                "column": 20,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            150,
                            160
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 13
                            },
                            "start": {
                              "column": 15,
                              "line": 13
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "every",
                          "optional": false,
                          "range": [
                            161,
                            166
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 13
                            },
                            "start": {
                              "column": 26,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          150,
                          166
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 13
                          },
                          "start": {
                            "column": 15,
                            "line": 13
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        150,
                        205
                      ],
                      "loc": {
                        "end": {
                          "column": 70,
                          "line": 13
                        },
                        "start": {
                          "column": 15,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      143,
                      206
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  133,
                  212
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 14
                  },
                  "start": {
                    "column": 27,
                    "line": 12
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
                  "line": 14
                },
                "start": {
                  "column": 24,
                  "line": 12
                }
              }
            },
            "range": [
              110,
              212
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 12,
            "line": 8
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Board",
        "optional": false,
        "range": [
          59,
          64
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 8
          },
          "start": {
            "column": 6,
            "line": 8
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        53,
        218
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 15
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
