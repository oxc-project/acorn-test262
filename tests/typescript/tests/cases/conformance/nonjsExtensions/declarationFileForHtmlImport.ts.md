__ESTREE_TEST__:AST:
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
            "name": "doc",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Document",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 247,
                  "end": 255
                },
                "typeArguments": null,
                "start": 247,
                "end": 255
              },
              "start": 245,
              "end": 255
            },
            "start": 242,
            "end": 255
          },
          "init": null,
          "definite": false,
          "start": 242,
          "end": 255
        }
      ],
      "declare": true,
      "start": 230,
      "end": 256
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "doc",
        "optional": false,
        "typeAnnotation": null,
        "start": 272,
        "end": 275
      },
      "exportKind": "value",
      "start": 257,
      "end": 276
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "blogPost",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Element",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 394,
                    "end": 401
                  },
                  "typeArguments": null,
                  "start": 394,
                  "end": 401
                },
                "start": 392,
                "end": 401
              },
              "start": 384,
              "end": 401
            },
            "init": null,
            "definite": false,
            "start": 384,
            "end": 401
          }
        ],
        "declare": false,
        "start": 378,
        "end": 402
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 371,
      "end": 402
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "HTML5Element",
          "optional": false,
          "typeAnnotation": null,
          "start": 417,
          "end": 429
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "HTMLElement",
          "optional": false,
          "typeAnnotation": null,
          "start": 438,
          "end": 449
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
                "name": "connectedCallback",
                "optional": false,
                "typeAnnotation": null,
                "start": 456,
                "end": 473
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
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
                    "start": 477,
                    "end": 481
                  },
                  "start": 475,
                  "end": 481
                },
                "body": null,
                "expression": false,
                "start": 473,
                "end": 482
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 456,
              "end": 482
            }
          ],
          "start": 450,
          "end": 484
        },
        "abstract": false,
        "declare": false,
        "start": 411,
        "end": 484
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 404,
      "end": 484
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 230,
  "end": 485
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 230,
    "end": 237,
    "range": [
      230,
      237
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 238,
    "end": 241,
    "range": [
      238,
      241
    ]
  },
  {
    "type": "Identifier",
    "value": "doc",
    "start": 242,
    "end": 245,
    "range": [
      242,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Identifier",
    "value": "Document",
    "start": 247,
    "end": 255,
    "range": [
      247,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 257,
    "end": 263,
    "range": [
      257,
      263
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 264,
    "end": 271,
    "range": [
      264,
      271
    ]
  },
  {
    "type": "Identifier",
    "value": "doc",
    "start": 272,
    "end": 275,
    "range": [
      272,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 371,
    "end": 377,
    "range": [
      371,
      377
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 378,
    "end": 383,
    "range": [
      378,
      383
    ]
  },
  {
    "type": "Identifier",
    "value": "blogPost",
    "start": 384,
    "end": 392,
    "range": [
      384,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 394,
    "end": 401,
    "range": [
      394,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 404,
    "end": 410,
    "range": [
      404,
      410
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 411,
    "end": 416,
    "range": [
      411,
      416
    ]
  },
  {
    "type": "Identifier",
    "value": "HTML5Element",
    "start": 417,
    "end": 429,
    "range": [
      417,
      429
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 430,
    "end": 437,
    "range": [
      430,
      437
    ]
  },
  {
    "type": "Identifier",
    "value": "HTMLElement",
    "start": 438,
    "end": 449,
    "range": [
      438,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 450,
    "end": 451,
    "range": [
      450,
      451
    ]
  },
  {
    "type": "Identifier",
    "value": "connectedCallback",
    "start": 456,
    "end": 473,
    "range": [
      456,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 477,
    "end": 481,
    "range": [
      477,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 481,
    "end": 482,
    "range": [
      481,
      482
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "mod",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 15
          },
          "start": 7,
          "end": 15
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./component.html",
        "raw": "\"./component.html\"",
        "start": 21,
        "end": 39
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 40
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "window",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 48
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "customElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 63
            },
            "optional": false,
            "computed": false,
            "start": 42,
            "end": 63
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "define",
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 70
          },
          "optional": false,
          "computed": false,
          "start": 42,
          "end": 70
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "my-html5-element",
            "raw": "\"my-html5-element\"",
            "start": 71,
            "end": 89
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "mod",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
              "end": 94
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "HTML5Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 107
            },
            "optional": false,
            "computed": false,
            "start": 91,
            "end": 107
          }
        ],
        "optional": false,
        "start": 42,
        "end": 108
      },
      "directive": null,
      "start": 42,
      "end": 109
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "document",
          "optional": false,
          "typeAnnotation": null,
          "start": 115,
          "end": 123
        },
        "operator": "!==",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "mod",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 131
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 139
          },
          "optional": false,
          "computed": false,
          "start": 128,
          "end": 139
        },
        "start": 115,
        "end": 139
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "document",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 147,
                    "end": 155
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "body",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 156,
                    "end": 160
                  },
                  "optional": false,
                  "computed": false,
                  "start": 147,
                  "end": 160
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "appendChild",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 161,
                  "end": 172
                },
                "optional": false,
                "computed": false,
                "start": 147,
                "end": 172
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 173,
                    "end": 176
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "blogPost",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 177,
                    "end": 185
                  },
                  "optional": false,
                  "computed": false,
                  "start": 173,
                  "end": 185
                }
              ],
              "optional": false,
              "start": 147,
              "end": 186
            },
            "directive": null,
            "start": 147,
            "end": 187
          }
        ],
        "start": 141,
        "end": 189
      },
      "alternate": null,
      "start": 111,
      "end": 189
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 189
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 9,
    "end": 11,
    "range": [
      9,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 12,
    "end": 15,
    "range": [
      12,
      15
    ]
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 16,
    "end": 20,
    "range": [
      16,
      20
    ]
  },
  {
    "type": "String",
    "value": "\"./component.html\"",
    "start": 21,
    "end": 39,
    "range": [
      21,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Identifier",
    "value": "window",
    "start": 42,
    "end": 48,
    "range": [
      42,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Identifier",
    "value": "customElements",
    "start": 49,
    "end": 63,
    "range": [
      49,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "define",
    "start": 64,
    "end": 70,
    "range": [
      64,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "String",
    "value": "\"my-html5-element\"",
    "start": 71,
    "end": 89,
    "range": [
      71,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 91,
    "end": 94,
    "range": [
      91,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Identifier",
    "value": "HTML5Element",
    "start": 95,
    "end": 107,
    "range": [
      95,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 111,
    "end": 113,
    "range": [
      111,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "document",
    "start": 115,
    "end": 123,
    "range": [
      115,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 124,
    "end": 127,
    "range": [
      124,
      127
    ]
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 128,
    "end": 131,
    "range": [
      128,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Identifier",
    "value": "default",
    "start": 132,
    "end": 139,
    "range": [
      132,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Identifier",
    "value": "document",
    "start": 147,
    "end": 155,
    "range": [
      147,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Identifier",
    "value": "body",
    "start": 156,
    "end": 160,
    "range": [
      156,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Identifier",
    "value": "appendChild",
    "start": 161,
    "end": 172,
    "range": [
      161,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Identifier",
    "value": "mod",
    "start": 173,
    "end": 176,
    "range": [
      173,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "blogPost",
    "start": 177,
    "end": 185,
    "range": [
      177,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  }
]
```
