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
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 20,
        "end": 53,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 26,
            "end": 51,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 33,
              "end": 51,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 49,
                "end": 51,
                "body": []
              },
              "declare": false,
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
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 19,
        "raw": "\"fs\"",
        "value": "fs",
        "regex": null,
        "bigint": null
      }
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
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 38,
        "end": 58,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 44,
            "end": 57,
            "definite": false,
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
              "raw": "2",
              "value": 2,
              "regex": null,
              "bigint": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 108,
      "end": 317,
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 115,
        "end": 317,
        "body": {
          "type": "TSModuleBlock",
          "start": 127,
          "end": 317,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 151,
              "end": 315,
              "attributes": [],
              "declaration": {
                "type": "TSModuleDeclaration",
                "start": 158,
                "end": 315,
                "body": {
                  "type": "TSModuleBlock",
                  "start": 170,
                  "end": 315,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 180,
                      "end": 222,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 186,
                          "end": 221,
                          "definite": false,
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
                            "computed": false,
                            "object": {
                              "type": "CallExpression",
                              "start": 198,
                              "end": 211,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "start": 206,
                                  "end": 210,
                                  "raw": "\"fs\"",
                                  "value": "fs",
                                  "regex": null,
                                  "bigint": null
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "start": 198,
                                "end": 205,
                                "decorators": [],
                                "name": "require",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 212,
                              "end": 221,
                              "decorators": [],
                              "name": "Something",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "const"
                    },
                    {
                      "type": "VariableDeclaration",
                      "start": 231,
                      "end": 261,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 237,
                          "end": 260,
                          "definite": false,
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
                            "arguments": [],
                            "callee": {
                              "type": "Identifier",
                              "start": 249,
                              "end": 258,
                              "decorators": [],
                              "name": "Something",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "const"
                    },
                    {
                      "type": "ExportNamedDeclaration",
                      "start": 292,
                      "end": 309,
                      "attributes": [],
                      "declaration": null,
                      "exportKind": "value",
                      "source": null,
                      "specifiers": [
                        {
                          "type": "ExportSpecifier",
                          "start": 301,
                          "end": 306,
                          "exported": {
                            "type": "Identifier",
                            "start": 301,
                            "end": 306,
                            "decorators": [],
                            "name": "thing",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "exportKind": "value",
                          "local": {
                            "type": "Identifier",
                            "start": 301,
                            "end": 306,
                            "decorators": [],
                            "name": "thing",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    }
                  ]
                },
                "declare": false,
                "global": false,
                "id": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 169,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "namespace"
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
          "start": 125,
          "end": 126,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "kind": "namespace"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
