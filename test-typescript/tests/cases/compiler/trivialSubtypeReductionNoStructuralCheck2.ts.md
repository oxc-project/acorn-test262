__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    223
  ],
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
            "name": "props",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 36,
                  "line": 1
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              },
              "range": [
                19,
                36
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "WizardStepProps",
                  "optional": false,
                  "range": [
                    21,
                    36
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 1
                    },
                    "start": {
                      "column": 21,
                      "line": 1
                    }
                  }
                },
                "range": [
                  21,
                  36
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 1
                  },
                  "start": {
                    "column": 21,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              14,
              36
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            14,
            36
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 1
            },
            "start": {
              "column": 14,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        0,
        37
      ],
      "loc": {
        "end": {
          "column": 37,
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
        38,
        166
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            58,
            166
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "steps",
                "optional": false,
                "range": [
                  66,
                  71
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 3
                  },
                  "start": {
                    "column": 6,
                    "line": 3
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
                  71,
                  164
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "wizard",
                                "optional": false,
                                "range": [
                                  95,
                                  101
                                ],
                                "loc": {
                                  "end": {
                                    "column": 12,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 6,
                                    "line": 5
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "TSAsExpression",
                                "expression": {
                                  "type": "ThisExpression",
                                  "range": [
                                    103,
                                    107
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 18,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 14,
                                      "line": 5
                                    }
                                  }
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Wizard",
                                    "optional": false,
                                    "range": [
                                      111,
                                      117
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 5
                                      },
                                      "start": {
                                        "column": 22,
                                        "line": 5
                                      }
                                    }
                                  },
                                  "range": [
                                    111,
                                    117
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 28,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 5
                                    }
                                  }
                                },
                                "range": [
                                  103,
                                  117
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 5
                                  }
                                }
                              },
                              "range": [
                                95,
                                117
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 5
                                },
                                "start": {
                                  "column": 6,
                                  "line": 5
                                }
                              }
                            },
                            {
                              "type": "SpreadElement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "props",
                                "optional": false,
                                "range": [
                                  128,
                                  133
                                ],
                                "loc": {
                                  "end": {
                                    "column": 14,
                                    "line": 6
                                  },
                                  "start": {
                                    "column": 9,
                                    "line": 6
                                  }
                                }
                              },
                              "range": [
                                125,
                                133
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 6
                                },
                                "start": {
                                  "column": 6,
                                  "line": 6
                                }
                              }
                            }
                          ],
                          "range": [
                            87,
                            140
                          ],
                          "loc": {
                            "end": {
                              "column": 5,
                              "line": 7
                            },
                            "start": {
                              "column": 11,
                              "line": 4
                            }
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "WizardStepProps",
                            "optional": false,
                            "range": [
                              144,
                              159
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
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
                            159
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 7
                            },
                            "start": {
                              "column": 9,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          87,
                          159
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 7
                          },
                          "start": {
                            "column": 11,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        80,
                        160
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 7
                        },
                        "start": {
                          "column": 4,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "range": [
                    74,
                    164
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 8
                    },
                    "start": {
                      "column": 14,
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
                    "column": 3,
                    "line": 8
                  },
                  "start": {
                    "column": 11,
                    "line": 3
                  }
                }
              },
              "range": [
                62,
                164
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 8
                },
                "start": {
                  "column": 2,
                  "line": 3
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
              "column": 20,
              "line": 2
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Wizard",
          "optional": false,
          "range": [
            51,
            57
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 2
            },
            "start": {
              "column": 13,
              "line": 2
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          45,
          166
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
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
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        168,
        223
      ],
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "body": {
          "type": "TSInterfaceBody",
          "range": [
            201,
            223
          ],
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "wizard",
                "optional": false,
                "range": [
                  205,
                  211
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 12
                  },
                  "start": {
                    "column": 2,
                    "line": 12
                  }
                }
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 12
                  },
                  "start": {
                    "column": 9,
                    "line": 12
                  }
                },
                "range": [
                  212,
                  220
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Wizard",
                    "optional": false,
                    "range": [
                      214,
                      220
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 12
                      },
                      "start": {
                        "column": 11,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    214,
                    220
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 12
                    },
                    "start": {
                      "column": 11,
                      "line": 12
                    }
                  }
                }
              },
              "range": [
                205,
                221
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 12
                },
                "start": {
                  "column": 2,
                  "line": 12
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 13
            },
            "start": {
              "column": 33,
              "line": 11
            }
          }
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "WizardStepProps",
          "optional": false,
          "range": [
            185,
            200
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 11
            },
            "start": {
              "column": 17,
              "line": 11
            }
          }
        },
        "range": [
          175,
          223
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 7,
            "line": 11
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 11
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
