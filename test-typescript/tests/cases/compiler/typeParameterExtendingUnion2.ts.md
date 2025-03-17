__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 207,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 26,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 26,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 24,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 18,
              "decorators": [],
              "name": "run",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 18,
              "end": 24,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 21,
                "end": 24,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 12,
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 27,
      "end": 60,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 52,
        "end": 60,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 54,
            "end": 58,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 58,
              "decorators": [],
              "name": "meow",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 36,
        "decorators": [],
        "name": "Cat",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 45,
        "end": 51,
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 61,
      "end": 94,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 86,
        "end": 94,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 88,
            "end": 92,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 92,
              "decorators": [],
              "name": "woof",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 70,
        "decorators": [],
        "name": "Dog",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 79,
        "end": 85,
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 96,
      "end": 139,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 123,
        "end": 139,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 129,
            "end": 137,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 129,
              "end": 136,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 129,
                "end": 134,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 130,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 134,
                  "decorators": [],
                  "name": "run",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 108,
        "decorators": [],
        "name": "run",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 109,
          "end": 121,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 110,
            "end": 121,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 112,
              "end": 121,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 112,
                  "end": 115,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 112,
                    "end": 115,
                    "decorators": [],
                    "name": "Cat",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 118,
                  "end": 121,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 118,
                    "end": 121,
                    "decorators": [],
                    "name": "Dog",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 141,
      "end": 207,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 179,
        "end": 207,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 185,
            "end": 193,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 185,
              "end": 192,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 185,
                "end": 190,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 185,
                  "end": 186,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 187,
                  "end": 190,
                  "decorators": [],
                  "name": "run",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 198,
            "end": 205,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 198,
              "end": 204,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 202,
                  "end": 203,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 198,
                "end": 201,
                "decorators": [],
                "name": "run",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 150,
        "end": 151,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 173,
          "end": 177,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 174,
            "end": 177,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 176,
              "end": 177,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 176,
                "end": 177,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 151,
        "end": 172,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 152,
            "end": 171,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 162,
              "end": 171,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 162,
                  "end": 165,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 162,
                    "end": 165,
                    "decorators": [],
                    "name": "Cat",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 168,
                  "end": 171,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 168,
                    "end": 171,
                    "decorators": [],
                    "name": "Dog",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 152,
              "end": 153,
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
