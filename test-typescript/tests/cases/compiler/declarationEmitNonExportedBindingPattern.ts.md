__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 327,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 52,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 15,
        "name": "getFoo",
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
        "start": 18,
        "end": 52,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 22,
            "end": 50,
            "argument": {
              "type": "ObjectExpression",
              "start": 29,
              "end": 50,
              "properties": [
                {
                  "type": "Property",
                  "start": 31,
                  "end": 48,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 31,
                    "end": 34,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "start": 36,
                    "end": 48,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 38,
                        "end": 46,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 38,
                          "end": 42,
                          "name": "test",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 44,
                          "end": 46,
                          "value": 42,
                          "raw": "42"
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
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
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 54,
      "end": 78,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 78,
          "id": {
            "type": "ObjectPattern",
            "start": 60,
            "end": 67,
            "properties": [
              {
                "type": "Property",
                "start": 62,
                "end": 65,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 65,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 65,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 70,
            "end": 78,
            "callee": {
              "type": "Identifier",
              "start": 70,
              "end": 76,
              "name": "getFoo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 80,
      "end": 114,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 87,
        "end": 114,
        "id": {
          "type": "Identifier",
          "start": 92,
          "end": 101,
          "name": "AliasType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 104,
          "end": 114,
          "exprName": {
            "type": "Identifier",
            "start": 111,
            "end": 114,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "VariableDeclaration",
      "start": 116,
      "end": 149,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 122,
          "end": 149,
          "id": {
            "type": "ObjectPattern",
            "start": 122,
            "end": 138,
            "properties": [
              {
                "type": "Property",
                "start": 124,
                "end": 136,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 127,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 136,
                  "name": "renamed",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 141,
            "end": 149,
            "callee": {
              "type": "Identifier",
              "start": 141,
              "end": 147,
              "name": "getFoo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 151,
      "end": 190,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 158,
        "end": 190,
        "id": {
          "type": "Identifier",
          "start": 163,
          "end": 173,
          "name": "AliasType2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 176,
          "end": 190,
          "exprName": {
            "type": "Identifier",
            "start": 183,
            "end": 190,
            "name": "renamed",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "FunctionDeclaration",
      "start": 192,
      "end": 250,
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 210,
        "name": "getNested",
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
        "start": 213,
        "end": 250,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 217,
            "end": 248,
            "argument": {
              "type": "ObjectExpression",
              "start": 224,
              "end": 248,
              "properties": [
                {
                  "type": "Property",
                  "start": 226,
                  "end": 246,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 226,
                    "end": 227,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "start": 229,
                    "end": 246,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 231,
                        "end": 244,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 231,
                          "end": 232,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "ObjectExpression",
                          "start": 234,
                          "end": 244,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 236,
                              "end": 242,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 236,
                                "end": 237,
                                "name": "c",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Literal",
                                "start": 239,
                                "end": 242,
                                "value": "d",
                                "raw": "'d'"
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
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
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 252,
      "end": 291,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 258,
          "end": 291,
          "id": {
            "type": "ObjectPattern",
            "start": 258,
            "end": 277,
            "properties": [
              {
                "type": "Property",
                "start": 260,
                "end": 275,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 260,
                  "end": 261,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ObjectPattern",
                  "start": 263,
                  "end": 275,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 265,
                      "end": 273,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 265,
                        "end": 266,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "ObjectPattern",
                        "start": 268,
                        "end": 273,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 270,
                            "end": 271,
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 270,
                              "end": 271,
                              "name": "c",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 270,
                              "end": 271,
                              "name": "c",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ],
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
                  "typeAnnotation": null
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 280,
            "end": 291,
            "callee": {
              "type": "Identifier",
              "start": 280,
              "end": 289,
              "name": "getNested",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 293,
      "end": 326,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 300,
        "end": 326,
        "id": {
          "type": "Identifier",
          "start": 305,
          "end": 315,
          "name": "AliasType3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 318,
          "end": 326,
          "exprName": {
            "type": "Identifier",
            "start": 325,
            "end": 326,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
