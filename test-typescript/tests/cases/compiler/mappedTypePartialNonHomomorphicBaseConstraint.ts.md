__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 166,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 72,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 72,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 18,
          "name": "Errors",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "name": {
                "type": "Identifier",
                "start": 19,
                "end": 20,
                "name": "D",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 24,
          "end": 71,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 36,
            "end": 57,
            "name": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 47,
                      "end": 48,
                      "name": "D",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
                    "value": "base",
                    "raw": "\"base\""
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSArrayType",
            "start": 61,
            "end": 69,
            "elementType": {
              "type": "TSStringKeyword",
              "start": 61,
              "end": 67
            }
          },
          "optional": true,
          "readonly": true,
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 47,
                    "end": 48,
                    "name": "D",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
                  "value": "base",
                  "raw": "\"base\""
                }
              }
            ]
          },
          "key": {
            "type": "Identifier",
            "start": 36,
            "end": 37,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ClassDeclaration",
      "start": 74,
      "end": 165,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 85,
        "name": "Model",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 89,
        "end": 165,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 93,
            "end": 163,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 93,
              "end": 102,
              "name": "getErrors",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 102,
              "end": 163,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 131,
                            "end": 135,
                            "name": "base",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "ArrayExpression",
                            "start": 137,
                            "end": 156,
                            "elements": [
                              {
                                "type": "Literal",
                                "start": 138,
                                "end": 155,
                                "value": "some base error",
                                "raw": "\"some base error\""
                              }
                            ]
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 104,
                "end": 115,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 106,
                  "end": 115,
                  "typeName": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 112,
                    "name": "Errors",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 112,
                    "end": 115,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 113,
                        "end": 114,
                        "typeName": {
                          "type": "Identifier",
                          "start": 113,
                          "end": 114,
                          "name": "D",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 85,
        "end": 88,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 86,
            "end": 87,
            "name": {
              "type": "Identifier",
              "start": 86,
              "end": 87,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
