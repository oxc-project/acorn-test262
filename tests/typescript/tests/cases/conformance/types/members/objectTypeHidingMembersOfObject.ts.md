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
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 100,
        "end": 101
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
              "name": "valueOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 115
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
                "body": [],
                "start": 118,
                "end": 121
              },
              "expression": false,
              "start": 115,
              "end": 121
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 108,
            "end": 121
          }
        ],
        "start": 102,
        "end": 123
      },
      "abstract": false,
      "declare": false,
      "start": 94,
      "end": 123
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 132,
                  "end": 133
                },
                "typeArguments": null,
                "start": 132,
                "end": 133
              },
              "start": 130,
              "end": 133
            },
            "start": 129,
            "end": 133
          },
          "init": null,
          "definite": false,
          "start": 129,
          "end": 133
        }
      ],
      "declare": false,
      "start": 125,
      "end": 134
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 143,
                "end": 147
              },
              "start": 141,
              "end": 147
            },
            "start": 139,
            "end": 147
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 150,
                "end": 151
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "valueOf",
                "optional": false,
                "typeAnnotation": null,
                "start": 152,
                "end": 159
              },
              "optional": false,
              "computed": false,
              "start": 150,
              "end": 159
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 150,
            "end": 161
          },
          "definite": false,
          "start": 139,
          "end": 161
        }
      ],
      "declare": false,
      "start": 135,
      "end": 162
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 174,
        "end": 175
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
              "name": "valueOf",
              "optional": false,
              "typeAnnotation": null,
              "start": 182,
              "end": 189
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 193,
                "end": 197
              },
              "start": 191,
              "end": 197
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 182,
            "end": 198
          }
        ],
        "start": 176,
        "end": 200
      },
      "declare": false,
      "start": 164,
      "end": 200
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 209,
                  "end": 210
                },
                "typeArguments": null,
                "start": 209,
                "end": 210
              },
              "start": 207,
              "end": 210
            },
            "start": 206,
            "end": 210
          },
          "init": null,
          "definite": false,
          "start": 206,
          "end": 210
        }
      ],
      "declare": false,
      "start": 202,
      "end": 211
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
                "type": "TSVoidKeyword",
                "start": 220,
                "end": 224
              },
              "start": 218,
              "end": 224
            },
            "start": 216,
            "end": 224
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 227,
                "end": 228
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "valueOf",
                "optional": false,
                "typeAnnotation": null,
                "start": 229,
                "end": 236
              },
              "optional": false,
              "computed": false,
              "start": 227,
              "end": 236
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 227,
            "end": 238
          },
          "definite": false,
          "start": 216,
          "end": 238
        }
      ],
      "declare": false,
      "start": 212,
      "end": 239
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 246
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
                  "name": "valueOf",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 255,
                  "end": 262
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 270,
                    "end": 273
                  },
                  "id": null,
                  "generator": false,
                  "start": 264,
                  "end": 273
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 255,
                "end": 273
              }
            ],
            "start": 249,
            "end": 275
          },
          "definite": false,
          "start": 245,
          "end": 275
        }
      ],
      "declare": false,
      "start": 241,
      "end": 275
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 285,
                "end": 289
              },
              "start": 283,
              "end": 289
            },
            "start": 281,
            "end": 289
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 292,
                "end": 293
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "valueOf",
                "optional": false,
                "typeAnnotation": null,
                "start": 294,
                "end": 301
              },
              "optional": false,
              "computed": false,
              "start": 292,
              "end": 301
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 292,
            "end": 303
          },
          "definite": false,
          "start": 281,
          "end": 303
        }
      ],
      "declare": false,
      "start": 277,
      "end": 304
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
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "valueOf",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 319,
                      "end": 326
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 330,
                        "end": 334
                      },
                      "start": 328,
                      "end": 334
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 319,
                    "end": 335
                  }
                ],
                "start": 313,
                "end": 337
              },
              "start": 311,
              "end": 337
            },
            "start": 310,
            "end": 337
          },
          "init": null,
          "definite": false,
          "start": 310,
          "end": 337
        }
      ],
      "declare": false,
      "start": 306,
      "end": 337
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 347,
                "end": 351
              },
              "start": 345,
              "end": 351
            },
            "start": 343,
            "end": 351
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 354,
                "end": 355
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "valueOf",
                "optional": false,
                "typeAnnotation": null,
                "start": 356,
                "end": 363
              },
              "optional": false,
              "computed": false,
              "start": 354,
              "end": 363
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 354,
            "end": 365
          },
          "definite": false,
          "start": 343,
          "end": 365
        }
      ],
      "declare": false,
      "start": 339,
      "end": 366
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 94,
  "end": 366
}
```
