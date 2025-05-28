__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 126,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 73,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 73,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 71,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 17,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 17,
              "end": 71,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 20,
                "end": 71,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 30,
                    "end": 44,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 34,
                        "end": 43,
                        "id": {
                          "type": "Identifier",
                          "start": 34,
                          "end": 43,
                          "decorators": [],
                          "name": "aVal",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 38,
                            "end": 43,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 40,
                              "end": 43,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 40,
                                "end": 43,
                                "left": {
                                  "type": "Identifier",
                                  "start": 40,
                                  "end": 41,
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 42,
                                  "end": 43,
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
                    "type": "ReturnStatement",
                    "start": 53,
                    "end": 65,
                    "argument": {
                      "type": "Identifier",
                      "start": 60,
                      "end": 64,
                      "decorators": [],
                      "name": "aVal",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 75,
      "end": 114,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 83,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 84,
        "end": 114,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 90,
            "end": 112,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 97,
              "end": 112,
              "id": {
                "type": "Identifier",
                "start": 107,
                "end": 108,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 109,
                "end": 112,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSExportAssignment",
      "start": 116,
      "end": 126,
      "expression": {
        "type": "Identifier",
        "start": 125,
        "end": 126,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
