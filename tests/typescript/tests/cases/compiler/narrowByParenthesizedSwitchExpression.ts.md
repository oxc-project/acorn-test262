__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 23
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 25,
                      "end": 30
                    },
                    "start": 25,
                    "end": 30
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\"",
                      "start": 33,
                      "end": 38
                    },
                    "start": 33,
                    "end": 38
                  }
                ],
                "start": 25,
                "end": 38
              },
              "start": 23,
              "end": 38
            },
            "accessibility": null,
            "static": false,
            "start": 19,
            "end": 39
          }
        ],
        "start": 15,
        "end": 41
      },
      "declare": false,
      "start": 0,
      "end": 41
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 53,
        "end": 56
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 69
          },
          "typeArguments": null,
          "start": 65,
          "end": 69
        }
      ],
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 78
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 80,
                  "end": 85
                },
                "start": 80,
                "end": 85
              },
              "start": 78,
              "end": 85
            },
            "accessibility": null,
            "static": false,
            "start": 74,
            "end": 86
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 92
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 94,
                "end": 100
              },
              "start": 92,
              "end": 100
            },
            "accessibility": null,
            "static": false,
            "start": 89,
            "end": 101
          }
        ],
        "start": 70,
        "end": 103
      },
      "declare": false,
      "start": 43,
      "end": 103
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 115,
        "end": 118
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 127,
            "end": 131
          },
          "typeArguments": null,
          "start": 127,
          "end": 131
        }
      ],
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
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 136,
              "end": 140
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "bar",
                  "raw": "\"bar\"",
                  "start": 142,
                  "end": 147
                },
                "start": 142,
                "end": 147
              },
              "start": 140,
              "end": 147
            },
            "accessibility": null,
            "static": false,
            "start": 136,
            "end": 148
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 154
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 156,
                "end": 162
              },
              "start": 154,
              "end": 162
            },
            "accessibility": null,
            "static": false,
            "start": 151,
            "end": 163
          }
        ],
        "start": 132,
        "end": 165
      },
      "declare": false,
      "start": 105,
      "end": 165
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getV",
        "optional": false,
        "typeAnnotation": null,
        "start": 176,
        "end": 180
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 184,
                "end": 187
              },
              "typeArguments": null,
              "start": 184,
              "end": 187
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 190,
                "end": 193
              },
              "typeArguments": null,
              "start": 190,
              "end": 193
            }
          ],
          "start": 184,
          "end": 193
        },
        "start": 182,
        "end": 193
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSNonNullExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 205,
                "end": 209
              },
              "start": 205,
              "end": 210
            },
            "start": 198,
            "end": 211
          }
        ],
        "start": 194,
        "end": 213
      },
      "expression": false,
      "start": 167,
      "end": 213
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
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 221,
            "end": 222
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getV",
              "optional": false,
              "typeAnnotation": null,
              "start": 225,
              "end": 229
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 225,
            "end": 231
          },
          "definite": false,
          "start": 221,
          "end": 231
        }
      ],
      "declare": false,
      "start": 215,
      "end": 232
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": null,
          "start": 243,
          "end": 244
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "type",
          "optional": false,
          "typeAnnotation": null,
          "start": 245,
          "end": 249
        },
        "optional": false,
        "computed": false,
        "start": 243,
        "end": 249
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 261,
            "end": 266
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 272,
                  "end": 273
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 274,
                  "end": 277
                },
                "optional": false,
                "computed": false,
                "start": 272,
                "end": 277
              },
              "directive": null,
              "start": 272,
              "end": 278
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 283,
              "end": 289
            }
          ],
          "start": 256,
          "end": 289
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 298,
            "end": 303
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 309,
                  "end": 310
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 311,
                  "end": 314
                },
                "optional": false,
                "computed": false,
                "start": 309,
                "end": 314
              },
              "directive": null,
              "start": 309,
              "end": 315
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 320,
              "end": 326
            }
          ],
          "start": 293,
          "end": 326
        }
      ],
      "start": 234,
      "end": 328
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 328
}
```
