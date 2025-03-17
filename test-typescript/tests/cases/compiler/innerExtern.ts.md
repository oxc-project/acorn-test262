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
      "end": 172,
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
        "end": 172,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 76,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 22,
              "end": 76,
              "id": {
                "type": "Identifier",
                "start": 37,
                "end": 39,
                "name": "BB",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 40,
                "end": 76,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 50,
                    "end": 70,
                    "declaration": {
                      "type": "VariableDeclaration",
                      "start": 57,
                      "end": 70,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 61,
                          "end": 69,
                          "id": {
                            "type": "Identifier",
                            "start": 61,
                            "end": 69,
                            "name": "Elephant",
                            "typeAnnotation": null,
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
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "value"
                  }
                ]
              },
              "kind": "module",
              "declare": true,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 81,
            "end": 170,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 88,
              "end": 170,
              "id": {
                "type": "Identifier",
                "start": 95,
                "end": 96,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 97,
                "end": 170,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 107,
                    "end": 164,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 114,
                      "end": 164,
                      "id": {
                        "type": "Identifier",
                        "start": 120,
                        "end": 121,
                        "name": "C",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "superClass": null,
                      "body": {
                        "type": "ClassBody",
                        "start": 122,
                        "end": 164,
                        "body": [
                          {
                            "type": "PropertyDefinition",
                            "start": 136,
                            "end": 154,
                            "static": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 136,
                              "end": 137,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "MemberExpression",
                              "start": 140,
                              "end": 153,
                              "object": {
                                "type": "MemberExpression",
                                "start": 140,
                                "end": 151,
                                "object": {
                                  "type": "Identifier",
                                  "start": 140,
                                  "end": 142,
                                  "name": "BB",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 143,
                                  "end": 151,
                                  "name": "Elephant",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 152,
                                "end": 153,
                                "name": "X",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "decorators": [],
                            "declare": false,
                            "override": false,
                            "optional": false,
                            "definite": false,
                            "readonly": false,
                            "typeAnnotation": null,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
