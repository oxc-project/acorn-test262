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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 52,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 15,
          "name": "db",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 16,
          "end": 52,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 22,
              "end": 50,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 29,
                "end": 40,
                "name": "doSomething",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 40,
                "end": 50,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 43,
                  "end": 50,
                  "body": []
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": "public"
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
      "specifiers": [],
      "source": null,
      "attributes": [],
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
        "name": "db",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 12,
        "end": 27,
        "expression": {
          "type": "Literal",
          "start": 20,
          "end": 26,
          "value": "./db",
          "raw": "'./db'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 29,
      "end": 82,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 51,
        "name": "someDecorator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 52,
          "end": 58,
          "name": "target",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
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
              "name": "target",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 83,
      "end": 269,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 111,
        "name": "MyClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 112,
        "end": 269,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 118,
            "end": 128,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 118,
              "end": 120,
              "name": "db",
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
              "start": 120,
              "end": 127,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 122,
                "end": 127,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 122,
                  "end": 127,
                  "left": {
                    "type": "Identifier",
                    "start": 122,
                    "end": 124,
                    "name": "db",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 127,
                    "name": "db",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 134,
            "end": 267,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 134,
              "end": 145,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 145,
              "end": 267,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 146,
                  "end": 155,
                  "name": "db",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 148,
                    "end": 155,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 150,
                      "end": 155,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 150,
                        "end": 155,
                        "left": {
                          "type": "Identifier",
                          "start": 150,
                          "end": 152,
                          "name": "db",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 153,
                          "end": 155,
                          "name": "db",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
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
                "start": 157,
                "end": 267,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 217,
                    "end": 230,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 217,
                      "end": 229,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 217,
                        "end": 224,
                        "object": {
                          "type": "ThisExpression",
                          "start": 217,
                          "end": 221
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 222,
                          "end": 224,
                          "name": "db",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 227,
                        "end": 229,
                        "name": "db",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 239,
                    "end": 261,
                    "expression": {
                      "type": "CallExpression",
                      "start": 239,
                      "end": 260,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 239,
                        "end": 258,
                        "object": {
                          "type": "MemberExpression",
                          "start": 239,
                          "end": 246,
                          "object": {
                            "type": "ThisExpression",
                            "start": 239,
                            "end": 243
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 244,
                            "end": 246,
                            "name": "db",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 247,
                          "end": 258,
                          "name": "doSomething",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
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
      "decorators": [
        {
          "type": "Decorator",
          "start": 83,
          "end": 97,
          "expression": {
            "type": "Identifier",
            "start": 84,
            "end": 97,
            "name": "someDecorator",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 270,
      "end": 287,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 278,
          "end": 285,
          "local": {
            "type": "Identifier",
            "start": 278,
            "end": 285,
            "name": "MyClass",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 278,
            "end": 285,
            "name": "MyClass",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
