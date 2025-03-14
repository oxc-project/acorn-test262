db.ts
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
  "sourceType": "module"
}
```
service.ts
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 17,
        "end": 23,
        "raw": "'./db'",
        "value": "./db"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 10,
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
            "start": 8,
            "end": 10,
            "decorators": [],
            "name": "db",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 25,
      "end": 78,
      "async": false,
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
        "start": 34,
        "end": 47,
        "decorators": [],
        "name": "someDecorator",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 48,
          "end": 54,
          "decorators": [],
          "name": "target",
          "optional": false
        }
      ]
    },
    {
      "type": "ClassDeclaration",
      "start": 79,
      "end": 209,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 108,
        "end": 209,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 114,
            "end": 121,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 114,
              "end": 116,
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
                  "decorators": [],
                  "name": "db",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 127,
            "end": 207,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 127,
              "end": 138,
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
              "start": 138,
              "end": 207,
              "async": false,
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
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 157,
                          "end": 161
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 162,
                          "end": 164,
                          "decorators": [],
                          "name": "db",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 167,
                        "end": 169,
                        "decorators": [],
                        "name": "db",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 179,
                    "end": 201,
                    "expression": {
                      "type": "CallExpression",
                      "start": 179,
                      "end": 200,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 179,
                        "end": 198,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 179,
                          "end": 186,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 179,
                            "end": 183
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 184,
                            "end": 186,
                            "decorators": [],
                            "name": "db",
                            "optional": false
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 187,
                          "end": 198,
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
                  "start": 139,
                  "end": 145,
                  "decorators": [],
                  "name": "db",
                  "optional": false,
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
                        "decorators": [],
                        "name": "db",
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
          "start": 79,
          "end": 93,
          "expression": {
            "type": "Identifier",
            "start": 80,
            "end": 93,
            "decorators": [],
            "name": "someDecorator",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 107,
        "decorators": [],
        "name": "MyClass",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 210,
      "end": 227,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 218,
          "end": 225,
          "exported": {
            "type": "Identifier",
            "start": 218,
            "end": 225,
            "decorators": [],
            "name": "MyClass",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 218,
            "end": 225,
            "decorators": [],
            "name": "MyClass",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
