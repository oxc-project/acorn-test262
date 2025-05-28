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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "decorators": [],
        "name": "Thing1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 53,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 23,
            "end": 33,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 24,
              "end": 32,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 26,
                "end": 32
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 38,
            "end": 51,
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 42,
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 55,
      "end": 106,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 71,
        "decorators": [],
        "name": "Thing2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 72,
        "end": 106,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 78,
            "end": 88,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 87,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 81,
                "end": 87
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 93,
            "end": 104,
            "key": {
              "type": "Identifier",
              "start": 93,
              "end": 95,
              "decorators": [],
              "name": "me",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 108,
      "end": 138,
      "id": {
        "type": "Identifier",
        "start": 113,
        "end": 119,
        "decorators": [],
        "name": "Thing3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 122,
        "end": 137,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 122,
            "end": 128,
            "typeName": {
              "type": "Identifier",
              "start": 122,
              "end": 128,
              "decorators": [],
              "name": "Thing1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 131,
            "end": 137,
            "typeName": {
              "type": "Identifier",
              "start": 131,
              "end": 137,
              "decorators": [],
              "name": "Thing2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 139,
      "end": 171,
      "id": {
        "type": "Identifier",
        "start": 144,
        "end": 150,
        "decorators": [],
        "name": "Thing4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 153,
        "end": 170,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 153,
            "end": 159,
            "typeName": {
              "type": "Identifier",
              "start": 153,
              "end": 159,
              "decorators": [],
              "name": "Thing3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
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
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 173,
      "end": 245,
      "id": {
        "type": "Identifier",
        "start": 182,
        "end": 184,
        "decorators": [],
        "name": "f1",
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
              "typeName": {
                "type": "Identifier",
                "start": 188,
                "end": 194,
                "decorators": [],
                "name": "Thing3",
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
        "start": 196,
        "end": 245,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 202,
            "end": 215,
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
                "callee": {
                  "type": "MemberExpression",
                  "start": 206,
                  "end": 212,
                  "object": {
                    "type": "Identifier",
                    "start": 206,
                    "end": 207,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 208,
                    "end": 212,
                    "decorators": [],
                    "name": "self",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 220,
            "end": 243,
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
                "callee": {
                  "type": "MemberExpression",
                  "start": 224,
                  "end": 240,
                  "object": {
                    "type": "CallExpression",
                    "start": 224,
                    "end": 237,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 224,
                      "end": 235,
                      "object": {
                        "type": "CallExpression",
                        "start": 224,
                        "end": 230,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 224,
                          "end": 228,
                          "object": {
                            "type": "Identifier",
                            "start": 224,
                            "end": 225,
                            "decorators": [],
                            "name": "t",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 226,
                            "end": 228,
                            "decorators": [],
                            "name": "me",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 231,
                        "end": 235,
                        "decorators": [],
                        "name": "self",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 238,
                    "end": 240,
                    "decorators": [],
                    "name": "me",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 247,
      "end": 297,
      "id": {
        "type": "Identifier",
        "start": 257,
        "end": 263,
        "decorators": [],
        "name": "Thing5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 279,
        "end": 297,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 285,
            "end": 295,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 285,
              "end": 286,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 286,
              "end": 294,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 288,
                "end": 294
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 299,
      "end": 371,
      "id": {
        "type": "Identifier",
        "start": 308,
        "end": 310,
        "decorators": [],
        "name": "f2",
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
              "typeName": {
                "type": "Identifier",
                "start": 314,
                "end": 320,
                "decorators": [],
                "name": "Thing5",
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
        "start": 322,
        "end": 371,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 328,
            "end": 341,
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
                "callee": {
                  "type": "MemberExpression",
                  "start": 332,
                  "end": 338,
                  "object": {
                    "type": "Identifier",
                    "start": 332,
                    "end": 333,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 334,
                    "end": 338,
                    "decorators": [],
                    "name": "self",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 346,
            "end": 369,
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
                "callee": {
                  "type": "MemberExpression",
                  "start": 350,
                  "end": 366,
                  "object": {
                    "type": "CallExpression",
                    "start": 350,
                    "end": 363,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 350,
                      "end": 361,
                      "object": {
                        "type": "CallExpression",
                        "start": 350,
                        "end": 356,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 350,
                          "end": 354,
                          "object": {
                            "type": "Identifier",
                            "start": 350,
                            "end": 351,
                            "decorators": [],
                            "name": "t",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 352,
                            "end": 354,
                            "decorators": [],
                            "name": "me",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 357,
                        "end": 361,
                        "decorators": [],
                        "name": "self",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 364,
                    "end": 366,
                    "decorators": [],
                    "name": "me",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 373,
      "end": 431,
      "id": {
        "type": "Identifier",
        "start": 383,
        "end": 392,
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 393,
        "end": 431,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 399,
            "end": 429,
            "key": {
              "type": "Identifier",
              "start": 399,
              "end": 405,
              "decorators": [],
              "name": "extend",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 405,
              "end": 408,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 406,
                  "end": 407,
                  "name": {
                    "type": "Identifier",
                    "start": 406,
                    "end": 407,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 416,
                      "end": 417,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 427,
                      "end": 428,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 433,
      "end": 489,
      "id": {
        "type": "Identifier",
        "start": 443,
        "end": 448,
        "decorators": [],
        "name": "Label",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 467,
        "end": 489,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 473,
            "end": 487,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 473,
              "end": 478,
              "decorators": [],
              "name": "title",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 478,
              "end": 486,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 480,
                "end": 486
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 491,
      "end": 643,
      "id": {
        "type": "Identifier",
        "start": 500,
        "end": 504,
        "decorators": [],
        "name": "test",
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
              "typeName": {
                "type": "Identifier",
                "start": 512,
                "end": 517,
                "decorators": [],
                "name": "Label",
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
        "start": 519,
        "end": 643,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 525,
            "end": 592,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 531,
                "end": 591,
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
                  "callee": {
                    "type": "MemberExpression",
                    "start": 542,
                    "end": 573,
                    "object": {
                      "type": "CallExpression",
                      "start": 542,
                      "end": 566,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 542,
                        "end": 554,
                        "object": {
                          "type": "Identifier",
                          "start": 542,
                          "end": 547,
                          "decorators": [],
                          "name": "label",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 548,
                          "end": 554,
                          "decorators": [],
                          "name": "extend",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
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
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 557,
                                "end": 559,
                                "decorators": [],
                                "name": "id",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Literal",
                                "start": 561,
                                "end": 563,
                                "value": 67,
                                "raw": "67"
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
                        }
                      ],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 567,
                      "end": 573,
                      "decorators": [],
                      "name": "extend",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
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
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 576,
                            "end": 579,
                            "decorators": [],
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 581,
                            "end": 588,
                            "value": "hello",
                            "raw": "\"hello\""
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 597,
            "end": 609,
            "expression": {
              "type": "MemberExpression",
              "start": 597,
              "end": 608,
              "object": {
                "type": "Identifier",
                "start": 597,
                "end": 605,
                "decorators": [],
                "name": "extended",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 606,
                "end": 608,
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 621,
            "end": 634,
            "expression": {
              "type": "MemberExpression",
              "start": 621,
              "end": 633,
              "object": {
                "type": "Identifier",
                "start": 621,
                "end": 629,
                "decorators": [],
                "name": "extended",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 630,
                "end": 633,
                "decorators": [],
                "name": "tag",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
