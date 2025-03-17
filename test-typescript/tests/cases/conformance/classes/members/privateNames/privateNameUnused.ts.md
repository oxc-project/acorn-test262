__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 462,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 122,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 122,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 122,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 36,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 21,
                "end": 26,
                "name": "used"
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 29,
                "end": 35,
                "raw": "\"used\"",
                "value": "used"
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 41,
              "end": 60,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 41,
                "end": 48,
                "name": "unused"
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "start": 51,
                "end": 59,
                "raw": "\"unused\"",
                "value": "unused"
              }
            },
            {
              "type": "MethodDefinition",
              "start": 65,
              "end": 120,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 65,
                "end": 76,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 77,
                "end": 120,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 80,
                  "end": 120,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 90,
                      "end": 114,
                      "directive": null,
                      "expression": {
                        "type": "CallExpression",
                        "start": 90,
                        "end": 113,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "start": 102,
                            "end": 112,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 102,
                              "end": 106
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 107,
                              "end": 112,
                              "name": "used"
                            }
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 90,
                          "end": 101,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 90,
                            "end": 97,
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 98,
                            "end": 101,
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 124,
      "end": 242,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 131,
        "end": 242,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 140,
          "end": 242,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 146,
              "end": 158,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "start": 146,
                "end": 151,
                "name": "used"
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 151,
                "end": 158,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 154,
                  "end": 158,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 164,
              "end": 177,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "start": 164,
                "end": 171,
                "name": "unused"
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 171,
                "end": 177,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 174,
                  "end": 177,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 183,
              "end": 240,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 183,
                "end": 194,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 195,
                "end": 240,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 198,
                  "end": 240,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 208,
                      "end": 234,
                      "directive": null,
                      "expression": {
                        "type": "CallExpression",
                        "start": 208,
                        "end": 233,
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "start": 220,
                            "end": 232,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 220,
                              "end": 230,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 220,
                                "end": 224
                              },
                              "optional": false,
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 225,
                                "end": 230,
                                "name": "used"
                              }
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 208,
                          "end": 219,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 208,
                            "end": 215,
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 216,
                            "end": 219,
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 137,
          "end": 139,
          "decorators": [],
          "name": "A2",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 244,
      "end": 462,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 251,
        "end": 462,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 260,
          "end": 462,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 266,
              "end": 290,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "start": 270,
                "end": 275,
                "name": "used"
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 275,
                "end": 290,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 278,
                  "end": 290,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 280,
                      "end": 288,
                      "argument": {
                        "type": "Literal",
                        "start": 287,
                        "end": 288,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 296,
              "end": 325,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "start": 300,
                "end": 305,
                "name": "used"
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 305,
                "end": 325,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 321,
                  "end": 325,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 306,
                    "end": 319,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 311,
                      "end": 319,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 313,
                        "end": 319
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 336,
              "end": 362,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "start": 340,
                "end": 347,
                "name": "unused"
              },
              "kind": "get",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 347,
                "end": 362,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 350,
                  "end": 362,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 352,
                      "end": 360,
                      "argument": {
                        "type": "Literal",
                        "start": 359,
                        "end": 360,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 368,
              "end": 399,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "start": 372,
                "end": 379,
                "name": "unused"
              },
              "kind": "set",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 379,
                "end": 399,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 395,
                  "end": 399,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 380,
                    "end": 393,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 385,
                      "end": 393,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 387,
                        "end": 393
                      }
                    }
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 405,
              "end": 460,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 405,
                "end": 416,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 417,
                "end": 460,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 420,
                  "end": 460,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 430,
                      "end": 454,
                      "directive": null,
                      "expression": {
                        "type": "CallExpression",
                        "start": 430,
                        "end": 453,
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "start": 442,
                            "end": 452,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 442,
                              "end": 446
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 447,
                              "end": 452,
                              "name": "used"
                            }
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 430,
                          "end": 441,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 430,
                            "end": 437,
                            "decorators": [],
                            "name": "console",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 438,
                            "end": 441,
                            "decorators": [],
                            "name": "log",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 257,
          "end": 259,
          "decorators": [],
          "name": "A3",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
