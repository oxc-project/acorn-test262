__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 806,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 805,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "m",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 29,
              "name": "private1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 30,
              "end": 37,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 43,
            "end": 71,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 50,
              "end": 71,
              "id": {
                "type": "Identifier",
                "start": 56,
                "end": 63,
                "name": "public1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 64,
                "end": 71,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "FunctionDeclaration",
            "start": 122,
            "end": 160,
            "id": {
              "type": "Identifier",
              "start": 131,
              "end": 135,
              "name": "foo1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 136,
                "end": 151,
                "name": "param",
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
                      "name": "private1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 153,
              "end": 160,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 165,
            "end": 210,
            "id": {
              "type": "Identifier",
              "start": 174,
              "end": 178,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 179,
                "end": 201,
                "left": {
                  "type": "Identifier",
                  "start": 179,
                  "end": 184,
                  "name": "param",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "NewExpression",
                  "start": 187,
                  "end": 201,
                  "callee": {
                    "type": "Identifier",
                    "start": 191,
                    "end": 199,
                    "name": "private1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 203,
              "end": 210,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
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
                "name": "foo3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 237,
                  "end": 253,
                  "name": "param",
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
                        "name": "private1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 255,
                "end": 262,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
                "name": "foo4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 288,
                  "end": 310,
                  "left": {
                    "type": "Identifier",
                    "start": 288,
                    "end": 293,
                    "name": "param",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "NewExpression",
                    "start": 296,
                    "end": 310,
                    "callee": {
                      "type": "Identifier",
                      "start": 300,
                      "end": 308,
                      "name": "private1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 312,
                "end": 319,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "FunctionDeclaration",
            "start": 325,
            "end": 363,
            "id": {
              "type": "Identifier",
              "start": 334,
              "end": 339,
              "name": "foo11",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 340,
                "end": 354,
                "name": "param",
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
                      "name": "public1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 356,
              "end": 363,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 368,
            "end": 413,
            "id": {
              "type": "Identifier",
              "start": 377,
              "end": 382,
              "name": "foo12",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 383,
                "end": 404,
                "left": {
                  "type": "Identifier",
                  "start": 383,
                  "end": 388,
                  "name": "param",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "NewExpression",
                  "start": 391,
                  "end": 404,
                  "callee": {
                    "type": "Identifier",
                    "start": 395,
                    "end": 402,
                    "name": "public1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 406,
              "end": 413,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
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
                "name": "foo13",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 441,
                  "end": 455,
                  "name": "param",
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
                        "name": "public1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 457,
                "end": 464,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
                "name": "foo14",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 491,
                  "end": 512,
                  "left": {
                    "type": "Identifier",
                    "start": 491,
                    "end": 496,
                    "name": "param",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "NewExpression",
                    "start": 499,
                    "end": 512,
                    "callee": {
                      "type": "Identifier",
                      "start": 503,
                      "end": 510,
                      "name": "public1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 514,
                "end": 521,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "TSModuleDeclaration",
            "start": 527,
            "end": 585,
            "id": {
              "type": "Identifier",
              "start": 534,
              "end": 536,
              "name": "m2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "id": {
                      "type": "Identifier",
                      "start": 560,
                      "end": 567,
                      "name": "public2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "superClass": null,
                    "body": {
                      "type": "ClassBody",
                      "start": 568,
                      "end": 579,
                      "body": []
                    },
                    "decorators": [],
                    "typeParameters": null,
                    "implements": [],
                    "abstract": false,
                    "declare": false,
                    "superTypeArguments": null
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
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
              "name": "foo111",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 607,
                "end": 624,
                "name": "param",
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
                        "name": "m2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 617,
                        "end": 624,
                        "name": "public2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 626,
              "end": 633,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 638,
            "end": 687,
            "id": {
              "type": "Identifier",
              "start": 647,
              "end": 653,
              "name": "foo112",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 654,
                "end": 678,
                "left": {
                  "type": "Identifier",
                  "start": 654,
                  "end": 659,
                  "name": "param",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "m2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 669,
                      "end": 676,
                      "name": "public2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [],
                  "typeArguments": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 680,
              "end": 687,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
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
                "name": "foo113",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 716,
                  "end": 733,
                  "name": "param",
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
                          "name": "m2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 726,
                          "end": 733,
                          "name": "public2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 735,
                "end": 742,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
                "name": "foo114",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 770,
                  "end": 794,
                  "left": {
                    "type": "Identifier",
                    "start": 770,
                    "end": 775,
                    "name": "param",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                        "name": "m2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 785,
                        "end": 792,
                        "name": "public2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 796,
                "end": 803,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
