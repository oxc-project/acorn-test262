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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 24,
          "end": 60,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 30,
              "end": 58,
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
              "value": {
                "type": "FunctionExpression",
                "start": 48,
                "end": 58,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 51,
                  "end": 58,
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
      "end": 28,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 15,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 15,
            "decorators": [],
            "name": "database",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 27,
        "value": "./db",
        "raw": "'./db'"
      },
      "phase": null,
      "attributes": [],
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
          "start": 52,
          "end": 58,
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
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
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 83,
      "end": 241,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 112,
        "end": 241,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 118,
            "end": 131,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 118,
              "end": 120,
              "decorators": [],
              "name": "db",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 120,
              "end": 130,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 122,
                "end": 130,
                "typeName": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 130,
                  "decorators": [],
                  "name": "database",
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
            "start": 137,
            "end": 239,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 137,
              "end": 148,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 148,
              "end": 239,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 149,
                  "end": 161,
                  "decorators": [],
                  "name": "db",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 151,
                    "end": 161,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 153,
                      "end": 161,
                      "typeName": {
                        "type": "Identifier",
                        "start": 153,
                        "end": 161,
                        "decorators": [],
                        "name": "database",
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
                "start": 163,
                "end": 239,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 189,
                    "end": 202,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 189,
                      "end": 201,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 189,
                        "end": 196,
                        "object": {
                          "type": "ThisExpression",
                          "start": 189,
                          "end": 193
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 194,
                          "end": 196,
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
                        "start": 199,
                        "end": 201,
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
                    "start": 211,
                    "end": 233,
                    "expression": {
                      "type": "CallExpression",
                      "start": 211,
                      "end": 232,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 211,
                        "end": 230,
                        "object": {
                          "type": "MemberExpression",
                          "start": 211,
                          "end": 218,
                          "object": {
                            "type": "ThisExpression",
                            "start": 211,
                            "end": 215
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 216,
                            "end": 218,
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
                          "start": 219,
                          "end": 230,
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
      "start": 242,
      "end": 259,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 250,
          "end": 257,
          "local": {
            "type": "Identifier",
            "start": 250,
            "end": 257,
            "decorators": [],
            "name": "MyClass",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 250,
            "end": 257,
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
