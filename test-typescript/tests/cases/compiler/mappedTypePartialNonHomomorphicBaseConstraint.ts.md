__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 165,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 72,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 72,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 18,
          "decorators": [],
          "name": "Errors",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 24,
          "end": 71,
          "constraint": {
            "type": "TSUnionType",
            "start": 41,
            "end": 57,
            "types": [
              {
                "type": "TSTypeOperator",
                "start": 41,
                "end": 48,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 47,
                  "end": 48,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 47,
                    "end": 48,
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              {
                "type": "TSLiteralType",
                "start": 51,
                "end": 57,
                "literal": {
                  "type": "Literal",
                  "start": 51,
                  "end": 57,
                  "raw": "\"base\"",
                  "value": "base",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          },
          "key": {
            "type": "Identifier",
            "start": 36,
            "end": 37,
            "decorators": [],
            "name": "K",
            "optional": false,
            "typeAnnotation": null
          },
          "nameType": null,
          "optional": true,
          "readonly": true,
          "typeAnnotation": {
            "type": "TSArrayType",
            "start": 61,
            "end": 69,
            "elementType": {
              "type": "TSStringKeyword",
              "start": 61,
              "end": 67
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 18,
          "end": 21,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 19,
              "end": 20,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 19,
                "end": 20,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 74,
      "end": 165,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 89,
        "end": 165,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 93,
            "end": 163,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 93,
              "end": 102,
              "decorators": [],
              "name": "getErrors",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 102,
              "end": 163,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 116,
                "end": 163,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 122,
                    "end": 159,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 129,
                      "end": 158,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 131,
                          "end": 156,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 131,
                            "end": 135,
                            "decorators": [],
                            "name": "base",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrayExpression",
                            "start": 137,
                            "end": 156,
                            "elements": [
                              {
                                "type": "Literal",
                                "start": 138,
                                "end": 155,
                                "raw": "\"some base error\"",
                                "value": "some base error",
                                "regex": null,
                                "bigint": null
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 104,
                "end": 115,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 106,
                  "end": 115,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 112,
                    "end": 115,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 113,
                        "end": 114,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 113,
                          "end": 114,
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 112,
                    "decorators": [],
                    "name": "Errors",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 85,
        "decorators": [],
        "name": "Model",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 85,
        "end": 88,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 86,
            "end": 87,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 86,
              "end": 87,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
