__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 360,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 54,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 15,
        "end": 54,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 21,
            "end": 52,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 42,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 42,
              "end": 52,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 45,
                "end": 52,
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
        "end": 14,
        "decorators": [],
        "name": "Abstract",
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
      "start": 56,
      "end": 91,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 88,
        "end": 91,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 70,
        "decorators": [],
        "name": "Concrete",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 79,
        "end": 87,
        "decorators": [],
        "name": "Abstract",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 93,
      "end": 146,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 109,
        "decorators": [],
        "name": "Constructor",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "start": 120,
        "end": 145,
        "abstract": false,
        "params": [
          {
            "type": "RestElement",
            "start": 125,
            "end": 139,
            "argument": {
              "type": "Identifier",
              "start": 128,
              "end": 132,
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 132,
              "end": 139,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 134,
                "end": 139,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 134,
                  "end": 137
                }
              }
            },
            "value": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 141,
          "end": 145,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 144,
            "end": 145,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 144,
              "end": 145,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 109,
        "end": 117,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 110,
            "end": 116,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "start": 114,
              "end": 116,
              "members": []
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
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
      "start": 148,
      "end": 245,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 203,
        "end": 245,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 209,
            "end": 243,
            "argument": {
              "type": "ClassExpression",
              "start": 216,
              "end": 242,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 235,
                "end": 242,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": {
                "type": "Identifier",
                "start": 230,
                "end": 234,
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 162,
        "decorators": [],
        "name": "Mixin",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 190,
          "end": 201,
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 194,
            "end": 201,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 196,
              "end": 201,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 196,
                "end": 201,
                "decorators": [],
                "name": "TBase",
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
        "start": 162,
        "end": 189,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 163,
            "end": 188,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 177,
              "end": 188,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 177,
                "end": 188,
                "decorators": [],
                "name": "Constructor",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 163,
              "end": 168,
              "decorators": [],
              "name": "TBase",
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
      "start": 247,
      "end": 262,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 259,
        "end": 262,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 253,
        "end": 258,
        "decorators": [],
        "name": "Empty",
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
      "start": 264,
      "end": 360,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 304,
        "end": 360,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 310,
            "end": 358,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 317,
              "end": 324,
              "decorators": [],
              "name": "trigger",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 324,
              "end": 358,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 327,
                "end": 358,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 337,
                    "end": 352,
                    "directive": null,
                    "expression": {
                      "type": "NewExpression",
                      "start": 337,
                      "end": 351,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 341,
                        "end": 349,
                        "decorators": [],
                        "name": "Concrete",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
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
        "start": 270,
        "end": 282,
        "decorators": [],
        "name": "CrashTrigger",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "CallExpression",
        "start": 291,
        "end": 303,
        "arguments": [
          {
            "type": "Identifier",
            "start": 297,
            "end": 302,
            "decorators": [],
            "name": "Empty",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 291,
          "end": 296,
          "decorators": [],
          "name": "Mixin",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
