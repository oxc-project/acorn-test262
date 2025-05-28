__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 867,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 50,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 49,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 49,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 49,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 7,
                "end": 49,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 8,
                    "end": 18,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 8,
                      "end": 10,
                      "decorators": [],
                      "name": "p1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 10,
                      "end": 17,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 11,
                        "end": 17
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 19,
                    "end": 30,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 19,
                      "end": 21,
                      "decorators": [],
                      "name": "p2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 22,
                      "end": 29,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 23,
                        "end": 29
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 31,
                    "end": 48,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 31,
                      "end": 33,
                      "decorators": [],
                      "name": "p3",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 34,
                      "end": 47,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 35,
                        "end": 47,
                        "members": [
                          {
                            "type": "TSCallSignatureDeclaration",
                            "start": 36,
                            "end": 46,
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 38,
                              "end": 45,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 39,
                                "end": 45
                              }
                            }
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 52,
      "end": 125,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 66,
        "decorators": [],
        "name": "IFoo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 67,
        "end": 125,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 73,
            "end": 84,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 75,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 83,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 77,
                "end": 83
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 89,
            "end": 103,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 93,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 102,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 96,
                "end": 102
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 108,
            "end": 123,
            "key": {
              "type": "Identifier",
              "start": 108,
              "end": 113,
              "decorators": [],
              "name": "print",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 116,
              "end": 122,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 118,
                "end": 122
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
      "type": "VariableDeclaration",
      "start": 128,
      "end": 142,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 141,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 141,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 135,
              "end": 141,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 137,
                "end": 141,
                "typeName": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 141,
                  "decorators": [],
                  "name": "IFoo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 143,
      "end": 162,
      "expression": {
        "type": "AssignmentExpression",
        "start": 143,
        "end": 161,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 143,
          "end": 146,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 149,
          "end": 161,
          "properties": [
            {
              "type": "Property",
              "start": 151,
              "end": 159,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 151,
                "end": 153,
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 155,
                "end": 159,
                "value": 1234,
                "raw": "1234"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 184,
      "end": 217,
      "expression": {
        "type": "AssignmentExpression",
        "start": 184,
        "end": 216,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 184,
          "end": 187,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 190,
          "end": 216,
          "properties": [
            {
              "type": "Property",
              "start": 192,
              "end": 200,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 192,
                "end": 194,
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 196,
                "end": 200,
                "value": 1234,
                "raw": "1234"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 202,
              "end": 214,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 202,
                "end": 206,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 208,
                "end": 214,
                "value": "test",
                "raw": "\"test\""
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 225,
      "end": 248,
      "expression": {
        "type": "AssignmentExpression",
        "start": 225,
        "end": 247,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 225,
          "end": 228,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 231,
          "end": 247,
          "properties": [
            {
              "type": "Property",
              "start": 233,
              "end": 245,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 233,
                "end": 237,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 239,
                "end": 245,
                "value": "test",
                "raw": "\"test\""
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 281,
      "end": 311,
      "expression": {
        "type": "AssignmentExpression",
        "start": 281,
        "end": 311,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 281,
          "end": 284,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 287,
          "end": 311,
          "properties": [
            {
              "type": "Property",
              "start": 288,
              "end": 296,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 288,
                "end": 290,
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 292,
                "end": 296,
                "value": 1234,
                "raw": "1234"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 298,
              "end": 310,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 298,
                "end": 303,
                "decorators": [],
                "name": "print",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "ArrowFunctionExpression",
                "start": 304,
                "end": 310,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 308,
                  "end": 310,
                  "body": []
                },
                "id": null,
                "generator": false
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 322,
      "end": 352,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 326,
          "end": 351,
          "id": {
            "type": "Identifier",
            "start": 326,
            "end": 327,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 330,
            "end": 351,
            "left": {
              "type": "MemberExpression",
              "start": 330,
              "end": 338,
              "object": {
                "type": "Identifier",
                "start": 330,
                "end": 333,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 334,
                "end": 338,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "operator": "||",
            "right": {
              "type": "Literal",
              "start": 342,
              "end": 351,
              "value": "default",
              "raw": "\"default\""
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 353,
      "end": 394,
      "test": {
        "type": "BinaryExpression",
        "start": 357,
        "end": 380,
        "left": {
          "type": "MemberExpression",
          "start": 357,
          "end": 366,
          "object": {
            "type": "Identifier",
            "start": 357,
            "end": 360,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 361,
            "end": 366,
            "decorators": [],
            "name": "print",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "start": 371,
          "end": 380,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "ExpressionStatement",
        "start": 382,
        "end": 394,
        "expression": {
          "type": "CallExpression",
          "start": 382,
          "end": 393,
          "callee": {
            "type": "MemberExpression",
            "start": 382,
            "end": 391,
            "object": {
              "type": "Identifier",
              "start": 382,
              "end": 385,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 386,
              "end": 391,
              "decorators": [],
              "name": "print",
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
        "directive": null
      },
      "alternate": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 396,
      "end": 427,
      "id": {
        "type": "Identifier",
        "start": 406,
        "end": 408,
        "decorators": [],
        "name": "i1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 409,
        "end": 427,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 411,
            "end": 425,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 411,
              "end": 412,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 412,
              "end": 424,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 414,
                "end": 424,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 417,
                  "end": 424,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 420,
                    "end": 424
                  }
                }
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
      "type": "EmptyStatement",
      "start": 427,
      "end": 428
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 429,
      "end": 461,
      "id": {
        "type": "Identifier",
        "start": 439,
        "end": 441,
        "decorators": [],
        "name": "i2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 442,
        "end": 461,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 444,
            "end": 459,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 444,
              "end": 445,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 446,
              "end": 458,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 448,
                "end": 458,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 451,
                  "end": 458,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 454,
                    "end": 458
                  }
                }
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
      "type": "EmptyStatement",
      "start": 461,
      "end": 462
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 463,
      "end": 490,
      "id": {
        "type": "Identifier",
        "start": 473,
        "end": 475,
        "decorators": [],
        "name": "i3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 476,
        "end": 490,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 478,
            "end": 488,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 478,
              "end": 479,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 479,
              "end": 487,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 481,
                "end": 487
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
      "type": "EmptyStatement",
      "start": 490,
      "end": 491
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 492,
      "end": 520,
      "id": {
        "type": "Identifier",
        "start": 502,
        "end": 504,
        "decorators": [],
        "name": "i4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 505,
        "end": 520,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 507,
            "end": 518,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 507,
              "end": 508,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 509,
              "end": 517,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 511,
                "end": 517
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
      "type": "EmptyStatement",
      "start": 520,
      "end": 521
    },
    {
      "type": "VariableDeclaration",
      "start": 523,
      "end": 542,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 527,
          "end": 541,
          "id": {
            "type": "Identifier",
            "start": 527,
            "end": 536,
            "decorators": [],
            "name": "test1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 532,
              "end": 536,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 534,
                "end": 536,
                "typeName": {
                  "type": "Identifier",
                  "start": 534,
                  "end": 536,
                  "decorators": [],
                  "name": "i1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 539,
            "end": 541,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 543,
      "end": 562,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 547,
          "end": 561,
          "id": {
            "type": "Identifier",
            "start": 547,
            "end": 556,
            "decorators": [],
            "name": "test2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 552,
              "end": 556,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 554,
                "end": 556,
                "typeName": {
                  "type": "Identifier",
                  "start": 554,
                  "end": 556,
                  "decorators": [],
                  "name": "i3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 559,
            "end": 561,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 563,
      "end": 582,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 567,
          "end": 581,
          "id": {
            "type": "Identifier",
            "start": 567,
            "end": 576,
            "decorators": [],
            "name": "test3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 572,
              "end": 576,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 574,
                "end": 576,
                "typeName": {
                  "type": "Identifier",
                  "start": 574,
                  "end": 576,
                  "decorators": [],
                  "name": "i2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 579,
            "end": 581,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 583,
      "end": 602,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 587,
          "end": 601,
          "id": {
            "type": "Identifier",
            "start": 587,
            "end": 596,
            "decorators": [],
            "name": "test4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 592,
              "end": 596,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 594,
                "end": 596,
                "typeName": {
                  "type": "Identifier",
                  "start": 594,
                  "end": 596,
                  "decorators": [],
                  "name": "i4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 599,
            "end": 601,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 603,
      "end": 642,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 607,
          "end": 641,
          "id": {
            "type": "Identifier",
            "start": 607,
            "end": 616,
            "decorators": [],
            "name": "test5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 612,
              "end": 616,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 614,
                "end": 616,
                "typeName": {
                  "type": "Identifier",
                  "start": 614,
                  "end": 616,
                  "decorators": [],
                  "name": "i1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 619,
            "end": 641,
            "properties": [
              {
                "type": "Property",
                "start": 621,
                "end": 639,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 621,
                  "end": 622,
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 624,
                  "end": 639,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 636,
                    "end": 639,
                    "body": []
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 643,
      "end": 668,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 647,
          "end": 667,
          "id": {
            "type": "Identifier",
            "start": 647,
            "end": 656,
            "decorators": [],
            "name": "test6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 652,
              "end": 656,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 654,
                "end": 656,
                "typeName": {
                  "type": "Identifier",
                  "start": 654,
                  "end": 656,
                  "decorators": [],
                  "name": "i3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 659,
            "end": 667,
            "properties": [
              {
                "type": "Property",
                "start": 661,
                "end": 665,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 661,
                  "end": 662,
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 664,
                  "end": 665,
                  "value": 5,
                  "raw": "5"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 669,
      "end": 708,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 673,
          "end": 707,
          "id": {
            "type": "Identifier",
            "start": 673,
            "end": 682,
            "decorators": [],
            "name": "test7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 678,
              "end": 682,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 680,
                "end": 682,
                "typeName": {
                  "type": "Identifier",
                  "start": 680,
                  "end": 682,
                  "decorators": [],
                  "name": "i2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 685,
            "end": 707,
            "properties": [
              {
                "type": "Property",
                "start": 687,
                "end": 705,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 687,
                  "end": 688,
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 690,
                  "end": 705,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 702,
                    "end": 705,
                    "body": []
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 709,
      "end": 720,
      "expression": {
        "type": "AssignmentExpression",
        "start": 709,
        "end": 719,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 709,
          "end": 714,
          "decorators": [],
          "name": "test7",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 717,
          "end": 719,
          "properties": []
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 721,
      "end": 745,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 725,
          "end": 745,
          "id": {
            "type": "Identifier",
            "start": 725,
            "end": 734,
            "decorators": [],
            "name": "test8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 730,
              "end": 734,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 732,
                "end": 734,
                "typeName": {
                  "type": "Identifier",
                  "start": 732,
                  "end": 734,
                  "decorators": [],
                  "name": "i4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 737,
            "end": 745,
            "properties": [
              {
                "type": "Property",
                "start": 739,
                "end": 743,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 739,
                  "end": 740,
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 742,
                  "end": 743,
                  "value": 5,
                  "raw": "5"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 746,
      "end": 757,
      "expression": {
        "type": "AssignmentExpression",
        "start": 746,
        "end": 756,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 746,
          "end": 751,
          "decorators": [],
          "name": "test8",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 754,
          "end": 756,
          "properties": []
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 758,
      "end": 774,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 762,
          "end": 773,
          "id": {
            "type": "Identifier",
            "start": 762,
            "end": 773,
            "decorators": [],
            "name": "test9_1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 769,
              "end": 773,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 771,
                "end": 773,
                "typeName": {
                  "type": "Identifier",
                  "start": 771,
                  "end": 773,
                  "decorators": [],
                  "name": "i2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 775,
      "end": 791,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 779,
          "end": 790,
          "id": {
            "type": "Identifier",
            "start": 779,
            "end": 790,
            "decorators": [],
            "name": "test9_2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 786,
              "end": 790,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 788,
                "end": 790,
                "typeName": {
                  "type": "Identifier",
                  "start": 788,
                  "end": 790,
                  "decorators": [],
                  "name": "i1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 792,
      "end": 810,
      "expression": {
        "type": "AssignmentExpression",
        "start": 792,
        "end": 809,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 792,
          "end": 799,
          "decorators": [],
          "name": "test9_1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 802,
          "end": 809,
          "decorators": [],
          "name": "test9_2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 811,
      "end": 828,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 815,
          "end": 827,
          "id": {
            "type": "Identifier",
            "start": 815,
            "end": 827,
            "decorators": [],
            "name": "test10_1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 823,
              "end": 827,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 825,
                "end": 827,
                "typeName": {
                  "type": "Identifier",
                  "start": 825,
                  "end": 827,
                  "decorators": [],
                  "name": "i1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 829,
      "end": 846,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 833,
          "end": 845,
          "id": {
            "type": "Identifier",
            "start": 833,
            "end": 845,
            "decorators": [],
            "name": "test10_2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 841,
              "end": 845,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 843,
                "end": 845,
                "typeName": {
                  "type": "Identifier",
                  "start": 843,
                  "end": 845,
                  "decorators": [],
                  "name": "i2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 847,
      "end": 867,
      "expression": {
        "type": "AssignmentExpression",
        "start": 847,
        "end": 866,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 847,
          "end": 855,
          "decorators": [],
          "name": "test10_1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 858,
          "end": 866,
          "decorators": [],
          "name": "test10_2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
