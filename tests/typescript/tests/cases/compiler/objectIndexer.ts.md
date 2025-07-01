__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Callback",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 25
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 40,
                      "end": 43
                    },
                    "start": 38,
                    "end": 43
                  },
                  "start": 33,
                  "end": 43
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 46,
                  "end": 50
                },
                "start": 44,
                "end": 50
              },
              "start": 32,
              "end": 51
            }
          ],
          "start": 26,
          "end": 53
        },
        "declare": false,
        "start": 7,
        "end": 53
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 53
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 65,
        "end": 69
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 80,
                    "end": 86
                  },
                  "start": 78,
                  "end": 86
                },
                "start": 77,
                "end": 86
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Callback",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 89,
                  "end": 97
                },
                "typeArguments": null,
                "start": 89,
                "end": 97
              },
              "start": 87,
              "end": 97
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 76,
            "end": 98
          }
        ],
        "start": 70,
        "end": 100
      },
      "declare": false,
      "start": 55,
      "end": 100
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Emitter",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 115
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
              "name": "listeners",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 139
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 141,
                  "end": 145
                },
                "typeArguments": null,
                "start": 141,
                "end": 145
              },
              "start": 139,
              "end": 145
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 122,
            "end": 146
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 162
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
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 176,
                          "end": 180
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "listeners",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 181,
                          "end": 190
                        },
                        "optional": false,
                        "computed": false,
                        "start": 176,
                        "end": 190
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 193,
                        "end": 195
                      },
                      "start": 176,
                      "end": 195
                    },
                    "directive": null,
                    "start": 176,
                    "end": 196
                  }
                ],
                "start": 166,
                "end": 202
              },
              "expression": false,
              "start": 163,
              "end": 202
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 151,
            "end": 202
          }
        ],
        "start": 116,
        "end": 204
      },
      "abstract": false,
      "declare": false,
      "start": 102,
      "end": 204
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 204
}
```
