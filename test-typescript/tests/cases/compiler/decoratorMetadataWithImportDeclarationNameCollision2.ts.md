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
                "optional": false
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
                "params": []
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
          "optional": false
        },
        "implements": [],
        "superClass": null
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
  "end": 268,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 36,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 29,
        "end": 35,
        "raw": "'./db'",
        "value": "./db"
      },
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 22,
            "decorators": [],
            "name": "Database",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 37,
      "end": 90,
      "async": false,
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
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 59,
        "decorators": [],
        "name": "someDecorator",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 60,
          "end": 66,
          "decorators": [],
          "name": "target",
          "optional": false
        }
      ]
    },
    {
      "type": "ClassDeclaration",
      "start": 91,
      "end": 249,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 120,
        "end": 249,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 126,
            "end": 139,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 126,
              "end": 128,
              "decorators": [],
              "name": "db",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 145,
            "end": 247,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 145,
              "end": 156,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 156,
              "end": 247,
              "async": false,
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
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 197,
                          "end": 201
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 202,
                          "end": 204,
                          "decorators": [],
                          "name": "db",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 207,
                        "end": 209,
                        "decorators": [],
                        "name": "db",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 219,
                    "end": 241,
                    "expression": {
                      "type": "CallExpression",
                      "start": 219,
                      "end": 240,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 219,
                        "end": 238,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 219,
                          "end": 226,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 219,
                            "end": 223
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 224,
                            "end": 226,
                            "decorators": [],
                            "name": "db",
                            "optional": false
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 227,
                          "end": 238,
                          "decorators": [],
                          "name": "doSomething",
                          "optional": false
                        }
                      },
                      "optional": false
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
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
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
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 119,
        "decorators": [],
        "name": "MyClass",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 250,
      "end": 267,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 258,
          "end": 265,
          "exported": {
            "type": "Identifier",
            "start": 258,
            "end": 265,
            "decorators": [],
            "name": "MyClass",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 258,
            "end": 265,
            "decorators": [],
            "name": "MyClass",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
