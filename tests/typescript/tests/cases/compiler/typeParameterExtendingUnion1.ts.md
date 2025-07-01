__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 12
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
              "name": "run",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 18
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 21,
                "end": 24
              },
              "expression": false,
              "start": 18,
              "end": 24
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 15,
            "end": 24
          }
        ],
        "start": 13,
        "end": 26
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 26
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cat",
        "optional": false,
        "typeAnnotation": null,
        "start": 33,
        "end": 36
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null,
        "start": 45,
        "end": 51
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
              "name": "meow",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 58
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 54,
            "end": 58
          }
        ],
        "start": 52,
        "end": 60
      },
      "abstract": false,
      "declare": false,
      "start": 27,
      "end": 60
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Dog",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 70
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null,
        "start": 79,
        "end": 85
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
              "name": "woof",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 92
            },
            "typeAnnotation": null,
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 88,
            "end": 92
          }
        ],
        "start": 86,
        "end": 94
      },
      "abstract": false,
      "declare": false,
      "start": 61,
      "end": 94
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "run",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 108
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Animal",
                "optional": false,
                "typeAnnotation": null,
                "start": 112,
                "end": 118
              },
              "typeArguments": null,
              "start": 112,
              "end": 118
            },
            "start": 110,
            "end": 118
          },
          "start": 109,
          "end": 118
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 126,
                  "end": 127
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "run",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 128,
                  "end": 131
                },
                "optional": false,
                "computed": false,
                "start": 126,
                "end": 131
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 126,
              "end": 133
            },
            "directive": null,
            "start": 126,
            "end": 134
          }
        ],
        "start": 120,
        "end": 136
      },
      "expression": false,
      "start": 96,
      "end": 136
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 148
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
              "start": 149,
              "end": 150
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Cat",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 159,
                    "end": 162
                  },
                  "typeArguments": null,
                  "start": 159,
                  "end": 162
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Dog",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 165,
                    "end": 168
                  },
                  "typeArguments": null,
                  "start": 165,
                  "end": 168
                }
              ],
              "start": 159,
              "end": 168
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 149,
            "end": 168
          }
        ],
        "start": 148,
        "end": 169
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
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
                "start": 173,
                "end": 174
              },
              "typeArguments": null,
              "start": 173,
              "end": 174
            },
            "start": 171,
            "end": 174
          },
          "start": 170,
          "end": 174
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 182,
                  "end": 183
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "run",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 184,
                  "end": 187
                },
                "optional": false,
                "computed": false,
                "start": 182,
                "end": 187
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 182,
              "end": 189
            },
            "directive": null,
            "start": 182,
            "end": 190
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "run",
                "optional": false,
                "typeAnnotation": null,
                "start": 195,
                "end": 198
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 199,
                  "end": 200
                }
              ],
              "optional": false,
              "start": 195,
              "end": 201
            },
            "directive": null,
            "start": 195,
            "end": 202
          }
        ],
        "start": 176,
        "end": 204
      },
      "expression": false,
      "start": 138,
      "end": 204
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 204
}
```
