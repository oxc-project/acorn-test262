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
          "start": 14,
          "end": 15
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
                  "start": 35,
                  "end": 36
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
                        "start": 47,
                        "end": 50
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
                                "start": 54,
                                "end": 60
                              },
                              "start": 52,
                              "end": 60
                            },
                            "start": 51,
                            "end": 60
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
                                "start": 83,
                                "end": 84
                              },
                              "start": 76,
                              "end": 85
                            }
                          ],
                          "start": 62,
                          "end": 95
                        },
                        "expression": false,
                        "start": 50,
                        "end": 95
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 47,
                      "end": 95
                    }
                  ],
                  "start": 37,
                  "end": 101
                },
                "abstract": false,
                "declare": false,
                "start": 29,
                "end": 101
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 22,
              "end": 101
            }
          ],
          "start": 16,
          "end": 103
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 103
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 103
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "xc",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 114
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 117,
          "end": 118
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 119,
          "end": 120
        },
        "start": 117,
        "end": 120
      },
      "importKind": "value",
      "start": 105,
      "end": 121
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
              "start": 133,
              "end": 138
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "xc",
                "optional": false,
                "typeAnnotation": null,
                "start": 145,
                "end": 147
              },
              "typeArguments": null,
              "arguments": [],
              "start": 141,
              "end": 149
            },
            "definite": false,
            "start": 133,
            "end": 149
          }
        ],
        "declare": false,
        "start": 129,
        "end": 150
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 122,
      "end": 150
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
            "start": 155,
            "end": 165
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
                "start": 168,
                "end": 173
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 174,
                "end": 177
              },
              "optional": false,
              "computed": false,
              "start": 168,
              "end": 177
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 178,
                "end": 180
              }
            ],
            "optional": false,
            "start": 168,
            "end": 181
          },
          "definite": false,
          "start": 155,
          "end": 181
        }
      ],
      "declare": false,
      "start": 151,
      "end": 182
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 182
}
```
