__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "BB",
                "optional": false,
                "typeAnnotation": null,
                "start": 43,
                "end": 45
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Elephant",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 67,
                            "end": 75
                          },
                          "init": null,
                          "definite": false,
                          "start": 67,
                          "end": 75
                        }
                      ],
                      "declare": false,
                      "start": 63,
                      "end": 76
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 56,
                    "end": 76
                  }
                ],
                "start": 46,
                "end": 82
              },
              "kind": "namespace",
              "declare": true,
              "global": false,
              "start": 25,
              "end": 82
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 18,
            "end": 82
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 104,
                "end": 105
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "ClassDeclaration",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 129,
                        "end": 130
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [
                          {
                            "type": "PropertyDefinition",
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 145,
                              "end": 146
                            },
                            "typeAnnotation": null,
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "BB",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 149,
                                  "end": 151
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Elephant",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 152,
                                  "end": 160
                                },
                                "optional": false,
                                "computed": false,
                                "start": 149,
                                "end": 160
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "X",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 161,
                                "end": 162
                              },
                              "optional": false,
                              "computed": false,
                              "start": 149,
                              "end": 162
                            },
                            "computed": false,
                            "static": false,
                            "declare": false,
                            "override": false,
                            "optional": false,
                            "definite": false,
                            "readonly": false,
                            "accessibility": null,
                            "start": 145,
                            "end": 163
                          }
                        ],
                        "start": 131,
                        "end": 173
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 123,
                      "end": 173
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 116,
                    "end": 173
                  }
                ],
                "start": 106,
                "end": 179
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 94,
              "end": 179
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 87,
            "end": 179
          }
        ],
        "start": 12,
        "end": 181
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 181
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 183
}
```
