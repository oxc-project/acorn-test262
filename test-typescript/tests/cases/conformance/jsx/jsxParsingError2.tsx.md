__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    100
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                40,
                43
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 2
                },
                "start": {
                  "column": 19,
                  "line": 2
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "range": [
                32,
                39
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "range": [
              22,
              43
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 2
              },
              "start": {
                "column": 1,
                "line": 2
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                73,
                97
              ],
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 4
                          },
                          "start": {
                            "column": 4,
                            "line": 4
                          }
                        },
                        "range": [
                          79,
                          87
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            81,
                            87
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
                              "line": 4
                            },
                            "start": {
                              "column": 6,
                              "line": 4
                            }
                          }
                        }
                      },
                      "range": [
                        78,
                        87
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 4
                        },
                        "start": {
                          "column": 3,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 4
                      },
                      "start": {
                        "column": 13,
                        "line": 4
                      }
                    },
                    "range": [
                      88,
                      93
                    ],
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        90,
                        93
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 4
                        },
                        "start": {
                          "column": 15,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    77,
                    94
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 4
                    },
                    "start": {
                      "column": 2,
                      "line": 4
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 2,
                  "line": 5
                },
                "start": {
                  "column": 29,
                  "line": 3
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "range": [
                55,
                72
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
            "range": [
              45,
              97
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 5
              },
              "start": {
                "column": 1,
                "line": 3
              }
            }
          }
        ],
        "range": [
          19,
          99
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 19,
            "line": 1
          }
        }
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          15,
          18
        ],
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "loc": {
          "end": {
            "column": 18,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "kind": "module",
      "range": [
        0,
        99
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 7
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
__ESTREE_TEST__:FAIL:
```json
JSX element 'span' has no corresponding closing tag.
```
__ESTREE_TEST__:FAIL:
```json
Expected corresponding JSX closing tag for 'div'.
```
__ESTREE_TEST__:FAIL:
```json
JSX element 'div' has no corresponding closing tag.
```
__ESTREE_TEST__:FAIL:
```json
Expected corresponding JSX closing tag for 'div'.
```
__ESTREE_TEST__:FAIL:
```json
JSX element 'span' has no corresponding closing tag.
```
