__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "X",
          "optional": false,
          "typeAnnotation": null,
          "start": 73,
          "end": 74
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 77,
          "end": 79
        },
        "expression": false,
        "start": 64,
        "end": 79
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 57,
      "end": 79
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Math",
            "optional": false,
            "typeAnnotation": null,
            "start": 84,
            "end": 88
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "random",
            "optional": false,
            "typeAnnotation": null,
            "start": 89,
            "end": 95
          },
          "optional": false,
          "computed": false,
          "start": 84,
          "end": 95
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 84,
        "end": 97
      },
      "consequent": {
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
                  "name": "X",
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
                            "name": "test",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 114,
                            "end": 118
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 121,
                              "end": 124
                            },
                            "start": 119,
                            "end": 124
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 114,
                          "end": 124
                        }
                      ],
                      "start": 112,
                      "end": 126
                    },
                    "start": 110,
                    "end": 126
                  },
                  "start": 109,
                  "end": 126
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 129,
                  "end": 131
                },
                "definite": false,
                "start": 109,
                "end": 131
              }
            ],
            "declare": false,
            "start": 103,
            "end": 132
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
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 135,
                  "end": 136
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 137,
                  "end": 141
                },
                "optional": false,
                "computed": false,
                "start": 135,
                "end": 141
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 144,
                "end": 145
              },
              "start": 135,
              "end": 145
            },
            "directive": null,
            "start": 135,
            "end": 146
          }
        ],
        "start": 99,
        "end": 148
      },
      "alternate": null,
      "start": 80,
      "end": 148
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Y",
          "optional": false,
          "typeAnnotation": null,
          "start": 166,
          "end": 167
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 170,
          "end": 172
        },
        "expression": false,
        "start": 157,
        "end": 172
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 150,
      "end": 172
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
            "name": "Y",
            "optional": false,
            "typeAnnotation": null,
            "start": 173,
            "end": 174
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 175,
            "end": 179
          },
          "optional": false,
          "computed": false,
          "start": 173,
          "end": 179
        },
        "right": {
          "type": "Literal",
          "value": "foo",
          "raw": "\"foo\"",
          "start": 182,
          "end": 187
        },
        "start": 173,
        "end": 187
      },
      "directive": null,
      "start": 173,
      "end": 188
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
            "name": "aliasTopY",
            "optional": false,
            "typeAnnotation": null,
            "start": 195,
            "end": 204
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "Y",
            "optional": false,
            "typeAnnotation": null,
            "start": 207,
            "end": 208
          },
          "definite": false,
          "start": 195,
          "end": 208
        }
      ],
      "declare": false,
      "start": 189,
      "end": 209
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Math",
            "optional": false,
            "typeAnnotation": null,
            "start": 214,
            "end": 218
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "random",
            "optional": false,
            "typeAnnotation": null,
            "start": 219,
            "end": 225
          },
          "optional": false,
          "computed": false,
          "start": 214,
          "end": 225
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 214,
        "end": 227
      },
      "consequent": {
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
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 239,
                  "end": 240
                },
                "init": {
                  "type": "FunctionExpression",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 252,
                    "end": 253
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 256,
                    "end": 258
                  },
                  "expression": false,
                  "start": 243,
                  "end": 258
                },
                "definite": false,
                "start": 239,
                "end": 258
              }
            ],
            "declare": false,
            "start": 233,
            "end": 258
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
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 261,
                  "end": 262
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 263,
                  "end": 267
                },
                "optional": false,
                "computed": false,
                "start": 261,
                "end": 267
              },
              "right": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 270,
                "end": 272
              },
              "start": 261,
              "end": 272
            },
            "directive": null,
            "start": 261,
            "end": 273
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
                  "name": "topYcheck",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSCallSignatureDeclaration",
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 300,
                              "end": 304
                            },
                            "start": 298,
                            "end": 304
                          },
                          "start": 296,
                          "end": 305
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "test",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 306,
                            "end": 310
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 312,
                              "end": 318
                            },
                            "start": 310,
                            "end": 318
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 306,
                          "end": 318
                        }
                      ],
                      "start": 294,
                      "end": 320
                    },
                    "start": 292,
                    "end": 320
                  },
                  "start": 283,
                  "end": 320
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "aliasTopY",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 323,
                  "end": 332
                },
                "definite": false,
                "start": 283,
                "end": 332
              }
            ],
            "declare": false,
            "start": 277,
            "end": 333
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
                  "name": "blockYcheck",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSCallSignatureDeclaration",
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 361,
                              "end": 365
                            },
                            "start": 359,
                            "end": 365
                          },
                          "start": 357,
                          "end": 366
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "test",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 367,
                            "end": 371
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 373,
                              "end": 379
                            },
                            "start": 371,
                            "end": 379
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 367,
                          "end": 379
                        }
                      ],
                      "start": 355,
                      "end": 381
                    },
                    "start": 353,
                    "end": 381
                  },
                  "start": 342,
                  "end": 381
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 384,
                  "end": 385
                },
                "definite": false,
                "start": 342,
                "end": 385
              }
            ],
            "declare": false,
            "start": 336,
            "end": 386
          }
        ],
        "start": 229,
        "end": 388
      },
      "alternate": null,
      "start": 210,
      "end": 388
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 388
}
```
