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
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 24,
          "end": 60,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 30,
              "end": 58,
              "accessibility": "public",
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 37,
                "end": 48,
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
                "start": 48,
                "end": 58,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 51,
                  "end": 58,
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
          "start": 21,
          "end": 23,
          "decorators": [],
          "name": "db",
          "optional": false
        },
        "implements": [],
        "superClass": null
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
  "end": 260,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 28,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 27,
        "raw": "'./db'",
        "value": "./db"
      },
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
            "optional": false
          }
        }
      ]
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
        "start": 38,
        "end": 51,
        "decorators": [],
        "name": "someDecorator",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 52,
          "end": 58,
          "decorators": [],
          "name": "target",
          "optional": false
        }
      ]
    },
    {
      "type": "ClassDeclaration",
      "start": 83,
      "end": 241,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 112,
        "end": 241,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 118,
            "end": 131,
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
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 137,
            "end": 239,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 137,
              "end": 148,
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
              "start": 148,
              "end": 239,
              "async": false,
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
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 189,
                          "end": 193
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 194,
                          "end": 196,
                          "decorators": [],
                          "name": "db",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 199,
                        "end": 201,
                        "decorators": [],
                        "name": "db",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 211,
                    "end": 233,
                    "expression": {
                      "type": "CallExpression",
                      "start": 211,
                      "end": 232,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 211,
                        "end": 230,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 211,
                          "end": 218,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 211,
                            "end": 215
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 216,
                            "end": 218,
                            "decorators": [],
                            "name": "db",
                            "optional": false
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 219,
                          "end": 230,
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
          "start": 83,
          "end": 97,
          "expression": {
            "type": "Identifier",
            "start": 84,
            "end": 97,
            "decorators": [],
            "name": "someDecorator",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 111,
        "decorators": [],
        "name": "MyClass",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 242,
      "end": 259,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 250,
          "end": 257,
          "exported": {
            "type": "Identifier",
            "start": 250,
            "end": 257,
            "decorators": [],
            "name": "MyClass",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 250,
            "end": 257,
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
