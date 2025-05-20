__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 308,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 56,
      "end": 88,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 74,
        "end": 88,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 80,
            "end": 86,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 83,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 83,
              "end": 86,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 85,
                "end": 86,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 86,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 70,
        "decorators": [],
        "name": "BaseType",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 70,
        "end": 73,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 71,
            "end": 72,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 90,
      "end": 193,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 173,
        "end": 193,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 179,
            "end": 191,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 179,
              "end": 182,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 182,
              "end": 190,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 184,
                "end": 190
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 104,
        "decorators": [],
        "name": "NextType",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 161,
        "end": 169,
        "decorators": [],
        "name": "BaseType",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 169,
        "end": 172,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 170,
            "end": 171,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 170,
              "end": 171,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 104,
        "end": 152,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 105,
            "end": 132,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 115,
              "end": 132,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 117,
                  "end": 130,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 117,
                    "end": 125,
                    "decorators": [],
                    "name": "someProp",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 125,
                    "end": 130,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 127,
                      "end": 130
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 105,
              "end": 106,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 134,
            "end": 151,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSIndexedAccessType",
              "start": 138,
              "end": 151,
              "indexType": {
                "type": "TSLiteralType",
                "start": 140,
                "end": 150,
                "literal": {
                  "type": "Literal",
                  "start": 140,
                  "end": 150,
                  "raw": "'someProp'",
                  "value": "someProp"
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 138,
                "end": 139,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 138,
                  "end": 139,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 134,
              "end": 135,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 195,
      "end": 271,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 227,
        "end": 271,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 233,
            "end": 269,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 233,
              "end": 241,
              "decorators": [],
              "name": "someProp",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 241,
              "end": 269,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 243,
                "end": 269,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 253,
                    "end": 263,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 253,
                      "end": 257,
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 257,
                      "end": 263,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 259,
                        "end": 263,
                        "literal": {
                          "type": "Literal",
                          "start": 259,
                          "end": 263,
                          "raw": "true",
                          "value": true
                        }
                      }
                    }
                  }
                ]
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 204,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 213,
        "end": 221,
        "decorators": [],
        "name": "NextType",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 221,
        "end": 226,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 222,
            "end": 225,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 222,
              "end": 225,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 273,
      "end": 295,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 279,
          "end": 294,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 279,
            "end": 282,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 285,
            "end": 294,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 289,
              "end": 292,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 296,
      "end": 308,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 296,
        "end": 308,
        "computed": false,
        "object": {
          "type": "MemberExpression",
          "start": 296,
          "end": 303,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 296,
            "end": 299,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 300,
            "end": 303,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 304,
          "end": 308,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
