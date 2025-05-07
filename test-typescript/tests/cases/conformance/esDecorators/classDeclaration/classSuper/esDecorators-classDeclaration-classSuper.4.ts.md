__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 339,
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
          "definite": false,
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
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 88,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 42,
        "end": 88,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 48,
            "end": 86,
            "accessibility": null,
            "computed": false,
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 61,
              "end": 86,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 62,
                  "end": 76,
                  "argument": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 69,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
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
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
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
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
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
          "definite": false,
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
            "raw": "\"method\"",
            "value": "method",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 116,
      "end": 339,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 142,
        "end": 339,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 148,
            "end": 174,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 156,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 159,
              "end": 173,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 159,
                "end": 171,
                "computed": false,
                "object": {
                  "type": "Super",
                  "start": 159,
                  "end": 164
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 171,
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 179,
            "end": 208,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 186,
              "end": 187,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 190,
              "end": 207,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 190,
                "end": 205,
                "computed": true,
                "object": {
                  "type": "Super",
                  "start": 190,
                  "end": 195
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 196,
                  "end": 204,
                  "raw": "\"method\"",
                  "value": "method",
                  "regex": null,
                  "bigint": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 213,
            "end": 240,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 220,
              "end": 221,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 224,
              "end": 239,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 224,
                "end": 237,
                "computed": true,
                "object": {
                  "type": "Super",
                  "start": 224,
                  "end": 229
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 236,
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 245,
            "end": 271,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 252,
              "end": 253,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "TaggedTemplateExpression",
              "start": 256,
              "end": 270,
              "quasi": {
                "type": "TemplateLiteral",
                "start": 268,
                "end": 270,
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 268,
                    "end": 270,
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  }
                ]
              },
              "tag": {
                "type": "MemberExpression",
                "start": 256,
                "end": 268,
                "computed": false,
                "object": {
                  "type": "Super",
                  "start": 256,
                  "end": 261
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 268,
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeArguments": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 276,
            "end": 305,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 283,
              "end": 284,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "TaggedTemplateExpression",
              "start": 287,
              "end": 304,
              "quasi": {
                "type": "TemplateLiteral",
                "start": 302,
                "end": 304,
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 302,
                    "end": 304,
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  }
                ]
              },
              "tag": {
                "type": "MemberExpression",
                "start": 287,
                "end": 302,
                "computed": true,
                "object": {
                  "type": "Super",
                  "start": 287,
                  "end": 292
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 293,
                  "end": 301,
                  "raw": "\"method\"",
                  "value": "method",
                  "regex": null,
                  "bigint": null
                }
              },
              "typeArguments": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 310,
            "end": 337,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 317,
              "end": 318,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "TaggedTemplateExpression",
              "start": 321,
              "end": 336,
              "quasi": {
                "type": "TemplateLiteral",
                "start": 334,
                "end": 336,
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 334,
                    "end": 336,
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  }
                ]
              },
              "tag": {
                "type": "MemberExpression",
                "start": 321,
                "end": 334,
                "computed": true,
                "object": {
                  "type": "Super",
                  "start": 321,
                  "end": 326
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 327,
                  "end": 333,
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 116,
          "end": 120,
          "expression": {
            "type": "Identifier",
            "start": 117,
            "end": 120,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 127,
        "end": 128,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 137,
        "end": 141,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
