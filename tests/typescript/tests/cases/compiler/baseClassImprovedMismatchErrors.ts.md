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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 72,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 34,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 20,
                      "end": 24,
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 27,
                    "end": 33
                  }
                ]
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
          },
          {
            "type": "MethodDefinition",
            "start": 39,
            "end": 70,
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
            "value": {
              "type": "FunctionExpression",
              "start": 41,
              "end": 70,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "value": 10,
                      "raw": "10"
                    }
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
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 73,
      "end": 183,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 100,
        "end": 183,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 106,
            "end": 126,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 109,
                      "end": 116,
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 119,
                    "end": 125
                  }
                ]
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
          },
          {
            "type": "MethodDefinition",
            "start": 131,
            "end": 181,
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
            "value": {
              "type": "FunctionExpression",
              "start": 133,
              "end": 181,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                        "value": 10,
                        "raw": "10"
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
              "expression": false
            },
            "kind": "method",
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
    },
    {
      "type": "ClassDeclaration",
      "start": 184,
      "end": 315,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
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
      "body": {
        "type": "ClassBody",
        "start": 223,
        "end": 315,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 229,
            "end": 258,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 229,
              "end": 230,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 232,
                      "end": 248,
                      "decorators": [],
                      "name": "DerivedInterface",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 251,
                    "end": 257
                  }
                ]
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
          },
          {
            "type": "MethodDefinition",
            "start": 263,
            "end": 313,
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
            "value": {
              "type": "FunctionExpression",
              "start": 265,
              "end": 313,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                        "value": 10,
                        "raw": "10"
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
              "expression": false
            },
            "kind": "method",
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
  "sourceType": "script",
  "hashbang": null
}
```
