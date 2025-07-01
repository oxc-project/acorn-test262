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
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 16
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 10,
            "end": 18
          },
          "definite": false,
          "start": 6,
          "end": 18
        }
      ],
      "declare": false,
      "start": 0,
      "end": 19
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 37
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 45
            },
            "initializer": {
              "type": "Literal",
              "value": "k",
              "raw": "'k'",
              "start": 48,
              "end": 51
            },
            "computed": false,
            "start": 44,
            "end": 51
          }
        ],
        "start": 38,
        "end": 54
      },
      "const": true,
      "declare": false,
      "start": 21,
      "end": 54
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 69
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 81
            },
            "computed": false,
            "optional": false,
            "kind": "get",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 85,
                  "end": 88
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 89,
                      "end": 95
                    }
                  ],
                  "start": 88,
                  "end": 96
                },
                "start": 85,
                "end": 96
              },
              "start": 83,
              "end": 96
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 76,
            "end": 97
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 107
            },
            "computed": false,
            "optional": false,
            "kind": "set",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Iterable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 111,
                      "end": 119
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 120,
                          "end": 126
                        }
                      ],
                      "start": 119,
                      "end": 127
                    },
                    "start": 111,
                    "end": 127
                  },
                  "start": 109,
                  "end": 127
                },
                "start": 108,
                "end": 127
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 102,
            "end": 129
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 141
            },
            "computed": true,
            "optional": false,
            "kind": "get",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 146,
                  "end": 149
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 150,
                      "end": 156
                    }
                  ],
                  "start": 149,
                  "end": 157
                },
                "start": 146,
                "end": 157
              },
              "start": 144,
              "end": 157
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 135,
            "end": 158
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 169
            },
            "computed": true,
            "optional": false,
            "kind": "set",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Iterable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 174,
                      "end": 182
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 183,
                          "end": 189
                        }
                      ],
                      "start": 182,
                      "end": 190
                    },
                    "start": 174,
                    "end": 190
                  },
                  "start": 172,
                  "end": 190
                },
                "start": 171,
                "end": 190
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 163,
            "end": 192
          }
        ],
        "start": 70,
        "end": 194
      },
      "declare": false,
      "start": 56,
      "end": 194
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 215,
                  "end": 218
                },
                "typeArguments": null,
                "start": 215,
                "end": 218
              },
              "start": 213,
              "end": 218
            },
            "start": 210,
            "end": 218
          },
          "init": null,
          "definite": false,
          "start": 210,
          "end": 218
        }
      ],
      "declare": true,
      "start": 196,
      "end": 219
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 221,
            "end": 224
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 225,
            "end": 226
          },
          "optional": false,
          "computed": false,
          "start": 221,
          "end": 226
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": "foo",
              "raw": "'foo'",
              "start": 230,
              "end": 235
            }
          ],
          "start": 229,
          "end": 236
        },
        "start": 221,
        "end": 236
      },
      "directive": null,
      "start": 221,
      "end": 237
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 241
          },
          "property": {
            "type": "Literal",
            "value": "k",
            "raw": "'k'",
            "start": 242,
            "end": 245
          },
          "optional": false,
          "computed": true,
          "start": 238,
          "end": 246
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": "foo",
              "raw": "'foo'",
              "start": 250,
              "end": 255
            }
          ],
          "start": 249,
          "end": 256
        },
        "start": 238,
        "end": 256
      },
      "directive": null,
      "start": 238,
      "end": 257
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 258,
            "end": 261
          },
          "property": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Props",
              "optional": false,
              "typeAnnotation": null,
              "start": 262,
              "end": 267
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null,
              "start": 268,
              "end": 269
            },
            "optional": false,
            "computed": false,
            "start": 262,
            "end": 269
          },
          "optional": false,
          "computed": true,
          "start": 258,
          "end": 270
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": "foo",
              "raw": "'foo'",
              "start": 274,
              "end": 279
            }
          ],
          "start": 273,
          "end": 280
        },
        "start": 258,
        "end": 280
      },
      "directive": null,
      "start": 258,
      "end": 281
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 282,
            "end": 285
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 286,
            "end": 287
          },
          "optional": false,
          "computed": true,
          "start": 282,
          "end": 288
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": "foo",
              "raw": "'foo'",
              "start": 292,
              "end": 297
            }
          ],
          "start": 291,
          "end": 298
        },
        "start": 282,
        "end": 298
      },
      "directive": null,
      "start": 282,
      "end": 299
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 299
}
```
