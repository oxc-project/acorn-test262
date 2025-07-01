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
        "start": 15,
        "end": 18
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
              "start": 30,
              "end": 33
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
                    "start": 44,
                    "end": 45
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
                        "start": 48,
                        "end": 51
                      }
                    ],
                    "expressions": [],
                    "start": 48,
                    "end": 51
                  },
                  "computed": false,
                  "start": 44,
                  "end": 51
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 61,
                    "end": 62
                  },
                  "initializer": {
                    "type": "Literal",
                    "value": "2",
                    "raw": "'2'",
                    "start": 65,
                    "end": 68
                  },
                  "computed": false,
                  "start": 61,
                  "end": 68
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 78,
                    "end": 79
                  },
                  "initializer": {
                    "type": "Literal",
                    "value": "3",
                    "raw": "'3'",
                    "start": 82,
                    "end": 85
                  },
                  "computed": false,
                  "start": 78,
                  "end": 85
                }
              ],
              "start": 34,
              "end": 91
            },
            "const": false,
            "declare": false,
            "start": 25,
            "end": 91
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
                    "start": 110,
                    "end": 111
                  },
                  "init": {
                    "type": "Literal",
                    "value": "string",
                    "raw": "'string'",
                    "start": 114,
                    "end": 122
                  },
                  "definite": false,
                  "start": 110,
                  "end": 122
                }
              ],
              "declare": false,
              "start": 104,
              "end": 123
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 97,
            "end": 123
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
                    "start": 141,
                    "end": 142
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
                        "start": 145,
                        "end": 155
                      }
                    ],
                    "expressions": [],
                    "start": 145,
                    "end": 155
                  },
                  "definite": false,
                  "start": 141,
                  "end": 155
                }
              ],
              "declare": false,
              "start": 135,
              "end": 156
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 128,
            "end": 156
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
                    "start": 175,
                    "end": 176
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 179,
                      "end": 182
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 183,
                      "end": 184
                    },
                    "optional": false,
                    "computed": false,
                    "start": 179,
                    "end": 184
                  },
                  "definite": false,
                  "start": 175,
                  "end": 184
                }
              ],
              "declare": false,
              "start": 169,
              "end": 185
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 162,
            "end": 185
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
                    "start": 203,
                    "end": 204
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 207,
                      "end": 210
                    },
                    "property": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "'b'",
                      "start": 211,
                      "end": 214
                    },
                    "optional": false,
                    "computed": true,
                    "start": 207,
                    "end": 215
                  },
                  "definite": false,
                  "start": 203,
                  "end": 215
                }
              ],
              "declare": false,
              "start": 197,
              "end": 216
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 190,
            "end": 216
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
                    "start": 234,
                    "end": 235
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 238,
                      "end": 241
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
                          "start": 242,
                          "end": 245
                        }
                      ],
                      "expressions": [],
                      "start": 242,
                      "end": 245
                    },
                    "optional": false,
                    "computed": true,
                    "start": 238,
                    "end": 246
                  },
                  "definite": false,
                  "start": 234,
                  "end": 246
                }
              ],
              "declare": false,
              "start": 228,
              "end": 247
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 221,
            "end": 247
          }
        ],
        "start": 19,
        "end": 249
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 249
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
          "start": 251,
          "end": 254
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 255,
          "end": 256
        },
        "optional": false,
        "computed": false,
        "start": 251,
        "end": 256
      },
      "directive": null,
      "start": 251,
      "end": 257
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
          "start": 258,
          "end": 261
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 262,
          "end": 263
        },
        "optional": false,
        "computed": false,
        "start": 258,
        "end": 263
      },
      "directive": null,
      "start": 258,
      "end": 264
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
          "start": 265,
          "end": 268
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 269,
          "end": 270
        },
        "optional": false,
        "computed": false,
        "start": 265,
        "end": 270
      },
      "directive": null,
      "start": 265,
      "end": 271
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
          "start": 272,
          "end": 275
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 276,
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 279,
          "end": 282
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 283,
          "end": 284
        },
        "optional": false,
        "computed": false,
        "start": 279,
        "end": 284
      },
      "directive": null,
      "start": 279,
      "end": 285
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 285
}
```
