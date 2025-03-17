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
  "end": 259,
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
            "name": "db",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
          "start": 73,
          "end": 79,
          "name": "target",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
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
      "start": 104,
      "end": 240,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 132,
        "name": "MyClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 133,
        "end": 240,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 139,
            "end": 149,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 141,
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
                    "name": "db",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 146,
                    "end": 148,
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
            "start": 155,
            "end": 238,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 166,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 166,
              "end": 238,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 167,
                  "end": 176,
                  "name": "db",
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
                          "name": "db",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 174,
                          "end": 176,
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
                        "start": 198,
                        "end": 200,
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
                          "start": 218,
                          "end": 229,
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
          "start": 104,
          "end": 118,
          "expression": {
            "type": "Identifier",
            "start": 105,
            "end": 118,
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
            "name": "MyClass",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 249,
            "end": 256,
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
