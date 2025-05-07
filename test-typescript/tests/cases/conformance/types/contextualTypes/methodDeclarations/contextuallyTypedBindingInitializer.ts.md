__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 690,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 51,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 51,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 21,
            "end": 49,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 25,
              "decorators": [],
              "name": "show",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 48,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 27,
                "end": 48,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 28,
                    "end": 37,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 29,
                      "end": 37,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 31,
                        "end": 37
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 39,
                  "end": 48,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 42,
                    "end": 48
                  }
                },
                "typeParameters": null
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "Show",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 52,
      "end": 101,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 99,
        "end": 101,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 62,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 63,
          "end": 97,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 65,
              "end": 89,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 65,
                "end": 69,
                "decorators": [],
                "name": "show",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "AssignmentPattern",
                "start": 65,
                "end": 89,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 69,
                  "decorators": [],
                  "name": "show",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "ArrowFunctionExpression",
                  "start": 72,
                  "end": 89,
                  "async": false,
                  "body": {
                    "type": "CallExpression",
                    "start": 77,
                    "end": 89,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 77,
                      "end": 87,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 77,
                        "end": 78,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 79,
                        "end": 87,
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 72,
                      "end": 73,
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                },
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 91,
            "end": 97,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 93,
              "end": 97,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 93,
                "end": 97,
                "decorators": [],
                "name": "Show",
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
      "type": "FunctionDeclaration",
      "start": 102,
      "end": 166,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 164,
        "end": 166,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 113,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 114,
          "end": 162,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 116,
              "end": 154,
              "computed": false,
              "key": {
                "type": "Literal",
                "start": 116,
                "end": 122,
                "raw": "\"show\"",
                "value": "show",
                "regex": null,
                "bigint": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "AssignmentPattern",
                "start": 124,
                "end": 154,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 134,
                  "decorators": [],
                  "name": "showRename",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "ArrowFunctionExpression",
                  "start": 137,
                  "end": 154,
                  "async": false,
                  "body": {
                    "type": "CallExpression",
                    "start": 142,
                    "end": 154,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 142,
                      "end": 152,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 142,
                        "end": 143,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 144,
                        "end": 152,
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 137,
                      "end": 138,
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                },
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 156,
            "end": 162,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 158,
              "end": 162,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 158,
                "end": 162,
                "decorators": [],
                "name": "Show",
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
      "type": "FunctionDeclaration",
      "start": 167,
      "end": 233,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 231,
        "end": 233,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 176,
        "end": 178,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 179,
          "end": 229,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 181,
              "end": 221,
              "computed": true,
              "key": {
                "type": "Literal",
                "start": 182,
                "end": 188,
                "raw": "\"show\"",
                "value": "show",
                "regex": null,
                "bigint": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "AssignmentPattern",
                "start": 191,
                "end": 221,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 201,
                  "decorators": [],
                  "name": "showRename",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "ArrowFunctionExpression",
                  "start": 204,
                  "end": 221,
                  "async": false,
                  "body": {
                    "type": "CallExpression",
                    "start": 209,
                    "end": 221,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 209,
                      "end": 219,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 209,
                        "end": 210,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 211,
                        "end": 219,
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 204,
                      "end": 205,
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                },
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 223,
            "end": 229,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 225,
              "end": 229,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 225,
                "end": 229,
                "decorators": [],
                "name": "Show",
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
      "start": 235,
      "end": 272,
      "body": {
        "type": "TSInterfaceBody",
        "start": 252,
        "end": 272,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 258,
            "end": 270,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 258,
              "end": 264,
              "decorators": [],
              "name": "nested",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 264,
              "end": 270,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 266,
                "end": 270,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 266,
                  "end": 270,
                  "decorators": [],
                  "name": "Show",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 245,
        "end": 251,
        "decorators": [],
        "name": "Nested",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 273,
      "end": 337,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 335,
        "end": 337,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 282,
        "end": 284,
        "decorators": [],
        "name": "ff",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 285,
          "end": 333,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 287,
              "end": 323,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 287,
                "end": 293,
                "decorators": [],
                "name": "nested",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "AssignmentPattern",
                "start": 287,
                "end": 323,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 287,
                  "end": 293,
                  "decorators": [],
                  "name": "nested",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "ObjectExpression",
                  "start": 296,
                  "end": 323,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 298,
                      "end": 321,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 298,
                        "end": 302,
                        "decorators": [],
                        "name": "show",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 304,
                        "end": 321,
                        "async": false,
                        "body": {
                          "type": "CallExpression",
                          "start": 309,
                          "end": 321,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 309,
                            "end": 319,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 309,
                              "end": 310,
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 311,
                              "end": 319,
                              "decorators": [],
                              "name": "toString",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 304,
                            "end": 305,
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "returnType": null,
                        "typeParameters": null
                      }
                    }
                  ]
                },
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 325,
            "end": 333,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 327,
              "end": 333,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 327,
                "end": 333,
                "decorators": [],
                "name": "Nested",
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
      "start": 339,
      "end": 387,
      "body": {
        "type": "TSInterfaceBody",
        "start": 356,
        "end": 387,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 362,
            "end": 385,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 362,
              "end": 366,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 366,
              "end": 384,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 368,
                "end": 384,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 369,
                    "end": 375
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 377,
                    "end": 383
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 349,
        "end": 355,
        "decorators": [],
        "name": "Tuples",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 388,
      "end": 437,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 435,
        "end": 437,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 397,
        "end": 398,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 399,
          "end": 433,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 401,
              "end": 423,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 401,
                "end": 405,
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "AssignmentPattern",
                "start": 401,
                "end": 423,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 401,
                  "end": 405,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "ArrayExpression",
                  "start": 408,
                  "end": 423,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 409,
                      "end": 416,
                      "raw": "\"hello\"",
                      "value": "hello",
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "Literal",
                      "start": 418,
                      "end": 422,
                      "raw": "1234",
                      "value": 1234,
                      "regex": null,
                      "bigint": null
                    }
                  ]
                },
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 425,
            "end": 433,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 427,
              "end": 433,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 427,
                "end": 433,
                "decorators": [],
                "name": "Tuples",
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
      "start": 439,
      "end": 489,
      "body": {
        "type": "TSInterfaceBody",
        "start": 461,
        "end": 489,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 467,
            "end": 487,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 467,
              "end": 471,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 471,
              "end": 486,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 473,
                "end": 486,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 473,
                    "end": 478,
                    "literal": {
                      "type": "Literal",
                      "start": 473,
                      "end": 478,
                      "raw": "\"foo\"",
                      "value": "foo",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 481,
                    "end": 486,
                    "literal": {
                      "type": "Literal",
                      "start": 481,
                      "end": 486,
                      "raw": "\"bar\"",
                      "value": "bar",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 449,
        "end": 460,
        "decorators": [],
        "name": "StringUnion",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 490,
      "end": 534,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 532,
        "end": 534,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 499,
        "end": 500,
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 501,
          "end": 530,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 503,
              "end": 515,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 503,
                "end": 507,
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "AssignmentPattern",
                "start": 503,
                "end": 515,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 503,
                  "end": 507,
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 510,
                  "end": 515,
                  "raw": "\"foo\"",
                  "value": "foo",
                  "regex": null,
                  "bigint": null
                },
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 517,
            "end": 530,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 519,
              "end": 530,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 519,
                "end": 530,
                "decorators": [],
                "name": "StringUnion",
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
      "start": 536,
      "end": 603,
      "body": {
        "type": "TSInterfaceBody",
        "start": 561,
        "end": 603,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 567,
            "end": 601,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 567,
              "end": 581,
              "decorators": [],
              "name": "stringIdentity",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 582,
                "end": 591,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 583,
                  "end": 591,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 585,
                    "end": 591
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 592,
              "end": 600,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 594,
                "end": 600
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
        "start": 546,
        "end": 560,
        "decorators": [],
        "name": "StringIdentity",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 604,
      "end": 688,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 608,
          "end": 687,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 608,
            "end": 659,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 610,
                "end": 641,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 610,
                  "end": 624,
                  "decorators": [],
                  "name": "stringIdentity",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 626,
                  "end": 641,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 626,
                    "end": 628,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "start": 631,
                    "end": 641,
                    "async": false,
                    "body": {
                      "type": "Identifier",
                      "start": 638,
                      "end": 641,
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 631,
                        "end": 634,
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  },
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 643,
              "end": 659,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 645,
                "end": 659,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 645,
                  "end": 659,
                  "decorators": [],
                  "name": "StringIdentity",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 662,
            "end": 687,
            "properties": [
              {
                "type": "Property",
                "start": 664,
                "end": 686,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 664,
                  "end": 678,
                  "decorators": [],
                  "name": "stringIdentity",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 680,
                  "end": 686,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 685,
                    "end": 686,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 680,
                      "end": 681,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
