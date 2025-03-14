externModuleClobber.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 181,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 109,
      "body": {
        "type": "TSModuleBlock",
        "start": 18,
        "end": 109,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 21,
            "end": 46,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 28,
              "end": 46,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 43,
                "end": 46,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 34,
                "end": 42,
                "decorators": [],
                "name": "Position",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 49,
            "end": 107,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 56,
              "end": 107,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 65,
                "end": 107,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 69,
                    "end": 104,
                    "accessibility": "public",
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 76,
                      "end": 87,
                      "decorators": [],
                      "name": "getPosition",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 87,
                      "end": 104,
                      "async": false,
                      "body": null,
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 90,
                        "end": 103,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 92,
                          "end": 103,
                          "typeName": {
                            "type": "TSQualifiedName",
                            "start": 92,
                            "end": 103,
                            "left": {
                              "type": "Identifier",
                              "start": 92,
                              "end": 94,
                              "decorators": [],
                              "name": "EM",
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 95,
                              "end": 103,
                              "decorators": [],
                              "name": "Position",
                              "optional": false
                            }
                          }
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 62,
                "end": 64,
                "decorators": [],
                "name": "EC",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 17,
        "decorators": [],
        "name": "EM",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 111,
      "end": 129,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 128,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 128,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 116,
              "end": 128,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 117,
                "end": 128,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 117,
                  "end": 128,
                  "left": {
                    "type": "Identifier",
                    "start": 117,
                    "end": 119,
                    "decorators": [],
                    "name": "EM",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 128,
                    "decorators": [],
                    "name": "Position",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 130,
      "end": 157,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 134,
          "end": 156,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 142,
            "decorators": [],
            "name": "ec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 136,
              "end": 142,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 137,
                "end": 142,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 137,
                  "end": 142,
                  "left": {
                    "type": "Identifier",
                    "start": 137,
                    "end": 139,
                    "decorators": [],
                    "name": "EM",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 142,
                    "decorators": [],
                    "name": "EC",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 145,
            "end": 156,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 149,
              "end": 154,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 149,
                "end": 151,
                "decorators": [],
                "name": "EM",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 152,
                "end": 154,
                "decorators": [],
                "name": "EC",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 159,
      "end": 180,
      "expression": {
        "type": "AssignmentExpression",
        "start": 159,
        "end": 179,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 159,
          "end": 160,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 163,
          "end": 179,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 163,
            "end": 177,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 163,
              "end": 165,
              "decorators": [],
              "name": "ec",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 166,
              "end": 177,
              "decorators": [],
              "name": "getPosition",
              "optional": false
            }
          },
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
