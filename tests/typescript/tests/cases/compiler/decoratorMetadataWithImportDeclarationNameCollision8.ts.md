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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 16,
          "end": 52,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 22,
              "end": 50,
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
              "value": {
                "type": "FunctionExpression",
                "start": 40,
                "end": 50,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 43,
                  "end": 50,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public"
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
  "end": 271,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 34,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 15,
        "decorators": [],
        "name": "database",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 18,
        "end": 33,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 32,
          "value": "./db",
          "raw": "'./db'"
        }
      },
      "importKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 35,
      "end": 88,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 57,
        "decorators": [],
        "name": "someDecorator",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 58,
          "end": 64,
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 66,
        "end": 88,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 72,
            "end": 86,
            "argument": {
              "type": "Identifier",
              "start": 79,
              "end": 85,
              "decorators": [],
              "name": "target",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 89,
      "end": 253,
      "decorators": [
        {
          "type": "Decorator",
          "start": 89,
          "end": 103,
          "expression": {
            "type": "Identifier",
            "start": 90,
            "end": 103,
            "decorators": [],
            "name": "someDecorator",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 117,
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 118,
        "end": 253,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 124,
            "end": 140,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 126,
              "decorators": [],
              "name": "db",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 126,
              "end": 139,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 128,
                "end": 139,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 128,
                  "end": 139,
                  "left": {
                    "type": "Identifier",
                    "start": 128,
                    "end": 136,
                    "decorators": [],
                    "name": "database",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 137,
                    "end": 139,
                    "decorators": [],
                    "name": "db",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
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
            "start": 146,
            "end": 251,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 146,
              "end": 157,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 157,
              "end": 251,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 158,
                  "end": 173,
                  "decorators": [],
                  "name": "db",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 160,
                    "end": 173,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 162,
                      "end": 173,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 162,
                        "end": 173,
                        "left": {
                          "type": "Identifier",
                          "start": 162,
                          "end": 170,
                          "decorators": [],
                          "name": "database",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 171,
                          "end": 173,
                          "decorators": [],
                          "name": "db",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 175,
                "end": 251,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 201,
                    "end": 214,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 201,
                      "end": 213,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 201,
                        "end": 208,
                        "object": {
                          "type": "ThisExpression",
                          "start": 201,
                          "end": 205
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 206,
                          "end": 208,
                          "decorators": [],
                          "name": "db",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 211,
                        "end": 213,
                        "decorators": [],
                        "name": "db",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 223,
                    "end": 245,
                    "expression": {
                      "type": "CallExpression",
                      "start": 223,
                      "end": 244,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 223,
                        "end": 242,
                        "object": {
                          "type": "MemberExpression",
                          "start": 223,
                          "end": 230,
                          "object": {
                            "type": "ThisExpression",
                            "start": 223,
                            "end": 227
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 228,
                            "end": 230,
                            "decorators": [],
                            "name": "db",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 231,
                          "end": 242,
                          "decorators": [],
                          "name": "doSomething",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
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
      "type": "ExportNamedDeclaration",
      "start": 254,
      "end": 271,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 262,
          "end": 269,
          "local": {
            "type": "Identifier",
            "start": 262,
            "end": 269,
            "decorators": [],
            "name": "MyClass",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 262,
            "end": 269,
            "decorators": [],
            "name": "MyClass",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
