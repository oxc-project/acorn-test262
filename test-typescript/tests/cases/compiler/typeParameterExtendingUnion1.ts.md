typeParameterExtendingUnion1.ts
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
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 18,
              "decorators": [],
              "name": "run",
              "optional": false
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
              "params": []
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
        "optional": false
      },
      "implements": [],
      "superClass": null
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
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 45,
        "end": 51,
        "decorators": [],
        "name": "Animal",
        "optional": false
      }
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
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 79,
        "end": 85,
        "decorators": [],
        "name": "Animal",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 96,
      "end": 136,
      "async": false,
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
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 126,
                "end": 131,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 127,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 131,
                  "decorators": [],
                  "name": "run",
                  "optional": false
                }
              },
              "optional": false
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
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 109,
          "end": 118,
          "decorators": [],
          "name": "a",
          "optional": false,
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
                "decorators": [],
                "name": "Animal",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 138,
      "end": 204,
      "async": false,
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
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 182,
                "end": 187,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 182,
                  "end": 183,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 184,
                  "end": 187,
                  "decorators": [],
                  "name": "run",
                  "optional": false
                }
              },
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 195,
            "end": 202,
            "expression": {
              "type": "CallExpression",
              "start": 195,
              "end": 201,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 199,
                  "end": 200,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 195,
                "end": 198,
                "decorators": [],
                "name": "run",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 147,
        "end": 148,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 170,
          "end": 174,
          "decorators": [],
          "name": "a",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 148,
        "end": 169,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 149,
            "end": 168,
            "const": false,
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
                    "decorators": [],
                    "name": "Cat",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 165,
                  "end": 168,
                  "typeName": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 168,
                    "decorators": [],
                    "name": "Dog",
                    "optional": false
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 149,
              "end": 150,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
