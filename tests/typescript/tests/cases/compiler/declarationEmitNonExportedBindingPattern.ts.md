__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 326,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 52,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 15,
        "decorators": [],
        "name": "getFoo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 31,
                    "end": 34,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 38,
                          "end": 42,
                          "decorators": [],
                          "name": "test",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 44,
                          "end": 46,
                          "value": 42,
                          "raw": "42"
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 54,
      "end": 78,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 78,
          "id": {
            "type": "ObjectPattern",
            "start": 60,
            "end": 67,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 62,
                "end": 65,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 65,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 65,
                  "decorators": [],
                  "name": "foo",
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
              "decorators": [],
              "name": "getFoo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "AliasType",
          "optional": false,
          "typeAnnotation": null
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
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 116,
      "end": 149,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 122,
          "end": 149,
          "id": {
            "type": "ObjectPattern",
            "start": 122,
            "end": 138,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 124,
                "end": 136,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 127,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 136,
                  "decorators": [],
                  "name": "renamed",
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
              "decorators": [],
              "name": "getFoo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "AliasType2",
          "optional": false,
          "typeAnnotation": null
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
            "decorators": [],
            "name": "renamed",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 192,
      "end": 250,
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 210,
        "decorators": [],
        "name": "getNested",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 226,
                    "end": 227,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
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
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 231,
                          "end": 232,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
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
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "start": 236,
                                "end": 237,
                                "decorators": [],
                                "name": "c",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "value": {
                                "type": "Literal",
                                "start": 239,
                                "end": 242,
                                "value": "d",
                                "raw": "'d'"
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false
                            }
                          ]
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 252,
      "end": 291,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 258,
          "end": 291,
          "id": {
            "type": "ObjectPattern",
            "start": 258,
            "end": 277,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 260,
                "end": 275,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 260,
                  "end": 261,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectPattern",
                  "start": 263,
                  "end": 275,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 265,
                      "end": 273,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 265,
                        "end": 266,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ObjectPattern",
                        "start": 268,
                        "end": 273,
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "start": 270,
                            "end": 271,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 270,
                              "end": 271,
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 270,
                              "end": 271,
                              "decorators": [],
                              "name": "c",
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
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ],
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
              "decorators": [],
              "name": "getNested",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "AliasType3",
          "optional": false,
          "typeAnnotation": null
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
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
