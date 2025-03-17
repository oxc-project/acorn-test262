__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 294,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 52,
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 24,
        "name": "TableClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 34,
        "end": 52,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 40,
            "end": 50,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 46,
              "name": "_field",
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
              "start": 46,
              "end": 49,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 48,
                "end": 49,
                "typeName": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
                  "name": "S",
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
        "start": 24,
        "end": 33,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 25,
            "end": 32,
            "name": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 29,
              "end": 32
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 54,
      "end": 85,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 61,
        "end": 85,
        "id": {
          "type": "Identifier",
          "start": 66,
          "end": 71,
          "name": "Table",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 74,
          "end": 84,
          "typeName": {
            "type": "Identifier",
            "start": 74,
            "end": 84,
            "name": "TableClass",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "FunctionDeclaration",
      "start": 87,
      "end": 161,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 98,
        "name": "fn",
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
          "start": 116,
          "end": 120,
          "name": "o",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 117,
            "end": 120,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 119,
              "end": 120,
              "typeName": {
                "type": "Identifier",
                "start": 119,
                "end": 120,
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
              "left": {
                "type": "Identifier",
                "start": 135,
                "end": 136,
                "name": "o",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 148,
                "end": 158,
                "name": "TableClass",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 98,
        "end": 115,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 99,
            "end": 114,
            "name": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 109,
              "end": 114,
              "typeName": {
                "type": "Identifier",
                "start": 109,
                "end": 114,
                "name": "Table",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 163,
      "end": 243,
      "id": {
        "type": "Identifier",
        "start": 172,
        "end": 175,
        "name": "fn2",
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
          "start": 198,
          "end": 202,
          "name": "o",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 199,
            "end": 202,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 201,
              "end": 202,
              "typeName": {
                "type": "Identifier",
                "start": 201,
                "end": 202,
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
              "left": {
                "type": "Identifier",
                "start": 217,
                "end": 218,
                "name": "o",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 230,
                "end": 240,
                "name": "TableClass",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 175,
        "end": 197,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 176,
            "end": 196,
            "name": {
              "type": "Identifier",
              "start": 176,
              "end": 177,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 186,
              "end": 196,
              "typeName": {
                "type": "Identifier",
                "start": 186,
                "end": 196,
                "name": "TableClass",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 259,
            "end": 267,
            "name": "o",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 260,
              "end": 267,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 262,
                "end": 267,
                "typeName": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 267,
                  "name": "Table",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 269,
      "end": 293,
      "expression": {
        "type": "BinaryExpression",
        "start": 269,
        "end": 292,
        "left": {
          "type": "Identifier",
          "start": 269,
          "end": 270,
          "name": "o",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "start": 282,
          "end": 292,
          "name": "TableClass",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
