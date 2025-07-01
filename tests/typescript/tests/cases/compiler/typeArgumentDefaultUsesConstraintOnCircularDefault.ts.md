__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 11
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 20,
              "end": 26
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 29,
                "end": 30
              },
              "typeArguments": null,
              "start": 29,
              "end": 30
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 10,
            "end": 30
          }
        ],
        "start": 9,
        "end": 31
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 41
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 43,
                  "end": 44
                },
                "typeArguments": null,
                "start": 43,
                "end": 44
              },
              "start": 41,
              "end": 44
            },
            "accessibility": null,
            "static": false,
            "start": 36,
            "end": 44
          }
        ],
        "start": 34,
        "end": 46
      },
      "declare": false,
      "start": 0,
      "end": 47
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "zz",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Test",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 67,
                  "end": 71
                },
                "typeArguments": null,
                "start": 67,
                "end": 71
              },
              "start": 65,
              "end": 71
            },
            "start": 63,
            "end": 71
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 76,
                  "end": 79
                },
                "value": {
                  "type": "Literal",
                  "value": "abc",
                  "raw": "\"abc\"",
                  "start": 81,
                  "end": 86
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 76,
                "end": 86
              }
            ],
            "start": 74,
            "end": 88
          },
          "definite": false,
          "start": 63,
          "end": 88
        }
      ],
      "declare": false,
      "start": 59,
      "end": 89
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "zzy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Test",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 149,
                  "end": 153
                },
                "typeArguments": null,
                "start": 149,
                "end": 153
              },
              "start": 147,
              "end": 153
            },
            "start": 144,
            "end": 153
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 158,
                  "end": 163
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 165,
                  "end": 167
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 158,
                "end": 167
              }
            ],
            "start": 156,
            "end": 169
          },
          "definite": false,
          "start": 144,
          "end": 169
        }
      ],
      "declare": false,
      "start": 140,
      "end": 170
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 211,
        "end": 213
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 215
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C1",
                "optional": false,
                "typeAnnotation": null,
                "start": 224,
                "end": 226
              },
              "typeArguments": null,
              "start": 224,
              "end": 226
            },
            "default": {
              "type": "TSAnyKeyword",
              "start": 229,
              "end": 232
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 214,
            "end": 232
          }
        ],
        "start": 213,
        "end": 233
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 234,
        "end": 236
      },
      "abstract": false,
      "declare": false,
      "start": 205,
      "end": 236
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 244,
        "end": 246
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 247,
              "end": 248
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null,
                "start": 257,
                "end": 259
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 260,
                    "end": 263
                  }
                ],
                "start": 259,
                "end": 264
              },
              "start": 257,
              "end": 264
            },
            "default": {
              "type": "TSAnyKeyword",
              "start": 267,
              "end": 270
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 247,
            "end": 270
          }
        ],
        "start": 246,
        "end": 271
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 272,
        "end": 274
      },
      "abstract": false,
      "declare": false,
      "start": 238,
      "end": 274
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 274
}
```
