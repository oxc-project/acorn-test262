__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "base",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 35
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 36,
              "end": 37
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 36,
            "end": 37
          }
        ],
        "start": 35,
        "end": 38
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 57
            },
            "typeParameters": null,
            "superClass": null,
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
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 75,
                    "end": 79
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
                        "start": 81,
                        "end": 82
                      },
                      "typeArguments": null,
                      "start": 81,
                      "end": 82
                    },
                    "start": 79,
                    "end": 82
                  },
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 68,
                  "end": 83
                }
              ],
              "start": 58,
              "end": 89
            },
            "abstract": false,
            "declare": false,
            "start": 47,
            "end": 89
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 105
            },
            "start": 94,
            "end": 106
          }
        ],
        "start": 41,
        "end": 108
      },
      "expression": false,
      "start": 22,
      "end": 108
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Gen",
        "optional": false,
        "typeAnnotation": null,
        "start": 116,
        "end": 119
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
              "start": 120,
              "end": 121
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 120,
            "end": 121
          }
        ],
        "start": 119,
        "end": 122
      },
      "superClass": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "base",
          "optional": false,
          "typeAnnotation": null,
          "start": 131,
          "end": 135
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 136,
                "end": 137
              },
              "typeArguments": null,
              "start": 136,
              "end": 137
            }
          ],
          "start": 135,
          "end": 138
        },
        "arguments": [],
        "optional": false,
        "start": 131,
        "end": 140
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 141,
        "end": 143
      },
      "abstract": false,
      "declare": false,
      "start": 110,
      "end": 143
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Spec",
        "optional": false,
        "typeAnnotation": null,
        "start": 176,
        "end": 180
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Gen",
        "optional": false,
        "typeAnnotation": null,
        "start": 189,
        "end": 192
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 193,
            "end": 199
          }
        ],
        "start": 192,
        "end": 200
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 201,
        "end": 203
      },
      "abstract": false,
      "declare": false,
      "start": 170,
      "end": 203
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSTypeAssertion",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 206,
          "end": 212
        },
        "expression": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Spec",
            "optional": false,
            "typeAnnotation": null,
            "start": 213,
            "end": 217
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 218,
            "end": 222
          },
          "optional": false,
          "computed": false,
          "start": 213,
          "end": 222
        },
        "start": 205,
        "end": 222
      },
      "directive": null,
      "start": 205,
      "end": 223
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 223
}
```
