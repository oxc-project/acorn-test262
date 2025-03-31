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
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "id": {
                "type": "Identifier",
                "start": 28,
                "end": 29,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 33,
                "end": 83,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 43,
                    "end": 52,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 43,
                      "end": 46,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 46,
                      "end": 52,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 49,
                        "end": 52,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "decorators": [],
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 61,
                    "end": 77,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 68,
                      "end": 71,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 71,
                      "end": 77,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 74,
                        "end": 77,
                        "body": []
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
              "decorators": [],
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
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
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 125,
                          "end": 130,
                          "id": {
                            "type": "Identifier",
                            "start": 125,
                            "end": 126,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                      "kind": "var",
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "value"
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 145,
          "end": 159,
          "id": {
            "type": "Identifier",
            "start": 145,
            "end": 159,
            "name": "b",
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
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 150,
                    "end": 151,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 163,
            "end": 166,
            "name": "foo",
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
