__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 17,
        "name": "EM",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 18,
        "end": 109,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 21,
            "end": 46,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 28,
              "end": 46,
              "id": {
                "type": "Identifier",
                "start": 34,
                "end": 42,
                "name": "Position",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 43,
                "end": 46,
                "body": []
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 49,
            "end": 107,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 56,
              "end": 107,
              "id": {
                "type": "Identifier",
                "start": 62,
                "end": 64,
                "name": "EC",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 65,
                "end": 107,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 69,
                    "end": 104,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 76,
                      "end": 87,
                      "name": "getPosition",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "start": 87,
                      "end": 104,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": null,
                      "declare": false,
                      "typeParameters": null,
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
                              "name": "EM",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 95,
                              "end": 103,
                              "name": "Position",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          },
                          "typeArguments": null
                        }
                      }
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
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 128,
            "name": "x",
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
                    "name": "EM",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 128,
                    "name": "Position",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 142,
            "name": "ec",
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
                    "name": "EM",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 142,
                    "name": "EC",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 145,
            "end": 156,
            "callee": {
              "type": "MemberExpression",
              "start": 149,
              "end": 154,
              "object": {
                "type": "Identifier",
                "start": 149,
                "end": 151,
                "name": "EM",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 152,
                "end": 154,
                "name": "EC",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 163,
          "end": 179,
          "callee": {
            "type": "MemberExpression",
            "start": 163,
            "end": 177,
            "object": {
              "type": "Identifier",
              "start": 163,
              "end": 165,
              "name": "ec",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 166,
              "end": 177,
              "name": "getPosition",
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
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
