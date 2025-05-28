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
  "end": 267,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 36,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 22,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 10,
            "decorators": [],
            "name": "db",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 22,
            "decorators": [],
            "name": "Database",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 29,
        "end": 35,
        "value": "./db",
        "raw": "'./db'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 37,
      "end": 90,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 59,
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
          "start": 60,
          "end": 66,
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 68,
        "end": 90,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 74,
            "end": 88,
            "argument": {
              "type": "Identifier",
              "start": 81,
              "end": 87,
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
      "start": 91,
      "end": 249,
      "decorators": [
        {
          "type": "Decorator",
          "start": 91,
          "end": 105,
          "expression": {
            "type": "Identifier",
            "start": 92,
            "end": 105,
            "decorators": [],
            "name": "someDecorator",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 119,
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
        "start": 120,
        "end": 249,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 126,
            "end": 139,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 126,
              "end": 128,
              "decorators": [],
              "name": "db",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 128,
              "end": 138,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 130,
                "end": 138,
                "typeName": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 138,
                  "decorators": [],
                  "name": "Database",
                  "optional": false,
                  "typeAnnotation": null
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
            "start": 145,
            "end": 247,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 145,
              "end": 156,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 156,
              "end": 247,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 157,
                  "end": 169,
                  "decorators": [],
                  "name": "db",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 159,
                    "end": 169,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 161,
                      "end": 169,
                      "typeName": {
                        "type": "Identifier",
                        "start": 161,
                        "end": 169,
                        "decorators": [],
                        "name": "Database",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 171,
                "end": 247,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 197,
                    "end": 210,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 197,
                      "end": 209,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 197,
                        "end": 204,
                        "object": {
                          "type": "ThisExpression",
                          "start": 197,
                          "end": 201
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 202,
                          "end": 204,
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
                        "start": 207,
                        "end": 209,
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
                    "start": 219,
                    "end": 241,
                    "expression": {
                      "type": "CallExpression",
                      "start": 219,
                      "end": 240,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 219,
                        "end": 238,
                        "object": {
                          "type": "MemberExpression",
                          "start": 219,
                          "end": 226,
                          "object": {
                            "type": "ThisExpression",
                            "start": 219,
                            "end": 223
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 224,
                            "end": 226,
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
                          "start": 227,
                          "end": 238,
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
      "start": 250,
      "end": 267,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 258,
          "end": 265,
          "local": {
            "type": "Identifier",
            "start": 258,
            "end": 265,
            "decorators": [],
            "name": "MyClass",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 258,
            "end": 265,
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
