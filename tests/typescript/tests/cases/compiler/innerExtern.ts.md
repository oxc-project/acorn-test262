__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 174,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 172,
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
                "decorators": [],
                "name": "BB",
                "optional": false,
                "typeAnnotation": null
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
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 61,
                          "end": 69,
                          "id": {
                            "type": "Identifier",
                            "start": 61,
                            "end": 69,
                            "decorators": [],
                            "name": "Elephant",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": null,
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
              "declare": true,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
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
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 120,
                        "end": 121,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "start": 122,
                        "end": 164,
                        "body": [
                          {
                            "type": "PropertyDefinition",
                            "start": 136,
                            "end": 154,
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "start": 136,
                              "end": 137,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": null,
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
                                  "decorators": [],
                                  "name": "BB",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 143,
                                  "end": 151,
                                  "decorators": [],
                                  "name": "Elephant",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 152,
                                "end": 153,
                                "decorators": [],
                                "name": "X",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "computed": false,
                            "static": false,
                            "declare": false,
                            "override": false,
                            "optional": false,
                            "definite": false,
                            "readonly": false,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
