__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 36
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 47,
                    "end": 48
                  },
                  "initializer": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "1",
                          "cooked": "1"
                        },
                        "tail": true,
                        "start": 51,
                        "end": 54
                      }
                    ],
                    "expressions": [],
                    "start": 51,
                    "end": 54
                  },
                  "computed": false,
                  "start": 47,
                  "end": 54
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 64,
                    "end": 65
                  },
                  "initializer": {
                    "type": "Literal",
                    "value": "2",
                    "raw": "'2'",
                    "start": 68,
                    "end": 71
                  },
                  "computed": false,
                  "start": 64,
                  "end": 71
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 81,
                    "end": 82
                  },
                  "initializer": {
                    "type": "Literal",
                    "value": "3",
                    "raw": "'3'",
                    "start": 85,
                    "end": 88
                  },
                  "computed": false,
                  "start": 81,
                  "end": 88
                }
              ],
              "start": 37,
              "end": 94
            },
            "const": false,
            "declare": false,
            "start": 28,
            "end": 94
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 113,
                    "end": 114
                  },
                  "init": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "'string'",
                    "start": 117,
                    "end": 125
                  },
                  "definite": false,
                  "start": 113,
                  "end": 125
                }
              ],
              "declare": false,
              "start": 107,
              "end": 126
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 100,
            "end": 126
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 144,
                    "end": 145
                  },
                  "init": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "template",
                          "cooked": "template"
                        },
                        "tail": true,
                        "start": 148,
                        "end": 158
                      }
                    ],
                    "expressions": [],
                    "start": 148,
                    "end": 158
                  },
                  "definite": false,
                  "start": 144,
                  "end": 158
                }
              ],
              "declare": false,
              "start": 138,
              "end": 159
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 131,
            "end": 159
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
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 178,
                    "end": 179
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 182,
                      "end": 185
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 186,
                      "end": 187
                    },
                    "optional": false,
                    "computed": false,
                    "start": 182,
                    "end": 187
                  },
                  "definite": false,
                  "start": 178,
                  "end": 187
                }
              ],
              "declare": false,
              "start": 172,
              "end": 188
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 165,
            "end": 188
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
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 206,
                    "end": 207
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 210,
                      "end": 213
                    },
                    "property": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "'b'",
                      "start": 214,
                      "end": 217
                    },
                    "optional": false,
                    "computed": true,
                    "start": 210,
                    "end": 218
                  },
                  "definite": false,
                  "start": 206,
                  "end": 218
                }
              ],
              "declare": false,
              "start": 200,
              "end": 219
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 193,
            "end": 219
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
                    "name": "e",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 237,
                    "end": 238
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 241,
                      "end": 244
                    },
                    "property": {
                      "type": "TemplateLiteral",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "c",
                            "cooked": "c"
                          },
                          "tail": true,
                          "start": 245,
                          "end": 248
                        }
                      ],
                      "expressions": [],
                      "start": 245,
                      "end": 248
                    },
                    "optional": false,
                    "computed": true,
                    "start": 241,
                    "end": 249
                  },
                  "definite": false,
                  "start": 237,
                  "end": 249
                }
              ],
              "declare": false,
              "start": 231,
              "end": 250
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 224,
            "end": 250
          }
        ],
        "start": 22,
        "end": 252
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 252
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 254,
          "end": 257
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 258,
          "end": 259
        },
        "optional": false,
        "computed": false,
        "start": 254,
        "end": 259
      },
      "directive": null,
      "start": 254,
      "end": 260
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 261,
          "end": 264
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 265,
          "end": 266
        },
        "optional": false,
        "computed": false,
        "start": 261,
        "end": 266
      },
      "directive": null,
      "start": 261,
      "end": 267
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 268,
          "end": 271
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 272,
          "end": 273
        },
        "optional": false,
        "computed": false,
        "start": 268,
        "end": 273
      },
      "directive": null,
      "start": 268,
      "end": 274
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 275,
          "end": 278
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 279,
          "end": 280
        },
        "optional": false,
        "computed": false,
        "start": 275,
        "end": 280
      },
      "directive": null,
      "start": 275,
      "end": 281
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 282,
          "end": 285
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 286,
          "end": 287
        },
        "optional": false,
        "computed": false,
        "start": 282,
        "end": 287
      },
      "directive": null,
      "start": 282,
      "end": 288
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 288
}
```
