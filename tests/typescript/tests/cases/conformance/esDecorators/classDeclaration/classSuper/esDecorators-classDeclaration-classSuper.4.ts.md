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
                  "type": "TSNumberKeyword",
                  "start": 79,
                  "end": 85
                },
                "start": 77,
                "end": 85
              },
              "body": null,
              "expression": false,
              "start": 61,
              "end": 86
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 48,
            "end": 86
          }
        ],
        "start": 42,
        "end": 88
      },
      "abstract": false,
      "declare": true,
      "start": 23,
      "end": 88
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
            "start": 96,
            "end": 102
          },
          "init": {
            "type": "Literal",
            "value": "method",
            "raw": "\"method\"",
            "start": 105,
            "end": 113
          },
          "definite": false,
          "start": 96,
          "end": 113
        }
      ],
      "declare": false,
      "start": 90,
      "end": 114
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
            "start": 117,
            "end": 120
          },
          "start": 116,
          "end": 120
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 127,
        "end": 128
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 137,
        "end": 141
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 156
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 159,
                  "end": 164
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 165,
                  "end": 171
                },
                "optional": false,
                "computed": false,
                "start": 159,
                "end": 171
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 159,
              "end": 173
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 148,
            "end": 174
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 186,
              "end": 187
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 190,
                  "end": 195
                },
                "property": {
                  "type": "Literal",
                  "value": "method",
                  "raw": "\"method\"",
                  "start": 196,
                  "end": 204
                },
                "optional": false,
                "computed": true,
                "start": 190,
                "end": 205
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 190,
              "end": 207
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 179,
            "end": 208
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 220,
              "end": 221
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 224,
                  "end": 229
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 230,
                  "end": 236
                },
                "optional": false,
                "computed": true,
                "start": 224,
                "end": 237
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 224,
              "end": 239
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 213,
            "end": 240
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 252,
              "end": 253
            },
            "typeAnnotation": null,
            "value": {
              "type": "TaggedTemplateExpression",
              "tag": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 256,
                  "end": 261
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 262,
                  "end": 268
                },
                "optional": false,
                "computed": false,
                "start": 256,
                "end": 268
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
                    "start": 268,
                    "end": 270
                  }
                ],
                "expressions": [],
                "start": 268,
                "end": 270
              },
              "start": 256,
              "end": 270
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 245,
            "end": 271
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 283,
              "end": 284
            },
            "typeAnnotation": null,
            "value": {
              "type": "TaggedTemplateExpression",
              "tag": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 287,
                  "end": 292
                },
                "property": {
                  "type": "Literal",
                  "value": "method",
                  "raw": "\"method\"",
                  "start": 293,
                  "end": 301
                },
                "optional": false,
                "computed": true,
                "start": 287,
                "end": 302
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
                    "start": 302,
                    "end": 304
                  }
                ],
                "expressions": [],
                "start": 302,
                "end": 304
              },
              "start": 287,
              "end": 304
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 276,
            "end": 305
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 317,
              "end": 318
            },
            "typeAnnotation": null,
            "value": {
              "type": "TaggedTemplateExpression",
              "tag": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 321,
                  "end": 326
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 327,
                  "end": 333
                },
                "optional": false,
                "computed": true,
                "start": 321,
                "end": 334
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
                    "start": 334,
                    "end": 336
                  }
                ],
                "expressions": [],
                "start": 334,
                "end": 336
              },
              "start": 321,
              "end": 336
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 310,
            "end": 337
          }
        ],
        "start": 142,
        "end": 339
      },
      "abstract": false,
      "declare": false,
      "start": 116,
      "end": 339
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 339
}
```
