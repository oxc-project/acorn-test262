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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 57,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 36,
            "end": 55,
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
            "value": {
              "type": "FunctionExpression",
              "start": 49,
              "end": 55,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 52,
                "end": 55,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 58,
      "end": 124,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 86,
              "end": 96,
              "typeName": {
                "type": "Identifier",
                "start": 86,
                "end": 96,
                "decorators": [],
                "name": "Constraint",
                "optional": false,
                "typeAnnotation": null
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 98,
        "end": 124,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 104,
            "end": 122,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 111,
              "end": 116,
              "decorators": [],
              "name": "items",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 125,
      "end": 172,
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
      "typeParameters": null,
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
            "typeName": {
              "type": "Identifier",
              "start": 159,
              "end": 166,
              "decorators": [],
              "name": "TypeArg",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 168,
        "end": 172,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 173,
      "end": 250,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 187,
        "end": 250,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 193,
            "end": 248,
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
            "value": {
              "type": "FunctionExpression",
              "start": 206,
              "end": 248,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                          "decorators": [],
                          "name": "Container",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 229,
                          "end": 235,
                          "decorators": [],
                          "name": "People",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 236,
                        "end": 241,
                        "decorators": [],
                        "name": "items",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 252,
      "end": 305,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 268,
        "end": 305,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 274,
            "end": 303,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 288,
              "end": 294,
              "decorators": [],
              "name": "People",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
