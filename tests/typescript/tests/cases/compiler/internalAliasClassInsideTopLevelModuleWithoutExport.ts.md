__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 18
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
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 38,
                  "end": 39
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
                        "start": 50,
                        "end": 53
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 57,
                                "end": 63
                              },
                              "start": 55,
                              "end": 63
                            },
                            "start": 54,
                            "end": 63
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 86,
                                "end": 87
                              },
                              "start": 79,
                              "end": 88
                            }
                          ],
                          "start": 65,
                          "end": 98
                        },
                        "expression": false,
                        "start": 53,
                        "end": 98
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 50,
                      "end": 98
                    }
                  ],
                  "start": 40,
                  "end": 104
                },
                "abstract": false,
                "declare": false,
                "start": 32,
                "end": 104
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 25,
              "end": 104
            }
          ],
          "start": 19,
          "end": 106
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 106
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 106
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "xc",
        "optional": false,
        "typeAnnotation": null,
        "start": 115,
        "end": 117
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 120,
          "end": 121
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 122,
          "end": 123
        },
        "start": 120,
        "end": 123
      },
      "importKind": "value",
      "start": 108,
      "end": 124
    },
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
              "name": "cProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 136,
              "end": 141
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "xc",
                "optional": false,
                "typeAnnotation": null,
                "start": 148,
                "end": 150
              },
              "typeArguments": null,
              "arguments": [],
              "start": 144,
              "end": 152
            },
            "definite": false,
            "start": 136,
            "end": 152
          }
        ],
        "declare": false,
        "start": 132,
        "end": 153
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 125,
      "end": 153
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "cReturnVal",
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 168
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "cProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 176
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 177,
                "end": 180
              },
              "optional": false,
              "computed": false,
              "start": 171,
              "end": 180
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 181,
                "end": 183
              }
            ],
            "optional": false,
            "start": 171,
            "end": 184
          },
          "definite": false,
          "start": 158,
          "end": 184
        }
      ],
      "declare": false,
      "start": 154,
      "end": 185
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 185
}
```
