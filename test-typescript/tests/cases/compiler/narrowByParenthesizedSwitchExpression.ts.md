__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 328,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 41,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 41,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 19,
            "end": 39,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 23,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 38,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 25,
                "end": 38,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 25,
                    "end": 30,
                    "literal": {
                      "type": "Literal",
                      "start": 25,
                      "end": 30,
                      "raw": "\"foo\"",
                      "value": "foo",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 33,
                    "end": 38,
                    "literal": {
                      "type": "Literal",
                      "start": 33,
                      "end": 38,
                      "raw": "\"bar\"",
                      "value": "bar",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 43,
      "end": 103,
      "body": {
        "type": "TSInterfaceBody",
        "start": 70,
        "end": 103,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 74,
            "end": 86,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 78,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 78,
              "end": 85,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 80,
                "end": 85,
                "literal": {
                  "type": "Literal",
                  "start": 80,
                  "end": 85,
                  "raw": "\"foo\"",
                  "value": "foo",
                  "regex": null,
                  "bigint": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 89,
            "end": 101,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 92,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 92,
              "end": 100,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 94,
                "end": 100
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 65,
          "end": 69,
          "expression": {
            "type": "Identifier",
            "start": 65,
            "end": 69,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 56,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 105,
      "end": 165,
      "body": {
        "type": "TSInterfaceBody",
        "start": 132,
        "end": 165,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 136,
            "end": 148,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 136,
              "end": 140,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 140,
              "end": 147,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 142,
                "end": 147,
                "literal": {
                  "type": "Literal",
                  "start": 142,
                  "end": 147,
                  "raw": "\"bar\"",
                  "value": "bar",
                  "regex": null,
                  "bigint": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 151,
            "end": 163,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 151,
              "end": 154,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 154,
              "end": 162,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 156,
                "end": 162
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 127,
          "end": 131,
          "expression": {
            "type": "Identifier",
            "start": 127,
            "end": 131,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 118,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 167,
      "end": 213,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 194,
        "end": 213,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 198,
            "end": 211,
            "argument": {
              "type": "TSNonNullExpression",
              "start": 205,
              "end": 210,
              "expression": {
                "type": "Literal",
                "start": 205,
                "end": 209,
                "raw": "null",
                "value": null,
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 176,
        "end": 180,
        "decorators": [],
        "name": "getV",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 182,
        "end": 193,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 184,
          "end": 193,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 184,
              "end": 187,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 184,
                "end": 187,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 190,
              "end": 193,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 190,
                "end": 193,
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 215,
      "end": 232,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 221,
          "end": 231,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 221,
            "end": 222,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 225,
            "end": 231,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 225,
              "end": 229,
              "decorators": [],
              "name": "getV",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "SwitchStatement",
      "start": 234,
      "end": 328,
      "cases": [
        {
          "type": "SwitchCase",
          "start": 256,
          "end": 289,
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 272,
              "end": 278,
              "directive": null,
              "expression": {
                "type": "MemberExpression",
                "start": 272,
                "end": 277,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 272,
                  "end": 273,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 274,
                  "end": 277,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            {
              "type": "BreakStatement",
              "start": 283,
              "end": 289,
              "label": null
            }
          ],
          "test": {
            "type": "Literal",
            "start": 261,
            "end": 266,
            "raw": "\"bar\"",
            "value": "bar",
            "regex": null,
            "bigint": null
          }
        },
        {
          "type": "SwitchCase",
          "start": 293,
          "end": 326,
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 309,
              "end": 315,
              "directive": null,
              "expression": {
                "type": "MemberExpression",
                "start": 309,
                "end": 314,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 309,
                  "end": 310,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 311,
                  "end": 314,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            {
              "type": "BreakStatement",
              "start": 320,
              "end": 326,
              "label": null
            }
          ],
          "test": {
            "type": "Literal",
            "start": 298,
            "end": 303,
            "raw": "\"foo\"",
            "value": "foo",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "discriminant": {
        "type": "MemberExpression",
        "start": 243,
        "end": 249,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 243,
          "end": 244,
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 245,
          "end": 249,
          "decorators": [],
          "name": "type",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
