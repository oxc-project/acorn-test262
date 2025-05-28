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
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 53,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 25,
          "decorators": [],
          "name": "Callback",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 26,
          "end": 53,
          "body": [
            {
              "type": "TSCallSignatureDeclaration",
              "start": 32,
              "end": 51,
              "typeParameters": null,
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
              }
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 55,
      "end": 100,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 69,
        "decorators": [],
        "name": "IMap",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 70,
        "end": 100,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 76,
            "end": 98,
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 87,
              "end": 97,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 89,
                "end": 97,
                "typeName": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 97,
                  "decorators": [],
                  "name": "Callback",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 102,
      "end": 204,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 116,
        "end": 204,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 122,
            "end": 146,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 130,
              "end": 139,
              "decorators": [],
              "name": "listeners",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 145,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 141,
                "end": 145,
                "typeName": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 145,
                  "decorators": [],
                  "name": "IMap",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 151,
            "end": 202,
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
            "value": {
              "type": "FunctionExpression",
              "start": 163,
              "end": 202,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 166,
                "end": 202,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 176,
                    "end": 196,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 176,
                      "end": 195,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 176,
                        "end": 190,
                        "object": {
                          "type": "ThisExpression",
                          "start": 176,
                          "end": 180
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 181,
                          "end": 190,
                          "decorators": [],
                          "name": "listeners",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 193,
                        "end": 195,
                        "properties": []
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
