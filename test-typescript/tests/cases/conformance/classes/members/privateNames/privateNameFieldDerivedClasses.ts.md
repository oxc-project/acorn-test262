__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 208,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 107,
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
        "end": 107,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 37,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 17,
              "end": 22,
              "name": "prop"
            },
            "value": {
              "type": "Literal",
              "start": 33,
              "end": 36,
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
              "start": 22,
              "end": 30,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 24,
                "end": 30
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 42,
            "end": 105,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 49,
              "end": 55,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 55,
              "end": 105,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 56,
                  "end": 66,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 57,
                    "end": 66,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 59,
                      "end": 66,
                      "typeName": {
                        "type": "Identifier",
                        "start": 59,
                        "end": 66,
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
                "start": 68,
                "end": 105,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 78,
                    "end": 99,
                    "expression": {
                      "type": "CallExpression",
                      "start": 78,
                      "end": 98,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 78,
                        "end": 89,
                        "object": {
                          "type": "Identifier",
                          "start": 78,
                          "end": 85,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 86,
                          "end": 89,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 90,
                          "end": 97,
                          "object": {
                            "type": "Identifier",
                            "start": 90,
                            "end": 91,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 92,
                            "end": 97,
                            "name": "prop"
                          },
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
      "start": 108,
      "end": 206,
      "id": {
        "type": "Identifier",
        "start": 114,
        "end": 121,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 130,
        "end": 134,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 135,
        "end": 206,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 141,
            "end": 204,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 148,
              "end": 154,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 154,
              "end": 204,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 155,
                  "end": 165,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 156,
                    "end": 165,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 158,
                      "end": 165,
                      "typeName": {
                        "type": "Identifier",
                        "start": 158,
                        "end": 165,
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
                "start": 167,
                "end": 204,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 177,
                    "end": 198,
                    "expression": {
                      "type": "CallExpression",
                      "start": 177,
                      "end": 197,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 177,
                        "end": 188,
                        "object": {
                          "type": "Identifier",
                          "start": 177,
                          "end": 184,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 185,
                          "end": 188,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "start": 189,
                          "end": 196,
                          "object": {
                            "type": "Identifier",
                            "start": 189,
                            "end": 190,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "start": 191,
                            "end": 196,
                            "name": "prop"
                          },
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
