__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 924,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 924,
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
        "end": 924,
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
            "end": 171,
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
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 137,
              "end": 147,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 139,
                "end": 147,
                "typeName": {
                  "type": "Identifier",
                  "start": 139,
                  "end": 147,
                  "decorators": [],
                  "name": "private1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 148,
              "end": 171,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 158,
                  "end": 165,
                  "argument": null
                }
              ]
            },
            "expression": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 176,
            "end": 230,
            "id": {
              "type": "Identifier",
              "start": 185,
              "end": 189,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 192,
              "end": 230,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 202,
                  "end": 224,
                  "argument": {
                    "type": "NewExpression",
                    "start": 209,
                    "end": 223,
                    "callee": {
                      "type": "Identifier",
                      "start": 213,
                      "end": 221,
                      "decorators": [],
                      "name": "private1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  }
                }
              ]
            },
            "expression": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 236,
            "end": 292,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 243,
              "end": 292,
              "id": {
                "type": "Identifier",
                "start": 252,
                "end": 256,
                "decorators": [],
                "name": "foo3",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 258,
                "end": 268,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 260,
                  "end": 268,
                  "typeName": {
                    "type": "Identifier",
                    "start": 260,
                    "end": 268,
                    "decorators": [],
                    "name": "private1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 269,
                "end": 292,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 279,
                    "end": 286,
                    "argument": null
                  }
                ]
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
            "start": 297,
            "end": 358,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 304,
              "end": 358,
              "id": {
                "type": "Identifier",
                "start": 313,
                "end": 317,
                "decorators": [],
                "name": "foo4",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 320,
                "end": 358,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 330,
                    "end": 352,
                    "argument": {
                      "type": "NewExpression",
                      "start": 337,
                      "end": 351,
                      "callee": {
                        "type": "Identifier",
                        "start": 341,
                        "end": 349,
                        "decorators": [],
                        "name": "private1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": []
                    }
                  }
                ]
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
            "start": 364,
            "end": 413,
            "id": {
              "type": "Identifier",
              "start": 373,
              "end": 378,
              "decorators": [],
              "name": "foo11",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 380,
              "end": 389,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 382,
                "end": 389,
                "typeName": {
                  "type": "Identifier",
                  "start": 382,
                  "end": 389,
                  "decorators": [],
                  "name": "public1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 390,
              "end": 413,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 400,
                  "end": 407,
                  "argument": null
                }
              ]
            },
            "expression": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 418,
            "end": 472,
            "id": {
              "type": "Identifier",
              "start": 427,
              "end": 432,
              "decorators": [],
              "name": "foo12",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 435,
              "end": 472,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 445,
                  "end": 466,
                  "argument": {
                    "type": "NewExpression",
                    "start": 452,
                    "end": 465,
                    "callee": {
                      "type": "Identifier",
                      "start": 456,
                      "end": 463,
                      "decorators": [],
                      "name": "public1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  }
                }
              ]
            },
            "expression": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 478,
            "end": 534,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 485,
              "end": 534,
              "id": {
                "type": "Identifier",
                "start": 494,
                "end": 499,
                "decorators": [],
                "name": "foo13",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 501,
                "end": 510,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 503,
                  "end": 510,
                  "typeName": {
                    "type": "Identifier",
                    "start": 503,
                    "end": 510,
                    "decorators": [],
                    "name": "public1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 511,
                "end": 534,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 521,
                    "end": 528,
                    "argument": null
                  }
                ]
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
            "start": 539,
            "end": 600,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 546,
              "end": 600,
              "id": {
                "type": "Identifier",
                "start": 555,
                "end": 560,
                "decorators": [],
                "name": "foo14",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 563,
                "end": 600,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 573,
                    "end": 594,
                    "argument": {
                      "type": "NewExpression",
                      "start": 580,
                      "end": 593,
                      "callee": {
                        "type": "Identifier",
                        "start": 584,
                        "end": 591,
                        "decorators": [],
                        "name": "public1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": []
                    }
                  }
                ]
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
            "start": 606,
            "end": 664,
            "id": {
              "type": "Identifier",
              "start": 613,
              "end": 615,
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 616,
              "end": 664,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 626,
                  "end": 658,
                  "declaration": {
                    "type": "ClassDeclaration",
                    "start": 633,
                    "end": 658,
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "start": 639,
                      "end": 646,
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
                      "start": 647,
                      "end": 658,
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
            "start": 670,
            "end": 723,
            "id": {
              "type": "Identifier",
              "start": 679,
              "end": 685,
              "decorators": [],
              "name": "foo111",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 687,
              "end": 699,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 689,
                "end": 699,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 689,
                  "end": 699,
                  "left": {
                    "type": "Identifier",
                    "start": 689,
                    "end": 691,
                    "decorators": [],
                    "name": "m2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 692,
                    "end": 699,
                    "decorators": [],
                    "name": "public2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 700,
              "end": 723,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 710,
                  "end": 717,
                  "argument": null
                }
              ]
            },
            "expression": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 728,
            "end": 786,
            "id": {
              "type": "Identifier",
              "start": 737,
              "end": 743,
              "decorators": [],
              "name": "foo112",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 746,
              "end": 786,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 756,
                  "end": 780,
                  "argument": {
                    "type": "NewExpression",
                    "start": 763,
                    "end": 779,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 767,
                      "end": 777,
                      "object": {
                        "type": "Identifier",
                        "start": 767,
                        "end": 769,
                        "decorators": [],
                        "name": "m2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 770,
                        "end": 777,
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
                  }
                }
              ]
            },
            "expression": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 792,
            "end": 852,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 799,
              "end": 852,
              "id": {
                "type": "Identifier",
                "start": 808,
                "end": 814,
                "decorators": [],
                "name": "foo113",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 816,
                "end": 828,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 818,
                  "end": 828,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 818,
                    "end": 828,
                    "left": {
                      "type": "Identifier",
                      "start": 818,
                      "end": 820,
                      "decorators": [],
                      "name": "m2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 821,
                      "end": 828,
                      "decorators": [],
                      "name": "public2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "typeArguments": null
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 829,
                "end": 852,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 839,
                    "end": 846,
                    "argument": null
                  }
                ]
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
            "start": 857,
            "end": 922,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 864,
              "end": 922,
              "id": {
                "type": "Identifier",
                "start": 873,
                "end": 879,
                "decorators": [],
                "name": "foo114",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 882,
                "end": 922,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 892,
                    "end": 916,
                    "argument": {
                      "type": "NewExpression",
                      "start": 899,
                      "end": 915,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 903,
                        "end": 913,
                        "object": {
                          "type": "Identifier",
                          "start": 903,
                          "end": 905,
                          "decorators": [],
                          "name": "m2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 906,
                          "end": 913,
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
                    }
                  }
                ]
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
