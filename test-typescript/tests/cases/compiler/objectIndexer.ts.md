__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 205,
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
          "name": "Callback",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
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
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 38,
                    "end": 43,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 40,
                      "end": 43
                    }
                  },
                  "decorators": [],
                  "optional": false
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
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 55,
      "end": 100,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 69,
        "name": "IMap",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
                "name": "s",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 78,
                  "end": 86,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 80,
                    "end": 86
                  }
                },
                "decorators": [],
                "optional": false
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
                  "name": "Callback",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 115,
        "name": "Emitter",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 116,
        "end": 204,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 122,
            "end": 146,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 130,
              "end": 139,
              "name": "listeners",
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
                  "name": "IMap",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 151,
            "end": 202,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 151,
              "end": 162,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 163,
              "end": 202,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "name": "listeners",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
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
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
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
