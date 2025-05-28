__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 53,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 19,
        "value": "fs",
        "raw": "\"fs\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 20,
        "end": 53,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 26,
            "end": 51,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 33,
              "end": 51,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 39,
                "end": 48,
                "decorators": [],
                "name": "Something",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 49,
                "end": 51,
                "body": []
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
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 31,
  "end": 317,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 31,
      "end": 58,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 38,
        "end": 58,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 44,
            "end": 57,
            "id": {
              "type": "Identifier",
              "start": 44,
              "end": 53,
              "decorators": [],
              "name": "Something",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 56,
              "end": 57,
              "value": 2,
              "raw": "2"
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 108,
      "end": 317,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 115,
        "end": 317,
        "id": {
          "type": "Identifier",
          "start": 125,
          "end": 126,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 127,
          "end": 317,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 151,
              "end": 315,
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 158,
                "end": 315,
                "id": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 169,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "body": {
                  "type": "TSModuleBlock",
                  "start": 170,
                  "end": 315,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 180,
                      "end": 222,
                      "kind": "const",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 186,
                          "end": 221,
                          "id": {
                            "type": "Identifier",
                            "start": 186,
                            "end": 195,
                            "decorators": [],
                            "name": "Something",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "MemberExpression",
                            "start": 198,
                            "end": 221,
                            "object": {
                              "type": "CallExpression",
                              "start": 198,
                              "end": 211,
                              "callee": {
                                "type": "Identifier",
                                "start": 198,
                                "end": 205,
                                "decorators": [],
                                "name": "require",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "start": 206,
                                  "end": 210,
                                  "value": "fs",
                                  "raw": "\"fs\""
                                }
                              ],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 212,
                              "end": 221,
                              "decorators": [],
                              "name": "Something",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "definite": false
                        }
                      ],
                      "declare": false
                    },
                    {
                      "type": "VariableDeclaration",
                      "start": 231,
                      "end": 261,
                      "kind": "const",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 237,
                          "end": 260,
                          "id": {
                            "type": "Identifier",
                            "start": 237,
                            "end": 242,
                            "decorators": [],
                            "name": "thing",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "NewExpression",
                            "start": 245,
                            "end": 260,
                            "callee": {
                              "type": "Identifier",
                              "start": 249,
                              "end": 258,
                              "decorators": [],
                              "name": "Something",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": []
                          },
                          "definite": false
                        }
                      ],
                      "declare": false
                    },
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 292,
                      "end": 309,
                      "declaration": null,
                      "specifiers": [
                        {
                          "type": "ExportSpecifier",
                          "start": 301,
                          "end": 306,
                          "local": {
                            "type": "Identifier",
                            "start": 301,
                            "end": 306,
                            "decorators": [],
                            "name": "thing",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "exported": {
                            "type": "Identifier",
                            "start": 301,
                            "end": 306,
                            "decorators": [],
                            "name": "thing",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "exportKind": "value"
                        }
                      ],
                      "source": null,
                      "exportKind": "value",
                      "attributes": []
                    }
                  ]
                },
                "kind": "namespace",
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
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
