__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 293,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 52,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 34,
        "end": 52,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 40,
            "end": 50,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 46,
              "decorators": [],
              "name": "_field",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 49,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 48,
                "end": 49,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 24,
        "decorators": [],
        "name": "TableClass",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 24,
        "end": 33,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 25,
            "end": 32,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 29,
              "end": 32
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 54,
      "end": 85,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 61,
        "end": 85,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 66,
          "end": 71,
          "decorators": [],
          "name": "Table",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 74,
          "end": 84,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 74,
            "end": 84,
            "decorators": [],
            "name": "TableClass",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 87,
      "end": 161,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 122,
        "end": 161,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 128,
            "end": 159,
            "argument": {
              "type": "BinaryExpression",
              "start": 135,
              "end": 158,
              "operator": "instanceof",
              "left": {
                "type": "Identifier",
                "start": 135,
                "end": 136,
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 148,
                "end": 158,
                "decorators": [],
                "name": "TableClass",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 98,
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 116,
          "end": 120,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 117,
            "end": 120,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 119,
              "end": 120,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 119,
                "end": 120,
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
        "start": 98,
        "end": 115,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 99,
            "end": 114,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 109,
              "end": 114,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 109,
                "end": 114,
                "decorators": [],
                "name": "Table",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
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
      "type": "FunctionDeclaration",
      "start": 163,
      "end": 243,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 204,
        "end": 243,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 210,
            "end": 241,
            "argument": {
              "type": "BinaryExpression",
              "start": 217,
              "end": 240,
              "operator": "instanceof",
              "left": {
                "type": "Identifier",
                "start": 217,
                "end": 218,
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 230,
                "end": 240,
                "decorators": [],
                "name": "TableClass",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 172,
        "end": 175,
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 198,
          "end": 202,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 199,
            "end": 202,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 201,
              "end": 202,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 201,
                "end": 202,
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
        "start": 175,
        "end": 197,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 176,
            "end": 196,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 186,
              "end": 196,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 186,
                "end": 196,
                "decorators": [],
                "name": "TableClass",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 176,
              "end": 177,
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
      "start": 245,
      "end": 268,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 259,
          "end": 267,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 259,
            "end": 267,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 260,
              "end": 267,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 262,
                "end": 267,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 267,
                  "decorators": [],
                  "name": "Table",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 269,
      "end": 293,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 269,
        "end": 292,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 269,
          "end": 270,
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 282,
          "end": 292,
          "decorators": [],
          "name": "TableClass",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
