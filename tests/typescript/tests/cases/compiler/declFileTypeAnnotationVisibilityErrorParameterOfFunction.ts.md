__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 805,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 805,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 805,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 15,
            "end": 37,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 29,
              "decorators": [],
              "name": "private1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 30,
              "end": 37,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 43,
            "end": 71,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 50,
              "end": 71,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 56,
                "end": 63,
                "decorators": [],
                "name": "public1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 64,
                "end": 71,
                "body": []
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "FunctionDeclaration",
            "start": 122,
            "end": 160,
            "id": {
              "type": "Identifier",
              "start": 131,
              "end": 135,
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 136,
                "end": 151,
                "decorators": [],
                "name": "param",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 141,
                  "end": 151,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 143,
                    "end": 151,
                    "typeName": {
                      "type": "Identifier",
                      "start": 143,
                      "end": 151,
                      "decorators": [],
                      "name": "private1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 153,
              "end": 160,
              "body": []
            },
            "expression": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 165,
            "end": 210,
            "id": {
              "type": "Identifier",
              "start": 174,
              "end": 178,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 179,
                "end": 201,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 179,
                  "end": 184,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "NewExpression",
                  "start": 187,
                  "end": 201,
                  "callee": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 199,
                    "decorators": [],
                    "name": "private1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 203,
              "end": 210,
              "body": []
            },
            "expression": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 216,
            "end": 262,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 223,
              "end": 262,
              "id": {
                "type": "Identifier",
                "start": 232,
                "end": 236,
                "decorators": [],
                "name": "foo3",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 237,
                  "end": 253,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 243,
                    "end": 253,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 245,
                      "end": 253,
                      "typeName": {
                        "type": "Identifier",
                        "start": 245,
                        "end": 253,
                        "decorators": [],
                        "name": "private1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 255,
                "end": 262,
                "body": []
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 267,
            "end": 319,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 274,
              "end": 319,
              "id": {
                "type": "Identifier",
                "start": 283,
                "end": 287,
                "decorators": [],
                "name": "foo4",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 288,
                  "end": 310,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 288,
                    "end": 293,
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "NewExpression",
                    "start": 296,
                    "end": 310,
                    "callee": {
                      "type": "Identifier",
                      "start": 300,
                      "end": 308,
                      "decorators": [],
                      "name": "private1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 312,
                "end": 319,
                "body": []
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "FunctionDeclaration",
            "start": 325,
            "end": 363,
            "id": {
              "type": "Identifier",
              "start": 334,
              "end": 339,
              "decorators": [],
              "name": "foo11",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 340,
                "end": 354,
                "decorators": [],
                "name": "param",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 345,
                  "end": 354,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 347,
                    "end": 354,
                    "typeName": {
                      "type": "Identifier",
                      "start": 347,
                      "end": 354,
                      "decorators": [],
                      "name": "public1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 356,
              "end": 363,
              "body": []
            },
            "expression": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 368,
            "end": 413,
            "id": {
              "type": "Identifier",
              "start": 377,
              "end": 382,
              "decorators": [],
              "name": "foo12",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 383,
                "end": 404,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 383,
                  "end": 388,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "NewExpression",
                  "start": 391,
                  "end": 404,
                  "callee": {
                    "type": "Identifier",
                    "start": 395,
                    "end": 402,
                    "decorators": [],
                    "name": "public1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 406,
              "end": 413,
              "body": []
            },
            "expression": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 419,
            "end": 464,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 426,
              "end": 464,
              "id": {
                "type": "Identifier",
                "start": 435,
                "end": 440,
                "decorators": [],
                "name": "foo13",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 441,
                  "end": 455,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 446,
                    "end": 455,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 448,
                      "end": 455,
                      "typeName": {
                        "type": "Identifier",
                        "start": 448,
                        "end": 455,
                        "decorators": [],
                        "name": "public1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 457,
                "end": 464,
                "body": []
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 469,
            "end": 521,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 476,
              "end": 521,
              "id": {
                "type": "Identifier",
                "start": 485,
                "end": 490,
                "decorators": [],
                "name": "foo14",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 491,
                  "end": 512,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 491,
                    "end": 496,
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "NewExpression",
                    "start": 499,
                    "end": 512,
                    "callee": {
                      "type": "Identifier",
                      "start": 503,
                      "end": 510,
                      "decorators": [],
                      "name": "public1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 514,
                "end": 521,
                "body": []
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "TSModuleDeclaration",
            "start": 527,
            "end": 585,
            "id": {
              "type": "Identifier",
              "start": 534,
              "end": 536,
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 537,
              "end": 585,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 547,
                  "end": 579,
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 554,
                    "end": 579,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "start": 560,
                      "end": 567,
                      "decorators": [],
                      "name": "public2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "start": 568,
                      "end": 579,
                      "body": []
                    },
                    "abstract": false,
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": []
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 591,
            "end": 633,
            "id": {
              "type": "Identifier",
              "start": 600,
              "end": 606,
              "decorators": [],
              "name": "foo111",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 607,
                "end": 624,
                "decorators": [],
                "name": "param",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 612,
                  "end": 624,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 614,
                    "end": 624,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 614,
                      "end": 624,
                      "left": {
                        "type": "Identifier",
                        "start": 614,
                        "end": 616,
                        "decorators": [],
                        "name": "m2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 617,
                        "end": 624,
                        "decorators": [],
                        "name": "public2",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 626,
              "end": 633,
              "body": []
            },
            "expression": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 638,
            "end": 687,
            "id": {
              "type": "Identifier",
              "start": 647,
              "end": 653,
              "decorators": [],
              "name": "foo112",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 654,
                "end": 678,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 654,
                  "end": 659,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "NewExpression",
                  "start": 662,
                  "end": 678,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 666,
                    "end": 676,
                    "object": {
                      "type": "Identifier",
                      "start": 666,
                      "end": 668,
                      "decorators": [],
                      "name": "m2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 669,
                      "end": 676,
                      "decorators": [],
                      "name": "public2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": []
                },
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 680,
              "end": 687,
              "body": []
            },
            "expression": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 693,
            "end": 742,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 700,
              "end": 742,
              "id": {
                "type": "Identifier",
                "start": 709,
                "end": 715,
                "decorators": [],
                "name": "foo113",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 716,
                  "end": 733,
                  "decorators": [],
                  "name": "param",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 721,
                    "end": 733,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 723,
                      "end": 733,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 723,
                        "end": 733,
                        "left": {
                          "type": "Identifier",
                          "start": 723,
                          "end": 725,
                          "decorators": [],
                          "name": "m2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 726,
                          "end": 733,
                          "decorators": [],
                          "name": "public2",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 735,
                "end": 742,
                "body": []
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 747,
            "end": 803,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 754,
              "end": 803,
              "id": {
                "type": "Identifier",
                "start": 763,
                "end": 769,
                "decorators": [],
                "name": "foo114",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 770,
                  "end": 794,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 770,
                    "end": 775,
                    "decorators": [],
                    "name": "param",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "NewExpression",
                    "start": 778,
                    "end": 794,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 782,
                      "end": 792,
                      "object": {
                        "type": "Identifier",
                        "start": 782,
                        "end": 784,
                        "decorators": [],
                        "name": "m2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 785,
                        "end": 792,
                        "decorators": [],
                        "name": "public2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": []
                  },
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 796,
                "end": 803,
                "body": []
              },
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
