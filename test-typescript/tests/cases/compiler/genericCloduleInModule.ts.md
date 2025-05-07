__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 169,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 139,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 139,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 83,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 22,
              "end": 83,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 33,
                "end": 83,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 43,
                    "end": 52,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 43,
                      "end": 46,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 46,
                      "end": 52,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 49,
                        "end": 52,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 61,
                    "end": 77,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 68,
                      "end": 71,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": true,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 71,
                      "end": 77,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 74,
                        "end": 77,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 29,
                "end": 32,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 30,
                    "end": 31,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 30,
                      "end": 31,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 88,
            "end": 137,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 95,
              "end": 137,
              "body": {
                "type": "TSModuleBlock",
                "start": 104,
                "end": 137,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 114,
                    "end": 131,
                    "attributes": [],
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 121,
                      "end": 131,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 125,
                          "end": 130,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 125,
                            "end": 126,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "Literal",
                            "start": 129,
                            "end": 130,
                            "raw": "1",
                            "value": 1,
                            "regex": null,
                            "bigint": null
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
                "start": 102,
                "end": 103,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "module"
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
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 141,
      "end": 160,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 145,
          "end": 159,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 145,
            "end": 159,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 146,
              "end": 159,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 148,
                "end": 159,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 151,
                  "end": 159,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 152,
                      "end": 158
                    }
                  ]
                },
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 148,
                  "end": 151,
                  "left": {
                    "type": "Identifier",
                    "start": 148,
                    "end": 149,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 150,
                    "end": 151,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
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
      "type": "ExpressionStatement",
      "start": 161,
      "end": 169,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 161,
        "end": 168,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 161,
          "end": 166,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 161,
            "end": 162,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 163,
            "end": 166,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
