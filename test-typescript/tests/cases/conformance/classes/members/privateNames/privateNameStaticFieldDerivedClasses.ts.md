__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 321,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 148,
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
        "end": 148,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 44,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 24,
              "end": 29,
              "name": "prop"
            },
            "value": {
              "type": "Literal",
              "start": 40,
              "end": 43,
              "value": 123,
              "raw": "123"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 49,
            "end": 146,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 62,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 62,
              "end": 146,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 63,
                  "end": 73,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 64,
                    "end": 73,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 66,
                      "end": 73,
                      "typeName": {
                        "type": "Identifier",
                        "start": 66,
                        "end": 73,
                        "name": "Derived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 75,
                "end": 146,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 85,
                    "end": 105,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 85,
                      "end": 105,
                      "object": {
                        "type": "Identifier",
                        "start": 85,
                        "end": 92,
                        "name": "Derived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 93,
                        "end": 105,
                        "name": "derivedProp"
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 123,
                    "end": 140,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 123,
                      "end": 139,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 123,
                        "end": 133,
                        "object": {
                          "type": "Identifier",
                          "start": 123,
                          "end": 127,
                          "name": "Base",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 128,
                          "end": 133,
                          "name": "prop"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 137,
                        "end": 139,
                        "value": 10,
                        "raw": "10"
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
    },
    {
      "type": "ClassDeclaration",
      "start": 149,
      "end": 319,
      "id": {
        "type": "Identifier",
        "start": 155,
        "end": 162,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 171,
        "end": 175,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 176,
        "end": 319,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 182,
            "end": 215,
            "static": true,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 189,
              "end": 201,
              "name": "derivedProp"
            },
            "value": {
              "type": "Literal",
              "start": 212,
              "end": 214,
              "value": 10,
              "raw": "10"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 220,
            "end": 317,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 227,
              "end": 233,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 233,
              "end": 317,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 234,
                  "end": 244,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 235,
                    "end": 244,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 237,
                      "end": 244,
                      "typeName": {
                        "type": "Identifier",
                        "start": 237,
                        "end": 244,
                        "name": "Derived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 246,
                "end": 317,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 256,
                    "end": 276,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 256,
                      "end": 276,
                      "object": {
                        "type": "Identifier",
                        "start": 256,
                        "end": 263,
                        "name": "Derived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 264,
                        "end": 276,
                        "name": "derivedProp"
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 285,
                    "end": 302,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 285,
                      "end": 301,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 285,
                        "end": 295,
                        "object": {
                          "type": "Identifier",
                          "start": 285,
                          "end": 289,
                          "name": "Base",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 290,
                          "end": 295,
                          "name": "prop"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 299,
                        "end": 301,
                        "value": 10,
                        "raw": "10"
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
