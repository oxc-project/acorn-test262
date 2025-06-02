__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 342,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 88,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 41,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 42,
        "end": 88,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 48,
            "end": 86,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 61,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 61,
              "end": 86,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 62,
                  "end": 76,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 69,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 77,
                "end": 85,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 79,
                  "end": 85
                }
              },
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 90,
      "end": 114,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 96,
          "end": 113,
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 102,
            "decorators": [],
            "name": "method",
            "optional": false,
            "typeAnnotation": null
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
        "decorators": [
          {
            "type": "Decorator",
            "start": 117,
            "end": 121,
            "expression": {
              "type": "Identifier",
              "start": 118,
              "end": 121,
              "decorators": [],
              "name": "dec",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 128,
          "end": 129,
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "start": 138,
          "end": 142,
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 143,
          "end": 340,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 149,
              "end": 175,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 156,
                "end": 157,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
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
                    "decorators": [],
                    "name": "method",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 180,
              "end": 209,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 187,
                "end": 188,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
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
                  "optional": false,
                  "computed": true
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 214,
              "end": 241,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 221,
                "end": 222,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
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
                    "decorators": [],
                    "name": "method",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": true
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 246,
              "end": 272,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 253,
                "end": 254,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
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
                    "decorators": [],
                    "name": "method",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "quasi": {
                  "type": "TemplateLiteral",
                  "start": 269,
                  "end": 271,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 269,
                      "end": 271,
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true
                    }
                  ],
                  "expressions": []
                }
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 277,
              "end": 306,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 284,
                "end": 285,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
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
                  "optional": false,
                  "computed": true
                },
                "typeArguments": null,
                "quasi": {
                  "type": "TemplateLiteral",
                  "start": 303,
                  "end": 305,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 303,
                      "end": 305,
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true
                    }
                  ],
                  "expressions": []
                }
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 311,
              "end": 338,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 318,
                "end": 319,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
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
                    "decorators": [],
                    "name": "method",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": true
                },
                "typeArguments": null,
                "quasi": {
                  "type": "TemplateLiteral",
                  "start": 335,
                  "end": 337,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 335,
                      "end": 337,
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true
                    }
                  ],
                  "expressions": []
                }
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
