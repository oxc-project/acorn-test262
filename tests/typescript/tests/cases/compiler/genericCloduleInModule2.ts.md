__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 175,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 85,
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
        "end": 85,
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
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 87,
      "end": 153,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 95,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 96,
        "end": 153,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 102,
            "end": 151,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 109,
              "end": 151,
              "id": {
                "type": "Identifier",
                "start": 116,
                "end": 117,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 118,
                "end": 151,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 128,
                    "end": 145,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 135,
                      "end": 145,
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 139,
                          "end": 144,
                          "id": {
                            "type": "Identifier",
                            "start": 139,
                            "end": 140,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "Literal",
                            "start": 143,
                            "end": 144,
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
      "start": 155,
      "end": 166,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 159,
          "end": 165,
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 165,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 160,
              "end": 165,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 162,
                "end": 165,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 162,
                  "end": 165,
                  "left": {
                    "type": "Identifier",
                    "start": 162,
                    "end": 163,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 164,
                    "end": 165,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
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
      "start": 167,
      "end": 175,
      "expression": {
        "type": "CallExpression",
        "start": 167,
        "end": 174,
        "callee": {
          "type": "MemberExpression",
          "start": 167,
          "end": 172,
          "object": {
            "type": "Identifier",
            "start": 167,
            "end": 168,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 169,
            "end": 172,
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
