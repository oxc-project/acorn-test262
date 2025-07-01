__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
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
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "Literal",
            "value": 5,
            "raw": "5",
            "start": 8,
            "end": 9
          },
          "definite": false,
          "start": 4,
          "end": 9
        }
      ],
      "declare": false,
      "start": 0,
      "end": 10
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 16
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "/yo/",
            "regex": {
              "pattern": "yo",
              "flags": ""
            },
            "start": 19,
            "end": 23
          },
          "definite": false,
          "start": 15,
          "end": 23
        }
      ],
      "declare": false,
      "start": 11,
      "end": 24
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "r",
          "optional": false,
          "typeAnnotation": null,
          "start": 25,
          "end": 26
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "source",
          "optional": false,
          "typeAnnotation": null,
          "start": 27,
          "end": 33
        },
        "optional": false,
        "computed": false,
        "start": 25,
        "end": 33
      },
      "directive": null,
      "start": 25,
      "end": 34
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 37
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toBAZ",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 43
          },
          "optional": false,
          "computed": false,
          "start": 36,
          "end": 43
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 36,
        "end": 45
      },
      "directive": null,
      "start": 36,
      "end": 46
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 48
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toString",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 57
          },
          "optional": false,
          "computed": false,
          "start": 47,
          "end": 57
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 47,
        "end": 59
      },
      "directive": null,
      "start": 47,
      "end": 60
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
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 66,
            "end": 67
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 70,
            "end": 71
          },
          "definite": false,
          "start": 66,
          "end": 71
        }
      ],
      "declare": false,
      "start": 62,
      "end": 72
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
            "name": "N",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Number",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 80,
                  "end": 86
                },
                "typeArguments": null,
                "start": 80,
                "end": 86
              },
              "start": 78,
              "end": 86
            },
            "start": 77,
            "end": 86
          },
          "init": null,
          "definite": false,
          "start": 77,
          "end": 86
        }
      ],
      "declare": false,
      "start": 73,
      "end": 87
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null,
          "start": 89,
          "end": 90
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "N",
          "optional": false,
          "typeAnnotation": null,
          "start": 93,
          "end": 94
        },
        "start": 89,
        "end": 94
      },
      "directive": null,
      "start": 89,
      "end": 95
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "N",
          "optional": false,
          "typeAnnotation": null,
          "start": 151,
          "end": 152
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null,
          "start": 155,
          "end": 156
        },
        "start": 151,
        "end": 156
      },
      "directive": null,
      "start": 151,
      "end": 157
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
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 181,
                  "end": 187
                },
                "typeArguments": null,
                "start": 181,
                "end": 187
              },
              "start": 179,
              "end": 187
            },
            "start": 178,
            "end": 187
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 190,
            "end": 192
          },
          "definite": false,
          "start": 178,
          "end": 192
        }
      ],
      "declare": false,
      "start": 174,
      "end": 192
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
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Function",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 200,
                  "end": 208
                },
                "typeArguments": null,
                "start": 200,
                "end": 208
              },
              "start": 198,
              "end": 208
            },
            "start": 197,
            "end": 208
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 215,
                    "end": 221
                  },
                  "start": 213,
                  "end": 221
                },
                "start": 212,
                "end": 221
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 226,
                "end": 227
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 228,
                "end": 234
              },
              "optional": false,
              "computed": false,
              "start": 226,
              "end": 234
            },
            "id": null,
            "generator": false,
            "start": 211,
            "end": 234
          },
          "definite": false,
          "start": 197,
          "end": 234
        }
      ],
      "declare": false,
      "start": 193,
      "end": 235
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RegExp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 244,
                  "end": 250
                },
                "typeArguments": null,
                "start": 244,
                "end": 250
              },
              "start": 242,
              "end": 250
            },
            "start": 240,
            "end": 250
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "/./g",
            "regex": {
              "pattern": ".",
              "flags": "g"
            },
            "start": 253,
            "end": 257
          },
          "definite": false,
          "start": 240,
          "end": 257
        }
      ],
      "declare": false,
      "start": 236,
      "end": 258
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
            "name": "n2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Number",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 267,
                  "end": 273
                },
                "typeArguments": null,
                "start": 267,
                "end": 273
              },
              "start": 265,
              "end": 273
            },
            "start": 263,
            "end": 273
          },
          "init": {
            "type": "Literal",
            "value": 34,
            "raw": "34",
            "start": 276,
            "end": 278
          },
          "definite": false,
          "start": 263,
          "end": 278
        }
      ],
      "declare": false,
      "start": 259,
      "end": 279
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
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "String",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 287,
                  "end": 293
                },
                "typeArguments": null,
                "start": 287,
                "end": 293
              },
              "start": 285,
              "end": 293
            },
            "start": 284,
            "end": 293
          },
          "init": {
            "type": "Literal",
            "value": "yo",
            "raw": "\"yo\"",
            "start": 296,
            "end": 300
          },
          "definite": false,
          "start": 284,
          "end": 300
        }
      ],
      "declare": false,
      "start": 280,
      "end": 301
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Boolean",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 309,
                  "end": 316
                },
                "typeArguments": null,
                "start": 309,
                "end": 316
              },
              "start": 307,
              "end": 316
            },
            "start": 306,
            "end": 316
          },
          "init": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 319,
            "end": 323
          },
          "definite": false,
          "start": 306,
          "end": 323
        }
      ],
      "declare": false,
      "start": 302,
      "end": 324
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
            "name": "n3",
            "optional": false,
            "typeAnnotation": null,
            "start": 330,
            "end": 332
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 335,
              "end": 336
            },
            "operator": "||",
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 340,
              "end": 342
            },
            "start": 335,
            "end": 342
          },
          "definite": false,
          "start": 330,
          "end": 342
        }
      ],
      "declare": false,
      "start": 326,
      "end": 343
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 352,
        "end": 355
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 365,
              "end": 368
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 372,
                  "end": 376
                },
                "start": 370,
                "end": 376
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 377,
                "end": 380
              },
              "expression": false,
              "start": 368,
              "end": 380
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 358,
            "end": 380
          }
        ],
        "start": 356,
        "end": 383
      },
      "abstract": false,
      "declare": false,
      "start": 346,
      "end": 383
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 390,
        "end": 393
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 402,
        "end": 405
      },
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
              "start": 415,
              "end": 418
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 429,
                      "end": 438
                    },
                    "start": 422,
                    "end": 438
                  }
                ],
                "start": 420,
                "end": 439
              },
              "expression": false,
              "start": 418,
              "end": 439
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 408,
            "end": 439
          }
        ],
        "start": 406,
        "end": 442
      },
      "abstract": false,
      "declare": false,
      "start": 384,
      "end": 442
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 448
}
```
