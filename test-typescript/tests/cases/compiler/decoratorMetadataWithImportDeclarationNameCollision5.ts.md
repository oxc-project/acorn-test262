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
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 23,
          "name": "db",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 24,
          "end": 60,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 30,
              "end": 58,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 37,
                "end": 48,
                "name": "doSomething",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 48,
                "end": 58,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "BlockStatement",
                  "start": 51,
                  "end": 58,
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
  "end": 239,
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
      "start": 23,
      "end": 76,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 45,
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
          "start": 46,
          "end": 52,
          "name": "target",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
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
      "start": 77,
      "end": 220,
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 105,
        "name": "MyClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 106,
        "end": 220,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 112,
            "end": 119,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 112,
              "end": 114,
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
              "start": 114,
              "end": 118,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 116,
                "end": 118,
                "typeName": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 118,
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
            "start": 125,
            "end": 218,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 125,
              "end": 136,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 136,
              "end": 218,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 137,
                  "end": 143,
                  "name": "db",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 139,
                    "end": 143,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 141,
                      "end": 143,
                      "typeName": {
                        "type": "Identifier",
                        "start": 141,
                        "end": 143,
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
                "start": 145,
                "end": 218,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 168,
                    "end": 181,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 168,
                      "end": 180,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 168,
                        "end": 175,
                        "object": {
                          "type": "ThisExpression",
                          "start": 168,
                          "end": 172
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 173,
                          "end": 175,
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
                        "start": 178,
                        "end": 180,
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
                    "start": 190,
                    "end": 212,
                    "expression": {
                      "type": "CallExpression",
                      "start": 190,
                      "end": 211,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 190,
                        "end": 209,
                        "object": {
                          "type": "MemberExpression",
                          "start": 190,
                          "end": 197,
                          "object": {
                            "type": "ThisExpression",
                            "start": 190,
                            "end": 194
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 195,
                            "end": 197,
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
                          "start": 198,
                          "end": 209,
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
          "start": 77,
          "end": 91,
          "expression": {
            "type": "Identifier",
            "start": 78,
            "end": 91,
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
      "start": 221,
      "end": 238,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 229,
          "end": 236,
          "local": {
            "type": "Identifier",
            "start": 229,
            "end": 236,
            "name": "MyClass",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 229,
            "end": 236,
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
