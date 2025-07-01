__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "fs",
        "raw": "\"fs\"",
        "start": 15,
        "end": 19
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
                "name": "Something",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 48
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 49,
                "end": 51
              },
              "abstract": false,
              "declare": false,
              "start": 33,
              "end": 51
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 26,
            "end": 51
          }
        ],
        "start": 20,
        "end": 53
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 53
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 53
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Something",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 53
            },
            "init": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 56,
              "end": 57
            },
            "definite": false,
            "start": 44,
            "end": 57
          }
        ],
        "declare": false,
        "start": 38,
        "end": 58
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 31,
      "end": 58
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 125,
          "end": 126
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
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 168,
                  "end": 169
                },
                "body": {
                  "type": "TSModuleBlock",
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "kind": "const",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Something",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 186,
                            "end": 195
                          },
                          "init": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "require",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 198,
                                "end": 205
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "fs",
                                  "raw": "\"fs\"",
                                  "start": 206,
                                  "end": 210
                                }
                              ],
                              "optional": false,
                              "start": 198,
                              "end": 211
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Something",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 212,
                              "end": 221
                            },
                            "optional": false,
                            "computed": false,
                            "start": 198,
                            "end": 221
                          },
                          "definite": false,
                          "start": 186,
                          "end": 221
                        }
                      ],
                      "declare": false,
                      "start": 180,
                      "end": 222
                    },
                    {
                      "type": "VariableDeclaration",
                      "kind": "const",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "thing",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 237,
                            "end": 242
                          },
                          "init": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Something",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 249,
                              "end": 258
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 245,
                            "end": 260
                          },
                          "definite": false,
                          "start": 237,
                          "end": 260
                        }
                      ],
                      "declare": false,
                      "start": 231,
                      "end": 261
                    },
                    {
                      "type": "ExportNamedDeclaration",
                      "declaration": null,
                      "specifiers": [
                        {
                          "type": "ExportSpecifier",
                          "local": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "thing",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 301,
                            "end": 306
                          },
                          "exported": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "thing",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 301,
                            "end": 306
                          },
                          "exportKind": "value",
                          "start": 301,
                          "end": 306
                        }
                      ],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 292,
                      "end": 309
                    }
                  ],
                  "start": 170,
                  "end": 315
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 158,
                "end": 315
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 151,
              "end": 315
            }
          ],
          "start": 127,
          "end": 317
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 115,
        "end": 317
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 108,
      "end": 317
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 31,
  "end": 317
}
```
