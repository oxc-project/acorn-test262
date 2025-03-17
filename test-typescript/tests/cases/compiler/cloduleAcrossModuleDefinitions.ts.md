__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 170,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 82,
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
        "end": 82,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 80,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 22,
              "end": 80,
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
                "start": 30,
                "end": 80,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 40,
                    "end": 49,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 43,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 43,
                      "end": 49,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 46,
                        "end": 49,
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
                    "start": 58,
                    "end": 74,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 65,
                      "end": 68,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "method",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 68,
                      "end": 74,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 71,
                        "end": 74,
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
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 84,
      "end": 150,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 92,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 93,
        "end": 150,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 99,
            "end": 148,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 106,
              "end": 148,
              "id": {
                "type": "Identifier",
                "start": 113,
                "end": 114,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 115,
                "end": 148,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 125,
                    "end": 142,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 132,
                      "end": 142,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 136,
                          "end": 141,
                          "id": {
                            "type": "Identifier",
                            "start": 136,
                            "end": 137,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "Literal",
                            "start": 140,
                            "end": 141,
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
      "start": 152,
      "end": 163,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 162,
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 162,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 157,
              "end": 162,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 159,
                "end": 162,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 159,
                  "end": 162,
                  "left": {
                    "type": "Identifier",
                    "start": 159,
                    "end": 160,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 161,
                    "end": 162,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
