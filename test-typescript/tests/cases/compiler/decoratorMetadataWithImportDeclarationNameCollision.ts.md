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
  "end": 228,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 24,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 10,
            "name": "db",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 10,
            "name": "db",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 17,
        "end": 23,
        "value": "./db",
        "raw": "'./db'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 25,
      "end": 78,
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 47,
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
          "start": 48,
          "end": 54,
          "name": "target",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 56,
        "end": 78,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 62,
            "end": 76,
            "argument": {
              "type": "Identifier",
              "start": 69,
              "end": 75,
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
      "start": 79,
      "end": 209,
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 107,
        "name": "MyClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 108,
        "end": 209,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 114,
            "end": 121,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 114,
              "end": 116,
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
              "start": 116,
              "end": 120,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 118,
                "end": 120,
                "typeName": {
                  "type": "Identifier",
                  "start": 118,
                  "end": 120,
                  "name": "db",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 127,
            "end": 207,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 127,
              "end": 138,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 138,
              "end": 207,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 139,
                  "end": 145,
                  "name": "db",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 141,
                    "end": 145,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 143,
                      "end": 145,
                      "typeName": {
                        "type": "Identifier",
                        "start": 143,
                        "end": 145,
                        "name": "db",
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
                "start": 147,
                "end": 207,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 157,
                    "end": 170,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 157,
                      "end": 169,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 157,
                        "end": 164,
                        "object": {
                          "type": "ThisExpression",
                          "start": 157,
                          "end": 161
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 162,
                          "end": 164,
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
                        "start": 167,
                        "end": 169,
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
                    "start": 179,
                    "end": 201,
                    "expression": {
                      "type": "CallExpression",
                      "start": 179,
                      "end": 200,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 179,
                        "end": 198,
                        "object": {
                          "type": "MemberExpression",
                          "start": 179,
                          "end": 186,
                          "object": {
                            "type": "ThisExpression",
                            "start": 179,
                            "end": 183
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 184,
                            "end": 186,
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
                          "start": 187,
                          "end": 198,
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
          "start": 79,
          "end": 93,
          "expression": {
            "type": "Identifier",
            "start": 80,
            "end": 93,
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
      "start": 210,
      "end": 227,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 218,
          "end": 225,
          "local": {
            "type": "Identifier",
            "start": 218,
            "end": 225,
            "name": "MyClass",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 218,
            "end": 225,
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
