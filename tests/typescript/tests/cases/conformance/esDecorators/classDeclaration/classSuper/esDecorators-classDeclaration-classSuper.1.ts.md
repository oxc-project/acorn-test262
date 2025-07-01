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
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              },
              "start": 15,
              "end": 20
            },
            "start": 12,
            "end": 20
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 20
        }
      ],
      "declare": true,
      "start": 0,
      "end": 21
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 37,
        "end": 41
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
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 61
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 65,
                    "end": 69
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 71,
                        "end": 74
                      },
                      "start": 71,
                      "end": 76
                    },
                    "start": 69,
                    "end": 76
                  },
                  "value": null,
                  "start": 62,
                  "end": 76
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 79,
                  "end": 83
                },
                "start": 77,
                "end": 83
              },
              "body": null,
              "expression": false,
              "start": 61,
              "end": 84
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 48,
            "end": 84
          }
        ],
        "start": 42,
        "end": 86
      },
      "abstract": false,
      "declare": true,
      "start": 23,
      "end": 86
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
            "name": "method",
            "optional": false,
            "typeAnnotation": null,
            "start": 94,
            "end": 100
          },
          "init": {
            "type": "Literal",
            "value": "method",
            "raw": "\"method\"",
            "start": 103,
            "end": 111
          },
          "definite": false,
          "start": 94,
          "end": 111
        }
      ],
      "declare": false,
      "start": 88,
      "end": 112
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": null,
            "start": 115,
            "end": 118
          },
          "start": 114,
          "end": 118
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 126
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 135,
        "end": 139
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "StaticBlock",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 163,
                      "end": 168
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "method",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 169,
                      "end": 175
                    },
                    "optional": false,
                    "computed": false,
                    "start": 163,
                    "end": 175
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 163,
                  "end": 177
                },
                "directive": null,
                "start": 163,
                "end": 178
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 187,
                      "end": 192
                    },
                    "property": {
                      "type": "Literal",
                      "value": "method",
                      "raw": "\"method\"",
                      "start": 193,
                      "end": 201
                    },
                    "optional": false,
                    "computed": true,
                    "start": 187,
                    "end": 202
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 187,
                  "end": 204
                },
                "directive": null,
                "start": 187,
                "end": 205
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 214,
                      "end": 219
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "method",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 220,
                      "end": 226
                    },
                    "optional": false,
                    "computed": true,
                    "start": 214,
                    "end": 227
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 214,
                  "end": 229
                },
                "directive": null,
                "start": 214,
                "end": 230
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "TaggedTemplateExpression",
                  "tag": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 240,
                      "end": 245
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "method",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 246,
                      "end": 252
                    },
                    "optional": false,
                    "computed": false,
                    "start": 240,
                    "end": 252
                  },
                  "typeArguments": null,
                  "quasi": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 252,
                        "end": 254
                      }
                    ],
                    "expressions": [],
                    "start": 252,
                    "end": 254
                  },
                  "start": 240,
                  "end": 254
                },
                "directive": null,
                "start": 240,
                "end": 255
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "TaggedTemplateExpression",
                  "tag": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 264,
                      "end": 269
                    },
                    "property": {
                      "type": "Literal",
                      "value": "method",
                      "raw": "\"method\"",
                      "start": 270,
                      "end": 278
                    },
                    "optional": false,
                    "computed": true,
                    "start": 264,
                    "end": 279
                  },
                  "typeArguments": null,
                  "quasi": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 279,
                        "end": 281
                      }
                    ],
                    "expressions": [],
                    "start": 279,
                    "end": 281
                  },
                  "start": 264,
                  "end": 281
                },
                "directive": null,
                "start": 264,
                "end": 282
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "TaggedTemplateExpression",
                  "tag": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 291,
                      "end": 296
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "method",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 297,
                      "end": 303
                    },
                    "optional": false,
                    "computed": true,
                    "start": 291,
                    "end": 304
                  },
                  "typeArguments": null,
                  "quasi": {
                    "type": "TemplateLiteral",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 304,
                        "end": 306
                      }
                    ],
                    "expressions": [],
                    "start": 304,
                    "end": 306
                  },
                  "start": 291,
                  "end": 306
                },
                "directive": null,
                "start": 291,
                "end": 307
              }
            ],
            "start": 146,
            "end": 313
          }
        ],
        "start": 140,
        "end": 315
      },
      "abstract": false,
      "declare": false,
      "start": 114,
      "end": 315
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 315
}
```
