__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 17
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 20,
                "end": 26
              },
              "start": 18,
              "end": 26
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 16,
            "end": 27
          }
        ],
        "start": 10,
        "end": 29
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getNum",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 54
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 58,
          "end": 64
        },
        "start": 56,
        "end": 64
      },
      "body": null,
      "expression": false,
      "start": 31,
      "end": 65
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 84,
        "end": 87
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 95,
                    "end": 96
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 98,
                        "end": 101
                      },
                      "typeArguments": null,
                      "start": 98,
                      "end": 101
                    },
                    "start": 96,
                    "end": 101
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 95,
                  "end": 102
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 103,
                    "end": 104
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Date",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 106,
                        "end": 110
                      },
                      "typeArguments": null,
                      "start": 106,
                      "end": 110
                    },
                    "start": 104,
                    "end": 110
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 103,
                  "end": 110
                }
              ],
              "start": 93,
              "end": 112
            },
            "start": 91,
            "end": 112
          },
          "start": 88,
          "end": 112
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "item",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 120,
              "end": 126
            },
            "start": 118,
            "end": 126
          },
          "start": 114,
          "end": 126
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "items",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 137,
                  "end": 143
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 145,
                  "end": 151
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 153,
                  "end": 159
                }
              ],
              "start": 136,
              "end": 160
            },
            "start": 134,
            "end": 160
          },
          "start": 128,
          "end": 160
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 163,
          "end": 167
        },
        "start": 161,
        "end": 167
      },
      "body": null,
      "expression": false,
      "start": 67,
      "end": 168
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 170,
          "end": 173
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 180,
                  "end": 181
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 183,
                  "end": 186
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 180,
                "end": 186
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 192,
                  "end": 193
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 195,
                  "end": 199
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 192,
                "end": 199
              }
            ],
            "start": 174,
            "end": 201
          },
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getNum",
              "optional": false,
              "typeAnnotation": null,
              "start": 203,
              "end": 209
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 203,
            "end": 211
          }
        ],
        "optional": false,
        "start": 170,
        "end": 212
      },
      "directive": null,
      "start": 170,
      "end": 213
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 215,
          "end": 218
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 225,
                  "end": 226
                },
                "value": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 232,
                    "end": 235
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 228,
                  "end": 237
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 225,
                "end": 237
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 243,
                  "end": 244
                },
                "value": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Date",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 250,
                    "end": 254
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 246,
                  "end": 256
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 243,
                "end": 256
              }
            ],
            "start": 219,
            "end": 258
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "getNum",
            "optional": false,
            "typeAnnotation": null,
            "start": 260,
            "end": 266
          }
        ],
        "optional": false,
        "start": 215,
        "end": 267
      },
      "directive": null,
      "start": 215,
      "end": 268
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 271,
          "end": 274
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 281,
                  "end": 282
                },
                "value": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 288,
                    "end": 291
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 284,
                  "end": 293
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 281,
                "end": 293
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 299,
                  "end": 300
                },
                "value": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Date",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 306,
                    "end": 310
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 302,
                  "end": 312
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 299,
                "end": 312
              }
            ],
            "start": 275,
            "end": 314
          },
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getNum",
              "optional": false,
              "typeAnnotation": null,
              "start": 316,
              "end": 322
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 316,
            "end": 324
          },
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 332,
                "end": 333
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 339,
                "end": 340
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "getNum",
                "optional": false,
                "typeAnnotation": null,
                "start": 346,
                "end": 352
              }
            ],
            "start": 326,
            "end": 354
          }
        ],
        "optional": false,
        "start": 271,
        "end": 355
      },
      "directive": null,
      "start": 271,
      "end": 356
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 356
}
```
