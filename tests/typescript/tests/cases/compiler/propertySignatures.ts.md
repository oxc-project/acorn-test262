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
            "name": "foo1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 55,
                      "end": 56
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 57,
                        "end": 63
                      },
                      "start": 56,
                      "end": 63
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 55,
                    "end": 64
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 65,
                      "end": 66
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 68,
                        "end": 74
                      },
                      "start": 66,
                      "end": 74
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 65,
                    "end": 75
                  }
                ],
                "start": 53,
                "end": 77
              },
              "start": 51,
              "end": 77
            },
            "start": 47,
            "end": 77
          },
          "init": null,
          "definite": false,
          "start": 47,
          "end": 77
        }
      ],
      "declare": false,
      "start": 43,
      "end": 78
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
            "name": "foo2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 108,
                      "end": 109
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false,
                    "start": 108,
                    "end": 110
                  }
                ],
                "start": 106,
                "end": 112
              },
              "start": 104,
              "end": 112
            },
            "start": 100,
            "end": 112
          },
          "init": null,
          "definite": false,
          "start": 100,
          "end": 112
        }
      ],
      "declare": false,
      "start": 96,
      "end": 113
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
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null,
            "start": 114,
            "end": 118
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 120
          },
          "optional": false,
          "computed": false,
          "start": 114,
          "end": 120
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 123,
          "end": 124
        },
        "start": 114,
        "end": 124
      },
      "directive": null,
      "start": 114,
      "end": 125
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
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 130
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 131,
            "end": 132
          },
          "optional": false,
          "computed": false,
          "start": 126,
          "end": 132
        },
        "right": {
          "type": "Literal",
          "value": "0",
          "raw": "\"0\"",
          "start": 135,
          "end": 138
        },
        "start": 126,
        "end": 138
      },
      "directive": null,
      "start": 126,
      "end": 139
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
            "name": "foo3",
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
                        "type": "TSStringKeyword",
                        "start": 176,
                        "end": 182
                      },
                      "start": 174,
                      "end": 182
                    },
                    "start": 172,
                    "end": 183
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 188,
                        "end": 194
                      },
                      "start": 186,
                      "end": 194
                    },
                    "start": 184,
                    "end": 195
                  }
                ],
                "start": 170,
                "end": 197
              },
              "start": 168,
              "end": 197
            },
            "start": 164,
            "end": 197
          },
          "init": null,
          "definite": false,
          "start": 164,
          "end": 197
        }
      ],
      "declare": false,
      "start": 160,
      "end": 198
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
            "name": "foo4",
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
                        "start": 232,
                        "end": 236
                      },
                      "start": 230,
                      "end": 236
                    },
                    "start": 228,
                    "end": 237
                  }
                ],
                "start": 226,
                "end": 239
              },
              "start": 224,
              "end": 239
            },
            "start": 220,
            "end": 239
          },
          "init": null,
          "definite": false,
          "start": 220,
          "end": 239
        }
      ],
      "declare": false,
      "start": 216,
      "end": 240
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
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 249
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 252,
              "end": 255
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 252,
            "end": 257
          },
          "definite": false,
          "start": 245,
          "end": 257
        }
      ],
      "declare": false,
      "start": 241,
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
            "name": "foo5",
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
                    "returnType": null,
                    "start": 287,
                    "end": 290
                  }
                ],
                "start": 286,
                "end": 291
              },
              "start": 284,
              "end": 291
            },
            "start": 280,
            "end": 291
          },
          "init": null,
          "definite": false,
          "start": 280,
          "end": 291
        }
      ],
      "declare": false,
      "start": 276,
      "end": 292
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
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 297,
            "end": 301
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "typeAnnotation": null,
              "start": 304,
              "end": 308
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 304,
            "end": 310
          },
          "definite": false,
          "start": 297,
          "end": 310
        }
      ],
      "declare": false,
      "start": 293,
      "end": 311
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
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 312,
            "end": 316
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 317,
            "end": 320
          },
          "optional": false,
          "computed": false,
          "start": 312,
          "end": 320
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 323,
          "end": 324
        },
        "start": 312,
        "end": 324
      },
      "directive": null,
      "start": 312,
      "end": 325
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 43,
  "end": 325
}
```
