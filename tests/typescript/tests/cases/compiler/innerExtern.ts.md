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
        "start": 7,
        "end": 8
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
                "start": 37,
                "end": 39
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
                            "start": 61,
                            "end": 69
                          },
                          "init": null,
                          "definite": false,
                          "start": 61,
                          "end": 69
                        }
                      ],
                      "declare": false,
                      "start": 57,
                      "end": 70
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 50,
                    "end": 70
                  }
                ],
                "start": 40,
                "end": 76
              },
              "kind": "module",
              "declare": true,
              "global": false,
              "start": 22,
              "end": 76
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 15,
            "end": 76
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
                "start": 95,
                "end": 96
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
                        "start": 120,
                        "end": 121
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
                              "start": 136,
                              "end": 137
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
                                  "start": 140,
                                  "end": 142
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Elephant",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 143,
                                  "end": 151
                                },
                                "optional": false,
                                "computed": false,
                                "start": 140,
                                "end": 151
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "X",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 152,
                                "end": 153
                              },
                              "optional": false,
                              "computed": false,
                              "start": 140,
                              "end": 153
                            },
                            "computed": false,
                            "static": false,
                            "declare": false,
                            "override": false,
                            "optional": false,
                            "definite": false,
                            "readonly": false,
                            "accessibility": null,
                            "start": 136,
                            "end": 154
                          }
                        ],
                        "start": 122,
                        "end": 164
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 114,
                      "end": 164
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 107,
                    "end": 164
                  }
                ],
                "start": 97,
                "end": 170
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 88,
              "end": 170
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 81,
            "end": 170
          }
        ],
        "start": 9,
        "end": 172
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 172
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 174
}
```
