__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 234,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 24,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 24,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 22,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "name": "x",
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
              "start": 18,
              "end": 21,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 20,
                "end": 21,
                "typeName": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 21,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 26,
      "end": 172,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 33,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 45,
        "end": 46,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 55,
        "end": 172,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 61,
            "end": 66,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "name": "y",
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
              "start": 62,
              "end": 65,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 64,
                "end": 65,
                "typeName": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 65,
                  "name": "T",
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
            "type": "MethodDefinition",
            "start": 71,
            "end": 170,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 71,
              "end": 82,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 82,
              "end": 170,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 85,
                "end": 170,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 95,
                    "end": 103,
                    "expression": {
                      "type": "CallExpression",
                      "start": 95,
                      "end": 102,
                      "callee": {
                        "type": "Super",
                        "start": 95,
                        "end": 100
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
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 33,
        "end": 36,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 34,
            "end": 35,
            "name": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 46,
        "end": 54,
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 47,
            "end": 53
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 174,
      "end": 191,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 178,
          "end": 190,
          "id": {
            "type": "Identifier",
            "start": 178,
            "end": 190,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 190,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 181,
                "end": 190,
                "typeName": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 182,
                  "name": "D",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 182,
                  "end": 190,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 183,
                      "end": 189
                    }
                  ]
                }
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
      "start": 192,
      "end": 212,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 196,
          "end": 211,
          "id": {
            "type": "Identifier",
            "start": 196,
            "end": 205,
            "name": "r",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 197,
              "end": 205,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 199,
                "end": 205
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 208,
            "end": 211,
            "object": {
              "type": "Identifier",
              "start": 208,
              "end": 209,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 210,
              "end": 211,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 213,
      "end": 234,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 217,
          "end": 233,
          "id": {
            "type": "Identifier",
            "start": 217,
            "end": 227,
            "name": "r2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 219,
              "end": 227,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 221,
                "end": 227
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 230,
            "end": 233,
            "object": {
              "type": "Identifier",
              "start": 230,
              "end": 231,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 232,
              "end": 233,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
