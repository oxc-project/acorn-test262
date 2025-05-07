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
      "end": 82,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 82,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 80,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 22,
              "end": 80,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 30,
                "end": 80,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 40,
                    "end": 49,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 43,
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
                      "start": 43,
                      "end": 49,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 46,
                        "end": 49,
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
                    "start": 58,
                    "end": 74,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 65,
                      "end": 68,
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
                      "start": 68,
                      "end": 74,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 71,
                        "end": 74,
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
              "typeParameters": null
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
      "type": "TSModuleDeclaration",
      "start": 84,
      "end": 150,
      "body": {
        "type": "TSModuleBlock",
        "start": 93,
        "end": 150,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 99,
            "end": 148,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 106,
              "end": 148,
              "body": {
                "type": "TSModuleBlock",
                "start": 115,
                "end": 148,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 125,
                    "end": 142,
                    "attributes": [],
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 132,
                      "end": 142,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 136,
                          "end": 141,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 136,
                            "end": 137,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "Literal",
                            "start": 140,
                            "end": 141,
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
                "start": 113,
                "end": 114,
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
        "start": 91,
        "end": 92,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 152,
      "end": 163,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 162,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 162,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 157,
              "end": 162,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 159,
                "end": 162,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 159,
                  "end": 162,
                  "left": {
                    "type": "Identifier",
                    "start": 159,
                    "end": 160,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 161,
                    "end": 162,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
