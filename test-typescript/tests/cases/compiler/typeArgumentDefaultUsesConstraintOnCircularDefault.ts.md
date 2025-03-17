__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 275,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 47,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 34,
        "end": 46,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 36,
            "end": 44,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 41,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 44,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 43,
                "end": 44,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 44,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 9,
        "end": 31,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 30,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 20,
              "end": 26
            },
            "default": {
              "type": "TSTypeReference",
              "start": 29,
              "end": 30,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 59,
      "end": 89,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 88,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 71,
            "decorators": [],
            "name": "zz",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 71,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 67,
                "end": 71,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 71,
                  "decorators": [],
                  "name": "Test",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 74,
            "end": 88,
            "properties": [
              {
                "type": "Property",
                "start": 76,
                "end": 86,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 79,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 81,
                  "end": 86,
                  "raw": "\"abc\"",
                  "value": "abc"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 140,
      "end": 170,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 144,
          "end": 169,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 153,
            "decorators": [],
            "name": "zzy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 147,
              "end": 153,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 149,
                "end": 153,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 149,
                  "end": 153,
                  "decorators": [],
                  "name": "Test",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 156,
            "end": 169,
            "properties": [
              {
                "type": "Property",
                "start": 158,
                "end": 167,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 163,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 165,
                  "end": 167,
                  "properties": []
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ClassDeclaration",
      "start": 205,
      "end": 236,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 234,
        "end": 236,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 211,
        "end": 213,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 213,
        "end": 233,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 214,
            "end": 232,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 224,
              "end": 226,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 224,
                "end": 226,
                "decorators": [],
                "name": "C1",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": {
              "type": "TSAnyKeyword",
              "start": 229,
              "end": 232
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 214,
              "end": 215,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 238,
      "end": 274,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 272,
        "end": 274,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 244,
        "end": 246,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 246,
        "end": 271,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 247,
            "end": 270,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 257,
              "end": 264,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 259,
                "end": 264,
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 260,
                    "end": 263
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 257,
                "end": 259,
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": {
              "type": "TSAnyKeyword",
              "start": 267,
              "end": 270
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 247,
              "end": 248,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
