assignmentCompatability11.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 336,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 206,
      "body": {
        "type": "TSModuleBlock",
        "start": 17,
        "end": 206,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 23,
            "end": 96,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 30,
              "end": 96,
              "body": {
                "type": "TSInterfaceBody",
                "start": 76,
                "end": 96,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 78,
                    "end": 85,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 78,
                      "end": 81,
                      "decorators": [],
                      "name": "one",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 81,
                      "end": 84,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 83,
                        "end": 84,
                        "typeName": {
                          "type": "Identifier",
                          "start": 83,
                          "end": 84,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 86,
                    "end": 94,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 86,
                      "end": 89,
                      "decorators": [],
                      "name": "two",
                      "optional": false
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 90,
                      "end": 93,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 92,
                        "end": 93,
                        "typeName": {
                          "type": "Identifier",
                          "start": 92,
                          "end": 93,
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 40,
                "end": 70,
                "decorators": [],
                "name": "interfaceWithPublicAndOptional",
                "optional": false
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 70,
                "end": 75,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 71,
                    "end": 72,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 71,
                      "end": 72,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    },
                    "out": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 73,
                    "end": 74,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 74,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "EmptyStatement",
            "start": 96,
            "end": 97
          },
          {
            "type": "VariableDeclaration",
            "start": 99,
            "end": 168,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 103,
                "end": 167,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 154,
                  "decorators": [],
                  "name": "obj4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 107,
                    "end": 154,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 109,
                      "end": 154,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 139,
                        "end": 154,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 140,
                            "end": 146
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 147,
                            "end": 153
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 109,
                        "end": 139,
                        "decorators": [],
                        "name": "interfaceWithPublicAndOptional",
                        "optional": false
                      }
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 157,
                  "end": 167,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 159,
                      "end": 165,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 159,
                        "end": 162,
                        "decorators": [],
                        "name": "one",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 164,
                        "end": 165,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "EmptyStatement",
            "start": 168,
            "end": 169
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 174,
            "end": 204,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 181,
              "end": 204,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 185,
                  "end": 203,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 185,
                    "end": 196,
                    "decorators": [],
                    "name": "__val__obj4",
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 199,
                    "end": 203,
                    "decorators": [],
                    "name": "obj4",
                    "optional": false
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 16,
        "decorators": [],
        "name": "__test1__",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 207,
      "end": 291,
      "body": {
        "type": "TSModuleBlock",
        "start": 224,
        "end": 291,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 230,
            "end": 256,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 237,
              "end": 256,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 241,
                  "end": 255,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 241,
                    "end": 244,
                    "decorators": [],
                    "name": "obj",
                    "optional": false
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "start": 247,
                    "end": 255,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 248,
                        "end": 254,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 248,
                          "end": 251,
                          "decorators": [],
                          "name": "two",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 253,
                          "end": 254,
                          "raw": "1",
                          "value": 1
                        }
                      }
                    ]
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 261,
            "end": 289,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 268,
              "end": 289,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 272,
                  "end": 288,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 272,
                    "end": 282,
                    "decorators": [],
                    "name": "__val__obj",
                    "optional": false
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 285,
                    "end": 288,
                    "decorators": [],
                    "name": "obj",
                    "optional": false
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 214,
        "end": 223,
        "decorators": [],
        "name": "__test2__",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "ExpressionStatement",
      "start": 292,
      "end": 336,
      "expression": {
        "type": "AssignmentExpression",
        "start": 292,
        "end": 336,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 292,
          "end": 312,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 292,
            "end": 301,
            "decorators": [],
            "name": "__test2__",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 302,
            "end": 312,
            "decorators": [],
            "name": "__val__obj",
            "optional": false
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 315,
          "end": 336,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 315,
            "end": 324,
            "decorators": [],
            "name": "__test1__",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 325,
            "end": 336,
            "decorators": [],
            "name": "__val__obj4",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script"
}
```
