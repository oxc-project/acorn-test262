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
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 139,
                          "end": 144,
                          "id": {
                            "type": "Identifier",
                            "start": 139,
                            "end": 140,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
      "start": 155,
      "end": 166,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 159,
          "end": 165,
          "id": {
            "type": "Identifier",
            "start": 159,
            "end": 165,
            "name": "b",
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
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 164,
                    "end": 165,
                    "name": "B",
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
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 169,
            "end": 172,
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
