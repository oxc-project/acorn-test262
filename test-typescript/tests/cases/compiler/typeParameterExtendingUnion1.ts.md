__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 204,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 26,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 12,
        "name": "Animal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 26,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 24,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 18,
              "name": "run",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 18,
              "end": 24,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 21,
                "end": 24,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
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
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 27,
      "end": 60,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 36,
        "name": "Cat",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 45,
        "end": 51,
        "name": "Animal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 52,
        "end": 60,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 54,
            "end": 58,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 58,
              "name": "meow",
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
    },
    {
      "type": "ClassDeclaration",
      "start": 61,
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 70,
        "name": "Dog",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 79,
        "end": 85,
        "name": "Animal",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 86,
        "end": 94,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 88,
            "end": 92,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 92,
              "name": "woof",
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
    },
    {
      "type": "FunctionDeclaration",
      "start": 96,
      "end": 136,
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 108,
        "name": "run",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 109,
          "end": 118,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 110,
            "end": 118,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 112,
              "end": 118,
              "typeName": {
                "type": "Identifier",
                "start": 112,
                "end": 118,
                "name": "Animal",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 120,
        "end": 136,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 126,
            "end": 134,
            "expression": {
              "type": "CallExpression",
              "start": 126,
              "end": 133,
              "callee": {
                "type": "MemberExpression",
                "start": 126,
                "end": 131,
                "object": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 127,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 131,
                  "name": "run",
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
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 138,
      "end": 204,
      "id": {
        "type": "Identifier",
        "start": 147,
        "end": 148,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 170,
          "end": 174,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 171,
            "end": 174,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 173,
              "end": 174,
              "typeName": {
                "type": "Identifier",
                "start": 173,
                "end": 174,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 176,
        "end": 204,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 182,
            "end": 190,
            "expression": {
              "type": "CallExpression",
              "start": 182,
              "end": 189,
              "callee": {
                "type": "MemberExpression",
                "start": 182,
                "end": 187,
                "object": {
                  "type": "Identifier",
                  "start": 182,
                  "end": 183,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 184,
                  "end": 187,
                  "name": "run",
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
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 195,
            "end": 202,
            "expression": {
              "type": "CallExpression",
              "start": 195,
              "end": 201,
              "callee": {
                "type": "Identifier",
                "start": 195,
                "end": 198,
                "name": "run",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 199,
                  "end": 200,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 148,
        "end": 169,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 149,
            "end": 168,
            "name": {
              "type": "Identifier",
              "start": 149,
              "end": 150,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 159,
              "end": 168,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 159,
                  "end": 162,
                  "typeName": {
                    "type": "Identifier",
                    "start": 159,
                    "end": 162,
                    "name": "Cat",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 165,
                  "end": 168,
                  "typeName": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 168,
                    "name": "Dog",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
