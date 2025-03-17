__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 343,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "name": "dec",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 88,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 41,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 42,
        "end": 88,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 48,
            "end": 86,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 61,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 61,
              "end": 86,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "RestElement",
                  "start": 62,
                  "end": 76,
                  "argument": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 69,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 69,
                    "end": 76,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 71,
                      "end": 76,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 71,
                        "end": 74
                      }
                    }
                  },
                  "value": null
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 77,
                "end": 85,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 79,
                  "end": 85
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 90,
      "end": 114,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 96,
          "end": 113,
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 102,
            "name": "method",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 105,
            "end": 113,
            "value": "method",
            "raw": "\"method\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 116,
      "end": 342,
      "expression": {
        "type": "ClassExpression",
        "start": 117,
        "end": 340,
        "id": {
          "type": "Identifier",
          "start": 128,
          "end": 129,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": {
          "type": "Identifier",
          "start": 138,
          "end": 142,
          "name": "Base",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "body": {
          "type": "ClassBody",
          "start": 143,
          "end": 340,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 149,
              "end": 175,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 156,
                "end": 157,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "CallExpression",
                "start": 160,
                "end": 174,
                "callee": {
                  "type": "MemberExpression",
                  "start": 160,
                  "end": 172,
                  "object": {
                    "type": "Super",
                    "start": 160,
                    "end": 165
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 166,
                    "end": 172,
                    "name": "method",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 180,
              "end": 209,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 187,
                "end": 188,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "CallExpression",
                "start": 191,
                "end": 208,
                "callee": {
                  "type": "MemberExpression",
                  "start": 191,
                  "end": 206,
                  "object": {
                    "type": "Super",
                    "start": 191,
                    "end": 196
                  },
                  "property": {
                    "type": "Literal",
                    "start": 197,
                    "end": 205,
                    "value": "method",
                    "raw": "\"method\""
                  },
                  "computed": true,
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 214,
              "end": 241,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 221,
                "end": 222,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "CallExpression",
                "start": 225,
                "end": 240,
                "callee": {
                  "type": "MemberExpression",
                  "start": 225,
                  "end": 238,
                  "object": {
                    "type": "Super",
                    "start": 225,
                    "end": 230
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 231,
                    "end": 237,
                    "name": "method",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": true,
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 246,
              "end": 272,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 253,
                "end": 254,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "TaggedTemplateExpression",
                "start": 257,
                "end": 271,
                "tag": {
                  "type": "MemberExpression",
                  "start": 257,
                  "end": 269,
                  "object": {
                    "type": "Super",
                    "start": 257,
                    "end": 262
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 263,
                    "end": 269,
                    "name": "method",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "quasi": {
                  "type": "TemplateLiteral",
                  "start": 269,
                  "end": 271,
                  "expressions": [],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 269,
                      "end": 271,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "tail": true
                    }
                  ]
                },
                "typeArguments": null
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 277,
              "end": 306,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 284,
                "end": 285,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "TaggedTemplateExpression",
                "start": 288,
                "end": 305,
                "tag": {
                  "type": "MemberExpression",
                  "start": 288,
                  "end": 303,
                  "object": {
                    "type": "Super",
                    "start": 288,
                    "end": 293
                  },
                  "property": {
                    "type": "Literal",
                    "start": 294,
                    "end": 302,
                    "value": "method",
                    "raw": "\"method\""
                  },
                  "computed": true,
                  "optional": false
                },
                "quasi": {
                  "type": "TemplateLiteral",
                  "start": 303,
                  "end": 305,
                  "expressions": [],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 303,
                      "end": 305,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "tail": true
                    }
                  ]
                },
                "typeArguments": null
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 311,
              "end": 338,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 318,
                "end": 319,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "TaggedTemplateExpression",
                "start": 322,
                "end": 337,
                "tag": {
                  "type": "MemberExpression",
                  "start": 322,
                  "end": 335,
                  "object": {
                    "type": "Super",
                    "start": 322,
                    "end": 327
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 328,
                    "end": 334,
                    "name": "method",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": true,
                  "optional": false
                },
                "quasi": {
                  "type": "TemplateLiteral",
                  "start": 335,
                  "end": 337,
                  "expressions": [],
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 335,
                      "end": 337,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "tail": true
                    }
                  ]
                },
                "typeArguments": null
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
            }
          ]
        },
        "decorators": [
          {
            "type": "Decorator",
            "start": 117,
            "end": 121,
            "expression": {
              "type": "Identifier",
              "start": 118,
              "end": 121,
              "name": "dec",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
