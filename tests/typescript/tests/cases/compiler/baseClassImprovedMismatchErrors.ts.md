__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 315,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 72,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 72,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 34,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 33,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 20,
                "end": 33,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 20,
                    "end": 24,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 20,
                      "end": 24,
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 27,
                    "end": 33
                  }
                ]
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 39,
            "end": 70,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 41,
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 41,
              "end": 70,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 44,
                "end": 70,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 54,
                    "end": 64,
                    "argument": {
                      "type": "Literal",
                      "start": 61,
                      "end": 63,
                      "raw": "10",
                      "value": 10
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
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 73,
      "end": 183,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 100,
        "end": 183,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 106,
            "end": 126,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 125,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 109,
                "end": 125,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 109,
                    "end": 116,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 109,
                      "end": 116,
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 119,
                    "end": 125
                  }
                ]
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 131,
            "end": 181,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 131,
              "end": 133,
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 133,
              "end": 181,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 136,
                "end": 181,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 146,
                    "end": 175,
                    "argument": {
                      "type": "TSAsExpression",
                      "start": 153,
                      "end": 174,
                      "expression": {
                        "type": "Literal",
                        "start": 153,
                        "end": 155,
                        "raw": "10",
                        "value": 10
                      },
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 159,
                        "end": 174,
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 159,
                            "end": 165
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 168,
                            "end": 174
                          }
                        ]
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
        "start": 79,
        "end": 86,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 95,
        "end": 99,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 184,
      "end": 315,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 223,
        "end": 315,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 229,
            "end": 258,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 229,
              "end": 230,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 230,
              "end": 257,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 232,
                "end": 257,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 232,
                    "end": 248,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 232,
                      "end": 248,
                      "decorators": [],
                      "name": "DerivedInterface",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 251,
                    "end": 257
                  }
                ]
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 263,
            "end": 313,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 263,
              "end": 265,
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 265,
              "end": 313,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 268,
                "end": 313,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 278,
                    "end": 307,
                    "argument": {
                      "type": "TSAsExpression",
                      "start": 285,
                      "end": 306,
                      "expression": {
                        "type": "Literal",
                        "start": 285,
                        "end": 287,
                        "raw": "10",
                        "value": 10
                      },
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 291,
                        "end": 306,
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 291,
                            "end": 297
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 300,
                            "end": 306
                          }
                        ]
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
        "start": 190,
        "end": 206,
        "decorators": [],
        "name": "DerivedInterface",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 218,
          "end": 222,
          "expression": {
            "type": "Identifier",
            "start": 218,
            "end": 222,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
