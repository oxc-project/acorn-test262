__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 448,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 50,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 12,
            "end": 48,
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 19,
              "end": 48,
              "id": {
                "type": "Identifier",
                "start": 24,
                "end": 29,
                "name": "Color",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 35,
                  "end": 38,
                  "id": {
                    "type": "Identifier",
                    "start": 35,
                    "end": 38,
                    "name": "Red",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
                  "computed": false
                },
                {
                  "type": "TSEnumMember",
                  "start": 40,
                  "end": 45,
                  "id": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 45,
                    "name": "Green",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
                  "computed": false
                }
              ],
              "const": false,
              "declare": false,
              "body": {
                "type": "TSEnumBody",
                "start": 30,
                "end": 48,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 35,
                    "end": 38,
                    "id": {
                      "type": "Identifier",
                      "start": 35,
                      "end": 38,
                      "name": "Red",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": null,
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 40,
                    "end": 45,
                    "id": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 45,
                      "name": "Green",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "initializer": null,
                    "computed": false
                  }
                ]
              }
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
      "type": "TSModuleDeclaration",
      "start": 51,
      "end": 114,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 59,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 60,
        "end": 114,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 63,
            "end": 112,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 70,
              "end": 112,
              "id": {
                "type": "Identifier",
                "start": 77,
                "end": 82,
                "name": "Color",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 83,
                "end": 112,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 88,
                    "end": 108,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 95,
                      "end": 108,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 99,
                          "end": 107,
                          "id": {
                            "type": "Identifier",
                            "start": 99,
                            "end": 103,
                            "name": "Blue",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "Literal",
                            "start": 106,
                            "end": 107,
                            "value": 4,
                            "raw": "4"
                          },
                          "definite": false
                        }
                      ],
                      "kind": "var",
                      "declare": false
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
      "type": "VariableDeclaration",
      "start": 115,
      "end": 136,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 119,
          "end": 135,
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 120,
            "name": "p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 123,
            "end": 135,
            "object": {
              "type": "MemberExpression",
              "start": 123,
              "end": 130,
              "object": {
                "type": "Identifier",
                "start": 123,
                "end": 124,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 125,
                "end": 130,
                "name": "Color",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 131,
              "end": 135,
              "name": "Blue",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 144,
      "end": 190,
      "id": {
        "type": "Identifier",
        "start": 151,
        "end": 152,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 153,
        "end": 190,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 159,
            "end": 188,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 166,
              "end": 188,
              "id": {
                "type": "Identifier",
                "start": 175,
                "end": 178,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 181,
                "end": 188,
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
    },
    {
      "type": "TSModuleDeclaration",
      "start": 192,
      "end": 253,
      "id": {
        "type": "Identifier",
        "start": 199,
        "end": 200,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 201,
        "end": 253,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 207,
            "end": 251,
            "id": {
              "type": "Identifier",
              "start": 214,
              "end": 217,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 218,
              "end": 251,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 228,
                  "end": 245,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 235,
                    "end": 245,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 239,
                        "end": 244,
                        "id": {
                          "type": "Identifier",
                          "start": 239,
                          "end": 240,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 243,
                          "end": 244,
                          "value": 1,
                          "raw": "1"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 255,
      "end": 322,
      "id": {
        "type": "Identifier",
        "start": 262,
        "end": 263,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 264,
        "end": 322,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 270,
            "end": 320,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 277,
              "end": 320,
              "id": {
                "type": "Identifier",
                "start": 284,
                "end": 287,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 288,
                "end": 320,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 298,
                    "end": 314,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 305,
                      "end": 314,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 309,
                          "end": 314,
                          "id": {
                            "type": "Identifier",
                            "start": 309,
                            "end": 310,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "Literal",
                            "start": 313,
                            "end": 314,
                            "value": 2,
                            "raw": "2"
                          },
                          "definite": false
                        }
                      ],
                      "kind": "var",
                      "declare": false
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
      "type": "TSModuleDeclaration",
      "start": 324,
      "end": 385,
      "id": {
        "type": "Identifier",
        "start": 331,
        "end": 332,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 333,
        "end": 385,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 339,
            "end": 383,
            "id": {
              "type": "Identifier",
              "start": 346,
              "end": 349,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 350,
              "end": 383,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 360,
                  "end": 377,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 367,
                    "end": 377,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 371,
                        "end": 376,
                        "id": {
                          "type": "Identifier",
                          "start": 371,
                          "end": 372,
                          "name": "z",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 375,
                          "end": 376,
                          "value": 1,
                          "raw": "1"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 387,
      "end": 394,
      "expression": {
        "type": "CallExpression",
        "start": 387,
        "end": 394,
        "callee": {
          "type": "MemberExpression",
          "start": 387,
          "end": 392,
          "object": {
            "type": "Identifier",
            "start": 387,
            "end": 388,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 389,
            "end": 392,
            "name": "foo",
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
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 401,
      "end": 408,
      "expression": {
        "type": "MemberExpression",
        "start": 401,
        "end": 408,
        "object": {
          "type": "MemberExpression",
          "start": 401,
          "end": 406,
          "object": {
            "type": "Identifier",
            "start": 401,
            "end": 402,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 403,
            "end": 406,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 407,
          "end": 408,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 418,
      "end": 425,
      "expression": {
        "type": "MemberExpression",
        "start": 418,
        "end": 425,
        "object": {
          "type": "MemberExpression",
          "start": 418,
          "end": 423,
          "object": {
            "type": "Identifier",
            "start": 418,
            "end": 419,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 420,
            "end": 423,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 424,
          "end": 425,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 432,
      "end": 439,
      "expression": {
        "type": "MemberExpression",
        "start": 432,
        "end": 439,
        "object": {
          "type": "MemberExpression",
          "start": 432,
          "end": 437,
          "object": {
            "type": "Identifier",
            "start": 432,
            "end": 433,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 434,
            "end": 437,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 438,
          "end": 439,
          "name": "z",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
