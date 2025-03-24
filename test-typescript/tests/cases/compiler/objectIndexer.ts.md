__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 204,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 53,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 53,
        "body": {
          "type": "TSInterfaceBody",
          "start": 26,
          "end": 53,
          "body": [
            {
              "type": "TSCallSignatureDeclaration",
              "start": 32,
              "end": 51,
              "params": [
                {
                  "type": "Identifier",
                  "start": 33,
                  "end": 43,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 38,
                    "end": 43,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 40,
                      "end": 43
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 44,
                "end": 50,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 46,
                  "end": 50
                }
              },
              "typeParameters": null
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 25,
          "decorators": [],
          "name": "Callback",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 55,
      "end": 100,
      "body": {
        "type": "TSInterfaceBody",
        "start": 70,
        "end": 100,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 76,
            "end": 98,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 77,
                "end": 86,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 78,
                  "end": 86,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 80,
                    "end": 86
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 87,
              "end": 97,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 89,
                "end": 97,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 97,
                  "decorators": [],
                  "name": "Callback",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 69,
        "decorators": [],
        "name": "IMap",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 102,
      "end": 204,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 116,
        "end": 204,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 122,
            "end": 146,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 130,
              "end": 139,
              "decorators": [],
              "name": "listeners",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 145,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 141,
                "end": 145,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 145,
                  "decorators": [],
                  "name": "IMap",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 151,
            "end": 202,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 151,
              "end": 162,
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
              "start": 163,
              "end": 202,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 166,
                "end": 202,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 176,
                    "end": 196,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 176,
                      "end": 195,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 176,
                        "end": 190,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 176,
                          "end": 180
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 181,
                          "end": 190,
                          "decorators": [],
                          "name": "listeners",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 193,
                        "end": 195,
                        "properties": []
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
        "start": 108,
        "end": 115,
        "decorators": [],
        "name": "Emitter",
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
