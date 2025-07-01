__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 14
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 23,
                      "end": 24
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 27,
                        "end": 33
                      },
                      "start": 25,
                      "end": 33
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 23,
                    "end": 34
                  }
                ],
                "start": 17,
                "end": 38
              },
              "start": 15,
              "end": 38
            },
            "accessibility": null,
            "static": false,
            "start": 13,
            "end": 39
          }
        ],
        "start": 9,
        "end": 41
      },
      "declare": false,
      "start": 0,
      "end": 42
    },
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
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 52,
                  "end": 53
                },
                "typeArguments": null,
                "start": 52,
                "end": 53
              },
              "start": 50,
              "end": 53
            },
            "start": 49,
            "end": 53
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 61
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 63,
                  "end": 65
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 60,
                "end": 65
              }
            ],
            "start": 56,
            "end": 68
          },
          "definite": false,
          "start": 49,
          "end": 68
        }
      ],
      "declare": false,
      "start": 43,
      "end": 69
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNotNull",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 102
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 104
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 103,
            "end": 104
          }
        ],
        "start": 102,
        "end": 105
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 109,
                "end": 110
              },
              "typeArguments": null,
              "start": 109,
              "end": 110
            },
            "start": 107,
            "end": 110
          },
          "start": 106,
          "end": 110
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 113,
            "end": 114
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NonNullable",
                "optional": false,
                "typeAnnotation": null,
                "start": 118,
                "end": 129
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 130,
                      "end": 131
                    },
                    "typeArguments": null,
                    "start": 130,
                    "end": 131
                  }
                ],
                "start": 129,
                "end": 132
              },
              "start": 118,
              "end": 132
            },
            "start": 118,
            "end": 132
          },
          "start": 113,
          "end": 132
        },
        "start": 111,
        "end": 132
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 144,
                  "end": 145
                },
                "operator": "!==",
                "right": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 150,
                  "end": 154
                },
                "start": 144,
                "end": 154
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 158,
                  "end": 159
                },
                "operator": "!==",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 164,
                  "end": 173
                },
                "start": 158,
                "end": 173
              },
              "start": 144,
              "end": 173
            },
            "start": 137,
            "end": 174
          }
        ],
        "start": 133,
        "end": 176
      },
      "expression": false,
      "start": 84,
      "end": 176
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "title",
        "optional": false,
        "typeAnnotation": null,
        "start": 251,
        "end": 256
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 262,
              "end": 268
            },
            "start": 260,
            "end": 268
          },
          "start": 257,
          "end": 268
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 281,
                    "end": 284
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 285,
                    "end": 291
                  },
                  "optional": false,
                  "computed": false,
                  "start": 281,
                  "end": 291
                },
                "operator": ">",
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 294,
                  "end": 295
                },
                "start": 281,
                "end": 295
              },
              "consequent": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "Dear ",
                  "raw": "\"Dear \"",
                  "start": 298,
                  "end": 305
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 308,
                  "end": 311
                },
                "start": 298,
                "end": 311
              },
              "alternate": {
                "type": "Literal",
                "value": "Dear nobody",
                "raw": "\"Dear nobody\"",
                "start": 314,
                "end": 327
              },
              "start": 281,
              "end": 327
            },
            "start": 274,
            "end": 328
          }
        ],
        "start": 270,
        "end": 330
      },
      "expression": false,
      "start": 242,
      "end": 330
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ConditionalExpression",
        "test": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "isNotNull",
            "optional": false,
            "typeAnnotation": null,
            "start": 332,
            "end": 341
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ChainExpression",
              "expression": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 342,
                    "end": 343
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 345,
                    "end": 346
                  },
                  "optional": true,
                  "computed": false,
                  "start": 342,
                  "end": 346
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 348,
                  "end": 349
                },
                "optional": true,
                "computed": false,
                "start": 342,
                "end": 349
              },
              "start": 342,
              "end": 349
            }
          ],
          "optional": false,
          "start": 332,
          "end": 350
        },
        "consequent": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "title",
            "optional": false,
            "typeAnnotation": null,
            "start": 353,
            "end": 358
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 359,
                  "end": 360
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 361,
                  "end": 362
                },
                "optional": false,
                "computed": false,
                "start": 359,
                "end": 362
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 363,
                "end": 364
              },
              "optional": false,
              "computed": false,
              "start": 359,
              "end": 364
            }
          ],
          "optional": false,
          "start": 353,
          "end": 365
        },
        "alternate": {
          "type": "Literal",
          "value": null,
          "raw": "null",
          "start": 368,
          "end": 372
        },
        "start": 332,
        "end": 372
      },
      "directive": null,
      "start": 332,
      "end": 373
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 393
}
```
