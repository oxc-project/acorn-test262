__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 329,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 41,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 41,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 19,
            "end": 39,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 23,
              "name": "type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                      "value": "foo",
                      "raw": "\"foo\""
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
                      "value": "bar",
                      "raw": "\"bar\""
                    }
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 43,
      "end": 103,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 56,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 65,
          "end": 69,
          "expression": {
            "type": "Identifier",
            "start": 65,
            "end": 69,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 70,
        "end": 103,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 74,
            "end": 86,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 78,
              "name": "type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "value": "foo",
                  "raw": "\"foo\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 89,
            "end": 101,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 92,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 92,
              "end": 100,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 94,
                "end": 100
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 105,
      "end": 165,
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 118,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 127,
          "end": 131,
          "expression": {
            "type": "Identifier",
            "start": 127,
            "end": 131,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 132,
        "end": 165,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 136,
            "end": 148,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 136,
              "end": 140,
              "name": "type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "value": "bar",
                  "raw": "\"bar\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 151,
            "end": 163,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 151,
              "end": 154,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 154,
              "end": 162,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 156,
                "end": 162
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 167,
      "end": 213,
      "id": {
        "type": "Identifier",
        "start": 176,
        "end": 180,
        "name": "getV",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "value": null,
                "raw": "null"
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
              "typeName": {
                "type": "Identifier",
                "start": 184,
                "end": 187,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 190,
              "end": 193,
              "typeName": {
                "type": "Identifier",
                "start": 190,
                "end": 193,
                "name": "Bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      }
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
          "id": {
            "type": "Identifier",
            "start": 221,
            "end": 222,
            "name": "v",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 225,
            "end": 231,
            "callee": {
              "type": "Identifier",
              "start": 225,
              "end": 229,
              "name": "getV",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "SwitchStatement",
      "start": 234,
      "end": 328,
      "discriminant": {
        "type": "MemberExpression",
        "start": 243,
        "end": 249,
        "object": {
          "type": "Identifier",
          "start": 243,
          "end": 244,
          "name": "v",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 245,
          "end": 249,
          "name": "type",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
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
              "expression": {
                "type": "MemberExpression",
                "start": 272,
                "end": 277,
                "object": {
                  "type": "Identifier",
                  "start": 272,
                  "end": 273,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 274,
                  "end": 277,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "directive": null
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
            "value": "bar",
            "raw": "\"bar\""
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
              "expression": {
                "type": "MemberExpression",
                "start": 309,
                "end": 314,
                "object": {
                  "type": "Identifier",
                  "start": 309,
                  "end": 310,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 311,
                  "end": 314,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "directive": null
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
            "value": "foo",
            "raw": "\"foo\""
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
