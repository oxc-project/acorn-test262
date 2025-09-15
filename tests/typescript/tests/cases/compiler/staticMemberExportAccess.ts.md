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
        "name": "Sammy",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 11
      },
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 20
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
                      "type": "Literal",
                      "value": "hi",
                      "raw": "\"hi\"",
                      "start": 32,
                      "end": 36
                    },
                    "start": 25,
                    "end": 37
                  }
                ],
                "start": 23,
                "end": 39
              },
              "expression": false,
              "start": 20,
              "end": 39
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 17,
            "end": 39
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 52
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
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 69,
                        "end": 70
                      },
                      "prefix": true,
                      "start": 68,
                      "end": 70
                    },
                    "start": 61,
                    "end": 71
                  }
                ],
                "start": 55,
                "end": 76
              },
              "expression": false,
              "start": 52,
              "end": 76
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 42,
            "end": 76
          }
        ],
        "start": 12,
        "end": 78
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 78
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Sammy",
        "optional": false,
        "typeAnnotation": null,
        "start": 89,
        "end": 94
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
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
                    "start": 112,
                    "end": 113
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 116,
                    "end": 117
                  },
                  "definite": false,
                  "start": 112,
                  "end": 117
                }
              ],
              "declare": false,
              "start": 108,
              "end": 118
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 101,
            "end": 118
          }
        ],
        "start": 95,
        "end": 120
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 79,
      "end": 120
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JQueryStatic",
        "optional": false,
        "typeAnnotation": null,
        "start": 131,
        "end": 143
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
              "name": "sammy",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 155
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Sammy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 157,
                  "end": 162
                },
                "typeArguments": null,
                "start": 157,
                "end": 162
              },
              "start": 155,
              "end": 162
            },
            "accessibility": null,
            "static": false,
            "start": 150,
            "end": 163
          }
        ],
        "start": 144,
        "end": 183
      },
      "declare": false,
      "start": 121,
      "end": 183
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
            "name": "$",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "JQueryStatic",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 191,
                  "end": 203
                },
                "typeArguments": null,
                "start": 191,
                "end": 203
              },
              "start": 189,
              "end": 203
            },
            "start": 188,
            "end": 203
          },
          "init": null,
          "definite": false,
          "start": 188,
          "end": 203
        }
      ],
      "declare": false,
      "start": 184,
      "end": 204
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
            "name": "instanceOfClassSammy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Sammy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 231,
                  "end": 236
                },
                "typeArguments": null,
                "start": 231,
                "end": 236
              },
              "start": 229,
              "end": 236
            },
            "start": 209,
            "end": 236
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "$",
                "optional": false,
                "typeAnnotation": null,
                "start": 243,
                "end": 244
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "sammy",
                "optional": false,
                "typeAnnotation": null,
                "start": 245,
                "end": 250
              },
              "optional": false,
              "computed": false,
              "start": 243,
              "end": 250
            },
            "typeArguments": null,
            "arguments": [],
            "start": 239,
            "end": 252
          },
          "definite": false,
          "start": 209,
          "end": 252
        }
      ],
      "declare": false,
      "start": 205,
      "end": 253
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
            "name": "r1",
            "optional": false,
            "typeAnnotation": null,
            "start": 277,
            "end": 279
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "instanceOfClassSammy",
                "optional": false,
                "typeAnnotation": null,
                "start": 282,
                "end": 302
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 303,
                "end": 306
              },
              "optional": false,
              "computed": false,
              "start": 282,
              "end": 306
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 282,
            "end": 308
          },
          "definite": false,
          "start": 277,
          "end": 308
        }
      ],
      "declare": false,
      "start": 273,
      "end": 309
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 330,
            "end": 332
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "$",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 335,
                  "end": 336
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sammy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 337,
                  "end": 342
                },
                "optional": false,
                "computed": false,
                "start": 335,
                "end": 342
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 343,
                "end": 346
              },
              "optional": false,
              "computed": false,
              "start": 335,
              "end": 346
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 335,
            "end": 348
          },
          "definite": false,
          "start": 330,
          "end": 348
        }
      ],
      "declare": false,
      "start": 326,
      "end": 349
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 354,
            "end": 356
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "$",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 359,
                  "end": 360
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sammy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 361,
                  "end": 366
                },
                "optional": false,
                "computed": false,
                "start": 359,
                "end": 366
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 367,
                "end": 370
              },
              "optional": false,
              "computed": false,
              "start": 359,
              "end": 370
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 359,
            "end": 372
          },
          "definite": false,
          "start": 354,
          "end": 372
        }
      ],
      "declare": false,
      "start": 350,
      "end": 373
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 387,
            "end": 389
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "$",
                "optional": false,
                "typeAnnotation": null,
                "start": 392,
                "end": 393
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "sammy",
                "optional": false,
                "typeAnnotation": null,
                "start": 394,
                "end": 399
              },
              "optional": false,
              "computed": false,
              "start": 392,
              "end": 399
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 400,
              "end": 401
            },
            "optional": false,
            "computed": false,
            "start": 392,
            "end": 401
          },
          "definite": false,
          "start": 387,
          "end": 401
        }
      ],
      "declare": false,
      "start": 383,
      "end": 402
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Sammy",
            "optional": false,
            "typeAnnotation": null,
            "start": 413,
            "end": 418
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 419,
            "end": 422
          },
          "optional": false,
          "computed": false,
          "start": 413,
          "end": 422
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 413,
        "end": 424
      },
      "directive": null,
      "start": 413,
      "end": 425
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 425
}
```
