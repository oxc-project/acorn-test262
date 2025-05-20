__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 643,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 53,
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 53,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 23,
            "end": 33,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 24,
              "end": 32,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 26,
                "end": 32
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 38,
            "end": 51,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 42,
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 50,
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 46,
                "end": 50
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "decorators": [],
        "name": "Thing1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 55,
      "end": 106,
      "body": {
        "type": "TSInterfaceBody",
        "start": 72,
        "end": 106,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 78,
            "end": 88,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 87,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 81,
                "end": 87
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 93,
            "end": 104,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 93,
              "end": 95,
              "decorators": [],
              "name": "me",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 103,
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 99,
                "end": 103
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 71,
        "decorators": [],
        "name": "Thing2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 108,
      "end": 138,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 119,
        "decorators": [],
        "name": "Thing3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 122,
        "end": 137,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 122,
            "end": 128,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 122,
              "end": 128,
              "decorators": [],
              "name": "Thing1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 131,
            "end": 137,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 131,
              "end": 137,
              "decorators": [],
              "name": "Thing2",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 139,
      "end": 171,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 144,
        "end": 150,
        "decorators": [],
        "name": "Thing4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 153,
        "end": 170,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 153,
            "end": 159,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 153,
              "end": 159,
              "decorators": [],
              "name": "Thing3",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSArrayType",
            "start": 162,
            "end": 170,
            "elementType": {
              "type": "TSStringKeyword",
              "start": 162,
              "end": 168
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 173,
      "end": 245,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 196,
        "end": 245,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 202,
            "end": 215,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 202,
              "end": 214,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 202,
                "end": 203,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "CallExpression",
                "start": 206,
                "end": 214,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 206,
                  "end": 212,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 206,
                    "end": 207,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 208,
                    "end": 212,
                    "decorators": [],
                    "name": "self",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 220,
            "end": 243,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 220,
              "end": 242,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 220,
                "end": 221,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "CallExpression",
                "start": 224,
                "end": 242,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 224,
                  "end": 240,
                  "computed": false,
                  "object": {
                    "type": "CallExpression",
                    "start": 224,
                    "end": 237,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 224,
                      "end": 235,
                      "computed": false,
                      "object": {
                        "type": "CallExpression",
                        "start": 224,
                        "end": 230,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 224,
                          "end": 228,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 224,
                            "end": 225,
                            "decorators": [],
                            "name": "t",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 226,
                            "end": 228,
                            "decorators": [],
                            "name": "me",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 231,
                        "end": 235,
                        "decorators": [],
                        "name": "self",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 238,
                    "end": 240,
                    "decorators": [],
                    "name": "me",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 182,
        "end": 184,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 185,
          "end": 194,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 186,
            "end": 194,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 188,
              "end": 194,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 188,
                "end": 194,
                "decorators": [],
                "name": "Thing3",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 247,
      "end": 297,
      "body": {
        "type": "TSInterfaceBody",
        "start": 279,
        "end": 297,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 285,
            "end": 295,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 285,
              "end": 286,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 286,
              "end": 294,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 288,
                "end": 294
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 272,
          "end": 278,
          "expression": {
            "type": "Identifier",
            "start": 272,
            "end": 278,
            "decorators": [],
            "name": "Thing4",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 257,
        "end": 263,
        "decorators": [],
        "name": "Thing5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 299,
      "end": 371,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 322,
        "end": 371,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 328,
            "end": 341,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 328,
              "end": 340,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 328,
                "end": 329,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "CallExpression",
                "start": 332,
                "end": 340,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 332,
                  "end": 338,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 332,
                    "end": 333,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 334,
                    "end": 338,
                    "decorators": [],
                    "name": "self",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 346,
            "end": 369,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 346,
              "end": 368,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 346,
                "end": 347,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "CallExpression",
                "start": 350,
                "end": 368,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 350,
                  "end": 366,
                  "computed": false,
                  "object": {
                    "type": "CallExpression",
                    "start": 350,
                    "end": 363,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 350,
                      "end": 361,
                      "computed": false,
                      "object": {
                        "type": "CallExpression",
                        "start": 350,
                        "end": 356,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 350,
                          "end": 354,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 350,
                            "end": 351,
                            "decorators": [],
                            "name": "t",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 352,
                            "end": 354,
                            "decorators": [],
                            "name": "me",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 357,
                        "end": 361,
                        "decorators": [],
                        "name": "self",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 364,
                    "end": 366,
                    "decorators": [],
                    "name": "me",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 308,
        "end": 310,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 311,
          "end": 320,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 312,
            "end": 320,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 314,
              "end": 320,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 314,
                "end": 320,
                "decorators": [],
                "name": "Thing5",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 373,
      "end": 431,
      "body": {
        "type": "TSInterfaceBody",
        "start": 393,
        "end": 431,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 399,
            "end": 429,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 399,
              "end": 405,
              "decorators": [],
              "name": "extend",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 409,
                "end": 417,
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 414,
                  "end": 417,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 416,
                    "end": 417,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 416,
                      "end": 417,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 418,
              "end": 428,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 420,
                "end": 428,
                "types": [
                  {
                    "type": "TSThisType",
                    "start": 420,
                    "end": 424
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 427,
                    "end": 428,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 427,
                      "end": 428,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 405,
              "end": 408,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 406,
                  "end": 407,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 406,
                    "end": 407,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 383,
        "end": 392,
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 433,
      "end": 489,
      "body": {
        "type": "TSInterfaceBody",
        "start": 467,
        "end": 489,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 473,
            "end": 487,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 473,
              "end": 478,
              "decorators": [],
              "name": "title",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 478,
              "end": 486,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 480,
                "end": 486
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 457,
          "end": 466,
          "expression": {
            "type": "Identifier",
            "start": 457,
            "end": 466,
            "decorators": [],
            "name": "Component",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 443,
        "end": 448,
        "decorators": [],
        "name": "Label",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 491,
      "end": 643,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 519,
        "end": 643,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 525,
            "end": 592,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 531,
                "end": 591,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 531,
                  "end": 539,
                  "decorators": [],
                  "name": "extended",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 542,
                  "end": 591,
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "start": 574,
                      "end": 590,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 576,
                          "end": 588,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 576,
                            "end": 579,
                            "decorators": [],
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 581,
                            "end": 588,
                            "raw": "\"hello\"",
                            "value": "hello"
                          }
                        }
                      ]
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 542,
                    "end": 573,
                    "computed": false,
                    "object": {
                      "type": "CallExpression",
                      "start": 542,
                      "end": 566,
                      "arguments": [
                        {
                          "type": "ObjectExpression",
                          "start": 555,
                          "end": 565,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 557,
                              "end": 563,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 557,
                                "end": 559,
                                "decorators": [],
                                "name": "id",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "start": 561,
                                "end": 563,
                                "raw": "67",
                                "value": 67
                              }
                            }
                          ]
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 542,
                        "end": 554,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 542,
                          "end": 547,
                          "decorators": [],
                          "name": "label",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 548,
                          "end": 554,
                          "decorators": [],
                          "name": "extend",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 567,
                      "end": 573,
                      "decorators": [],
                      "name": "extend",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 597,
            "end": 609,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 597,
              "end": 608,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 597,
                "end": 605,
                "decorators": [],
                "name": "extended",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 606,
                "end": 608,
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 621,
            "end": 634,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 621,
              "end": 633,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 621,
                "end": 629,
                "decorators": [],
                "name": "extended",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 630,
                "end": 633,
                "decorators": [],
                "name": "tag",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 500,
        "end": 504,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 505,
          "end": 517,
          "decorators": [],
          "name": "label",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 510,
            "end": 517,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 512,
              "end": 517,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 512,
                "end": 517,
                "decorators": [],
                "name": "Label",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
