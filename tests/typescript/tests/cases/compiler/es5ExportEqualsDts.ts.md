__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 17
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "aVal",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 40,
                                  "end": 41
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "B",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 42,
                                  "end": 43
                                },
                                "start": 40,
                                "end": 43
                              },
                              "typeArguments": null,
                              "start": 40,
                              "end": 43
                            },
                            "start": 38,
                            "end": 43
                          },
                          "start": 34,
                          "end": 43
                        },
                        "init": null,
                        "definite": false,
                        "start": 34,
                        "end": 43
                      }
                    ],
                    "declare": false,
                    "start": 30,
                    "end": 44
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "aVal",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 60,
                      "end": 64
                    },
                    "start": 53,
                    "end": 65
                  }
                ],
                "start": 20,
                "end": 71
              },
              "expression": false,
              "start": 17,
              "end": 71
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 14,
            "end": 71
          }
        ],
        "start": 8,
        "end": 73
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 73
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 85,
        "end": 86
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 110,
                "end": 111
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 112,
                "end": 115
              },
              "declare": false,
              "start": 100,
              "end": 115
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 93,
            "end": 115
          }
        ],
        "start": 87,
        "end": 117
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 75,
      "end": 117
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 128,
        "end": 129
      },
      "start": 119,
      "end": 129
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 129
}
```
