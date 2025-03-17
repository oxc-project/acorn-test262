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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 122,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 15,
          "end": 122,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 21,
              "end": 36,
              "static": false,
              "computed": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 21,
                "end": 26,
                "name": "used"
              },
              "value": {
                "type": "Literal",
                "start": 29,
                "end": 35,
                "value": "used",
                "raw": "\"used\""
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 41,
              "end": 60,
              "static": false,
              "computed": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 41,
                "end": 48,
                "name": "unused"
              },
              "value": {
                "type": "Literal",
                "start": 51,
                "end": 59,
                "value": "unused",
                "raw": "\"unused\""
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 65,
              "end": 120,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 65,
                "end": 76,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 77,
                "end": 120,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 80,
                  "end": 120,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 90,
                      "end": 114,
                      "expression": {
                        "type": "CallExpression",
                        "start": 90,
                        "end": 113,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 90,
                          "end": 101,
                          "object": {
                            "type": "Identifier",
                            "start": 90,
                            "end": 97,
                            "name": "console",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 98,
                            "end": 101,
                            "name": "log",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "start": 102,
                            "end": 112,
                            "object": {
                              "type": "ThisExpression",
                              "start": 102,
                              "end": 106
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 107,
                              "end": 112,
                              "name": "used"
                            },
                            "computed": false,
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "directive": null
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 124,
      "end": 242,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 131,
        "end": 242,
        "id": {
          "type": "Identifier",
          "start": 137,
          "end": 139,
          "name": "A2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 140,
          "end": 242,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 146,
              "end": 158,
              "static": false,
              "computed": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 146,
                "end": 151,
                "name": "used"
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 151,
                "end": 158,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 154,
                  "end": 158,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 164,
              "end": 177,
              "static": false,
              "computed": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 164,
                "end": 171,
                "name": "unused"
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 171,
                "end": 177,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 174,
                  "end": 177,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 183,
              "end": 240,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 183,
                "end": 194,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 195,
                "end": 240,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 198,
                  "end": 240,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 208,
                      "end": 234,
                      "expression": {
                        "type": "CallExpression",
                        "start": 208,
                        "end": 233,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 208,
                          "end": 219,
                          "object": {
                            "type": "Identifier",
                            "start": 208,
                            "end": 215,
                            "name": "console",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 216,
                            "end": 219,
                            "name": "log",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "CallExpression",
                            "start": 220,
                            "end": 232,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 220,
                              "end": 230,
                              "object": {
                                "type": "ThisExpression",
                                "start": 220,
                                "end": 224
                              },
                              "property": {
                                "type": "PrivateIdentifier",
                                "start": 225,
                                "end": 230,
                                "name": "used"
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [],
                            "optional": false,
                            "typeArguments": null
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "directive": null
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 244,
      "end": 462,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 251,
        "end": 462,
        "id": {
          "type": "Identifier",
          "start": 257,
          "end": 259,
          "name": "A3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 260,
          "end": 462,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 266,
              "end": 290,
              "static": false,
              "computed": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 270,
                "end": 275,
                "name": "used"
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 275,
                "end": 290,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                        "value": 0,
                        "raw": "0"
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 296,
              "end": 325,
              "static": false,
              "computed": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 300,
                "end": 305,
                "name": "used"
              },
              "kind": "set",
              "value": {
                "type": "FunctionExpression",
                "start": 305,
                "end": 325,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 306,
                    "end": 319,
                    "name": "value",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 311,
                      "end": 319,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 313,
                        "end": 319
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 321,
                  "end": 325,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 336,
              "end": 362,
              "static": false,
              "computed": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 340,
                "end": 347,
                "name": "unused"
              },
              "kind": "get",
              "value": {
                "type": "FunctionExpression",
                "start": 347,
                "end": 362,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                        "value": 0,
                        "raw": "0"
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 368,
              "end": 399,
              "static": false,
              "computed": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 372,
                "end": 379,
                "name": "unused"
              },
              "kind": "set",
              "value": {
                "type": "FunctionExpression",
                "start": 379,
                "end": 399,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 380,
                    "end": 393,
                    "name": "value",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 385,
                      "end": 393,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 387,
                        "end": 393
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 395,
                  "end": 399,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 405,
              "end": 460,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 405,
                "end": 416,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 417,
                "end": 460,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 420,
                  "end": 460,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 430,
                      "end": 454,
                      "expression": {
                        "type": "CallExpression",
                        "start": 430,
                        "end": 453,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 430,
                          "end": 441,
                          "object": {
                            "type": "Identifier",
                            "start": 430,
                            "end": 437,
                            "name": "console",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 438,
                            "end": 441,
                            "name": "log",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "start": 442,
                            "end": 452,
                            "object": {
                              "type": "ThisExpression",
                              "start": 442,
                              "end": 446
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 447,
                              "end": 452,
                              "name": "used"
                            },
                            "computed": false,
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "directive": null
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
