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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "Show",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "show",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 63,
          "end": 97,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 65,
              "end": 89,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 65,
                "end": 69,
                "decorators": [],
                "name": "show",
                "optional": false,
                "typeAnnotation": null
              },
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
                "right": {
                  "type": "ArrowFunctionExpression",
                  "start": 72,
                  "end": 89,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
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
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 79,
                        "end": 87,
                        "decorators": [],
                        "name": "toString",
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
                  "id": null,
                  "generator": false
                },
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ],
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
                "decorators": [],
                "name": "Show",
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
        "start": 99,
        "end": 101,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 102,
      "end": 166,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 113,
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
          "type": "ObjectPattern",
          "start": 114,
          "end": 162,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 116,
              "end": 154,
              "kind": "init",
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
                "right": {
                  "type": "ArrowFunctionExpression",
                  "start": 137,
                  "end": 154,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
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
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 144,
                        "end": 152,
                        "decorators": [],
                        "name": "toString",
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
                  "id": null,
                  "generator": false
                },
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ],
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
                "decorators": [],
                "name": "Show",
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
        "start": 164,
        "end": 166,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 167,
      "end": 233,
      "id": {
        "type": "Identifier",
        "start": 176,
        "end": 178,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 179,
          "end": 229,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 181,
              "end": 221,
              "kind": "init",
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
                "right": {
                  "type": "ArrowFunctionExpression",
                  "start": 204,
                  "end": 221,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
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
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 211,
                        "end": 219,
                        "decorators": [],
                        "name": "toString",
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
                  "id": null,
                  "generator": false
                },
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": true,
              "optional": false
            }
          ],
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
                "decorators": [],
                "name": "Show",
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
        "start": 231,
        "end": 233,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 235,
      "end": 272,
      "id": {
        "type": "Identifier",
        "start": 245,
        "end": 251,
        "decorators": [],
        "name": "Nested",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "nested",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "Show",
                  "optional": false,
                  "typeAnnotation": null
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
        "decorators": [],
        "name": "ff",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 285,
          "end": 333,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 287,
              "end": 323,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 287,
                "end": 293,
                "decorators": [],
                "name": "nested",
                "optional": false,
                "typeAnnotation": null
              },
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
                "right": {
                  "type": "ObjectExpression",
                  "start": 296,
                  "end": 323,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 298,
                      "end": 321,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 298,
                        "end": 302,
                        "decorators": [],
                        "name": "show",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 304,
                        "end": 321,
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
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
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 311,
                              "end": 319,
                              "decorators": [],
                              "name": "toString",
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
                        "id": null,
                        "generator": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ],
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
                "decorators": [],
                "name": "Nested",
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
        "start": 335,
        "end": 337,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 339,
      "end": 387,
      "id": {
        "type": "Identifier",
        "start": 349,
        "end": 355,
        "decorators": [],
        "name": "Tuples",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 399,
          "end": 433,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 401,
              "end": 423,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 401,
                "end": 405,
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null
              },
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
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ],
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
                "decorators": [],
                "name": "Tuples",
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
        "start": 435,
        "end": 437,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 439,
      "end": 489,
      "id": {
        "type": "Identifier",
        "start": 449,
        "end": 460,
        "decorators": [],
        "name": "StringUnion",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 501,
          "end": 530,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 503,
              "end": 515,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 503,
                "end": 507,
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null
              },
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
                "right": {
                  "type": "Literal",
                  "start": 510,
                  "end": 515,
                  "value": "foo",
                  "raw": "\"foo\""
                },
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ],
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
                "decorators": [],
                "name": "StringUnion",
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
        "start": 532,
        "end": 534,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 536,
      "end": 603,
      "id": {
        "type": "Identifier",
        "start": 546,
        "end": 560,
        "decorators": [],
        "name": "StringIdentity",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "stringIdentity",
              "optional": false,
              "typeAnnotation": null
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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 608,
          "end": 687,
          "id": {
            "type": "ObjectPattern",
            "start": 608,
            "end": 659,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 610,
                "end": 641,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 610,
                  "end": 624,
                  "decorators": [],
                  "name": "stringIdentity",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                  "right": {
                    "type": "ArrowFunctionExpression",
                    "start": 631,
                    "end": 641,
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
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
                    "body": {
                      "type": "Identifier",
                      "start": 638,
                      "end": 641,
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "id": null,
                    "generator": false
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ],
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
                  "decorators": [],
                  "name": "StringIdentity",
                  "optional": false,
                  "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 664,
                  "end": 678,
                  "decorators": [],
                  "name": "stringIdentity",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 680,
                  "end": 686,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
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
                  "body": {
                    "type": "Identifier",
                    "start": 685,
                    "end": 686,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
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
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
