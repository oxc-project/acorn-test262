__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 13,
  "end": 305,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 13,
      "end": 57,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 57,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 36,
            "end": 55,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 43,
              "end": 49,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 49,
              "end": 55,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 52,
                "end": 55,
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
        "start": 19,
        "end": 29,
        "decorators": [],
        "name": "Constraint",
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
      "start": 58,
      "end": 124,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 98,
        "end": 124,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 104,
            "end": 122,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 111,
              "end": 116,
              "decorators": [],
              "name": "items",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 116,
              "end": 121,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 118,
                "end": 121
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 75,
        "decorators": [],
        "name": "GenericBase",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 75,
        "end": 97,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 76,
            "end": 96,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 86,
              "end": 96,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 86,
                "end": 96,
                "decorators": [],
                "name": "Constraint",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
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
      "type": "ClassDeclaration",
      "start": 125,
      "end": 172,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 168,
        "end": 172,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 131,
        "end": 138,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 147,
        "end": 158,
        "decorators": [],
        "name": "GenericBase",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 158,
        "end": 167,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 159,
            "end": 166,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 159,
              "end": 166,
              "decorators": [],
              "name": "TypeArg",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 173,
      "end": 250,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 187,
        "end": 250,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 193,
            "end": 248,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 200,
              "end": 206,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 206,
              "end": 248,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 209,
                "end": 248,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 219,
                    "end": 242,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 219,
                      "end": 241,
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "start": 219,
                        "end": 235,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 219,
                          "end": 228,
                          "decorators": [],
                          "name": "Container",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 229,
                          "end": 235,
                          "decorators": [],
                          "name": "People",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 236,
                        "end": 241,
                        "decorators": [],
                        "name": "items",
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
        "start": 179,
        "end": 186,
        "decorators": [],
        "name": "TypeArg",
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
      "start": 252,
      "end": 305,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 268,
        "end": 305,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 274,
            "end": 303,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 288,
              "end": 294,
              "decorators": [],
              "name": "People",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 294,
              "end": 303,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 296,
                "end": 303,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 296,
                  "end": 303,
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 258,
        "end": 267,
        "decorators": [],
        "name": "Container",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
