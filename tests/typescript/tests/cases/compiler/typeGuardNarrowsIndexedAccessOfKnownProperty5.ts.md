__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "a",
            "optional": false,
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
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11,
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 19,
                              "end": 20
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 23,
                                "end": 29
                              },
                              "start": 21,
                              "end": 29
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 19,
                            "end": 29
                          }
                        ],
                        "start": 17,
                        "end": 31
                      },
                      "start": 15,
                      "end": 31
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 11,
                    "end": 31
                  }
                ],
                "start": 9,
                "end": 33
              },
              "start": 7,
              "end": 33
            },
            "start": 6,
            "end": 33
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 36,
            "end": 38
          },
          "definite": false,
          "start": 6,
          "end": 38
        }
      ],
      "declare": false,
      "start": 0,
      "end": 39
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
            "name": "aIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 52
          },
          "init": {
            "type": "Literal",
            "value": "key",
            "raw": "\"key\"",
            "start": 55,
            "end": 60
          },
          "definite": false,
          "start": 46,
          "end": 60
        }
      ],
      "declare": false,
      "start": 40,
      "end": 61
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 66,
            "end": 67
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "aIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 74
          },
          "optional": false,
          "computed": true,
          "start": 66,
          "end": 75
        },
        "operator": "&&",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 80
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "aIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 87
            },
            "optional": false,
            "computed": true,
            "start": 79,
            "end": 88
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 89,
            "end": 90
          },
          "optional": false,
          "computed": false,
          "start": 79,
          "end": 90
        },
        "start": 66,
        "end": 90
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 98,
                  "end": 99
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "aIndex",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 100,
                  "end": 106
                },
                "optional": false,
                "computed": true,
                "start": 98,
                "end": 107
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 108,
                "end": 109
              },
              "optional": false,
              "computed": false,
              "start": 98,
              "end": 109
            },
            "directive": null,
            "start": 98,
            "end": 109
          }
        ],
        "start": 92,
        "end": 121
      },
      "alternate": null,
      "start": 62,
      "end": 121
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
            "name": "b",
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
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 134,
                      "end": 137
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 141,
                              "end": 142
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 145,
                                "end": 151
                              },
                              "start": 143,
                              "end": 151
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 141,
                            "end": 151
                          }
                        ],
                        "start": 139,
                        "end": 153
                      },
                      "start": 137,
                      "end": 153
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 134,
                    "end": 153
                  }
                ],
                "start": 132,
                "end": 155
              },
              "start": 130,
              "end": 155
            },
            "start": 129,
            "end": 155
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
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 160,
                  "end": 163
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 165,
                  "end": 167
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 160,
                "end": 167
              }
            ],
            "start": 158,
            "end": 169
          },
          "definite": false,
          "start": 129,
          "end": 169
        }
      ],
      "declare": false,
      "start": 123,
      "end": 170
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
            "name": "bIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 177,
            "end": 183
          },
          "init": {
            "type": "Literal",
            "value": "key",
            "raw": "\"key\"",
            "start": 186,
            "end": 191
          },
          "definite": false,
          "start": 177,
          "end": 191
        }
      ],
      "declare": false,
      "start": 171,
      "end": 192
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 197,
            "end": 198
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 199,
            "end": 205
          },
          "optional": false,
          "computed": true,
          "start": 197,
          "end": 206
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 207,
          "end": 208
        },
        "optional": false,
        "computed": false,
        "start": 197,
        "end": 208
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 216,
                  "end": 217
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bIndex",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 218,
                  "end": 224
                },
                "optional": false,
                "computed": true,
                "start": 216,
                "end": 225
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 226,
                "end": 227
              },
              "optional": false,
              "computed": false,
              "start": 216,
              "end": 227
            },
            "directive": null,
            "start": 216,
            "end": 227
          }
        ],
        "start": 210,
        "end": 239
      },
      "alternate": null,
      "start": 193,
      "end": 239
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 251,
        "end": 254
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
              "start": 261,
              "end": 262
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 264,
                    "end": 270
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 273,
                    "end": 282
                  }
                ],
                "start": 264,
                "end": 282
              },
              "start": 262,
              "end": 282
            },
            "accessibility": null,
            "static": false,
            "start": 261,
            "end": 283
          }
        ],
        "start": 255,
        "end": 285
      },
      "declare": false,
      "start": 241,
      "end": 285
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 295,
                    "end": 298
                  },
                  "typeArguments": null,
                  "start": 295,
                  "end": 298
                },
                "start": 295,
                "end": 300
              },
              "start": 293,
              "end": 300
            },
            "start": 292,
            "end": 300
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 303,
            "end": 305
          },
          "definite": false,
          "start": 292,
          "end": 305
        }
      ],
      "declare": false,
      "start": 286,
      "end": 306
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
            "name": "cIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 313,
            "end": 319
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 322,
            "end": 323
          },
          "definite": false,
          "start": 313,
          "end": 323
        }
      ],
      "declare": false,
      "start": 307,
      "end": 324
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 329,
            "end": 330
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "cIndex",
            "optional": false,
            "typeAnnotation": null,
            "start": 331,
            "end": 337
          },
          "optional": false,
          "computed": true,
          "start": 329,
          "end": 338
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 339,
          "end": 340
        },
        "optional": false,
        "computed": false,
        "start": 329,
        "end": 340
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 348,
                  "end": 349
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cIndex",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 350,
                  "end": 356
                },
                "optional": false,
                "computed": true,
                "start": 348,
                "end": 357
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 358,
                "end": 359
              },
              "optional": false,
              "computed": false,
              "start": 348,
              "end": 359
            },
            "directive": null,
            "start": 348,
            "end": 359
          }
        ],
        "start": 342,
        "end": 371
      },
      "alternate": null,
      "start": 325,
      "end": 371
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 371
}
```
