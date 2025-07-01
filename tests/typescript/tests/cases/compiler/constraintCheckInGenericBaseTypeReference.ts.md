__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Constraint",
        "optional": false,
        "typeAnnotation": null,
        "start": 19,
        "end": 29
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 49
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 52,
                "end": 55
              },
              "expression": false,
              "start": 49,
              "end": 55
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 36,
            "end": 55
          }
        ],
        "start": 30,
        "end": 57
      },
      "abstract": false,
      "declare": false,
      "start": 13,
      "end": 57
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 75
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 77
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Constraint",
                "optional": false,
                "typeAnnotation": null,
                "start": 86,
                "end": 96
              },
              "typeArguments": null,
              "start": 86,
              "end": 96
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 76,
            "end": 96
          }
        ],
        "start": 75,
        "end": 97
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "items",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 116
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 118,
                "end": 121
              },
              "start": 116,
              "end": 121
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 104,
            "end": 122
          }
        ],
        "start": 98,
        "end": 124
      },
      "abstract": false,
      "declare": false,
      "start": 58,
      "end": 124
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 131,
        "end": 138
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 158
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TypeArg",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 166
            },
            "typeArguments": null,
            "start": 159,
            "end": 166
          }
        ],
        "start": 158,
        "end": 167
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 168,
        "end": 172
      },
      "abstract": false,
      "declare": false,
      "start": 125,
      "end": 172
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeArg",
        "optional": false,
        "typeAnnotation": null,
        "start": 179,
        "end": 186
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 200,
              "end": 206
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Container",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 219,
                          "end": 228
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "People",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 229,
                          "end": 235
                        },
                        "optional": false,
                        "computed": false,
                        "start": 219,
                        "end": 235
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "items",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 236,
                        "end": 241
                      },
                      "optional": false,
                      "computed": false,
                      "start": 219,
                      "end": 241
                    },
                    "directive": null,
                    "start": 219,
                    "end": 242
                  }
                ],
                "start": 209,
                "end": 248
              },
              "expression": false,
              "start": 206,
              "end": 248
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 193,
            "end": 248
          }
        ],
        "start": 187,
        "end": 250
      },
      "abstract": false,
      "declare": false,
      "start": 173,
      "end": 250
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Container",
        "optional": false,
        "typeAnnotation": null,
        "start": 258,
        "end": 267
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "People",
              "optional": false,
              "typeAnnotation": null,
              "start": 288,
              "end": 294
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 296,
                  "end": 303
                },
                "typeArguments": null,
                "start": 296,
                "end": 303
              },
              "start": 294,
              "end": 303
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 274,
            "end": 303
          }
        ],
        "start": 268,
        "end": 305
      },
      "abstract": false,
      "declare": false,
      "start": 252,
      "end": 305
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 13,
  "end": 305
}
```
