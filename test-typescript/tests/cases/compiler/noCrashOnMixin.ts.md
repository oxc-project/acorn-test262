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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 14,
        "name": "Abstract",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 15,
        "end": 54,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 21,
            "end": 52,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 42,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 42,
              "end": 52,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 45,
                "end": 52,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "protected"
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
      "start": 56,
      "end": 91,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 70,
        "name": "Concrete",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 79,
        "end": 87,
        "name": "Abstract",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 88,
        "end": 91,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 93,
      "end": 146,
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 109,
        "name": "Constructor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 110,
              "end": 111,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "start": 114,
              "end": 116,
              "members": []
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "start": 120,
        "end": 145,
        "abstract": false,
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "start": 125,
            "end": 139,
            "argument": {
              "type": "Identifier",
              "start": 128,
              "end": 132,
              "name": "args",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
            "typeName": {
              "type": "Identifier",
              "start": 144,
              "end": 145,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 148,
      "end": 245,
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 162,
        "name": "Mixin",
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
          "start": 190,
          "end": 201,
          "name": "Base",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 194,
            "end": 201,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 196,
              "end": 201,
              "typeName": {
                "type": "Identifier",
                "start": 196,
                "end": 201,
                "name": "TBase",
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
              "id": null,
              "superClass": {
                "type": "Identifier",
                "start": 230,
                "end": 234,
                "name": "Base",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "ClassBody",
                "start": 235,
                "end": 242,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 162,
        "end": 189,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 163,
            "end": 188,
            "name": {
              "type": "Identifier",
              "start": 163,
              "end": 168,
              "name": "TBase",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 177,
              "end": 188,
              "typeName": {
                "type": "Identifier",
                "start": 177,
                "end": 188,
                "name": "Constructor",
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
      "type": "ClassDeclaration",
      "start": 247,
      "end": 262,
      "id": {
        "type": "Identifier",
        "start": 253,
        "end": 258,
        "name": "Empty",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 259,
        "end": 262,
        "body": []
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
      "start": 264,
      "end": 360,
      "id": {
        "type": "Identifier",
        "start": 270,
        "end": 282,
        "name": "CrashTrigger",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "CallExpression",
        "start": 291,
        "end": 303,
        "callee": {
          "type": "Identifier",
          "start": 291,
          "end": 296,
          "name": "Mixin",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 297,
            "end": 302,
            "name": "Empty",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "ClassBody",
        "start": 304,
        "end": 360,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 310,
            "end": 358,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 317,
              "end": 324,
              "name": "trigger",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 324,
              "end": 358,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 327,
                "end": 358,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 337,
                    "end": 352,
                    "expression": {
                      "type": "NewExpression",
                      "start": 337,
                      "end": 351,
                      "callee": {
                        "type": "Identifier",
                        "start": 341,
                        "end": 349,
                        "name": "Concrete",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
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
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
