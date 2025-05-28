__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 182,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 103,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 103,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 16,
          "end": 103,
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "start": 22,
              "end": 101,
              "declaration": {
                "type": "ClassDeclaration",
                "start": 29,
                "end": 101,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 36,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "start": 37,
                  "end": 101,
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "start": 47,
                      "end": 95,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "start": 47,
                        "end": 50,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "start": 50,
                        "end": 95,
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 51,
                            "end": 60,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 52,
                              "end": 60,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 54,
                                "end": 60
                              }
                            }
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "start": 62,
                          "end": 95,
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "start": 76,
                              "end": 85,
                              "argument": {
                                "type": "Identifier",
                                "start": 83,
                                "end": 84,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "expression": false
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
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
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 105,
      "end": 121,
      "id": {
        "type": "Identifier",
        "start": 112,
        "end": 114,
        "decorators": [],
        "name": "xc",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 117,
        "end": 120,
        "left": {
          "type": "Identifier",
          "start": 117,
          "end": 118,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 119,
          "end": 120,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 122,
      "end": 150,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 129,
        "end": 150,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 133,
            "end": 149,
            "id": {
              "type": "Identifier",
              "start": 133,
              "end": 138,
              "decorators": [],
              "name": "cProp",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "NewExpression",
              "start": 141,
              "end": 149,
              "callee": {
                "type": "Identifier",
                "start": 145,
                "end": 147,
                "decorators": [],
                "name": "xc",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 151,
      "end": 182,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 155,
          "end": 181,
          "id": {
            "type": "Identifier",
            "start": 155,
            "end": 165,
            "decorators": [],
            "name": "cReturnVal",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 168,
            "end": 181,
            "callee": {
              "type": "MemberExpression",
              "start": 168,
              "end": 177,
              "object": {
                "type": "Identifier",
                "start": 168,
                "end": 173,
                "decorators": [],
                "name": "cProp",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 174,
                "end": 177,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 178,
                "end": 180,
                "value": 10,
                "raw": "10"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
