__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 355,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 49,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 49,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 22,
            "end": 32,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 31,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 25,
                "end": 31
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 37,
            "end": 47,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 46,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 40,
                "end": 46
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
        "end": 15,
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 50,
      "end": 124,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 94,
        "end": 124,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 100,
            "end": 122,
            "argument": {
              "type": "ObjectExpression",
              "start": 107,
              "end": 121,
              "properties": [
                {
                  "type": "Property",
                  "start": 109,
                  "end": 113,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 109,
                    "end": 110,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "start": 112,
                    "end": 113,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 115,
                  "end": 119,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 115,
                    "end": 116,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "start": 118,
                    "end": 119,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 64,
        "decorators": [],
        "name": "point",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 65,
          "end": 74,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 66,
            "end": 74,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 68,
              "end": 74
            }
          }
        },
        {
          "type": "Identifier",
          "start": 76,
          "end": 85,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 77,
            "end": 85,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 79,
              "end": 85
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 86,
        "end": 93,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 88,
          "end": 93,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 88,
            "end": 93,
            "decorators": [],
            "name": "Point",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 125,
      "end": 280,
      "body": {
        "type": "TSModuleBlock",
        "start": 138,
        "end": 280,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 144,
            "end": 176,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 151,
              "end": 176,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 155,
                  "end": 175,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 155,
                    "end": 161,
                    "decorators": [],
                    "name": "origin",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 164,
                    "end": 175,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 170,
                        "end": 171,
                        "raw": "0",
                        "value": 0,
                        "regex": null,
                        "bigint": null
                      },
                      {
                        "type": "Literal",
                        "start": 173,
                        "end": 174,
                        "raw": "0",
                        "value": 0,
                        "regex": null,
                        "bigint": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 164,
                      "end": 169,
                      "decorators": [],
                      "name": "point",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 181,
            "end": 278,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 188,
              "end": 278,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 226,
                "end": 278,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 236,
                    "end": 272,
                    "argument": {
                      "type": "LogicalExpression",
                      "start": 243,
                      "end": 271,
                      "operator": "&&",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 243,
                        "end": 255,
                        "operator": "==",
                        "left": {
                          "type": "MemberExpression",
                          "start": 243,
                          "end": 247,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 243,
                            "end": 245,
                            "decorators": [],
                            "name": "p1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 246,
                            "end": 247,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 251,
                          "end": 255,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 251,
                            "end": 253,
                            "decorators": [],
                            "name": "p2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 254,
                            "end": 255,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "start": 259,
                        "end": 271,
                        "operator": "==",
                        "left": {
                          "type": "MemberExpression",
                          "start": 259,
                          "end": 263,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 259,
                            "end": 261,
                            "decorators": [],
                            "name": "p1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 262,
                            "end": 263,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 267,
                          "end": 271,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 267,
                            "end": 269,
                            "decorators": [],
                            "name": "p2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 270,
                            "end": 271,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
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
                "start": 197,
                "end": 203,
                "decorators": [],
                "name": "equals",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 204,
                  "end": 213,
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 206,
                    "end": 213,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 208,
                      "end": 213,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 208,
                        "end": 213,
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 215,
                  "end": 224,
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 217,
                    "end": 224,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 219,
                      "end": 224,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 219,
                        "end": 224,
                        "decorators": [],
                        "name": "Point",
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
        "start": 132,
        "end": 137,
        "decorators": [],
        "name": "point",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 281,
      "end": 302,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 285,
          "end": 301,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 285,
            "end": 287,
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 290,
            "end": 301,
            "arguments": [
              {
                "type": "Literal",
                "start": 296,
                "end": 297,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 299,
                "end": 300,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 290,
              "end": 295,
              "decorators": [],
              "name": "point",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 303,
      "end": 325,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 307,
          "end": 324,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 307,
            "end": 309,
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 312,
            "end": 324,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 312,
              "end": 317,
              "decorators": [],
              "name": "point",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 318,
              "end": 324,
              "decorators": [],
              "name": "origin",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 326,
      "end": 355,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 330,
          "end": 354,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 330,
            "end": 331,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 334,
            "end": 354,
            "arguments": [
              {
                "type": "Identifier",
                "start": 347,
                "end": 349,
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 351,
                "end": 353,
                "decorators": [],
                "name": "p2",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 334,
              "end": 346,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 334,
                "end": 339,
                "decorators": [],
                "name": "point",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 340,
                "end": 346,
                "decorators": [],
                "name": "equals",
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
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
