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
  "end": 272,
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
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 18,
        "end": 33,
        "expression": {
          "type": "Literal",
          "start": 26,
          "end": 32,
          "raw": "'./db'",
          "value": "./db"
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 35,
      "end": 88,
      "async": false,
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
        "start": 44,
        "end": 57,
        "decorators": [],
        "name": "someDecorator",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 58,
          "end": 64,
          "decorators": [],
          "name": "target",
          "optional": false
        }
      ]
    },
    {
      "type": "ClassDeclaration",
      "start": 89,
      "end": 253,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 118,
        "end": 253,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 124,
            "end": 140,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 126,
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
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 137,
                    "end": 139,
                    "decorators": [],
                    "name": "db",
                    "optional": false
                  }
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 146,
            "end": 251,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 146,
              "end": 157,
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
              "start": 157,
              "end": 251,
              "async": false,
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
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 201,
                          "end": 205
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 206,
                          "end": 208,
                          "decorators": [],
                          "name": "db",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 211,
                        "end": 213,
                        "decorators": [],
                        "name": "db",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 223,
                    "end": 245,
                    "expression": {
                      "type": "CallExpression",
                      "start": 223,
                      "end": 244,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 223,
                        "end": 242,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 223,
                          "end": 230,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 223,
                            "end": 227
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 228,
                            "end": 230,
                            "decorators": [],
                            "name": "db",
                            "optional": false
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 231,
                          "end": 242,
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
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 171,
                          "end": 173,
                          "decorators": [],
                          "name": "db",
                          "optional": false
                        }
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
          "start": 89,
          "end": 103,
          "expression": {
            "type": "Identifier",
            "start": 90,
            "end": 103,
            "decorators": [],
            "name": "someDecorator",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 117,
        "decorators": [],
        "name": "MyClass",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 254,
      "end": 271,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 262,
          "end": 269,
          "exported": {
            "type": "Identifier",
            "start": 262,
            "end": 269,
            "decorators": [],
            "name": "MyClass",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 262,
            "end": 269,
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
