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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 139,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 83,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 22,
              "end": 83,
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
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 29,
                "end": 32,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 30,
                    "end": 31,
                    "name": {
                      "type": "Identifier",
                      "start": 30,
                      "end": 31,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 33,
                "end": 83,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 43,
                    "end": 52,
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
                    "value": {
                      "type": "FunctionExpression",
                      "start": 46,
                      "end": 52,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 49,
                        "end": 52,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 61,
                    "end": 77,
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
                    "value": {
                      "type": "FunctionExpression",
                      "start": 71,
                      "end": 77,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 74,
                        "end": 77,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 88,
            "end": 137,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 95,
              "end": 137,
              "id": {
                "type": "Identifier",
                "start": 102,
                "end": 103,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 104,
                "end": 137,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 114,
                    "end": 131,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 121,
                      "end": 131,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 125,
                          "end": 130,
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
                            "value": 1,
                            "raw": "1"
                          },
                          "definite": false
                        }
                      ],
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 141,
      "end": 160,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 145,
          "end": 159,
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
                },
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
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 161,
      "end": 169,
      "expression": {
        "type": "CallExpression",
        "start": 161,
        "end": 168,
        "callee": {
          "type": "MemberExpression",
          "start": 161,
          "end": 166,
          "object": {
            "type": "Identifier",
            "start": 161,
            "end": 162,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 163,
            "end": 166,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
