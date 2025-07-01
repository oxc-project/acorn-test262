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
        "start": 86,
        "end": 91
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
                    "start": 109,
                    "end": 110
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 113,
                    "end": 114
                  },
                  "definite": false,
                  "start": 109,
                  "end": 114
                }
              ],
              "declare": false,
              "start": 105,
              "end": 115
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 98,
            "end": 115
          }
        ],
        "start": 92,
        "end": 117
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 79,
      "end": 117
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JQueryStatic",
        "optional": false,
        "typeAnnotation": null,
        "start": 128,
        "end": 140
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
              "start": 147,
              "end": 152
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
                  "start": 154,
                  "end": 159
                },
                "typeArguments": null,
                "start": 154,
                "end": 159
              },
              "start": 152,
              "end": 159
            },
            "accessibility": null,
            "static": false,
            "start": 147,
            "end": 160
          }
        ],
        "start": 141,
        "end": 180
      },
      "declare": false,
      "start": 118,
      "end": 180
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
                  "start": 188,
                  "end": 200
                },
                "typeArguments": null,
                "start": 188,
                "end": 200
              },
              "start": 186,
              "end": 200
            },
            "start": 185,
            "end": 200
          },
          "init": null,
          "definite": false,
          "start": 185,
          "end": 200
        }
      ],
      "declare": false,
      "start": 181,
      "end": 201
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
                  "start": 228,
                  "end": 233
                },
                "typeArguments": null,
                "start": 228,
                "end": 233
              },
              "start": 226,
              "end": 233
            },
            "start": 206,
            "end": 233
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
                "start": 240,
                "end": 241
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "sammy",
                "optional": false,
                "typeAnnotation": null,
                "start": 242,
                "end": 247
              },
              "optional": false,
              "computed": false,
              "start": 240,
              "end": 247
            },
            "typeArguments": null,
            "arguments": [],
            "start": 236,
            "end": 249
          },
          "definite": false,
          "start": 206,
          "end": 249
        }
      ],
      "declare": false,
      "start": 202,
      "end": 250
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
            "start": 274,
            "end": 276
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
                "start": 279,
                "end": 299
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 300,
                "end": 303
              },
              "optional": false,
              "computed": false,
              "start": 279,
              "end": 303
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 279,
            "end": 305
          },
          "definite": false,
          "start": 274,
          "end": 305
        }
      ],
      "declare": false,
      "start": 270,
      "end": 306
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
            "start": 327,
            "end": 329
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
                  "start": 332,
                  "end": 333
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sammy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 334,
                  "end": 339
                },
                "optional": false,
                "computed": false,
                "start": 332,
                "end": 339
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 340,
                "end": 343
              },
              "optional": false,
              "computed": false,
              "start": 332,
              "end": 343
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 332,
            "end": 345
          },
          "definite": false,
          "start": 327,
          "end": 345
        }
      ],
      "declare": false,
      "start": 323,
      "end": 346
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
            "start": 351,
            "end": 353
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
                  "start": 356,
                  "end": 357
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sammy",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 358,
                  "end": 363
                },
                "optional": false,
                "computed": false,
                "start": 356,
                "end": 363
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 364,
                "end": 367
              },
              "optional": false,
              "computed": false,
              "start": 356,
              "end": 367
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 356,
            "end": 369
          },
          "definite": false,
          "start": 351,
          "end": 369
        }
      ],
      "declare": false,
      "start": 347,
      "end": 370
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
            "start": 384,
            "end": 386
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
                "start": 389,
                "end": 390
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "sammy",
                "optional": false,
                "typeAnnotation": null,
                "start": 391,
                "end": 396
              },
              "optional": false,
              "computed": false,
              "start": 389,
              "end": 396
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 397,
              "end": 398
            },
            "optional": false,
            "computed": false,
            "start": 389,
            "end": 398
          },
          "definite": false,
          "start": 384,
          "end": 398
        }
      ],
      "declare": false,
      "start": 380,
      "end": 399
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
            "start": 410,
            "end": 415
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 416,
            "end": 419
          },
          "optional": false,
          "computed": false,
          "start": 410,
          "end": 419
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 410,
        "end": 421
      },
      "directive": null,
      "start": 410,
      "end": 422
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 422
}
```
