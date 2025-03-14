__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    132
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'./b'",
        "value": "./b",
        "range": [
          18,
          23
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 1
          },
          "start": {
            "column": 18,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "range": [
              9,
              10
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "range": [
              9,
              10
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "range": [
            9,
            10
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 1
            },
            "start": {
              "column": 9,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        24
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        25,
        132
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
              "name": "a",
              "optional": false,
              "range": [
                38,
                39
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 2
                },
                "start": {
                  "column": 13,
                  "line": 2
                }
              }
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "range": [
                      48,
                      49
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 3
                      },
                      "start": {
                        "column": 4,
                        "line": 3
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
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ClassDeclaration",
                          "abstract": false,
                          "body": {
                            "type": "ClassBody",
                            "range": [
                              75,
                              78
                            ],
                            "body": [],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 4
                              },
                              "start": {
                                "column": 16,
                                "line": 4
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
                              73,
                              74
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 4
                              },
                              "start": {
                                "column": 14,
                                "line": 4
                              }
                            }
                          },
                          "implements": [],
                          "superClass": null,
                          "range": [
                            67,
                            78
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 4
                            },
                            "start": {
                              "column": 8,
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
                              105,
                              108
                            ],
                            "body": [],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 5
                              },
                              "start": {
                                "column": 26,
                                "line": 5
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
                              93,
                              94
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 5
                              },
                              "start": {
                                "column": 14,
                                "line": 5
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
                              103,
                              104
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 5
                              },
                              "start": {
                                "column": 24,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            87,
                            108
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
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
                            "type": "CallExpression",
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "range": [
                                  117,
                                  118
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
                                "type": "Identifier",
                                "decorators": [],
                                "name": "f",
                                "optional": false,
                                "range": [
                                  119,
                                  120
                                ],
                                "loc": {
                                  "end": {
                                    "column": 11,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 10,
                                    "line": 6
                                  }
                                }
                              },
                              "range": [
                                117,
                                120
                              ],
                              "loc": {
                                "end": {
                                  "column": 11,
                                  "line": 6
                                },
                                "start": {
                                  "column": 8,
                                  "line": 6
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              117,
                              122
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 6
                              },
                              "start": {
                                "column": 8,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            117,
                            123
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
                        }
                      ],
                      "range": [
                        57,
                        129
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 7
                        },
                        "start": {
                          "column": 13,
                          "line": 3
                        }
                      }
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      51,
                      129
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 7
                      },
                      "start": {
                        "column": 7,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    48,
                    129
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 7
                    },
                    "start": {
                      "column": 4,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                42,
                131
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 8
                },
                "start": {
                  "column": 17,
                  "line": 2
                }
              }
            },
            "range": [
              38,
              131
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 8
              },
              "start": {
                "column": 13,
                "line": 2
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          32,
          132
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 8
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 2,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 2,
      "line": 8
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    132
  ],
  "body": [
    {
      "type": "ImportDeclaration",
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "raw": "'./a'",
        "value": "./a",
        "range": [
          18,
          23
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 1
          },
          "start": {
            "column": 18,
            "line": 1
          }
        }
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              9,
              10
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              9,
              10
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          },
          "range": [
            9,
            10
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 1
            },
            "start": {
              "column": 9,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        24
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        25,
        132
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
              "name": "b",
              "optional": false,
              "range": [
                38,
                39
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 2
                },
                "start": {
                  "column": 13,
                  "line": 2
                }
              }
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "range": [
                      48,
                      49
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 3
                      },
                      "start": {
                        "column": 4,
                        "line": 3
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
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ClassDeclaration",
                          "abstract": false,
                          "body": {
                            "type": "ClassBody",
                            "range": [
                              75,
                              78
                            ],
                            "body": [],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 4
                              },
                              "start": {
                                "column": 16,
                                "line": 4
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
                              73,
                              74
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 4
                              },
                              "start": {
                                "column": 14,
                                "line": 4
                              }
                            }
                          },
                          "implements": [],
                          "superClass": null,
                          "range": [
                            67,
                            78
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 4
                            },
                            "start": {
                              "column": 8,
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
                              105,
                              108
                            ],
                            "body": [],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 5
                              },
                              "start": {
                                "column": 26,
                                "line": 5
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
                              93,
                              94
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 5
                              },
                              "start": {
                                "column": 14,
                                "line": 5
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
                              103,
                              104
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 5
                              },
                              "start": {
                                "column": 24,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            87,
                            108
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
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
                            "type": "CallExpression",
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "range": [
                                  117,
                                  118
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
                                "type": "Identifier",
                                "decorators": [],
                                "name": "f",
                                "optional": false,
                                "range": [
                                  119,
                                  120
                                ],
                                "loc": {
                                  "end": {
                                    "column": 11,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 10,
                                    "line": 6
                                  }
                                }
                              },
                              "range": [
                                117,
                                120
                              ],
                              "loc": {
                                "end": {
                                  "column": 11,
                                  "line": 6
                                },
                                "start": {
                                  "column": 8,
                                  "line": 6
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              117,
                              122
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 6
                              },
                              "start": {
                                "column": 8,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            117,
                            123
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
                        }
                      ],
                      "range": [
                        57,
                        129
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 7
                        },
                        "start": {
                          "column": 13,
                          "line": 3
                        }
                      }
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      51,
                      129
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 7
                      },
                      "start": {
                        "column": 7,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    48,
                    129
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 7
                    },
                    "start": {
                      "column": 4,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                42,
                131
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 8
                },
                "start": {
                  "column": 17,
                  "line": 2
                }
              }
            },
            "range": [
              38,
              131
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 8
              },
              "start": {
                "column": 13,
                "line": 2
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          32,
          132
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 8
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 2,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 2,
      "line": 8
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
