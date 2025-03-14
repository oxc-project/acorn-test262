mergedDeclarations3.ts
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
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 50,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 12,
            "end": 48,
            "attributes": [],
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 19,
              "end": 48,
              "body": {
                "type": "TSEnumBody",
                "start": 30,
                "end": 48,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 35,
                    "end": 38,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 35,
                      "end": 38,
                      "decorators": [],
                      "name": "Red",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 40,
                    "end": 45,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 45,
                      "decorators": [],
                      "name": "Green",
                      "optional": false
                    }
                  }
                ]
              },
              "const": false,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 24,
                "end": 29,
                "decorators": [],
                "name": "Color",
                "optional": false
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 51,
      "end": 114,
      "body": {
        "type": "TSModuleBlock",
        "start": 60,
        "end": 114,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 63,
            "end": 112,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 70,
              "end": 112,
              "body": {
                "type": "TSModuleBlock",
                "start": 83,
                "end": 112,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 88,
                    "end": 108,
                    "attributes": [],
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 95,
                      "end": 108,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 99,
                          "end": 107,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 99,
                            "end": 103,
                            "decorators": [],
                            "name": "Blue",
                            "optional": false
                          },
                          "init": {
                            "type": "Literal",
                            "start": 106,
                            "end": 107,
                            "raw": "4",
                            "value": 4
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var"
                    },
                    "exportKind": "value",
                    "source": null,
                    "specifiers": []
                  }
                ]
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "start": 77,
                "end": 82,
                "decorators": [],
                "name": "Color",
                "optional": false
              },
              "kind": "module"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 59,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 119,
            "end": 120,
            "decorators": [],
            "name": "p",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 123,
            "end": 135,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 123,
              "end": 130,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 123,
                "end": 124,
                "decorators": [],
                "name": "M",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 125,
                "end": 130,
                "decorators": [],
                "name": "Color",
                "optional": false
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 131,
              "end": 135,
              "decorators": [],
              "name": "Blue",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 144,
      "end": 190,
      "body": {
        "type": "TSModuleBlock",
        "start": 153,
        "end": 190,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 159,
            "end": 188,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 166,
              "end": 188,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 181,
                "end": 188,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 175,
                "end": 178,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "params": []
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 151,
        "end": 152,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 192,
      "end": 253,
      "body": {
        "type": "TSModuleBlock",
        "start": 201,
        "end": 253,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 207,
            "end": 251,
            "body": {
              "type": "TSModuleBlock",
              "start": 218,
              "end": 251,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 228,
                  "end": 245,
                  "attributes": [],
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 235,
                    "end": 245,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 239,
                        "end": 244,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 239,
                          "end": 240,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 243,
                          "end": 244,
                          "raw": "1",
                          "value": 1
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": []
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 214,
              "end": 217,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "module"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 199,
        "end": 200,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 255,
      "end": 322,
      "body": {
        "type": "TSModuleBlock",
        "start": 264,
        "end": 322,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 270,
            "end": 320,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 277,
              "end": 320,
              "body": {
                "type": "TSModuleBlock",
                "start": 288,
                "end": 320,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 298,
                    "end": 314,
                    "attributes": [],
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 305,
                      "end": 314,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 309,
                          "end": 314,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 309,
                            "end": 310,
                            "decorators": [],
                            "name": "y",
                            "optional": false
                          },
                          "init": {
                            "type": "Literal",
                            "start": 313,
                            "end": 314,
                            "raw": "2",
                            "value": 2
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "var"
                    },
                    "exportKind": "value",
                    "source": null,
                    "specifiers": []
                  }
                ]
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "start": 284,
                "end": 287,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "kind": "module"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 262,
        "end": 263,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 324,
      "end": 385,
      "body": {
        "type": "TSModuleBlock",
        "start": 333,
        "end": 385,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 339,
            "end": 383,
            "body": {
              "type": "TSModuleBlock",
              "start": 350,
              "end": 383,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 360,
                  "end": 377,
                  "attributes": [],
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 367,
                    "end": 377,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 371,
                        "end": 376,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 371,
                          "end": 372,
                          "decorators": [],
                          "name": "z",
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 375,
                          "end": 376,
                          "raw": "1",
                          "value": 1
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": []
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 346,
              "end": 349,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "module"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 331,
        "end": 332,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "ExpressionStatement",
      "start": 387,
      "end": 394,
      "expression": {
        "type": "CallExpression",
        "start": 387,
        "end": 394,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 387,
          "end": 392,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 387,
            "end": 388,
            "decorators": [],
            "name": "M",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 389,
            "end": 392,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 401,
      "end": 408,
      "expression": {
        "type": "MemberExpression",
        "start": 401,
        "end": 408,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 401,
          "end": 406,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 401,
            "end": 402,
            "decorators": [],
            "name": "M",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 403,
            "end": 406,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 407,
          "end": 408,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 418,
      "end": 425,
      "expression": {
        "type": "MemberExpression",
        "start": 418,
        "end": 425,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 418,
          "end": 423,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 418,
            "end": 419,
            "decorators": [],
            "name": "M",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 420,
            "end": 423,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 424,
          "end": 425,
          "decorators": [],
          "name": "y",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 432,
      "end": 439,
      "expression": {
        "type": "MemberExpression",
        "start": 432,
        "end": 439,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 432,
          "end": 437,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 432,
            "end": 433,
            "decorators": [],
            "name": "M",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 434,
            "end": 437,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 438,
          "end": 439,
          "decorators": [],
          "name": "z",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
