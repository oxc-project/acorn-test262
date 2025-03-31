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
      "id": {
        "type": "Identifier",
        "start": 19,
        "end": 29,
        "name": "Constraint",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 57,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 36,
            "end": 55,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 43,
              "end": 49,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 49,
              "end": 55,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 52,
                "end": 55,
                "body": []
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
    },
    {
      "type": "ClassDeclaration",
      "start": 58,
      "end": 124,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 75,
        "name": "GenericBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 98,
        "end": 124,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 104,
            "end": 122,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 111,
              "end": 116,
              "name": "items",
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
              "start": 116,
              "end": 121,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 118,
                "end": 121
              }
            },
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 75,
        "end": 97,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 76,
            "end": 96,
            "name": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 86,
              "end": 96,
              "typeName": {
                "type": "Identifier",
                "start": 86,
                "end": 96,
                "name": "Constraint",
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 125,
      "end": 172,
      "id": {
        "type": "Identifier",
        "start": 131,
        "end": 138,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 147,
        "end": 158,
        "name": "GenericBase",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 168,
        "end": 172,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 158,
        "end": 167,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 159,
            "end": 166,
            "typeName": {
              "type": "Identifier",
              "start": 159,
              "end": 166,
              "name": "TypeArg",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 173,
      "end": 250,
      "id": {
        "type": "Identifier",
        "start": 179,
        "end": 186,
        "name": "TypeArg",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 187,
        "end": 250,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 193,
            "end": 248,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 200,
              "end": 206,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 206,
              "end": 248,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 209,
                "end": 248,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 219,
                    "end": 242,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 219,
                      "end": 241,
                      "object": {
                        "type": "MemberExpression",
                        "start": 219,
                        "end": 235,
                        "object": {
                          "type": "Identifier",
                          "start": 219,
                          "end": 228,
                          "name": "Container",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 229,
                          "end": 235,
                          "name": "People",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 236,
                        "end": 241,
                        "name": "items",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
    },
    {
      "type": "ClassDeclaration",
      "start": 252,
      "end": 305,
      "id": {
        "type": "Identifier",
        "start": 258,
        "end": 267,
        "name": "Container",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 268,
        "end": 305,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 274,
            "end": 303,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 288,
              "end": 294,
              "name": "People",
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
              "start": 294,
              "end": 303,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 296,
                "end": 303,
                "typeName": {
                  "type": "Identifier",
                  "start": 296,
                  "end": 303,
                  "name": "Derived",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
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
