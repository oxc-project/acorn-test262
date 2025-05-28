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
  "end": 258,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 22,
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
      "source": {
        "type": "Literal",
        "start": 15,
        "end": 21,
        "value": "./db",
        "raw": "'./db'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 50,
      "end": 103,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 72,
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
          "start": 73,
          "end": 79,
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 81,
        "end": 103,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 87,
            "end": 101,
            "argument": {
              "type": "Identifier",
              "start": 94,
              "end": 100,
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
      "start": 104,
      "end": 240,
      "decorators": [
        {
          "type": "Decorator",
          "start": 104,
          "end": 118,
          "expression": {
            "type": "Identifier",
            "start": 105,
            "end": 118,
            "decorators": [],
            "name": "someDecorator",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 132,
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
        "start": 133,
        "end": 240,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 139,
            "end": 149,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 141,
              "decorators": [],
              "name": "db",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 141,
              "end": 148,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 143,
                "end": 148,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 143,
                  "end": 148,
                  "left": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 145,
                    "decorators": [],
                    "name": "db",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 146,
                    "end": 148,
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
            "start": 155,
            "end": 238,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 166,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 166,
              "end": 238,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 167,
                  "end": 176,
                  "decorators": [],
                  "name": "db",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 169,
                    "end": 176,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 171,
                      "end": 176,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 171,
                        "end": 176,
                        "left": {
                          "type": "Identifier",
                          "start": 171,
                          "end": 173,
                          "decorators": [],
                          "name": "db",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 174,
                          "end": 176,
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
                "start": 178,
                "end": 238,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 188,
                    "end": 201,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 188,
                      "end": 200,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 188,
                        "end": 195,
                        "object": {
                          "type": "ThisExpression",
                          "start": 188,
                          "end": 192
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 193,
                          "end": 195,
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
                        "start": 198,
                        "end": 200,
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
                    "start": 210,
                    "end": 232,
                    "expression": {
                      "type": "CallExpression",
                      "start": 210,
                      "end": 231,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 210,
                        "end": 229,
                        "object": {
                          "type": "MemberExpression",
                          "start": 210,
                          "end": 217,
                          "object": {
                            "type": "ThisExpression",
                            "start": 210,
                            "end": 214
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 215,
                            "end": 217,
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
                          "start": 218,
                          "end": 229,
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
      "start": 241,
      "end": 258,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 249,
          "end": 256,
          "local": {
            "type": "Identifier",
            "start": 249,
            "end": 256,
            "decorators": [],
            "name": "MyClass",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 249,
            "end": 256,
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
