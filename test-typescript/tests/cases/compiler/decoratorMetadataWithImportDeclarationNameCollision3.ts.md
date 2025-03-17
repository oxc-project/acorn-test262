__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 52,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 52,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 16,
          "end": 52,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 22,
              "end": 50,
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 29,
                "end": 40,
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
                "start": 40,
                "end": 50,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 43,
                  "end": 50,
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
          "start": 13,
          "end": 15,
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
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 288,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 28,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "decorators": [],
        "name": "db",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 12,
        "end": 27,
        "expression": {
          "type": "Literal",
          "start": 20,
          "end": 26,
          "raw": "'./db'",
          "value": "./db"
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 29,
      "end": 82,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 60,
        "end": 82,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 66,
            "end": 80,
            "argument": {
              "type": "Identifier",
              "start": 73,
              "end": 79,
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
        "start": 38,
        "end": 51,
        "decorators": [],
        "name": "someDecorator",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 52,
          "end": 58,
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
      "start": 83,
      "end": 269,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 112,
        "end": 269,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 118,
            "end": 128,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 118,
              "end": 120,
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
              "start": 120,
              "end": 127,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 122,
                "end": 127,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 122,
                  "end": 127,
                  "left": {
                    "type": "Identifier",
                    "start": 122,
                    "end": 124,
                    "decorators": [],
                    "name": "db",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 127,
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
            "start": 134,
            "end": 267,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 134,
              "end": 145,
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
              "start": 145,
              "end": 267,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 157,
                "end": 267,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 217,
                    "end": 230,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 217,
                      "end": 229,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 217,
                        "end": 224,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 217,
                          "end": 221
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 222,
                          "end": 224,
                          "decorators": [],
                          "name": "db",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 227,
                        "end": 229,
                        "decorators": [],
                        "name": "db",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 239,
                    "end": 261,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 239,
                      "end": 260,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 239,
                        "end": 258,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 239,
                          "end": 246,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 239,
                            "end": 243
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 244,
                            "end": 246,
                            "decorators": [],
                            "name": "db",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 247,
                          "end": 258,
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
                  "start": 146,
                  "end": 155,
                  "decorators": [],
                  "name": "db",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 148,
                    "end": 155,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 150,
                      "end": 155,
                      "typeArguments": null,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 150,
                        "end": 155,
                        "left": {
                          "type": "Identifier",
                          "start": 150,
                          "end": 152,
                          "decorators": [],
                          "name": "db",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 153,
                          "end": 155,
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
          "start": 83,
          "end": 97,
          "expression": {
            "type": "Identifier",
            "start": 84,
            "end": 97,
            "decorators": [],
            "name": "someDecorator",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 111,
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
      "start": 270,
      "end": 287,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 278,
          "end": 285,
          "exported": {
            "type": "Identifier",
            "start": 278,
            "end": 285,
            "decorators": [],
            "name": "MyClass",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 278,
            "end": 285,
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
