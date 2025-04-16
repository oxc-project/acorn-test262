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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "name": "Point",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 49,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 22,
            "end": 32,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 31,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 25,
                "end": 31
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 37,
            "end": 47,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 46,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 40,
                "end": 46
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
      "start": 50,
      "end": 124,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 64,
        "name": "point",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 65,
          "end": 74,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 66,
            "end": 74,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 68,
              "end": 74
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 76,
          "end": 85,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 77,
            "end": 85,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 79,
              "end": 85
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 109,
                    "end": 110,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 112,
                    "end": 113,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 115,
                  "end": 119,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 115,
                    "end": 116,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 118,
                    "end": 119,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 86,
        "end": 93,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 88,
          "end": 93,
          "typeName": {
            "type": "Identifier",
            "start": 88,
            "end": 93,
            "name": "Point",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 125,
      "end": 280,
      "id": {
        "type": "Identifier",
        "start": 132,
        "end": 137,
        "name": "point",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 138,
        "end": 280,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 144,
            "end": 176,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 151,
              "end": 176,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 155,
                  "end": 175,
                  "id": {
                    "type": "Identifier",
                    "start": 155,
                    "end": 161,
                    "name": "origin",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "CallExpression",
                    "start": 164,
                    "end": 175,
                    "callee": {
                      "type": "Identifier",
                      "start": 164,
                      "end": 169,
                      "name": "point",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 170,
                        "end": 171,
                        "value": 0,
                        "raw": "0"
                      },
                      {
                        "type": "Literal",
                        "start": 173,
                        "end": 174,
                        "value": 0,
                        "raw": "0"
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 181,
            "end": 278,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 188,
              "end": 278,
              "id": {
                "type": "Identifier",
                "start": 197,
                "end": 203,
                "name": "equals",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 204,
                  "end": 213,
                  "name": "p1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 206,
                    "end": 213,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 208,
                      "end": 213,
                      "typeName": {
                        "type": "Identifier",
                        "start": 208,
                        "end": 213,
                        "name": "Point",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 215,
                  "end": 224,
                  "name": "p2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 217,
                    "end": 224,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 219,
                      "end": 224,
                      "typeName": {
                        "type": "Identifier",
                        "start": 219,
                        "end": 224,
                        "name": "Point",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "left": {
                        "type": "BinaryExpression",
                        "start": 243,
                        "end": 255,
                        "left": {
                          "type": "MemberExpression",
                          "start": 243,
                          "end": 247,
                          "object": {
                            "type": "Identifier",
                            "start": 243,
                            "end": 245,
                            "name": "p1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 246,
                            "end": 247,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "operator": "==",
                        "right": {
                          "type": "MemberExpression",
                          "start": 251,
                          "end": 255,
                          "object": {
                            "type": "Identifier",
                            "start": 251,
                            "end": 253,
                            "name": "p2",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 254,
                            "end": 255,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      },
                      "operator": "&&",
                      "right": {
                        "type": "BinaryExpression",
                        "start": 259,
                        "end": 271,
                        "left": {
                          "type": "MemberExpression",
                          "start": 259,
                          "end": 263,
                          "object": {
                            "type": "Identifier",
                            "start": 259,
                            "end": 261,
                            "name": "p1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 262,
                            "end": 263,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "operator": "==",
                        "right": {
                          "type": "MemberExpression",
                          "start": 267,
                          "end": 271,
                          "object": {
                            "type": "Identifier",
                            "start": 267,
                            "end": 269,
                            "name": "p2",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 270,
                            "end": 271,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      }
                    }
                  }
                ]
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
      "type": "VariableDeclaration",
      "start": 281,
      "end": 302,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 285,
          "end": 301,
          "id": {
            "type": "Identifier",
            "start": 285,
            "end": 287,
            "name": "p1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 290,
            "end": 301,
            "callee": {
              "type": "Identifier",
              "start": 290,
              "end": 295,
              "name": "point",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 296,
                "end": 297,
                "value": 0,
                "raw": "0"
              },
              {
                "type": "Literal",
                "start": 299,
                "end": 300,
                "value": 0,
                "raw": "0"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 307,
            "end": 309,
            "name": "p2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 312,
            "end": 324,
            "object": {
              "type": "Identifier",
              "start": 312,
              "end": 317,
              "name": "point",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 318,
              "end": 324,
              "name": "origin",
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
      "type": "VariableDeclaration",
      "start": 326,
      "end": 355,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 330,
          "end": 354,
          "id": {
            "type": "Identifier",
            "start": 330,
            "end": 331,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 334,
            "end": 354,
            "callee": {
              "type": "MemberExpression",
              "start": 334,
              "end": 346,
              "object": {
                "type": "Identifier",
                "start": 334,
                "end": 339,
                "name": "point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 340,
                "end": 346,
                "name": "equals",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 347,
                "end": 349,
                "name": "p1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 351,
                "end": 353,
                "name": "p2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
