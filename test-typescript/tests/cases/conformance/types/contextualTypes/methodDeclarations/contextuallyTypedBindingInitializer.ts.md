__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 691,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 51,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "name": "Show",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 51,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 21,
            "end": 49,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 25,
              "name": "show",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 48,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 27,
                "end": 48,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 28,
                    "end": 37,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 29,
                      "end": 37,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 31,
                        "end": 37
                      }
                    },
                    "decorators": [],
                    "optional": false
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
      "type": "FunctionDeclaration",
      "start": 52,
      "end": 101,
      "id": {
        "type": "Identifier",
        "start": 61,
        "end": 62,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 63,
          "end": 97,
          "properties": [
            {
              "type": "Property",
              "start": 65,
              "end": 89,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 65,
                "end": 69,
                "name": "show",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 65,
                "end": 89,
                "left": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 69,
                  "name": "show",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "ArrowFunctionExpression",
                  "start": 72,
                  "end": 89,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 72,
                      "end": 73,
                      "name": "v",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "CallExpression",
                    "start": 77,
                    "end": 89,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 77,
                      "end": 87,
                      "object": {
                        "type": "Identifier",
                        "start": 77,
                        "end": 78,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 79,
                        "end": 87,
                        "name": "toString",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 91,
            "end": 97,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 93,
              "end": 97,
              "typeName": {
                "type": "Identifier",
                "start": 93,
                "end": 97,
                "name": "Show",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 99,
        "end": 101,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 102,
      "end": 166,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 113,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 114,
          "end": 162,
          "properties": [
            {
              "type": "Property",
              "start": 116,
              "end": 154,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Literal",
                "start": 116,
                "end": 122,
                "value": "show",
                "raw": "\"show\""
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 124,
                "end": 154,
                "left": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 134,
                  "name": "showRename",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "ArrowFunctionExpression",
                  "start": 137,
                  "end": 154,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 137,
                      "end": 138,
                      "name": "v",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "CallExpression",
                    "start": 142,
                    "end": 154,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 142,
                      "end": 152,
                      "object": {
                        "type": "Identifier",
                        "start": 142,
                        "end": 143,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 144,
                        "end": 152,
                        "name": "toString",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 156,
            "end": 162,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 158,
              "end": 162,
              "typeName": {
                "type": "Identifier",
                "start": 158,
                "end": 162,
                "name": "Show",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 164,
        "end": 166,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 167,
      "end": 233,
      "id": {
        "type": "Identifier",
        "start": 176,
        "end": 178,
        "name": "f3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 179,
          "end": 229,
          "properties": [
            {
              "type": "Property",
              "start": 181,
              "end": 221,
              "method": false,
              "shorthand": false,
              "computed": true,
              "key": {
                "type": "Literal",
                "start": 182,
                "end": 188,
                "value": "show",
                "raw": "\"show\""
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 191,
                "end": 221,
                "left": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 201,
                  "name": "showRename",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "ArrowFunctionExpression",
                  "start": 204,
                  "end": 221,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 204,
                      "end": 205,
                      "name": "v",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "CallExpression",
                    "start": 209,
                    "end": 221,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 209,
                      "end": 219,
                      "object": {
                        "type": "Identifier",
                        "start": 209,
                        "end": 210,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 211,
                        "end": 219,
                        "name": "toString",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 223,
            "end": 229,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 225,
              "end": 229,
              "typeName": {
                "type": "Identifier",
                "start": 225,
                "end": 229,
                "name": "Show",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 231,
        "end": 233,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 235,
      "end": 272,
      "id": {
        "type": "Identifier",
        "start": 245,
        "end": 251,
        "name": "Nested",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 252,
        "end": 272,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 258,
            "end": 270,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 258,
              "end": 264,
              "name": "nested",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 264,
              "end": 270,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 266,
                "end": 270,
                "typeName": {
                  "type": "Identifier",
                  "start": 266,
                  "end": 270,
                  "name": "Show",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 273,
      "end": 337,
      "id": {
        "type": "Identifier",
        "start": 282,
        "end": 284,
        "name": "ff",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 285,
          "end": 333,
          "properties": [
            {
              "type": "Property",
              "start": 287,
              "end": 323,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 287,
                "end": 293,
                "name": "nested",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 287,
                "end": 323,
                "left": {
                  "type": "Identifier",
                  "start": 287,
                  "end": 293,
                  "name": "nested",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "ObjectExpression",
                  "start": 296,
                  "end": 323,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 298,
                      "end": 321,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 298,
                        "end": 302,
                        "name": "show",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 304,
                        "end": 321,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 304,
                            "end": 305,
                            "name": "v",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "body": {
                          "type": "CallExpression",
                          "start": 309,
                          "end": 321,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 309,
                            "end": 319,
                            "object": {
                              "type": "Identifier",
                              "start": 309,
                              "end": 310,
                              "name": "v",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 311,
                              "end": 319,
                              "name": "toString",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
                        },
                        "typeParameters": null,
                        "returnType": null
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 325,
            "end": 333,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 327,
              "end": 333,
              "typeName": {
                "type": "Identifier",
                "start": 327,
                "end": 333,
                "name": "Nested",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 335,
        "end": 337,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 339,
      "end": 387,
      "id": {
        "type": "Identifier",
        "start": 349,
        "end": 355,
        "name": "Tuples",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 356,
        "end": 387,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 362,
            "end": 385,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 362,
              "end": 366,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
      "start": 388,
      "end": 437,
      "id": {
        "type": "Identifier",
        "start": 397,
        "end": 398,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 399,
          "end": 433,
          "properties": [
            {
              "type": "Property",
              "start": 401,
              "end": 423,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 401,
                "end": 405,
                "name": "prop",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 401,
                "end": 423,
                "left": {
                  "type": "Identifier",
                  "start": 401,
                  "end": 405,
                  "name": "prop",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "ArrayExpression",
                  "start": 408,
                  "end": 423,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 409,
                      "end": 416,
                      "value": "hello",
                      "raw": "\"hello\""
                    },
                    {
                      "type": "Literal",
                      "start": 418,
                      "end": 422,
                      "value": 1234,
                      "raw": "1234"
                    }
                  ]
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 425,
            "end": 433,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 427,
              "end": 433,
              "typeName": {
                "type": "Identifier",
                "start": 427,
                "end": 433,
                "name": "Tuples",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 435,
        "end": 437,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 439,
      "end": 489,
      "id": {
        "type": "Identifier",
        "start": 449,
        "end": 460,
        "name": "StringUnion",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 461,
        "end": 489,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 467,
            "end": 487,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 467,
              "end": 471,
              "name": "prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                      "value": "foo",
                      "raw": "\"foo\""
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
                      "value": "bar",
                      "raw": "\"bar\""
                    }
                  }
                ]
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
      "start": 490,
      "end": 534,
      "id": {
        "type": "Identifier",
        "start": 499,
        "end": 500,
        "name": "h",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 501,
          "end": 530,
          "properties": [
            {
              "type": "Property",
              "start": 503,
              "end": 515,
              "method": false,
              "shorthand": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 503,
                "end": 507,
                "name": "prop",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "AssignmentPattern",
                "start": 503,
                "end": 515,
                "left": {
                  "type": "Identifier",
                  "start": 503,
                  "end": 507,
                  "name": "prop",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 510,
                  "end": 515,
                  "value": "foo",
                  "raw": "\"foo\""
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 517,
            "end": 530,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 519,
              "end": 530,
              "typeName": {
                "type": "Identifier",
                "start": 519,
                "end": 530,
                "name": "StringUnion",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 532,
        "end": 534,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 536,
      "end": 603,
      "id": {
        "type": "Identifier",
        "start": 546,
        "end": 560,
        "name": "StringIdentity",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 561,
        "end": 603,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 567,
            "end": 601,
            "key": {
              "type": "Identifier",
              "start": 567,
              "end": 581,
              "name": "stringIdentity",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 582,
                "end": 591,
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 583,
                  "end": 591,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 585,
                    "end": 591
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
      "start": 604,
      "end": 688,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 608,
          "end": 687,
          "id": {
            "type": "ObjectPattern",
            "start": 608,
            "end": 659,
            "properties": [
              {
                "type": "Property",
                "start": 610,
                "end": 641,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 610,
                  "end": 624,
                  "name": "stringIdentity",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "AssignmentPattern",
                  "start": 626,
                  "end": 641,
                  "left": {
                    "type": "Identifier",
                    "start": 626,
                    "end": 628,
                    "name": "id",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "start": 631,
                    "end": 641,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 631,
                        "end": 634,
                        "name": "arg",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "Identifier",
                      "start": 638,
                      "end": 641,
                      "name": "arg",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 643,
              "end": 659,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 645,
                "end": 659,
                "typeName": {
                  "type": "Identifier",
                  "start": 645,
                  "end": 659,
                  "name": "StringIdentity",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 664,
                  "end": 678,
                  "name": "stringIdentity",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 680,
                  "end": 686,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 680,
                      "end": 681,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Identifier",
                    "start": 685,
                    "end": 686,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
