__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 205,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 26,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 26,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 24,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 23,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 17,
                "end": 23,
                "typeName": {
                  "type": "Identifier",
                  "start": 17,
                  "end": 23,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
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
    {
      "type": "ClassDeclaration",
      "start": 28,
      "end": 71,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 44,
        "end": 45,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 46,
        "end": 71,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 52,
            "end": 69,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 68,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 62,
                "end": 68
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 72,
      "end": 116,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 80,
        "decorators": [],
        "name": "D2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 89,
        "end": 90,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 91,
        "end": 116,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 97,
            "end": 114,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 105,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 105,
              "end": 113,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 107,
                "end": 113
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 118,
      "end": 127,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 122,
          "end": 126,
          "id": {
            "type": "Identifier",
            "start": 122,
            "end": 126,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 123,
              "end": 126,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 125,
                "end": 126,
                "typeName": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 126,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 128,
      "end": 137,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 136,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 136,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 133,
              "end": 136,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 135,
                "end": 136,
                "typeName": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 136,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 149,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 142,
          "end": 148,
          "id": {
            "type": "Identifier",
            "start": 142,
            "end": 148,
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 144,
              "end": 148,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 146,
                "end": 148,
                "typeName": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 148,
                  "decorators": [],
                  "name": "D2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 151,
      "end": 160,
      "expression": {
        "type": "AssignmentExpression",
        "start": 151,
        "end": 159,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 151,
          "end": 154,
          "object": {
            "type": "Identifier",
            "start": 151,
            "end": 152,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 153,
            "end": 154,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 157,
          "end": 159,
          "value": "",
          "raw": "''"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 161,
      "end": 167,
      "expression": {
        "type": "AssignmentExpression",
        "start": 161,
        "end": 166,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 161,
          "end": 162,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 165,
          "end": 166,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 168,
      "end": 176,
      "expression": {
        "type": "AssignmentExpression",
        "start": 168,
        "end": 175,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 168,
          "end": 171,
          "object": {
            "type": "Identifier",
            "start": 168,
            "end": 169,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 170,
            "end": 171,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 174,
          "end": 175,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
