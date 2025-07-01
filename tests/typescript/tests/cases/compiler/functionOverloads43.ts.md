__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 20,
                      "end": 21
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 22,
                        "end": 28
                      },
                      "start": 21,
                      "end": 28
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 20,
                    "end": 28
                  }
                ],
                "start": 18,
                "end": 30
              },
              "start": 18,
              "end": 32
            },
            "start": 16,
            "end": 32
          },
          "start": 13,
          "end": 32
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 35,
          "end": 41
        },
        "start": 33,
        "end": 41
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 42
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 55
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 63,
                      "end": 64
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 65,
                        "end": 71
                      },
                      "start": 64,
                      "end": 71
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 63,
                    "end": 71
                  }
                ],
                "start": 61,
                "end": 73
              },
              "start": 61,
              "end": 75
            },
            "start": 59,
            "end": 75
          },
          "start": 56,
          "end": 75
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 78,
          "end": 84
        },
        "start": 76,
        "end": 84
      },
      "body": null,
      "expression": false,
      "start": 43,
      "end": 85
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 98
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 100,
              "end": 101
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 106,
                      "end": 107
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 108,
                            "end": 114
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 117,
                            "end": 123
                          }
                        ],
                        "start": 108,
                        "end": 123
                      },
                      "start": 107,
                      "end": 123
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 106,
                    "end": 123
                  }
                ],
                "start": 104,
                "end": 125
              },
              "start": 104,
              "end": 127
            },
            "start": 102,
            "end": 127
          },
          "start": 99,
          "end": 127
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 130,
              "end": 136
            },
            {
              "type": "TSNumberKeyword",
              "start": 139,
              "end": 145
            }
          ],
          "start": 130,
          "end": 145
        },
        "start": 128,
        "end": 145
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 157
            },
            "consequent": {
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
                      "start": 176,
                      "end": 177
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 178,
                      "end": 179
                    },
                    "optional": false,
                    "computed": false,
                    "start": 176,
                    "end": 179
                  },
                  "start": 169,
                  "end": 180
                }
              ],
              "start": 159,
              "end": 186
            },
            "alternate": null,
            "start": 152,
            "end": 186
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 203,
              "end": 212
            },
            "start": 196,
            "end": 213
          }
        ],
        "start": 146,
        "end": 215
      },
      "expression": false,
      "start": 86,
      "end": 215
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 221,
            "end": 222
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 225,
              "end": 228
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
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
                          "start": 231,
                          "end": 232
                        },
                        "value": {
                          "type": "Literal",
                          "value": "str",
                          "raw": "\"str\"",
                          "start": 234,
                          "end": 239
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 231,
                        "end": 239
                      }
                    ],
                    "start": 230,
                    "end": 240
                  }
                ],
                "start": 229,
                "end": 241
              }
            ],
            "optional": false,
            "start": 225,
            "end": 242
          },
          "definite": false,
          "start": 221,
          "end": 242
        }
      ],
      "declare": false,
      "start": 217,
      "end": 243
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 248,
            "end": 249
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 252,
              "end": 255
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
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
                          "start": 258,
                          "end": 259
                        },
                        "value": {
                          "type": "Literal",
                          "value": 100,
                          "raw": "100",
                          "start": 261,
                          "end": 264
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 258,
                        "end": 264
                      }
                    ],
                    "start": 257,
                    "end": 265
                  }
                ],
                "start": 256,
                "end": 266
              }
            ],
            "optional": false,
            "start": 252,
            "end": 267
          },
          "definite": false,
          "start": 248,
          "end": 267
        }
      ],
      "declare": false,
      "start": 244,
      "end": 268
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 268
}
```
