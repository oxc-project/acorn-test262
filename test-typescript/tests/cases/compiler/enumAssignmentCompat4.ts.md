__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    284
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              18,
              56
            ],
            "attributes": [],
            "declaration": {
              "type": "TSEnumDeclaration",
              "body": {
                "type": "TSEnumBody",
                "range": [
                  37,
                  56
                ],
                "members": [
                  {
                    "type": "TSEnumMember",
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "BAR",
                      "optional": false,
                      "range": [
                        47,
                        50
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 3
                        },
                        "start": {
                          "column": 8,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      47,
                      50
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 3
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
                    "line": 4
                  },
                  "start": {
                    "column": 23,
                    "line": 2
                  }
                }
              },
              "const": false,
              "declare": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyEnum",
                "optional": false,
                "range": [
                  30,
                  36
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 2
                  },
                  "start": {
                    "column": 16,
                    "line": 2
                  }
                }
              },
              "range": [
                25,
                56
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
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
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              61,
              114
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
                    "name": "object2",
                    "optional": false,
                    "range": [
                      72,
                      79
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 5
                      },
                      "start": {
                        "column": 15,
                        "line": 5
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
                          "name": "foo",
                          "optional": false,
                          "range": [
                            92,
                            95
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
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MyEnum",
                            "optional": false,
                            "range": [
                              97,
                              103
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 6
                              },
                              "start": {
                                "column": 13,
                                "line": 6
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "BAR",
                            "optional": false,
                            "range": [
                              104,
                              107
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 6
                              },
                              "start": {
                                "column": 20,
                                "line": 6
                              }
                            }
                          },
                          "range": [
                            97,
                            107
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 6
                            },
                            "start": {
                              "column": 13,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          92,
                          107
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
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
                      82,
                      113
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 7
                      },
                      "start": {
                        "column": 25,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    72,
                    113
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 7
                    },
                    "start": {
                      "column": 15,
                      "line": 5
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                68,
                114
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 7
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 6,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "range": [
          12,
          116
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 12,
            "line": 1
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          10,
          11
        ],
        "decorators": [],
        "name": "M",
        "optional": false,
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 10,
            "line": 1
          }
        }
      },
      "kind": "namespace",
      "range": [
        0,
        116
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
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
              136,
              174
            ],
            "attributes": [],
            "declaration": {
              "type": "TSEnumDeclaration",
              "body": {
                "type": "TSEnumBody",
                "range": [
                  155,
                  174
                ],
                "members": [
                  {
                    "type": "TSEnumMember",
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FOO",
                      "optional": false,
                      "range": [
                        165,
                        168
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 12
                        },
                        "start": {
                          "column": 8,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      165,
                      168
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 12
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
                    "column": 23,
                    "line": 11
                  }
                }
              },
              "const": false,
              "declare": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyEnum",
                "optional": false,
                "range": [
                  148,
                  154
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 11
                  },
                  "start": {
                    "column": 16,
                    "line": 11
                  }
                }
              },
              "range": [
                143,
                174
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 13
                },
                "start": {
                  "column": 11,
                  "line": 11
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          {
            "type": "EmptyStatement",
            "range": [
              174,
              175
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 13
              },
              "start": {
                "column": 5,
                "line": 13
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              180,
              233
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
                    "name": "object1",
                    "optional": false,
                    "range": [
                      191,
                      198
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 14
                      },
                      "start": {
                        "column": 15,
                        "line": 14
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
                          "name": "foo",
                          "optional": false,
                          "range": [
                            211,
                            214
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 15
                            },
                            "start": {
                              "column": 8,
                              "line": 15
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "MyEnum",
                            "optional": false,
                            "range": [
                              216,
                              222
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "FOO",
                            "optional": false,
                            "range": [
                              223,
                              226
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 15
                              },
                              "start": {
                                "column": 20,
                                "line": 15
                              }
                            }
                          },
                          "range": [
                            216,
                            226
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 15
                            },
                            "start": {
                              "column": 13,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          211,
                          226
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
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
                      201,
                      232
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 16
                      },
                      "start": {
                        "column": 25,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    191,
                    232
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 16
                    },
                    "start": {
                      "column": 15,
                      "line": 14
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                187,
                233
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 16
                },
                "start": {
                  "column": 11,
                  "line": 14
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 6,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "range": [
          130,
          235
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 12,
            "line": 10
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          128,
          129
        ],
        "decorators": [],
        "name": "N",
        "optional": false,
        "loc": {
          "end": {
            "column": 11,
            "line": 10
          },
          "start": {
            "column": 10,
            "line": 10
          }
        }
      },
      "kind": "namespace",
      "range": [
        118,
        235
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 10
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
            "name": "broken",
            "optional": false,
            "range": [
              241,
              247
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "range": [
                    256,
                    257
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
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "object1",
                  "optional": false,
                  "range": [
                    258,
                    265
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 20
                    },
                    "start": {
                      "column": 6,
                      "line": 20
                    }
                  }
                },
                "range": [
                  256,
                  265
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 20
                  },
                  "start": {
                    "column": 4,
                    "line": 20
                  }
                }
              },
              {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "range": [
                    271,
                    272
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 21
                    },
                    "start": {
                      "column": 4,
                      "line": 21
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "object2",
                  "optional": false,
                  "range": [
                    273,
                    280
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 21
                    },
                    "start": {
                      "column": 6,
                      "line": 21
                    }
                  }
                },
                "range": [
                  271,
                  280
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 21
                  },
                  "start": {
                    "column": 4,
                    "line": 21
                  }
                }
              }
            ],
            "range": [
              250,
              282
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 22
              },
              "start": {
                "column": 13,
                "line": 19
              }
            }
          },
          "range": [
            241,
            282
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 22
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
        237,
        283
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 23
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
