__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    168
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
              15,
              96
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
                      41,
                      90
                    ],
                    "attributes": [],
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "body": {
                        "type": "TSInterfaceBody",
                        "range": [
                          60,
                          90
                        ],
                        "body": [
                          {
                            "type": "TSMethodSignature",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "range": [
                                74,
                                77
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 4
                                },
                                "start": {
                                  "column": 12,
                                  "line": 4
                                }
                              }
                            },
                            "kind": "method",
                            "optional": false,
                            "params": [],
                            "readonly": false,
                            "static": false,
                            "range": [
                              74,
                              80
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 4
                              },
                              "start": {
                                "column": 12,
                                "line": 4
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 5
                          },
                          "start": {
                            "column": 27,
                            "line": 3
                          }
                        }
                      },
                      "declare": false,
                      "extends": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "I",
                        "optional": false,
                        "range": [
                          58,
                          59
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 3
                          },
                          "start": {
                            "column": 25,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        48,
                        90
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 5
                        },
                        "start": {
                          "column": 15,
                          "line": 3
                        }
                      }
                    },
                    "exportKind": "type",
                    "source": null,
                    "specifiers": [],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  31,
                  96
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
                  },
                  "start": {
                    "column": 20,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "range": [
                  29,
                  30
                ],
                "decorators": [],
                "name": "b",
                "optional": false,
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 2
                  },
                  "start": {
                    "column": 18,
                    "line": 2
                  }
                }
              },
              "kind": "module",
              "range": [
                22,
                96
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
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
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "range": [
          9,
          98
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          7,
          8
        ],
        "decorators": [],
        "name": "a",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "kind": "module",
      "range": [
        0,
        98
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
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
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                122,
                123
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 10
                },
                "start": {
                  "column": 11,
                  "line": 10
                }
              }
            },
            "importKind": "value",
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  126,
                  127
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
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "range": [
                  128,
                  129
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 10
                  },
                  "start": {
                    "column": 17,
                    "line": 10
                  }
                }
              },
              "range": [
                126,
                129
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 10
                },
                "start": {
                  "column": 15,
                  "line": 10
                }
              }
            },
            "range": [
              115,
              130
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "range": [
              135,
              153
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 11
                        },
                        "start": {
                          "column": 16,
                          "line": 11
                        }
                      },
                      "range": [
                        147,
                        152
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "range": [
                              149,
                              150
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
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "I",
                            "optional": false,
                            "range": [
                              151,
                              152
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 11
                              },
                              "start": {
                                "column": 20,
                                "line": 11
                              }
                            }
                          },
                          "range": [
                            149,
                            152
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 11
                            },
                            "start": {
                              "column": 18,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          149,
                          152
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 11
                          },
                          "start": {
                            "column": 18,
                            "line": 11
                          }
                        }
                      }
                    },
                    "range": [
                      146,
                      152
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 11
                      },
                      "start": {
                        "column": 15,
                        "line": 11
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    146,
                    152
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 11
                    },
                    "start": {
                      "column": 15,
                      "line": 11
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                142,
                153
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 11
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
                "column": 22,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    158,
                    159
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 12
                    },
                    "start": {
                      "column": 4,
                      "line": 12
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "range": [
                    160,
                    163
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 12
                    },
                    "start": {
                      "column": 6,
                      "line": 12
                    }
                  }
                },
                "range": [
                  158,
                  163
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 12
                  },
                  "start": {
                    "column": 4,
                    "line": 12
                  }
                }
              },
              "optional": false,
              "range": [
                158,
                165
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            "range": [
              158,
              166
            ],
            "loc": {
              "end": {
                "column": 12,
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
          109,
          168
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 9,
            "line": 9
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          107,
          108
        ],
        "decorators": [],
        "name": "c",
        "optional": false,
        "loc": {
          "end": {
            "column": 8,
            "line": 9
          },
          "start": {
            "column": 7,
            "line": 9
          }
        }
      },
      "kind": "module",
      "range": [
        100,
        168
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 13
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
