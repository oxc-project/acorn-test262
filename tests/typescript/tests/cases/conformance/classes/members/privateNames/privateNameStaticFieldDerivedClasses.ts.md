__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 320,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 148,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 148,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 44,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 24,
              "end": 29,
              "name": "prop"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 37,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 31,
                "end": 37
              }
            },
            "value": {
              "type": "Literal",
              "start": 40,
              "end": 43,
              "raw": "123",
              "value": 123
            }
          },
          {
            "type": "MethodDefinition",
            "start": 49,
            "end": 146,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 62,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 62,
              "end": 146,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 75,
                "end": 146,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 85,
                    "end": 105,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 85,
                      "end": 105,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 85,
                        "end": 92,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 93,
                        "end": 105,
                        "name": "derivedProp"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 123,
                    "end": 140,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 123,
                      "end": 139,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 123,
                        "end": 133,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 123,
                          "end": 127,
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 128,
                          "end": 133,
                          "name": "prop"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 137,
                        "end": 139,
                        "raw": "10",
                        "value": 10
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 63,
                  "end": 73,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 64,
                    "end": 73,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 66,
                      "end": 73,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 66,
                        "end": 73,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
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
      "start": 149,
      "end": 319,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 176,
        "end": 319,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 182,
            "end": 215,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 189,
              "end": 201,
              "name": "derivedProp"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 201,
              "end": 209,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 203,
                "end": 209
              }
            },
            "value": {
              "type": "Literal",
              "start": 212,
              "end": 214,
              "raw": "10",
              "value": 10
            }
          },
          {
            "type": "MethodDefinition",
            "start": 220,
            "end": 317,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 227,
              "end": 233,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 233,
              "end": 317,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 246,
                "end": 317,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 256,
                    "end": 276,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 256,
                      "end": 276,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 256,
                        "end": 263,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 264,
                        "end": 276,
                        "name": "derivedProp"
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 285,
                    "end": 302,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 285,
                      "end": 301,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 285,
                        "end": 295,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 285,
                          "end": 289,
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 290,
                          "end": 295,
                          "name": "prop"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 299,
                        "end": 301,
                        "raw": "10",
                        "value": 10
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 234,
                  "end": 244,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 235,
                    "end": 244,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 237,
                      "end": 244,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 237,
                        "end": 244,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
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
        "start": 155,
        "end": 162,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 171,
        "end": 175,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
