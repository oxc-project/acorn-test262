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
      "type": "ClassDeclaration",
      "start": 116,
      "end": 339,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 142,
        "end": 339,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 148,
            "end": 174,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 156,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 159,
              "end": 173,
              "callee": {
                "type": "MemberExpression",
                "start": 159,
                "end": 171,
                "object": {
                  "type": "Super",
                  "start": 159,
                  "end": 164
                },
                "property": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 171,
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
            "start": 179,
            "end": 208,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 186,
              "end": 187,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 190,
              "end": 207,
              "callee": {
                "type": "MemberExpression",
                "start": 190,
                "end": 205,
                "object": {
                  "type": "Super",
                  "start": 190,
                  "end": 195
                },
                "property": {
                  "type": "Literal",
                  "start": 196,
                  "end": 204,
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
            "start": 213,
            "end": 240,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 220,
              "end": 221,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 224,
              "end": 239,
              "callee": {
                "type": "MemberExpression",
                "start": 224,
                "end": 237,
                "object": {
                  "type": "Super",
                  "start": 224,
                  "end": 229
                },
                "property": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 236,
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
            "start": 245,
            "end": 271,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 252,
              "end": 253,
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "TaggedTemplateExpression",
              "start": 256,
              "end": 270,
              "tag": {
                "type": "MemberExpression",
                "start": 256,
                "end": 268,
                "object": {
                  "type": "Super",
                  "start": 256,
                  "end": 261
                },
                "property": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 268,
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
                "start": 268,
                "end": 270,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 268,
                    "end": 270,
                    "value": {
                      "cooked": "",
                      "raw": ""
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
            "start": 276,
            "end": 305,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 283,
              "end": 284,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "TaggedTemplateExpression",
              "start": 287,
              "end": 304,
              "tag": {
                "type": "MemberExpression",
                "start": 287,
                "end": 302,
                "object": {
                  "type": "Super",
                  "start": 287,
                  "end": 292
                },
                "property": {
                  "type": "Literal",
                  "start": 293,
                  "end": 301,
                  "value": "method",
                  "raw": "\"method\""
                },
                "optional": false,
                "computed": true
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "start": 302,
                "end": 304,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 302,
                    "end": 304,
                    "value": {
                      "cooked": "",
                      "raw": ""
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
            "start": 310,
            "end": 337,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 317,
              "end": 318,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "TaggedTemplateExpression",
              "start": 321,
              "end": 336,
              "tag": {
                "type": "MemberExpression",
                "start": 321,
                "end": 334,
                "object": {
                  "type": "Super",
                  "start": 321,
                  "end": 326
                },
                "property": {
                  "type": "Identifier",
                  "start": 327,
                  "end": 333,
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
                "start": 334,
                "end": 336,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 334,
                    "end": 336,
                    "value": {
                      "cooked": "",
                      "raw": ""
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
