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
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 70,
        "name": "BaseType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 74,
        "end": 88,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 80,
            "end": 86,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 83,
              "name": "bar",
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
              "start": 83,
              "end": 86,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 85,
                "end": 86,
                "typeName": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 86,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 70,
        "end": 73,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 71,
            "end": 72,
            "name": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "name": "T",
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
    },
    {
      "type": "ClassDeclaration",
      "start": 90,
      "end": 193,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 104,
        "name": "NextType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 161,
        "end": 169,
        "name": "BaseType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 173,
        "end": 193,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 179,
            "end": 191,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 179,
              "end": 182,
              "name": "baz",
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
              "start": 182,
              "end": 190,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 184,
                "end": 190
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 104,
        "end": 152,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 105,
            "end": 132,
            "name": {
              "type": "Identifier",
              "start": 105,
              "end": 106,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 115,
              "end": 132,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 117,
                  "end": 130,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 117,
                    "end": 125,
                    "name": "someProp",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 125,
                    "end": 130,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 127,
                      "end": 130
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 134,
            "end": 151,
            "name": {
              "type": "Identifier",
              "start": 134,
              "end": 135,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": {
              "type": "TSIndexedAccessType",
              "start": 138,
              "end": 151,
              "objectType": {
                "type": "TSTypeReference",
                "start": 138,
                "end": 139,
                "typeName": {
                  "type": "Identifier",
                  "start": 138,
                  "end": 139,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSLiteralType",
                "start": 140,
                "end": 150,
                "literal": {
                  "type": "Literal",
                  "start": 140,
                  "end": 150,
                  "value": "someProp",
                  "raw": "'someProp'"
                }
              }
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 169,
        "end": 172,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 170,
            "end": 171,
            "typeName": {
              "type": "Identifier",
              "start": 170,
              "end": 171,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 195,
      "end": 271,
      "id": {
        "type": "Identifier",
        "start": 201,
        "end": 204,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 213,
        "end": 221,
        "name": "NextType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 227,
        "end": 271,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 233,
            "end": 269,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 233,
              "end": 241,
              "name": "someProp",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 253,
                      "end": 257,
                      "name": "test",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                          "value": true,
                          "raw": "true"
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 221,
        "end": 226,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 222,
            "end": 225,
            "typeName": {
              "type": "Identifier",
              "start": 222,
              "end": 225,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      }
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
          "id": {
            "type": "Identifier",
            "start": 279,
            "end": 282,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 285,
            "end": 294,
            "callee": {
              "type": "Identifier",
              "start": 289,
              "end": 292,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 296,
      "end": 308,
      "expression": {
        "type": "MemberExpression",
        "start": 296,
        "end": 308,
        "object": {
          "type": "MemberExpression",
          "start": 296,
          "end": 303,
          "object": {
            "type": "Identifier",
            "start": 296,
            "end": 299,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 300,
            "end": 303,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 304,
          "end": 308,
          "name": "test",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
