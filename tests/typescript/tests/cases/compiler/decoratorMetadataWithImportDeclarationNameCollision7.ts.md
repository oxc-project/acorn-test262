__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 61,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 60,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 15,
        "end": 60,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 24,
          "end": 60,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 30,
              "end": 58,
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 37,
                "end": 48,
                "decorators": [],
                "name": "doSomething",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 48,
                "end": 58,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 51,
                  "end": 58,
                  "body": []
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
          "start": 21,
          "end": 23,
          "decorators": [],
          "name": "db",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 248,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 22,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 15,
        "end": 21,
        "raw": "'./db'",
        "value": "./db"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 9,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 9,
            "decorators": [],
            "name": "db",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 23,
      "end": 76,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 54,
        "end": 76,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 60,
            "end": 74,
            "argument": {
              "type": "Identifier",
              "start": 67,
              "end": 73,
              "decorators": [],
              "name": "target",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 45,
        "decorators": [],
        "name": "someDecorator",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 46,
          "end": 52,
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 77,
      "end": 230,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 106,
        "end": 230,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 112,
            "end": 122,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 112,
              "end": 114,
              "decorators": [],
              "name": "db",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 114,
              "end": 121,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 116,
                "end": 121,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 116,
                  "end": 121,
                  "left": {
                    "type": "Identifier",
                    "start": 116,
                    "end": 118,
                    "decorators": [],
                    "name": "db",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 121,
                    "decorators": [],
                    "name": "db",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 136,
            "end": 228,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 136,
              "end": 147,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 147,
              "end": 228,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 159,
                "end": 228,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 178,
                    "end": 191,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 178,
                      "end": 190,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 178,
                        "end": 185,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 178,
                          "end": 182
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 183,
                          "end": 185,
                          "decorators": [],
                          "name": "db",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 188,
                        "end": 190,
                        "decorators": [],
                        "name": "db",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 200,
                    "end": 222,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 200,
                      "end": 221,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 200,
                        "end": 219,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 200,
                          "end": 207,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 200,
                            "end": 204
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 205,
                            "end": 207,
                            "decorators": [],
                            "name": "db",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 208,
                          "end": 219,
                          "decorators": [],
                          "name": "doSomething",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
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
                  "start": 148,
                  "end": 157,
                  "decorators": [],
                  "name": "db",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 150,
                    "end": 157,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 152,
                      "end": 157,
                      "typeArguments": null,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 152,
                        "end": 157,
                        "left": {
                          "type": "Identifier",
                          "start": 152,
                          "end": 154,
                          "decorators": [],
                          "name": "db",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 155,
                          "end": 157,
                          "decorators": [],
                          "name": "db",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
      "decorators": [
        {
          "type": "Decorator",
          "start": 77,
          "end": 91,
          "expression": {
            "type": "Identifier",
            "start": 78,
            "end": 91,
            "decorators": [],
            "name": "someDecorator",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 105,
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 231,
      "end": 248,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 239,
          "end": 246,
          "exported": {
            "type": "Identifier",
            "start": 239,
            "end": 246,
            "decorators": [],
            "name": "MyClass",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 239,
            "end": 246,
            "decorators": [],
            "name": "MyClass",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
