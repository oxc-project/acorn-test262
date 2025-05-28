__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 222,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 40,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 20,
        "end": 39,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 22,
          "end": 39,
          "typeName": {
            "type": "Identifier",
            "start": 22,
            "end": 39,
            "decorators": [],
            "name": "PropertyDecorator",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 41,
      "end": 156,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 66,
        "decorators": [],
        "name": "BaseEntity",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 66,
        "end": 69,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 67,
            "end": 68,
            "name": {
              "type": "Identifier",
              "start": 67,
              "end": 68,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
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
        "start": 70,
        "end": 156,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 76,
            "end": 154,
            "decorators": [
              {
                "type": "Decorator",
                "start": 76,
                "end": 80,
                "expression": {
                  "type": "CallExpression",
                  "start": 77,
                  "end": 80,
                  "callee": {
                    "type": "Identifier",
                    "start": 77,
                    "end": 78,
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 102,
              "decorators": [],
              "name": "attributes",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 102,
              "end": 153,
              "typeAnnotation": {
                "type": "TSConditionalType",
                "start": 104,
                "end": 153,
                "checkType": {
                  "type": "TSTypeReference",
                  "start": 104,
                  "end": 105,
                  "typeName": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 105,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "extendsType": {
                  "type": "TSTypeLiteral",
                  "start": 114,
                  "end": 137,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 116,
                      "end": 135,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 116,
                        "end": 126,
                        "decorators": [],
                        "name": "attributes",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 126,
                        "end": 135,
                        "typeAnnotation": {
                          "type": "TSInferType",
                          "start": 128,
                          "end": 135,
                          "typeParameter": {
                            "type": "TSTypeParameter",
                            "start": 134,
                            "end": 135,
                            "name": {
                              "type": "Identifier",
                              "start": 134,
                              "end": 135,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                "trueType": {
                  "type": "TSTypeReference",
                  "start": 140,
                  "end": 141,
                  "typeName": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 141,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "falseType": {
                  "type": "TSUndefinedKeyword",
                  "start": 144,
                  "end": 153
                }
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
      "abstract": true,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 157,
      "end": 222,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 163,
        "end": 164,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 165,
        "end": 222,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 171,
            "end": 220,
            "decorators": [
              {
                "type": "Decorator",
                "start": 171,
                "end": 175,
                "expression": {
                  "type": "CallExpression",
                  "start": 172,
                  "end": 175,
                  "callee": {
                    "type": "Identifier",
                    "start": 172,
                    "end": 173,
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 180,
              "end": 181,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 181,
              "end": 219,
              "typeAnnotation": {
                "type": "TSConditionalType",
                "start": 183,
                "end": 219,
                "checkType": {
                  "type": "TSNumberKeyword",
                  "start": 183,
                  "end": 189
                },
                "extendsType": {
                  "type": "TSStringKeyword",
                  "start": 198,
                  "end": 204
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "start": 207,
                  "end": 212,
                  "literal": {
                    "type": "Literal",
                    "start": 207,
                    "end": 212,
                    "value": false,
                    "raw": "false"
                  }
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "start": 215,
                  "end": 219,
                  "literal": {
                    "type": "Literal",
                    "start": 215,
                    "end": 219,
                    "value": true,
                    "raw": "true"
                  }
                }
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
            "accessibility": null
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
