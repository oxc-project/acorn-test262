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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 45
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
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 63,
                          "end": 69
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 72,
                          "end": 76
                        }
                      ],
                      "start": 63,
                      "end": 76
                    },
                    "start": 61,
                    "end": 76
                  },
                  "start": 60,
                  "end": 76
                },
                "init": {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 80,
                    "end": 83
                  },
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 84,
                    "end": 86
                  },
                  "start": 79,
                  "end": 86
                },
                "definite": false,
                "start": 60,
                "end": 86
              }
            ],
            "declare": false,
            "start": 54,
            "end": 87
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 96,
                "end": 97
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 102,
                "end": 106
              },
              "start": 96,
              "end": 106
            },
            "consequent": {
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
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 139,
                          "end": 142
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
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
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 154,
                                    "end": 155
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "length",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 156,
                                    "end": 162
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 154,
                                  "end": 162
                                },
                                "start": 147,
                                "end": 163
                              }
                            ],
                            "start": 145,
                            "end": 165
                          },
                          "expression": false,
                          "start": 142,
                          "end": 165
                        },
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 139,
                        "end": 165
                      }
                    ],
                    "start": 125,
                    "end": 182
                  },
                  "start": 118,
                  "end": 183
                }
              ],
              "start": 108,
              "end": 189
            },
            "alternate": null,
            "start": 92,
            "end": 189
          }
        ],
        "start": 48,
        "end": 191
      },
      "expression": false,
      "start": 35,
      "end": 191
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 202,
        "end": 204
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
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 222,
                          "end": 228
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 231,
                          "end": 235
                        }
                      ],
                      "start": 222,
                      "end": 235
                    },
                    "start": 220,
                    "end": 235
                  },
                  "start": 219,
                  "end": 235
                },
                "init": {
                  "type": "TSTypeAssertion",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 239,
                    "end": 242
                  },
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 243,
                    "end": 245
                  },
                  "start": 238,
                  "end": 245
                },
                "definite": false,
                "start": 219,
                "end": 245
              }
            ],
            "declare": false,
            "start": 213,
            "end": 246
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 255,
                "end": 256
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 261,
                "end": 265
              },
              "start": 255,
              "end": 265
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ClassExpression",
                    "decorators": [],
                    "id": null,
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 304,
                            "end": 307
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "id": null,
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
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 319,
                                      "end": 320
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "length",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 321,
                                      "end": 327
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 319,
                                    "end": 327
                                  },
                                  "start": 312,
                                  "end": 328
                                }
                              ],
                              "start": 310,
                              "end": 330
                            },
                            "expression": false,
                            "start": 307,
                            "end": 330
                          },
                          "kind": "method",
                          "computed": false,
                          "static": false,
                          "override": false,
                          "optional": false,
                          "accessibility": null,
                          "start": 304,
                          "end": 330
                        }
                      ],
                      "start": 290,
                      "end": 347
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 284,
                    "end": 347
                  },
                  "start": 277,
                  "end": 348
                }
              ],
              "start": 267,
              "end": 354
            },
            "alternate": null,
            "start": 251,
            "end": 354
          }
        ],
        "start": 207,
        "end": 356
      },
      "expression": false,
      "start": 193,
      "end": 356
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 35,
  "end": 356
}
```
