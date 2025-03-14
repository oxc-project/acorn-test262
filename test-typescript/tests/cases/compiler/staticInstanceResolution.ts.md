__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    221
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          14,
          221
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getDocCommentText",
              "optional": false,
              "range": [
                28,
                45
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 3
                },
                "start": {
                  "column": 11,
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
                45,
                60
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  52,
                  60
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
                  },
                  "start": {
                    "column": 4,
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
                  "line": 6
                },
                "start": {
                  "column": 28,
                  "line": 3
                }
              }
            },
            "range": [
              21,
              60
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
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
              "decorators": [],
              "name": "getDocCommentText",
              "optional": false,
              "range": [
                73,
                90
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 8
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                90,
                219
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
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "computed": true,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "comments",
                            "optional": false,
                            "range": [
                              126,
                              134
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 10
                              },
                              "start": {
                                "column": 8,
                                "line": 10
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "raw": "0",
                            "value": 0,
                            "range": [
                              135,
                              136
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
                            137
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 10
                            },
                            "start": {
                              "column": 8,
                              "line": 10
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getDocCommentText",
                          "optional": false,
                          "range": [
                            138,
                            155
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 10
                            },
                            "start": {
                              "column": 20,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          126,
                          155
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 10
                          },
                          "start": {
                            "column": 8,
                            "line": 10
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        126,
                        157
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 10
                        },
                        "start": {
                          "column": 8,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      126,
                      158
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 10
                      },
                      "start": {
                        "column": 8,
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
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 11
                              },
                              "start": {
                                "column": 13,
                                "line": 11
                              }
                            },
                            "range": [
                              172,
                              181
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Comment",
                                "optional": false,
                                "range": [
                                  174,
                                  181
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 11
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 11
                                  }
                                }
                              },
                              "range": [
                                174,
                                181
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 11
                                },
                                "start": {
                                  "column": 15,
                                  "line": 11
                                }
                              }
                            }
                          },
                          "range": [
                            171,
                            181
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 11
                            },
                            "start": {
                              "column": 12,
                              "line": 11
                            }
                          }
                        },
                        "init": null,
                        "range": [
                          171,
                          181
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 11
                          },
                          "start": {
                            "column": 12,
                            "line": 11
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      167,
                      182
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
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
                          "name": "c",
                          "optional": false,
                          "range": [
                            191,
                            192
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 12
                            },
                            "start": {
                              "column": 8,
                              "line": 12
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getDocCommentText",
                          "optional": false,
                          "range": [
                            193,
                            210
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 12
                            },
                            "start": {
                              "column": 10,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          191,
                          210
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 12
                          },
                          "start": {
                            "column": 8,
                            "line": 12
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        191,
                        212
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 12
                        },
                        "start": {
                          "column": 8,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      191,
                      213
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 12
                      }
                    }
                  }
                ],
                "range": [
                  116,
                  219
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 13
                  },
                  "start": {
                    "column": 4,
                    "line": 9
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
                  "name": "comments",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 8
                      },
                      "start": {
                        "column": 37,
                        "line": 8
                      }
                    },
                    "range": [
                      99,
                      110
                    ],
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Comment",
                          "optional": false,
                          "range": [
                            101,
                            108
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 8
                            },
                            "start": {
                              "column": 39,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          101,
                          108
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 8
                          },
                          "start": {
                            "column": 39,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        101,
                        110
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 8
                        },
                        "start": {
                          "column": 39,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    91,
                    110
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
              "loc": {
                "end": {
                  "column": 5,
                  "line": 13
                },
                "start": {
                  "column": 28,
                  "line": 8
                }
              }
            },
            "range": [
              66,
              219
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 14,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Comment",
        "optional": false,
        "range": [
          6,
          13
        ],
        "loc": {
          "end": {
            "column": 13,
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
        221
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 14
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
