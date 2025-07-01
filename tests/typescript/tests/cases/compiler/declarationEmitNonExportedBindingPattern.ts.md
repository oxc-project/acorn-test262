__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 15
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 31,
                    "end": 34
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "test",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 38,
                          "end": 42
                        },
                        "value": {
                          "type": "Literal",
                          "value": 42,
                          "raw": "42",
                          "start": 44,
                          "end": 46
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 38,
                        "end": 46
                      }
                    ],
                    "start": 36,
                    "end": 48
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 31,
                  "end": 48
                }
              ],
              "start": 29,
              "end": 50
            },
            "start": 22,
            "end": 50
          }
        ],
        "start": 18,
        "end": 52
      },
      "expression": false,
      "start": 0,
      "end": 52
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 62,
                  "end": 65
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 62,
                  "end": 65
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 62,
                "end": 65
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 67
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 76
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 70,
            "end": 78
          },
          "definite": false,
          "start": 60,
          "end": 78
        }
      ],
      "declare": false,
      "start": 54,
      "end": 78
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AliasType",
          "optional": false,
          "typeAnnotation": null,
          "start": 92,
          "end": 101
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 111,
            "end": 114
          },
          "typeArguments": null,
          "start": 104,
          "end": 114
        },
        "declare": false,
        "start": 87,
        "end": 114
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 80,
      "end": 114
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 124,
                  "end": 127
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "renamed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 129,
                  "end": 136
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 124,
                "end": 136
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 138
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getFoo",
              "optional": false,
              "typeAnnotation": null,
              "start": 141,
              "end": 147
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 141,
            "end": 149
          },
          "definite": false,
          "start": 122,
          "end": 149
        }
      ],
      "declare": false,
      "start": 116,
      "end": 149
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AliasType2",
          "optional": false,
          "typeAnnotation": null,
          "start": 163,
          "end": 173
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "renamed",
            "optional": false,
            "typeAnnotation": null,
            "start": 183,
            "end": 190
          },
          "typeArguments": null,
          "start": 176,
          "end": 190
        },
        "declare": false,
        "start": 158,
        "end": 190
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 151,
      "end": 190
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getNested",
        "optional": false,
        "typeAnnotation": null,
        "start": 201,
        "end": 210
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 226,
                    "end": 227
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 231,
                          "end": 232
                        },
                        "value": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 236,
                                "end": 237
                              },
                              "value": {
                                "type": "Literal",
                                "value": "d",
                                "raw": "'d'",
                                "start": 239,
                                "end": 242
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 236,
                              "end": 242
                            }
                          ],
                          "start": 234,
                          "end": 244
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 231,
                        "end": 244
                      }
                    ],
                    "start": 229,
                    "end": 246
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 226,
                  "end": 246
                }
              ],
              "start": 224,
              "end": 248
            },
            "start": 217,
            "end": 248
          }
        ],
        "start": 213,
        "end": 250
      },
      "expression": false,
      "start": 192,
      "end": 250
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 260,
                  "end": 261
                },
                "value": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 265,
                        "end": 266
                      },
                      "value": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 270,
                              "end": 271
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 270,
                              "end": 271
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 270,
                            "end": 271
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 268,
                        "end": 273
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 265,
                      "end": 273
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 263,
                  "end": 275
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 260,
                "end": 275
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 258,
            "end": 277
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getNested",
              "optional": false,
              "typeAnnotation": null,
              "start": 280,
              "end": 289
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 280,
            "end": 291
          },
          "definite": false,
          "start": 258,
          "end": 291
        }
      ],
      "declare": false,
      "start": 252,
      "end": 291
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AliasType3",
          "optional": false,
          "typeAnnotation": null,
          "start": 305,
          "end": 315
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 325,
            "end": 326
          },
          "typeArguments": null,
          "start": 318,
          "end": 326
        },
        "declare": false,
        "start": 300,
        "end": 326
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 293,
      "end": 326
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 326
}
```
