__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 296,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "name": "s",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 13,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7,
                "end": 13
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 15,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 19,
          "end": 28,
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 28,
            "name": "n",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 30,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 40,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 40,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 40,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 37,
                "end": 40
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
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 42,
      "end": 296,
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 49,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 50,
        "end": 296,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 56,
            "end": 68,
            "static": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "name": "s",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 67,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 61,
                "end": 67
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 73,
            "end": 81,
            "static": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
            "start": 86,
            "end": 109,
            "static": true,
            "computed": true,
            "key": {
              "type": "BinaryExpression",
              "start": 94,
              "end": 99,
              "left": {
                "type": "Identifier",
                "start": 94,
                "end": 95,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 98,
                "end": 99,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 100,
              "end": 108,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 102,
                "end": 108
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 114,
            "end": 126,
            "static": false,
            "computed": true,
            "key": {
              "type": "BinaryExpression",
              "start": 115,
              "end": 120,
              "left": {
                "type": "Identifier",
                "start": 115,
                "end": 116,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 119,
                "end": 120,
                "name": "n",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "value": {
              "type": "Literal",
              "start": 124,
              "end": 125,
              "value": 2,
              "raw": "2"
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
            "start": 131,
            "end": 146,
            "static": false,
            "computed": true,
            "key": {
              "type": "UnaryExpression",
              "start": 132,
              "end": 134,
              "operator": "+",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 133,
                "end": 134,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 135,
              "end": 145,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 137,
                "end": 145,
                "exprName": {
                  "type": "Identifier",
                  "start": 144,
                  "end": 145,
                  "name": "s",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 151,
            "end": 171,
            "static": true,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 159,
              "end": 161,
              "value": "",
              "raw": "\"\""
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 162,
              "end": 170,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 164,
                "end": 170
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 176,
            "end": 188,
            "static": false,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 177,
              "end": 178,
              "value": 0,
              "raw": "0"
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 187,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 181,
                "end": 187
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 193,
            "end": 205,
            "static": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 194,
              "end": 195,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 196,
              "end": 204,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 198,
                "end": 204
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 210,
            "end": 237,
            "static": true,
            "computed": true,
            "key": {
              "type": "TSTypeAssertion",
              "start": 218,
              "end": 227,
              "expression": {
                "type": "Literal",
                "start": 223,
                "end": 227,
                "value": true,
                "raw": "true"
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 219,
                "end": 222
              }
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 228,
              "end": 236,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 230,
                "end": 236
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 242,
            "end": 260,
            "static": false,
            "computed": true,
            "key": {
              "type": "TemplateLiteral",
              "start": 243,
              "end": 254,
              "expressions": [],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 243,
                  "end": 254,
                  "value": {
                    "cooked": "hello bye",
                    "raw": "hello bye"
                  },
                  "tail": true
                }
              ]
            },
            "value": {
              "type": "Literal",
              "start": 258,
              "end": 259,
              "value": 0,
              "raw": "0"
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
            "start": 265,
            "end": 294,
            "static": true,
            "computed": true,
            "key": {
              "type": "TemplateLiteral",
              "start": 273,
              "end": 289,
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 282,
                  "end": 283,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 273,
                  "end": 282,
                  "value": {
                    "cooked": "hello ",
                    "raw": "hello "
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 283,
                  "end": 289,
                  "value": {
                    "cooked": " bye",
                    "raw": " bye"
                  },
                  "tail": true
                }
              ]
            },
            "value": {
              "type": "Literal",
              "start": 293,
              "end": 294,
              "value": 0,
              "raw": "0"
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
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
