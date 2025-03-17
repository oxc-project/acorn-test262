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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 72,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 34,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "name": "n",
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
                      "name": "Base",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 39,
            "end": 70,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 41,
              "name": "fn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 41,
              "end": 70,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
    },
    {
      "type": "ClassDeclaration",
      "start": 73,
      "end": 183,
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 86,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 95,
        "end": 99,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 100,
        "end": 183,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 106,
            "end": 126,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "name": "n",
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
                      "name": "Derived",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 131,
            "end": 181,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 131,
              "end": 133,
              "name": "fn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 133,
              "end": 181,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
    },
    {
      "type": "ClassDeclaration",
      "start": 184,
      "end": 315,
      "id": {
        "type": "Identifier",
        "start": 190,
        "end": 206,
        "name": "DerivedInterface",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 223,
        "end": 315,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 229,
            "end": 258,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 229,
              "end": 230,
              "name": "n",
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
                      "name": "DerivedInterface",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 263,
            "end": 313,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 263,
              "end": 265,
              "name": "fn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 265,
              "end": 313,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 218,
          "end": 222,
          "expression": {
            "type": "Identifier",
            "start": 218,
            "end": 222,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
